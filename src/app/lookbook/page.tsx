import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { LookbookPromptPanel } from "@/features/lookbook/components/lookbook-prompt-panel";
import { lookbookFrames } from "@/lib/catalog";

const visualDirections = [
  {
    title: "Noir Performance",
    detail: "Stage smoke, hard key light, black-and-gold wardrobe hierarchy.",
  },
  {
    title: "Street Oracle",
    detail: "Urban movement, chrome textures, handheld documentary framing.",
  },
  {
    title: "Crown Minimal",
    detail: "Negative space, disciplined typography, luxury-neutral palette.",
  },
];

export default function LookbookPage() {
  return (
    <>
      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Lookbook Lab"
          title="Build The Visual World"
          description="Craft campaign prompts, visualizer references, and rollout aesthetics aligned with BTGOD sonic identity."
          action={
            <Link href="/shop" className="btn-outline">
              Open Beat Vault
            </Link>
          }
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {visualDirections.map((direction) => (
            <article key={direction.title} className="surface-soft border border-[var(--line)] p-4">
              <p className="display-font text-2xl leading-none tracking-[0.08em] sm:text-3xl">
                {direction.title}
              </p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {direction.detail}
              </p>
            </article>
          ))}
        </div>

        <LookbookPromptPanel />

        <div className="frame-grid">
          {lookbookFrames.map((frame) => (
            <article key={frame.id} className="card-shell overflow-hidden">
              <div className="relative aspect-[4/5] border-b border-[var(--line)]">
                <Image
                  src={frame.image}
                  alt={frame.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover grayscale-[10%]"
                />
              </div>
              <div className="space-y-3 p-4">
                <h2 className="display-font text-3xl leading-none tracking-[0.07em]">
                  {frame.title}
                </h2>
                <p className="text-[0.66rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                  {frame.prompt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
