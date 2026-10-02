import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Plonk Studio" },
      { name: "description", content: "Brand & design, growth & paid, content & social — the three ways Plonk makes brands impossible to ignore." },
      { property: "og:title", content: "Services — Plonk Studio" },
      { property: "og:description", content: "Brand & design, growth & paid, content & social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Brand & Design",
    chip: "bg-pop/15 text-pop",
    desc: "Identities, sites and design systems that turn heads and hold up at scale.",
    items: ["Brand strategy & positioning", "Visual identity & logo systems", "Website design & build", "Design systems & guidelines"],
  },
  {
    n: "02",
    title: "Growth & Paid",
    chip: "bg-mint/15 text-mint",
    desc: "Performance campaigns and SEO that keep the metrics pointing up, not sideways.",
    items: ["Paid search & social", "SEO & content strategy", "Conversion rate optimisation", "Analytics & reporting"],
  },
  {
    n: "03",
    title: "Content & Social",
    chip: "bg-brand/15 text-brand",
    desc: "Always-on content engines built to earn attention and keep it, channel by channel.",
    items: ["Social media management", "Video & motion content", "Email & lifecycle marketing", "Community building"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-14 md:px-8 md:pt-16">
        <span className="inline-flex rounded-full bg-mint/15 px-3.5 py-2 text-xs font-bold uppercase tracking-widest text-mint">Services</span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
          Three ways we make you <span className="text-pop">louder</span>.
        </h1>
        <p className="mt-6 max-w-md text-lg font-medium text-ink/70">
          Every engagement mixes strategy, craft and speed. Pick a lane — or let us build the whole engine.
        </p>
      </section>

      <section className="border-y-4 border-ink/10 bg-sun/20">
        <div className="mx-auto max-w-7xl space-y-6 px-5 py-14 md:px-8">
          {services.map((s) => (
            <div key={s.n} className="grid gap-6 rounded-3xl border-2 border-ink/10 bg-card p-7 md:grid-cols-[auto_1fr_1fr] md:items-center md:p-10">
              <span className={`grid size-16 place-items-center rounded-2xl font-display text-3xl font-bold ${s.chip}`}>{s.n}</span>
              <div>
                <h2 className="font-display text-3xl font-semibold">{s.title}</h2>
                <p className="mt-2 font-medium text-ink/70">{s.desc}</p>
              </div>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-ink/80">
                    <span className="size-2 rounded-full bg-pop" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Not sure which lane?</h2>
        <p className="mx-auto mt-4 max-w-md font-medium text-ink/70">Tell us where you want to be in 12 months. We'll map the route.</p>
        <Link to="/contact" className="mt-8 inline-block rounded-full bg-sun px-8 py-4 font-display text-lg font-semibold text-ink shadow-[0_6px_0_var(--sun-deep)] transition-transform hover:-translate-y-0.5">
          Start a project
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
