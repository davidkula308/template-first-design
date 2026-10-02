import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Plonk Studio" },
      { name: "description", content: "Start a project with Plonk Studio. Tell us where you want to be in 12 months and we'll map the route." },
      { property: "og:title", content: "Contact — Plonk Studio" },
      { property: "og:description", content: "Start a project with Plonk Studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-16 md:px-8 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="inline-flex rounded-full bg-mint/15 px-3.5 py-2 text-xs font-bold uppercase tracking-widest text-mint">Start a project</span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
              Let's make some <span className="text-pop">noise</span>.
            </h1>
            <p className="mt-6 max-w-md text-lg font-medium text-ink/70">
              Tell us what you're building and where you want to be in 12 months. We reply within one business day — usually faster.
            </p>
            <div className="mt-10 space-y-4">
              <div className="rounded-3xl border-2 border-ink/10 bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Email</p>
                <a href="mailto:hello@plonk.studio" className="mt-1 font-display text-xl font-semibold text-brand">hello@plonk.studio</a>
              </div>
              <div className="rounded-3xl border-2 border-ink/10 bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Studio</p>
                <p className="mt-1 font-display text-xl font-semibold">Nairobi · remote worldwide</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border-2 border-ink/10 bg-card p-7 md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="grid size-16 place-items-center rounded-full bg-mint/15 font-display text-3xl font-bold text-mint">✓</span>
                <h2 className="mt-6 font-display text-3xl font-semibold">Message sent!</h2>
                <p className="mt-2 max-w-xs font-medium text-ink/70">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success("Thanks! We'll reply within one business day.");
                }}
              >
                <div>
                  <label htmlFor="name" className="text-sm font-bold text-ink/70">Your name</label>
                  <input id="name" required className="mt-1.5 w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 py-3 font-medium outline-none focus:border-brand" placeholder="Ada Lovelace" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-bold text-ink/70">Email</label>
                  <input id="email" type="email" required className="mt-1.5 w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 py-3 font-medium outline-none focus:border-brand" placeholder="ada@company.com" />
                </div>
                <div>
                  <label htmlFor="budget" className="text-sm font-bold text-ink/70">Budget range</label>
                  <select id="budget" className="mt-1.5 w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 py-3 font-medium outline-none focus:border-brand">
                    <option>$5k – $15k</option>
                    <option>$15k – $50k</option>
                    <option>$50k+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-bold text-ink/70">What are you building?</label>
                  <textarea id="message" required rows={4} className="mt-1.5 w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 py-3 font-medium outline-none focus:border-brand" placeholder="Tell us about the project…" />
                </div>
                <button type="submit" className="w-full rounded-full bg-sun px-7 py-4 font-display text-lg font-semibold text-ink shadow-[0_6px_0_var(--sun-deep)] transition-transform hover:-translate-y-0.5">
                  Send it over
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
