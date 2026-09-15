import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-02 — Badge System
// Trust signals, service types, status indicators, counters
// ═══════════════════════════════════════════════════════════

const badgeVariants = cva(
    "inline-flex items-center gap-1.5 font-bold font-display select-none whitespace-nowrap",
    {
        variants: {
            variant: {
                trust:
                    "bg-primary-50 text-primary border border-primary-200",
                service:
                    "bg-primary/10 text-primary",
                status:
                    "bg-green-50 text-green-700 border border-green-200",
                count:
                    "bg-primary text-white",
                gold:
                    "bg-amber-50 text-amber-700 border border-amber-200",
                neutral:
                    "bg-gray-100 text-text-secondary border border-border",
            },
            size: {
                sm: "text-[10px] px-2 py-0.5 rounded-md tracking-wide uppercase",
                default: "text-xs px-3 py-1 rounded-full tracking-wide",
                lg: "text-sm px-4 py-1.5 rounded-full",
            }
        },
        defaultVariants: {
            variant: "trust",
            size: "default",
        }
    }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
}

export default function Badge({ children, variant, size, icon, className }: BadgeProps) {
    return (
        <span className={cn(badgeVariants({ variant, size, className }))}>
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </span>
    );
}

export { badgeVariants };
