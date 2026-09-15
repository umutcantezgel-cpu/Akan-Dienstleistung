import { ElementType } from 'react';
import Badge from '@/shared/components/Badge';

// ═══════════════════════════════════════════════════════════
// PROMETHEUS Ψ-10 — TrustBadge Molecule
// Extends the atomic Badge with predefined sizing and contrast
// ═══════════════════════════════════════════════════════════

interface TrustBadgeProps {
    label: string;
    icon: ElementType;
    className?: string;
}

export default function TrustBadge({ label, icon: Icon, className }: TrustBadgeProps) {
    return (
        <Badge variant="trust" size="lg" {...(className ? { className } : {})} icon={<Icon className="w-4 h-4" aria-hidden="true" />}>
            {label}
        </Badge>
    );
}
