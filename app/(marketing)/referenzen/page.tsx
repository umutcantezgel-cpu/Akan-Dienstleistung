import type { Metadata } from 'next';
import GalerieClient from '@/features/gallery/components/GalerieClient';

export const metadata: Metadata = {
  title: 'Referenzen & Galerie | Professionelle Gebäudereinigung Nordhessen',
  description: 'Überzeugen Sie sich von unserer Qualität. Vorher-Nachher Beispiele und Referenzbilder aus der Unterhaltsreinigung, Baureinigung und Fensterreinigung.',
  keywords: ['Reinigungsfirma Referenzen', 'Vorher Nachher Reinigung', 'Gebäudereinigung Bilder', 'AKAN Dienstleistung Erfahrung'],
};

export default function Galerie() {
  return <GalerieClient />;
}
