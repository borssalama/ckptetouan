import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/brand";

export default function Hero() {
  const heroRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // Parallax shifts based on mouse position
  const shiftX = (mouse.x - 0.5) * 20;
  const shiftY = (mouse.y - 0.5) * 20;

  return (
    <section
      ref={heroRef}
      id="accueil"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden cinematic-bg"
    >
      {/* Ambient organic blobs */}
      <div
        className="blob"
        style={{
          width: 520,
          height: 520,
          background: "#B2C2BB",
          top: -120,
          left: -120,
          opacity: 0.45,
          transform: `translate(${shiftX * 1.5}px, ${shiftY * 1.5}px)`,
          transition: "transform 0.6s ease-out",
        }}
      />
      <div
        className="blob"
        style={{
          width: 620,
          height: 620,
          background: "#C9A86A",
          bottom: -200,
          right: -160,
          opacity: 0.28,
          transform: `translate(${-shiftX * 1.5}px, ${-shiftY * 1.5}px)`,
          transition: "transform 0.6s ease-out",
        }}
      />

      {/* Mouse-reactive ambient light */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x * 100}% ${
            mouse.y * 100
          }%, rgba(43,168,158,0.15), transparent 60%)`,
        }}
      />

      {/* Heartbeat line decoration */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-[1] heartbeat-track pointer-events-none">
        <svg viewBox="0 0 1400 80" className="w-[200%] animate-heartbeat-line opacity-30">
          <path
            d="M0 40 L200 40 L240 20 L280 60 L320 10 L360 70 L400 40 L800 40 L840 25 L880 55 L920 5 L960 75 L1000 40 L1400 40"
            fill="none"
            stroke="#2BA89E"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Soft particles */}
      <Particles />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 pt-32 sm:pt-40 pb-16 grid lg:grid-cols-12 gap-10 items-end min-h-[100svh]">
        {/* Left content */}
        <div className="lg:col-span-7 flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="pill text-[11px] uppercase tracking-widest2 text-teal-dark inline-flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Centre de Kinésithérapie · Tétouan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            data-testid="hero-title"
            className="font-serif text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.98] tracking-[-0.025em] text-charcoal"
          >
            Retrouvez votre
            <span className="block italic text-teal-dark">
              mobilité
              <span className="text-charcoal"> avec excellence.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="max-w-xl text-[15px] sm:text-base text-charcoal/70 leading-relaxed"
          >
            Une approche cinématique de la kinésithérapie. Rééducation médicale, récupération
            sportive, massage thérapeutique et bien-être postural — guidés par l'expertise
            d'Iman El Jemaati et des techniques de pointe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-rdv"
              className="magnetic group inline-flex items-center gap-3 rounded-full bg-charcoal text-ivory pl-5 pr-2 py-2 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Prendre rendez-vous</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-ivory transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#services"
              data-testid="hero-cta-services"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-3 text-sm text-charcoal hover:bg-white/60 transition-colors"
            >
              Découvrir les soins
            </a>
          </motion.div>

          {/* Hero strip below */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 flex items-center gap-6 text-[12px] text-charcoal/60"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-soft-pulse" />
              Cliniquement supervisé
            </span>
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Approche personnalisée
            </span>
            <span className="hidden md:inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Méthodes manuelles & équipement
            </span>
          </motion.div>
        </div>

        {/* Right: image + floating glass card */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(31,95,88,0.35)]"
            style={{ transform: `translate(${shiftX * -0.6}px, ${shiftY * -0.6}px)`, transition: "transform 0.6s ease-out" }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85"
                alt="Soin de kinésithérapie en lumière naturelle"
                className="img-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Floating glass CTA card */}
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <div className="glass rounded-3xl p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest2 text-teal-dark">Soin signature</p>
                  <p className="font-serif text-lg leading-tight text-charcoal mt-1">
                    Rééducation guidée
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="hero-floating-cta"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal text-ivory hover:bg-teal-dark transition-colors"
                  aria-label="Réserver"
                >
                  →
                </a>
              </div>
            </div>

            {/* Floating badge (outside overflow clip) */}
            <div className="absolute -top-4 -left-4 z-10 glass rounded-2xl px-4 py-3 animate-float-y">
              <p className="text-[10px] uppercase tracking-widest2 text-stone">Expertise</p>
              <p className="font-serif text-xl text-charcoal">10+ ans</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest2 text-charcoal/50">
        <span>Défiler</span>
        <ArrowDown className="h-3 w-3 animate-float-y" />
      </div>
    </section>
  );
}

function Particles() {
  const items = Array.from({ length: 18 });
  return (
    <div aria-hidden className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {items.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const dur = 8 + Math.random() * 14;
        const delay = Math.random() * -10;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-teal/30"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `float-y ${dur}s ease-in-out ${delay}s infinite`,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </div>
  );
}
