import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Card } from '@/components/Card';

export const metadata: Metadata = {
  title: 'Mon dossier CPF',
  description: 'Préparez et gérez votre dossier CPF pour financer votre reconversion professionnelle. Suivez l\'avancement de vos demandes de formation.',
  keywords: [
    'dossier CPF',
    'financement formation',
    'compte personnel formation',
    'demande CPF',
    'suivi dossier'
  ],
  openGraph: {
    title: 'Mon dossier CPF - Reconversion',
    description: 'Préparez et gérez votre dossier CPF pour financer votre reconversion professionnelle.',
    url: '/dossier',
  },
  alternates: {
    canonical: '/dossier',
  },
};

export default function DossierPage() {
  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
            Mon dossier CPF
          </h1>
          <p className="text-lg text-slate-600 mb-8 text-balance">
            Gérez votre dossier CPF et suivez l'avancement de vos demandes de formation pour votre reconversion professionnelle.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                📋 État de mon dossier
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Solde CPF disponible</span>
                  <span className="font-semibold text-slate-900">2 400 €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Formations en cours</span>
                  <span className="font-semibold text-blue-600">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Formations terminées</span>
                  <span className="font-semibold text-green-600">3</span>
                </div>
              </div>
            </Card>
            
            <Card>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                🎯 Prochaines étapes
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Finaliser la sélection des blocs</p>
                    <p className="text-xs text-slate-500">Échéance : 15 jours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-300 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Soumettre les demandes CPF</p>
                    <p className="text-xs text-slate-500">Après sélection</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              📚 Mes formations sélectionnées
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-slate-900">Développement Web Frontend</h3>
                    <p className="text-sm text-slate-600">Bloc de compétences - 6 mois</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">En attente</span>
                </div>
                <div className="mt-2 text-sm text-slate-500">
                  Coût : 1 200 € • Financement CPF : 100%
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

