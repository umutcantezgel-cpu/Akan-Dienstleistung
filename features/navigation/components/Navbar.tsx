'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react';
import Button from '@/shared/components/Button';
import { springs, staggerContainer, fadeInUp } from '@/shared/styles/animations';
import { useAppStore } from '@/shared/store/useAppStore';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/services', label: 'Leistungen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useAppStore();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={isScrolled ? 'shrunk' : 'expanded'}
        variants={{
          expanded: {
            height: 100,
            boxShadow: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderBottomColor: 'rgba(241, 229, 231, 0)'
          },
          shrunk: {
            height: 72,
            boxShadow: '0 8px 32px -8px rgba(155, 28, 46, 0.06), 0 1px 3px rgba(0,0,0,0.04)',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            borderBottomColor: 'var(--color-border)'
          },
        }}
        transition={springs.snappy}
        className="fixed w-full top-0 z-50 backdrop-blur-xl border-b"
      >
        <div className="container-fluid h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-4 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-light text-2xl font-display shadow-glow transition-shadow group-hover:shadow-[0_0_40px_-10px_rgba(146,24,41,0.5)]"
              >
                A
              </motion.div>
              <div>
                <span className="block text-xl font-bold text-text-primary leading-none tracking-tight font-display transition-colors group-hover:text-primary">AKAN</span>
                <span className="block text-micro font-semibold text-text-secondary tracking-[0.25em] uppercase mt-1.5 opacity-80">Dienstleistung</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 lg:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-tiny uppercase tracking-widest text-text-secondary hover:text-text-primary font-bold transition-colors group py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="flex flex-col items-end mr-2">
                <span className="flex items-center text-micro text-text-secondary font-medium tracking-wide lowercase">
                  <MapPin className="w-3 h-3 mr-1 opacity-70" /> nordhessen & umgebung
                </span>
                <a href="tel:+4915234754386" className="flex items-center text-sm tracking-wider text-text-primary font-bold group hover:text-primary transition-colors mt-0.5">
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-primary opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                  0152 34754386
                </a>
              </div>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                <Button href="/contact" variant="primary" className="px-7 py-3 text-tiny tracking-wide font-bold shadow-elevated omega-glow">
                  Kostenlose Erstberatung
                </Button>
              </motion.div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <motion.button
                type="button"
                aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                className="text-text-primary hover:text-primary focus:outline-none relative z-[60] w-12 h-12 flex items-center justify-center p-2"
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-8 h-8" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-8 h-8" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Full-Screen Mobile Menu ─────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  variants={fadeInUp}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-bold text-text-primary hover:text-primary transition-colors font-display"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={fadeInUp} className="pt-8 border-t border-border w-48 text-center">
                <a
                  href="tel:+4915234754386"
                  className="flex items-center justify-center text-primary font-bold text-lg mb-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0152 34754386
                </a>
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full text-center tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kostenlose Erstberatung
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
