import Image from "next/image";

const bannerItems = [
  "Drop 01 Live Now",
  "Limited Capsule Runs",
  "Free US Shipping Over $180",
  "Built For Greatness",
];

const loopItems = [...bannerItems, ...bannerItems];

export function AnnouncementBanner() {
  return (
    <div className="brand-banner px-3 py-2">
      <div className="banner-marquee">
        <div className="banner-track text-[0.6rem] uppercase tracking-[0.24em] text-[var(--text-secondary)]">
          {loopItems.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
              <span>{item}</span>
              <span className="relative h-4 w-3 crest-float">
                <Image
                  src="/brand/btgod-crest.svg"
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
    </div>
  );
}

