import { useReveal } from "@/lib/useReveal";
import { BRAND, WHATSAPP_URL } from "@/lib/brand";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export default function Appointment() {
  const ref = useReveal();
  return (
    <section id="contact" data-testid="appointment-section" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-[2.5rem] bg-charcoal text-ivory px-6 sm:px-12 lg:px-20 py-16 sm:py-20"
        >
          {/* Decorative blobs */}
          <div className="blob" style={{ width: 500, height: 500, background: "#2BA89E", top: -150, right: -100, opacity: 0.4 }} />
          <div className="blob" style={{ width: 400, height: 400, background: "#C9A86A", bottom: -150, left: -100, opacity: 0.15 }} />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-widest2 text-teal-light">— Prenez rendez-vous</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
                Un soin attentif,
                <br />
                <span className="italic text-teal-light">à un clic.</span>
              </h2>
              <p className="mt-5 text-ivory/70 max-w-md leading-relaxed text-[15px]">
                Contactez-nous directement sur WhatsApp pour discuter de votre besoin et
                réserver votre première séance. Nous répondons rapidement.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="appointment-whatsapp-cta"
                  className="magnetic inline-flex items-center gap-3 rounded-full bg-teal text-ivory pl-5 pr-2 py-2 text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Réserver via WhatsApp</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ivory text-teal-dark">
                    →
                  </span>
                </a>
                <a
                  href={`tel:${BRAND.phoneIntl.replace(/\s/g, "")}`}
                  data-testid="appointment-call-cta"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-5 py-3 text-sm hover:bg-ivory/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {BRAND.phone}
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-dark rounded-3xl p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/20 text-teal-light mb-3">
                  <MapPin className="h-4 w-4" />
                </span>
                <p className="text-[10px] uppercase tracking-widest2 text-ivory/60">Adresse</p>
                <p className="mt-1.5 font-serif text-lg leading-snug">
                  286 N° 2, Av. Hassan II<br />
                  Tetouan 93000
                </p>
              </div>
              <div className="glass-dark rounded-3xl p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/20 text-teal-light mb-3">
                  <Phone className="h-4 w-4" />
                </span>
                <p className="text-[10px] uppercase tracking-widest2 text-ivory/60">Téléphone</p>
                <p className="mt-1.5 font-serif text-lg">{BRAND.phone}</p>
              </div>
              <div className="glass-dark rounded-3xl p-6 sm:col-span-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/20 text-teal-light mb-3">
                  <Clock className="h-4 w-4" />
                </span>
                <p className="text-[10px] uppercase tracking-widest2 text-ivory/60">Horaires</p>
                <div className="mt-2 grid grid-cols-2 gap-3 text-[14px]">
                  <p className="text-ivory/80">Lun — Ven</p>
                  <p className="font-serif">09h — 19h</p>
                  <p className="text-ivory/80">Samedi</p>
                  <p className="font-serif">09h — 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
