import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/utils';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-01 — Universal Button System
// 6 variants × 3 sizes × 6 states (default/hover/focus/active/disabled/loading)
// ═══════════════════════════════════════════════════════════

const buttonVariants = cva(
    "inline-flex items-center justify-center font-bold transition-all font-display focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 focus-visible:ring-offset-2 min-h-[48px] min-w-[48px] select-none",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-white hover:bg-[#7A1624] active:bg-[#5C1119] active:scale-[0.98] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 disabled:bg-gray-300 disabled:text-gray-400 disabled:shadow-none disabled:hover:translate-y-0 disabled:cursor-not-allowed",
                secondary:
                    "bg-white border-2 border-primary text-primary hover:bg-primary-50 hover:border-[#7A1624] active:bg-[#FFEAEF] active:scale-[0.98] disabled:bg-gray-50 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed",
                tertiary:
                    "bg-transparent text-primary hover:text-[#7A1624] hover:underline underline-offset-4 active:text-[#5C1119] disabled:text-gray-400 disabled:no-underline disabled:cursor-not-allowed shadow-none",
                ghost:
                    "bg-white border border-border text-text-primary hover:text-primary hover:border-primary hover:-translate-y-0.5 active:scale-[0.98] disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed",
                icon:
                    "bg-transparent text-text-secondary hover:text-primary hover:bg-primary-50 active:bg-primary-100 active:scale-[0.95] rounded-full p-0 disabled:text-gray-300 disabled:cursor-not-allowed shadow-none",
                danger:
                    "bg-error text-white hover:bg-red-600 active:bg-red-700 active:scale-[0.98] shadow-lg shadow-error/20 disabled:bg-gray-300 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed",
            },
            size: {
                sm: "px-5 py-2.5 rounded-lg text-sm gap-2",
                default: "px-8 py-3.5 rounded-xl text-base gap-2.5",
                lg: "px-10 py-5 rounded-xl text-lg gap-3",
                icon: "w-11 h-11 rounded-full",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        }
    }
);

// ── Loading Spinner ──────────────────────────────────────
function ButtonSpinner({ className }: { className?: string }) {
    return (
        <svg
            className={cn("animate-spin", className)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="20"
            height="20"
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    );
}

// ── Types ────────────────────────────────────────────────
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
    href?: string;
    className?: string;
    external?: boolean;
    loading?: boolean;
    loadingText?: string;
}

// ── Component ────────────────────────────────────────────
export default function Button({
    children,
    variant,
    size,
    href,
    className,
    external = false,
    loading = false,
    loadingText,
    disabled,
    ...props
}: ButtonProps) {
    const isDisabled = disabled || loading;
    const combinedClassName = cn(buttonVariants({ variant, size, className }));

    const content = loading ? (
        <>
            <ButtonSpinner className={variant === 'secondary' || variant === 'tertiary' ? 'text-primary' : ''} />
            {loadingText && <span>{loadingText}</span>}
        </>
    ) : children;

    // ── Link Rendering ───────────────────────────────────
    if (href && !isDisabled) {
        if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
            return (
                <a href={href} className={combinedClassName} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClassName}>
                {content}
            </Link>
        );
    }

    // ── Button Rendering ─────────────────────────────────
    return (
        <button className={combinedClassName} disabled={isDisabled} aria-busy={loading} {...props}>
            {content}
        </button>
    );
}

export { buttonVariants };
export type { ButtonProps };
