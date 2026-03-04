import Image from "next/image";

const stripItems = [
  "God-Level Essentials",
  "Precision Tailoring",
  "Limited Capsule Runs",
  "Luxury Materials Only",
  "Built For Greatness",
];

const stripLoop = [...stripItems, ...stripItems];

const metrics = [
  { label: "Active Drop", value: "01" },
  { label: "Limited Units", value: "450" },
  { label: "Craft Standard", value: "5-Star" },
];

export function HomeBannerStripSection() {
  return (
    <section className="space-y-4">
      <article className="brand-banner px-4 py-3">
        <div className="banner-marquee">
          <div className="banner-track text-[0.6rem] uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:tracking-[0.24em]">
            {stripLoop.map((item, index) => (
              <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
                <span>{item}</span>
                <span className="relative h-4 w-3">
                  <Image
                    src="/BTGOD-symbol.png"
                    alt=""
                    aria-hidden
                    fill
                    sizes="12px"
                    className="object-contain"
                  />
                </span>
              </span>
            ))}
          </div>
        </div>
      </article>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <article
            key={metric.label}
            className={`hover-lift royal-shell p-4 reveal-up ${
              index === 0
                ? "reveal-delay-1"
                : index === 1
                  ? "reveal-delay-2"
                  : "reveal-delay-3"
            }`}
          >
            <p className="eyebrow">{metric.label}</p>
            <p className="display-font mt-2 text-4xl leading-none tracking-[0.08em] shimmer-text">
              {metric.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
