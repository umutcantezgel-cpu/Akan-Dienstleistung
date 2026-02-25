import { ElementType } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { springs } from '@/shared/styles/animations';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-08 — ServiceCard Molecule
// Interactive card representing a primary service offering.
// State Matrix: Default → Hover (Lift + Glow) → Active
// ═══════════════════════════════════════════════════════════

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ElementType;
    href: string;
    delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                boxShadow: '0 24px 48px -12px rgba(155, 28, 46, 0.12), 0 12px 24px -8px rgba(0,0,0,0.06)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ ...springs.snappy, duration: 0.3 }}
            className="@container group bg-white rounded-2xl p-6 @[600px]:p-8 transition-all duration-300 border border-border h-full shadow-sm focus-within:ring-[3px] focus-within:ring-primary/40 focus-within:ring-offset-2 flex flex-col @[400px]:flex-row @[400px]:gap-6 @[400px]:items-start"
        >
            <div className="relative mb-6 @[400px]:mb-0 @[400px]:w-[40%] shrink-0">
                <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center transition-colors duration-400 md:group-hover:bg-primary group-active:bg-primary"
                >
                    <Icon className="w-7 h-7 text-primary md:group-hover:text-white group-active:text-white transition-colors duration-400 svg-draw-effect" aria-hidden="true" />
                </motion.div>
                <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/0 md:group-hover:bg-primary/10 group-active:bg-primary/10 blur-xl transition-all duration-500 -z-10 scale-150" />
            </div>

            <div className="flex flex-col flex-grow h-full">
                <h4 className="text-xl font-bold text-text-primary mb-3 tracking-tight font-display">{title}</h4>
                <p className="text-text-secondary mb-6 text-base leading-relaxed flex-grow">{description}</p>

                <Link
                    href={href}
                    className="inline-flex items-center text-sm uppercase tracking-widest font-bold text-primary md:group-hover:text-[#7A1624] group-active:text-[#7A1624] transition-colors mt-auto @[600px]:self-end focus:outline-none"
                >
                    <span className="relative">
                        Details
                        <span className="absolute -bottom-1 left-0 w-0 md:group-hover:w-full group-active:w-full h-0.5 bg-[#7A1624] transition-all duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 md:group-hover:translate-x-1.5 group-active:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
                </Link>
            </div>
        </motion.div>
    );
}
