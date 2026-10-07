(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (typeof PROJECTS === 'undefined') return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function embedUrl(url) {
    if (!url) return '';
    var m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
    if (m) return 'https://www.youtube.com/embed/' + m[1] + '?autoplay=1&rel=0';
    m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (m) return 'https://player.vimeo.com/video/' + m[1] + '?autoplay=1';
    m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
    if (m) return 'https://drive.google.com/file/d/' + m[1] + '/preview';
    return '';
  }

  function ratio(format) {
    return format === '9:16' ? '4 / 5' : '16 / 9';
  }

  function cardHTML(p, i, tall) {
    var img = p.poster
      ? '<img src="' + esc(p.poster) + '" alt="' + esc(p.title) + '" loading="lazy">'
      : '<span class="ph">[POSTER]</span>';
    return '<button type="button" class="card" data-i="' + i + '">' +
      '<div class="thumb" style="aspect-ratio:' + (tall ? '4 / 5' : '16 / 9') + '">' + img +
      '<span class="badge" style="top:14px;left:14px">' + esc(p.format) + '</span>' +
      '<span class="badge" style="top:14px;right:14px;background:transparent;color:#C9C6BF">' + esc(p.year) + '</span>' +
      '</div>' +
      '<div class="card-meta"><div class="card-title">' + esc(p.title) + '</div>' +
      '<div class="mono dim" style="font-size:12px;white-space:nowrap">' + esc(CATEGORIES[p.category] || '') + '</div></div>' +
      '</button>';
  }

  // modal
  var modal = document.getElementById('modal');
  function openProject(i) {
    var p = PROJECTS[i];
    if (!p || !modal) return;
    var emb = embedUrl(p.video);
    var player = emb
      ? '<iframe src="' + esc(emb) + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="' + esc(p.title) + '"></iframe>'
      : (p.video
          ? '<a class="btn btn-primary" href="' + esc(p.video) + '" target="_blank" rel="noopener">Watch</a>'
          : (p.poster ? '<img src="' + esc(p.poster) + '" alt="">' : '<span class="ph">[VIDEO]</span>'));
    modal.querySelector('.modal-media').innerHTML = player;
    modal.querySelector('.modal-media').style.aspectRatio = p.format === '9:16' ? '9 / 16' : '16 / 9';
    modal.querySelector('.modal-media').style.maxHeight = p.format === '9:16' ? '70vh' : '';
    modal.querySelector('.m-cat').textContent = (CATEGORIES[p.category] || '') + ' · ' + p.year;
    modal.querySelector('.m-title').textContent = p.title;
    modal.querySelector('.m-desc').textContent = p.description || '';
    modal.querySelector('.m-meta').textContent = 'Format ' + p.format + ' · Client ' + p.client + ' · Tools ' + p.tools;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.querySelector('.modal-media').innerHTML = '';
    document.body.style.overflow = '';
  }
  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    modal.querySelector('.close').addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  }
  document.addEventListener('click', function (e) {
    var c = e.target.closest('.card[data-i]');
    if (c) openProject(+c.getAttribute('data-i'));
  });

  // home: selected work
  var sel = document.getElementById('selected-work');
  if (sel) {
    sel.innerHTML = PROJECTS.map(function (p, i) { return p.featured ? cardHTML(p, i, false) : ''; }).join('');
  }

  // portfolio
  var grid = document.getElementById('portfolio-grid');
  var filters = document.getElementById('filters');
  var count = document.getElementById('count');
  if (grid && filters) {
    var current = 'all';
    var cats = [['all', 'All']].concat(Object.keys(CATEGORIES).map(function (k) { return [k, CATEGORIES[k]]; }));
    filters.innerHTML = cats.map(function (c) {
      return '<button type="button" class="pill" data-f="' + c[0] + '" aria-pressed="' + (c[0] === 'all') + '">' + c[1] + '</button>';
    }).join('');
    function render() {
      var n = 0;
      grid.innerHTML = PROJECTS.map(function (p, i) {
        if (current !== 'all' && p.category !== current) return '';
        if (current === 'all' && p.showcase) return '';
        n++;
        return cardHTML(p, i, true);
      }).join('');
      count.textContent = n + (n === 1 ? ' project' : ' projects');
    }
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.pill');
      if (!b) return;
      current = b.getAttribute('data-f');
      filters.querySelectorAll('.pill').forEach(function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
      render();
    });
    render();
  }
})();

// YouTube facade: show our own poster + play button, load the player only on click
(function () {
  function ytThumb(img, id) {
    var tried = ['maxresdefault', 'sddefault', 'hqdefault'];
    var i = 0;
    img.src = 'https://i.ytimg.com/vi/' + id + '/' + tried[i] + '.jpg';
    img.addEventListener('load', function () {
      // YouTube returns a 120x90 grey placeholder when a size is missing
      if (img.naturalWidth <= 120 && i < tried.length - 1) { i++; img.src = 'https://i.ytimg.com/vi/' + id + '/' + tried[i] + '.jpg'; }
    });
    img.addEventListener('error', function () {
      if (i < tried.length - 1) { i++; img.src = 'https://i.ytimg.com/vi/' + id + '/' + tried[i] + '.jpg'; }
    });
  }
  document.querySelectorAll('.yt[data-id], .yt[data-src]').forEach(function (b) {
    var img = b.querySelector('img');
    if (img && b.getAttribute('data-id')) ytThumb(img, b.getAttribute('data-id'));
    b.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = b.getAttribute('data-src') || ('https://www.youtube-nocookie.com/embed/' + b.getAttribute('data-id') + '?autoplay=1&rel=0&playsinline=1');
      f.title = b.getAttribute('aria-label') || 'Video';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen = true;
      f.className = 'yt-frame';
      b.replaceWith(f);
    });
  });
})();

// Vertical Google Drive videos: open in a large lightbox (Drive's player breaks in narrow cards)
(function () {
  var box = document.createElement('div');
  box.className = 'vbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<div class="vbox-inner"><button type="button" class="close vbox-close" aria-label="Close">×</button><div class="vbox-frame"></div></div>';
  document.body.appendChild(box);
  var frame = box.querySelector('.vbox-frame');
  function close() { box.classList.remove('open'); frame.innerHTML = ''; document.body.style.overflow = ''; }
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  box.querySelector('.vbox-close').addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && box.classList.contains('open')) close(); });

  document.querySelectorAll('.short-video .yt[data-src], .film-video .yt[data-src], .exp-video .yt[data-src]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopImmediatePropagation();
      var f = document.createElement('iframe');
      f.src = b.getAttribute('data-src');
      f.title = b.getAttribute('aria-label') || 'Video';
      f.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
      f.allowFullscreen = true;
      frame.style.aspectRatio = b.getAttribute('data-ratio') || '9 / 16';
      box.classList.toggle('wide', !!b.getAttribute('data-ratio'));
      frame.innerHTML = '';
      frame.appendChild(f);
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    }, true);
  });
})();
