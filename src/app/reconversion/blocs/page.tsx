'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BlocGrid } from '@/components/reconversion/BlocGrid';
import { ComplianceGuard } from '@/components/reconversion/ComplianceGuard';
import { getCurrentDossier, updateDraft } from '@/lib/services/dossier';
import type { BlocRNCP } from '@/types/reconversion';
import { cn } from '@/lib/utils';

export default function BlocsPage() {
  const router = useRouter();
  const [selectedBlocs, setSelectedBlocs] = useState<BlocRNCP[]>([]);
  const [dossier, setDossier] = useState(getCurrentDossier());

  useEffect(() => {
    if (dossier) {
      setSelectedBlocs(dossier.blocs);
    }
  }, [dossier]);

  const handleBlocSelect = (bloc: BlocRNCP) => {
    const newSelectedBlocs = [...selectedBlocs, bloc];
    setSelectedBlocs(newSelectedBlocs);
    updateDraft({ blocs: newSelectedBlocs });
  };

  const handleBlocDeselect = (blocId: string) => {
    const newSelectedBlocs = selectedBlocs.filter(bloc => bloc.id !== blocId);
    setSelectedBlocs(newSelectedBlocs);
    updateDraft({ blocs: newSelectedBlocs });
  };

  const handleContinue = () => {
    if (selectedBlocs.length === 0) {
      alert('Veuillez sélectionner au moins un bloc de compétences');
      return;
    }
    router.push('/reconversion/modalites');
  };

  const totalHours = selectedBlocs.reduce((total, bloc) => total + bloc.dureeHeures, 0);

  if (!dossier) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Dossier non trouvé
        </h1>
        <p className="text-gray-600 mb-6">
          Veuillez d'abord compléter votre projet de reconversion.
        </p>
        <button
          onClick={() => router.push('/reconversion/projet')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour au projet
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Sélectionnez vos blocs de compétences
        </h1>
        <p className="text-lg text-gray-600">
          Choisissez les blocs RNCP éligibles CPF qui correspondent à votre projet de reconversion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Grille des blocs */}
        <div className="lg:col-span-3">
          <BlocGrid
            selectedBlocs={selectedBlocs}
            onBlocSelect={handleBlocSelect}
            onBlocDeselect={handleBlocDeselect}
          />
        </div>

        {/* Sidebar récapitulatif */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Récapitulatif
            </h3>
            
            {/* Métiers */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Métiers</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Actuel:</span>
                  <div className="font-medium text-gray-900">
                    {dossier.romeActuel?.label || 'Non sélectionné'}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Cible:</span>
                  <div className="font-medium text-gray-900">
                    {dossier.romeCible?.label || 'Non sélectionné'}
                  </div>
                </div>
              </div>
            </div>

            {/* Blocs sélectionnés */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Blocs sélectionnés ({selectedBlocs.length})
              </h4>
              {selectedBlocs.length > 0 ? (
                <div className="space-y-2">
                  {selectedBlocs.map((bloc) => (
                    <div key={bloc.id} className="text-sm">
                      <div className="font-medium text-gray-900">{bloc.title}</div>
                      <div className="text-gray-600">{bloc.dureeHeures}h • {bloc.certificateur}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-500">
                  Aucun bloc sélectionné
                </div>
              )}
            </div>

            {/* Total heures */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Total</h4>
              <div className="text-2xl font-bold text-blue-600">
                {totalHours}h
              </div>
            </div>

            {/* Bouton continuer */}
            <ComplianceGuard
              dossier={{
                ...dossier,
                blocs: selectedBlocs,
                heuresTotales: totalHours
              }}
              config={{ minSyncRatio: 0.5, minHours: 100, maxHours: 500 }}
            >
              <button
                onClick={handleContinue}
                disabled={selectedBlocs.length === 0}
                className={cn(
                  'w-full py-3 px-4 rounded-lg font-medium transition-colors',
                  selectedBlocs.length > 0
                    ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                )}
              >
                Continuer
              </button>
            </ComplianceGuard>
          </div>
        </div>
      </div>
    </div>
  );
}

