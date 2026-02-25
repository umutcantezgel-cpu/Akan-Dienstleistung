import { notFound } from 'next/navigation';
import { locationData, getAllLocationSlugs } from '@/features/locations/data/locationData';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/shared/utils/seo/SchemaGenerator';

import StandortTemplate from '@/features/locations/components/StandortTemplate';

interface PageProps {
    params: Promise<{
        stadt: string;
    }>;
}

// ISR configuration for local SEO pages
export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
    return getAllLocationSlugs().map((stadt) => ({
        stadt,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { stadt } = await params;
    const location = locationData[stadt];

    if (!location) {
        return {
            title: 'Standort nicht gefunden | AKAN Dienstleistung',
            description: 'Der angefragte Standort konnte nicht gefunden werden.'
        };
    }

    return {
        title: location.metaTitle,
        description: location.metaDescription,
        alternates: {
            canonical: `/standorte/${stadt}`,
        },
        openGraph: {
            title: location.metaTitle,
            description: location.metaDescription,
            url: `https://akan-dienstleistung.de/standorte/${stadt}`,
            siteName: 'AKAN Dienstleistung',
            locale: 'de_DE',
            type: 'website',
        },
    };
}

export default async function StandortDetailPage({ params }: PageProps) {
    const { stadt } = await params;
    const location = locationData[stadt];

    if (!location) {
        notFound();
    }

    const localBusinessSchema = generateLocalBusinessSchema(location);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Startseite', url: '/' },
        { name: 'Standorte', url: '/standorte' }, // Placeholder for future index
        { name: location.name, url: `/standorte/${location.slug}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <StandortTemplate location={location} />
        </>
    );
}
