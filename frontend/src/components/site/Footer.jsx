import { BRAND, WHATSAPP_URL, NAV_LINKS } from "@/lib/brand";
import { Instagram, Phone, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-ivory pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal text-ivory">
                <span className="font-serif text-base font-semibold tracking-tight">CK</span>
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-ivory" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg text-charcoal">{BRAND.name}</span>
                <span className="text-[11px] uppercase tracking-widest2 text-stone mt-1">Kinésithérapie</span>
              </div>
            </div>
            <p className="mt-6 text-charcoal/65 max-w-md leading-relaxed text-[14px]">
              Centre de kinésithérapie et de rééducation médicale à Tétouan, dirigé par
              Iman El Jemaati. Soin, précision, écoute.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal text-ivory px-4 py-2 text-[12px] hover:bg-teal-dark transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-4 py-2 text-[12px] hover:bg-white transition-colors"
              >
                <Instagram className="h-3.5 w-3.5" /> Instagram
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-widest2 text-stone">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-charcoal/75 hover:text-teal-dark transition-colors text-[14px]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-widest2 text-stone">Contact</p>
            <ul className="mt-4 space-y-3.5 text-[14px]">
              <li className="flex items-start gap-3 text-charcoal/75">
                <MapPin className="h-4 w-4 mt-1 text-teal-dark" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3 text-charcoal/75">
                <Phone className="h-4 w-4 text-teal-dark" />
                <a href={`tel:${BRAND.phoneIntl.replace(/\s/g, "")}`} className="hover:text-teal-dark transition-colors">
                  {BRAND.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-charcoal/55">
          <p>© {new Date().getFullYear()} CKP Tétouan — Tous droits réservés.</p>
          <p className="font-serif italic">« Le mouvement, première intelligence du corps. »</p>
        </div>
      </div>
    </footer>
  );
}
