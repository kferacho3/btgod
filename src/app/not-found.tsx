import Link from "next/link";

export default function NotFound() {
  return (
    <section className="card-shell space-y-6 p-6 sm:p-8">
      <p className="eyebrow">404</p>
      <h1 className="display-font text-[clamp(2.3rem,12vw,5.6rem)] leading-[0.9] tracking-[0.07em] sm:tracking-[0.08em]">
        NOT FOUND
      </h1>
      <p className="max-w-xl text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
        The piece you were looking for is gone, archived, or never existed.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/shop" className="btn-solid">
          Return To Shop
        </Link>
        <Link href="/" className="btn-outline">
          Back Home
        </Link>
      </div>
    </section>
  );
}
