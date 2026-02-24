'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun as SunIcon } from 'lucide-react';
import { springs } from '@/shared/styles/animations';
import { useAppStore } from '@/shared/store/useAppStore';

export default function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode, initializeDarkMode } = useAppStore();

    useEffect(() => {
        initializeDarkMode();
    }, [initializeDarkMode]);

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-white hover:shadow-sm transition-all"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            aria-label={isDarkMode ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'}
        >
            <motion.div
                key={isDarkMode ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={springs.snappy}
            >
                {isDarkMode ? (
                    <SunIcon className="w-5 h-5 text-trust-gold" />
                ) : (
                    <Moon className="w-5 h-5 text-text-secondary" />
                )}
            </motion.div>
        </motion.button>
    );
}
