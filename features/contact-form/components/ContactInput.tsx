'use client';

import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { springs } from '@/shared/styles/animations';
import { ContactFormData } from '@/features/contact-form/api/schema';

type ContactInputProps = {
    id: keyof ContactFormData;
    label: string;
    type?: string;
    required?: boolean;
    isTextArea?: boolean;
    inputMode?: 'text' | 'tel' | 'email' | 'none' | 'decimal' | 'numeric' | 'search' | 'url';
    autoComplete?: string;

    register: UseFormRegister<ContactFormData>;
    error?: FieldError | undefined;
    hasValue: boolean;
    isFocused: boolean;
    onFocus: () => void;
    onBlurFocus: () => void;
};

export default function ContactInput({
    id,
    label,
    type = 'text',
    required = false,
    isTextArea = false,
    inputMode,
    autoComplete,
    register,
    error,
    hasValue,
    isFocused,
    onFocus,
    onBlurFocus
}: ContactInputProps) {
    const floatLabel = isFocused || hasValue;
    const { ref, onChange, onBlur, name } = register(id);

    return (
        <div className="relative group/input flex flex-col" style={{ zIndex: isFocused ? 10 : 1 }}>
            {/* Floating Label */}
            <motion.label
                htmlFor={id}
                initial={false}
                animate={{
                    y: floatLabel ? (isTextArea ? -36 : -32) : (isTextArea ? 16 : 0),
                    x: floatLabel ? 0 : 20,
                    scale: floatLabel ? 0.8 : 1,
                    color: error ? '#ef4444' : (floatLabel ? 'rgba(155, 28, 46, 1)' : 'rgba(100, 116, 139, 0.7)'),
                }}
                transition={springs.snappy}
                className="absolute left-0 pointer-events-none origin-left font-display font-medium px-1 bg-white/0 backdrop-blur-none"
                style={{
                    top: isTextArea ? '0' : '50%',
                    marginTop: !floatLabel && !isTextArea ? '-12px' : '0',
                    opacity: 1
                }}
            >
                {label} {required && '*'}
            </motion.label>

            {/* Input / Textarea */}
            <div className={`relative overflow-hidden rounded-xl bg-background border transition-all duration-300 ${error ? 'border-red-500' : (isFocused ? 'border-primary ring-1 ring-primary' : 'border-border md:hover:border-primary/30')}`}>
                {isTextArea ? (
                    <motion.textarea
                        id={id}
                        required={required}
                        rows={5}
                        name={name}
                        ref={ref}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={(e) => {
                            onBlurFocus();
                            onBlur(e);
                        }}
                        animate={{
                            backgroundColor: isFocused ? 'rgba(255, 255, 255, 1)' : 'rgba(250, 250, 250, 1)',
                            boxShadow: isFocused ? 'inset 0 2px 10px rgba(0,0,0,0.02)' : 'none',
                        }}
                        className={`w-full px-6 py-4 outline-none resize-none text-[16px] text-text-primary font-medium bg-transparent relative z-10 ${isFocused && !hasValue ? 'animate-pulse-slow' : ''}`}
                    />
                ) : (
                    <motion.input
                        type={type}
                        id={id}
                        required={required}
                        name={name}
                        ref={ref}
                        inputMode={inputMode}
                        autoComplete={autoComplete}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={(e) => {
                            onBlurFocus();
                            onBlur(e);
                        }}
                        animate={{
                            backgroundColor: isFocused ? 'rgba(255, 255, 255, 1)' : 'rgba(250, 250, 250, 1)',
                            boxShadow: isFocused ? 'inset 0 2px 10px rgba(0,0,0,0.02)' : 'none',
                        }}
                        className="w-full px-6 outline-none text-[16px] text-text-primary font-medium bg-transparent relative z-10 min-h-[52px] h-[52px]"
                    />
                )}
            </div>

            {/* Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="text-red-500 text-sm mt-2 font-medium flex items-center gap-1.5 px-2"
                    >
                        <AlertCircle className="w-3.5 h-3.5" />
                        {error.message}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
