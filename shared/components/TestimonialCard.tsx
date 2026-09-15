import { Star, Quote, ShieldCheck } from 'lucide-react';
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
    badge?: string | undefined;
    delay?: number;
}

export default function TestimonialCard({ author, role, text, rating, badge, delay = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...springs.gentle, delay }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 border border-slate-200/90 dark:border-zinc-800 h-full shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 flex flex-col justify-between touch-manipulation overflow-hidden text-left"
        >
            {/* Subtle top wine accent glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full gap-5 sm:gap-6">
                {/* Top: Stars & Quote Icon & Optional Verified Badge */}
                <div className="flex justify-between items-start w-full gap-3">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1" aria-label={`${rating} von 5 Sternen`}>
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-amber-400 fill-amber-400 drop-shadow-sm' : 'text-slate-200 dark:text-zinc-700'}`}
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        {badge && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20 tracking-tight w-fit">
                                <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                                {badge}
                            </span>
                        )}
                    </div>
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/15 group-hover:text-primary/25 transition-colors duration-300 shrink-0 -mt-1 -mr-1" aria-hidden="true" />
                </div>

                {/* Middle: The actual Review Text with guaranteed high contrast */}
                <blockquote className="text-slate-800 dark:text-zinc-200 text-sm sm:text-base leading-relaxed italic font-normal grow">
                    &ldquo;{text}&rdquo;
                </blockquote>

                {/* Bottom: Author Info */}
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t border-slate-100 dark:border-zinc-800 mt-auto">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-base sm:text-lg shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm font-display">
                        {author.charAt(0)}
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                        <h5 className="font-bold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base font-display truncate">{author}</h5>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-medium truncate">{role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
