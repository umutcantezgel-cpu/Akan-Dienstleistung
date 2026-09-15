'use client';

import dynamic from 'next/dynamic';
import Script from 'next/script';
import HeroSection from '@/features/hero/components/HeroSection';

const PainPointsSection = dynamic(() => import('@/features/pain-points/components/PainPointsSection'));
const ServicesSection = dynamic(() => import('@/features/services/components/ServicesSection'));
const TargetGroupFunnels = dynamic(() => import('@/features/funnels/components/TargetGroupFunnels'));
const ProofSection = dynamic(() => import('@/features/trust-signals/components/ProofSection'));
const AboutSection = dynamic(() => import('@/features/about/components/AboutSection'));
const TrustSection = dynamic(() => import('@/features/trust-signals/components/TrustSection'));
const TeamSection = dynamic(() => import('@/features/team/components/TeamSection'));
const FaqSection = dynamic(() => import('@/features/faq/components/FaqSection'));
const HistorySection = dynamic(() => import('@/features/history/components/HistorySection'));
const CtaSection = dynamic(() => import('@/features/cta/components/CtaSection'));
const ContactForm = dynamic(() => import('@/features/contact-form/components/ContactForm'), { ssr: false });
const TestimonialCarousel = dynamic(() => import('@/features/testimonials/components/TestimonialCarousel'));
const StatsRing = dynamic(() => import('@/features/stats/components/StatsRing'), { ssr: false });
const BeforeAfterGallery = dynamic(() => import('@/features/before-after/components/BeforeAfterGallery'), { ssr: false });
const Timeline = dynamic(() => import('@/features/timeline/components/Timeline'));
import { testimonials, timeline } from '@/config/site';
import { FeatureErrorBoundary } from '@/features/error-handling/components/ErrorBoundaries';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://akan-dienstleistung.de/#business',
        'name': 'AKAN Dienstleistung',
        'image': 'https://akan-dienstleistung.de/images/og-image.jpg',
        'description': 'Premium Gebäudereinigung in Gudensberg, Kassel und Nordhessen. Unterhaltsreinigung, Bauendreinigung und Glasreinigung.',
        'url': 'https://akan-dienstleistung.de',
        'telephone': '+4915234754386',
        'email': 'info@akan-dienstleistung.de',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Odenbergstraße 26',
          'addressLocality': 'Gudensberg',
          'postalCode': '34281',
          'addressCountry': 'DE'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '51.1718',
          'longitude': '9.3582'
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
        '@id': 'https://akan-dienstleistung.de/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Startseite',
            'item': 'https://akan-dienstleistung.de'
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
        <ProofSection galleryComponent={<BeforeAfterGallery />} />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Über Uns">
        <AboutSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Trust & Stats">
        <TrustSection
          statsComponents={[
            <StatsRing key="s1" value={98} label="Kundenbindung" color="#9B1C2E" />,
            <StatsRing key="s2" value={200} maxValue={200} suffix="+" label="Betreute Objekte" color="#E85D75" />,
            <StatsRing key="s3" value={100} label="Terminzuverlässigkeit" color="#FFD700" />,
            <StatsRing key="s4" value={10} maxValue={10} suffix="+" label="Jahre Erfahrung" color="#22C55E" />
          ]}
          testimonialsComponent={<TestimonialCarousel testimonials={testimonials} />}
        />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="FAQ">
        <FaqSection />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Historie">
        <HistorySection timelineComponent={<Timeline events={timeline} />} />
      </FeatureErrorBoundary>
      <FeatureErrorBoundary featureName="Kontakt CTA">
        <CtaSection contactForm={<ContactForm />} />
      </FeatureErrorBoundary>
    </>
  );
}
