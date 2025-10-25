import type { Dossier, StatusHistory, ComplianceConfig, ComplianceResult } from '@/types/reconversion';
import { ensureCompliance } from '@/lib/validation/reconversion';

// Stockage en mémoire (à remplacer par une API plus tard)
let currentDossier: Dossier | null = null;
let statusHistory: StatusHistory[] = [];

export function createDraft(candidate: Dossier['candidate']): Dossier {
  const draft: Dossier = {
    candidate,
    employer: {
      raisonSociale: '',
      siret: '',
      contactNom: '',
      contactEmail: ''
    },
    romeActuel: null,
    romeCible: null,
    blocs: [],
    modalites: {
      syncRatio: 0.5,
      mode: 'hybride',
      elearning: false
    },
    heuresTotales: 0,
    statut: 'brouillon'
  };
  
  currentDossier = draft;
  return draft;
}

export function updateDraft(updates: Partial<Dossier>): Dossier | null {
  if (!currentDossier) return null;
  
  currentDossier = { ...currentDossier, ...updates };
  
  // Recalculer les heures totales
  if (updates.blocs) {
    currentDossier.heuresTotales = updates.blocs.reduce((total, bloc) => total + bloc.dureeHeures, 0);
  }
  
  return currentDossier;
}

export function getCurrentDossier(): Dossier | null {
  return currentDossier;
}

export function ensureComplianceService(
  dossier: Dossier, 
  config: ComplianceConfig = { minSyncRatio: 0.5, minHours: 100, maxHours: 500 }
): ComplianceResult {
  return ensureCompliance(dossier, config);
}

export function getStatusHistory(): StatusHistory[] {
  return statusHistory;
}

export function addStatusUpdate(statut: Dossier['statut'], note?: string): void {
  const update: StatusHistory = {
    statut,
    date: new Date().toISOString(),
    note
  };
  
  statusHistory.push(update);
  
  if (currentDossier) {
    currentDossier.statut = statut;
  }
}

export function generateDossierFiles(dossier: Dossier): { pdfContent: string; jsonContent: string } {
  // TODO: Remplacer par une génération PDF réelle côté serveur
  const pdfContent = `
DEMANDE DE RECONVERSION PROFESSIONNELLE

Candidat: ${dossier.candidate.prenom} ${dossier.candidate.nom}
Email: ${dossier.candidate.email}
${dossier.candidate.telephone ? `Téléphone: ${dossier.candidate.telephone}` : ''}

Employeur: ${dossier.employer.raisonSociale}
${dossier.employer.siret ? `SIRET: ${dossier.employer.siret}` : ''}
${dossier.employer.contactNom ? `Contact: ${dossier.employer.contactNom}` : ''}
${dossier.employer.contactEmail ? `Email: ${dossier.employer.contactEmail}` : ''}

Métier actuel: ${dossier.romeActuel?.label} (${dossier.romeActuel?.code})
Métier cible: ${dossier.romeCible?.label} (${dossier.romeCible?.code})

Blocs sélectionnés:
${dossier.blocs.map(bloc => `- ${bloc.title} (${bloc.rncpCode}) - ${bloc.dureeHeures}h`).join('\n')}

Modalités:
- Ratio synchrone: ${dossier.modalites.syncRatio * 100}%
- Mode: ${dossier.modalites.mode}
- E-learning: ${dossier.modalites.elearning ? 'Oui' : 'Non'}

Total heures: ${dossier.heuresTotales}h

Date de génération: ${new Date().toLocaleDateString('fr-FR')}
  `.trim();

  const jsonContent = JSON.stringify(dossier, null, 2);
  
  return { pdfContent, jsonContent };
}

export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

