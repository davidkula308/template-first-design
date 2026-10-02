import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Plonk Studio" },
      { name: "description", content: "Plonk is a small, senior digital marketing studio. Nine years, 140+ brands, zero account managers." },
      { property: "og:title", content: "About — Plonk Studio" },
      { property: "og:description", content: "A small, senior digital marketing studio. Nine years, 140+ brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Loud beats safe", desc: "If the work doesn't make someone feel something, it goes back in the oven.", bg: "bg-pop text-primary-foreground", shadow: "shadow-[0_8px_0_var(--pop-deep)]" },
  { title: "Small on purpose", desc: "You work with the people who do the work. No hand-offs, no telephone game.", bg: "bg-mint text-primary-foreground", shadow: "shadow-[0_8px_0_var(--mint-deep)]" },
  { title: "Numbers or it didn't happen", desc: "Every campaign ships with a metric it's trying to move. We report the misses too.", bg: "bg-sun text-ink", shadow: "shadow-[0_8px_0_var(--sun-deep)]" },
  { title: "Fast is a feature", desc: "Momentum wins. We'd rather ship a great thing Friday than a perfect thing never.", bg: "bg-brand text-primary-foreground", shadow: "shadow-[0_8px_0_var(--brand-deep)]" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-14 md:px-8 md:pt-16">
        <span className="inline-flex rounded-full bg-brand/15 px-3.5 py-2 text-xs font-bold uppercase tracking-widest text-brand">About us</span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
          A small studio with a <span className="text-pop">big</span> volume knob.
        </h1>
        <p className="mt-6 max-w-lg text-lg font-medium text-ink/70">
          Plonk started in 2017 with two desks and one belief: most marketing is wallpaper. Nine years and 140+ brands later, we still only take on work we can make impossible to ignore.
        </p>
      </section>

      <section className="border-y-4 border-ink/10 bg-sun/20">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">How we work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className={`rounded-3xl p-7 ${v.bg} ${v.shadow}`}>
                <h3 className="font-display text-2xl font-semibold">{v.title}</h3>
                <p className="mt-2 font-medium opacity-90">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Sound like your kind of studio?</h2>
        <Link to="/contact" className="mt-8 inline-block rounded-full bg-sun px-8 py-4 font-display text-lg font-semibold text-ink shadow-[0_6px_0_var(--sun-deep)] transition-transform hover:-translate-y-0.5">
          Say hello
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
