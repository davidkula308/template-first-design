import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
      <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-ink">
        Plonk<span className="text-pop">.</span>
      </Link>
      <div className="hidden items-center gap-8 text-[15px] font-semibold text-ink md:flex">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="transition-colors hover:text-brand">
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="inline-flex items-center gap-1 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_5px_0_var(--brand-deep)] transition-transform hover:-translate-y-0.5"
        >
          Client Login
        </Link>
        <button
          className="grid size-10 place-items-center rounded-full border-2 border-ink/10 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="absolute inset-x-4 top-20 z-50 rounded-3xl border-2 border-ink/10 bg-card p-6 shadow-2xl md:hidden">
          <div className="flex flex-col gap-4 text-lg font-semibold text-ink">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="hover:text-brand">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 md:flex-row md:px-8">
        <Link to="/" className="font-display text-2xl font-semibold text-ink">
          Plonk<span className="text-pop">.</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-ink/60">
          <a href="mailto:hello@plonk.studio" className="hover:text-brand">hello@plonk.studio</a>
          <Link to="/work" className="hover:text-brand">Work</Link>
          <Link to="/services" className="hover:text-brand">Services</Link>
          <Link to="/login" className="hover:text-brand">Client Login</Link>
        </div>
        <p className="text-xs font-semibold text-ink/40">© 2026 Plonk Studio</p>
      </div>
    </footer>
  );
}
