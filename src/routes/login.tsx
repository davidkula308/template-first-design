import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Client Login — Plonk Studio" },
      { name: "description", content: "Log in to your Plonk client space to track projects, invoices and campaign metrics." },
      { property: "og:title", content: "Client Login — Plonk Studio" },
      { property: "og:description", content: "Log in to your Plonk client space." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-cream font-body text-ink">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
          Plonk<span className="text-pop">.</span>
        </Link>
        <Link to="/" className="text-sm font-semibold text-ink/60 hover:text-brand">← Back to site</Link>
      </nav>

      <main className="flex flex-1 items-center justify-center px-5 pb-16">
        <div className="w-full max-w-md">
          <div className="rounded-[2rem] border-2 border-ink/10 bg-card p-8 shadow-2xl md:p-10">
            <span className="inline-flex rounded-full bg-pop/15 px-3.5 py-2 text-xs font-bold uppercase tracking-widest text-pop">Client platform</span>
            <h1 className="mt-5 font-display text-4xl font-semibold">Welcome back.</h1>
            <p className="mt-2 font-medium text-ink/60">Your projects, invoices and metrics are waiting.</p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                setTimeout(() => navigate({ to: "/dashboard" }), 600);
              }}
            >
              <div>
                <label htmlFor="login-email" className="text-sm font-bold text-ink/70">Email</label>
                <input id="login-email" type="email" required className="mt-1.5 w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 py-3 font-medium outline-none focus:border-brand" placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="login-password" className="text-sm font-bold text-ink/70">Password</label>
                <input id="login-password" type="password" required className="mt-1.5 w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 py-3 font-medium outline-none focus:border-brand" placeholder="••••••••" />
              </div>
              <button type="submit" disabled={loading} className="w-full rounded-full bg-brand px-7 py-4 font-display text-lg font-semibold text-primary-foreground shadow-[0_6px_0_var(--brand-deep)] transition-transform hover:-translate-y-0.5 disabled:opacity-60">
                {loading ? "Opening your space…" : "Log in"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm font-semibold text-ink/50">
              Not a client yet? <Link to="/contact" className="text-brand hover:underline">Start a project</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
