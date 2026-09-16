import type { Metadata } from 'next';
import ImagePlaceholder from "@/shared/components/ImagePlaceholder";
import Link from "next/link";

export const revalidate = 604800; // ISR: 7 days
import {
  History,
  Lightbulb,
  Settings,
  ShieldCheck,
  Handshake,
  Shield,
  MapPin,
  Award,
  Building2,
  Leaf,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import DynamicMap from "@/features/locations/components/DynamicMap";
import ReadMoreExpander from "@/shared/components/ReadMoreExpander";

export const metadata: Metadata = {
  title: "Über Uns | Ihre Reinigungsfirma in Gudensberg & Nordhessen | AKAN Dienstleistung",
  description:
    "Lernen Sie das Team hinter AKAN Dienstleistung kennen: Über 10 Jahre Erfahrung, familiengeführt, qualitätszertifiziert in Unterhalts- und Gebäudereinigung.",
  alternates: {
    canonical: "https://akan-dienstleistung.de/ueber-uns",
  },
  openGraph: {
    title: "Über Uns | AKAN Dienstleistung",
    description: "Über 10 Jahre Erfahrung, Familienbetrieb, Meisterqualität in Unterhalts- und Gebäudereinigung in Nordhessen.",
    url: "https://akan-dienstleistung.de/ueber-uns",
    siteName: "AKAN Dienstleistung",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Über Uns | AKAN Dienstleistung",
    description: "Lernen Sie das Team hinter AKAN Dienstleistung kennen – Ihr Reinigungspartner in Nordhessen.",
  },
};

export default function About() {
  return (
    <>
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-transparent pointer-events-none"></div>
        <div className="container-fluid relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-surface border border-border mb-8 shadow-inner-glow">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-mini font-bold text-text-secondary uppercase tracking-[0.2em]">
                  Unsere Geschichte
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-text-primary mb-8 leading-[1.05] font-display drop-shadow-sm">
                Vom Traum zur{" "}
                <span className="text-primary">digitalen Exzellenz</span>
              </h1>
              <ReadMoreExpander maxHeight={120}>
                <div className="text-large md:text-xl font-light text-text-secondary max-w-2xl mb-10 leading-[1.8]">
                  <p className="mb-6">
                    Im Jahr 2024 wurde AKAN Dienstleistung mit einer klaren
                    Vision gegründet: Den Dienstleistungssektor in Nordhessen
                    nicht nur zu bedienen, sondern durch digitale Innovation und
                    kompromisslose Qualität neu zu definieren.
                  </p>
                  <p>
                    Was als Vision begann, fundiert auf solidem Handwerk und
                    Erfahrung. Unsere Objektleiterin Zeynep bringt über{" "}
                    <strong className="font-bold text-text-primary">
                      10 Jahre Branchenexpertise
                    </strong>{" "}
                    in unser Familienunternehmen ein. Diese Dekade an Erfahrung
                    ist das Fundament, auf dem wir modernste Prozesse und echte
                    Kundenorientierung aufbauen.
                  </p>
                </div>
              </ReadMoreExpander>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="#team"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold tracking-wide rounded-xl text-white bg-primary hover:bg-primary-hover transition-all shadow-elevated font-display group"
                >
                  Unser Team kennenlernen
                </a>
                <a
                  href="#values"
                  className="inline-flex justify-center items-center px-8 py-4 border border-border text-base font-bold tracking-wide rounded-xl text-text-primary bg-white hover:border-primary/50 hover:bg-surface transition-all font-display shadow-soft"
                >
                  Unsere Werte
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl transform rotate-3"></div>
              <ImagePlaceholder
                alt="AKAN Gebäudereinigung – Geschulter Spezialist mit moderner Kärcher Scheuersaugmaschine in Gudensberg und Nordhessen"
                priority={true}
                originalSrc="/images/galerie/industriereinigung/akan-kaercher-scheuersaugmaschine-im-einsatz.jpg"
                className="relative rounded-[2.5rem] shadow-elevated w-full h-auto object-cover aspect-[4/3] transform transition hover:scale-[1.02] duration-700 border border-border/60"
              />
              <div
                className="absolute bottom-4 left-4 sm:-bottom-8 sm:-left-8 bg-white/95 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-card border border-border max-w-[calc(100%-2rem)] sm:max-w-xs animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-[1rem] bg-surface flex items-center justify-center text-trust-gold shadow-inner-glow">
                    <History className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-tiny uppercase tracking-wider font-semibold text-text-secondary mb-1">
                      Erfahrung
                    </p>
                    <p className="text-2xl font-bold text-text-primary font-display tracking-tight">
                      Über 10 Jahre
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="py-section-lg bg-surface border-y border-border relative overflow-hidden"
      >
        <div className="container-fluid">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-5">
              Das Herz von AKAN
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 font-display leading-[1.1]">
              Familie Hilaloglu
            </h3>
            <p className="text-large font-light text-text-secondary leading-[1.8]">
              Wir sind mehr als ein Unternehmen – wir sind eine Familie mit
              einer gemeinsamen Mission: Makellose Sauberkeit für Gudensberg und
              Umgebung.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 shadow-soft hover:shadow-card">
              <div className="aspect-[16/9] overflow-hidden relative border-b border-border/50">
                <ImagePlaceholder
                  alt="Cemal Hilaloglu – Inhaber & Gründer von AKAN Dienstleistung"
                  fill
                  originalSrc="/images/galerie/fensterreinigung/akan-glasreinigung-mitarbeiter-branded-hoodie.webp"
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-text-primary font-display mb-2 drop-shadow-sm">
                      Cemal Hilaloglu
                    </h3>
                    <p className="text-primary font-bold text-tiny uppercase tracking-widest">
                      Inhaber & Gründer
                    </p>
                  </div>
                  <div className="bg-surface p-4 rounded-2xl text-primary shadow-inner-glow border border-border">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-medium font-light text-text-secondary mb-10 italic leading-[1.8]">
                  &quot;Mein Ziel war es, eine Struktur zu schaffen, in der
                  Vertrauen kein leeres Wort ist, sondern das Ergebnis
                  täglicher, harter Arbeit und kompromissloser Qualität.&quot;
                </p>
                <div className="border-t border-border pt-8">
                  <span className="text-mini font-bold text-text-secondary uppercase tracking-[0.2em] block mb-4">
                    Fokus
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-surface rounded-xl border border-border text-tiny font-bold text-text-primary shadow-sm hover:shadow-md transition-shadow">
                      Strategie
                    </span>
                    <span className="px-4 py-2 bg-surface rounded-xl border border-border text-tiny font-bold text-text-primary shadow-sm hover:shadow-md transition-shadow">
                      Kundenbeziehungen
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 shadow-soft hover:shadow-card">
              <div className="aspect-[16/9] overflow-hidden relative border-b border-border/50">
                <ImagePlaceholder
                  alt="Zeynep Hilaloglu – Objektleiterin bei AKAN Dienstleistung mit über 10 Jahren Branchenerfahrung"
                  fill
                  originalSrc="/images/galerie/gewerbereinigung/akan-objektbetreuung-gewerbe-sauberkeit.jpg"
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-text-primary font-display mb-2 drop-shadow-sm">
                      Zeynep Hilaloglu
                    </h3>
                    <p className="text-primary font-bold text-tiny uppercase tracking-widest">
                      Objektleiterin
                    </p>
                  </div>
                  <div className="bg-surface p-4 rounded-2xl text-primary shadow-inner-glow border border-border">
                    <Settings className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-medium font-light text-text-secondary mb-10 italic leading-[1.8]">
                  &quot;Nach 10 Jahren in der Branche weiß ich: Exzellenz steckt
                  im Detail. Wir sorgen dafür, dass jeder Handgriff sitzt und
                  unsere hohen Standards immer erfüllt werden.&quot;
                </p>
                <div className="border-t border-border pt-8">
                  <span className="text-mini font-bold text-text-secondary uppercase tracking-[0.2em] block mb-4">
                    Fokus
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-surface rounded-xl border border-border text-tiny font-bold text-text-primary shadow-sm hover:shadow-md transition-shadow">
                      Qualitätsmanagement
                    </span>
                    <span className="px-4 py-2 bg-surface rounded-xl border border-border text-tiny font-bold text-text-primary shadow-sm hover:shadow-md transition-shadow">
                      Teamführung
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-section-lg bg-background overflow-hidden">
        <div className="container-fluid">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-5">
              Unsere Werte
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary font-display leading-[1.1]">
              Das Fundament unserer Arbeit
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-surface p-6 sm:p-10 lg:p-12 rounded-[2rem] shadow-soft border border-border hover:shadow-card hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white shadow-inner-glow rounded-[1rem] flex items-center justify-center mb-10 text-primary border border-border group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-5 font-display tracking-tight">
                Höchste Standards
              </h3>
              <p className="text-medium font-light text-text-secondary leading-[1.8]">
                Wir geben uns nicht mit dem Durchschnitt zufrieden. Unsere
                Prozesse und Qualitätskontrollen sichern ein makelloses Ergebnis
                für jeden Auftrag.
              </p>
            </div>
            <div className="bg-surface p-6 sm:p-10 lg:p-12 rounded-[2rem] shadow-soft border border-border hover:shadow-card hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white shadow-inner-glow rounded-[1rem] flex items-center justify-center mb-10 text-trust-gold border border-border group-hover:scale-110 transition-transform duration-500">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-5 font-display tracking-tight">
                Persönlicher Service
              </h3>
              <p className="text-medium font-light text-text-secondary leading-[1.8]">
                Trotz Digitalisierung steht der Mensch im Mittelpunkt. Wir sind
                greifbar, hören zu und finden individuelle Lösungen für Ihre
                Anforderungen.
              </p>
            </div>
            <div className="bg-surface p-6 sm:p-10 lg:p-12 rounded-[2rem] shadow-soft border border-border hover:shadow-card hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white shadow-inner-glow rounded-[1rem] flex items-center justify-center mb-10 text-accent border border-border group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-5 font-display tracking-tight">
                Zuverlässigkeit
              </h3>
              <p className="text-medium font-light text-text-secondary leading-[1.8]">
                Ein Wort ist ein Wort. Unsere Kunden in Nordhessen schätzen
                unsere absolute Termintreue, Diskretion und transparente
                Kommunikation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-lg bg-surface border-y border-border overflow-hidden">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-5">
                Unser Team
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 font-display leading-[1.1]">
                Starke Mannschaft, starke Leistung
              </h3>
              <p className="text-large font-light text-text-secondary mb-12 leading-[1.8]">
                Unser 10-köpfiges Team ist der Motor von AKAN. Jedes Mitglied
                wird sorgfältig geschult und bringt Leidenschaft sowie
                Fachwissen mit, um Ihre Anforderungen täglich zu übertreffen.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-border shadow-soft group hover:shadow-card transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-surface shadow-inner-glow flex items-center justify-center text-trust-gold font-bold font-display text-2xl group-hover:scale-110 transition-transform">
                    10
                  </div>
                  <div>
                    <span className="block text-text-primary font-bold tracking-tight text-lg mb-1">
                      Motivierte Mitarbeiter
                    </span>
                    <span className="text-base font-light text-text-secondary">
                      Ihr festes Reinigungsteam
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-border shadow-soft group hover:shadow-card transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-surface shadow-inner-glow flex items-center justify-center text-accent font-bold font-display text-2xl group-hover:scale-110 transition-transform">
                    100%
                  </div>
                  <div>
                    <span className="block text-text-primary font-bold tracking-tight text-lg mb-1">
                      Einsatzbereitschaft
                    </span>
                    <span className="text-base font-light text-text-secondary">
                      Für makellose Ergebnisse
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-elevated group aspect-[16/9] border border-border/60">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <ImagePlaceholder
                  alt="Das geschulte AKAN Reinigungsteam im Außeneinsatz mit professioneller Ausrüstung in Nordhessen"
                  fill
                  originalSrc="/images/hero/akan-fensterreinigung-team-teleskopstange-aktion.webp"
                  className="object-cover transform group-hover:scale-[1.03] transition-transform duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-text-primary/95 via-text-primary/50 to-transparent p-10 z-20">
                  <p className="text-white font-bold text-2xl font-display drop-shadow-md tracking-tight">
                    Unser Team in Nordhessen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-lg bg-background relative isolate overflow-hidden">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-5">
                Lokal verankert
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 font-display leading-[1.1]">
                Verwurzelt in Nordhessen
              </h3>
              <p className="text-large font-light text-text-secondary mb-12 leading-[1.8]">
                Wir sind stolz darauf, unsere Region zu stärken. Von unserem
                Hauptsitz in Gudensberg aus bedienen wir Kunden im gesamten
                Umkreis mit kurzen Anfahrtswegen, schneller Reaktionszeit und
                maximaler Flexibilität.
              </p>
              <ul className="space-y-5 mb-14">
                <li className="flex items-center gap-5 p-5 bg-surface rounded-2xl border border-border shadow-soft">
                  <MapPin className="text-primary w-6 h-6 shrink-0" />
                  <span className="font-bold text-text-primary tracking-wide">
                    Gudensberg (Hauptsitz)
                  </span>
                </li>
                <li className="flex items-center gap-5 p-5 bg-surface rounded-2xl border border-border shadow-soft">
                  <MapPin className="text-trust-gold w-6 h-6 shrink-0" />
                  <span className="font-bold text-text-primary tracking-wide">
                    Kassel & Umgebung
                  </span>
                </li>
                <li className="flex items-center gap-5 p-5 bg-surface rounded-2xl border border-border shadow-soft">
                  <MapPin className="text-accent w-6 h-6 shrink-0" />
                  <span className="font-bold text-text-primary tracking-wide">
                    Fritzlar & Melsungen
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-xl font-bold transition-all shadow-elevated tracking-wide text-base"
              >
                Verfügbarkeit prüfen <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-border/60 shadow-elevated">
              <DynamicMap
                location={{ name: "Gudensberg", entfernung: "Hauptsitz" } as any}
                zoom={10}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-border">
        <div className="container-fluid text-center">
          <p className="text-text-secondary font-bold mb-10 uppercase tracking-[0.25em] text-mini">
            Unsere Partner & Zertifizierungen
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
              <ShieldCheck className="w-10 h-10" />
              <span className="font-bold text-2xl font-display tracking-tight">
                TÜV Nord
              </span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
              <Building2 className="w-10 h-10" />
              <span className="font-bold text-2xl font-display tracking-tight">
                IHK Hessen
              </span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
              <Leaf className="w-10 h-10" />
              <span className="font-bold text-2xl font-display tracking-tight">
                EcoClean
              </span>
            </div>
            <div className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors">
              <BadgeCheck className="w-10 h-10" />
              <span className="font-bold text-2xl font-display tracking-tight">
                ISO 9001
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
