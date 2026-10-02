import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Client Dashboard — Plonk Studio" },
      { name: "description", content: "Your Plonk client space: active projects, invoices and campaign metrics in one place." },
      { property: "og:title", content: "Client Dashboard — Plonk Studio" },
      { property: "og:description", content: "Active projects, invoices and campaign metrics in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const projects = [
  { name: "Q4 Brand Refresh", status: "In progress", statusBg: "bg-sun/40", progress: "w-2/3", bar: "bg-sun" },
  { name: "Paid Social Sprint", status: "On track", statusBg: "bg-mint/30", progress: "w-4/5", bar: "bg-mint" },
  { name: "Holiday Campaign", status: "Kickoff", statusBg: "bg-pop/20", progress: "w-1/5", bar: "bg-pop" },
];

const invoices = [
  { id: "INV-2041", label: "Brand Refresh — milestone 2", amount: "$2,400", due: "Due Oct 15" },
  { id: "INV-2042", label: "Paid Social — October", amount: "$1,800", due: "Due Oct 31" },
];

const metrics = [
  { label: "Reach this month", value: "842k", delta: "+18%", bg: "bg-mint/15" },
  { label: "Avg. ROAS", value: "4.1x", delta: "+0.6", bg: "bg-sun/25" },
  { label: "New followers", value: "12.4k", delta: "+9%", bg: "bg-pop/15" },
];

function DashboardPage() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
          Plonk<span className="text-pop">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm font-semibold text-ink/60 sm:block">Bloom Coffee Co.</span>
          <Link to="/login" className="rounded-full border-2 border-ink px-4 py-2 text-sm font-bold transition-colors hover:bg-ink hover:text-cream">
            Log out
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">Good morning, Ada.</h1>
            <p className="mt-2 font-medium text-ink/60">Here's everything happening across your engagement — October 2026.</p>
          </div>
          <span className="rounded-full bg-mint/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-mint">All systems go</span>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className={`rounded-3xl border-2 border-ink/10 p-6 ${m.bg}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-ink/50">{m.label}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="font-display text-4xl font-semibold">{m.value}</p>
                <span className="rounded-full bg-mint/30 px-2 py-0.5 text-xs font-bold">{m.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Projects */}
          <section className="rounded-3xl border-2 border-ink/10 bg-card p-7">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold">Active projects</h2>
              <span className="text-xs font-bold text-ink/50">3 running</span>
            </div>
            <div className="mt-5 space-y-4">
              {projects.map((p) => (
                <div key={p.name} className="rounded-2xl bg-cream p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{p.name}</span>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${p.statusBg}`}>{p.status}</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-ink/10">
                    <div className={`h-full rounded-full ${p.progress} ${p.bar}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Invoices */}
          <section className="rounded-3xl border-2 border-ink/10 bg-card p-7">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold">Invoices</h2>
              <span className="rounded-full bg-pop/15 px-3 py-1 text-xs font-bold text-pop">$4,200 due</span>
            </div>
            <div className="mt-5 space-y-3">
              {invoices.map((inv) => (
                <div key={inv.id} className="flex items-center justify-between rounded-2xl bg-cream p-4">
                  <div>
                    <p className="text-sm font-bold">{inv.label}</p>
                    <p className="text-xs font-semibold text-ink/50">{inv.id} · {inv.due}</p>
                  </div>
                  <span className="font-display text-lg font-semibold">{inv.amount}</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-full bg-sun px-6 py-3.5 font-display font-semibold text-ink shadow-[0_5px_0_var(--sun-deep)] transition-transform hover:-translate-y-0.5">
              Pay outstanding invoices
            </button>
          </section>
        </div>

        {/* Deliverables */}
        <section className="mt-6 rounded-3xl bg-ink p-7 text-cream">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold">Latest deliverables</h2>
            <span className="text-xs font-bold text-cream/50">Updated today</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Homepage hero concepts v2", "October content calendar", "Q3 performance report"].map((d) => (
              <div key={d} className="flex items-center justify-between rounded-2xl bg-cream/10 p-4">
                <span className="text-sm font-semibold">{d}</span>
                <span className="rounded-full bg-mint px-2.5 py-1 text-xs font-bold text-ink">New</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
