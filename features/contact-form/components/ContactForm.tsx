'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ChevronDown, Check, AlertCircle, ShieldCheck } from 'lucide-react';
import { springs } from '@/shared/styles/animations';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/features/contact-form/api/schema';
import ContactSuccessState from './ContactSuccessState';
import ContactInput from './ContactInput';
import { ComponentErrorBoundary } from '@/features/error-handling/components/ErrorBoundaries';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-08 — Contact Form Synaptic Interface
// Floating labels, wandering glow, textarea pulse, success implosion
// ═══════════════════════════════════════════════════════════

export default function ContactForm() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const {
        register,
        handleSubmit: rxSubmit,
        control,
        formState: { errors, submitCount },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '', email: '', phone: '', service: '', message: ''
        },
        mode: 'onTouched'
    });

    const formValues = useWatch({ control }) as Partial<ContactFormData>;
    const filledCount = ['name', 'email', 'phone', 'service', 'message'].filter(f => !!formValues[f as keyof ContactFormData]).length;

    const onSubmit = async (data: ContactFormData) => {
        if (!privacyChecked) return;
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const resData = await res.json();

            if (!res.ok) {
                console.error("Zod Validation Errors / API Error:", resData);
                setIsSubmitting(false);
                return;
            }

            setIsSubmitting(false);
            setIsSuccess(true);
        } catch (e) {
            console.error('Network or Request Error:', e);
            setIsSubmitting(false);
        }
    };

    // Synaptic Input Fields are now imported from ContactInput.tsx
    const inputProps = (id: keyof ContactFormData) => ({
        id,
        register,
        error: errors[id],
        hasValue: Boolean(formValues[id]),
        isFocused: focusedField === id,
        onFocus: () => setFocusedField(id),
        onBlurFocus: () => setFocusedField(null)
    });

    return (
        <div className={`relative ${focusedField ? 'z-[100]' : 'z-10'}`}>
            <AnimatePresence>
                {focusedField && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-md pointer-events-none"
                        style={{ zIndex: -1 }}
                    />
                )}
            </AnimatePresence>
            <div className={`bg-white rounded-[2.5rem] p-8 md:p-14 border relative overflow-hidden transition-all duration-700 ${focusedField ? 'border-primary/40 shadow-glow' : 'border-border/60 shadow-elevated'}`}>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-light hidden md:block" />

                {/* HERMES Progress Tracker */}
                <AnimatePresence>
                    {filledCount >= 2 && !isSuccess && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-3 bg-surface p-2 pr-4 rounded-full border border-border/50 shadow-sm z-20"
                        >
                            <div className="relative w-8 h-8">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="16" cy="16" r="14" className="stroke-border fill-none" strokeWidth="3" />
                                    <circle
                                        cx="16" cy="16" r="14"
                                        className="stroke-primary fill-none transition-all duration-500 ease-out"
                                        strokeWidth="3"
                                        strokeDasharray={2 * Math.PI * 14}
                                        strokeDashoffset={2 * Math.PI * 14 * (1 - filledCount / 5)}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary">
                                    {filledCount}/5
                                </div>
                            </div>
                            <span className="text-xs font-bold text-text-secondary font-display">
                                {filledCount === 5 ? 'Bereit!' : `Fast geschafft`}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Form Success Implosion State */}
                <AnimatePresence mode="wait">
                    {!isSuccess ? (
                        <motion.div
                            key="form"
                            exit={{
                                scale: 0,
                                opacity: 0,
                                rotate: 5,
                                filter: 'blur(20px)',
                                transition: { duration: 0.6, ease: [0.8, 0, 0.2, 1] }
                            }}
                        >
                            <div className="mb-14 max-w-[85%]">
                                <h2 className="text-h2 font-bold text-text-primary mb-4 font-display tracking-tight leading-tight">
                                    Lassen Sie uns starten
                                </h2>
                                <p className="text-medium font-light text-text-secondary leading-[1.8]">
                                    Ihr Weg zu einer makellosen Immobilie in nur wenigen Klicks. Wir melden uns umgehend bei Ihnen.
                                </p>
                            </div>
                            <ComponentErrorBoundary componentName="Contact Form Fields">
                                <form onSubmit={rxSubmit(onSubmit)} className="space-y-10" noValidate>
                                    {/* Input Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
                                        <ContactInput {...inputProps('name')} label="Wie dürfen wir Sie ansprechen?" required autoComplete="name" />
                                        <ContactInput {...inputProps('phone')} label="Unter welcher Nummer erreichen wir Sie? (Optional)" type="tel" inputMode="tel" autoComplete="tel" />
                                        <div className="col-span-1 md:col-span-2">
                                            <ContactInput {...inputProps('email')} label="Ihre beste E-Mail Adresse" type="email" required inputMode="email" autoComplete="email" />
                                        </div>
                                    </div>

                                    {/* Service Select (Custom design to match Synaptic Inputs) */}
                                    <div className="relative flex flex-col" style={{ zIndex: focusedField === 'service' ? 10 : 1 }}>
                                        <motion.label
                                            initial={false}
                                            animate={{
                                                y: -32,
                                                x: 0,
                                                scale: 0.8,
                                                color: errors.service ? '#ef4444' : (formValues.service || focusedField === 'service' ? 'rgba(155, 28, 46, 1)' : 'rgba(100, 116, 139, 0.7)'),
                                            }}
                                            className="absolute left-0 pointer-events-none origin-left font-display font-medium px-1"
                                        >
                                            Wofür interessieren Sie sich?
                                        </motion.label>
                                        <div className={`relative rounded-xl overflow-hidden border bg-background transition-all duration-300 ${errors.service ? 'border-red-500' : (focusedField === 'service' ? 'border-primary ring-1 ring-primary' : 'border-border md:hover:border-primary/30')}`}>
                                            <select
                                                id="service"
                                                className="w-full px-6 outline-none text-[16px] text-text-primary font-medium bg-transparent appearance-none h-[52px] relative z-10"
                                                {...register('service')}
                                                onFocus={() => setFocusedField('service')}
                                                onBlur={(e) => {
                                                    setFocusedField(null);
                                                    register('service').onBlur(e);
                                                }}
                                                style={{ backgroundColor: focusedField === 'service' ? 'rgba(255, 255, 255, 1)' : 'rgba(250, 250, 250, 1)' }}
                                            >
                                                <option value="" disabled className="text-text-secondary">Bitte wählen...</option>
                                                <option value="unterhaltsreinigung">Unterhaltsreinigung</option>
                                                <option value="glasreinigung">Glas- & Fassadenreinigung</option>
                                                <option value="bauendreinigung">Bauendreinigung</option>
                                                <option value="industriereinigung">Industriereinigung</option>
                                                <option value="sonstiges">Sonstiges</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-text-secondary z-20">
                                                <ChevronDown className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {errors.service && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10, height: 0 }}
                                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                    exit={{ opacity: 0, y: -10, height: 0 }}
                                                    className="text-red-500 text-sm mt-2 font-medium flex items-center gap-1.5 px-2"
                                                >
                                                    <AlertCircle className="w-3.5 h-3.5" />
                                                    {errors.service.message}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <ContactInput {...inputProps('message')} label="Worum geht es genau? (Ihre Nachricht)" required isTextArea />

                                    {/* Liquid Toggle Checkbox */}
                                    <div className="flex flex-col">
                                        <div data-testid="privacy-checkbox" className={`flex items-start gap-4 bg-surface p-5 rounded-xl border group cursor-pointer ${!privacyChecked && submitCount > 0 ? 'border-red-500 bg-red-50' : 'border-border/50'}`} onClick={() => setPrivacyChecked(!privacyChecked)}>
                                            <div className="relative w-6 h-6 shrink-0 mt-0.5">
                                                <motion.div
                                                    animate={{
                                                        backgroundColor: privacyChecked ? 'rgba(155, 28, 46, 1)' : 'rgba(255, 255, 255, 1)',
                                                        borderColor: privacyChecked ? 'rgba(155, 28, 46, 1)' : (!privacyChecked && submitCount > 0 ? 'rgba(239, 68, 68, 1)' : 'rgba(226, 232, 240, 1)'),
                                                        scale: privacyChecked ? 1.05 : 1,
                                                    }}
                                                    transition={springs.bouncy}
                                                    className="w-full h-full rounded border-2 flex items-center justify-center overflow-hidden"
                                                >
                                                    <AnimatePresence>
                                                        {privacyChecked && (
                                                            <motion.div
                                                                initial={{ scale: 0, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                exit={{ scale: 0, opacity: 0 }}
                                                                transition={{ ...springs.snappy, delay: 0.1 }}
                                                            >
                                                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                                {/* Liquid splash effect */}
                                                <AnimatePresence>
                                                    {privacyChecked && (
                                                        <motion.div
                                                            initial={{ scale: 1, opacity: 0.8 }}
                                                            animate={{ scale: 2.5, opacity: 0 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.5, ease: 'easeOut' }}
                                                            className="absolute inset-0 rounded-full border-2 border-primary pointer-events-none"
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <label className="text-tiny text-text-secondary leading-relaxed cursor-pointer select-none">
                                                Ich stimme zu, dass meine Angaben zur Beantwortung meiner Anfrage verarbeitet werden. Details in der <a href="/datenschutz" className="text-primary font-bold hover:underline" onClick={(e) => e.stopPropagation()}>Datenschutzerklärung</a>. *
                                            </label>
                                        </div>
                                        <AnimatePresence>
                                            {!privacyChecked && submitCount > 0 && (
                                                <motion.div
                                                    data-testid="privacy-error"
                                                    initial={{ opacity: 0, y: -10, height: 0 }}
                                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                    exit={{ opacity: 0, y: -10, height: 0 }}
                                                    className="text-red-500 text-sm mt-3 font-medium flex items-center gap-1.5 px-2"
                                                >
                                                    <AlertCircle className="w-3.5 h-3.5" />
                                                    Sie müssen der Datenschutzerklärung zustimmen, um fortzufahren.
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Submit Section */}
                                    <div className="flex flex-col gap-4">
                                        <motion.button
                                            data-testid="submit-button"
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="relative w-full overflow-hidden flex justify-center items-center gap-3 py-5 px-8 rounded-xl text-base font-bold tracking-wide text-white bg-primary transition-all font-display group disabled:opacity-80 disabled:cursor-wait"
                                            onFocus={() => setFocusedField('submit')}
                                            onBlur={() => setFocusedField(null)}
                                        >
                                            <AnimatePresence mode="wait">
                                                {isSubmitting ? (
                                                    <motion.div
                                                        key="loading"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                                        <span className="ml-2 font-medium">Ihre Anfrage wird sicher übertragen...</span>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="default"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="flex items-center gap-3 z-10"
                                                    >
                                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        Kostenlose Erstberatung anfordern
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary-hover via-white/20 to-primary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                                        </motion.button>

                                        {/* Trust / Guarantee Badge */}
                                        <div className="flex items-center justify-center gap-2 text-xs font-medium text-text-secondary mt-1">
                                            <ShieldCheck className="w-4 h-4 text-trust-gold" />
                                            <span>Ihre Anfrage ist völlig unverbindlich. 100% SSL-Verschlüsselt.</span>
                                        </div>
                                    </div>
                                </form>
                            </ComponentErrorBoundary>
                        </motion.div>
                    ) : (
                        <ContactSuccessState key="success" />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
