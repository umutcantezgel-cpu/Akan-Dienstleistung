import type { LocationDetail } from '@/features/locations/data/locationData';
import { serviceDetails } from '@/features/services/data/serviceDetails';
import type { ServiceDetail } from '@/features/services/data/serviceDetails';

const SITE_URL = 'https://akandienstleistung.de';

/**
 * Generates a LocalBusiness JSON-LD schema for a specific city.
 */
export function generateLocalBusinessSchema(location: LocationDetail) {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/standorte/${location.slug}#business`,
        name: 'AKAN Dienstleistung',
        image: `${SITE_URL}/logo.png`,
        description: location.localContent.introText,
        url: `${SITE_URL}/standorte/${location.slug}`,
        telephone: '+4915234754386',
        email: 'info@akan-dienstleistung.de',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Breslauer Str. 50',
            addressLocality: 'Gudensberg',
            postalCode: '34281',
            addressCountry: 'DE',
            addressRegion: 'Hessen',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: location.geoCoords.lat,
            longitude: location.geoCoords.lng,
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: location.geoCoords.lat,
                longitude: location.geoCoords.lng,
            },
            geoRadius: '25000', // 25 km Einsatzradius
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '18:00',
        },
        priceRange: '€€',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Reinigungsdienstleistungen',
            itemListElement: Object.values(serviceDetails).map((service, i) => ({
                '@type': 'Offer',
                '@id': `${SITE_URL}/leistungen/${service.slug}#offer`,
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                },
            })),
        },
    };
}

/**
 * Generates a Service JSON-LD schema for a specific service, optionally localized.
 */
export function generateServiceSchema(service: ServiceDetail, location?: LocationDetail) {
    const areaServed = location
        ? { '@type': 'City' as const, name: location.name }
        : [
            { '@type': 'City' as const, name: 'Gudensberg' },
            { '@type': 'City' as const, name: 'Kassel' },
            { '@type': 'City' as const, name: 'Fritzlar' },
            { '@type': 'City' as const, name: 'Baunatal' },
        ];

    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}/leistungen/${service.slug}#service`,
        name: service.title,
        description: service.description,
        url: `${SITE_URL}/leistungen/${service.slug}`,
        provider: {
            '@type': 'LocalBusiness',
            name: 'AKAN Dienstleistung',
            url: SITE_URL,
        },
        areaServed,
        serviceType: service.title,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: service.title,
            itemListElement: service.features.map((feature, i) => ({
                '@type': 'Offer',
                '@id': `${SITE_URL}/leistungen/${service.slug}#feature-${i}`,
                itemOffered: {
                    '@type': 'Service',
                    name: feature,
                },
            })),
        },
    };
}

/**
 * Generates a BreadcrumbList JSON-LD schema.
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };
}
