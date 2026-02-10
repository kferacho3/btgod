import Link from "next/link";

export default function AccountPage() {
  return (
    <section className="card-shell grid gap-7 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-6">
        <p className="eyebrow">Account Access</p>
        <h1 className="display-font text-6xl leading-[0.88] tracking-[0.06em] sm:text-7xl">
          BUILT FOR
          <br />
          MEMBERSHIP
        </h1>
        <p className="max-w-xl text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Account tools are frontend-ready for sign in, saved addresses, order
          timeline, and profile management. Backend auth and customer records
          are next.
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
            Saved carts + wishlist sync
          </li>
          <li className="border-b border-[var(--line)] pb-3">
            Order history + shipment tracking
          </li>
          <li>Rewards, loyalty tiers, private drop access</li>
        </ul>
      </article>
    </section>
  );
}

