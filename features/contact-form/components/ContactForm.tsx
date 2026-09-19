'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ChevronDown, Check, AlertCircle, ShieldCheck } from 'lucide-react';
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
    const [apiError, setApiError] = useState<string | null>(null);

    const {
        register,
        handleSubmit: rxSubmit,
        control,
        formState: { errors, submitCount },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '', email: '', phone: '', service: '', message: '', honeypot: ''
        },
        mode: 'onTouched'
    });

    const formValues = useWatch({ control }) as Partial<ContactFormData>;
    const filledCount = ['name', 'email', 'phone', 'service', 'message'].filter(f => !!formValues[f as keyof ContactFormData]).length;

    const onSubmit = async (data: ContactFormData) => {
        if (!privacyChecked) return;
        setApiError(null);
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
                setApiError(resData.message || 'Beim Senden der Anfrage ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an: 0152 34754386.');
                setIsSubmitting(false);
                return;
            }

            setIsSubmitting(false);
            setIsSuccess(true);
        } catch (e) {
            console.error('Network or Request Error:', e);
            setApiError('Verbindungsfehler beim Übertragen. Bitte prüfen Sie Ihre Verbindung oder rufen Sie uns an: 0152 34754386.');
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
        <div className="relative w-full">
            <div className="bg-white rounded-[2rem] p-5 sm:p-8 md:p-10 border border-border/80 shadow-card relative overflow-hidden transition-shadow duration-300 focus-within:shadow-elevated">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-light to-primary" />

                {/* Form Success Implosion State */}
                <AnimatePresence mode="wait">
                    {!isSuccess ? (
                        <motion.div
                            key="form"
                            exit={{
                                scale: 0.95,
                                opacity: 0,
                                filter: 'blur(10px)',
                                transition: { duration: 0.4, ease: [0.8, 0, 0.2, 1] }
                            }}
                        >
                            {/* Header with Progress Tracker */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                                <div className="max-w-xl">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 font-display tracking-tight leading-tight">
                                        Lassen Sie uns starten
                                    </h2>
                                    <p className="text-sm sm:text-base font-normal text-text-secondary leading-relaxed">
                                        Ihr Weg zu einer makellosen Immobilie in nur wenigen Klicks. Wir melden uns umgehend bei Ihnen.
                                    </p>
                                </div>
                                <AnimatePresence>
                                    {filledCount >= 2 && !isSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.85 }}
                                            className="self-start shrink-0 flex items-center gap-2.5 bg-primary/5 px-3.5 py-1.5 rounded-full border border-primary/20 shadow-xs"
                                        >
                                            <div className="relative w-5 h-5">
                                                <svg className="w-full h-full -rotate-90">
                                                    <circle cx="10" cy="10" r="8" className="stroke-primary/20 fill-none" strokeWidth="2.5" />
                                                    <circle
                                                        cx="10" cy="10" r="8"
                                                        className="stroke-primary fill-none transition-all duration-300 ease-out"
                                                        strokeWidth="2.5"
                                                        strokeDasharray={2 * Math.PI * 8}
                                                        strokeDashoffset={2 * Math.PI * 8 * (1 - filledCount / 5)}
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-primary">
                                                    {filledCount}
                                                </div>
                                            </div>
                                            <span className="text-xs font-bold text-primary font-display">
                                                {filledCount === 5 ? 'Bereit zum Senden!' : 'Fast geschafft'}
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <ComponentErrorBoundary componentName="Contact Form Fields">
                                <form onSubmit={rxSubmit(onSubmit)} className="space-y-6" noValidate>
                                    {/* Bot Honeypot */}
                                    <input
                                        type="text"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        className="hidden opacity-0 pointer-events-none absolute -left-[9999px]"
                                        aria-hidden="true"
                                        {...register('honeypot')}
                                    />

                                    {/* Input Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                        <ContactInput
                                            {...inputProps('name')}
                                            label="Wie dürfen wir Sie ansprechen?"
                                            placeholder="z. B. Dr. Michael Weber oder Müller GmbH"
                                            required
                                            autoComplete="name"
                                        />
                                        <ContactInput
                                            {...inputProps('phone')}
                                            label="Unter welcher Nummer erreichen wir Sie? (Optional)"
                                            placeholder="z. B. 0152 34754386"
                                            type="tel"
                                            inputMode="tel"
                                            autoComplete="tel"
                                        />
                                        <div className="col-span-1 md:col-span-2">
                                            <ContactInput
                                                {...inputProps('email')}
                                                label="Ihre beste E-Mail Adresse"
                                                placeholder="ihre-adresse@unternehmen.de"
                                                type="email"
                                                required
                                                inputMode="email"
                                                autoComplete="email"
                                            />
                                        </div>
                                    </div>

                                    {/* Service Select - Harmonized with clean label and styling */}
                                    <div className="flex flex-col w-full">
                                        <div className="flex items-center justify-between mb-2">
                                            <label
                                                htmlFor="service"
                                                className="text-sm font-semibold text-text-primary font-display tracking-tight flex items-center gap-1 cursor-pointer select-none"
                                            >
                                                <span>Wofür interessieren Sie sich?</span>
                                            </label>
                                            <span className="text-[11px] font-medium text-text-secondary/70 uppercase tracking-wider bg-surface-secondary px-2 py-0.5 rounded-full border border-border/40">
                                                Optional
                                            </span>
                                        </div>
                                        <div
                                            className={`relative rounded-xl bg-white border transition-all duration-200 shadow-sm ${
                                                errors.service
                                                    ? 'border-red-500 ring-2 ring-red-500/10'
                                                    : focusedField === 'service'
                                                        ? 'border-primary ring-2 ring-primary/20 shadow-[0_0_0_1px_rgba(155,28,46,0.1)]'
                                                        : 'border-border/80 hover:border-border'
                                            }`}
                                        >
                                            <select
                                                id="service"
                                                className="w-full px-4 sm:px-5 pr-12 outline-none text-[16px] text-text-primary font-normal bg-transparent appearance-none h-[52px] min-h-[52px] cursor-pointer rounded-xl"
                                                {...register('service')}
                                                onFocus={() => setFocusedField('service')}
                                                onBlur={(e) => {
                                                    setFocusedField(null);
                                                    register('service').onBlur(e);
                                                }}
                                            >
                                                <option value="">Bitte Leistung auswählen...</option>
                                                <option value="unterhaltsreinigung">Unterhaltsreinigung (Büros, Praxen, Kanzleien)</option>
                                                <option value="glasreinigung">Glas- &amp; Fassadenreinigung (auch Osmosetechnik)</option>
                                                <option value="bauendreinigung">Bauendreinigung (Neu- &amp; Umbau)</option>
                                                <option value="industriereinigung">Industriereinigung &amp; Hallen</option>
                                                <option value="sonderreinigung">Sonderreinigung &amp; Grundreinigung</option>
                                                <option value="sonstiges">Sonstiges / Individuelle Anfrage</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-secondary">
                                                <ChevronDown className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {errors.service && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -4, height: 0 }}
                                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                    exit={{ opacity: 0, y: -4, height: 0 }}
                                                    transition={{ duration: 0.15 }}
                                                    role="alert"
                                                    className="text-red-600 text-xs sm:text-sm mt-1.5 font-medium flex items-center gap-1.5 px-0.5"
                                                >
                                                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                                                    <span>{errors.service.message}</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <ContactInput
                                        {...inputProps('message')}
                                        label="Worum geht es genau? (Ihre Nachricht)"
                                        placeholder="Beschreiben Sie kurz Ihr Vorhaben (z. B. Art des Objekts, Quadratmeter, gewünschter Reinigungsrhythmus oder Wunschtermin)..."
                                        required
                                        isTextArea
                                    />

                                    {/* Accessible Privacy Checkbox */}
                                    <div className="flex flex-col pt-1">
                                        <div
                                            data-testid="privacy-checkbox"
                                            role="checkbox"
                                            aria-checked={privacyChecked}
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === ' ' || e.key === 'Enter') {
                                                    e.preventDefault();
                                                    setPrivacyChecked(!privacyChecked);
                                                }
                                            }}
                                            onClick={() => setPrivacyChecked(!privacyChecked)}
                                            className={`flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border transition-all cursor-pointer select-none ${
                                                !privacyChecked && submitCount > 0
                                                    ? 'border-red-500/80 bg-red-50/50'
                                                    : 'border-border/70 bg-surface-secondary/30 hover:bg-surface-secondary/60 hover:border-border'
                                            }`}
                                        >
                                            <div className="relative w-5 h-5 shrink-0 mt-0.5">
                                                <div
                                                    className={`w-full h-full rounded border flex items-center justify-center transition-colors ${
                                                        privacyChecked
                                                            ? 'bg-primary border-primary text-white shadow-xs'
                                                            : !privacyChecked && submitCount > 0
                                                                ? 'bg-white border-red-500'
                                                                : 'bg-white border-border hover:border-text-secondary'
                                                    }`}
                                                >
                                                    {privacyChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                                </div>
                                            </div>
                                            <label className="text-xs sm:text-sm text-text-secondary leading-relaxed cursor-pointer select-none">
                                                Ich stimme zu, dass meine Angaben zur Beantwortung meiner Anfrage verarbeitet werden. Details in der{' '}
                                                <a
                                                    href="/datenschutz"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary font-bold hover:underline"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Datenschutzerklärung
                                                </a>
                                                . <span className="text-primary font-bold">*</span>
                                            </label>
                                        </div>
                                        <AnimatePresence>
                                            {!privacyChecked && submitCount > 0 && (
                                                <motion.div
                                                    data-testid="privacy-error"
                                                    initial={{ opacity: 0, y: -4, height: 0 }}
                                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                    exit={{ opacity: 0, y: -4, height: 0 }}
                                                    className="text-red-600 text-xs sm:text-sm mt-2 font-medium flex items-center gap-1.5 px-1"
                                                >
                                                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                                                    <span>Sie müssen der Datenschutzerklärung zustimmen, um fortzufahren.</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Submit Section */}
                                    <div className="flex flex-col gap-3.5 pt-2">
                                        <AnimatePresence>
                                            {apiError && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    role="alert"
                                                    className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center gap-2.5"
                                                >
                                                    <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                                                    <span>{apiError}</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <motion.button
                                            data-testid="submit-button"
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className="relative w-full overflow-hidden flex justify-center items-center gap-3 py-4.5 px-8 rounded-xl text-base font-bold tracking-wide text-white bg-primary hover:bg-primary-hover active:bg-primary-dark transition-all font-display group disabled:opacity-80 disabled:cursor-wait shadow-sm hover:shadow-md"
                                            onFocus={() => setFocusedField('submit')}
                                            onBlur={() => setFocusedField(null)}
                                        >
                                            <AnimatePresence mode="wait">
                                                {isSubmitting ? (
                                                    <motion.div
                                                        key="loading"
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -5 }}
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        <span className="font-medium">Ihre Anfrage wird sicher übertragen...</span>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="default"
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -5 }}
                                                        className="flex items-center gap-3 z-10"
                                                    >
                                                        <span>Kostenlose Erstberatung anfordern</span>
                                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.button>

                                        {/* Trust / Guarantee Badge */}
                                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-text-secondary mt-1">
                                            <span className="flex items-center gap-1.5">
                                                <ShieldCheck className="w-4 h-4 text-trust-gold" />
                                                <span>100% unverbindlich &amp; kostenlos</span>
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                                <span>Rückmeldung innerhalb von 24h</span>
                                            </span>
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
