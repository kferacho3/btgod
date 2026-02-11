import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { LookbookPromptPanel } from "@/features/lookbook/components/lookbook-prompt-panel";
import { lookbookFrames } from "@/lib/catalog";

export default function LookbookPage() {
  return (
    <>
      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Lookbook Lab"
          title="Generate The Streets."
          description="Prompt-inspired visual references for campaign development and styling direction."
          action={
            <Link href="/shop" className="btn-outline">
              Open Shop
            </Link>
          }
        />

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
