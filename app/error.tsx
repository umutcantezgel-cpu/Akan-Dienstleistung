'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Critical Runtime Error Caught by Global Boundary:', error);
    }, [error]);

    return (
        <main className="min-h-screen flex items-center justify-center bg-background px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="max-w-xl w-full bg-white rounded-3xl shadow-card border border-border p-8 md:p-12 text-center"
            >
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 relative">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                    />
                    <AlertTriangle className="w-10 h-10 text-primary relative z-10" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-display">
                    Systemunterbrechung
                </h1>

                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    Etwas ist unerwartet schiefgelaufen. Wir haben den Fehler protokolliert und arbeiten bereits an einer Lösung.
                    Bitte laden Sie die Seite neu oder kehren Sie zur Startseite zurück.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover hover:-translate-y-1 transition-all shadow-lg shadow-primary/20"
                    >
                        <RefreshCcw className="w-5 h-5" />
                        Seite neu laden
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-surface text-text-primary rounded-xl font-bold border border-border hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-sm"
                    >
                        <Home className="w-5 h-5" />
                        Zur Startseite
                    </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-12 text-left bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-auto">
                        <p className="text-sm font-mono text-primary font-bold mb-2">Developer Error Log:</p>
                        <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap word-break">
                            {error.message}
                            <br /><br />
                            {error.stack}
                        </pre>
                    </div>
                )}
            </motion.div>
        </main>
    );
}
