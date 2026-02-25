'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    items: TOCItem[];
    activeId: string;
}

export default function TableOfContents({ items, activeId }: TableOfContentsProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed header
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (items.length === 0) return null;

    return (
        <nav className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto no-scrollbar pb-10" aria-label="Inhaltsverzeichnis">
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-text-primary mb-6 flex items-center gap-3">
                <span className="w-6 h-0.5 bg-primary/40 block"></span>
                Inhalt
            </h4>
            <ul className="space-y-1 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-border/60">
                {items.map((item) => (
                    <li key={item.id} className="relative">
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            className={`flex items-start gap-3 py-2 text-sm transition-all duration-300 group
                                ${activeId === item.id
                                    ? 'text-primary font-bold'
                                    : 'text-text-secondary hover:text-text-primary'
                                }
                                ${item.level > 2 ? 'pl-8' : 'pl-0'}
                            `}
                        >
                            <span className="w-6 shrink-0 relative flex items-center justify-center mt-0.5 z-10">
                                {activeId === item.id ? (
                                    <motion.div
                                        layoutId="active-toc-dot"
                                        className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(155,28,46,0.5)]"
                                    />
                                ) : (
                                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-text-secondary transition-colors" />
                                )}
                            </span>
                            <span className="leading-snug">{item.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
