export type RomeCode = { 
  code: string; 
  label: string; 
};

export type BlocRNCP = {
  id: string;
  rncpCode: string;
  title: string;
  certificateur: string; // single name only
  dureeHeures: number;
  competences: string[];
  cpfEligible: boolean;
};

export type Modalites = {
  syncRatio: 0.5 | 0.75 | 1.0;
  mode: "presentiel" | "distanciel" | "hybride";
  elearning: boolean;
};

export type Candidate = { 
  prenom: string; 
  nom: string; 
  email: string; 
  telephone?: string; 
};

export type Employer = { 
  raisonSociale: string; 
  siret?: string; 
  contactNom?: string; 
  contactEmail?: string; 
};

export type Dossier = {
  candidate: Candidate;
  employer: Employer;
  romeActuel: RomeCode | null;
  romeCible: RomeCode | null;
  blocs: BlocRNCP[];
  modalites: Modalites;
  heuresTotales: number;
  statut: "brouillon" | "envoye" | "en_attente_employeur" | "en_montage_of" | "accepte" | "refuse";
};

export type StatusHistory = {
  statut: Dossier['statut'];
  date: string;
  note?: string;
};

export type ComplianceConfig = {
  minSyncRatio: number;
  minHours: number;
  maxHours: number;
};

export type ComplianceResult = {
  ok: boolean;
  errors: string[];
};

