import type { Metadata } from 'next';
import GalerieClient from '@/features/gallery/components/GalerieClient';

export const metadata: Metadata = {
  title: 'Referenzen & Galerie | Vorher-Nachher Beispiele | AKAN Dienstleistung',
  description: 'Überzeugen Sie sich von unserer Reinigungsqualität: Echte Vorher-Nachher-Vergleiche und Referenzobjekte aus Nordhessen von AKAN Dienstleistung.',
  alternates: {
    canonical: 'https://akan-dienstleistung.de/referenzen',
  },
  openGraph: {
    title: 'Referenzen & Galerie | AKAN Dienstleistung',
    description: 'Echte Vorher-Nachher-Ergebnisse und Referenzprojekte unserer Gebäudereinigung in Gudensberg, Kassel und ganz Nordhessen.',
    url: 'https://akan-dienstleistung.de/referenzen',
    siteName: 'AKAN Dienstleistung',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Referenzen & Galerie | AKAN Dienstleistung',
    description: 'Vorher-Nachher Vergleiche und Referenzobjekte professioneller Gebäudereinigung in Nordhessen.',
  },
};

export default function Galerie() {
  return <GalerieClient />;
}
