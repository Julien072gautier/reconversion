'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ModalitiesSelector } from '@/components/reconversion/ModalitiesSelector';
import { ComplianceGuard } from '@/components/reconversion/ComplianceGuard';
import { getCurrentDossier, updateDraft } from '@/lib/services/dossier';
import type { Modalites } from '@/types/reconversion';
import { cn } from '@/lib/utils';

export default function ModalitesPage() {
  const router = useRouter();
  const [modalites, setModalites] = useState<Modalites>({
    syncRatio: 0.5,
    mode: 'hybride',
    elearning: false
  });
  const [dossier, setDossier] = useState(getCurrentDossier());

  useEffect(() => {
    if (dossier) {
      setModalites(dossier.modalites);
    }
  }, [dossier]);

  const handleModalitesChange = (newModalites: Modalites) => {
    setModalites(newModalites);
    updateDraft({ modalites: newModalites });
  };

  const handleContinue = () => {
    router.push('/reconversion/dossier');
  };

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
    <div className="max-w-4xl mx-auto">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Modalités de formation
        </h1>
        <p className="text-lg text-gray-600">
          Configurez les modalités de votre formation selon la réglementation en vigueur.
        </p>
      </div>

      {/* Sélecteur de modalités */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <ModalitiesSelector
          value={modalites}
          onChange={handleModalitesChange}
        />
      </div>

      {/* Récapitulatif */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Récapitulatif de votre projet
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Métiers */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Métiers</h4>
            <div className="space-y-1 text-sm">
              <div>
                <span className="text-gray-600">Actuel:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {dossier.romeActuel?.label || 'Non sélectionné'}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Cible:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {dossier.romeCible?.label || 'Non sélectionné'}
                </span>
              </div>
            </div>
          </div>

          {/* Blocs */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Blocs sélectionnés</h4>
            <div className="text-sm">
              <div className="text-gray-600">
                {dossier.blocs.length} bloc{dossier.blocs.length > 1 ? 's' : ''} • {dossier.heuresTotales}h
              </div>
              <div className="mt-1 space-y-1">
                {dossier.blocs.map((bloc) => (
                  <div key={bloc.id} className="text-gray-900">
                    • {bloc.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton continuer */}
      <div className="flex justify-end">
        <ComplianceGuard
          dossier={{
            ...dossier,
            modalites
          }}
          config={{ minSyncRatio: 0.5, minHours: 100, maxHours: 500 }}
        >
          <button
            onClick={handleContinue}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Continuer
          </button>
        </ComplianceGuard>
      </div>

      {/* Information réglementaire */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Réglementation
        </h3>
        <div className="text-blue-800 text-sm space-y-2">
          <p>
            <strong>Ratio synchrone minimum :</strong> 50% d'heures en accompagnement synchrone 
            (en présentiel ou à distance avec formateur en direct).
          </p>
          <p>
            <strong>Conformité :</strong> Votre dossier respecte les exigences réglementaires 
            pour l'éligibilité CPF et la reconversion professionnelle.
          </p>
          <p>
            <strong>Traçabilité :</strong> Toutes les formations sont certifiées et traçables 
            dans votre compte CPF personnel.
          </p>
        </div>
      </div>
    </div>
  );
}

