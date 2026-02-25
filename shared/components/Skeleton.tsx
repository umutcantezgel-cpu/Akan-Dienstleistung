import { cn } from '@/shared/utils/utils';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-05 — Skeleton Shimmer System
// Rosé shimmer placeholders for all loading states
// ═══════════════════════════════════════════════════════════

interface SkeletonProps {
    variant?: 'text' | 'heading' | 'image' | 'card' | 'button' | 'avatar' | 'circle';
    className?: string;
    lines?: number;
    width?: string;
    height?: string;
}

function SkeletonBase({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "animate-pulse bg-gradient-to-r from-primary-50/60 via-primary-100/40 to-primary-50/60 bg-[length:200%_100%] rounded-lg",
                className
            )}
            role="status"
            aria-label="Wird geladen…"
        />
    );
}

export default function Skeleton({ variant = 'text', className, lines = 3, width, height }: SkeletonProps) {
    switch (variant) {
        case 'heading':
            return <SkeletonBase className={cn("h-8 w-3/4 rounded-xl", className)} />;

        case 'image':
            return <SkeletonBase className={cn("w-full aspect-video rounded-2xl", className)} />;

        case 'avatar':
            return <SkeletonBase className={cn("w-12 h-12 rounded-full", className)} />;

        case 'circle':
            return <SkeletonBase className={cn("w-10 h-10 rounded-full", className)} />;

        case 'button':
            return <SkeletonBase className={cn("h-11 w-40 rounded-xl", className)} />;

        case 'card':
            return (
                <div className={cn("space-y-4 p-6 border border-border/50 rounded-2xl", className)}>
                    <SkeletonBase className="w-full h-40 rounded-xl" />
                    <SkeletonBase className="h-5 w-3/4" />
                    <SkeletonBase className="h-4 w-full" />
                    <SkeletonBase className="h-4 w-2/3" />
                    <SkeletonBase className="h-10 w-32 rounded-lg mt-2" />
                </div>
            );

        case 'text':
        default:
            return (
                <div className={cn("space-y-2.5", className)} role="status" aria-label="Wird geladen…">
                    {Array.from({ length: lines }).map((_, i) => (
                        <SkeletonBase
                            key={i}
                            className={cn(
                                "h-4",
                                i === lines - 1 ? "w-3/5" : "w-full"
                            )}
                        />
                    ))}
                </div>
            );
    }
}
