'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Camera, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AkanLogo from '@/shared/components/AkanLogo';
import ImagePlaceholder from '@/shared/components/ImagePlaceholder';
import ConsentBoundary from '@/features/consent/components/ConsentBoundary';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-18 — Footer Typographic Architecture
// Hover micro-animations, social glow rings, gradient divider
// Features mobile accordion for nested sections
// ═══════════════════════════════════════════════════════════

export default function Footer() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="bg-surface relative overflow-hidden border-t border-border pt-32 pb-28 lg:pb-16">
      <div className="absolute inset-0 noise-overlay" />

      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8 pb-8 md:pb-0 border-b border-border/50 md:border-none">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="w-12 h-12 flex items-center justify-center cursor-pointer"
              >
                <AkanLogo className="w-full h-full" />
              </motion.div>
              <span className="text-xl font-bold text-text-primary font-display tracking-tight">AKAN Dienstleistung</span>
            </div>
            <p className="text-base leading-loose text-text-secondary">
              Ihr zuverlässiger Partner für professionelle Gebäudereinigung in Gudensberg und Umgebung. Qualität, die man sieht.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Camera, label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary text-text-secondary transition-all shadow-sm hover:shadow-[0_4px_16px_rgba(155,28,46,0.2)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column w/ Accordion */}
          <div className="border-b border-border/50 md:border-none pb-4 md:pb-0">
            <button
              className="w-full flex items-center justify-between md:cursor-default focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-expanded={isNavOpen}
            >
              <h4 className="text-sm uppercase tracking-widest text-text-primary font-bold md:mb-8 font-display py-4 md:py-0">Navigation</h4>
              <motion.div animate={{ rotate: isNavOpen ? 180 : 0 }} className="md:hidden text-primary">
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              <motion.div
                initial={false}
                animate={isNavOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden md:!h-auto md:!opacity-100 md:!block"
              >
                <ul className="space-y-4 md:space-y-5 text-base font-medium text-text-secondary pb-4 md:pb-0 pt-2 md:pt-0">
                  {[
                    { href: '/', label: 'Startseite' },
                    { href: '/ueber-uns', label: 'Über uns' },
                    { href: '/services', label: 'Leistungen' },
                    { href: '/referenzen', label: 'Referenzen' },
                    { href: '/contact', label: 'Kontakt' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-60 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Contact Column w/ Accordion */}
          <div className="border-b border-border/50 md:border-none pb-4 md:pb-0">
            <button
              className="w-full flex items-center justify-between md:cursor-default focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm"
              onClick={() => setIsContactOpen(!isContactOpen)}
              aria-expanded={isContactOpen}
            >
              <h4 className="text-sm uppercase tracking-widest text-text-primary font-bold md:mb-8 font-display py-4 md:py-0">Kontakt</h4>
              <motion.div animate={{ rotate: isContactOpen ? 180 : 0 }} className="md:hidden text-primary">
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              <motion.div
                initial={false}
                animate={isContactOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden md:!h-auto md:!opacity-100 md:!block"
              >
                <address className="not-italic">
                  <ul className="space-y-4 md:space-y-5 text-sm md:text-base text-text-secondary pb-4 md:pb-0 pt-2 md:pt-0">
                    <li className="flex items-start group">
                      <MapPin className="w-5 h-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>Musterstraße 12<br />34281 Gudensberg</span>
                    </li>
                    <li className="flex items-center group">
                      <Phone className="w-5 h-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                      <a href="tel:+4915234754386" className="hover:text-primary transition-colors font-bold text-text-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm">0152 34754386</a>
                    </li>
                    <li className="flex items-center group">
                      <Mail className="w-5 h-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                      <a href="mailto:info@akan-dienstleistung.de" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm">info@akan-dienstleistung.de</a>
                    </li>
                  </ul>
                </address>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Map Column (Consent Protected) */}
          <div className="pt-4 md:pt-0">
            <ConsentBoundary
              type="functional"
              title="Google Maps"
              description="Um die interaktive Karte anzuzeigen, benötigen wir Ihre Zustimmung (Funktionale Cookies), da hierbei Ihre IP-Adresse an Google in den USA übertragen wird."
            >
              <div className="rounded-2xl overflow-hidden h-56 bg-surface border border-border relative shadow-card">
                <iframe
                  title="AKAN Dienstleistung Standort"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.3218567220037!2d9.358265576014445!3d51.17181513904661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb6e87f877d9c1%3A0xc39cb7dc773e2a9b!2sOdenbergstra%C3%9Fe%2026%2C%2034281%20Gudensberg!5e0!3m2!1sde!2sde!4v1714567890123!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ConsentBoundary>
          </div>
        </div>

        {/* Bottom Bar with gradient line */}
        <div className="relative pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-tiny tracking-wide text-text-secondary font-medium">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div>© 2024 AKAN Dienstleistung. Alle Rechte vorbehalten.</div>
          <div className="flex space-x-8">
            <Link href="/impressum" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
