"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Award,
  MapPin,
  Shield,
} from "lucide-react";
const ParticleEmitter = dynamic(
  () => import("@/features/hero/components/ParticleEmitter"),
  { ssr: false },
);
import TextReveal from "@/shared/components/TextReveal";
import Button from "@/shared/components/Button";
import ImagePlaceholder from "@/shared/components/ImagePlaceholder";
import { springs, float } from "@/shared/styles/animations";
import MagneticTilt from "@/shared/components/MagneticTilt";
import MagneticButton from "@/shared/components/MagneticButton";

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-04 — Hero Singularity Event Horizon
// Scroll-reactive parallax, CTA breathing, cosmic entrance
// ═══════════════════════════════════════════════════════════

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-reactive implosion: scale down + blur up + fade out on scroll-away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
  // Blur and opacity removed — they made the hero unreadable on scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const parallaxBg = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Smooth spring-wrapped transforms
  const smoothScale = useSpring(heroScale, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(heroY, { stiffness: 80, damping: 20 });

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-background [perspective:1200px]"
    >
      {/* Particle Background with parallax offset */}
      <motion.div
        className="absolute inset-0 z-0 opacity-80"
        style={{ y: parallaxBg }}
      >
        <ParticleEmitter />
      </motion.div>

      {/* Ambient gradient orbs (parallax layers) */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #9B1C2E 0%, transparent 70%)",
          y: useTransform(scrollYProgress, [0, 1], [0, -120]),
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #D6A848 0%, transparent 70%)",
          y: useTransform(scrollYProgress, [0, 1], [0, -80]),
        }}
      />

      {/* Content wrapper with scroll-reactive implosion */}
      <motion.div
        className="container-fluid flex flex-col lg:flex-row gap-16 lg:gap-20 items-center relative z-10 [transform-style:preserve-3d]"
        style={{
          scale: smoothScale,
          y: smoothY,
          opacity: heroOpacity,
        }}
      >
        {/* Left: Text Content */}
        <div className="w-full lg:w-[52%] relative z-10 lg:pr-6 min-w-0">
          <TextReveal
            text="Makellose Räume für anspruchsvolle Unternehmen"
            as="h1"
            mode="words"
            staggerDelay={0.06}
            className="text-h1 font-bold text-text-primary mb-6 leading-[1.05] tracking-tighter font-display drop-shadow-sm"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ...springs.gentle }}
            className="text-lg lg:text-xl font-light text-text-secondary mb-10 max-w-xl leading-[1.8]"
          >
            Von einem Team, das Reinigung als Handwerk versteht. Langjährige
            Erfahrung und praxisbewährte Abläufe, die Ihren Reinigungsaufwand auf Null
            reduzieren. Für zufriedene Unternehmen und Kunden in ganz Nordhessen.
          </motion.p>

          {/* CTAs with breathing pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, ...springs.gentle }}
            className="flex flex-col sm:flex-row gap-5 mb-12"
          >
            <MagneticButton magneticIntensity={0.25}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                animate={{ scale: [1, 1.015, 1] }}
                transition={{
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Button
                  href="/contact"
                  variant="primary"
                  className="text-base font-bold px-8 py-4 shadow-elevated omega-glow w-full sm:w-auto justify-center"
                >
                  <span className="flex items-center">
                    Kostenlose Erstberatung sichern
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </span>
                </Button>
              </motion.div>
            </MagneticButton>
            <MagneticButton magneticIntensity={0.15}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  href="tel:+4915234754386"
                  variant="ghost"
                  className="text-base font-bold px-8 py-4 w-full sm:w-auto justify-center"
                >
                  <span className="flex items-center">
                    <Phone className="mr-3 w-5 h-5 opacity-80" />
                    0152 34754386
                  </span>
                </Button>
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Trust-Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t border-border/80"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
              <Shield className="w-4 h-4 text-trust-gold" />
              <span>Betriebshaftpflicht versichert</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
              <Award className="w-4 h-4 text-trust-gold" />
              <span>Inhabergeführt &amp; Verlässlich</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-trust-gold" />
              <span>Langjährige Erfahrung</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
              <MapPin className="w-4 h-4 text-trust-gold" />
              <span>Nordhessen</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Hero Image with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, ...springs.gentle }}
          className="w-full lg:w-[44%] relative h-[420px] sm:h-[500px] lg:h-auto lg:aspect-[4/5] min-w-0 [transform-style:preserve-3d]"
        >
          <MagneticTilt maxTilt={8} depth={40} className="w-full h-full">
            {/* Rotating background shape */}
            <motion.div
              animate={{ rotate: [-3, -2, -3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary-light/5 rounded-[2.5rem] scale-95 z-0"
            />
            <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-elevated border border-border/60 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-bold text-xl px-4 text-center">
                Platzhalter für Inhaberbild
              </span>
            </div>
          </MagneticTilt>

          {/* Floating Trust Badge with spring physics */}
          <motion.div
            variants={float}
            initial="idle"
            animate="active"
            className="absolute -bottom-10 -left-10 z-20 max-w-xs hidden lg:block"
            style={{ translateZ: 80 }} // Pull out further in 3D space
          >
            <MagneticTilt maxTilt={15} depth={20}>
              <div className="bg-white/95 backdrop-blur-xl p-6 lg:p-8 rounded-3xl shadow-card border border-border/60 omega-depth">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-surface shadow-inner-glow flex items-center justify-center text-primary">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary font-display">
                      Qualitätsgarantie
                    </p>
                    <p className="text-xs text-text-secondary">
                      Zufriedenheit an erster Stelle
                    </p>
                  </div>
                </div>
              </div>
            </MagneticTilt>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
