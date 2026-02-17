import Link from "next/link";

export default function AccountPage() {
  return (
    <section className="card-shell grid gap-7 p-6 sm:p-8 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-6">
        <p className="eyebrow">Artist + Producer Access</p>
        <h1 className="display-font text-6xl leading-[0.88] tracking-[0.06em] sm:text-7xl">
          MEMBER
          <br />
          COMMAND
        </h1>
        <p className="max-w-xl text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Your account hub controls saved beat crates, licensing receipts, session invites,
          and private-drop access. Frontend architecture is ready for backend auth integration.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/account/sign-in" className="btn-solid">
            Open Sign In
          </Link>
          <Link href="/shop" className="btn-outline">
            Return To Catalog
          </Link>
        </div>
      </div>
      <article className="border border-[var(--line)] p-5">
        <p className="eyebrow">Platform Roadmap</p>
        <ul className="mt-4 space-y-3 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
          <li className="border-b border-[var(--line)] pb-3">
            Email/password + social sign in
          </li>
          <li className="border-b border-[var(--line)] pb-3">
            Saved beat crates + collaborative playlists
          </li>
          <li className="border-b border-[var(--line)] pb-3">
            License history + receipt download center
          </li>
          <li>Priority drop alerts + invite-only producer rooms</li>
        </ul>
      </article>
    </section>
  );
}
