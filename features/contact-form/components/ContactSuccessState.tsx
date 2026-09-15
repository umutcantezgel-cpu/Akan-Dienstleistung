'use client';

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { springs } from '@/shared/styles/animations';

export default function ContactSuccessState() {
    /* eslint-disable react-hooks/purity */
    const confettiConfig = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        rotate: Math.random() * 360,
        duration: 1 + Math.random(),
        color: ['#921829', '#D6A848', '#1a202c', '#64748b'][i % 4] || '#D6A848'
    })), []);
    /* eslint-enable react-hooks/purity */

    return (
        <motion.div
            key="success"
            data-testid="success-message"
            initial={{ scale: 0.5, opacity: 0, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
            className="py-16 flex flex-col items-center text-center relative z-10"
        >
            {/* Confetti Particles */}
            {confettiConfig.map((confetti: { x: number; y: number; rotate: number; duration: number; color: string }, i: number) => (
                <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                        x: confetti.x,
                        y: confetti.y,
                        scale: [0, 1, 0],
                        opacity: [1, 1, 0],
                        rotate: confetti.rotate
                    }}
                    transition={{ duration: confetti.duration, ease: 'easeOut' }}
                    className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                    style={{ backgroundColor: confetti.color }}
                />
            ))}

            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ ...springs.bouncy, delay: 0.2 }}
                className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-inner-glow border border-border"
            >
                {/* SVG Draw Animation for Checkmark */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500 drop-shadow-sm"
                >
                    <motion.path
                        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    />
                    <motion.path
                        d="M22 4L12 14.01l-3-3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    />
                </motion.svg>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold text-text-primary mb-4 font-display"
            >
                Nachricht gesendet!
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-text-secondary max-w-sm mx-auto leading-relaxed"
            >
                Vielen Dank für Ihr Vertrauen! Ihre Anfrage ist bei uns eingegangen und wird persönlich bearbeitet – kein Callcenter, keine Wartemusik.
            </motion.p>

            {/* Next Steps */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex flex-col items-center gap-2 text-sm text-text-secondary"
            >
                <span className="font-bold text-text-primary">Was passiert jetzt?</span>
                <span>✓ Wir prüfen Ihre Anfrage noch heute</span>
                <span>✓ Persönlicher Rückruf innerhalb von 24h</span>
                <span>✓ Kostenloses Angebot – garantiert unverbindlich</span>
            </motion.div>
        </motion.div>
    );
}
