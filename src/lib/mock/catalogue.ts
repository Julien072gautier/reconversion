import { Formation, Categorie } from '@/types/catalogue';

export const categories: Categorie[] = [
  {
    id: 'accompagnement',
    nom: 'Accompagnement individuel',
    description: 'Bilan de compétences et insertion professionnelle',
    icone: '👤',
    couleur: '#e11d48'
  },
  {
    id: 'audit-finances',
    nom: 'Audit / Finances',
    description: 'Diagnostic stratégique et gestion financière',
    icone: '📊',
    couleur: '#059669'
  },
  {
    id: 'bureautique',
    nom: 'Bureautique',
    description: 'Maîtrise des outils office et collaboratifs',
    icone: '💻',
    couleur: '#dc2626'
  },
  {
    id: 'commerce',
    nom: 'Commerce',
    description: 'Stratégie commerciale et management d\'équipe',
    icone: '🛒',
    couleur: '#ea580c'
  },
  {
    id: 'communication',
    nom: 'Communication',
    description: 'Stratégie et gestion de la communication',
    icone: '📢',
    couleur: '#7c3aed'
  },
  {
    id: 'comptabilite',
    nom: 'Comptabilité',
    description: 'Comptabilité générale et analyse financière',
    icone: '🧮',
    couleur: '#0891b2'
  },
  {
    id: 'digital',
    nom: 'Digital',
    description: 'Marketing digital et développement web',
    icone: '🌐',
    couleur: '#0ea5e9'
  },
  {
    id: 'formation',
    nom: 'Formation professionnelle',
    description: 'Création et digitalisation de formations',
    icone: '🎓',
    couleur: '#16a34a'
  },
  {
    id: 'informatique',
    nom: 'Informatique / Numérique',
    description: 'Projets numériques et innovation',
    icone: '💻',
    couleur: '#9333ea'
  },
  {
    id: 'langues',
    nom: 'Langues',
    description: 'Apprentissage des langues étrangères',
    icone: '🗣️',
    couleur: '#f59e0b'
  },
  {
    id: 'management',
    nom: 'Management',
    description: 'Leadership et conduite du changement',
    icone: '👥',
    couleur: '#ef4444'
  },
  {
    id: 'marketing',
    nom: 'Marketing',
    description: 'Stratégie marketing et performance commerciale',
    icone: '📈',
    couleur: '#8b5cf6'
  },
  {
    id: 'rh',
    nom: 'Ressources Humaines',
    description: 'Gestion RH et administration du personnel',
    icone: '👔',
    couleur: '#06b6d4'
  }
];

export const formations: Formation[] = [
  // Accompagnement individuel
  {
    id: 'acc-001',
    code: 'CPF-ACC-001',
    titre: 'Consultant en bilan de compétences',
    description: 'Accompagner les personnes dans l\'évaluation de leurs compétences et la définition de leur projet professionnel.',
    duree: 35,
    cout: 1200,
    certification: 'Certificat de consultant bilan de compétences',
    categorie: 'accompagnement',
    competences: ['Écoute active', 'Analyse des compétences', 'Orientation professionnelle', 'Évaluation des potentiels'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'AFPA',
    tags: ['bilan', 'compétences', 'orientation', 'accompagnement']
  },
  {
    id: 'acc-002',
    code: 'CPF-ACC-002',
    titre: 'Conseiller en insertion professionnelle',
    description: 'Aider les demandeurs d\'emploi dans leur recherche d\'emploi et leur insertion professionnelle.',
    duree: 28,
    cout: 950,
    certification: 'Certificat de conseiller insertion',
    categorie: 'accompagnement',
    competences: ['Techniques de recherche d\'emploi', 'Rédaction CV', 'Préparation entretiens', 'Réseautage professionnel'],
    niveau: 'débutant',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Pôle Emploi',
    tags: ['insertion', 'emploi', 'accompagnement', 'recherche']
  },

  // Audit / Finances
  {
    id: 'aud-001',
    code: 'CPF-AUD-001',
    titre: 'Réaliser un diagnostic stratégique',
    description: 'Analyser la situation d\'une entreprise et proposer des recommandations stratégiques.',
    duree: 42,
    cout: 1800,
    certification: 'Certificat de consultant stratégique',
    categorie: 'audit-finances',
    competences: ['Analyse SWOT', 'Diagnostic financier', 'Recommandations stratégiques', 'Analyse concurrentielle'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'CCI Formation',
    tags: ['audit', 'stratégie', 'diagnostic', 'conseil']
  },
  {
    id: 'aud-002',
    code: 'CPF-AUD-002',
    titre: 'Analyser un plan de financement d\'entreprise',
    description: 'Maîtriser les techniques d\'analyse financière et d\'évaluation des projets d\'investissement.',
    duree: 35,
    cout: 1500,
    certification: 'Certificat d\'analyste financier',
    categorie: 'audit-finances',
    competences: ['Analyse financière', 'Évaluation d\'investissements', 'Modélisation financière', 'Risques financiers'],
    niveau: 'intermédiaire',
    modalite: 'distanciel',
    cpfEligible: true,
    certificateur: 'Dauphine Formation',
    tags: ['finance', 'analyse', 'investissement', 'modélisation']
  },
  {
    id: 'aud-003',
    code: 'CPF-AUD-003',
    titre: 'Analyser un programme d\'investissement',
    description: 'Évaluer et optimiser les programmes d\'investissement d\'entreprise.',
    duree: 28,
    cout: 1200,
    certification: 'Certificat d\'analyste d\'investissement',
    categorie: 'audit-finances',
    competences: ['Analyse d\'investissement', 'ROI', 'NPV', 'Taux de rentabilité'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'HEC Executive Education',
    tags: ['investissement', 'analyse', 'rentabilité', 'ROI']
  },
  {
    id: 'aud-004',
    code: 'CPF-AUD-004',
    titre: 'Améliorer la gestion budgétaire',
    description: 'Optimiser la gestion budgétaire et le contrôle des coûts.',
    duree: 21,
    cout: 900,
    certification: 'Certificat de gestionnaire budgétaire',
    categorie: 'audit-finances',
    competences: ['Gestion budgétaire', 'Contrôle des coûts', 'Prévision', 'Reporting'],
    niveau: 'intermédiaire',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Cegos',
    tags: ['budget', 'gestion', 'coûts', 'contrôle']
  },
  {
    id: 'aud-005',
    code: 'CPF-AUD-005',
    titre: 'Élaborer une stratégie de financement',
    description: 'Développer des stratégies de financement adaptées aux besoins de l\'entreprise.',
    duree: 35,
    cout: 1400,
    certification: 'Certificat de conseiller en financement',
    categorie: 'audit-finances',
    competences: ['Stratégie de financement', 'Levée de fonds', 'Négociation bancaire', 'Structures financières'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'CCI Formation',
    tags: ['financement', 'stratégie', 'levée de fonds', 'banque']
  },
  {
    id: 'aud-006',
    code: 'CPF-AUD-006',
    titre: 'Optimiser ses actifs financiers',
    description: 'Optimiser la gestion des actifs financiers et la performance du portefeuille.',
    duree: 28,
    cout: 1300,
    certification: 'Certificat de gestionnaire d\'actifs',
    categorie: 'audit-finances',
    competences: ['Gestion d\'actifs', 'Diversification', 'Risque/rendement', 'Performance'],
    niveau: 'avancé',
    modalite: 'distanciel',
    cpfEligible: true,
    certificateur: 'AMF Formation',
    tags: ['actifs', 'optimisation', 'portefeuille', 'performance']
  },
  {
    id: 'aud-007',
    code: 'CPF-AUD-007',
    titre: 'Mettre en place des audits de performance',
    description: 'Concevoir et mettre en œuvre des audits de performance organisationnelle.',
    duree: 35,
    cout: 1600,
    certification: 'Certificat d\'auditeur de performance',
    categorie: 'audit-finances',
    competences: ['Audit de performance', 'Indicateurs KPI', 'Amélioration continue', 'Benchmarking'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'AFNOR Formation',
    tags: ['audit', 'performance', 'KPI', 'amélioration']
  },
  {
    id: 'aud-008',
    code: 'CPF-AUD-008',
    titre: 'Gérer le reporting',
    description: 'Maîtriser les techniques de reporting financier et opérationnel.',
    duree: 21,
    cout: 800,
    certification: 'Certificat de responsable reporting',
    categorie: 'audit-finances',
    competences: ['Reporting financier', 'Tableaux de bord', 'Analyse de données', 'Présentation'],
    niveau: 'intermédiaire',
    modalite: 'distanciel',
    cpfEligible: true,
    certificateur: 'CNAM',
    tags: ['reporting', 'tableaux de bord', 'données', 'analyse']
  },
  {
    id: 'aud-009',
    code: 'CPF-AUD-009',
    titre: 'Définir une stratégie d\'investissement adaptée au contexte',
    description: 'Développer des stratégies d\'investissement personnalisées selon le contexte économique.',
    duree: 42,
    cout: 1800,
    certification: 'Certificat de conseiller en investissement',
    categorie: 'audit-finances',
    competences: ['Stratégie d\'investissement', 'Analyse de marché', 'Gestion des risques', 'Conseil personnalisé'],
    niveau: 'expert',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'AMF Formation',
    tags: ['investissement', 'stratégie', 'conseil', 'risques']
  },
  {
    id: 'aud-010',
    code: 'CPF-AUD-010',
    titre: 'Contrôler et auditer l\'information comptable et financière',
    description: 'Maîtriser les techniques de contrôle et d\'audit des informations comptables et financières.',
    duree: 35,
    cout: 1500,
    certification: 'Certificat d\'auditeur comptable',
    categorie: 'audit-finances',
    competences: ['Audit comptable', 'Contrôle interne', 'Normes comptables', 'Rapport d\'audit'],
    niveau: 'avancé',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Ordre des Experts Comptables',
    tags: ['audit', 'comptabilité', 'contrôle', 'normes']
  },

  // Bureautique
  {
    id: 'bur-001',
    code: 'CPF-BUR-001',
    titre: 'Excel - Initiation',
    description: 'Découvrir les bases d\'Excel : saisie, formules simples, mise en forme et graphiques.',
    duree: 14,
    cout: 400,
    certification: 'Certificat Excel Initiation Microsoft',
    categorie: 'bureautique',
    competences: ['Saisie de données', 'Formules de base', 'Mise en forme', 'Graphiques simples'],
    niveau: 'débutant',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['excel', 'bureautique', 'initiation', 'bases']
  },
  {
    id: 'bur-002',
    code: 'CPF-BUR-002',
    titre: 'Excel - Intermédiaire',
    description: 'Approfondir Excel : fonctions avancées, tableaux croisés dynamiques, analyse de données.',
    duree: 21,
    cout: 600,
    certification: 'Certificat Excel Intermédiaire Microsoft',
    categorie: 'bureautique',
    competences: ['Fonctions avancées', 'Tableaux croisés dynamiques', 'Analyse de données', 'Validation'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['excel', 'bureautique', 'intermédiaire', 'analyse']
  },
  {
    id: 'bur-003',
    code: 'CPF-BUR-003',
    titre: 'Excel - Avancé',
    description: 'Maîtriser les fonctionnalités avancées d\'Excel : macros, tableaux de bord, automatisation.',
    duree: 28,
    cout: 800,
    certification: 'Certificat Excel Avancé Microsoft',
    categorie: 'bureautique',
    competences: ['Macros VBA', 'Tableaux de bord', 'Automatisation', 'Connectivité'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['excel', 'bureautique', 'avancé', 'macros']
  },
  {
    id: 'bur-004',
    code: 'CPF-BUR-004',
    titre: 'Excel - Expert',
    description: 'Devenir expert Excel : programmation VBA, solutions complexes, intégration avancée.',
    duree: 35,
    cout: 1200,
    certification: 'Certificat Excel Expert Microsoft',
    categorie: 'bureautique',
    competences: ['Programmation VBA', 'Solutions complexes', 'Intégration', 'Optimisation'],
    niveau: 'expert',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['excel', 'bureautique', 'expert', 'VBA']
  },
  {
    id: 'bur-005',
    code: 'CPF-BUR-005',
    titre: 'Word - Débutant à Avancé',
    description: 'Maîtriser Word de A à Z : rédaction, mise en forme, styles, tableaux, publipostage.',
    duree: 21,
    cout: 550,
    certification: 'Certificat Word Microsoft',
    categorie: 'bureautique',
    competences: ['Rédaction', 'Mise en forme', 'Styles', 'Tableaux', 'Publipostage'],
    niveau: 'intermédiaire',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['word', 'bureautique', 'rédaction', 'mise en forme']
  },
  {
    id: 'bur-006',
    code: 'CPF-BUR-006',
    titre: 'PowerPoint - Création de présentations percutantes',
    description: 'Créer des présentations professionnelles et impactantes avec PowerPoint.',
    duree: 14,
    cout: 450,
    certification: 'Certificat PowerPoint Microsoft',
    categorie: 'bureautique',
    competences: ['Design de slides', 'Animations', 'Présentation orale', 'Storytelling'],
    niveau: 'intermédiaire',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['powerpoint', 'présentation', 'design', 'storytelling']
  },
  {
    id: 'bur-007',
    code: 'CPF-BUR-007',
    titre: 'Outlook - Organisation professionnelle et gestion des mails',
    description: 'Optimiser sa gestion email et son organisation professionnelle avec Outlook.',
    duree: 14,
    cout: 400,
    certification: 'Certificat Outlook Microsoft',
    categorie: 'bureautique',
    competences: ['Gestion email', 'Organisation', 'Calendrier', 'Tâches', 'Contacts'],
    niveau: 'débutant',
    modalite: 'distanciel',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['outlook', 'email', 'organisation', 'productivité']
  },
  {
    id: 'bur-008',
    code: 'CPF-BUR-008',
    titre: 'Outils collaboratifs - Teams, OneDrive, SharePoint',
    description: 'Maîtriser les outils collaboratifs Microsoft pour le travail en équipe.',
    duree: 21,
    cout: 700,
    certification: 'Certificat Collaboration Microsoft',
    categorie: 'bureautique',
    competences: ['Teams', 'OneDrive', 'SharePoint', 'Collaboration', 'Partage'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['collaboration', 'teams', 'onedrive', 'sharepoint']
  },
  {
    id: 'bur-009',
    code: 'CPF-BUR-009',
    titre: 'Microsoft 365 - Suite complète',
    description: 'Maîtriser l\'ensemble de la suite Microsoft 365 pour la productivité professionnelle.',
    duree: 35,
    cout: 1000,
    certification: 'Certificat Microsoft 365',
    categorie: 'bureautique',
    competences: ['Suite Office', 'Cloud', 'Collaboration', 'Sécurité', 'Administration'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Microsoft Learning',
    tags: ['microsoft365', 'suite', 'cloud', 'productivité']
  },

  // Commerce
  {
    id: 'com-001',
    code: 'CPF-COM-001',
    titre: 'Manager une équipe commerciale',
    description: 'Développer les compétences de management d\'équipe commerciale et d\'animation.',
    duree: 28,
    cout: 1200,
    certification: 'Certificat de manager commercial',
    categorie: 'commerce',
    competences: ['Management d\'équipe', 'Animation commerciale', 'Pilotage des ventes', 'Motivation'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'CCI Formation',
    tags: ['management', 'commercial', 'équipe', 'animation']
  },
  {
    id: 'com-002',
    code: 'CPF-COM-002',
    titre: 'Concevoir la stratégie commerciale',
    description: 'Développer et mettre en œuvre une stratégie commerciale adaptée aux enjeux de l\'entreprise.',
    duree: 35,
    cout: 1400,
    certification: 'Certificat de responsable commercial',
    categorie: 'commerce',
    competences: ['Stratégie commerciale', 'Analyse de marché', 'Planification', 'Objectifs'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'CCI Formation',
    tags: ['stratégie', 'commercial', 'planification', 'objectifs']
  },
  {
    id: 'com-003',
    code: 'CPF-COM-003',
    titre: 'Développer ses ventes',
    description: 'Améliorer les techniques de vente et développer le chiffre d\'affaires.',
    duree: 21,
    cout: 900,
    certification: 'Certificat de vendeur professionnel',
    categorie: 'commerce',
    competences: ['Techniques de vente', 'Négociation', 'Relation client', 'Fidélisation'],
    niveau: 'intermédiaire',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'CCI Formation',
    tags: ['vente', 'négociation', 'client', 'fidélisation']
  },
  {
    id: 'com-004',
    code: 'CPF-COM-004',
    titre: 'Optimiser les échanges avec ses clients',
    description: 'Améliorer la relation client et optimiser les processus commerciaux.',
    duree: 14,
    cout: 700,
    certification: 'Certificat de relation client',
    categorie: 'commerce',
    competences: ['Relation client', 'Communication', 'Service client', 'Satisfaction'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'CCI Formation',
    tags: ['relation client', 'communication', 'service', 'satisfaction']
  },

  // Communication
  {
    id: 'comm-001',
    code: 'CPF-COMM-001',
    titre: 'Mettre en place un dispositif de communication',
    description: 'Concevoir et déployer un dispositif de communication efficace pour l\'entreprise.',
    duree: 28,
    cout: 1200,
    certification: 'Certificat de responsable communication',
    categorie: 'communication',
    competences: ['Dispositif de communication', 'Outils de communication', 'Déploiement', 'Mesure d\'impact'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Celsa Formation',
    tags: ['communication', 'dispositif', 'outils', 'déploiement']
  },
  {
    id: 'comm-002',
    code: 'CPF-COMM-002',
    titre: 'Établir la stratégie de communication de l\'entreprise',
    description: 'Définir et mettre en œuvre une stratégie de communication adaptée aux enjeux de l\'entreprise.',
    duree: 35,
    cout: 1400,
    certification: 'Certificat de responsable communication',
    categorie: 'communication',
    competences: ['Stratégie de communication', 'Plan de communication', 'Crises de communication', 'Positionnement'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Celsa Formation',
    tags: ['communication', 'stratégie', 'entreprise', 'positionnement']
  },
  {
    id: 'comm-003',
    code: 'CPF-COMM-003',
    titre: 'Gérer la communication de l\'entreprise',
    description: 'Piloter et optimiser la communication interne et externe de l\'entreprise.',
    duree: 21,
    cout: 1000,
    certification: 'Certificat de gestionnaire communication',
    categorie: 'communication',
    competences: ['Communication interne', 'Communication externe', 'Gestion de crise', 'Relations presse'],
    niveau: 'intermédiaire',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Celsa Formation',
    tags: ['communication', 'interne', 'externe', 'crise']
  },

  // Comptabilité
  {
    id: 'comp-001',
    code: 'CPF-COMP-001',
    titre: 'Comptabilité générale',
    description: 'Maîtriser les fondamentaux de la comptabilité générale et les écritures comptables.',
    duree: 42,
    cout: 1100,
    certification: 'Certificat de comptable',
    categorie: 'comptabilite',
    competences: ['Écritures comptables', 'Bilan', 'Compte de résultat', 'Grand livre'],
    niveau: 'débutant',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Expert Comptable Formation',
    tags: ['comptabilité', 'générale', 'écritures', 'bilan']
  },
  {
    id: 'comp-002',
    code: 'CPF-COMP-002',
    titre: 'Comptabilité avancée et fiscalité',
    description: 'Approfondir la comptabilité et maîtriser les aspects fiscaux de l\'entreprise.',
    duree: 35,
    cout: 1300,
    certification: 'Certificat de comptable fiscaliste',
    categorie: 'comptabilite',
    competences: ['Comptabilité avancée', 'Fiscalité', 'Déclarations fiscales', 'Optimisation fiscale'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Expert Comptable Formation',
    tags: ['comptabilité', 'avancée', 'fiscalité', 'déclarations']
  },
  {
    id: 'comp-003',
    code: 'CPF-COMP-003',
    titre: 'Analyse financière',
    description: 'Analyser les états financiers et les indicateurs de performance d\'une entreprise.',
    duree: 28,
    cout: 950,
    certification: 'Certificat d\'analyste financier',
    categorie: 'comptabilite',
    competences: ['Ratios financiers', 'Analyse de bilan', 'Indicateurs de performance', 'Diagnostic financier'],
    niveau: 'intermédiaire',
    modalite: 'distanciel',
    cpfEligible: true,
    certificateur: 'Dauphine Formation',
    tags: ['analyse', 'financière', 'ratios', 'diagnostic']
  },
  {
    id: 'comp-004',
    code: 'CPF-COMP-004',
    titre: 'Gestion de la trésorerie',
    description: 'Optimiser la gestion de la trésorerie et la planification financière.',
    duree: 21,
    cout: 800,
    certification: 'Certificat de gestionnaire de trésorerie',
    categorie: 'comptabilite',
    competences: ['Gestion de trésorerie', 'Prévision financière', 'Optimisation des flux', 'Financement'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'CCI Formation',
    tags: ['trésorerie', 'gestion', 'prévision', 'flux']
  },
  {
    id: 'comp-005',
    code: 'CPF-COMP-005',
    titre: 'Élaboration d\'un business plan',
    description: 'Créer et présenter un business plan complet pour un projet d\'entreprise.',
    duree: 35,
    cout: 1400,
    certification: 'Certificat de créateur de business plan',
    categorie: 'comptabilite',
    competences: ['Business plan', 'Étude de marché', 'Prévision financière', 'Présentation'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'CCI Formation',
    tags: ['business plan', 'création', 'étude de marché', 'prévision']
  },
  {
    id: 'comp-006',
    code: 'CPF-COMP-006',
    titre: 'Pilotage budgétaire et contrôle de gestion',
    description: 'Maîtriser les techniques de pilotage budgétaire et de contrôle de gestion.',
    duree: 28,
    cout: 1200,
    certification: 'Certificat de contrôleur de gestion',
    categorie: 'comptabilite',
    competences: ['Pilotage budgétaire', 'Contrôle de gestion', 'KPI', 'Reporting'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Cegos',
    tags: ['budget', 'contrôle', 'gestion', 'KPI']
  },

  // Digital
  {
    id: 'dig-001',
    code: 'CPF-DIG-001',
    titre: 'Développer sa présence en ligne',
    description: 'Créer et optimiser sa présence digitale sur les réseaux sociaux et le web.',
    duree: 21,
    cout: 800,
    certification: 'Certificat de community manager',
    categorie: 'digital',
    competences: ['Réseaux sociaux', 'Content marketing', 'E-réputation', 'Stratégie digitale'],
    niveau: 'intermédiaire',
    modalite: 'distanciel',
    cpfEligible: true,
    certificateur: 'Google Digital Academy',
    tags: ['digital', 'réseaux sociaux', 'web', 'stratégie']
  },
  {
    id: 'dig-002',
    code: 'CPF-DIG-002',
    titre: 'Améliorer son référencement naturel (SEO)',
    description: 'Optimiser le référencement naturel d\'un site web pour améliorer sa visibilité.',
    duree: 28,
    cout: 1000,
    certification: 'Certificat de référenceur SEO',
    categorie: 'digital',
    competences: ['SEO', 'Mots-clés', 'Contenu optimisé', 'Analytics'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Google Digital Academy',
    tags: ['SEO', 'référencement', 'optimisation', 'visibilité']
  },
  {
    id: 'dig-003',
    code: 'CPF-DIG-003',
    titre: 'Créer un site internet',
    description: 'Concevoir et développer un site web professionnel avec les outils modernes.',
    duree: 35,
    cout: 1200,
    certification: 'Certificat de développeur web',
    categorie: 'digital',
    competences: ['HTML/CSS', 'JavaScript', 'CMS', 'Responsive design'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'OpenClassrooms',
    tags: ['web', 'développement', 'site internet', 'design']
  },
  {
    id: 'dig-004',
    code: 'CPF-DIG-004',
    titre: 'Acquisition en ligne',
    description: 'Maîtriser les techniques d\'acquisition de clients en ligne et de marketing digital.',
    duree: 21,
    cout: 900,
    certification: 'Certificat de spécialiste acquisition digitale',
    categorie: 'digital',
    competences: ['Acquisition digitale', 'Publicité en ligne', 'Conversion', 'ROI'],
    niveau: 'intermédiaire',
    modalite: 'distanciel',
    cpfEligible: true,
    certificateur: 'Google Digital Academy',
    tags: ['acquisition', 'publicité', 'conversion', 'ROI']
  },
  {
    id: 'dig-005',
    code: 'CPF-DIG-005',
    titre: 'Améliorer la relation client en ligne',
    description: 'Optimiser l\'expérience client et la relation digitale avec les clients.',
    duree: 14,
    cout: 600,
    certification: 'Certificat de spécialiste relation client digitale',
    categorie: 'digital',
    competences: ['Relation client digitale', 'Chat', 'Email marketing', 'Personnalisation'],
    niveau: 'débutant',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'HubSpot Academy',
    tags: ['relation client', 'chat', 'email', 'personnalisation']
  },
  {
    id: 'dig-006',
    code: 'CPF-DIG-006',
    titre: 'Concevoir une stratégie marketing digitale',
    description: 'Développer une stratégie marketing digitale complète et performante.',
    duree: 35,
    cout: 1400,
    certification: 'Certificat de responsable marketing digital',
    categorie: 'digital',
    competences: ['Stratégie marketing digital', 'Planification', 'Mesure de performance', 'Optimisation'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'Google Digital Academy',
    tags: ['marketing digital', 'stratégie', 'performance', 'optimisation']
  },
  {
    id: 'dig-007',
    code: 'CPF-DIG-007',
    titre: 'Manager une équipe en mode projet',
    description: 'Développer les compétences de management d\'équipe dans un contexte de projets.',
    duree: 28,
    cout: 1200,
    certification: 'Certificat de chef de projet',
    categorie: 'digital',
    competences: ['Management de projet', 'Gestion d\'équipe', 'Méthodologies agiles', 'Communication'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'PMI France',
    tags: ['projet', 'management', 'équipe', 'agile']
  },
  {
    id: 'dig-008',
    code: 'CPF-DIG-008',
    titre: 'Piloter la communication stratégique',
    description: 'Diriger et optimiser la communication stratégique de l\'entreprise.',
    duree: 21,
    cout: 1000,
    certification: 'Certificat de directeur communication',
    categorie: 'digital',
    competences: ['Communication stratégique', 'Leadership', 'Crises de communication', 'Influence'],
    niveau: 'avancé',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Celsa Formation',
    tags: ['communication', 'stratégique', 'leadership', 'crise']
  },
  {
    id: 'dig-009',
    code: 'CPF-DIG-009',
    titre: 'Gérer un projet de développement de solution digitale',
    description: 'Piloter un projet de développement de solution digitale de A à Z.',
    duree: 42,
    cout: 1800,
    certification: 'Certificat de chef de projet digital',
    categorie: 'digital',
    competences: ['Gestion de projet digital', 'Développement', 'Tests', 'Déploiement'],
    niveau: 'expert',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'PMI France',
    tags: ['projet digital', 'développement', 'tests', 'déploiement']
  },

  // Formation professionnelle
  {
    id: 'form-001',
    code: 'CPF-FORM-001',
    titre: 'Lancer son activité d\'organisme de formation',
    description: 'Créer et développer son organisme de formation avec les aspects réglementaires.',
    duree: 42,
    cout: 1800,
    certification: 'Certificat de formateur professionnel',
    categorie: 'formation',
    competences: ['Réglementation formation', 'Création d\'entreprise', 'Pédagogie'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'AFNOR Formation',
    tags: ['formation', 'entrepreneuriat', 'pédagogie']
  },

  // Informatique / Numérique
  {
    id: 'info-001',
    code: 'CPF-INFO-001',
    titre: 'Piloter des projets numériques',
    description: 'Manager des projets de transformation digitale et d\'innovation technologique.',
    duree: 35,
    cout: 1500,
    certification: 'Certificat de chef de projet digital',
    categorie: 'informatique',
    competences: ['Gestion de projet', 'Transformation digitale', 'Innovation'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'CNAM',
    tags: ['projet', 'digital', 'innovation']
  },

  // Langues
  {
    id: 'lang-001',
    code: 'CPF-LANG-001',
    titre: 'Anglais professionnel',
    description: 'Développer ses compétences en anglais dans un contexte professionnel.',
    duree: 28,
    cout: 700,
    certification: 'Certificat d\'anglais professionnel',
    categorie: 'langues',
    competences: ['Anglais oral', 'Anglais écrit', 'Communication professionnelle'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'British Council',
    tags: ['anglais', 'professionnel', 'communication']
  },
  {
    id: 'lang-002',
    code: 'CPF-LANG-002',
    titre: 'Espagnol des affaires',
    description: 'Maîtriser l\'espagnol dans le contexte des affaires et du commerce international.',
    duree: 21,
    cout: 600,
    certification: 'Certificat d\'espagnol des affaires',
    categorie: 'langues',
    competences: ['Espagnol commercial', 'Négociation', 'Culture hispanique'],
    niveau: 'intermédiaire',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Institut Cervantes',
    tags: ['espagnol', 'affaires', 'international']
  },

  // Management
  {
    id: 'mgmt-001',
    code: 'CPF-MGMT-001',
    titre: 'Manager une équipe',
    description: 'Développer les compétences de leadership et de management d\'équipe.',
    duree: 28,
    cout: 1200,
    certification: 'Certificat de manager',
    categorie: 'management',
    competences: ['Leadership', 'Gestion d\'équipe', 'Communication managériale'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'HEC Executive Education',
    tags: ['management', 'leadership', 'équipe']
  },
  {
    id: 'mgmt-002',
    code: 'CPF-MGMT-002',
    titre: 'Conduire le changement',
    description: 'Accompagner les transformations organisationnelles et les changements.',
    duree: 21,
    cout: 1000,
    certification: 'Certificat de conduite du changement',
    categorie: 'management',
    competences: ['Changement organisationnel', 'Accompagnement', 'Résistance au changement'],
    niveau: 'avancé',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'Cegos',
    tags: ['changement', 'transformation', 'organisation']
  },

  // Marketing
  {
    id: 'mkt-001',
    code: 'CPF-MKT-001',
    titre: 'Établir la stratégie marketing de l\'entreprise',
    description: 'Définir et mettre en œuvre une stratégie marketing adaptée aux enjeux business.',
    duree: 35,
    cout: 1400,
    certification: 'Certificat de responsable marketing',
    categorie: 'marketing',
    competences: ['Stratégie marketing', 'Analyse de marché', 'Positionnement'],
    niveau: 'avancé',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'ESCP Business School',
    tags: ['marketing', 'stratégie', 'business']
  },

  // Ressources Humaines
  {
    id: 'rh-001',
    code: 'CPF-RH-001',
    titre: 'Gérer le recrutement',
    description: 'Maîtriser les techniques de recrutement et de sélection de candidats.',
    duree: 21,
    cout: 900,
    certification: 'Certificat de recruteur',
    categorie: 'rh',
    competences: ['Techniques de recrutement', 'Entretiens', 'Sélection'],
    niveau: 'intermédiaire',
    modalite: 'hybride',
    cpfEligible: true,
    certificateur: 'APEC Formation',
    tags: ['recrutement', 'RH', 'sélection']
  },
  {
    id: 'rh-002',
    code: 'CPF-RH-002',
    titre: 'Gérer l\'administration du personnel',
    description: 'Maîtriser les aspects administratifs et réglementaires de la gestion du personnel.',
    duree: 28,
    cout: 1100,
    certification: 'Certificat d\'administrateur RH',
    categorie: 'rh',
    competences: ['Droit du travail', 'Administration', 'Paie'],
    niveau: 'intermédiaire',
    modalite: 'présentiel',
    cpfEligible: true,
    certificateur: 'CNFCE',
    tags: ['administration', 'personnel', 'réglementaire']
  }
];

export const getFormationsByCategorie = (categorieId: string) => {
  return formations.filter(formation => formation.categorie === categorieId);
};

export const searchFormations = (query: string, filtres?: any) => {
  let results = formations;

  // Recherche textuelle
  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter(formation => 
      formation.titre.toLowerCase().includes(searchTerm) ||
      formation.description.toLowerCase().includes(searchTerm) ||
      formation.competences.some(comp => comp.toLowerCase().includes(searchTerm)) ||
      formation.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Filtres
  if (filtres) {
    if (filtres.categorie) {
      results = results.filter(formation => formation.categorie === filtres.categorie);
    }
    if (filtres.niveau) {
      results = results.filter(formation => formation.niveau === filtres.niveau);
    }
    if (filtres.modalite) {
      results = results.filter(formation => formation.modalite === filtres.modalite);
    }
    if (filtres.prixMin !== undefined) {
      results = results.filter(formation => formation.cout >= filtres.prixMin);
    }
    if (filtres.prixMax !== undefined) {
      results = results.filter(formation => formation.cout <= filtres.prixMax);
    }
    if (filtres.dureeMin !== undefined) {
      results = results.filter(formation => formation.duree >= filtres.dureeMin);
    }
    if (filtres.dureeMax !== undefined) {
      results = results.filter(formation => formation.duree <= filtres.dureeMax);
    }
    if (filtres.cpfEligible !== null) {
      results = results.filter(formation => formation.cpfEligible === filtres.cpfEligible);
    }
  }

  return results;
};
