import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import workBloom from "@/assets/work-bloom.jpg";
import workLoop from "@/assets/work-loop.jpg";
import workKickkit from "@/assets/work-kickkit.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Plonk Studio" },
      { name: "description", content: "Case studies from Plonk Studio: brand launches, paid growth and social engines with real numbers." },
      { property: "og:title", content: "Selected Work — Plonk Studio" },
      { property: "og:description", content: "Brand launches, paid growth and social engines with real numbers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const cases = [
  {
    img: workBloom,
    tag: "Brand launch",
    tagColor: "text-pop",
    title: "Bloom Coffee Co.",
    result: "+212% repeat orders in 90 days.",
    detail: "Full identity, packaging and launch campaign for a specialty roaster entering three new cities.",
    stats: [["+212%", "repeat orders"], ["3", "new cities"], ["6 wks", "launch window"]],
  },
  {
    img: workLoop,
    tag: "Paid + SEO",
    tagColor: "text-brand",
    title: "Loop Ledger",
    result: "Cut CAC by 38% across search.",
    detail: "Rebuilt the paid search account and content hub for a fintech scaling past its first 10k users.",
    stats: [["-38%", "CAC"], ["4.1x", "ROAS"], ["10k+", "users reached"]],
  },
  {
    img: workKickkit,
    tag: "Social engine",
    tagColor: "text-mint",
    title: "Kickkit Sneakers",
    result: "5M organic reach in one quarter.",
    detail: "An always-on short-form content engine that turned a sneaker drop brand into a community.",
    stats: [["5M", "organic reach"], ["120k", "new followers"], ["1", "sold-out drop"]],
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-14 md:px-8 md:pt-16">
        <span className="inline-flex rounded-full bg-pop/15 px-3.5 py-2 text-xs font-bold uppercase tracking-widest text-pop">Selected work</span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
          Proof, not <span className="text-brand">promises</span>.
        </h1>
        <p className="mt-6 max-w-md text-lg font-medium text-ink/70">
          Every project below shipped on time and moved a number that matters.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-5 pb-16 md:px-8">
        {cases.map((c, i) => (
          <article key={c.title} className={`grid items-center gap-8 overflow-hidden rounded-3xl border-2 border-ink/10 bg-card lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="p-4 lg:p-6">
              <img src={c.img} alt={c.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-2xl object-cover" />
            </div>
            <div className="p-7 lg:p-10">
              <p className={`text-xs font-bold uppercase tracking-widest ${c.tagColor}`}>{c.tag}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{c.title}</h2>
              <p className="mt-3 font-medium text-ink/70">{c.detail}</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {c.stats.map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-sun/20 p-3 text-center">
                    <p className="font-display text-xl font-semibold">{v}</p>
                    <p className="text-xs font-bold text-ink/50">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm font-bold text-brand">{c.result}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 text-center md:px-8">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Want numbers like these?</h2>
        <Link to="/contact" className="mt-8 inline-block rounded-full bg-sun px-8 py-4 font-display text-lg font-semibold text-ink shadow-[0_6px_0_var(--sun-deep)] transition-transform hover:-translate-y-0.5">
          Start a project
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
