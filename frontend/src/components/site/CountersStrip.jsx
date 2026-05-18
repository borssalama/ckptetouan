import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/useReveal";

function Counter({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.floor(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export default function CountersStrip() {
  const ref = useReveal();
  const items = [
    { v: 10, s: "+", label: "Années d'expertise", k: "exp" },
    { v: 1200, s: "+", label: "Patients accompagnés", k: "patients" },
    { v: 25, s: "", label: "Techniques médicales", k: "tech" },
    { v: 98, s: "%", label: "Satisfaction clinique", k: "sat" },
  ];
  return (
    <section
      data-testid="counters-strip"
      className="relative z-10 -mt-8 sm:-mt-16 mx-4 sm:mx-8 lg:mx-auto lg:max-w-6xl"
    >
      <div ref={ref} className="reveal glass rounded-[2.5rem] px-6 sm:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((it, i) => (
          <div
            key={it.k}
            className={`flex flex-col gap-1 ${i !== 0 ? "lg:border-l lg:border-charcoal/10 lg:pl-8" : ""}`}
            data-testid={`counter-${it.k}`}
          >
            <p className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              <Counter to={it.v} suffix={it.s} />
            </p>
            <p className="text-[11px] uppercase tracking-widest2 text-stone">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
