import { Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
            {/* Morphing skeleton pattern */}
            <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-pulse" />
                <div className="absolute inset-2 rounded-xl bg-primary/20 animate-pulse" style={{ animationDelay: '150ms' }} />
                <div className="absolute inset-4 rounded-lg bg-primary/30 animate-pulse" style={{ animationDelay: '300ms' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
            </div>

            {/* Skeleton Text */}
            <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-4 bg-surface rounded-full animate-pulse" />
                <div className="w-48 h-3 bg-surface rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
            </div>
        </div>
    );
}
