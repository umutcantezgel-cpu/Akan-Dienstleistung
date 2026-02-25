'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ReadMoreExpanderProps {
    children: React.ReactNode;
    maxHeight?: number;
    buttonText?: string;
    buttonTextOpen?: string;
    mobileOnly?: boolean;
}

export default function ReadMoreExpander({
    children,
    maxHeight = 250,
    buttonText = 'Mehr lesen',
    buttonTextOpen = 'Weniger anzeigen',
    mobileOnly = true,
}: ReadMoreExpanderProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Hydration matching
        setIsMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024px
        };

        // Use timeout to push this to the end of the queue, avoiding synchronous setState in effect
        setTimeout(checkMobile, 0);

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // SSR fallback block or if it's desktop (and mobileOnly is true)
    if (!isMounted || (mobileOnly && !isMobile)) {
        return <div className="read-more-wrapper">{children}</div>;
    }

    return (
        <div className="relative w-full">
            <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : maxHeight }}
                className="overflow-hidden relative"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>

            <AnimatePresence>
                {!isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        // A generous gradient that fades out the text smoothly
                        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <div className={`flex justify-center sm:justify-start ${!isExpanded ? '-mt-6 relative z-10' : 'mt-6'}`}>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-primary/20 bg-primary/5 text-primary font-bold text-sm hover:bg-primary/10 transition-colors shadow-sm"
                >
                    {isExpanded ? buttonTextOpen : buttonText}
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </button>
            </div>
        </div>
    );
}
