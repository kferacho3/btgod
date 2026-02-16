import Image from "next/image";

type BrandLockupProps = {
  showTagline?: boolean;
  compact?: boolean;
};

export function BrandLockup({ showTagline = true, compact = false }: BrandLockupProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className={`${compact ? "relative h-9 w-9 sm:h-10 sm:w-10" : "relative h-11 w-11 sm:h-12 sm:w-12"} crest-float`}>
        <Image
          src="/brand/btgod-crest.svg"
          alt="BTGOD crest symbol"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <div className={compact ? "relative h-6 w-24 sm:h-8 sm:w-32" : "relative h-7 w-32 sm:h-9 sm:w-44"}>
          <Image
            src="/brand/btgod-wordmark.svg"
            alt="BTGOD wordmark"
            fill
            sizes={compact ? "176px" : "220px"}
            className="object-contain object-left"
            priority
          />
        </div>
        {showTagline ? (
          <p className="eyebrow -mt-0.5 text-[0.54rem] tracking-[0.16em] sm:text-[0.58rem] sm:tracking-[0.19em]">
            Be The Greatest Or Die
          </p>
        ) : null}
      </div>
    </div>
  );
}
