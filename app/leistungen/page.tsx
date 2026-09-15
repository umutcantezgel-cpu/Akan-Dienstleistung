import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/config/services';
import {
  Building2,
  Sun,
  HardHat,
  Factory,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  Users,
  CalendarCheck,
  PhoneCall,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { generateBreadcrumbSchema } from '@/shared/utils/seo/SchemaGenerator';

export const revalidate = 86400; // SSG / ISR: 24h

export const metadata: Metadata = {
  title: 'Leistungen im Überblick | Professionelle Gebäudereinigung AKAN',
  description:
    'Alle Reinigungsleistungen von AKAN Dienstleistung: Unterhaltsreinigung, Fensterreinigung, Bauendreinigung, Industriereinigung & Sonderreinigung in Gudensberg, Kassel und Nordhessen.',
  alternates: {
    canonical: 'https://akan-dienstleistung.de/leistungen',
  },
  openGraph: {
    title: 'Leistungen im Überblick | AKAN Dienstleistung',
    description:
      'Professionelle Gebäudereinigung für Unternehmen & anspruchsvolle Gewerbekunden in Nordhessen. 5 Fachbereiche, feste Stammteams, geprüfte Qualität.',
    url: 'https://akan-dienstleistung.de/leistungen',
    siteName: 'AKAN Dienstleistung',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leistungen im Überblick | AKAN Dienstleistung',
    description:
      'Unterhaltsreinigung, Fensterreinigung, Bauendreinigung, Industriereinigung und Sonderreinigung in Nordhessen.',
  },
};

const iconMap = {
  unterhaltsreinigung: Building2,
  fensterreinigung: Sun,
  bauendreinigung: HardHat,
  industriereinigung: Factory,
  sonderreinigung: Sparkles,
};

const processSteps = [
  {
    step: '01',
    title: 'Kostenlose Objektbegehung',
    desc: 'Wir besichtigen Ihre Räumlichkeiten vor Ort in Gudensberg, Kassel oder Umgebung und erfassen Ihren genauen Bedarf.',
  },
  {
    step: '02',
    title: 'Transparentes Festpreisangebot',
    desc: 'Sie erhalten ein detailliertes Leistungsverzeichnis ohne versteckte Kosten – maßgeschneidert auf Ihr Budget und Ihre Intervalle.',
  },
  {
    step: '03',
    title: 'Feste Stammkräfte & Einarbeitung',
    desc: 'Kein ständiger Personalwechsel: Wir weisen Ihrem Objekt geschulte, feste Mitarbeiter zu, die sich mit Ihren Räumen auskennen.',
  },
  {
    step: '04',
    title: 'Garantierte Qualitätskontrolle',
    desc: 'Unsere Objektleiterin Zeynep Hilaloglu prüft regelmäßig die Ausführung. Bei Beanstandungen bessern wir unverzüglich nach.',
  },
];

const serviceFaqs = [
  {
    q: 'Welche Reinigungsintervalle sind möglich?',
    a: 'Wir bieten flexible Intervalle passend zu Ihrem Betriebsablauf: täglich, mehrmals wöchentlich, wöchentlich, 14-tägig oder monatlich – auch außerhalb Ihrer regulären Geschäftszeiten (frühmorgens, abends oder am Wochenende).',
  },
  {
    q: 'Werden eigene Reinigungsmittel und Maschinen mitgebracht?',
    a: 'Ja, unser Team ist komplett autark ausgestattet. Wir bringen moderne Profigeräte (Osmoseanlagen, Einscheibenmaschinen, Industriestaubsauger) und materialschonende, umweltfreundliche Reinigungschemie mit.',
  },
  {
    q: 'Wie sind eventuelle Schäden versichert?',
    a: 'AKAN Dienstleistung verfügt über eine umfassende Betriebshaftpflichtversicherung, die Personen-, Sach- und Schlüsselverlustschäden bis in Millionenhöhe zuverlässig abdeckt.',
  },
  {
    q: 'Wie schnell können Sie nach Auftragserteilung starten?',
    a: 'In dringenden Fällen (z. B. Bauendreinigung vor Bauabnahme oder Notfall-Sonderreinigung) können wir oft innerhalb von 24–48 Stunden starten. Bei regulärer Unterhaltsreinigung meist innerhalb einer Woche.',
  },
];

export default function LeistungenPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: '/' },
    { name: 'Leistungen', url: '/leistungen' },
  ]);

  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.shortDesc,
      url: `https://akan-dienstleistung.de${service.link}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-transparent pointer-events-none" />
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase">
                Meisterhafte Reinigungsstandards
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-text-primary mb-8 font-display leading-[1.08]">
              Unser Leistungsspektrum für{' '}
              <span className="text-primary">makellose Sauberkeit</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl mx-auto leading-relaxed mb-10">
              Von der täglichen Unterhaltsreinigung in Büros und Praxen über streifenfreie Glas- und Fassadenreinigung bis hin zu anspruchsvoller Industrie- und Bauendreinigung: Wir garantieren höchste Termintreue, feste Teams und messbare Qualität in ganz Nordhessen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-3 px-8 py-4 text-base font-bold rounded-xl text-white bg-primary hover:bg-primary-hover transition-all shadow-elevated font-display group"
              >
                Kostenlose Erstberatung anfordern
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#services-grid"
                className="inline-flex justify-center items-center px-8 py-4 border border-border text-base font-bold rounded-xl text-text-primary bg-surface hover:bg-white transition-all font-display shadow-soft"
              >
                Alle 5 Gewerke ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TRUST BAR */}
      <section className="bg-surface py-6 border-b border-border">
        <div className="container-fluid">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-semibold text-text-primary">&lt; 24h Reaktionszeit</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-semibold text-text-primary">Feste Stammteams</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-semibold text-text-primary">100% Zufriedenheitsgarantie</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-semibold text-text-primary">Vollversichert & zertifiziert</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-grid" className="py-20 lg:py-32 bg-background">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 font-display">
              Gezielte Lösungen nach Maß
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-text-primary font-display tracking-tight">
              Wählen Sie die passende Leistung für Ihr Objekt
            </h3>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.id as keyof typeof iconMap] || Building2;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={service.id}
                  className="bg-surface border border-border/70 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-soft hover:shadow-card transition-all duration-500 overflow-hidden relative group"
                >
                  <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center text-primary shadow-inner-glow group-hover:scale-110 transition-transform">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            {service.subtitle}
                          </span>
                          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary font-display tracking-tight">
                            {service.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4">
                          Leistungsbestandteile:
                        </h5>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4 border-t border-border/60 items-center">
                        <Link
                          href={service.link}
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-all shadow-sm font-display group/link"
                        >
                          Detailseite aufrufen
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          href={`/contact?service=${service.id}`}
                          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border bg-white text-text-primary font-bold text-sm hover:border-primary/40 hover:bg-surface transition-all font-display"
                        >
                          Direkt anfragen
                        </Link>
                      </div>
                    </div>

                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="bg-white border border-border/70 rounded-3xl p-8 shadow-sm">
                        <h5 className="text-base font-bold font-display text-text-primary mb-6 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Spezifikationen & Kennzahlen
                        </h5>
                        <div className="grid grid-cols-2 gap-4">
                          {service.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="bg-surface rounded-2xl p-4 border border-border/40">
                              <span className="block text-xs font-medium text-text-secondary mb-1">
                                {highlight.label}
                              </span>
                              <span className="block text-base md:text-lg font-bold text-text-primary font-display tracking-tight">
                                {highlight.value}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                          <div>
                            <span className="text-xs text-text-secondary block">Einsatzgebiet</span>
                            <span className="text-sm font-bold text-text-primary">Ganz Nordhessen</span>
                          </div>
                          <Link
                            href="/standorte"
                            className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                          >
                            Standorte ansehen <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 lg:py-28 bg-surface border-y border-border">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 font-display">
              Zuverlässiger Ablauf
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-text-primary font-display tracking-tight">
              In 4 Schritten zu Ihrem sauberen Objekt
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="bg-white border border-border/70 rounded-3xl p-8 shadow-sm relative group hover:-translate-y-1 hover:shadow-card transition-all"
              >
                <span className="text-4xl font-extrabold text-primary/20 font-display block mb-4 group-hover:text-primary transition-colors">
                  {p.step}
                </span>
                <h4 className="text-xl font-bold text-text-primary font-display mb-3">
                  {p.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-fluid max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="w-4 h-4" />
              Häufige Fragen
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary font-display">
              Wichtige Antworten zu unseren Reinigungsleistungen
            </h3>
          </div>

          <div className="space-y-6">
            {serviceFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface border border-border/70 rounded-2xl p-6 md:p-8 shadow-soft"
              >
                <h4 className="text-lg font-bold text-text-primary font-display mb-3">
                  {faq.q}
                </h4>
                <p className="text-base text-text-secondary font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container-fluid relative z-10 text-center max-w-3xl">
          <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6 leading-tight">
            Bereit für Reinigung auf höchstem Qualitätsniveau?
          </h3>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed">
            Kontaktieren Sie uns jetzt für ein kostenloses und transparentes Festpreisangebot – persönlich, vor Ort und ohne Risiko.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-primary font-bold text-base hover:bg-slate-100 transition-all shadow-elevated font-display"
            >
              <CalendarCheck className="w-5 h-5" />
              Jetzt Angebot anfordern
            </Link>
            <a
              href="tel:+4915234754386"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 transition-all font-display"
            >
              <PhoneCall className="w-5 h-5" />
              0152 34754386 anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
