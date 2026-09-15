import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-03 — Tag System
// Service types, categories, filter labels
// ═══════════════════════════════════════════════════════════

const tagVariants = cva(
    "inline-flex items-center gap-1.5 font-semibold select-none whitespace-nowrap transition-colors",
    {
        variants: {
            variant: {
                default:
                    "bg-primary-50 text-primary hover:bg-primary-100",
                active:
                    "bg-primary text-white",
                muted:
                    "bg-gray-100 text-text-secondary hover:bg-gray-200",
            },
            size: {
                sm: "text-xs px-2.5 py-1 rounded-md",
                default: "text-sm px-3 py-1.5 rounded-lg",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
);

interface TagProps extends VariantProps<typeof tagVariants> {
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
    removable?: boolean;
    onRemove?: () => void;
}

export default function Tag({ children, variant, size, icon, className, onClick, removable, onRemove }: TagProps) {
    return (
        <span
            className={cn(tagVariants({ variant, size, className }), onClick && "cursor-pointer")}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
            {removable && (
                <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
                    className="ml-0.5 hover:text-red-500 transition-colors"
                    aria-label="Entfernen"
                >
                    ×
                </button>
            )}
        </span>
    );
}

export { tagVariants };
