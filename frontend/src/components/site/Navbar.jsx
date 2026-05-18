import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL, BRAND } from "@/lib/brand";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 px-3 sm:px-4 py-2 sm:py-2.5 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#accueil" data-testid="navbar-logo" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-ivory">
              <span className="font-serif text-[15px] font-semibold tracking-tight">CK</span>
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold ring-2 ring-ivory" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-[15px] text-charcoal">{BRAND.name}</span>
              <span className="text-[10px] uppercase tracking-widest2 text-stone">Kinésithérapie</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-").replace(/[éà]/g, "")}`}
                className="px-3.5 py-2 text-[13px] text-charcoal/80 hover:text-teal transition-colors rounded-full hover:bg-white/40"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="navbar-cta-rdv"
              className="magnetic hidden sm:inline-flex items-center gap-2 rounded-full bg-charcoal text-ivory px-4 py-2 text-[12px] tracking-wide hover:bg-teal transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Prendre rendez-vous
            </a>
            <button
              type="button"
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div data-testid="mobile-menu" className="lg:hidden mt-3 glass rounded-3xl p-4">
            <nav className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-charcoal/80 hover:text-teal border-b border-charcoal/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-teal text-ivory px-5 py-3 text-sm"
              >
                <MessageCircle className="h-4 w-4" /> Prendre rendez-vous
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
