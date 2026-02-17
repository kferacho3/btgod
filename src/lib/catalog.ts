export type BeatCategory =
  | "trap"
  | "drill"
  | "rnb"
  | "afro"
  | "cinematic"
  | "club";

export type LicenseTierCode = "S" | "M" | "L" | "XL";

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
  energy: string;
  mood: string;
  format: string;
  releaseDate: string;
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
  license: LicenseTierCode;
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

export type ReleaseMilestone = {
  month: string;
  title: string;
  detail: string;
};

export const products: Product[] = [
  {
    id: "B-001",
    slug: "obsidian-command",
    name: "Obsidian Command",
    subtitle: "Dark trap anthem with polished low-end and elite vocal space",
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
    sonicNotes: "Thunderous 808 stack, glassy bells, wide choir haze",
    arrangement: "Hook intro, 2 verse pockets, bridge switch-up, hard outro",
    licensingHint: "Best for artist singles, rollout teasers, and trailer cuts",
    usageTags: ["Artist Single", "Performance Intro", "Viral Snippet"],
    energy: "10/10",
    mood: "Cold authority",
    format: "WAV + Stems",
    releaseDate: "Jan 2026",
  },
  {
    id: "B-002",
    slug: "steel-veil",
    name: "Steel Veil",
    subtitle: "Melodic drill atmosphere with cinematic brass transitions",
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
    sonicNotes: "Sliding glides, reverse strings, textured snare lattices",
    arrangement: "Dynamic intro, two pressure drops, adlib pause moments",
    licensingHint: "Strong for drill verses, cypher content, and sync reels",
    usageTags: ["Drill Cut", "Cypher", "Sync Ready"],
    energy: "9/10",
    mood: "Focused tension",
    format: "WAV + Tracked Stems",
    releaseDate: "Jan 2026",
  },
  {
    id: "B-003",
    slug: "halo-track",
    name: "Halo Track",
    subtitle: "R&B trap crossover with glossy topline headroom",
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
    sonicNotes: "Airy keys, pocketed claps, tape-sat drum bus",
    arrangement: "Hook-first sequence, minimal verse lanes, lush breakdown",
    licensingHint: "Great for melodic artists, dance edits, and mood reels",
    usageTags: ["R&B", "Late Night", "Dance Edit"],
    energy: "7/10",
    mood: "Velvet pressure",
    format: "WAV + Radio Edit",
    releaseDate: "Feb 2026",
  },
  {
    id: "B-004",
    slug: "cathedral-knit",
    name: "Cathedral Knit",
    subtitle: "Afro-fusion groove with pop crossover replay value",
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
    sonicNotes: "Live percussion stack, warm bassline, bright guitar motifs",
    arrangement: "Open chorus form, collab bridge pocket, final energy lift",
    licensingHint: "High conversion for global pop and seasonal campaigns",
    usageTags: ["Afro", "Global Pop", "Campaign"],
    energy: "8/10",
    mood: "Warm command",
    format: "WAV + Instrumental",
    releaseDate: "Feb 2026",
  },
  {
    id: "B-005",
    slug: "archangel-score",
    name: "Archangel Score",
    subtitle: "Cinematic hybrid production built for major visual statements",
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
    sonicNotes: "Epic braams, pulse synths, thunder percussion, choir swells",
    arrangement: "Trailer architecture with impact markers and tension risers",
    licensingHint: "Booked for trailers, esports intros, and ad campaigns",
    usageTags: ["Cinematic", "Trailer", "High Impact"],
    energy: "10/10",
    mood: "Royal danger",
    format: "WAV + Full Scoring Stems",
    releaseDate: "Mar 2026",
  },
  {
    id: "B-006",
    slug: "sanctum-pulse",
    name: "Sanctum Pulse",
    subtitle: "High-energy club weapon with polished topline lanes",
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
    sonicNotes: "Punchy kick, sidechained walls, bright melodic risers",
    arrangement: "DJ intro/outro, hook variants, drop-ready lanes",
    licensingHint: "Ideal for club singles, dance reels, and branded edits",
    usageTags: ["Club", "Dance", "Festival"],
    energy: "9/10",
    mood: "Neon confidence",
    format: "WAV + Performance Edit",
    releaseDate: "Mar 2026",
  },
  {
    id: "B-007",
    slug: "crown-code",
    name: "Crown Code",
    subtitle: "Atmospheric drill-trap hybrid with chant-friendly hook space",
    category: "drill",
    collection: "Noir Genesis",
    badge: "A&R Favorite",
    price: 305,
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    producer: "Krown Atlas",
    bpm: 145,
    musicalKey: "G# Minor",
    duration: "03:08",
    stems: 13,
    sonicNotes: "Stacked choirs, distorted plucks, drum breaks with air",
    arrangement: "Callout intro, chant hook, verse lift, sparse bridge",
    licensingHint: "Works best for headline tracks and walkout edits",
    usageTags: ["Stadium", "Trap", "Walkout"],
    energy: "9/10",
    mood: "Triumphant threat",
    format: "WAV + Master + Stems",
    releaseDate: "Feb 2026",
  },
  {
    id: "B-008",
    slug: "silver-discipline",
    name: "Silver Discipline",
    subtitle: "Melodic club-R&B crossover with polished bounce",
    category: "rnb",
    collection: "Silver Discipline",
    badge: "Trend Alert",
    price: 255,
    image:
      "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?auto=format&fit=crop&w=1200&q=80",
    producer: "Midas Noir",
    bpm: 122,
    musicalKey: "B Minor",
    duration: "03:18",
    stems: 12,
    sonicNotes: "Wide synth pads, velvet clap stack, dynamic sub movement",
    arrangement: "8 bar lead-in, melodic hook, clean verse lanes, outro tag",
    licensingHint: "Perfect for crossover records and sync-friendly cuts",
    usageTags: ["Crossover", "R&B", "Sync"],
    energy: "8/10",
    mood: "Luxury glide",
    format: "WAV + TV Mix",
    releaseDate: "Mar 2026",
  },
];

export const collections: Collection[] = [
  {
    id: "C-01",
    title: "Noir Genesis",
    drop: "Drop 01",
    description:
      "Dark polished trap and drill records engineered for breakout singles.",
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
      "Melodic crossover production built for replay and global playlist lift.",
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
      "Premium cinematic and club records designed for major placements.",
    mood: "Royal impact",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=80",
    trackCount: 16,
    releaseWindow: "Q3 2026",
  },
  {
    id: "C-04",
    title: "Apex Psalms",
    drop: "Drop 04",
    description:
      "Hybrid faith-meets-street sonics for cinematic, anthem-grade moments.",
    mood: "Sacred intensity",
    image:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1400&q=80",
    trackCount: 12,
    releaseWindow: "Q4 2026",
  },
];

export const lookbookFrames: LookbookFrame[] = [
  {
    id: "L-001",
    title: "Stage Sovereign",
    image:
      "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80",
    prompt: "Arena backlight, crown silhouette, monochrome editorial pacing.",
  },
  {
    id: "L-002",
    title: "Control Room",
    image:
      "https://images.unsplash.com/photo-1461784180009-21121b2f204c?auto=format&fit=crop&w=1200&q=80",
    prompt: "Console LEDs, noir reflections, producer documentary texture.",
  },
  {
    id: "L-003",
    title: "Street Oracle",
    image:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80",
    prompt: "Night city gradients, metallic highlights, campaign framing.",
  },
  {
    id: "L-004",
    title: "After Hours",
    image:
      "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&w=1200&q=80",
    prompt: "Late writing session, lamp pools, analog grit and glass textures.",
  },
  {
    id: "L-005",
    title: "Gold Pulse",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
    prompt: "Warm metallic diffusion, kinetic crowd motion, crown accents.",
  },
  {
    id: "L-006",
    title: "Archive Vault",
    image:
      "https://images.unsplash.com/photo-1518991791750-74945f239f5f?auto=format&fit=crop&w=1200&q=80",
    prompt: "Vinyl archive language, high contrast shelving, tactile nostalgia.",
  },
];

export const cartPreview: CartPreviewItem[] = [
  { productSlug: "obsidian-command", quantity: 1, license: "M" },
  { productSlug: "halo-track", quantity: 1, license: "S" },
];

export const brandPillars = [
  {
    title: "A&R First",
    description:
      "Every beat is reviewed for artist adaptability, replay value, and placement potential.",
  },
  {
    title: "Mix-Ready Masters",
    description:
      "Premium loudness balance, clean transients, and stem architecture for quick delivery.",
  },
  {
    title: "Global Catalog",
    description:
      "Trap, drill, R&B, afro, and cinematic records tuned for worldwide release workflows.",
  },
];

export const labelStats: LabelStat[] = [
  {
    label: "Catalog Size",
    value: "312",
    description: "Release-ready beats with full metadata and stems.",
  },
  {
    label: "Monthly Streams",
    value: "42.8M",
    description: "Partner platform traffic across producer rosters.",
  },
  {
    label: "Placements",
    value: "1,260+",
    description: "Singles, sync campaigns, and label collaborations.",
  },
  {
    label: "Avg. Delivery",
    value: "<12h",
    description: "Typical turnaround for stems and alternate mixes.",
  },
];

export const producerSpotlights: ProducerSpotlight[] = [
  {
    id: "PR-01",
    name: "Krown Atlas",
    city: "Atlanta",
    style: "Dark trap, hybrid orchestral bounce",
    placements: "Future camp, G Herbo sessions, Netflix sync cuts",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "PR-02",
    name: "Midas Noir",
    city: "Toronto",
    style: "R&B trap and atmospheric melodic production",
    placements: "Kehlani sessions, EA Sports trailer bundle",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "PR-03",
    name: "Nova Chamber",
    city: "Los Angeles",
    style: "Club-forward crossover and pop rhythm engineering",
    placements: "Festival DJ packages, sports campaign edits",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
];

export const chartHighlights: ChartHighlight[] = [
  {
    id: "CH-01",
    beatSlug: "obsidian-command",
    rank: "#1 Trap",
    streams: "3.4M",
    saves: "182K",
    growth: "+27%",
  },
  {
    id: "CH-02",
    beatSlug: "steel-veil",
    rank: "#3 Drill",
    streams: "2.1M",
    saves: "119K",
    growth: "+19%",
  },
  {
    id: "CH-03",
    beatSlug: "halo-track",
    rank: "#2 R&B",
    streams: "2.8M",
    saves: "143K",
    growth: "+24%",
  },
  {
    id: "CH-04",
    beatSlug: "archangel-score",
    rank: "#1 Cinematic",
    streams: "1.7M",
    saves: "92K",
    growth: "+31%",
  },
];

export const licensingTiers = [
  {
    code: "S" as const,
    name: "Starter",
    description: "MP3 + WAV license for independent releases and content use.",
  },
  {
    code: "M" as const,
    name: "Market",
    description: "Stems, radio edit, and expanded monetization rights.",
  },
  {
    code: "L" as const,
    name: "Label",
    description: "Full stem suite, alternates, and campaign-safe paperwork.",
  },
  {
    code: "XL" as const,
    name: "Exclusive",
    description: "Off-market ownership transfer and white-glove delivery.",
  },
];

export const releaseTimeline: ReleaseMilestone[] = [
  {
    month: "March 2026",
    title: "Noir Genesis: Volume II",
    detail: "18 trap and drill records with cinematic bridges and vocal pockets.",
  },
  {
    month: "April 2026",
    title: "Silver Discipline: Artist Toolkit",
    detail: "R&B and afro crossover set designed for playlist acceleration.",
  },
  {
    month: "May 2026",
    title: "Gold Testament: Sync Edition",
    detail: "Trailer-grade catalog formatted for ads, games, and teasers.",
  },
  {
    month: "June 2026",
    title: "Apex Psalms: Championship Cuts",
    detail: "Faith-forward anthem package for arenas and documentary scores.",
  },
];

export const productsBySlug = new Map(products.map((product) => [product.slug, product]));

export const getProductBySlug = (slug: string) => productsBySlug.get(slug) ?? null;

export const featuredProductSlugs = [
  "obsidian-command",
  "steel-veil",
  "halo-track",
  "archangel-score",
];
