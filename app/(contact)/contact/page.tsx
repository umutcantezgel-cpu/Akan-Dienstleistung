import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import dynamic from 'next/dynamic';
const ContactForm = dynamic(() => import('@/features/contact-form/components/ContactForm'));
const DynamicMap = dynamic(() => import('@/features/locations/components/DynamicMap'));

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt & Unverbindliches Angebot | AKAN Dienstleistung Gudensberg',
  description: 'Sie suchen eine verlässliche Reinigungsfirma in Gudensberg, Kassel oder Baunatal? Kontaktieren Sie uns für ein kostenloses Angebot. Feste Teams, 24/7 Service.',
  alternates: {
    canonical: 'https://akan-dienstleistung.de/contact',
  },
  openGraph: {
    title: 'Kontakt & Unverbindliches Angebot | AKAN Dienstleistung',
    description: 'Fordern Sie jetzt Ihr individuelles Reinigungsangebot an. Persönliche Vor-Ort-Begehung und Festpreisgarantie in ganz Nordhessen.',
    url: 'https://akan-dienstleistung.de/contact',
    siteName: 'AKAN Dienstleistung',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt & Unverbindliches Angebot | AKAN Dienstleistung',
    description: 'Kostenloses und transparentes Festpreisangebot für Gebäudereinigung in Nordhessen anfordern.',
  },
};

const hqLocation = {
  name: 'Gudensberg',
  entfernung: 'Hauptstandort'
} as any;

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-primary pt-32 pb-40 lg:pt-48 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-[5rem] blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="container-fluid relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white mb-6 tracking-tighter font-display drop-shadow-sm leading-tight">
            Kontaktieren Sie <span className="text-white/80">uns</span>
          </h1>
          <p className="text-large md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-[1.8]">
            Wir sind für Sie da. Haben Sie Fragen zu unseren Leistungen oder wünschen Sie ein unverbindliches Angebot? Schreiben Sie uns oder rufen Sie an.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="container-fluid -mt-20 lg:-mt-28 relative z-20 mb-[var(--section-py-lg)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface rounded-[2rem] p-6 sm:p-10 shadow-soft border border-border flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-card transition-all duration-500 group">
            <div className="w-16 h-16 rounded-[1rem] bg-white shadow-inner-glow flex items-center justify-center mb-8 border border-border group-hover:scale-110 transition-transform duration-500">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4 font-display">Adresse</h3>
            <p className="text-medium font-light text-text-secondary leading-[1.8]">
              Breslauer Str. 50<br />
              34281 Gudensberg<br />
              Deutschland
            </p>
          </div>
          <div className="bg-surface rounded-[2rem] p-6 sm:p-10 shadow-soft border border-border flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-card transition-all duration-500 group">
            <div className="w-16 h-16 rounded-[1rem] bg-white shadow-inner-glow flex items-center justify-center mb-8 border border-border group-hover:scale-110 transition-transform duration-500">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4 font-display">Telefon</h3>
            <p className="text-medium font-light text-text-secondary leading-[1.8] mb-4">
              Wir sind telefonisch für Sie erreichbar.
            </p>
            <a href="tel:+4915234754386" className="text-lg font-bold text-primary hover:text-primary-hover transition-colors font-display tracking-tight">
              0152 34754386
            </a>
          </div>
          <div className="bg-surface rounded-[2rem] p-6 sm:p-10 shadow-soft border border-border flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-card transition-all duration-500 group">
            <div className="w-16 h-16 rounded-[1rem] bg-white shadow-inner-glow flex items-center justify-center mb-8 border border-border group-hover:scale-110 transition-transform duration-500">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4 font-display">E-Mail</h3>
            <p className="text-medium font-light text-text-secondary leading-[1.8] mb-4">
              Schreiben Sie uns jederzeit eine E-Mail.
            </p>
            <a href="mailto:info@akan-dienstleistung.de" className="text-lg font-bold text-primary hover:text-primary-hover transition-colors font-display tracking-tight break-all">
              info@akan-dienstleistung.de
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container-fluid pb-[var(--section-py-lg)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Synaptic Form Section */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface rounded-[2.5rem] p-6 sm:p-10 border border-border shadow-soft">
              <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-4 font-display tracking-tight">
                <div className="w-12 h-12 rounded-xl bg-white shadow-inner-glow flex items-center justify-center text-primary border border-border">
                  <Clock className="w-6 h-6" />
                </div>
                Bürozeiten
              </h3>
              <ul className="space-y-5 text-medium font-light text-text-secondary">
                <li className="flex justify-between items-center pb-5 border-b border-border/50">
                  <span>Montag - Freitag</span>
                  <span className="font-bold text-text-primary tracking-wide">08:00 - 17:00 Uhr</span>
                </li>
                <li className="flex justify-between items-center pb-5 border-b border-border/50">
                  <span>Samstag</span>
                  <span className="font-bold text-text-primary tracking-wide">Nach Vereinbarung</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sonntag</span>
                  <span className="font-bold text-primary tracking-wide">Geschlossen</span>
                </li>
              </ul>
              <div className="mt-10 p-5 bg-white rounded-2xl border border-border flex items-start gap-4 shadow-sm group hover:shadow-md transition-shadow">
                <ShieldCheck className="w-7 h-7 text-green-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold text-text-primary font-display tracking-tight">24/7 Notfall-Service</p>
                  <p className="text-tiny text-text-secondary mt-1.5 leading-relaxed">Für Bestandskunden bieten wir einen rund-um-die-Uhr Notdienst bei Wasserschäden o.ä.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-[2.5rem] p-6 sm:p-10 border border-primary/10 shadow-soft">
              <h3 className="text-xl font-bold text-text-primary mb-8 font-display tracking-tight">Warum AKAN?</h3>
              <ul className="space-y-5">
                {['Kostenlose Besichtigung vor Ort', 'Unverbindliches Angebot', 'Transparente Preisgestaltung', 'Persönlicher Ansprechpartner'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 drop-shadow-sm" />
                    <span className="text-text-primary font-bold text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="w-full">
        <DynamicMap location={hqLocation} />
      </div>
    </>
  );
}
