import { z } from 'zod';
import type { RomeCode, BlocRNCP, Modalites, Candidate, Employer, Dossier, ComplianceConfig, ComplianceResult } from '@/types/reconversion';

// Schémas de validation Zod
export const romeCodeSchema = z.object({
  code: z.string().min(1, 'Code ROME requis'),
  label: z.string().min(1, 'Libellé requis'),
});

export const blocRNCPSchema = z.object({
  id: z.string().min(1, 'ID requis'),
  rncpCode: z.string().min(1, 'Code RNCP requis'),
  title: z.string().min(1, 'Titre requis'),
  certificateur: z.string().min(1, 'Certificateur requis'),
  dureeHeures: z.number().min(1, 'Durée en heures requise'),
  competences: z.array(z.string()).min(1, 'Au moins une compétence requise'),
  cpfEligible: z.boolean(),
});

export const modalitesSchema = z.object({
  syncRatio: z.enum([0.5, 0.75, 1.0], {
    errorMap: () => ({ message: 'Ratio synchrone doit être 50%, 75% ou 100%' })
  }),
  mode: z.enum(['presentiel', 'distanciel', 'hybride']),
  elearning: z.boolean(),
});

export const candidateSchema = z.object({
  prenom: z.string().min(1, 'Prénom requis'),
  nom: z.string().min(1, 'Nom requis'),
  email: z.string().email('Email invalide'),
  telephone: z.string().optional(),
});

export const employerSchema = z.object({
  raisonSociale: z.string().min(1, 'Raison sociale requise'),
  siret: z.string().optional(),
  contactNom: z.string().optional(),
  contactEmail: z.string().email('Email invalide').optional().or(z.literal('')),
});

export const dossierSchema = z.object({
  candidate: candidateSchema,
  employer: employerSchema,
  romeActuel: romeCodeSchema.nullable(),
  romeCible: romeCodeSchema.nullable(),
  blocs: z.array(blocRNCPSchema),
  modalites: modalitesSchema,
  heuresTotales: z.number().min(1, 'Heures totales requises'),
  statut: z.enum(['brouillon', 'envoye', 'en_attente_employeur', 'en_montage_of', 'accepte', 'refuse']),
});

// Fonction de validation de conformité
export function ensureCompliance(
  dossier: Dossier, 
  config: ComplianceConfig
): ComplianceResult {
  const errors: string[] = [];

  // Vérification du ratio synchrone minimum
  if (dossier.modalites.syncRatio < config.minSyncRatio) {
    errors.push(`Le ratio synchrone doit être d'au moins ${config.minSyncRatio * 100}%`);
  }

  // Vérification des heures totales
  if (dossier.heuresTotales < config.minHours) {
    errors.push(`Le nombre d'heures doit être d'au moins ${config.minHours}h`);
  }

  if (dossier.heuresTotales > config.maxHours) {
    errors.push(`Le nombre d'heures ne peut pas dépasser ${config.maxHours}h`);
  }

  // Vérification de la sélection des codes ROME
  if (!dossier.romeActuel) {
    errors.push('Le métier actuel doit être sélectionné');
  }

  if (!dossier.romeCible) {
    errors.push('Le métier cible doit être sélectionné');
  }

  // Vérification de la sélection des blocs
  if (dossier.blocs.length === 0) {
    errors.push('Au moins un bloc de compétences doit être sélectionné');
  }

  // Vérification des données candidat
  if (!dossier.candidate.prenom || !dossier.candidate.nom || !dossier.candidate.email) {
    errors.push('Les informations candidat sont incomplètes');
  }

  // Vérification des données employeur
  if (!dossier.employer.raisonSociale) {
    errors.push('La raison sociale de l\'employeur est requise');
  }

  return {
    ok: errors.length === 0,
    errors
  };
}

// Fonction de validation des modalités
export function validateModalites(modalites: Modalites): ComplianceResult {
  const errors: string[] = [];

  if (modalites.syncRatio < 0.5) {
    errors.push('Le ratio synchrone doit être d\'au moins 50%');
  }

  return {
    ok: errors.length === 0,
    errors
  };
}

