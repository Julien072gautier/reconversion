import { Metadata } from 'next';

interface AdvancedMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateAdvancedMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: AdvancedMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image ? `${baseUrl}${image}` : `${baseUrl}/og-image.jpg`;

  const metadata: Metadata = {
    title,
    description,
    keywords: [
      'reconversion professionnelle',
      'CPF',
      'formation',
      'compétences',
      'parcours professionnel',
      'dossier CPF',
      'blocs de compétences',
      ...keywords,
    ],
    authors: author ? [{ name: author }] : [{ name: 'Reconversion' }],
    creator: 'Reconversion',
    publisher: 'Reconversion',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      locale: 'fr_FR',
      url: fullUrl,
      siteName: 'Reconversion',
      title,
      description,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
      creator: '@reconversion',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };

  return metadata;
}

