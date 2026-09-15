import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#9B1C2E",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const revalidate = 86400; // Global ISR Baseline (24 hours)

import { Outfit, Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

// ── Critical Path (SSR) ────────────────────────────────────
import Navbar from "@/features/navigation/components/Navbar";
import Footer from "@/features/footer/components/Footer";
import ScrollProgress from "@/shared/components/ScrollProgress";
import { WebVitals } from "@/shared/components/WebVitals";
import SkipLink from "@/shared/components/SkipLink";

// ── Client-Only Visual Effects (Lazy-loaded) ───────────────
import ClientEffects from "@/shared/components/ClientEffects";
import ThemeInjector from "@/features/singularity/components/ThemeInjector";
import ConsentBanner from "@/features/consent/components/ConsentBanner";
import PrivacyTrigger from "@/features/consent/components/PrivacyTrigger";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL("https://akan-dienstleistung.de"),
  title: {
    default:
      "Gebäudereinigung Nordhessen – AKAN Dienstleistung – Professionell & Zuverlässig",
    template: "%s | AKAN Dienstleistung",
  },
  description:
    "Professionelle Gebäudereinigung in Nordhessen. 10+ Jahre Erfahrung, 200+ zufriedene Kunden. Unterhaltsreinigung ✓ Fensterreinigung ✓ Bauendreinigung ✓ Kostenlose Erstberatung!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gebäudereinigung Nordhessen – AKAN Dienstleistung",
    description:
      "Professionelle Gebäudereinigung in Nordhessen. 10+ Jahre Erfahrung, 200+ zufriedene Kunden. Kostenlose Erstberatung anfordern!",
    url: "https://akan-dienstleistung.de",
    siteName: "AKAN Dienstleistung",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebäudereinigung Nordhessen – AKAN Dienstleistung",
    description:
      "Professionelle Gebäudereinigung in Nordhessen. 10+ Jahre Erfahrung, 200+ zufriedene Kunden. Kostenlose Erstberatung!",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AKAN Dienstleistung",
  image: "https://akan-dienstleistung.de/logo.png",
  description:
    "Professionelle Gebäudereinigung in Gudensberg und Umgebung. Unterhaltsreinigung, Baureinigung, Fensterreinigung und Hausmeisterservice für Gewerbe und Privat.",
  "@id": "https://akan-dienstleistung.de",
  url: "https://akan-dienstleistung.de",
  telephone: "+4915234754386",
  email: "info@akan-dienstleistung.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Odenbergstraße 26",
    addressLocality: "Gudensberg",
    postalCode: "34281",
    addressCountry: "DE",
    addressRegion: "Hessen",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.1764,
    longitude: 9.3562,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 51.1764,
      longitude: 9.3562,
    },
    geoRadius: "50000",
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "128",
    bestRating: "5",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+4915234754386",
    contactType: "customer service",
    availableLanguage: ["German", "Turkish"],
    areaServed: "DE",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Reinigungsdienstleistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Unterhaltsreinigung",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bauendreinigung",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fensterreinigung",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industriereinigung",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sonderreinigung",
        },
      },
    ],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: "https://akan-dienstleistung.de",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${outfit.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister();
                  }
                });
                if (window.caches) {
                  caches.keys().then(function(names) {
                    for (let name of names) caches.delete(name);
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body
        className="font-sans bg-theme-bg text-theme-text transition-colors duration-[800ms] antialiased leading-[1.6] selection:bg-theme-primary selection:text-white flex flex-col min-h-screen relative"
        suppressHydrationWarning
      >
        <ThemeInjector />
        <ClientEffects />
        <NuqsAdapter>
          <SkipLink />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
          />
          <WebVitals />
          <ScrollProgress />
          <Navbar />
          <main
            id="main-content"
            className="flex-grow pt-24 relative z-10"
            tabIndex={-1}
          >
            {children}
          </main>
          <Footer />
          <ConsentBanner />
          <PrivacyTrigger />
        </NuqsAdapter>
      </body>
    </html>
  );
}
