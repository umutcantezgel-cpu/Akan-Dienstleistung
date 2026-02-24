import ImagePlaceholder from '@/shared/components/ImagePlaceholder';
import Link from 'next/link';
import { Clock, CheckCircle2, ArrowRight, Trash2, Sun, ShieldCheck, Phone, Mail, Building2, Sparkles, HardHat, Factory } from 'lucide-react';
import KineticHeading from '@/shared/components/KineticHeading';

export const metadata = {
  title: 'Reinigungsdienstleistungen in Nordhessen | AKAN Gebäudereinigung',
  description: 'Ihr Experte für Unterhaltsreinigung, Bauendreinigung, Glasreinigung und Industriereinigung in Gudensberg, Kassel und Umgebung. Maßgeschneiderte Konzepte.',
  keywords: ['Unterhaltsreinigung Kassel', 'Bauendreinigung Nordhessen', 'Fensterreinigung Gudensberg', 'Industriereinigung', 'Gebäudereinigung Leistungen', 'AKAN Dienstleistung'],
};


export default function Services() {
  return (
    <>
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-trust-gold/10 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-surface shadow-inner-glow text-primary text-mini font-bold tracking-[0.25em] uppercase mb-8 border border-primary/10">
            PREMIUM REINIGUNGSSERVICE
          </span>
          <KineticHeading as="h1" className="text-h1 font-bold text-text-primary mb-8 leading-[1.05] tracking-tighter font-display drop-shadow-sm">
            Unsere Leistungen <span className="text-primary">im Detail</span>
          </KineticHeading>
          <p className="text-large md:text-xl font-light text-text-secondary max-w-3xl mx-auto mb-10 leading-[1.8]">
            Professionelle Standards, geschultes Personal und flexible Intervalle. Wir sorgen für Sauberkeit, auf die Sie sich verlassen können.
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 lg:top-[72px] z-40 bg-white/70 backdrop-blur-xl border-b border-border shadow-soft py-4">
        <div className="container-fluid px-0 overflow-x-auto no-scrollbar">
          <ul className="flex space-x-8 text-tiny font-bold text-text-secondary uppercase tracking-widest whitespace-nowrap">
            <li><a href="#unterhaltsreinigung" className="hover:text-primary transition-colors">Unterhaltsreinigung</a></li>
            <li><a href="#glasreinigung" className="hover:text-primary transition-colors">Glas- & Fassadenreinigung</a></li>
            <li><a href="#bauendreinigung" className="hover:text-primary transition-colors">Bauendreinigung</a></li>
            <li><a href="#industriereinigung" className="hover:text-primary transition-colors">Industriereinigung</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-section-lg space-y-32">

        {/* Unterhaltsreinigung */}
        <section id="unterhaltsreinigung" className="scroll-mt-48">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-[1rem] bg-surface shadow-inner-glow flex items-center justify-center text-primary">
                  <Building2 className="w-8 h-8" />
                </div>
                <KineticHeading as="h2" className="text-h2 font-bold text-text-primary font-display leading-tight">Unterhaltsreinigung</KineticHeading>
              </div>
              <p className="text-large font-light text-text-secondary mb-10 leading-[1.8]">
                Der erste Eindruck zählt. Wir sorgen für dauerhaft gepflegte Büros, Praxen und Kanzleien. Unsere geschulten Teams arbeiten diskret, gründlich und nach festen Checklisten.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-surface p-8 rounded-2xl border border-border shadow-soft group hover:shadow-card transition-shadow">
                  <Trash2 className="w-6 h-6 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="font-bold text-text-primary mb-2 tracking-tight">Tägliche Pflege</h3>
                  <p className="text-sm font-light text-text-secondary leading-relaxed">Müllentsorgung, Oberflächenreinigung und Sanitärpflege.</p>
                </div>
                <div className="bg-surface p-8 rounded-2xl border border-border shadow-soft group hover:shadow-card transition-shadow">
                  <Clock className="w-6 h-6 text-trust-gold mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="font-bold text-text-primary mb-2 tracking-tight">Flexible Zeiten</h3>
                  <p className="text-sm font-light text-text-secondary leading-relaxed">Reinigung vor oder nach Ihren Geschäftszeiten.</p>
                </div>
              </div>
              <ul className="space-y-4 mb-12">
                {['Staubwischen und Saugen aller Bodenbeläge', 'Feuchtwischen von Hartböden', 'Reinigung und Desinfektion der Sanitäranlagen', 'Auffüllen von Verbrauchsmaterialien (Seife, Papier)'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-4 shrink-0 mt-0.5" />
                    <span className="text-text-secondary font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-primary-hover text-white text-base tracking-wide font-bold py-4 px-10 rounded-xl transition-all shadow-elevated">
                Angebot anfordern <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-elevated relative border border-border/60">
                <ImagePlaceholder originalSrc="https://picsum.photos/800/600?random=10" alt="Unterhaltsreinigung" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 text-text-primary/10 mix-blend-overlay"></div>
                <div className="absolute bottom-10 left-10 text-white z-10">
                  <p className="font-bold text-2xl font-display drop-shadow-md">Büros & Praxen</p>
                  <p className="text-tiny uppercase tracking-wider font-semibold opacity-90 drop-shadow-md mt-1">Repräsentative Sauberkeit</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-card border border-border hidden md:block z-20">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-[1rem] bg-surface flex items-center justify-center text-trust-gold shadow-inner-glow">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary tracking-tight">100% Diskretion</p>
                    <p className="text-sm tracking-wide text-text-secondary">Vertrauensvolles Personal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Glasreinigung */}
        <section id="glasreinigung" className="scroll-mt-48">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-elevated relative border border-border/60">
                <ImagePlaceholder originalSrc="https://picsum.photos/800/600?random=11" alt="Glasreinigung" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 text-text-primary/10 mix-blend-overlay"></div>
                <div className="absolute bottom-10 left-10 text-white z-10">
                  <p className="font-bold text-2xl font-display drop-shadow-md">Streifenfreier Glanz</p>
                  <p className="text-tiny uppercase tracking-wider font-semibold opacity-90 drop-shadow-md mt-1">Für klare Sicht</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-[1rem] bg-surface shadow-inner-glow flex items-center justify-center text-primary">
                  <Sun className="w-8 h-8" />
                </div>
                <KineticHeading as="h2" className="text-h2 font-bold text-text-primary font-display leading-tight">Glas- & Fassadenreinigung</KineticHeading>
              </div>
              <p className="text-large font-light text-text-secondary mb-10 leading-[1.8]">
                Ihre Fenster sind die Visitenkarte Ihres Gebäudes. Wir sorgen für streifenfreien Glanz bei Fenstern, Schaufenstern, Glasfassaden und Wintergärten – auch in schwer zugänglichen Höhen.
              </p>
              <ul className="space-y-4 mb-12">
                {['Reinigung von Fenstern inkl. Rahmen und Falz', 'Schaufensterreinigung für den Einzelhandel', 'Reinigung von Glasdächern und Wintergärten', 'Einsatz von Osmosetechnik für rückstandsfreien Glanz'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-4 shrink-0 mt-0.5" />
                    <span className="text-text-secondary font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-surface p-8 rounded-2xl border border-border mb-12 flex items-start gap-5 shadow-soft hover:shadow-card transition-shadow">
                <Sparkles className="w-8 h-8 text-trust-gold shrink-0 transition-transform hover:scale-110" />
                <div>
                  <h4 className="font-bold text-text-primary mb-2 tracking-tight">Osmosetechnik</h4>
                  <p className="text-sm font-light text-text-secondary leading-relaxed">Wir nutzen entmineralisiertes Wasser für eine umweltschonende und langanhaltende Reinigung ohne Abziehen.</p>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center bg-white border border-border text-primary hover:bg-surface text-base tracking-wide font-bold py-4 px-10 rounded-xl transition-all shadow-soft hover:shadow-md">
                Beratungstermin vereinbaren
              </Link>
            </div>
          </div>
        </section>

        {/* Bauendreinigung */}
        <section id="bauendreinigung" className="scroll-mt-48">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-[1rem] bg-surface shadow-inner-glow flex items-center justify-center text-trust-gold">
                  <HardHat className="w-8 h-8" />
                </div>
                <KineticHeading as="h2" className="text-h2 font-bold text-text-primary font-display leading-tight">Bauendreinigung</KineticHeading>
              </div>
              <p className="text-large font-light text-text-secondary mb-10 leading-[1.8]">
                Nach dem Bau oder der Sanierung herrscht Chaos. Wir beseitigen Handwerkerschmutz, Baustaub und Farbspritzer, damit Ihre Immobilie pünktlich und besenrein übergeben werden kann.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-surface p-8 rounded-2xl border border-border shadow-soft group hover:shadow-card transition-shadow">
                  <h3 className="font-bold text-text-primary mb-2 tracking-tight">Baugrob- reinigung</h3>
                  <p className="text-sm font-light text-text-secondary leading-relaxed">Entfernung von Bauschutt und Verpackungsmaterial während der Bauphase.</p>
                </div>
                <div className="bg-surface p-8 rounded-2xl border border-border shadow-soft group hover:shadow-card transition-shadow">
                  <h3 className="font-bold text-text-primary mb-2 tracking-tight">Baufein- reinigung</h3>
                  <p className="text-sm font-light text-text-secondary leading-relaxed">Bezugsfertige Reinigung aller Oberflächen, Böden und Sanitäranlagen.</p>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-primary-hover text-white text-base tracking-wide font-bold py-4 px-10 rounded-xl transition-all shadow-elevated">
                Angebot anfordern <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-elevated relative border border-border/60">
                <ImagePlaceholder originalSrc="https://picsum.photos/800/600?random=12" alt="Bauendreinigung" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 text-text-primary/10 mix-blend-overlay"></div>
                <div className="absolute bottom-10 left-10 text-white z-10">
                  <p className="font-bold text-2xl font-display drop-shadow-md">Bezugsfertig</p>
                  <p className="text-tiny uppercase tracking-wider font-semibold opacity-90 drop-shadow-md mt-1">Pünktliche Übergabe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industriereinigung */}
        <section id="industriereinigung" className="scroll-mt-48">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-elevated relative border border-border/60">
                <ImagePlaceholder originalSrc="https://picsum.photos/800/600?random=13" alt="Industriereinigung" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 text-text-primary/10 mix-blend-overlay"></div>
                <div className="absolute bottom-10 left-10 text-white z-10">
                  <p className="font-bold text-2xl font-display drop-shadow-md">Produktionshallen</p>
                  <p className="text-tiny uppercase tracking-wider font-semibold opacity-90 drop-shadow-md mt-1">Sicherheit & Hygiene</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-[1rem] bg-text-primary shadow-inner-glow flex items-center justify-center text-white">
                  <Factory className="w-8 h-8" />
                </div>
                <KineticHeading as="h2" className="text-h2 font-bold text-text-primary font-display leading-tight">Industriereinigung</KineticHeading>
              </div>
              <p className="text-large font-light text-text-secondary mb-10 leading-[1.8]">
                Spezielle Anforderungen erfordern spezielles Know-how. Wir reinigen Produktionshallen, Maschinen und Lagerflächen unter Einhaltung strengster Sicherheits- und Hygienevorschriften.
              </p>
              <ul className="space-y-4 mb-12">
                {['Reinigung von Produktionsanlagen und Maschinen', 'Hallenbodenreinigung (auch stark verschmutzt)', 'Reinigung von Sozialräumen und Waschräumen', 'Fachgerechte Entsorgung von Industrieabfällen'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-text-primary mr-4 shrink-0 mt-0.5" />
                    <span className="text-text-secondary font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center bg-text-primary hover:bg-black text-white text-base tracking-wide font-bold py-4 px-10 rounded-xl transition-all shadow-elevated">
                Beratungstermin vereinbaren
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* CTA Section */}
      <section className="bg-background py-section-lg border-t border-border relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <KineticHeading as="h2" className="text-h2 font-bold text-text-primary mb-8 font-display leading-tight">Nicht sicher, was Sie benötigen?</KineticHeading>
          <p className="text-large font-light text-text-secondary max-w-2xl mx-auto mb-12 leading-[1.8]">
            Jedes Gebäude ist anders. Wir beraten Sie gerne vor Ort und erstellen ein individuelles Reinigungskonzept, das genau auf Ihre Anforderungen und Ihr Budget zugeschnitten ist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="tel:+4956031234567" className="flex items-center justify-center gap-3 bg-white border border-border hover:border-primary/50 text-text-primary hover:text-primary tracking-wide text-base font-bold py-4 px-10 rounded-xl transition-all shadow-soft group">
              <Phone className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              05603 123 45 67
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white tracking-wide text-base font-bold py-4 px-10 rounded-xl transition-all shadow-elevated hover:shadow-glow group">
              <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              E-Mail schreiben
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
