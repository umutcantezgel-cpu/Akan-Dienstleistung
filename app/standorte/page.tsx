import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllLocationSlugs, getLocation } from '@/features/locations/data/locationData';
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Car,
  Building2,
  CheckCircle2,
  PhoneCall,
  CalendarCheck,
} from 'lucide-react';
import { generateBreadcrumbSchema } from '@/shared/utils/seo/SchemaGenerator';

export const revalidate = 86400; // SSG / ISR: 24h

export const metadata: Metadata = {
  title: 'Standorte in Nordhessen | AKAN Dienstleistung Gebäudereinigung',
  description:
    'Professionelle Gebäudereinigung in Nordhessen: Gudensberg, Kassel, Baunatal, Fritzlar, Melsungen, Bad Wildungen und Umgebung. Schnelle Anfahrt, feste Stammteams vor Ort.',
  alternates: {
    canonical: 'https://akan-dienstleistung.de/standorte',
  },
  openGraph: {
    title: 'Standorte in Nordhessen | AKAN Dienstleistung',
    description:
      'Ihr regionaler Reinigungspartner für ganz Nordhessen. Von Gudensberg bis Kassel: Unterhaltsreinigung, Fensterreinigung und Baufeinreinigung vor Ort.',
    url: 'https://akan-dienstleistung.de/standorte',
    siteName: 'AKAN Dienstleistung',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Standorte in Nordhessen | AKAN Dienstleistung',
    description:
      'Gebäudereinigung in Gudensberg, Kassel, Fritzlar, Baunatal und ganz Nordhessen.',
  },
};

export default function StandorteOverviewPage() {
  const slugs = getAllLocationSlugs();
  const locations = slugs.map((slug) => getLocation(slug)!).filter(Boolean);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: '/' },
    { name: 'Standorte', url: '/standorte' },
  ]);

  const localItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: locations.map((loc, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: `Gebäudereinigung ${loc.name}`,
      url: `https://akan-dienstleistung.de/standorte/${loc.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localItemListSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-transparent pointer-events-none" />
        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 shadow-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-bold text-primary tracking-widest uppercase">
                Nordhessenweite Einsatzbereitschaft
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-text-primary mb-8 font-display leading-[1.08]">
              Verwurzelt in Gudensberg –{' '}
              <span className="text-primary">aktiv in ganz Nordhessen</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-3xl mx-auto leading-relaxed mb-10">
              Von unserem Hauptsitz in Gudensberg (Odenbergstraße 26) aus steuern wir unsere Reinigungsteams im gesamten Schwalm-Eder-Kreis, Landkreis Kassel und Umgebung. Profitieren Sie von kurzen Anfahrtswegen, persönlicher Nähe und flexiblen Einsatzzeiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-3 px-8 py-4 text-base font-bold rounded-xl text-white bg-primary hover:bg-primary-hover transition-all shadow-elevated font-display group"
              >
                Verfügbarkeit anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#locations-grid"
                className="inline-flex justify-center items-center px-8 py-4 border border-border text-base font-bold rounded-xl text-text-primary bg-surface hover:bg-white transition-all font-display shadow-soft"
              >
                Alle Standorte entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL USPs */}
      <section className="bg-surface py-12 border-b border-border">
        <div className="container-fluid">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-lg font-display mb-1">Kurze Anfahrtswege</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  Zentral an der A49 / B254 gelegen, erreichen wir Kassel, Baunatal und Fritzlar in unter 20 Minuten.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-lg font-display mb-1">Schnelle Reaktionszeit</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  Kostenlose Vor-Ort-Besichtigungen innerhalb von 24–48 Stunden, Notfallservice bei akuten Verunreinigungen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-lg font-display mb-1">Regionale Expertise</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  Wir kennen die lokalen Gewerbestrukturen – von Handwerksbetrieben im Chattengau bis zu Industriekunden in Kassel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS DIRECTORY GRID */}
      <section id="locations-grid" className="py-20 lg:py-32 bg-background">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 font-display">
              Lokale Präsenz
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-text-primary font-display tracking-tight">
              Unsere Einsatzgebiete in Nordhessen
            </h3>
            <p className="text-base md:text-lg text-text-secondary font-light mt-4">
              Klicken Sie auf Ihre Stadt oder Gemeinde, um maßgeschneiderte Informationen, Ansprechpartner und Leistungsangebote für Ihren Standort zu erhalten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => {
              const isHQ = loc.slug === 'gudensberg';

              return (
                <div
                  key={loc.slug}
                  className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between p-8 bg-surface ${
                    isHQ
                      ? 'border-primary/50 shadow-card ring-2 ring-primary/20'
                      : 'border-border/80 shadow-soft hover:shadow-card hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                          {loc.region}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isHQ
                            ? 'bg-primary text-white'
                            : 'bg-white border border-border text-text-primary'
                        }`}
                      >
                        {loc.entfernung}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold font-display text-text-primary mb-3">
                      {loc.name}
                    </h4>

                    <p className="text-sm text-text-secondary font-light leading-relaxed mb-6">
                      {loc.localContent.introText}
                    </p>

                    {loc.stadtteile && loc.stadtteile.length > 0 && (
                      <div className="mb-6">
                        <span className="text-xs font-bold text-text-primary uppercase tracking-wider block mb-2">
                          Stadtteile & Bezirke:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {loc.stadtteile.slice(0, 5).map((st, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs bg-white border border-border/70 px-2.5 py-1 rounded-lg text-text-secondary font-medium"
                            >
                              {st}
                            </span>
                          ))}
                          {loc.stadtteile.length > 5 && (
                            <span className="text-xs text-text-secondary font-medium px-2 py-1">
                              +{loc.stadtteile.length - 5} weitere
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-border/60 mt-4 flex items-center justify-between">
                    <Link
                      href={`/standorte/${loc.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover font-display group/link"
                    >
                      Standortdetails öffnen
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={`/contact?location=${loc.slug}`}
                      className="text-xs text-text-secondary hover:text-text-primary font-medium underline"
                    >
                      Vor Ort anfragen
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGIONAL CONTACT CTA */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="container-fluid max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" />
            Ihr Ort ist nicht aufgeführt?
          </div>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-6">
            Wir reinigen im gesamten 50km-Radius um Gudensberg
          </h3>
          <p className="text-base md:text-lg text-text-secondary font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Auch wenn Ihre Gemeinde oben nicht explizit aufgelistet ist: Rufen Sie uns an oder senden Sie uns eine Anfrage. In 99% der Fälle können wir Ihr Objekt ohne Mehrkosten für die Anfahrt bedienen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-hover transition-all shadow-elevated font-display"
            >
              <CalendarCheck className="w-5 h-5" />
              Jetzt Standort anfragen
            </Link>
            <a
              href="tel:+4915234754386"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border bg-white text-text-primary font-bold text-base hover:bg-slate-50 transition-all font-display shadow-sm"
            >
              <PhoneCall className="w-5 h-5 text-primary" />
              0152 34754386
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
