"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Sparkles, MoveRight, Eye, Shield, Sun } from "lucide-react";
import Button from "@/shared/components/Button";
import ImagePlaceholder from "@/shared/components/ImagePlaceholder";
import {
  springs,
  staggerContainer,
  fadeInUp,
} from "@/shared/styles/animations";
import type { ServiceDetail } from "../data/serviceDetails";

interface Props {
  service: ServiceDetail;
}

// Clean Hero without interactive blur
function ClearHero({ service }: Props) {
  return (
    <section className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-blue-50/50 isolation-isolate min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          alt={service.imagePlaceholderAlt}
          fill
          priority={true}
          className="object-cover"
        />
      </div>

      {/* Solid Overlay instead of blur for perfect readability */}
      <div className="absolute inset-0 z-10 bg-white/70" />

      {/* Content */}
      <div className="container-fluid relative z-30">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm bg-white px-4 py-2 rounded-full shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zu Services
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white text-blue-600 mb-8 shadow-lg border border-white"
          >
            <Sparkles className="w-10 h-10" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-black text-blue-950 uppercase tracking-tighter mb-6 bg-white p-4 rounded-3xl inline-block shadow-xl border border-blue-50"
          >
            {service.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-blue-900 font-medium tracking-wide mb-10 text-measure bg-white p-6 rounded-3xl shadow-lg border border-blue-50"
          >
            {service.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              href="/contact"
              size="lg"
              className="shadow-[0_10px_40px_rgba(37,99,235,0.3)] bg-blue-600 hover:bg-blue-700 text-white border-none"
            >
              Kostenloses Angebot anfordern
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function GlasreinigungTemplate({ service }: Props) {
  return (
    <article className="bg-[#f8fafc] text-slate-800 selection:bg-blue-200">
      {/* 1. Clean Hero */}
      <ClearHero service={service} />

      {/* 2. Trust Elements & Refraction Metaphor */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative CSS Refraction Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent skew-x-12 opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-cyan-50 to-transparent -skew-x-12 opacity-50 pointer-events-none" />

        <div className="container-fluid max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900 font-display">
              Klarheit, die Eindruck hinterlässt.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {service.description} Repräsentative Fensterfronten für Ihr
              Unternehmen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Streifenfreie Sicht",
                desc: "Spezial-Osmoseverfahren für rückstandslose Trocknung auch bei starker Sonneneinstrahlung.",
              },
              {
                icon: Sun,
                title: "Rahmenschonend",
                desc: "Intensive Pflege von Eloxal-, Kunststoff- und Holzrahmen für langfristigen Werterhalt.",
              },
              {
                icon: Shield,
                title: "Sichere Höhenzugänge",
                desc: "Hubsteiger- und Seilzugangstechnik für schwer erreichbare Glasfassaden & Wintergärten.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springs.gentle, delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] transition-shadow group relative overflow-hidden"
              >
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/80 to-white/0 opacity-0 group-hover:opacity-100 rotate-45 scale-150 transition-all duration-700 ease-in-out group-hover:translate-x-full" />

                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature List with Metaphoric Design */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="container-fluid max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Was gehört zur professionellen Glasreinigung?
              </h2>
              <ul className="space-y-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-lg text-slate-300"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <MoveRight className="w-4 h-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-blue-50"
                >
                  Angebot für Ihr Objekt
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden">
              {/* Inner Glass Morphism Pane */}
              <div className="absolute inset-4 z-10 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-sm shadow-2xl flex items-end p-8">
                <div className="bg-black/40 backdrop-blur-md text-white p-6 rounded-2xl border border-white/10">
                  <p className="font-bold text-lg mb-2">Makelloser Glanz</p>
                  <p className="text-sm text-slate-300 opacity-90">
                    Wir reinigen mit System und garantieren Ergebnisse ohne
                    Kompromisse.
                  </p>
                </div>
              </div>
              <ImagePlaceholder
                alt="Perfekte Glasfassade"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
