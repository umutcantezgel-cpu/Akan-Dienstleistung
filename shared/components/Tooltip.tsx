'use client';

import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TooltipProps {
    children: ReactNode;
    content: string;
    position?: 'top' | 'bottom';
}

export default function Tooltip({ children, content, position = 'top' }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <span
            className="relative inline-flex"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: position === 'top' ? 8 : -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: position === 'top' ? 4 : -4, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute z-max left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-black/90 backdrop-blur-md text-white text-tiny font-bold tracking-wide whitespace-nowrap shadow-elevated border border-white/10 pointer-events-none ${position === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'
                            }`}
                    >
                        {content}
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-r border-b border-white/10 transform rotate-45 ${position === 'top' ? '-bottom-1.5' : '-top-1.5 border-t border-l border-b-0 border-r-0'
                                }`}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
