import Image from "next/image";
import Link from "next/link";

const moodFrames = [
  {
    id: "mood-1",
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    alt: "Luxury portrait with clean styling",
  },
  {
    id: "mood-2",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    alt: "High-fashion streetwear silhouette",
  },
  {
    id: "mood-3",
    src: "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=900&q=80",
    alt: "Editorial lookbook close-up",
  },
];

const signaturePoints = [
  "Minimalism without boring",
  "Tailoring with swagger",
  "Luxury built for movers",
];

export function HomeSignatureSection() {
  return (
    <section className="card-shell grid gap-6 p-5 sm:p-8 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-6">
        <p className="eyebrow">Brand Signature</p>
        <h2 className="display-font text-[clamp(2rem,6vw,4rem)] leading-[0.92] tracking-[0.06em]">
          Upper Echelon
          <br />
          Street Luxury
        </h2>

        <p className="max-w-2xl text-[0.68rem] uppercase leading-relaxed tracking-[0.14em] text-[var(--text-secondary)] sm:text-[0.7rem] sm:tracking-[0.17em]">
          BTGOD builds five-star fashion for the new elite: rappers, athletes, founders, and
          creators who demand clean design with undeniable presence.
        </p>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {signaturePoints.map((point) => (
            <article key={point} className="surface-soft border border-[var(--line)] px-3 py-3">
              <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                {point}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/collections" className="btn-solid">
            View Capsule Index
          </Link>
          <Link href="/shop" className="btn-outline">
            Browse Full Shop
          </Link>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <article className="relative min-h-[280px] overflow-hidden border border-[var(--line)] sm:row-span-2">
          <Image
            src={moodFrames[0].src}
            alt={moodFrames[0].alt}
            fill
            sizes="(max-width: 1280px) 100vw, 30vw"
            className="object-cover grayscale-[8%]"
          />
        </article>
        <article className="relative min-h-[135px] overflow-hidden border border-[var(--line)]">
          <Image
            src={moodFrames[1].src}
            alt={moodFrames[1].alt}
            fill
            sizes="(max-width: 1280px) 100vw, 20vw"
            className="object-cover grayscale-[8%]"
          />
        </article>
        <article className="relative min-h-[135px] overflow-hidden border border-[var(--line)]">
          <Image
            src={moodFrames[2].src}
            alt={moodFrames[2].alt}
            fill
            sizes="(max-width: 1280px) 100vw, 20vw"
            className="object-cover grayscale-[8%]"
          />
        </article>
      </div>
    </section>
  );
}
