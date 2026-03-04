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
    <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-6">
      <div className="max-w-2xl space-y-3">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-font text-[clamp(1.9rem,8.6vw,3.2rem)] leading-[0.94] tracking-[0.06em] sm:tracking-[0.07em]">
          {title}
        </h2>
        <p className="max-w-2xl text-[0.66rem] uppercase leading-relaxed tracking-[0.13em] text-[var(--text-secondary)] sm:text-[0.68rem] sm:tracking-[0.18em]">
          {description}
        </p>
      </div>
      {action ? (
        <div className="w-full pt-1 sm:w-auto [&>*]:w-full sm:[&>*]:w-auto">
          {action}
        </div>
      ) : null}
    </div>
  );
}
