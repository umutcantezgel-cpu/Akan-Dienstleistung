'use client';

import { useEffect, useState, ReactNode } from 'react';
import TableOfContents from './TableOfContents';
import Link from 'next/link';
import { ArrowLeft, Scale, FileText, Shield } from 'lucide-react';

interface LegalPageTemplateProps {
    title: string;
    subtitle: string;
    lastUpdated?: string;
    icon?: 'scale' | 'file' | 'shield';
    children: ReactNode;
}

export default function LegalPageTemplate({
    title,
    subtitle,
    lastUpdated,
    icon = 'file',
    children
}: LegalPageTemplateProps) {
    const [tocItems, setTocItems] = useState<{ id: string; text: string; level: number }[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    // Icons map based on document type
    const IconMap = {
        scale: Scale,
        file: FileText,
        shield: Shield
    };

    const HeaderIcon = IconMap[icon];

    // Auto-generate TOC from h2 and h3 elements inside the content area
    useEffect(() => {
        const contentArea = document.getElementById('legal-content');
        if (!contentArea) return;

        const headingElements = contentArea.querySelectorAll('h2, h3');
        const items = Array.from(headingElements).map((heading) => {
            // Ensure ID exists
            if (!heading.id) {
                heading.id = heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'section';
            }
            return {
                id: heading.id,
                text: heading.textContent || '',
                level: parseInt(heading.tagName.replace('H', '')),
            };
        });

        // Use setTimeout to avoid synchronous setState cascading renders in effect
        setTimeout(() => setTocItems(items), 0);

        // Intersection Observer for scroll spy
        const observerOptions = {
            rootMargin: '-10% 0px -80% 0px',
            threshold: 0
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        headingElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [children]);

    return (
        <article className="min-h-screen bg-surface">
            {/* Header Area */}
            <header className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background border-b border-border/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-bl-[100%] opacity-50" />
                <div className="container-fluid relative z-10">
                    <div className="max-w-4xl">
                        <div className="mb-8">
                            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-primary transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                Zurück zur Startseite
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary svg-draw-effect group">
                                <HeaderIcon className="w-6 h-6 stroke-2" />
                            </div>
                            {lastUpdated && (
                                <span className="text-sm font-mono text-text-secondary bg-surface px-3 py-1 rounded-md border border-border/60">
                                    Stand: {lastUpdated}
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-text-primary tracking-tight mb-6 font-display animate-fade-in-up">
                            {title}
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl leading-relaxed animate-fade-in-up animate-delay-100">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </header>

            {/* Content & Layout Matrix */}
            <div className="container-fluid pt-20 pb-40 lg:pb-56 relative">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">

                    {/* Left Sidebar: TOC (Sticky) */}
                    {tocItems.length > 0 && (
                        <aside className="hidden lg:block w-72 shrink-0">
                            <TableOfContents items={tocItems} activeId={activeId} />
                        </aside>
                    )}

                    {/* Right Core Content Area: The Text */}
                    <main
                        id="legal-content"
                        className="flex-1 max-w-[800px] prose prose-lg prose-headings:font-display prose-headings:font-bold prose-h2:text-text-primary prose-h3:text-text-primary prose-p:text-text-secondary prose-a:text-primary hover:prose-a:text-primary-hover prose-li:text-text-secondary prose-strong:text-text-primary prose-strong:font-bold"
                    >
                        {children}
                    </main>

                </div>
            </div>
        </article>
    );
}
