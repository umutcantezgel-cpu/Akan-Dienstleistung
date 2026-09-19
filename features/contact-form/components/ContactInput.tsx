'use client';

import { AnimatePresence, motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { ContactFormData } from '@/features/contact-form/api/schema';

type ContactInputProps = {
    id: keyof ContactFormData;
    label: string;
    type?: string;
    required?: boolean;
    isTextArea?: boolean;
    inputMode?: 'text' | 'tel' | 'email' | 'none' | 'decimal' | 'numeric' | 'search' | 'url';
    autoComplete?: string;
    placeholder?: string;

    register: UseFormRegister<ContactFormData>;
    error?: FieldError | undefined;
    hasValue?: boolean;
    isFocused?: boolean;
    onFocus?: () => void;
    onBlurFocus?: () => void;
};

export default function ContactInput({
    id,
    label,
    type = 'text',
    required = false,
    isTextArea = false,
    inputMode,
    autoComplete,
    placeholder,
    register,
    error,
    isFocused = false,
    onFocus,
    onBlurFocus
}: ContactInputProps) {
    const { ref, onChange, onBlur, name } = register(id);

    return (
        <div className="flex flex-col w-full">
            {/* Semantic Label in Flow - Never collides with input text or placeholders */}
            <div className="flex items-center justify-between mb-2">
                <label
                    htmlFor={id}
                    className="text-sm font-semibold text-text-primary font-display tracking-tight flex items-center gap-1 cursor-pointer select-none"
                >
                    <span>{label}</span>
                    {required && (
                        <span className="text-primary font-bold text-base leading-none" aria-hidden="true">
                            *
                        </span>
                    )}
                </label>
                {!required && (
                    <span className="text-[11px] font-medium text-text-secondary/70 uppercase tracking-wider bg-surface-secondary px-2 py-0.5 rounded-full border border-border/40">
                        Optional
                    </span>
                )}
            </div>

            {/* Input / Textarea Container */}
            <div
                className={`relative rounded-xl bg-white border transition-all duration-200 shadow-sm ${
                    error
                        ? 'border-red-500 ring-2 ring-red-500/10'
                        : isFocused
                            ? 'border-primary ring-2 ring-primary/20 shadow-[0_0_0_1px_rgba(155,28,46,0.1)]'
                            : 'border-border/80 hover:border-border'
                }`}
            >
                {isTextArea ? (
                    <textarea
                        id={id}
                        required={required}
                        rows={4}
                        name={name}
                        ref={ref}
                        placeholder={placeholder}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={(e) => {
                            onBlurFocus?.();
                            onBlur(e);
                        }}
                        className="w-full px-4 sm:px-5 py-3.5 outline-none resize-y min-h-[120px] text-[16px] text-text-primary font-normal bg-transparent placeholder:text-text-secondary/40 leading-relaxed focus:bg-white transition-colors rounded-xl"
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        required={required}
                        name={name}
                        ref={ref}
                        inputMode={inputMode}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={(e) => {
                            onBlurFocus?.();
                            onBlur(e);
                        }}
                        className="w-full px-4 sm:px-5 outline-none text-[16px] text-text-primary font-normal bg-transparent h-[52px] min-h-[52px] placeholder:text-text-secondary/40 focus:bg-white transition-colors rounded-xl"
                    />
                )}
            </div>

            {/* Accessible Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -4, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        transition={{ duration: 0.15 }}
                        role="alert"
                        className="text-red-600 text-xs sm:text-sm mt-1.5 font-medium flex items-center gap-1.5 px-0.5"
                    >
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{error.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
