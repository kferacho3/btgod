import Link from "next/link";

export default function AccountPage() {
  return (
    <section className="card-shell grid gap-7 p-6 sm:p-8 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-6">
        <p className="eyebrow">Member Access</p>
        <h1 className="display-font text-[clamp(2.2rem,10vw,4.6rem)] leading-[0.88] tracking-[0.05em] sm:tracking-[0.06em]">
          PRIVATE
          <br />
          COMMAND
        </h1>
        <p className="max-w-xl text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Manage orders, saved fits, and private capsule access from one luxury-grade account center.
          Frontend architecture is prepared for backend auth and customer profile sync.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/account/sign-in" className="btn-solid">
            Go To Sign In
          </Link>
          <Link href="/shop" className="btn-outline">
            Continue Shopping
          </Link>
        </div>
      </div>
      <article className="border border-[var(--line)] p-5">
        <p className="eyebrow">Roadmap</p>
        <ul className="mt-4 space-y-3 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
          <li className="border-b border-[var(--line)] pb-3">
            Email/password + social auth
          </li>
          <li className="border-b border-[var(--line)] pb-3">
            Saved fits and sizing profiles
          </li>
          <li className="border-b border-[var(--line)] pb-3">
            Order history + shipment tracking
          </li>
          <li>VIP loyalty tiers + members-only capsule access</li>
        </ul>
      </article>
    </section>
  );
}
