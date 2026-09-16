"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Building2,
  Sparkles,
  AlertTriangle,
  Factory,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ImagePlaceholder from "@/shared/components/ImagePlaceholder";
import Button from "@/shared/components/Button";
import ServiceCard from "@/shared/components/ServiceCard";
import BeforeAfterSlider from "@/features/before-after/components/BeforeAfterSlider";
import { serviceDetails, type ServiceDetail } from "../data/serviceDetails";
import {
  springs,
  staggerContainer,
  fadeInUp,
} from "@/shared/styles/animations";

interface ServiceDetailBlueprintProps {
  service: ServiceDetail;
}

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Sparkles,
  AlertTriangle,
  Factory,
};

export default function ServiceDetailBlueprint({
  service,
}: ServiceDetailBlueprintProps) {
  const Icon = iconMap[service.iconName] || Building2;

  // Cross-selling logic: Get 3 other services
  const relatedServices = Object.values(serviceDetails)
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <article className="pb-section-lg overflow-hidden">
      {/* 1. Hero Section (Hook) */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-surface">
        <div className="container-fluid relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zu Services
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-8 shadow-inner-glow group"
            >
              <Icon className="w-10 h-10 svg-draw-effect" />
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-black text-text-primary uppercase tracking-tighter mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl lg:text-2xl text-text-secondary font-medium tracking-wide mb-10 text-measure mx-auto"
            >
              {service.subtitle}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                href="/contact"
                size="lg"
                className="shadow-lg shadow-primary/25 animate-pulse-glow"
              >
                {service.title} anfragen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* 2. Problem/Pain-Point (Agitation) */}
      <section className="py-section bg-background">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springs.gentle}
            >
              <h2 className="text-3xl font-bold mb-6 text-text-primary font-display">
                Kennen Sie diese Herausforderungen?
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-4">
                {service.painPoints.map((pain, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border/40"
                  >
                    <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-red-100/50 flex items-center justify-center text-red-500">
                      <span className="text-sm font-bold">!</span>
                    </div>
                    <span className="text-text-primary font-medium">
                      {pain}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Interactive Image Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={springs.gentle}
              className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-border/60"
            >
              <ImagePlaceholder
                alt={service.imagePlaceholderAlt}
                fill
                priority={true}
                className="object-cover"
                originalSrc={service.imageSrc}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Lösungs-Features (Benefits) */}
      <section className="py-section bg-surface">
        <div className="container-fluid">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary font-display mb-4">
              Ihre Vorteile mit AKAN
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Wir lösen Probleme nicht nur, wir beseitigen ihre Ursachen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springs.gentle, delay: idx * 0.1 }}
                className="group bg-background p-8 rounded-2xl border border-border/60 shadow-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 className="w-6 h-6 svg-draw-effect" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3b. Vorher-Nachher Transformation */}
      {service.beforeAfter && (
        <section className="py-section bg-surface/60 border-y border-border">
          <div className="container-fluid max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3.5 py-1 rounded-full">
                Sichtbarer Qualitätsbeweis
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary font-display tracking-tight mt-3 mb-4">
                {service.beforeAfter.title}
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-base">
                {service.beforeAfter.description}
              </p>
            </div>
            <div className="max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-elevated border border-border/60">
              <BeforeAfterSlider
                beforeImage={service.beforeAfter.beforeImage}
                afterImage={service.beforeAfter.afterImage}
                beforeLabel={service.beforeAfter.beforeLabel}
                afterLabel={service.beforeAfter.afterLabel}
              />
            </div>
          </div>
        </section>
      )}

      {/* 4. Leistungsdetails & CTA */}
      <section className="py-section">
        <div className="container-fluid max-w-5xl mx-auto">
          <div className="bg-primary text-white rounded-[2.5rem] p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-card text-center">
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mb-8">
                Was gehört dazu?
              </h2>
              <ul className="text-left max-w-2xl mx-auto space-y-4 mb-12">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-white/90"
                  >
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-white/60" />
                    <span className="text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-2 !border-white !text-white hover:!bg-white hover:!text-primary shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Kostenloses Angebot anfordern
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cross-Selling (Related Services) */}
      {relatedServices.length > 0 && (
        <section className="py-section-lg bg-surface border-t border-border/60">
          <div className="container-fluid">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4 font-display">
                Das könnte Sie auch interessieren
              </h2>
              <p className="text-text-secondary">
                Entdecken Sie unsere weiteren Reinigungsdienstleistungen.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedServices.map((relatedService, idx) => {
                const RelatedIcon =
                  iconMap[relatedService.iconName] || Building2;
                return (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springs.gentle, delay: idx * 0.1 }}
                    className="h-full"
                  >
                    <ServiceCard
                      title={relatedService.title}
                      description={relatedService.subtitle}
                      icon={RelatedIcon}
                      href={`/leistungen/${relatedService.slug}`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
