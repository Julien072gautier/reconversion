'use client';

import type { Dossier } from '@/types/reconversion';
import { cn } from '@/lib/utils';

interface DossierPreviewProps {
  dossier: Dossier;
  className?: string;
}

export function DossierPreview({ dossier, className }: DossierPreviewProps) {
  const getStatusColor = (statut: Dossier['statut']) => {
    switch (statut) {
      case 'brouillon': return 'bg-gray-100 text-gray-800';
      case 'envoye': return 'bg-blue-100 text-blue-800';
      case 'en_attente_employeur': return 'bg-yellow-100 text-yellow-800';
      case 'en_montage_of': return 'bg-purple-100 text-purple-800';
      case 'accepte': return 'bg-green-100 text-green-800';
      case 'refuse': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (statut: Dossier['statut']) => {
    switch (statut) {
      case 'brouillon': return 'Brouillon';
      case 'envoye': return 'Envoyé';
      case 'en_attente_employeur': return 'En attente employeur';
      case 'en_montage_of': return 'En montage OF';
      case 'accepte': return 'Accepté';
      case 'refuse': return 'Refusé';
      default: return 'Inconnu';
    }
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* En-tête */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Aperçu du dossier
          </h2>
          <span className={cn(
            'px-3 py-1 rounded-full text-sm font-medium',
            getStatusColor(dossier.statut)
          )}>
            {getStatusLabel(dossier.statut)}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Candidat:</span>
            <span className="ml-2 text-gray-900">
              {dossier.candidate.prenom} {dossier.candidate.nom}
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Email:</span>
            <span className="ml-2 text-gray-900">{dossier.candidate.email}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Employeur:</span>
            <span className="ml-2 text-gray-900">{dossier.employer.raisonSociale}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Total heures:</span>
            <span className="ml-2 text-gray-900">{dossier.heuresTotales}h</span>
          </div>
        </div>
      </div>

      {/* Métiers */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Métiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-sm font-medium text-gray-700">Métier actuel:</span>
            <div className="mt-1">
              {dossier.romeActuel ? (
                <div>
                  <div className="font-medium text-gray-900">{dossier.romeActuel.label}</div>
                  <div className="text-sm text-gray-500">{dossier.romeActuel.code}</div>
                </div>
              ) : (
                <span className="text-gray-500">Non sélectionné</span>
              )}
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-700">Métier cible:</span>
            <div className="mt-1">
              {dossier.romeCible ? (
                <div>
                  <div className="font-medium text-gray-900">{dossier.romeCible.label}</div>
                  <div className="text-sm text-gray-500">{dossier.romeCible.code}</div>
                </div>
              ) : (
                <span className="text-gray-500">Non sélectionné</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Blocs sélectionnés */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Blocs de compétences ({dossier.blocs.length})
        </h3>
        {dossier.blocs.length > 0 ? (
          <div className="space-y-3">
            {dossier.blocs.map((bloc) => (
              <div key={bloc.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{bloc.title}</h4>
                    <div className="mt-1 text-sm text-gray-600">
                      {bloc.certificateur} • {bloc.dureeHeures}h • {bloc.rncpCode}
                    </div>
                  </div>
                  <span className={cn(
                    'px-2 py-1 rounded-full text-xs font-medium',
                    bloc.cpfEligible 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  )}>
                    {bloc.cpfEligible ? 'CPF' : 'Non CPF'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            Aucun bloc sélectionné
          </div>
        )}
      </div>

      {/* Modalités */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Modalités</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Ratio synchrone:</span>
            <span className="ml-2 text-gray-900">{dossier.modalites.syncRatio * 100}%</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Mode:</span>
            <span className="ml-2 text-gray-900">{dossier.modalites.mode}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">E-learning:</span>
            <span className="ml-2 text-gray-900">
              {dossier.modalites.elearning ? 'Inclus' : 'Non inclus'}
            </span>
          </div>
        </div>
      </div>

      {/* Actions suivantes */}
      {dossier.statut === 'brouillon' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Prochaines étapes</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Vérifiez les informations employeur</li>
            <li>• Validez la sélection des blocs</li>
            <li>• Confirmez les modalités de formation</li>
            <li>• Générez la demande de reconversion</li>
          </ul>
        </div>
      )}
    </div>
  );
}

