import ImagePlaceholder from '@/shared/components/ImagePlaceholder';
import Link from 'next/link';
import { History, Lightbulb, Settings, ShieldCheck, Handshake, Shield, MapPin, Award, Building2, Leaf, BadgeCheck } from 'lucide-react';

export const metadata = {
  title: 'Über Uns | AKAN Dienstleistung',
  description: 'Erfahren Sie mehr über AKAN Dienstleistung, unsere Werte, unser Team und unsere Erfahrung in der professionellen Gebäudereinigung.',
};


export default function About() {
  return (
    <>
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background-rose to-transparent pointer-events-none"></div>
        <div className="container-fluid relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Unsere Geschichte
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary dark:text-white mb-6 leading-tight">
                Vom Traum zur <span className="text-accent-coral">digitalen Exzellenz</span>
              </h1>
              <div className="prose prose-lg text-slate-600 dark:text-slate-300 mb-8">
                <p className="mb-4">
                  Im Jahr 2024 wurde AKAN Dienstleistung mit einer klaren Vision: Den Dienstleistungssektor in Nordhessen nicht nur zu bedienen, sondern durch digitale Innovation neu zu definieren.
                </p>
                <p>
                  Was als Traum begann, fundiert auf solidem Handwerk und Erfahrung. Zeynep bringt über <strong>10 Jahre Branchenexpertise</strong> in unser Familienunternehmen ein. Diese Dekade an Erfahrung ist das Fundament, auf dem wir modernste Prozesse und echte Kundenorientierung aufbauen. Wir verbinden traditionelle Werte mit der Geschwindigkeit und Präzision der digitalen Welt.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#team" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded text-white bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-primary/25">
                  Unser Team kennenlernen
                </a>
                <a href="#values" className="inline-flex justify-center items-center px-6 py-3 border border-slate-200 text-base font-medium rounded text-slate-700 bg-white hover:bg-background-rose transition-all">
                  Unsere Werte
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl transform rotate-3"></div>
              <ImagePlaceholder originalSrc="https://picsum.photos/800/600?random=5" alt="Office" width={800} height={600} className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3] transform transition hover:scale-[1.02] duration-500" />
              <div className="absolute -bottom-6 -left-6 bg-background-rose p-6 rounded-xl shadow-xl border border-white max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <History className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Erfahrung</p>
                    <p className="text-xl font-bold text-primary">Über 10 Jahre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white relative">
        <div className="container-fluid">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">Das Herz von AKAN</h2>
            <p className="text-lg text-slate-600">
              Wir sind mehr als ein Unternehmen – wir sind eine Familie mit einer gemeinsamen Mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative bg-background-rose rounded-xl overflow-hidden border border-slate-100 hover:border-primary/30 transition-colors duration-300 shadow-sm">
              <div className="aspect-[16/9] overflow-hidden relative">
                <ImagePlaceholder originalSrc="https://picsum.photos/800/450?random=6" alt="Cemal Akan" fill className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Cemal Akan</h3>
                    <p className="text-accent-coral font-medium">Gründer & Visionär</p>
                  </div>
                  <div className="bg-white p-2 rounded-full text-primary shadow-sm">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-slate-700 mb-6 italic">
                  &quot;Mein Ziel war es, eine Struktur zu schaffen, in der Vertrauen kein leeres Wort ist, sondern das Ergebnis täglicher, harter Arbeit.&quot;
                </p>
                <div className="border-t border-slate-200 pt-6">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Fokus</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-white rounded border border-slate-200 text-xs font-medium text-slate-600">Strategie</span>
                    <span className="px-3 py-1 bg-white rounded border border-slate-200 text-xs font-medium text-slate-600">Kundenbeziehungen</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative bg-background-rose rounded-xl overflow-hidden border border-slate-100 hover:border-primary/30 transition-colors duration-300 shadow-sm">
              <div className="aspect-[16/9] overflow-hidden relative">
                <ImagePlaceholder originalSrc="https://picsum.photos/800/450?random=7" alt="Zeynep Akan" fill className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Zeynep Akan</h3>
                    <p className="text-accent-coral font-medium">Operations Lead</p>
                  </div>
                  <div className="bg-white p-2 rounded-full text-primary shadow-sm">
                    <Settings className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-slate-700 mb-6 italic">
                  &quot;Nach 10 Jahren in der Branche weiß ich: Exzellenz steckt im Detail. Wir sorgen dafür, dass jeder Handgriff sitzt.&quot;
                </p>
                <div className="border-t border-slate-200 pt-6">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Fokus</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-white rounded border border-slate-200 text-xs font-medium text-slate-600">Qualitätsmanagement</span>
                    <span className="px-3 py-1 bg-white rounded border border-slate-200 text-xs font-medium text-slate-600">Teamführung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-20 bg-slate-50">
        <div className="container-fluid">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Unsere Werte</h2>
            <p className="mt-4 text-slate-600">Das Fundament unserer täglichen Arbeit</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-background-rose rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Höchste Standards</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir geben uns nicht mit dem Durchschnitt zufrieden. Unsere digitalen Prozesse sichern eine gleichbleibend hohe Qualität für jeden Auftrag.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-background-rose rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Persönlicher Service</h3>
              <p className="text-slate-600 leading-relaxed">
                Trotz Digitalisierung steht der Mensch im Mittelpunkt. Wir sind greifbar, hören zu und finden individuelle Lösungen für Sie.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-background-rose rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Zuverlässigkeit</h3>
              <p className="text-slate-600 leading-relaxed">
                Ein Wort ist ein Wort. Unsere Kunden in Nordhessen schätzen unsere Termintreue und transparente Kommunikation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-primary mb-6">Starke Mannschaft, starke Leistung</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Unser 10-köpfiges Team ist der Motor von AKAN. Jedes Mitglied bringt Leidenschaft und Fachwissen mit, um Ihre Anforderungen zu übertreffen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-background-rose flex items-center justify-center text-primary font-bold">10+</div>
                  <span className="text-slate-700 font-medium">Motivierte Mitarbeiter</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-background-rose flex items-center justify-center text-primary font-bold">100%</div>
                  <span className="text-slate-700 font-medium">Einsatzbereitschaft</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[16/9]">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <ImagePlaceholder originalSrc="https://picsum.photos/1200/800?random=8" alt="Team" fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 z-20">
                  <p className="text-white font-medium text-lg">Unser Team in Nordhessen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-100 text-slate-900 relative isolate overflow-hidden">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Verwurzelt in Nordhessen</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Wir sind stolz darauf, unsere Region zu stärken. Von unserem Hauptsitz aus bedienen wir Kunden im Dreieck Kassel, Gudensberg und Fritzlar mit kurzen Anfahrtswegen und maximaler Flexibilität.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <MapPin className="text-primary w-6 h-6" />
                  <span className="text-lg text-slate-700">Gudensberg (Hauptsitz)</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-primary w-6 h-6" />
                  <span className="text-lg text-slate-700">Kassel (Service-Hub)</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-primary w-6 h-6" />
                  <span className="text-lg text-slate-700">Fritzlar (Service-Hub)</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Verfügbarkeit prüfen
              </Link>
            </div>
            <div className="relative h-[400px] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
              <ImagePlaceholder originalSrc="https://picsum.photos/800/800?random=9" alt="Map" fill className="object-cover grayscale opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container-fluid text-center">
          <p className="text-slate-400 font-medium mb-8 uppercase tracking-widest text-sm">Unsere Partner & Zertifizierungen</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-slate-800">
              <ShieldCheck className="w-10 h-10" />
              <span className="font-bold text-xl">TÜV Nord</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <Building2 className="w-10 h-10" />
              <span className="font-bold text-xl">IHK Hessen</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <Leaf className="w-10 h-10" />
              <span className="font-bold text-xl">EcoClean</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <BadgeCheck className="w-10 h-10" />
              <span className="font-bold text-xl">ISO 9001</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
