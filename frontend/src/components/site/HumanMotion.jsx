import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

// Hotspot positions are percentages relative to the silhouette container
const HOTSPOTS = [
  {
    id: "neck",
    label: "Cervicales",
    top: "13%",
    left: "50%",
    services: ["Cervicalgie", "Torticolis", "Posture cervicale"],
  },
  {
    id: "shoulder",
    label: "Épaule",
    top: "22%",
    left: "35%",
    services: ["Coiffe des rotateurs", "Capsulite", "Tendinite"],
  },
  {
    id: "back",
    label: "Dos & Lombaires",
    top: "38%",
    left: "50%",
    services: ["Lombalgie", "Sciatique", "Hernie discale"],
  },
  {
    id: "hip",
    label: "Hanche",
    top: "52%",
    left: "42%",
    services: ["Coxarthrose", "Pubalgie", "Rééducation post-op"],
  },
  {
    id: "knee",
    label: "Genou",
    top: "70%",
    left: "55%",
    services: ["Ligaments croisés", "Méniscale", "Gonarthrose"],
  },
  {
    id: "ankle",
    label: "Cheville",
    top: "88%",
    left: "48%",
    services: ["Entorse", "Tendinopathie", "Récupération sportive"],
  },
];

export default function HumanMotion() {
  const ref = useReveal();
  const [active, setActive] = useState("back");
  const activeSpot = HOTSPOTS.find((h) => h.id === active);

  return (
    <section
      id="motion"
      data-testid="human-motion-section"
      className="relative py-28 sm:py-36 overflow-hidden bg-charcoal text-ivory"
    >
      {/* Ambient glow */}
      <div
        className="blob"
        style={{ width: 700, height: 700, background: "#2BA89E", top: -200, left: "50%", transform: "translateX(-50%)", opacity: 0.18 }}
      />
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(178,194,187,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(178,194,187,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <p className="text-[11px] uppercase tracking-widest2 text-teal-light">— Human Motion</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            Survolez le corps,
            <br />
            <span className="italic text-teal-light">découvrez la solution.</span>
          </h2>
          <p className="text-ivory/70 leading-relaxed max-w-md text-[15px]">
            Une cartographie interactive de votre récupération. Chaque zone du corps regroupe
            des protocoles cliniques adaptés à votre douleur et à vos objectifs.
          </p>

          {/* Zone details */}
          <div className="glass-dark rounded-3xl p-6 mt-4 min-h-[180px]">
            <p className="text-[10px] uppercase tracking-widest2 text-teal-light">
              {activeSpot ? `Zone — ${activeSpot.label}` : "Sélectionnez une zone"}
            </p>
            {activeSpot && (
              <>
                <h3 className="font-serif text-2xl mt-2">{activeSpot.label}</h3>
                <ul className="mt-3 space-y-1.5">
                  {activeSpot.services.map((s) => (
                    <li key={s} className="text-[14px] text-ivory/80 flex items-center gap-2">
                      <span className="h-px w-6 bg-teal" /> {s}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setActive(h.id)}
                data-testid={`zone-pill-${h.id}`}
                className={`text-[11px] uppercase tracking-widest2 rounded-full px-3 py-1.5 border transition-colors ${
                  active === h.id
                    ? "bg-teal text-ivory border-teal"
                    : "bg-transparent text-ivory/70 border-ivory/15 hover:border-ivory/40"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        {/* Silhouette */}
        <div className="lg:col-span-7 relative">
          <div className="relative mx-auto w-full max-w-[480px] aspect-[3/5]">
            {/* Body silhouette via SVG */}
            <BodySVG />
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                type="button"
                onMouseEnter={() => setActive(h.id)}
                onFocus={() => setActive(h.id)}
                onClick={() => setActive(h.id)}
                aria-label={h.label}
                data-testid={`hotspot-${h.id}`}
                className="hotspot -translate-x-1/2 -translate-y-1/2"
                style={{ top: h.top, left: h.left, background: active === h.id ? "#C9A86A" : undefined }}
              />
            ))}
            {/* Connector line from active hotspot to label */}
            {activeSpot && (
              <div
                className="absolute -translate-y-1/2 text-[11px] uppercase tracking-widest2 text-teal-light pointer-events-none"
                style={{ top: activeSpot.top, left: `calc(${activeSpot.left} + 40px)` }}
              >
                <span className="inline-block h-px w-10 bg-teal-light align-middle mr-2" />
                {activeSpot.label}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function BodySVG() {
  return (
    <svg
      viewBox="0 0 200 360"
      fill="none"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B2C2BB" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2BA89E" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="bodyStroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#49CFC5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2BA89E" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <g fill="url(#bodyGrad)" stroke="url(#bodyStroke)" strokeWidth="1.2">
        {/* Head */}
        <circle cx="100" cy="30" r="18" />
        {/* Neck */}
        <rect x="93" y="47" width="14" height="10" rx="3" />
        {/* Torso */}
        <path d="M70 60 Q100 55 130 60 L138 130 Q132 160 128 175 L100 180 L72 175 Q68 160 62 130 Z" />
        {/* Arms */}
        <path d="M70 62 Q50 75 45 110 Q42 140 50 170 Q53 180 60 180 Q66 175 62 165 Q58 140 60 115 Q63 90 75 78 Z" />
        <path d="M130 62 Q150 75 155 110 Q158 140 150 170 Q147 180 140 180 Q134 175 138 165 Q142 140 140 115 Q137 90 125 78 Z" />
        {/* Hips */}
        <path d="M72 175 L128 175 L132 210 L68 210 Z" />
        {/* Legs */}
        <path d="M72 210 L86 210 Q90 260 88 300 Q86 325 82 350 Q80 358 76 358 Q72 355 73 345 Q72 325 70 300 Q66 260 68 230 Z" />
        <path d="M128 210 L114 210 Q110 260 112 300 Q114 325 118 350 Q120 358 124 358 Q128 355 127 345 Q128 325 130 300 Q134 260 132 230 Z" />
      </g>
      {/* Energy lines */}
      <g stroke="#49CFC5" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.4" fill="none">
        <path d="M100 30 L100 360" />
        <path d="M45 110 Q100 100 155 110" />
        <path d="M68 230 L132 230" />
      </g>
    </svg>
  );
}
