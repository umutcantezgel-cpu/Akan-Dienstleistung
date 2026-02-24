'use client';

import { ReactNode } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureErrorBoundaryProps {
    children: ReactNode;
    featureName?: string;
}

function FeatureErrorFallback({ error, resetErrorBoundary, featureName }: FallbackProps & { featureName?: string | undefined }) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full flex flex-col items-center justify-center p-8 lg:p-12 bg-white/50 backdrop-blur-sm border border-red-100 rounded-3xl text-center"
        >
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-text-primary mb-2">
                {featureName ? `${featureName} konnte nicht geladen werden` : 'Ein Modulfunktionsfehler ist aufgetreten'}
            </h3>

            <p className="text-text-secondary mb-6 max-w-md">
                Ein temporäres Problem verhindert die korrekte Darstellung dieses Abschnitts.
                Der Rest der Seite funktioniert weiterhin.
            </p>

            <button
                onClick={resetErrorBoundary}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-background border border-border rounded-xl font-bold text-sm tracking-wide hover:bg-white hover:shadow-soft transition-all"
            >
                <RefreshCcw className="w-4 h-4" />
                Neu laden
            </button>

            {process.env.NODE_ENV === 'development' && (
                <div className="mt-8 text-left bg-red-50/50 border border-red-100 rounded-lg p-4 w-full max-w-2xl overflow-auto text-xs font-mono text-red-800">
                    <p className="font-bold mb-2">Dev Trace:</p>
                    <pre className="whitespace-pre-wrap break-all">{errorMsg}</pre>
                </div>
            )}
        </motion.div>
    );
}

export function FeatureErrorBoundary({ children, featureName }: FeatureErrorBoundaryProps) {
    return (
        <ErrorBoundary
            FallbackComponent={(props) => <FeatureErrorFallback {...props} featureName={featureName} />}
            onError={(error, info) => {
                // Here you would hook into a telemetry service like Sentry
                console.error(`[Feature Boundary: ${featureName || 'Unknown'}]`, error, info);
            }}
        >
            {children}
        </ErrorBoundary>
    );
}

export function ComponentErrorBoundary({ children, componentName }: { children: ReactNode; componentName?: string }) {
    return (
        <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => {
                const errorMsg = error instanceof Error ? error.message : String(error);
                return (
                    <div className="p-4 border border-red-200 bg-red-50 rounded-xl text-center text-sm">
                        <div className="text-red-600 font-bold flex items-center justify-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4" />
                            {componentName || 'Komponente'} fehlerhaft
                        </div>
                        <button
                            onClick={resetErrorBoundary}
                            className="text-xs text-red-700 underline hover:text-red-900 flex items-center justify-center gap-1 mx-auto"
                        >
                            <RefreshCcw className="w-3 h-3" />
                            Retry
                        </button>
                        {process.env.NODE_ENV === 'development' && <div className="text-xs text-red-400 mt-2 truncate w-full" title={errorMsg}>{errorMsg}</div>}
                    </div>
                );
            }}
            onError={(error) => console.error(`[Component Boundary: ${componentName || 'Unknown'}]`, error)}
        >
            {children}
        </ErrorBoundary>
    )
}
