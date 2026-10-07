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
    title: "Spartacus",
    category: "film", format: "16:9", year: "2026", client: "Original", tools: "Generative AI",
    description: "Full-length AI feature film. Premiered on the rooftop of the Aram Khachaturian Concert Hall with a live orchestra.",
    poster: "https://i.ytimg.com/vi/Z5Hj4WxXmdc/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=Z5Hj4WxXmdc", featured: false, showcase: true
  },
  {
    title: "Romeo and Juliet: Married to My Family's Enemy",
    category: "series", format: "9:16", year: "2026", client: "Original", tools: "Generative AI",
    description: "Mafia romance. Shakespeare's classic reborn among rival Italian crime families.",
    poster: "https://i.ytimg.com/vi/Y0DToFuEnzE/hqdefault.jpg",
    video: "https://www.youtube.com/shorts/Y0DToFuEnzE", featured: false, showcase: true
  },
  {
    title: "Jane Eyre: The Nanny and the Billionaire's Secret Wife",
    category: "series", format: "9:16", year: "2026", client: "Original", tools: "Generative AI",
    description: "Gothic romance. Charlotte Brontë's classic, moved to modern Yorkshire.",
    poster: "https://i.ytimg.com/vi/4iLmePyCqaY/hqdefault.jpg",
    video: "https://www.youtube.com/shorts/4iLmePyCqaY", featured: false, showcase: true
  },
  {
    title: "Pride and Prejudice: The CEO's Secret Heir",
    category: "series", format: "9:16", year: "2026", client: "Original", tools: "Generative AI",
    description: "Billionaire romance, 55 episodes. Jane Austen's classic, reimagined for today.",
    poster: "https://i.ytimg.com/vi/J49FSV-UboY/hqdefault.jpg",
    video: "https://www.youtube.com/shorts/J49FSV-UboY", featured: false, showcase: true
  },
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
