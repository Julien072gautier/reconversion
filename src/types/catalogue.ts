export interface Formation {
  id: string;
  code: string;
  titre: string;
  description: string;
  duree: number; // en heures
  cout: number; // en euros
  certification: string;
  categorie: string;
  competences: string[];
  niveau: 'débutant' | 'intermédiaire' | 'avancé' | 'expert';
  modalite: 'présentiel' | 'distanciel' | 'hybride';
  cpfEligible: boolean;
  certificateur: string;
  tags: string[];
}

export interface Categorie {
  id: string;
  nom: string;
  description: string;
  icone: string;
  couleur: string;
}

export interface Filtres {
  recherche: string;
  categorie: string;
  niveau: string;
  modalite: string;
  prixMin: number;
  prixMax: number;
  dureeMin: number;
  dureeMax: number;
  cpfEligible: boolean | null;
}

