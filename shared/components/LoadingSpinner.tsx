import { cn } from '@/shared/utils/utils';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-06 — Loading Spinner
// Weinrot animated spinner, 3 sizes
// ═══════════════════════════════════════════════════════════

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    label?: string;
}

const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
};

export default function LoadingSpinner({ size = 'md', className, label = 'Wird geladen…' }: LoadingSpinnerProps) {
    return (
        <div className={cn("inline-flex items-center justify-center", className)} role="status" aria-label={label}>
            <svg
                className={cn("animate-spin text-primary", sizeMap[size])}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
            <span className="sr-only">{label}</span>
        </div>
    );
}
