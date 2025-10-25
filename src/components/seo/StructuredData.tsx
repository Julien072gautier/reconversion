import { JsonLd } from './JsonLd';

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Reconversion',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr'}/logo.png`,
    description: 'Plateforme de reconversion professionnelle - Identifiez des blocs de compétences éligibles CPF',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'Paris',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33123456789',
      contactType: 'customer service',
      availableLanguage: 'French',
    },
    sameAs: [
      'https://www.linkedin.com/company/reconversion',
      'https://twitter.com/reconversion',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Reconversion',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr',
    description: 'Plateforme de reconversion professionnelle',
    publisher: {
      '@type': 'Organization',
      name: 'Reconversion',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr'}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Catalogue',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr'}/blocs`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Parcours',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr'}/parcours`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Dossier',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr'}/dossier`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}

