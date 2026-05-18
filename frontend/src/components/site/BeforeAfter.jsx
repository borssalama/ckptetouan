import { useReveal } from "@/lib/useReveal";

const STEPS = [
  {
    n: "01",
    title: "Bilan clinique",
    text: "Évaluation approfondie de votre histoire, posture et amplitude articulaire pour identifier précisément la source du déséquilibre.",
  },
  {
    n: "02",
    title: "Plan thérapeutique",
    text: "Conception d'un programme sur-mesure mêlant techniques manuelles, exercices guidés et équipements de récupération.",
  },
  {
    n: "03",
    title: "Soin & progression",
    text: "Séances rythmées par une écoute continue, des ajustements précis et un suivi mesurable de votre récupération.",
  },
  {
    n: "04",
    title: "Retour à la vie active",
    text: "Réintégration progressive du mouvement, prévention des récidives et autonomie durable au quotidien.",
  },
];

export default function BeforeAfter() {
  const r1 = useReveal();
  const r2 = useReveal();
  return (
    <section data-testid="recovery-journey" className="relative py-28 sm:py-36 bg-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={r1} className="reveal max-w-3xl">
          <p className="text-[11px] uppercase tracking-widest2 text-teal-dark">— Parcours de récupération</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-charcoal">
            De la douleur,
            <br />
            <span className="italic text-teal-dark">vers le mouvement retrouvé.</span>
          </h2>
          <p className="mt-5 text-charcoal/70 max-w-xl leading-relaxed text-[15px]">
            Une approche en quatre temps, conçue comme une partition médicale — précise,
            rythmée, attentive aux nuances de chaque corps.
          </p>
        </div>

        <div ref={r2} className="reveal mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 rounded-[2rem] overflow-hidden">
          {STEPS.map((s) => (
            <div
              key={s.n}
              data-testid={`recovery-step-${s.n}`}
              className="bg-ivory p-7 sm:p-8 hover:bg-white transition-colors group"
            >
              <p className="font-serif text-5xl text-teal-dark/70 group-hover:text-teal-dark transition-colors">{s.n}</p>
              <h3 className="mt-4 font-serif text-xl text-charcoal">{s.title}</h3>
              <p className="mt-2 text-[13.5px] text-charcoal/65 leading-relaxed">{s.text}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-teal/60 via-gold/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
