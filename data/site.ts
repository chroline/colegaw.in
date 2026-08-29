export const person = {
  name: "Cole Gawin",
  role: "Co-founder & CTO at Lemma",
  email: "cole@uselemma.ai",
  headline: "Building technologies to augment human intelligence.",
  tagline: "Co-founder and CTO of Lemma, building production monitoring for AI agents.",
};

/**
 * Where I've been, by airport code. Each entry centres its own hover map; `zoom` is
 * per-stop so a village, a campus, and a city each frame sensibly.
 */
export const route = [
  { code: "ORD", label: "Deerfield, Illinois", lat: 42.1711, lon: -87.8445, zoom: 10 },
  {
    code: "LAX",
    label: "University of Southern California",
    lat: 34.0224,
    lon: -118.2851,
    zoom: 13,
  },
  { code: "SFO", label: "San Francisco, California", lat: 37.7749, lon: -122.4194, zoom: 10 },
];

/** URLs linked from `data/content/intro.mdx`, listed so their previews get prefetched. */
export const introLinks = [
  "https://uselemma.ai",
  "https://x.com/zjearbear/status/2087948196320567636",
  "https://usc.edu",
  "https://isi.edu",
  "https://colegawin.substack.com",
];

/**
 * Corrections for sites that publish wrong or missing OG tags, merged over what we scrape.
 * Set `image: null` to suppress a misleading image; a string can be a remote URL or a
 * local path under `public/`.
 */
export const previewOverrides: Record<
  string,
  { title?: string; description?: string; image?: string | null; favicon?: string }
> = {
  // usc.edu's homepage serves a random news story ("To Your Health") as its og:title
  // and og:image instead of anything about the university.
  "https://usc.edu": {
    title: "University of Southern California",
    description: "One of the world's leading private research universities, in Los Angeles.",
    image: "/img/previews/usc.png",
    // usc.edu only ships the gold "USC" wordmark tile as an icon; the shield is the mark
    // that reads as USC at 16px.
    favicon: "/img/favicons/usc.png",
  },
  // Lemma's SVG favicon flips to near-white under prefers-color-scheme: dark, which an
  // <img> resolves against the visitor's OS rather than this page's light background.
  "https://uselemma.ai": {
    favicon: "/img/favicons/lemma.svg",
  },
  "https://x.com/zjearbear/status/2087948196320567636": {
    favicon: "/img/favicons/x.svg",
  },
};

export const interests = [
  {
    title: "Whether a model that answers correctly understands anything at all",
    description:
      "Behavior alone may not distinguish genuine understanding from a system that has learned the right surface regularities. I’m interested in what evidence could make that distinction meaningful.",
  },
  {
    title: "Mechanistic interpretability, and neurosymbolic approaches to reasoning",
    description:
      "I want to understand how learned representations support reasoning, and whether explicit symbolic structure can make those processes more legible and compositional.",
  },
  {
    title: "Cognitive architectures, and how abstraction gets learned",
    description:
      "Abstraction lets a system reuse structure beyond the examples that taught it. I’m interested in the architectures and learning dynamics that make those representations emerge.",
  },
  {
    title: "Philosophy of mind, free will, and hard incompatibilism",
    description:
      "I’m interested in whether agency and moral responsibility survive a fully causal account of the mind, and what follows if they do not.",
  },
];

type Entry = {
  title: string;
  href: string;
  meta?: string;
  note?: string;
};

export const research: Entry[] = [
  {
    title: "Relational Schemata in BERT Are Inducible, Not Emergent",
    href: "https://arxiv.org/abs/2506.11485",
  },
  {
    title: "Navigating Semantic Relations: Challenges for Language Models in Abstract Common-Sense Reasoning",
    href: "https://arxiv.org/abs/2502.14086",
  },
  {
    title: "Exploring a Cognitive Architecture for Learning Arithmetic Equations",
    href: "https://arxiv.org/abs/2405.04550",
  },
];

export const writing: Entry[] = [
  {
    title: "You've Been Vibe Coding Wrong",
    href: "https://colegawin.substack.com/p/youve-been-vibe-coding-wrong",
  },
  {
    title: "On Stochastic Parrots: Do LLMs Understand What They Say?",
    href: "https://colegawin.substack.com/p/on-stochastic-parrots-do-llms-understand",
  },
  {
    title: "What it Means to \u201CUnderstand\u201D Language",
    href: "https://colegawin.substack.com/p/what-it-means-to-understand-language",
  },
  {
    title: "How Large Language Models \u201CLearn\u201D Language",
    href: "https://colegawin.substack.com/p/how-large-language-models-learn-language",
  },
];

export const experience: Entry[] = [
  {
    title: "USC Information Sciences Institute",
    note: "Researcher",
    href: "https://isi.edu",
    meta: "May 2024 — Aug 2025",
  },
  { title: "Forus", note: "Applied AI Engineer", href: "https://forus.com", meta: "May 2025 — Aug 2025" },
  {
    title: "LavaLab @ USC",
    note: "Director of Dev / President",
    href: "https://usclavalab.org",
    meta: "Aug 2024 — Sep 2025",
  },
  {
    title: "Nora Music",
    note: "Head of Product & Engineering",
    href: "https://noramusic.com",
    meta: "Jan 2024 — Aug 2024",
  },
  {
    title: "Class Companion",
    note: "Founding ML Engineer",
    href: "https://classcompanion.com",
    meta: "Aug 2023 — Dec 2023",
  },
];

export const elsewhere = [
  { label: "Email", icon: "email", href: "mailto:cole@uselemma.ai" },
  { label: "X", icon: "twitter", href: "https://x.com/colegawin_" },
  { label: "GitHub", icon: "github", href: "https://github.com/chroline" },
  { label: "LinkedIn", icon: "linkedin", href: "https://linkedin.com/in/colegawin" },
  { label: "Substack", icon: "substack", href: "https://colegawin.substack.com" },
] as const;
