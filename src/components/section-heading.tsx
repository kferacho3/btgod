import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-6">
      <div className="max-w-2xl space-y-3">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-font text-5xl leading-none tracking-[0.06em] sm:text-6xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
      {action ? <div className="pt-1">{action}</div> : null}
    </div>
  );
}

