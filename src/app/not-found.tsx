import Link from "next/link";

export default function NotFound() {
  return (
    <section className="card-shell space-y-6 p-6 sm:p-8">
      <p className="eyebrow">404</p>
      <h1 className="display-font text-7xl leading-none tracking-[0.08em] sm:text-8xl">
        LOST FILE
      </h1>
      <p className="max-w-xl text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
        This page is off-catalog, archived, or no longer in rotation.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/shop" className="btn-solid">
          Return To Beat Vault
        </Link>
        <Link href="/" className="btn-outline">
          Back Home
        </Link>
      </div>
    </section>
  );
}
