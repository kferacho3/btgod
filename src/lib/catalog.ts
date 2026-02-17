export type BeatCategory =
  | "trap"
  | "drill"
  | "rnb"
  | "afro"
  | "cinematic"
  | "club";

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: BeatCategory;
  collection: string;
  badge: string;
  price: number;
  image: string;
  producer: string;
  bpm: number;
  musicalKey: string;
  duration: string;
  stems: number;
  sonicNotes: string;
  arrangement: string;
  licensingHint: string;
  usageTags: string[];
};

export type Collection = {
  id: string;
  title: string;
  drop: string;
  description: string;
  mood: string;
  image: string;
  trackCount: number;
  releaseWindow: string;
};

export type LookbookFrame = {
  id: string;
  title: string;
  image: string;
  prompt: string;
};

export type CartPreviewItem = {
  productSlug: string;
  quantity: number;
  size: "S" | "M" | "L" | "XL";
};

export type LabelStat = {
  label: string;
  value: string;
  description: string;
};

export type ProducerSpotlight = {
  id: string;
  name: string;
  city: string;
  style: string;
  placements: string;
  image: string;
};

export type ChartHighlight = {
  id: string;
  beatSlug: string;
  rank: string;
  streams: string;
  saves: string;
  growth: string;
};

export const products: Product[] = [
  {
    id: "B-001",
    slug: "obsidian-command-jacket",
    name: "Obsidian Command",
    subtitle: "Dark trap anthem with polished low-end and vocal pockets",
    category: "trap",
    collection: "Noir Genesis",
    badge: "Top Chart",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    producer: "Krown Atlas",
    bpm: 148,
    musicalKey: "F# Minor",
    duration: "03:14",
    stems: 14,
    sonicNotes: "Thunderous 808 stack, glassy bells, and wide choir pads",
    arrangement: "8-bar hook intro, 2 verse pockets, bridge switch-up, hard outro",
    licensingHint: "Most booked for artist singles, TikTok teaser cuts, and trailers",
    usageTags: ["Artist Single", "Performance Intro", "Viral Snippet"],
  },
  {
    id: "B-002",
    slug: "steel-veil-hoodie",
    name: "Steel Veil",
    subtitle: "Melodic drill atmosphere with cinematic horns",
    category: "drill",
    collection: "Noir Genesis",
    badge: "Label Pick",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    producer: "Vanta Loop",
    bpm: 142,
    musicalKey: "C Minor",
    duration: "02:58",
    stems: 12,
    sonicNotes: "Sliding bass glides, reverse strings, textured snare layers",
    arrangement: "Dynamic intro, section drops, beat pause moments for adlibs",
    licensingHint: "Best for aggressive verses, cypher videos, and sync reels",
    usageTags: ["Drill Cut", "Cypher", "Sync Ready"],
  },
  {
    id: "B-003",
    slug: "halo-track-pant",
    name: "Halo Track",
    subtitle: "R&B trap blend with late-night club bounce",
    category: "rnb",
    collection: "Silver Discipline",
    badge: "New",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    producer: "Midas Noir",
    bpm: 126,
    musicalKey: "A Minor",
    duration: "03:06",
    stems: 11,
    sonicNotes: "Airy keys, pocketed claps, tape-saturated drum buss",
    arrangement: "Hook-first arrangement with minimal verse space and breakdown",
    licensingHint: "Great for melodic artists, dance edits, and mood visualizers",
    usageTags: ["R&B", "Late Night", "Dance Edit"],
  },
  {
    id: "B-004",
    slug: "cathedral-knit",
    name: "Cathedral Knit",
    subtitle: "Afro-fusion groove with modern pop crossover energy",
    category: "afro",
    collection: "Silver Discipline",
    badge: "Restock",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    producer: "Sage Tempo",
    bpm: 108,
    musicalKey: "D Major",
    duration: "03:21",
    stems: 10,
    sonicNotes: "Live percussion stack, warm bass, bright guitar motifs",
    arrangement: "Open chorus arrangement with bridge pocket for featured verse",
    licensingHint: "Strong for global crossover records and warm-weather campaigns",
    usageTags: ["Afro", "Global Pop", "Campaign"],
  },
  {
    id: "B-005",
    slug: "archangel-overcoat",
    name: "Archangel Score",
    subtitle: "Cinematic hybrid production for trailers and statement visuals",
    category: "cinematic",
    collection: "Gold Testament",
    badge: "Exclusive",
    price: 520,
    image:
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1200&q=80",
    producer: "Echelon Saint",
    bpm: 132,
    musicalKey: "E Minor",
    duration: "03:42",
    stems: 19,
    sonicNotes: "Epic braams, pulse synths, thunder percussion and choir swells",
    arrangement: "Trailer-form arrangement with impact markers and tension risers",
    licensingHint: "Booked for trailers, docs, esports intros, and ad campaigns",
    usageTags: ["Cinematic", "Trailer", "High Impact"],
  },
  {
    id: "B-006",
    slug: "sanctum-tee",
    name: "Sanctum Pulse",
    subtitle: "High-energy club-ready cut with glossy topline space",
    category: "club",
    collection: "Gold Testament",
    badge: "Fast Moving",
    price: 185,
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1200&q=80",
    producer: "Nova Chamber",
    bpm: 128,
    musicalKey: "G Minor",
    duration: "02:47",
    stems: 9,
    sonicNotes: "Punchy kick, sidechained synth walls, bright topline risers",
    arrangement: "DJ-friendly intro/outro with vocal pockets and drop variants",
    licensingHint: "Ideal for club singles, dance reels, and branded edits",
    usageTags: ["Club", "Dance", "Festival"],
  },
];

export const collections: Collection[] = [
  {
    id: "C-01",
    title: "Noir Genesis",
    drop: "Drop 01",
    description:
      "Dark, polished beats focused on trap and drill records for breakout singles.",
    mood: "Aggressive luxury",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80",
    trackCount: 24,
    releaseWindow: "Q1 2026",
  },
  {
    id: "C-02",
    title: "Silver Discipline",
    drop: "Drop 02",
    description:
      "Melodic and globally inspired production designed for crossover and replay value.",
    mood: "Polished emotion",
    image:
      "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=1400&q=80",
    trackCount: 18,
    releaseWindow: "Q2 2026",
  },
  {
    id: "C-03",
    title: "Gold Testament",
    drop: "Drop 03",
    description:
      "Premium cinematic and club weapons built for major placements and headline records.",
    mood: "Royal impact",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=80",
    trackCount: 16,
    releaseWindow: "Q3 2026",
  },
];

export const lookbookFrames: LookbookFrame[] = [
  {
    id: "L-001",
    title: "Stage Sovereign",
    image:
      "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80",
    prompt: "Arena backlight, monochrome wardrobe, crown-led silhouette language.",
  },
  {
    id: "L-002",
    title: "Control Room",
    image:
      "https://images.unsplash.com/photo-1461784180009-21121b2f204c?auto=format&fit=crop&w=1200&q=80",
    prompt: "Console LEDs, noir reflections, producer lifestyle documentary framing.",
  },
  {
    id: "L-003",
    title: "Street Campaign",
    image:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80",
    prompt: "Night city shoot, metallic highlights, label-grade campaign pacing.",
  },
  {
    id: "L-004",
    title: "After Hours Session",
    image:
      "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&w=1200&q=80",
    prompt: "Studio lamp pools, late-night writing, intimate artist/producer energy.",
  },
  {
    id: "L-005",
    title: "Gold Pulse",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
    prompt: "Warm metallic diffusion, packed crowd motion, elevated dance edits.",
  },
  {
    id: "L-006",
    title: "Archive Vault",
    image:
      "https://images.unsplash.com/photo-1518991791750-74945f239f5f?auto=format&fit=crop&w=1200&q=80",
    prompt: "Vinyl and hard-drive archive story, premium curation visuals.",
  },
];

export const cartPreview: CartPreviewItem[] = [
  { productSlug: "obsidian-command-jacket", quantity: 1, size: "L" },
  { productSlug: "cathedral-knit", quantity: 1, size: "M" },
];

export const brandPillars = [
  {
    title: "Label-Grade Curation",
    description:
      "Every beat is A&R reviewed for commercial potential and artist adaptability.",
  },
  {
    title: "Elite Sound Design",
    description:
      "Mix-ready masters, premium stems, and dynamic headroom for modern platforms.",
  },
  {
    title: "Placement-First Workflow",
    description:
      "Structure and licensing designed for fast turnaround across artists and sync.",
  },
];

export const labelStats: LabelStat[] = [
  {
    label: "Total Catalog",
    value: "312",
    description: "Release-ready beats with full metadata and stems.",
  },
  {
    label: "Monthly Streams",
    value: "42.8M",
    description: "Combined producer catalog traffic across partner platforms.",
  },
  {
    label: "Placements",
    value: "1,260+",
    description: "Singles, sync campaigns, and label collaborations to date.",
  },
  {
    label: "Avg. Delivery",
    value: "<12h",
    description: "Typical turnaround for stems, alt mixes, and custom edits.",
  },
];

export const producerSpotlights: ProducerSpotlight[] = [
  {
    id: "PR-01",
    name: "Krown Atlas",
    city: "Atlanta",
    style: "Dark trap, hybrid orchestral bounce",
    placements: "Future, G Herbo, two Netflix sync cuts",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "PR-02",
    name: "Midas Noir",
    city: "Toronto",
    style: "R&B trap and atmospheric melodic records",
    placements: "Kehlani camp, EA Sports trailer bundles",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "PR-03",
    name: "Nova Chamber",
    city: "Los Angeles",
    style: "Club-forward crossover and pop rhythm engineering",
    placements: "Festival DJs, fitness brand campaigns",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
];

export const chartHighlights: ChartHighlight[] = [
  {
    id: "CH-01",
    beatSlug: "obsidian-command-jacket",
    rank: "#1 Trap",
    streams: "3.4M",
    saves: "182K",
    growth: "+27%",
  },
  {
    id: "CH-02",
    beatSlug: "steel-veil-hoodie",
    rank: "#3 Drill",
    streams: "2.1M",
    saves: "119K",
    growth: "+19%",
  },
  {
    id: "CH-03",
    beatSlug: "halo-track-pant",
    rank: "#2 R&B",
    streams: "2.8M",
    saves: "143K",
    growth: "+24%",
  },
];

export const licensingTiers = [
  {
    code: "S" as const,
    name: "Starter",
    description: "MP3 + WAV license for independent release and content use.",
  },
  {
    code: "M" as const,
    name: "Market",
    description: "Stems, radio edit, and expanded monetization rights.",
  },
  {
    code: "L" as const,
    name: "Label",
    description: "Full stem suite, alt versions, campaign-safe paperwork.",
  },
  {
    code: "XL" as const,
    name: "Exclusive",
    description: "Off-market ownership transfer and white-glove delivery.",
  },
];

export const releaseTimeline = [
  {
    month: "March 2026",
    title: "Noir Genesis: Volume II",
    detail: "18 trap/drill records with cinematic bridges and vocal pockets.",
  },
  {
    month: "April 2026",
    title: "Silver Discipline: Artist Toolkit",
    detail: "R&B + afro crossover bundle designed for playlist growth.",
  },
  {
    month: "May 2026",
    title: "Gold Testament: Sync Edition",
    detail: "Trailer-grade anthems formatted for ads, games, and teasers.",
  },
];

