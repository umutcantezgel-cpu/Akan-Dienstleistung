import { ElementType } from 'react';
import { motion } from 'motion/react';
import { springs } from '@/shared/styles/animations';
import Button from '@/shared/components/Button';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-11 — ContactInfoCard Molecule
// Interactive card representing contact information.
// ═══════════════════════════════════════════════════════════

interface ContactInfoCardProps {
    icon: ElementType;
    type: string;
    value: string;
    href: string;
    ctaLabel: string;
    delay?: number;
}

export default function ContactInfoCard({ icon: Icon, type, value, href, ctaLabel, delay = 0 }: ContactInfoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springs.gentle, delay }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)" }}
            className="group bg-surface rounded-2xl p-6 md:p-8 border border-border flex flex-col items-center text-center shadow-sm hover:border-primary/20 transition-all duration-300 focus-within:ring-[3px] focus-within:ring-primary/40 focus-within:ring-offset-2"
        >
            <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-400">
                <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-400" aria-hidden="true" />
            </div>

            <h3 className="text-xl font-bold text-text-primary mb-2 tracking-tight">{type}</h3>
            <p className="text-large text-text-secondary font-medium mb-8">{value}</p>

            <Button variant="secondary" size="default" href={href} className="w-full sm:w-auto">
                {ctaLabel}
            </Button>
        </motion.div>
    );
}
