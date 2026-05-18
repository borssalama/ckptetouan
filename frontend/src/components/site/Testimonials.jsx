import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Yasmine A.",
    role: "Patiente — Tétouan",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&w=400&q=85",
    text:
      "Après trois mois de lombalgie persistante, j'ai retrouvé une mobilité que je ne croyais plus possible. Iman écoute, ajuste, et chaque séance laisse une trace bienfaisante.",
  },
  {
    name: "Karim B.",
    role: "Sportif amateur",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&w=400&q=85",
    text:
      "Rééducation post-entorse menée avec une précision rare. Le protocole sportif m'a permis de revenir sur le terrain plus fort et plus conscient de mon corps.",
  },
  {
    name: "Salima T.",
    role: "Professeur de yoga",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&w=400&q=85",
    text:
      "Le travail postural a transformé ma pratique. Le lieu, le toucher, l'approche — tout ici respire l'excellence calme. Une référence à Tétouan.",
  },
];

export default function Testimonials() {
  const ref = useReveal();
  const [idx, setIdx] = useState(0);
  const go = (d) => setIdx((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  const current = TESTIMONIALS[idx];

  return (
    <section id="temoignages" data-testid="testimonials-section" className="relative py-28 sm:py-36 bg-champagne/50">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-teal-dark">— Témoignages</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-charcoal">
              Ils ont retrouvé
              <br />
              <span className="italic text-teal-dark">leur élan.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              data-testid="testimonial-prev"
              className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-charcoal/15 hover:bg-white transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              data-testid="testimonial-next"
              className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-charcoal text-ivory hover:bg-teal-dark transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div data-testid="testimonial-card" className="glass rounded-[2.5rem] p-8 sm:p-12 relative">
          <Quote className="absolute top-8 right-8 h-12 w-12 text-teal/20" />
          <div className="flex gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-serif text-2xl sm:text-3xl lg:text-[34px] leading-[1.25] text-charcoal max-w-3xl">
            « {current.text} »
          </p>
          <div className="mt-8 flex items-center gap-4">
            <img src={current.avatar} alt={current.name} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-serif text-lg text-charcoal">{current.name}</p>
              <p className="text-[12px] uppercase tracking-widest2 text-stone">{current.role}</p>
            </div>
            <div className="ml-auto flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${i === idx ? "w-8 bg-teal" : "w-3 bg-charcoal/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
