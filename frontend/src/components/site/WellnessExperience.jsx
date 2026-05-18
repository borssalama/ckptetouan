import { useReveal } from "@/lib/useReveal";

export default function WellnessExperience() {
  const ref = useReveal();
  return (
    <section data-testid="wellness-experience" className="relative">
      <div ref={ref} className="reveal relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=srgb&fm=jpg&w=2000&q=85"
          alt="Espace wellness CKP Tétouan"
          className="img-cover scale-110"
          loading="lazy"
          style={{ filter: "saturate(0.95) brightness(0.92)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6">
            <div className="max-w-2xl text-ivory">
              <p className="text-[11px] uppercase tracking-widest2 text-teal-light">— L'expérience CKP</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
                Un sanctuaire de récupération,
                <br />
                <span className="italic text-teal-light">pensé comme une œuvre.</span>
              </h2>
              <p className="mt-5 text-ivory/80 leading-relaxed text-[15px] max-w-xl">
                Lumière naturelle traversant des rideaux translucides, matières apaisantes,
                équipement médical de précision. Notre clinique a été conçue pour rééduquer
                autant le corps que les sens.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { k: "Lumière", v: "Naturelle" },
                  { k: "Matières", v: "Organiques" },
                  { k: "Équipement", v: "Médical" },
                ].map((item) => (
                  <div key={item.k} className="border-l border-ivory/20 pl-3">
                    <p className="text-[10px] uppercase tracking-widest2 text-ivory/60">{item.k}</p>
                    <p className="mt-1 font-serif text-lg">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
