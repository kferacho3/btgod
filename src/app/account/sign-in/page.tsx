import Link from "next/link";

export default function SignInPage() {
  return (
    <section className="card-shell grid gap-8 p-6 sm:p-8 xl:grid-cols-[1fr_1fr]">
      <div className="space-y-6">
        <p className="eyebrow">Account Sign In</p>
        <h1 className="display-font text-[clamp(2.2rem,10vw,4.6rem)] leading-[0.88] tracking-[0.05em] sm:tracking-[0.06em]">
          STEP INTO
          <br />
          THE AURA
        </h1>
        <p className="max-w-lg text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Sign in to manage orders, track drops, save favorites, and unlock members-only launches.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <article className="border border-[var(--line)] p-4">
            <p className="eyebrow">Member Perk</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
              Early access to limited capsule releases.
            </p>
          </article>
          <article className="border border-[var(--line)] p-4">
            <p className="eyebrow">Member Perk</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
              Saved size profile for faster checkout.
            </p>
          </article>
        </div>
      </div>

      <form className="border border-[var(--line)] p-5 sm:p-6">
        <div className="space-y-2">
          <p className="eyebrow">Welcome Back</p>
          <h2 className="display-font text-[clamp(1.8rem,8vw,3rem)] leading-[0.95] tracking-[0.07em]">
            Login
          </h2>
        </div>
        <div className="mt-6 grid gap-3">
          <input
            type="email"
            placeholder="Email Address"
            className="field-input h-12"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="field-input h-12"
            required
          />
          <button type="submit" className="btn-solid h-12 w-full">
            Sign In
          </button>
          <button type="button" className="btn-outline h-12 w-full">
            Continue With Google
          </button>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-[0.66rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          <button type="button" className="hover:text-[var(--text-primary)]">
            Forgot Password
          </button>
          <Link href="/shop" className="hover:text-[var(--text-primary)]">
            Continue As Guest
          </Link>
        </div>
      </form>
    </section>
  );
}
