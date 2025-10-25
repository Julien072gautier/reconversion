import { Metadata } from 'next';
import CatalogueClient from '@/components/catalogue/CatalogueClient';

export const metadata: Metadata = {
  title: 'Catalogue des formations CPF',
  description: 'Découvrez notre catalogue complet de formations éligibles CPF. Plus de 20 formations dans 13 catégories pour votre reconversion professionnelle.',
  keywords: [
    'formations CPF',
    'catalogue formations',
    'reconversion professionnelle',
    'formations éligibles CPF',
    'blocs de compétences',
    'formations certifiantes'
  ],
  openGraph: {
    title: 'Catalogue des formations CPF - MaReconversionCPF',
    description: 'Découvrez notre catalogue complet de formations éligibles CPF pour votre reconversion professionnelle.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalogue des formations CPF - MaReconversionCPF',
    description: 'Découvrez notre catalogue complet de formations éligibles CPF pour votre reconversion professionnelle.',
  },
};

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-500 to-brand-600 text-white">
        <div className="container py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Catalogue des formations CPF
            </h1>
            <p className="text-xl text-brand-100 mb-8">
              Découvrez plus de 20 formations éligibles CPF dans 13 catégories. 
              Trouvez la formation qui correspond à votre projet de reconversion professionnelle.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-200 rounded-full"></div>
                <span>Formations certifiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-200 rounded-full"></div>
                <span>Éligibles CPF</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-200 rounded-full"></div>
                <span>Modalités flexibles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container py-8">
        <CatalogueClient />
      </div>
    </div>
  );
}

