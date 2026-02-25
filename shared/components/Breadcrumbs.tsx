import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/shared/utils/utils';

// ═══════════════════════════════════════════════════════════
// ARIADNE × PROMETHEUS — Breadcrumb Navigation
// Schema.org BreadcrumbList JSON-LD + visual breadcrumbs
// ═══════════════════════════════════════════════════════════

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    const allItems = [{ label: 'Home', href: '/' }, ...items];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: allItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: `https://akandienstleistung.de${item.href}`,
        })),
    };

    return (
        <>
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Visual Breadcrumbs */}
            <nav aria-label="Brotkrümelnavigation" className={cn("py-3", className)}>
                <ol className="flex items-center flex-wrap gap-1 text-sm text-text-secondary">
                    {allItems.map((item, index) => {
                        const isLast = index === allItems.length - 1;
                        const isHome = index === 0;

                        return (
                            <li key={item.href} className="flex items-center gap-1">
                                {index > 0 && (
                                    <ChevronRight className="w-3.5 h-3.5 text-text-secondary/50 shrink-0" aria-hidden="true" />
                                )}
                                {isLast ? (
                                    <span className="font-semibold text-text-primary" aria-current="page">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="hover:text-primary transition-colors flex items-center gap-1 font-medium"
                                    >
                                        {isHome && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                                        <span className={isHome ? 'sr-only sm:not-sr-only' : ''}>
                                            {item.label}
                                        </span>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
