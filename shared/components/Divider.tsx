import { cn } from '@/shared/utils/utils';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-04 — Divider System
// Horizontal, Vertical, Decorative gradient separators
// ═══════════════════════════════════════════════════════════

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'default' | 'gradient' | 'decorative';
    className?: string;
    label?: string;
}

export default function Divider({
    orientation = 'horizontal',
    variant = 'default',
    className,
    label,
}: DividerProps) {
    if (label) {
        return (
            <div className={cn("flex items-center gap-4", className)} role="separator">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-widest shrink-0 font-display">
                    {label}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
        );
    }

    if (orientation === 'vertical') {
        return (
            <div
                className={cn(
                    "w-px self-stretch",
                    variant === 'gradient' && "bg-gradient-to-b from-transparent via-primary/20 to-transparent",
                    variant === 'decorative' && "bg-gradient-to-b from-primary/30 via-primary/10 to-transparent",
                    variant === 'default' && "bg-border",
                    className
                )}
                role="separator"
                aria-orientation="vertical"
            />
        );
    }

    return (
        <div
            className={cn(
                "w-full h-px",
                variant === 'gradient' && "bg-gradient-to-r from-transparent via-primary/20 to-transparent",
                variant === 'decorative' && "bg-gradient-to-r from-primary/30 via-primary/10 to-transparent",
                variant === 'default' && "bg-border",
                className
            )}
            role="separator"
        />
    );
}
