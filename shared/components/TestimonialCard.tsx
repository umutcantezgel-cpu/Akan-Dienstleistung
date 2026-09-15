import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { springs } from '@/shared/styles/animations';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-09 — TestimonialCard Molecule
// Interactive card representing client feedback.
// State Matrix: Default → Hover (Lift + Glow) → Active
// ═══════════════════════════════════════════════════════════

interface TestimonialCardProps {
    author: string;
    role: string;
    text: string;
    rating: number;
    delay?: number;
}

export default function TestimonialCard({ author, role, text, rating, delay = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springs.gentle, delay }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.96 }}
            className="group relative bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 xl:p-10 border border-white/50 dark:border-white/10 h-full shadow-lg hover:shadow-2xl md:hover:border-primary/30 transition-all duration-500 flex flex-col justify-between touch-manipulation overflow-hidden"
        >
            {/* Subtle gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full gap-6">
                {/* Top: Stars & Quote Icon */}
                <div className="flex justify-between items-start w-full">
                    <div className="flex gap-1" aria-label={`${rating} von 5 Sternen`}>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-amber-400 drop-shadow-sm' : 'text-gray-200 dark:text-gray-700'}`}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                    <Quote className="w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-500 -mt-2 -mr-2" aria-hidden="true" />
                </div>

                {/* Middle: The actual Review Text */}
                <blockquote className="text-text-primary text-base sm:text-lg leading-relaxed italic font-medium grow">
                    &ldquo;{text}&rdquo;
                </blockquote>

                {/* Bottom: Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50 mt-auto">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 ring-4 ring-white dark:ring-zinc-800 shadow-sm font-display">
                        {author.charAt(0)}
                    </div>
                    <div className="flex flex-col justify-center">
                        <h5 className="font-bold text-text-primary tracking-tight text-base sm:text-lg font-display">{author}</h5>
                        <p className="text-sm text-text-secondary font-medium">{role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
