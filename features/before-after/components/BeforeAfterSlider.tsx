'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import Image from 'next/image';
import { GripVertical } from 'lucide-react';
import { springs } from '@/shared/styles/animations';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-11 — BeforeAfterSlider Temporal Distortion
// Chromatic aberration edge (RGB split), drag distortion via SVG filter,
// Physics-based spring handle
// ═══════════════════════════════════════════════════════════

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Motion values
  const sliderX = useMotionValue(50);
  // Velocity tracker for distortion
  const velocity = useMotionValue(0);
  const lastX = useRef(50);

  // Derived stylistic values
  const clipPath = useTransform(sliderX, (x) => `inset(0 ${100 - x}% 0 0)`);
  const handleLeft = useTransform(sliderX, (x) => `calc(${x}% - 24px)`);
  // Amount of SVG distortion based on velocity
  const distortionAmount = useTransform(velocity, [-50, 0, 50], [15, 0, 15]);

  // Track velocity
  useEffect(() => {
    let frame: number;
    const trackVelocity = () => {
      const currentX = sliderX.get();
      const v = (currentX - lastX.current) * 10; // Simple velocity
      velocity.set(velocity.get() * 0.8 + v * 0.2); // Smooth it
      lastX.current = currentX;
      frame = requestAnimationFrame(trackVelocity);
    };
    frame = requestAnimationFrame(trackVelocity);
    return () => cancelAnimationFrame(frame);
  }, [sliderX, velocity]);

  const handleDragStart = () => setIsDragging(true);

  const handleDragEnd = () => {
    setIsDragging(false);
    // Snap to edges if very close
    if (sliderX.get() < 5) animate(sliderX, 0, springs.bouncy);
    if (sliderX.get() > 95) animate(sliderX, 100, springs.bouncy);
  };

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const percent = (x / rect.width) * 100;
    sliderX.set(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    handleDragStart();
    updateSlider(e.clientX);
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      updateSlider(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    handleDragEnd();
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <>
      <svg className="hidden">
        <defs>
          <filter id="temporal-distortion">
            <motion.feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.1"
              numOctaves="1"
              result="noise"
            />
            <motion.feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={distortionAmount}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border-8 border-white cursor-ew-resize select-none bg-black touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* AFTER IMAGE (Background) */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            filter: isDragging ? 'url(#temporal-distortion)' : 'none',
            scale: isDragging ? 1.02 : 1
          }}
          transition={springs.gentle}
        >
          <Image src="https://picsum.photos/1200/800?random=1" alt="After cleaning" fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" />
        </motion.div>

        {/* BEFORE IMAGE (Foreground, clipped) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden"
          style={{
            clipPath,
            filter: isDragging ? 'url(#temporal-distortion)' : 'none'
          }}
        >
          <motion.div style={{ scale: isDragging ? 1.02 : 1 }} transition={springs.gentle} className="w-full h-full">
            <Image src="https://picsum.photos/1200/800?random=2" alt="Before cleaning" fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover filter grayscale brightness-75 sepia-[.3]" />
          </motion.div>

          {/* Chromatic Aberration Edge Divider */}
          <div className="absolute top-0 right-0 h-full w-[2px] bg-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            {/* RGB Split Glows */}
            <div className="absolute top-0 -left-[2px] w-[2px] h-full bg-[#00ffff] opacity-70 blur-[1px] mix-blend-screen" />
            <div className="absolute top-0 -right-[2px] w-[2px] h-full bg-[#ff00ff] opacity-70 blur-[1px] mix-blend-screen" />
          </div>
        </motion.div>

        {/* Physics Handle */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-20 shadow-[0_4px_20px_rgba(155,28,46,0.5)] border-2 border-white pointer-events-none"
          style={{ left: handleLeft }}
          animate={{
            scale: isDragging ? 0.9 : 1,
            backgroundColor: isDragging ? 'rgba(232, 93, 117, 1)' : 'rgba(155, 28, 46, 1)',
          }}
          transition={springs.snappy}
        >
          <GripVertical className="w-5 h-5 text-white" />
        </motion.div>

        {/* Labels with floating animation */}
        <motion.div
          className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white text-mini font-bold px-4 py-2 rounded-full z-20 uppercase tracking-[0.1em] border border-white/10"
          animate={{ opacity: isDragging ? 0 : 1, y: isDragging ? -10 : 0 }}
        >
          Vorher
        </motion.div>
        <motion.div
          className="absolute top-6 right-6 bg-primary text-white text-mini font-bold px-4 py-2 rounded-full z-20 uppercase tracking-[0.1em] shadow-lg"
          animate={{ opacity: isDragging ? 0 : 1, y: isDragging ? -10 : 0 }}
        >
          Nachher
        </motion.div>
      </div>
    </>
  );
}
