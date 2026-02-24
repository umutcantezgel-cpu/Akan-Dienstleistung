'use client';

import dynamic from 'next/dynamic';
import Script from 'next/script';
import HeroSection from '@/features/hero/components/HeroSection';

const PainPointsSection = dynamic(() => import('@/features/pain-points/components/PainPointsSection'));
const ServicesSection = dynamic(() => import('@/features/services/components/ServicesSection'));
const TargetGroupFunnels = dynamic(() => import('@/features/funnels/components/TargetGroupFunnels'));
const ProofSection = dynamic(() => import('@/features/trust-signals/components/ProofSection'));
const AboutSection = dynamic(() => import('@/features/about/components/AboutSection'));
const StatsSection = dynamic(() => import('@/features/stats/components/StatsSection'));
const TeamSection = dynamic(() => import('@/features/team/components/TeamSection'));
const TestimonialsSection = dynamic(() => import('@/features/testimonials/components/TestimonialsSection'));
const FaqSection = dynamic(() => import('@/features/faq/components/FaqSection'));
const HistorySection = dynamic(() => import('@/features/history/components/HistorySection'));
const CtaSection = dynamic(() => import('@/features/cta/components/CtaSection'));
import { FeatureErrorBoundary } from '@/features/error-handling/components/ErrorBoundaries';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://akandienstleistung.de/#business',
        'name': 'AKAN Dienstleistung',
        'image': 'https://akandienstleistung.de/images/og-image.jpg',
        'description': 'Premium Gebäudereinigung in Gudensberg, Kassel und Nordhessen. Unterhaltsreinigung, Bauendreinigung und Glasreinigung.',
        'url': 'https://akandienstleistung.de',
        'telephone': '+4915234754386',
        'email': 'info@akandienstleistung.de',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Kasseler Str. 27',
          'addressLocality': 'Gudensberg',
          'postalCode': '34281',
          'addressCountry': 'DE'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '51.1764',
          'longitude': '9.3622'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '08:00',
            'closes': '18:00'
          }
        ],
        'priceRange': '$$',
        'areaServed': [
          { '@type': 'City', 'name': 'Gudensberg' },
          { '@type': 'City', 'name': 'Kassel' },
          { '@type': 'City', 'name': 'Baunatal' },
          { '@type': 'City', 'name': 'Fritzlar' }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://akandienstleistung.de/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Startseite',
            'item': 'https://akandienstleistung.de'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Bieten Sie auch am Wochenende Reinigungsdienste an?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, nach Absprache bieten wir unsere Dienstleistungen auch am Wochenende an, um Ihren Betriebsablauf so wenig wie möglich zu stören.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Sind Reinigungsmittel im Preis inbegriffen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, wir bringen alle benötigten professionellen und umweltfreundlichen Reinigungsmittel selbst mit.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ═══════════════════════════════════════════ */}
      {/* TITANIUM ARCHITECTURE — Modular Homepage      */}
      {/* ═══════════════════════════════════════════ */}
      <FeatureErrorBoundary featureName="Hero">
        <HeroSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Pain Points">
        <PainPointsSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Services">
        <ServicesSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Zielgruppen-Trichter">
        <TargetGroupFunnels />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Trust/Logos">
        <ProofSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Über Uns">
        <AboutSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Statistiken">
        <StatsSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Team">
        <TeamSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Testimonials">
        <TestimonialsSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="FAQ">
        <FaqSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Historie">
        <HistorySection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Kontakt CTA">
        <CtaSection />
      </FeatureErrorBoundary>
    </>
  );
}
