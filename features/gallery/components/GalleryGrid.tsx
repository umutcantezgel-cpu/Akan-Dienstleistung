"use client";

import { useState, useEffect } from "react";
import { useQueryState } from "nuqs";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import ImagePlaceholder from "@/shared/components/ImagePlaceholder";
import { Maximize2, X } from "lucide-react";
import { springs } from "@/shared/styles/animations";

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-09 — Gallery Grid Quantum Masonry
// Quantum entaglement entrance (jitter + blur), focus-pull lightbox,
// particle dot counts on tabs, shared layout transitions
// ═══════════════════════════════════════════════════════════

export interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const allCategories = categories || [
    "Alle",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];
  const [activeCategory, setActiveCategory] = useQueryState("filter", {
    defaultValue: "Alle",
  });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const filtered =
    activeCategory === "Alle"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="relative">
      {/* ── Filter Tabs mit Quantum State Indicator ── */}
      <div className="flex flex-wrap justify-center gap-4 mb-14 relative z-10">
        {allCategories.map((cat) => {
          const count =
            cat === "Alle"
              ? images.length
              : images.filter((img) => img.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-3 rounded-xl text-tiny font-bold tracking-wide transition-all border flex items-center gap-3 overflow-hidden ${
                isActive
                  ? "bg-primary text-white border-primary shadow-elevated"
                  : "bg-surface text-text-secondary border-border hover:border-primary/50 hover:bg-white hover:shadow-soft hover:text-text-primary"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Quantenzustand Indikator (Background Glow) */}
              {isActive && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-primary-light opacity-50 blur-sm -z-10"
                  initial={false}
                  transition={springs.snappy}
                />
              )}

              <span className="relative z-10">{cat}</span>

              {/* Partikel-Dot-Count */}
              <div
                className={`flex items-center justify-center min-w-[24px] h-[24px] rounded-full text-micro font-bold transition-colors ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-primary/5 text-primary"
                }`}
              >
                {count}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* ── Grid Area ── */}
      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layoutId={`gallery-item-${img.src}`}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)",
                  x: i % 3 === 0 ? -20 : i % 3 === 2 ? 20 : 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  x: 0,
                  transition: {
                    opacity: { duration: 0.4 },
                    scale: { ...springs.bouncy },
                    filter: { duration: 0.5 },
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(10px)",
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-soft border border-border bg-white hover:shadow-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-[4/3] relative overflow-hidden border-b border-border/50">
                    <motion.div
                      layoutId={`gallery-image-${img.src}`}
                      className="w-full h-full"
                    >
                      <ImagePlaceholder
                        alt={img.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        originalSrc={img.src}
                      />
                    </motion.div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm shadow-inner-glow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        transition={springs.snappy}
                      >
                        <Maximize2
                          className="w-6 h-6 text-primary"
                          strokeWidth={2}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    layoutId={`gallery-text-${img.src}`}
                    className="p-8"
                  >
                    <span className="text-mini font-bold text-primary uppercase tracking-[0.2em] mb-2 block">
                      {img.category}
                    </span>
                    <h3 className="text-large font-bold text-text-primary font-display tracking-tight leading-snug">
                      {img.title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Immersive Lightbox (Focus Pull Effect) ── */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-black/75 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                layoutId={`gallery-item-${selectedImage.src}`}
                className="relative max-w-5xl w-full bg-surface rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-black/10">
                  <motion.div
                    layoutId={`gallery-image-${selectedImage.src}`}
                    className="w-full h-full relative z-[1]"
                  >
                    <div className="relative w-full h-[50vh] sm:h-[60vh] max-h-[800px]">
                      <ImagePlaceholder
                        alt={selectedImage.title}
                        fill
                        className="object-contain"
                        originalSrc={selectedImage.src}
                      />
                    </div>
                  </motion.div>

                  {/* Close button inside image area */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.15 }}
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 hover:scale-105 transition-all z-20 cursor-pointer"
                    aria-label="Schließen"
                  >
                    <X className="w-5 h-5" strokeWidth={2} />
                  </motion.button>
                </div>

                <motion.div
                  layoutId={`gallery-text-${selectedImage.src}`}
                  className="p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface"
                >
                  <div>
                    <span className="text-mini font-bold text-primary uppercase tracking-[0.2em] mb-1.5 block">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary font-display tracking-tight leading-tight">
                      {selectedImage.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="self-start sm:self-center px-4 py-2 rounded-xl text-xs font-bold text-text-secondary bg-background hover:bg-border/40 transition-colors border border-border"
                  >
                    Schließen
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
