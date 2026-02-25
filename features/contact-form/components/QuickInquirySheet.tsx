'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function QuickInquirySheet({ isOpen, onClose }: Props) {
    const controls = useDragControls();

    // Scroll-Lock for Body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Optional Focus Trap logic could be added here
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-auto"
                        onClick={onClose}
                    />

                    {/* Sheet / Drawer */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, info) => {
                            if (info.offset.y > 100 || info.velocity.y > 500) {
                                onClose();
                            }
                        }}
                        dragControls={controls}
                        dragListener={false}
                        className="w-full max-w-3xl bg-surface sm:rounded-2xl rounded-t-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[92vh] sm:max-h-[85vh] relative"
                    >
                        {/* Drag Handle (Mobile) */}
                        <div
                            className="w-full flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-none sm:hidden"
                            onPointerDown={(e) => controls.start(e)}
                        >
                            <div className="w-12 h-1.5 bg-border rounded-full" />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-surface-secondary text-text-secondary hover:text-text-primary rounded-full transition-colors z-[100] shadow-sm"
                            aria-label="Schließen"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex-1 overflow-y-auto px-2 sm:px-6 pb-10 custom-scrollbar">
                            <div className="pt-2 sm:pt-6 origin-top">
                                <ContactForm />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
