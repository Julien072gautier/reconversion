'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RomeSelector } from '@/components/reconversion/RomeSelector';
import { ComplianceGuard } from '@/components/reconversion/ComplianceGuard';
import { createDraft, updateDraft, getCurrentDossier } from '@/lib/services/dossier';
import type { RomeCode, Candidate } from '@/types/reconversion';
import { cn } from '@/lib/utils';

export default function ProjetPage() {
  const router = useRouter();
  const [candidate, setCandidate] = useState<Candidate>({
    prenom: '',
    nom: '',
    email: '',
    telephone: ''
  });
  const [romeActuel, setRomeActuel] = useState<RomeCode | null>(null);
  const [romeCible, setRomeCible] = useState<RomeCode | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  // Créer un brouillon si nécessaire
  const dossier = getCurrentDossier();
  if (!dossier) {
    createDraft(candidate);
  }

  const handleContinue = () => {
    const newErrors: string[] = [];
    
    if (!candidate.prenom.trim()) newErrors.push('Le prénom est requis');
    if (!candidate.nom.trim()) newErrors.push('Le nom est requis');
    if (!candidate.email.trim()) newErrors.push('L\'email est requis');
    if (!romeActuel) newErrors.push('Le métier actuel doit être sélectionné');
    if (!romeCible) newErrors.push('Le métier cible doit être sélectionné');
    
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mettre à jour le dossier
    updateDraft({
      candidate,
      romeActuel,
      romeCible
    });

    // Rediriger vers la page suivante
    router.push('/reconversion/blocs');
  };

  const canContinue = candidate.prenom && candidate.nom && candidate.email && romeActuel && romeCible;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          La reconversion par la compétence, pas par le diplôme
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choisissez vos blocs de compétences RNCP éligibles CPF, construisez votre parcours, 
          et générez votre demande de reconversion conforme, avec suivi en direct.
        </p>
      </div>

      {/* Formulaire */}
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Votre projet de reconversion
        </h2>

        {/* Informations candidat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              value={candidate.prenom}
              onChange={(e) => setCandidate({ ...candidate, prenom: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Votre prénom"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <input
              type="text"
              value={candidate.nom}
              onChange={(e) => setCandidate({ ...candidate, nom: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Votre nom"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={candidate.email}
              onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              value={candidate.telephone || ''}
              onChange={(e) => setCandidate({ ...candidate, telephone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>

        {/* Sélection des métiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <RomeSelector
            label="Métier actuel *"
            value={romeActuel}
            onChange={setRomeActuel}
            placeholder="Rechercher votre métier actuel..."
          />
          
          <RomeSelector
            label="Métier cible *"
            value={romeCible}
            onChange={setRomeCible}
            placeholder="Rechercher votre métier cible..."
          />
        </div>

        {/* Erreurs */}
        {errors.length > 0 && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-red-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-red-800">
                  Veuillez corriger les erreurs suivantes :
                </h3>
                <ul className="mt-2 text-sm text-red-700 list-disc list-inside">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Bouton continuer */}
        <div className="flex justify-end">
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className={cn(
              'px-6 py-3 rounded-lg font-medium transition-colors',
              canContinue
                ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            )}
          >
            Continuer
          </button>
        </div>
      </div>

      {/* Information légale */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Information légale
        </h3>
        <p className="text-blue-800 text-sm">
          La reconversion par blocs de compétences permet de capitaliser progressivement 
          vos compétences professionnelles. Cette approche favorise la mobilité professionnelle 
          et l'adaptation aux évolutions du marché du travail, tout en garantissant 
          la conformité et la traçabilité de votre parcours de formation.
        </p>
      </div>
    </div>
  );
}

