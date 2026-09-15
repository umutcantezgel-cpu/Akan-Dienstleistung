'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/shared/utils/utils';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-07 — Process Step
// "So funktioniert's" flow: Nummer + Icon + Titel + Beschreibung
// ═══════════════════════════════════════════════════════════

interface ProcessStepProps {
    step: number;
    title: string;
    description: string;
    icon: ReactNode;
    isLast?: boolean;
    className?: string;
}

export default function ProcessStep({ step, title, description, icon, isLast = false, className }: ProcessStepProps) {
    return (
        <div className={cn("relative flex gap-6", className)}>
            {/* Step Number + Connector Line */}
            <div className="flex flex-col items-center shrink-0">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl font-display shadow-glow relative z-10"
                >
                    {step}
                </motion.div>
                {!isLast && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent my-3 min-h-[48px]" />
                )}
            </div>

            {/* Content */}
            <div className="pb-10">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary" aria-hidden="true">{icon}</span>
                    <h3 className="text-lg font-bold text-text-primary font-display tracking-tight">{title}</h3>
                </div>
                <p className="text-base text-text-secondary leading-relaxed max-w-md">{description}</p>
            </div>
        </div>
    );
}
