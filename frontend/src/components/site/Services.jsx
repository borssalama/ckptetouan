import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    key: "kine",
    title: "Kinésithérapie",
    sub: "Soin clinique fondamental",
    desc: "Mobilisations manuelles, étirements et thérapies passives pour restaurer la fonction articulaire et musculaire.",
    img: "https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  },
  {
    key: "massage",
    title: "Massage thérapeutique",
    sub: "Toucher médical d'excellence",
    desc: "Drainage profond, libération myofasciale et techniques suédoises pour relâcher tensions et stress musculaire.",
    img: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  },
  {
    key: "sport",
    title: "Rééducation sportive",
    sub: "Performance & récupération",
    desc: "Protocoles avancés pour athlètes : prévention des blessures, retour au sport et optimisation du mouvement.",
    img: "https://images.unsplash.com/photo-1709880754472-be89c13abc52?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  },
  {
    key: "lombaire",
    title: "Traitement lombaire",
    sub: "Soulagement du dos",
    desc: "Protocole ciblé pour lombalgies, sciatiques et douleurs chroniques — mobilisation, renforcement et éducation.",
    img: "https://images.unsplash.com/photo-1645005512942-a17817fb7c11?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  },
  {
    key: "posture",
    title: "Rééducation posturale",
    sub: "Réharmoniser le corps",
    desc: "Méthode globale qui rééduque la posture et corrige les déséquilibres pour un alignement durable.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  },
  {
    key: "drainage",
    title: "Drainage & Relaxation",
    sub: "Bien-être profond",
    desc: "Drainage lymphatique, relaxation et récupération sensorielle pour apaiser le système nerveux.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
  },
];

export default function Services() {
  const ref = useReveal();
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.75), behavior: "smooth" });
  };

  return (
    <section id="services" data-testid="services-section" className="relative py-28 sm:py-36 bg-sand/40">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-widest2 text-teal-dark">— Nos Soins</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-charcoal max-w-3xl">
              Une médecine du mouvement <span className="italic text-teal-dark">précise</span>, à chaque étape.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-testid="services-scroll-prev"
              onClick={() => scroll(-1)}
              className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-charcoal/15 hover:bg-white transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              data-testid="services-scroll-next"
              onClick={() => scroll(1)}
              className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-charcoal text-ivory hover:bg-teal-dark transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory"
        data-testid="services-scroller"
      >
        <div className="flex gap-6 px-6 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4">
          {SERVICES.map((s, i) => (
            <article
              key={s.key}
              data-testid={`service-card-${s.key}`}
              className="snap-start shrink-0 w-[78vw] sm:w-[46vw] lg:w-[28vw] xl:w-[24rem] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-charcoal">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="img-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-ivory">
                  <span className="text-[10px] uppercase tracking-widest2 opacity-80">
                    {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest2 opacity-80">{s.sub}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-ivory">
                  <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-2 text-[13px] text-ivory/80 leading-relaxed line-clamp-3">
                    {s.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[12px] text-ivory/90">
                    <span className="inline-block h-px w-8 bg-teal" />
                    En savoir plus
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
