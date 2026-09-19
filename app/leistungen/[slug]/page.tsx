import { notFound } from 'next/navigation';
import { serviceDetails, getAllServiceSlugs } from '@/features/services/data/serviceDetails';
import ServiceDetailBlueprint from '@/features/services/components/ServiceDetailBlueprint';
import { generateServiceSchema } from '@/shared/utils/seo/SchemaGenerator';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = false; // SSG: fully static

export async function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const service = serviceDetails[slug];

    if (!service) {
        return {
            title: 'Leistung nicht gefunden | AKAN Dienstleistung',
            description: 'Die angefragte Leistung konnte nicht gefunden werden.'
        };
    }

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: {
            canonical: `https://akan-dienstleistung.de/leistungen/${slug}`,
        },
        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
            url: `https://akan-dienstleistung.de/leistungen/${slug}`,
            siteName: 'AKAN Dienstleistung',
            locale: 'de_DE',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: service.metaTitle,
            description: service.metaDescription,
        },
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = serviceDetails[slug];

    if (!service) {
        notFound();
    }

    const schemaOrgJSONLD = generateServiceSchema(service);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
            />

            <ServiceDetailBlueprint service={service} />
        </>
    );
}
