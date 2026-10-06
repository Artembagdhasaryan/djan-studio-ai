/*
  =========================================================
  AI PORTFOLIO — edit this list to add / change projects
  =========================================================
  title       — project name
  category    — one of: film, series, animation, commercial, music, social
  format      — "16:9", "9:16", "2.39:1" ...
  year        — "2026"
  client      — client name or "Original"
  tools       — e.g. "Seedance 2.0, Higgsfield"
  description — 1–2 sentences
  poster      — image file in the /images folder (e.g. "images/david.jpg") or a full image URL
  video       — YouTube or Vimeo link (e.g. "https://www.youtube.com/watch?v=XXXX")
  featured    — true = shown on the home page
  To add a project: copy one { ... }, block, paste it, change the values.
*/
const PROJECTS = [
  {
    title: "David of Sassoun",
    category: "series",
    format: "16:9",
    year: "2026",
    client: "Original",
    tools: "[AI TOOLS]",
    description: "An AI-generated series based on the Armenian national epic.",
    poster: "",
    video: "",
    featured: true
  },
  {
    title: "[Animated feature]",
    category: "animation",
    format: "16:9",
    year: "2026",
    client: "Original",
    tools: "[AI TOOLS]",
    description: "[Short description]",
    poster: "",
    video: "",
    featured: true
  },
  {
    title: "[Vertical drama — Season 1]",
    category: "series",
    format: "9:16",
    year: "[YEAR]",
    client: "[CLIENT]",
    tools: "[AI TOOLS]",
    description: "[Short description]",
    poster: "",
    video: "",
    featured: true
  },
  {
    title: "[AI commercial — brand]",
    category: "commercial",
    format: "16:9",
    year: "[YEAR]",
    client: "[CLIENT]",
    tools: "[AI TOOLS]",
    description: "[Short description]",
    poster: "",
    video: "",
    featured: true
  },
  {
    title: "[AI short film]",
    category: "film",
    format: "2.39:1",
    year: "[YEAR]",
    client: "Original",
    tools: "[AI TOOLS]",
    description: "[Short description]",
    poster: "",
    video: "",
    featured: false
  },
  {
    title: "[Artist — music video]",
    category: "music",
    format: "16:9",
    year: "[YEAR]",
    client: "[ARTIST]",
    tools: "[AI TOOLS]",
    description: "[Short description]",
    poster: "",
    video: "",
    featured: false
  },
  {
    title: "AI Studio First — reels",
    category: "social",
    format: "9:16",
    year: "[YEAR]",
    client: "Original",
    tools: "[AI TOOLS]",
    description: "Short-form AI content for social media.",
    poster: "",
    video: "https://www.instagram.com/aistudio.first/",
    featured: false
  },
  {
    title: "[AI dubbing project]",
    category: "social",
    format: "16:9",
    year: "[YEAR]",
    client: "[CLIENT]",
    tools: "[AI TOOLS]",
    description: "[Short description]",
    poster: "",
    video: "",
    featured: false
  }
];

const CATEGORIES = {
  film: "AI Films",
  series: "AI Series",
  animation: "Animation",
  commercial: "AI Commercials",
  music: "Music Videos",
  social: "Social & Dubbing"
};
