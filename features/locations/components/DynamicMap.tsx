"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { LocationDetail } from "../data/locationData";
import dynamic from "next/dynamic";
import ConsentBoundary from "@/features/consent/components/ConsentBoundary";

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-18 — DynamicMap Organism
// High-performance lazy-loaded Leaflet map with high
// interactivity and responsive Geofence-Radius bounds.
// ═══════════════════════════════════════════════════════════

// Dynamically import the leaflet component to prevent SSR issues (window is not defined)
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-20 w-full h-full flex flex-col items-center justify-center bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/5">
      <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/10 animate-pulse mb-6 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      <span className="text-white/50 font-mono text-xs tracking-[0.3em] uppercase">
        Satellitendaten werden geladen
      </span>
    </div>
  ),
});

interface DynamicMapProps {
  location: LocationDetail | any;
  zoom?: number;
}

export default function DynamicMap({ location, zoom = 11 }: DynamicMapProps) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.section
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "200px" }}
      className="relative w-full h-[500px] lg:h-[600px] bg-[#0a0a0c] overflow-hidden group"
    >
      <ConsentBoundary
        type="functional"
        title="Interaktive Karte"
        description="Um unsere Standorte auf der interaktiven Landkarte zu sehen, benötigen wir Ihre Zustimmung für externe Medien (OpenStreetMap/Google), da Verbindungsdaten übertragen werden."
        fallbackImage="/images/map-placeholder.png"
        className="min-h-[500px] lg:min-h-[600px]"
      >
        {/* Interactive Leaflet Map Layer */}
        <div className="absolute inset-0 z-10 w-full h-full">
          {isInView && <LeafletMap cityName={location.name} zoom={zoom} />}
        </div>

        {/* Vignette Overlay for smooth blending into page background */}
        <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_100px_#050505] bg-gradient-to-t from-background via-transparent to-background/50 opacity-90" />
      </ConsentBoundary>

      {/* Info Card floating over map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-xl p-6 rounded-3xl shadow-elevated border border-border/50 text-center pointer-events-auto z-30 min-w-[280px]"
      >
        <h4 className="font-bold text-text-primary text-xl font-display mb-1">
          {location.name}
        </h4>
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
          Einsatzgebiet
        </p>
        <div className="text-xs text-text-secondary flex justify-center gap-4">
          <span>
            {location.entfernung === "Hauptstandort"
              ? "Zentrale"
              : `${location.entfernung} Anfahrt`}
          </span>
          <span>•</span>
          <span>~25km Radius</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
