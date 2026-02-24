import type { Metadata } from 'next';

export const revalidate = 86400; // Global ISR Baseline (24 hours)

import { Montserrat, Open_Sans } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';
import Navbar from '@/features/navigation/components/Navbar';
import Footer from '@/features/footer/components/Footer';
import ScrollProgress from '@/shared/components/ScrollProgress';
import SocialProofToast from '@/shared/components/SocialProofToast';
import BackToTop from '@/shared/components/BackToTop';
import CursorTrail from '@/shared/components/CursorTrail';
import StickyCTA from '@/shared/components/StickyCTA';
import { WebVitals } from '@/shared/components/WebVitals';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akandienstleistung.de'),
  title: {
    default: 'AKAN Dienstleistung | Professionelle Reinigung in Gudensberg',
    template: '%s | AKAN Dienstleistung'
  },
  description: 'Unterhaltsreinigung, Fensterreinigung, Bauendreinigung und Industriereinigung mit 10 Jahren Erfahrung und höchstem Qualitätsanspruch in Gudensberg und Umgebung.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AKAN Dienstleistung | Professionelle Gebäudereinigung',
    description: 'Unterhaltsreinigung, Fensterreinigung und Bauendreinigung in Gudensberg und Umgebung. 10 Jahre Erfahrung.',
    url: 'https://akandienstleistung.de',
    siteName: 'AKAN Dienstleistung',
    locale: 'de_DE',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AKAN Dienstleistung",
  "image": "https://akan-dienstleistung.de/logo.png",
  "description": "Professionelle Gebäudereinigung in Gudensberg und Umgebung. Unterhaltsreinigung, Baureinigung, Fensterreinigung und Hausmeisterservice für Gewerbe und Privat.",
  "@id": "https://akan-dienstleistung.de",
  "url": "https://akan-dienstleistung.de",
  "telephone": "+4915234754386",
  "email": "info@akan-dienstleistung.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Odenbergstr 26",
    "addressLocality": "Gudensberg",
    "postalCode": "34281",
    "addressCountry": "DE",
    "addressRegion": "Hessen"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.1764,
    "longitude": 9.3562
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Gudensberg"
    },
    {
      "@type": "City",
      "name": "Kassel"
    },
    {
      "@type": "City",
      "name": "Fritzlar"
    },
    {
      "@type": "City",
      "name": "Baunatal"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Reinigungsdienstleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Unterhaltsreinigung"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bauendreinigung"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fensterreinigung"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hausmeisterservice"
        }
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-text-primary antialiased selection:bg-primary selection:text-white flex flex-col min-h-screen">
        <NuqsAdapter>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <WebVitals />
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
          <SocialProofToast />
          <BackToTop />
          <CursorTrail />
          <StickyCTA />
        </NuqsAdapter>
      </body>
    </html>
  );
}
