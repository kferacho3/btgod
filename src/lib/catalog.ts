export type ProductCategory =
  | "outerwear"
  | "tailoring"
  | "hoodies"
  | "bottoms"
  | "accessories"
  | "footwear";

export type ProductSize = "S" | "M" | "L" | "XL";

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  collection: string;
  badge: string;
  price: number;
  image: string;
  materials: string;
  fit: string;
  aura: string;
  silhouette: string;
  colorway: string;
  weight: string;
  releaseDate: string;
  usageTags: string[];
};

export type Collection = {
  id: string;
  title: string;
  drop: string;
  description: string;
  mood: string;
  image: string;
  pieceCount: number;
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
  size: ProductSize;
};

export type LabelStat = {
  label: string;
  value: string;
  description: string;
};

export type AtelierSpotlight = {
  id: string;
  name: string;
  base: string;
  discipline: string;
  signature: string;
  image: string;
};

export type TrendHighlight = {
  id: string;
  productSlug: string;
  rank: string;
  sellThrough: string;
  wishlist: string;
  growth: string;
};

export type ReleaseMilestone = {
  month: string;
  title: string;
  detail: string;
};

export const products: Product[] = [
  {
    id: "P-001",
    slug: "obsidian-command-puffer",
    name: "Obsidian Command Puffer",
    subtitle: "Structured winter armor cut for midnight city runs",
    category: "outerwear",
    collection: "Noir Genesis",
    badge: "Top Pick",
    price: 620,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    materials: "Italian matte nylon shell, goose-down core",
    fit: "Boxy luxury fit with dropped shoulder",
    aura: "Command presence with minimal flash",
    silhouette: "High collar, cropped body, hard shoulder line",
    colorway: "Onyx Black / Metallic Gold hardware",
    weight: "Heavy winter",
    releaseDate: "Jan 2026",
    usageTags: ["Statement Outerwear", "Luxury Street", "Cold Weather"],
  },
  {
    id: "P-002",
    slug: "steel-veil-overcoat",
    name: "Steel Veil Overcoat",
    subtitle: "Longline wool architecture with elite tailoring discipline",
    category: "tailoring",
    collection: "Noir Genesis",
    badge: "Runway Favorite",
    price: 780,
    image:
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&w=1200&q=80",
    materials: "Double-faced wool blend with silk lining",
    fit: "Tailored drape with reinforced shoulder",
    aura: "Executive menace in monochrome",
    silhouette: "Longline coat, clean waist suppression",
    colorway: "Graphite Black / Silver accents",
    weight: "Mid-heavy",
    releaseDate: "Jan 2026",
    usageTags: ["Tailoring", "Evening", "Editorial"],
  },
  {
    id: "P-003",
    slug: "halo-track-hoodie",
    name: "Halo Track Hoodie",
    subtitle: "Premium heavyweight hoodie for all-day luxury comfort",
    category: "hoodies",
    collection: "Silver Discipline",
    badge: "Fast Moving",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?auto=format&fit=crop&w=1200&q=80",
    materials: "520gsm brushed cotton with silver tipped drawcord",
    fit: "Relaxed oversized with sculpted hood",
    aura: "Clean power with daily wearability",
    silhouette: "Volume hood, tapered rib hem",
    colorway: "Midnight Black / Soft Silver",
    weight: "Heavyweight",
    releaseDate: "Feb 2026",
    usageTags: ["Core Essential", "Daily Uniform", "Layering"],
  },
  {
    id: "P-004",
    slug: "divine-cargo-pant",
    name: "Divine Cargo Pant",
    subtitle: "Technical cargo with refined drape and tactical utility",
    category: "bottoms",
    collection: "Silver Discipline",
    badge: "Restock",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1624378440070-d5d5ac3528b5?auto=format&fit=crop&w=1200&q=80",
    materials: "Water-resistant twill with stretch panel inserts",
    fit: "Relaxed thigh with controlled ankle taper",
    aura: "Athletic edge with luxury finish",
    silhouette: "Utility pocket grid, articulated knee",
    colorway: "Urban Camo / Matte black trims",
    weight: "Mid-weight",
    releaseDate: "Feb 2026",
    usageTags: ["Cargo", "Street Luxury", "Travel"],
  },
  {
    id: "P-005",
    slug: "crown-signet-chain",
    name: "Crown Signet Chain",
    subtitle: "Polished statement chain engineered for stage and street",
    category: "accessories",
    collection: "Gold Testament",
    badge: "Exclusive",
    price: 540,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    materials: "18k gold-plated brass with anti-tarnish coating",
    fit: "Adjustable drape with dual clasp options",
    aura: "Royal centerpiece without noise",
    silhouette: "Signet crest pendant + rope link chain",
    colorway: "BTG Gold",
    weight: "Premium metal",
    releaseDate: "Mar 2026",
    usageTags: ["Jewelry", "Stage", "Luxury"],
  },
  {
    id: "P-006",
    slug: "saint-runner-sneaker",
    name: "Saint Runner Sneaker",
    subtitle: "Performance-luxury sneaker with tonal sculpted profile",
    category: "footwear",
    collection: "Gold Testament",
    badge: "New",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    materials: "Calf leather upper, carbon foam sole unit",
    fit: "True to size with performance lockdown",
    aura: "Speed silhouette with couture finish",
    silhouette: "Low-top racer, split-density sole",
    colorway: "Noir / Gold heel clip",
    weight: "Lightweight",
    releaseDate: "Mar 2026",
    usageTags: ["Sneaker", "Performance", "Luxury Sport"],
  },
  {
    id: "P-007",
    slug: "resurrection-varsity",
    name: "Resurrection Varsity",
    subtitle: "Wool-leather varsity with elevated tonal embroidery",
    category: "outerwear",
    collection: "Apex Psalms",
    badge: "Editors Choice",
    price: 860,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
    materials: "Melton wool body with lambskin sleeves",
    fit: "Structured varsity block with tailored sleeve pitch",
    aura: "Iconic athlete royalty",
    silhouette: "Cropped varsity body, ribbed waistband",
    colorway: "Jet Black / Gold script",
    weight: "Heavyweight",
    releaseDate: "Apr 2026",
    usageTags: ["Varsity", "Collector Piece", "Luxury Sport"],
  },
  {
    id: "P-008",
    slug: "legend-knit-zip",
    name: "Legend Knit Zip",
    subtitle: "Fine-gauge zip knit tuned for clean layering and travel",
    category: "tailoring",
    collection: "Apex Psalms",
    badge: "Trend Alert",
    price: 360,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    materials: "Merino-cashmere blend with two-way zipper",
    fit: "Refined slim-straight silhouette",
    aura: "Understated wealth signal",
    silhouette: "Clean zip front, minimal rib detailing",
    colorway: "Bone / Silver zip hardware",
    weight: "Mid-weight",
    releaseDate: "Apr 2026",
    usageTags: ["Knitwear", "Travel", "Quiet Luxury"],
  },
];

export const collections: Collection[] = [
  {
    id: "C-01",
    title: "Noir Genesis",
    drop: "Drop 01",
    description:
      "Black-forward foundation pieces engineered for executive street power.",
    mood: "Aggressive luxury",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1400&q=80",
    pieceCount: 24,
    releaseWindow: "Q1 2026",
  },
  {
    id: "C-02",
    title: "Silver Discipline",
    drop: "Drop 02",
    description:
      "Soft silver accents, performance cuts, and elevated daily uniforms.",
    mood: "Polished motion",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1400&q=80",
    pieceCount: 18,
    releaseWindow: "Q2 2026",
  },
  {
    id: "C-03",
    title: "Gold Testament",
    drop: "Drop 03",
    description:
      "Premium statement capsules for stage, spotlight, and high-visibility moments.",
    mood: "Royal impact",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80",
    pieceCount: 16,
    releaseWindow: "Q3 2026",
  },
  {
    id: "C-04",
    title: "Apex Psalms",
    drop: "Drop 04",
    description:
      "Collector-level tailoring and outerwear with heirloom-grade finishing.",
    mood: "Sacred elite",
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1400&q=80",
    pieceCount: 12,
    releaseWindow: "Q4 2026",
  },
];

export const lookbookFrames: LookbookFrame[] = [
  {
    id: "L-001",
    title: "Crown Noir",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    prompt: "Night studio portrait with black tailoring and gold accents.",
  },
  {
    id: "L-002",
    title: "Runway Concrete",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    prompt: "Urban runway cast, hard light, disciplined silhouettes.",
  },
  {
    id: "L-003",
    title: "Chrome Silence",
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1200&q=80",
    prompt: "Silver hardware details, neutral tones, close-up composition.",
  },
  {
    id: "L-004",
    title: "Arena Entrance",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    prompt: "Athlete-meets-artist energy with a cinematic entry frame.",
  },
  {
    id: "L-005",
    title: "Afterhours Atelier",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80",
    prompt: "Workroom textures, fabric drape, low-lux ambient light.",
  },
  {
    id: "L-006",
    title: "Gold Ritual",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    prompt: "Metallic highlights, heirloom accessories, icon framing.",
  },
];

export const cartPreview: CartPreviewItem[] = [
  { productSlug: "obsidian-command-puffer", quantity: 1, size: "L" },
  { productSlug: "halo-track-hoodie", quantity: 1, size: "M" },
];

export const brandPillars = [
  {
    title: "Luxury Craft",
    description:
      "Premium fabrics, precision construction, and finishing standards built for collectors.",
  },
  {
    title: "Performance Fit",
    description:
      "Designed for motion on stage, in transit, and in daily high-output life.",
  },
  {
    title: "Culture Precision",
    description:
      "Built for rappers, creators, and leaders who set trends instead of following them.",
  },
];

export const labelStats: LabelStat[] = [
  {
    label: "Global Clients",
    value: "94K",
    description: "Customers wearing BTGOD across 48 countries.",
  },
  {
    label: "Sell Through",
    value: "87%",
    description: "Average sell-through of capsule drops within launch week.",
  },
  {
    label: "Limited Runs",
    value: "52",
    description: "Curated micro-drops released in the last 12 months.",
  },
  {
    label: "Avg Ship",
    value: "<48h",
    description: "Fast premium fulfillment for domestic orders.",
  },
];

export const atelierSpotlights: AtelierSpotlight[] = [
  {
    id: "A-01",
    name: "Vera Stone",
    base: "Milan",
    discipline: "Outerwear engineering + luxury hardware",
    signature: "Architectural collars and precise shoulder lines",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "A-02",
    name: "Jalen Croix",
    base: "Los Angeles",
    discipline: "Street-tailoring hybrid silhouettes",
    signature: "Low profile cuts with sharp drape control",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "A-03",
    name: "Amara Nox",
    base: "Paris",
    discipline: "Luxury sportswear and runway knit systems",
    signature: "Minimal branding with high-impact texture",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
];

export const trendHighlights: TrendHighlight[] = [
  {
    id: "T-01",
    productSlug: "obsidian-command-puffer",
    rank: "#1 Outerwear",
    sellThrough: "92%",
    wishlist: "18.2K",
    growth: "+31%",
  },
  {
    id: "T-02",
    productSlug: "steel-veil-overcoat",
    rank: "#2 Tailoring",
    sellThrough: "86%",
    wishlist: "14.7K",
    growth: "+22%",
  },
  {
    id: "T-03",
    productSlug: "saint-runner-sneaker",
    rank: "#1 Footwear",
    sellThrough: "89%",
    wishlist: "21.3K",
    growth: "+29%",
  },
  {
    id: "T-04",
    productSlug: "crown-signet-chain",
    rank: "#1 Accessories",
    sellThrough: "95%",
    wishlist: "16.4K",
    growth: "+35%",
  },
];

export const sizeTiers = [
  {
    code: "S" as const,
    name: "Slim",
    description: "Precision close fit for a sharp silhouette.",
  },
  {
    code: "M" as const,
    name: "Modern",
    description: "Balanced room with a tailored profile.",
  },
  {
    code: "L" as const,
    name: "Relaxed",
    description: "Street-lux drape with mobility and layering room.",
  },
  {
    code: "XL" as const,
    name: "Oversized",
    description: "Bold statement proportion for stage-ready presence.",
  },
];

export const releaseTimeline: ReleaseMilestone[] = [
  {
    month: "March 2026",
    title: "Noir Genesis: Shadow Set",
    detail: "Limited monochrome outerwear with polished black hardware.",
  },
  {
    month: "April 2026",
    title: "Silver Discipline: Core Uniform",
    detail: "Daily luxury set engineered for movement and repeat wear.",
  },
  {
    month: "May 2026",
    title: "Gold Testament: Stage Capsule",
    detail: "High-visibility statement pieces and heirloom accessories.",
  },
  {
    month: "June 2026",
    title: "Apex Psalms: Collector Cut",
    detail: "Heirloom tailoring and varsity architecture in low quantities.",
  },
];

export const productsBySlug = new Map(products.map((product) => [product.slug, product]));

export const getProductBySlug = (slug: string) => productsBySlug.get(slug) ?? null;

export const featuredProductSlugs = [
  "obsidian-command-puffer",
  "steel-veil-overcoat",
  "halo-track-hoodie",
  "saint-runner-sneaker",
];
