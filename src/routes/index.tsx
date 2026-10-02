import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import workBloom from "@/assets/work-bloom.jpg";
import workLoop from "@/assets/work-loop.jpg";
import workKickkit from "@/assets/work-kickkit.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plonk Studio — Digital marketing that pops" },
      { name: "description", content: "Strategy, design and campaigns for brands that want to be impossible to ignore. Big ideas, shipped fast." },
      { property: "og:title", content: "Plonk Studio — Digital marketing that pops" },
      { property: "og:description", content: "Strategy, design and campaigns for brands that want to be impossible to ignore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "140+", label: "brands launched", bg: "bg-pop text-primary-foreground", shadow: "shadow-[0_8px_0_var(--pop-deep)]" },
  { value: "3.4x", label: "avg. campaign lift", bg: "bg-mint text-primary-foreground", shadow: "shadow-[0_8px_0_var(--mint-deep)]" },
  { value: "9 yrs", label: "making noise", bg: "bg-sun text-ink", shadow: "shadow-[0_8px_0_var(--sun-deep)]" },
  { value: "24/7", label: "client dashboard", bg: "bg-brand text-primary-foreground", shadow: "shadow-[0_8px_0_var(--brand-deep)]" },
];

const services = [
  { n: "01", title: "Brand & Design", desc: "Identities, sites and design systems that turn heads and hold up at scale.", chip: "bg-pop/15 text-pop" },
  { n: "02", title: "Growth & Paid", desc: "Performance campaigns and SEO that keep the metrics pointing up, not sideways.", chip: "bg-mint/15 text-mint" },
  { n: "03", title: "Content & Social", desc: "Always-on content engines built to earn attention and keep it, channel by channel.", chip: "bg-brand/15 text-brand" },
];

const work = [
  { img: workBloom, tag: "Brand launch", tagColor: "text-pop", title: "Bloom Coffee Co.", result: "+212% repeat orders in 90 days." },
  { img: workLoop, tag: "Paid + SEO", tagColor: "text-brand", title: "Loop Ledger", result: "Cut CAC by 38% across search." },
  { img: workKickkit, tag: "Social engine", tagColor: "text-mint", title: "Kickkit Sneakers", result: "5M organic reach in one quarter." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <SiteNav />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-14 md:px-8 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint/15 px-3.5 py-2 text-xs font-bold uppercase tracking-widest text-mint">
              Digital marketing studio
            </span>
            <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.92] md:text-8xl">
              We make brands <span className="text-pop">pop</span> off the page.
            </h1>
            <p className="mt-6 max-w-md text-lg font-medium text-ink/70">
              Strategy, design and campaigns for brands that want to be impossible to ignore. Big ideas, shipped fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-sun px-7 py-4 font-display text-lg font-semibold text-ink shadow-[0_6px_0_var(--sun-deep)] transition-transform hover:-translate-y-0.5">
                Start a project
              </Link>
              <Link to="/work" className="rounded-full border-2 border-ink px-7 py-4 font-display text-lg font-semibold text-ink transition-colors hover:bg-ink hover:text-cream">
                See our work
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className={`rounded-3xl p-5 ${s.bg} ${s.shadow}`}>
                <p className="font-display text-4xl font-semibold">{s.value}</p>
                <p className="mt-1 text-sm font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y-4 border-ink/10 bg-sun/20">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">What we do</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.n} className="rounded-3xl border-2 border-ink/10 bg-card p-7 transition hover:-translate-y-1">
                <span className={`grid size-14 place-items-center rounded-2xl font-display text-2xl font-bold ${s.chip}`}>{s.n}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 font-medium text-ink/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">Selected work</h2>
          <Link to="/work" className="whitespace-nowrap text-sm font-bold text-brand hover:underline">
            View all case studies
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {work.map((w) => (
            <div key={w.title} className="overflow-hidden rounded-3xl border-2 border-ink/10 bg-card">
              <img src={w.img} alt={w.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <p className={`text-xs font-bold uppercase tracking-widest ${w.tagColor}`}>{w.tag}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm font-medium text-ink/60">{w.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT PLATFORM */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="grid items-center gap-10 rounded-[2rem] bg-ink p-8 text-cream md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex rounded-full bg-pop px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">
              Client platform
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Your whole engagement, in one bright dashboard.
            </h2>
            <p className="mt-4 max-w-sm font-medium text-cream/70">
              Track active projects, invoices and campaign metrics in a single playful workspace built for how agencies actually work.
            </p>
            <Link to="/login" className="mt-7 inline-block rounded-full bg-sun px-7 py-4 font-display font-semibold text-ink shadow-[0_6px_0_var(--sun-deep)] transition-transform hover:-translate-y-0.5">
              Log in to your space
            </Link>
          </div>
          <div className="rounded-3xl bg-cream p-5 text-ink shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="font-display font-semibold">Dashboard</p>
              <span className="text-xs font-bold text-ink/50">October 2026</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-mint/15 p-4">
                <p className="text-xs font-bold text-ink/50">Active projects</p>
                <p className="font-display text-3xl font-semibold">3</p>
              </div>
              <div className="rounded-2xl bg-pop/15 p-4">
                <p className="text-xs font-bold text-ink/50">Invoices due</p>
                <p className="font-display text-3xl font-semibold">$4,200</p>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-2xl bg-card p-3.5">
                <span className="text-sm font-semibold">Q4 Brand Refresh</span>
                <span className="rounded-full bg-sun/40 px-2.5 py-1 text-xs font-bold text-ink">In progress</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-card p-3.5">
                <span className="text-sm font-semibold">Paid Social Sprint</span>
                <span className="rounded-full bg-mint/30 px-2.5 py-1 text-xs font-bold text-ink">On track</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
