'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DossierPreview } from '@/components/reconversion/DossierPreview';
import { ComplianceGuard } from '@/components/reconversion/ComplianceGuard';
import { getCurrentDossier, updateDraft, generateDossierFiles, downloadFile } from '@/lib/services/dossier';
import type { Employer } from '@/types/reconversion';
import { cn } from '@/lib/utils';

export default function DossierPage() {
  const router = useRouter();
  const [dossier, setDossier] = useState(getCurrentDossier());
  const [employer, setEmployer] = useState<Employer>({
    raisonSociale: '',
    siret: '',
    contactNom: '',
    contactEmail: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (dossier) {
      setEmployer(dossier.employer);
    }
  }, [dossier]);

  const handleEmployerChange = (field: keyof Employer, value: string) => {
    const newEmployer = { ...employer, [field]: value };
    setEmployer(newEmployer);
    updateDraft({ employer: newEmployer });
  };

  const handleGenerate = async () => {
    if (!dossier) return;

    setIsGenerating(true);
    
    try {
      // Générer les fichiers
      const { pdfContent, jsonContent } = generateDossierFiles(dossier);
      
      // Télécharger le PDF
      downloadFile(
        pdfContent, 
        `demande-reconversion-${dossier.candidate.nom}.txt`, 
        'text/plain'
      );
      
      // Télécharger le JSON
      downloadFile(
        jsonContent, 
        `recap-dossier-${dossier.candidate.nom}.json`, 
        'application/json'
      );
      
      // Marquer comme envoyé
      updateDraft({ statut: 'envoye' });
      
      setShowSuccess(true);
      setTimeout(() => {
        router.push('/reconversion/suivi');
      }, 3000);
      
    } catch (error) {
      console.error('Erreur lors de la génération:', error);
      alert('Erreur lors de la génération des fichiers');
    } finally {
      setIsGenerating(false);
    }
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

  if (showSuccess) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <div className="flex items-center justify-center mb-4">
            <svg className="h-12 w-12 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-green-900 mb-4">
            Demande générée avec succès !
          </h1>
          <p className="text-green-800 mb-6">
            Vos fichiers ont été téléchargés. Vous allez être redirigé vers le suivi de votre dossier.
          </p>
          <div className="text-sm text-green-700">
            Redirection automatique dans 3 secondes...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Finalisation du dossier
        </h1>
        <p className="text-lg text-gray-600">
          Vérifiez les informations et générez votre demande de reconversion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Aperçu du dossier */}
        <div className="lg:col-span-2">
          <DossierPreview dossier={dossier} />
        </div>

        {/* Formulaire employeur */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Informations employeur
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Raison sociale *
                </label>
                <input
                  type="text"
                  value={employer.raisonSociale}
                  onChange={(e) => handleEmployerChange('raisonSociale', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nom de l'entreprise"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SIRET
                </label>
                <input
                  type="text"
                  value={employer.siret || ''}
                  onChange={(e) => handleEmployerChange('siret', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="12345678901234"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du contact
                </label>
                <input
                  type="text"
                  value={employer.contactNom || ''}
                  onChange={(e) => handleEmployerChange('contactNom', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nom du responsable"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email du contact
                </label>
                <input
                  type="email"
                  value={employer.contactEmail || ''}
                  onChange={(e) => handleEmployerChange('contactEmail', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="contact@entreprise.com"
                />
              </div>
            </div>

            {/* Bouton générer */}
            <div className="mt-6">
              <ComplianceGuard
                dossier={{
                  ...dossier,
                  employer
                }}
                config={{ minSyncRatio: 0.5, minHours: 100, maxHours: 500 }}
              >
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !employer.raisonSociale.trim()}
                  className={cn(
                    'w-full py-3 px-4 rounded-lg font-medium transition-colors',
                    isGenerating || !employer.raisonSociale.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                  )}
                >
                  {isGenerating ? 'Génération...' : 'Générer la demande de reconversion'}
                </button>
              </ComplianceGuard>
            </div>
          </div>
        </div>
      </div>

      {/* Information sur la génération */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Génération des fichiers
        </h3>
        <div className="text-blue-800 text-sm space-y-2">
          <p>
            <strong>Fichiers générés :</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Demande de reconversion (PDF/TXT)</li>
            <li>Récapitulatif du dossier (JSON)</li>
          </ul>
          <p className="mt-3">
            <strong>Note :</strong> Les fichiers sont générés côté client pour cette démonstration. 
            En production, la génération se ferait côté serveur avec une sécurité renforcée.
          </p>
        </div>
      </div>
    </div>
  );
}

