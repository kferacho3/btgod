export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  collection: string;
  badge: string;
  price: number;
  image: string;
  materials: string;
  fit: string;
  aura: string;
};

export type Collection = {
  id: string;
  title: string;
  drop: string;
  description: string;
  mood: string;
  image: string;
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

export const products: Product[] = [
  {
    id: "P-001",
    slug: "obsidian-command-jacket",
    name: "Obsidian Command Jacket",
    subtitle: "Armor shell with clean tactical seams",
    collection: "Noir Genesis",
    badge: "Limited",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
    materials: "Bonded twill + brushed fleece lining",
    fit: "Structured oversized",
    aura: "Gold trim details with matte black hardware",
  },
  {
    id: "P-002",
    slug: "steel-veil-hoodie",
    name: "Steel Veil Hoodie",
    subtitle: "Heavyweight drape for cold city nights",
    collection: "Noir Genesis",
    badge: "Core",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=1200&q=80",
    materials: "500gsm brushed cotton + silver tipped drawcord",
    fit: "Relaxed sculpted",
    aura: "Minimal chest monogram and reinforced cuff lines",
  },
  {
    id: "P-003",
    slug: "halo-track-pant",
    name: "Halo Track Pant",
    subtitle: "Straight fall silhouette, no excess",
    collection: "Silver Discipline",
    badge: "New",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    materials: "Tech satin + breathable mesh pocketing",
    fit: "Tailored loose",
    aura: "Side stripe in muted metallic silver",
  },
  {
    id: "P-004",
    slug: "cathedral-knit",
    name: "Cathedral Knit",
    subtitle: "Dense knit texture with clean collar edge",
    collection: "Silver Discipline",
    badge: "Restock",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    materials: "Wool blend with brushed interior",
    fit: "Classic relaxed",
    aura: "Subtle crest embroidery at hem",
  },
  {
    id: "P-005",
    slug: "archangel-overcoat",
    name: "Archangel Overcoat",
    subtitle: "Longline silhouette for maximum statement",
    collection: "Gold Testament",
    badge: "Top Pick",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=1200&q=80",
    materials: "Wool cashmere blend with satin lining",
    fit: "Longline tailored",
    aura: "Brushed gold cuff tags and hidden placket",
  },
  {
    id: "P-006",
    slug: "sanctum-tee",
    name: "Sanctum Tee",
    subtitle: "Everyday essential with premium drape",
    collection: "Gold Testament",
    badge: "Essential",
    price: 88,
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=1200&q=80",
    materials: "300gsm combed cotton",
    fit: "Boxy standard",
    aura: "Raised tonal graphic and shoulder seam tape",
  },
];

export const collections: Collection[] = [
  {
    id: "C-01",
    title: "Noir Genesis",
    drop: "Drop 01",
    description:
      "Foundation silhouettes in black steel tones. Sharp seams, heavy forms, and night-mode confidence.",
    mood: "Urban armor",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "C-02",
    title: "Silver Discipline",
    drop: "Drop 02",
    description:
      "Precision fabrics and engineered layering built for clean movement from morning to midnight.",
    mood: "Cold precision",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "C-03",
    title: "Gold Testament",
    drop: "Drop 03",
    description:
      "Statement outerwear anchored by metallic accents and minimalist architecture for dominant presence.",
    mood: "Royal minimalism",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
  },
];

export const lookbookFrames: LookbookFrame[] = [
  {
    id: "L-001",
    title: "Street Cathedral",
    image:
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=1200&q=80",
    prompt: "Concrete horizon, black tailored coat, silver jewelry, cinematic grain.",
  },
  {
    id: "L-002",
    title: "Nocturnal Motion",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    prompt: "Long exposure city lights, matte black layers, confident posture.",
  },
  {
    id: "L-003",
    title: "Gold Discipline",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80",
    prompt: "Soft daylight, minimal backdrop, warm metallic accessory accents.",
  },
  {
    id: "L-004",
    title: "After Hours",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    prompt: "Black and silver look, hard flash, downtown rooftop frame.",
  },
  {
    id: "L-005",
    title: "Metro Chrome",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    prompt: "Monochrome train platform editorial with directional shadows.",
  },
  {
    id: "L-006",
    title: "Clean Reign",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    prompt: "Minimal set, sculpted knitwear, cold silver light spill.",
  },
];

export const cartPreview: CartPreviewItem[] = [
  { productSlug: "obsidian-command-jacket", quantity: 1, size: "M" },
  { productSlug: "cathedral-knit", quantity: 2, size: "L" },
];

export const brandPillars = [
  {
    title: "Minimalism With Presence",
    description:
      "Every piece removes noise while amplifying silhouette, texture, and confidence.",
  },
  {
    title: "God Aura Detailing",
    description:
      "Gold and silver accents are used with discipline to feel premium, never loud.",
  },
  {
    title: "Performance Through Form",
    description:
      "Cut, weight, and movement are engineered for all-day wear and statement impact.",
  },
];

