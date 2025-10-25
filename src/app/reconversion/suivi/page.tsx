'use client';

import { useState, useEffect } from 'react';
import { StatusTimeline } from '@/components/reconversion/StatusTimeline';
import { DossierPreview } from '@/components/reconversion/DossierPreview';
import { getCurrentDossier, getStatusHistory, addStatusUpdate } from '@/lib/services/dossier';
import type { StatusHistory } from '@/types/reconversion';

export default function SuiviPage() {
  const [dossier, setDossier] = useState(getCurrentDossier());
  const [statusHistory, setStatusHistory] = useState<StatusHistory[]>([]);

  useEffect(() => {
    // Charger l'historique des statuts
    const history = getStatusHistory();
    setStatusHistory(history);

    // Si le dossier est envoyé, ajouter des mises à jour de statut simulées
    if (dossier && dossier.statut === 'envoye' && history.length === 0) {
      // Simuler le processus de suivi
      const now = new Date();
      
      // Statut initial
      addStatusUpdate('envoye', 'Demande de reconversion envoyée');
      
      // Simuler les étapes suivantes avec des délais
      setTimeout(() => {
        addStatusUpdate('en_attente_employeur', 'En attente de validation par l\'employeur');
        setStatusHistory(getStatusHistory());
      }, 2000);
      
      setTimeout(() => {
        addStatusUpdate('en_montage_of', 'Dossier en cours de montage par l\'organisme de formation');
        setStatusHistory(getStatusHistory());
      }, 5000);
      
      setTimeout(() => {
        addStatusUpdate('accepte', 'Dossier accepté - Formation en cours de planification');
        setStatusHistory(getStatusHistory());
      }, 8000);
    }
  }, [dossier]);

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
          onClick={() => window.location.href = '/reconversion/projet'}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Créer un projet
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Suivi de votre dossier
        </h1>
        <p className="text-lg text-gray-600">
          Suivez l'avancement de votre demande de reconversion professionnelle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline de suivi */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <StatusTimeline history={statusHistory} />
          </div>
        </div>

        {/* Aperçu du dossier */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Dossier de reconversion
            </h3>
            <DossierPreview dossier={dossier} />
          </div>
        </div>
      </div>

      {/* Informations sur le processus */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Processus de reconversion
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Étapes du processus</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Envoi de la demande</li>
              <li>• Validation par l'employeur</li>
              <li>• Montage par l'OF partenaire</li>
              <li>• Planification de la formation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Acteurs impliqués</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Candidat (vous)</li>
              <li>• Employeur</li>
              <li>• Organisme de formation</li>
              <li>• France Compétences</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact et support */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          Besoin d'aide ?
        </h3>
        <div className="text-blue-800 text-sm space-y-2">
          <p>
            <strong>Support technique :</strong> contact@reconversion.fr
          </p>
          <p>
            <strong>Questions réglementaires :</strong> dpo@reconversion.fr
          </p>
          <p>
            <strong>Suivi formation :</strong> L'organisme de formation partenaire vous contactera 
            directement pour la planification de vos blocs de compétences.
          </p>
        </div>
      </div>
    </div>
  );
}

