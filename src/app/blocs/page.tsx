import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Card } from '@/components/Card';

export const metadata: Metadata = {
  title: 'Catalogue des blocs de compétences',
  description: 'Découvrez notre catalogue complet de blocs de compétences éligibles CPF pour votre reconversion professionnelle. Trouvez les formations adaptées à votre projet.',
  keywords: [
    'catalogue formation',
    'blocs compétences CPF',
    'formations éligibles',
    'reconversion professionnelle',
    'formations certifiantes'
  ],
  openGraph: {
    title: 'Catalogue des blocs de compétences - Reconversion',
    description: 'Découvrez notre catalogue complet de blocs de compétences éligibles CPF pour votre reconversion professionnelle.',
    url: '/blocs',
  },
  alternates: {
    canonical: '/blocs',
  },
};

export default function CatalogPage() {
  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
            Catalogue des blocs de compétences
          </h1>
          <p className="text-lg text-slate-600 mb-8 text-balance">
            Explorez notre sélection de blocs de compétences éligibles CPF pour construire votre parcours de reconversion.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Développement Web
              </h3>
              <p className="text-slate-600 mb-4">
                Maîtrisez les technologies web modernes pour créer des applications performantes.
              </p>
              <div className="text-sm text-slate-500">
                Durée : 6 mois • Niveau : Intermédiaire
              </div>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Data Science
              </h3>
              <p className="text-slate-600 mb-4">
                Analysez et interprétez les données pour prendre des décisions éclairées.
              </p>
              <div className="text-sm text-slate-500">
                Durée : 8 mois • Niveau : Avancé
              </div>
            </Card>
            
            <Card>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Marketing Digital
              </h3>
              <p className="text-slate-600 mb-4">
                Développez des stratégies marketing efficaces dans l'écosystème digital.
              </p>
              <div className="text-sm text-slate-500">
                Durée : 4 mois • Niveau : Débutant
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

