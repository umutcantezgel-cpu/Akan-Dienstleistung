'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Camera, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-18 — Footer Typographic Architecture
// Hover micro-animations, social glow rings, gradient divider
// ═══════════════════════════════════════════════════════════

export default function Footer() {
  return (
    <footer className="bg-surface relative overflow-hidden border-t border-border pt-32 pb-16">
      <div className="absolute inset-0 noise-overlay" />

      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-light text-2xl font-display shadow-glow cursor-pointer"
              >
                A
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
                  className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary text-text-secondary transition-all shadow-sm hover:shadow-[0_4px_16px_rgba(155,28,46,0.2)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-primary font-bold mb-8 font-display">Navigation</h4>
            <ul className="space-y-5 text-base font-medium text-text-secondary">
              {[
                { href: '/', label: 'Startseite' },
                { href: '/ueber-uns', label: 'Über uns' },
                { href: '/services', label: 'Leistungen' },
                { href: '/galerie', label: 'Galerie' },
                { href: '/contact', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center hover:text-primary transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-60 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-primary font-bold mb-8 font-display">Kontakt</h4>
            <ul className="space-y-5 text-sm text-text-secondary">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Musterstraße 12<br />34281 Gudensberg</span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+4915234754386" className="hover:text-primary transition-colors font-bold text-text-primary">0152 34754386</a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@akan-dienstleistung.de" className="hover:text-primary transition-colors">info@akan-dienstleistung.de</a>
              </li>
            </ul>
          </div>

          {/* Map Column */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden h-56 bg-surface border border-border relative shadow-card group cursor-pointer"
          >
            <Image src="https://picsum.photos/400/300?random=map" alt="Map location" fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-xl text-tiny tracking-wide text-text-primary font-bold shadow-soft group-hover:shadow-elevated transition-shadow">Karte öffnen</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar with gradient line */}
        <div className="relative pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-tiny tracking-wide text-text-secondary font-medium">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div>© 2024 AKAN Dienstleistung. Alle Rechte vorbehalten.</div>
          <div className="flex space-x-8">
            <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
