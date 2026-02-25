'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform, useSpring, useVelocity } from 'motion/react';
import Button from '@/shared/components/Button';
import { springs } from '@/shared/styles/animations';
import { useNavigationStore } from '../store/useNavigationStore';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import AkanLogo from '@/shared/components/AkanLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useNavigationStore();
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const rawLogoRotate = useTransform(scrollY, [0, -150], [0, 360]);
  const logoRotate = useSpring(rawLogoRotate, { stiffness: 400, damping: 25 });

  // HE-01: Smart-Sticky Observer Engine
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isCurrentlyScrolled = latest > 80;
    setIsScrolled(isCurrentlyScrolled);

    // Context-Aware Header Hiding Logic:
    // Glides out of view on scroll down, materializes on scroll up
    const currentVelocity = scrollVelocity.get();
    if (isCurrentlyScrolled && currentVelocity > 150) {
      setIsHidden(true);
    } else if (currentVelocity < -150 || !isCurrentlyScrolled) {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // HE-08: Escape-Key Listener for Accessibility
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, setMobileMenuOpen]);

  // HE-02: Hyperlokales Kontext-Bewusstsein (Contextual Telemetry)
  let contextLabel = null;
  let customCta = "Erstberatung";
  let phoneLabel = "nordhessen";

  if (pathname?.startsWith('/standorte/')) {
    const city = pathname.split('/').pop()?.replace(/-/g, ' ');
    if (city) {
      const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
      contextLabel = `Lokal: ${capitalizedCity}`;
      customCta = `Angebot für ${capitalizedCity}`;
      phoneLabel = capitalizedCity.toLowerCase();
    }
  }

  return (
    <>
      <motion.header
        initial={false}
        animate={isHidden ? 'hidden' : isScrolled ? 'shrunk' : 'expanded'}
        variants={{
          expanded: { y: 0, height: 64, boxShadow: 'none', backgroundColor: 'rgba(255, 255, 255, 0)' },
          shrunk: { y: 0, height: 56, boxShadow: '0 2px 20px rgba(0,0,0,0.08)', backgroundColor: 'rgba(255, 255, 255, 0.98)' },
          hidden: { y: '-100%', height: 56, boxShadow: 'none', backgroundColor: 'rgba(255, 255, 255, 0.98)' }
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed w-full top-0 z-[100] backdrop-blur-[20px] transition-colors duration-300`}
      >
        {/* Optional wine-red gradient on initial state */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none -z-10"
            />
          )}
        </AnimatePresence>

        <div className="container-fluid h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center group focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded-xl">
              <motion.div
                style={{ rotate: logoRotate }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center transition-shadow group-hover:shadow-[0_0_40px_-10px_rgba(146,24,41,0.5)] origin-center"
              >
                <AkanLogo className="w-36 h-[3.25rem] sm:w-44 sm:h-16" />
              </motion.div>
              <div className="flex flex-col relative shrink-0 justify-center">

                {/* Context Indicator Badge */}
                <AnimatePresence>
                  {contextLabel && (
                    <motion.div
                      initial={{ opacity: 0, x: -10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -10, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="absolute -right-3 top-0 translate-x-full bg-primary/10 border border-primary/20 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm hidden lg:flex"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(155,28,46,0.8)]" />
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest whitespace-nowrap">{contextLabel}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>

            {/* Desktop Nav */}
            <DesktopNav />

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-4 xl:gap-6 shrink-0">
              <div className="flex flex-col items-end whitespace-nowrap">
                <span className="flex items-center text-micro text-text-secondary font-medium tracking-wide lowercase">
                  <MapPin className="w-3 h-3 mr-1 opacity-70" aria-hidden="true" /> {phoneLabel}
                </span>
                <a
                  href="tel:+4915234754386"
                  aria-label="Telefonisch kontaktieren: 0152 34754386"
                  className="flex items-center text-sm tracking-wider text-text-primary font-bold group hover:text-primary transition-colors mt-0.5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-primary opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" aria-hidden="true" />
                  0152 34754386
                </a>
              </div>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                <Button href="/contact" variant="primary" className="px-5 py-2.5 text-tiny tracking-wide font-bold shadow-elevated whitespace-nowrap">
                  {customCta}
                </Button>
              </motion.div>
            </div>

            {/* Mobile Hamburger */}
            <div className="xl:hidden flex items-center gap-4">
              <a href="tel:+4915234754386" className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Anrufen">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>
              <motion.button
                type="button"
                aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={isMobileMenuOpen}
                className="text-text-primary hover:text-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded-lg relative z-[60] w-12 h-12 flex items-center justify-center"
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
                      <X className="w-8 h-8" strokeWidth={2} aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-8 h-8" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <MobileNav />
    </>
  );
}
