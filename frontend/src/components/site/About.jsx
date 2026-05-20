import { useReveal } from "@/lib/useReveal";
import { Award, HeartPulse, Stethoscope } from "lucide-react";

export default function About() {
  const r1 = useReveal();
  const r2 = useReveal();
  return (
    <section id="apropos" data-testid="about-section" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Portrait */}
        <div ref={r1} className="reveal lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[12rem] rounded-b-[2.5rem] shadow-[0_30px_60px_-20px_rgba(31,95,88,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85"
              alt="Iman El Jemaati, fondatrice"
              className="img-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
          </div>
          {/* Decorative badge */}
          <div className="absolute -bottom-6 -right-2 sm:right-6 glass rounded-3xl px-5 py-4 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-ivory">
              <Award className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-widest2 text-stone">Diplômée d'État</p>
              <p className="font-serif text-charcoal">Kinésithérapeute</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={r2} className="reveal lg:col-span-7 flex flex-col gap-6">
          <p className="text-[11px] uppercase tracking-widest2 text-teal-dark">
            — Notre Fondatrice
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-charcoal">
            Iman El Jemaati,
            <br />
            <span className="italic text-teal-dark">le geste juste</span>
            <span className="text-charcoal"> au service du corps.</span>
          </h2>
          <p className="text-charcoal/70 leading-relaxed max-w-2xl text-[15px] sm:text-base">
            Diplômée d'État en kinésithérapie et passionnée par la rééducation médicale,
            Iman El Jaamati a fondé CKP Tétouan pour offrir une médecine du mouvement
            attentive, précise et profondément humaine. Chaque séance est pensée comme un
            soin — un dialogue entre science, écoute et toucher thérapeutique.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              { icon: Stethoscope, title: "Diagnostic personnalisé", desc: "Bilan clinique complet et plan de soin sur-mesure." },
              { icon: HeartPulse, title: "Suivi continu", desc: "Évaluation régulière de votre progression et adaptation." },
            ].map((b) => (
              <div key={b.title} className="rounded-3xl border border-charcoal/10 bg-white/60 backdrop-blur-sm p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal-dark mb-3">
                  <b.icon className="h-4 w-4" />
                </div>
                <p className="font-serif text-lg text-charcoal">{b.title}</p>
                <p className="text-[13px] text-charcoal/60 mt-1 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="hairline mt-6" />
          <p className="text-[11px] uppercase tracking-widest2 text-stone">
            « Le mouvement est la première forme d'intelligence du corps. »
          </p>
        </div>
      </div>
    </section>
  );
}
