import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Card } from '@/components/Card';

export const metadata: Metadata = {
  title: 'Mon parcours de reconversion',
  description: 'Construisez et suivez votre parcours personnalisé de reconversion professionnelle. Assemblez vos blocs de compétences pour créer un parcours cohérent.',
  keywords: [
    'parcours reconversion',
    'planification formation',
    'suivi progression',
    'objectifs professionnels',
    'parcours personnalisé'
  ],
  openGraph: {
    title: 'Mon parcours de reconversion - Reconversion',
    description: 'Construisez et suivez votre parcours personnalisé de reconversion professionnelle.',
    url: '/parcours',
  },
  alternates: {
    canonical: '/parcours',
  },
};

export default function ParcoursPage() {
  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
            Mon parcours de reconversion
          </h1>
          <p className="text-lg text-slate-600 mb-8 text-balance">
            Construisez votre parcours personnalisé en assemblant les blocs de compétences qui correspondent à vos objectifs professionnels.
          </p>
          
          <div className="grid gap-8">
            <Card>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Étape 1 : Définir vos objectifs
              </h2>
              <p className="text-slate-600 mb-4">
                Identifiez vos objectifs professionnels et les compétences nécessaires pour les atteindre.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-700">
                  💡 <strong>Conseil :</strong> Prenez le temps de réfléchir à votre vision professionnelle à long terme.
                </p>
              </div>
            </Card>
            
            <Card>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Étape 2 : Sélectionner vos blocs
              </h2>
              <p className="text-slate-600 mb-4">
                Choisissez les blocs de compétences qui correspondent à votre projet et vos contraintes.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-700">
                  📚 <strong>Astuce :</strong> Commencez par des blocs de niveau débutant si vous changez complètement de domaine.
                </p>
              </div>
            </Card>
            
            <Card>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Étape 3 : Planifier votre formation
              </h2>
              <p className="text-slate-600 mb-4">
                Organisez votre parcours dans le temps en tenant compte de vos disponibilités et de la logique pédagogique.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-700">
                  ⏰ <strong>Planning :</strong> Prévoyez des phases de formation et de mise en pratique.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

