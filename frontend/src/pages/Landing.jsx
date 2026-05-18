import { useEffect, useState } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import CountersStrip from "@/components/site/CountersStrip";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import HumanMotion from "@/components/site/HumanMotion";
import BeforeAfter from "@/components/site/BeforeAfter";
import WellnessExperience from "@/components/site/WellnessExperience";
import Testimonials from "@/components/site/Testimonials";
import Appointment from "@/components/site/Appointment";
import Footer from "@/components/site/Footer";
import { WHATSAPP_URL } from "@/lib/brand";
import { MessageCircle } from "lucide-react";

export default function Landing() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="grain min-h-screen overflow-x-clip">
      {/* Loading screen */}
      <div
        data-testid="loading-screen"
        aria-hidden={loaded}
        style={{
          opacity: loaded ? 0 : 1,
          pointerEvents: loaded ? "none" : "auto",
          transition: "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="fixed inset-0 z-[200] bg-ivory flex flex-col items-center justify-center"
      >
        <p className="font-serif text-2xl text-charcoal tracking-tight">CKP Tétouan</p>
        <p className="mt-2 text-[10px] uppercase tracking-widest2 text-stone">Kinésithérapie</p>
        <div className="mt-8 w-48 bg-charcoal/10 rounded-full overflow-hidden">
          <div className="loader-bar" />
        </div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <CountersStrip />
        <About />
        <Services />
        <HumanMotion />
        <BeforeAfter />
        <WellnessExperience />
        <Testimonials />
        <Appointment />
      </main>

      <Footer />

      {/* Sticky floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        data-testid="sticky-whatsapp-fab"
        className="fixed bottom-20 sm:bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-teal text-ivory pl-4 pr-2 py-2 shadow-[0_12px_30px_-10px_rgba(43,168,158,0.6)] hover:bg-teal-dark transition-colors magnetic"
        aria-label="Prendre rendez-vous via WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline text-[13px]">Rendez-vous</span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ivory text-teal-dark text-sm">→</span>
      </a>
    </div>
  );
}
