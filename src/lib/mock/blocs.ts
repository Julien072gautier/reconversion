import type { BlocRNCP } from '@/types/reconversion';

export const blocsRNCP: BlocRNCP[] = [
  {
    id: 'bloc-001',
    rncpCode: 'RNCP12345',
    title: 'Développement d\'applications web frontend',
    certificateur: 'Simplon',
    dureeHeures: 120,
    competences: [
      'Maîtriser HTML5 et CSS3',
      'Développer avec JavaScript ES6+',
      'Utiliser React.js et Vue.js',
      'Intégrer des API REST',
      'Optimiser les performances web'
    ],
    cpfEligible: true
  },
  {
    id: 'bloc-002',
    rncpCode: 'RNCP12346',
    title: 'Développement d\'applications web backend',
    certificateur: 'OpenClassrooms',
    dureeHeures: 150,
    competences: [
      'Développer avec Node.js',
      'Utiliser Express.js et Fastify',
      'Gérer les bases de données SQL',
      'Implémenter l\'authentification',
      'Déployer des applications cloud'
    ],
    cpfEligible: true
  },
  {
    id: 'bloc-003',
    rncpCode: 'RNCP12347',
    title: 'Data Science et Machine Learning',
    certificateur: 'DataScientest',
    dureeHeures: 200,
    competences: [
      'Analyser des données avec Python',
      'Utiliser pandas et NumPy',
      'Implémenter des algorithmes ML',
      'Visualiser des données',
      'Déployer des modèles en production'
    ],
    cpfEligible: true
  },
  {
    id: 'bloc-004',
    rncpCode: 'RNCP12348',
    title: 'Cybersécurité et protection des données',
    certificateur: 'ANSSI',
    dureeHeures: 180,
    competences: [
      'Analyser les vulnérabilités',
      'Implémenter des mesures de sécurité',
      'Auditer des systèmes d\'information',
      'Gérer les incidents de sécurité',
      'Concevoir des architectures sécurisées'
    ],
    cpfEligible: true
  },
  {
    id: 'bloc-005',
    rncpCode: 'RNCP12349',
    title: 'DevOps et infrastructure cloud',
    certificateur: 'AWS',
    dureeHeures: 160,
    competences: [
      'Automatiser le déploiement',
      'Gérer les conteneurs Docker',
      'Utiliser Kubernetes',
      'Monitorer les applications',
      'Optimiser les coûts cloud'
    ],
    cpfEligible: true
  },
  {
    id: 'bloc-006',
    rncpCode: 'RNCP12350',
    title: 'Intelligence artificielle et deep learning',
    certificateur: 'DeepLearning.AI',
    dureeHeures: 220,
    competences: [
      'Implémenter des réseaux de neurones',
      'Utiliser TensorFlow et PyTorch',
      'Développer des modèles de vision',
      'Traiter le langage naturel',
      'Déployer des solutions IA'
    ],
    cpfEligible: true
  },
  {
    id: 'bloc-007',
    rncpCode: 'RNCP12351',
    title: 'Développement mobile cross-platform',
    certificateur: 'React Native',
    dureeHeures: 140,
    competences: [
      'Développer avec React Native',
      'Utiliser Flutter et Dart',
      'Intégrer des APIs mobiles',
      'Optimiser les performances',
      'Publier sur les stores'
    ],
    cpfEligible: true
  },
  {
    id: 'bloc-008',
    rncpCode: 'RNCP12352',
    title: 'Blockchain et technologies décentralisées',
    certificateur: 'ConsenSys',
    dureeHeures: 190,
    competences: [
      'Développer des smart contracts',
      'Utiliser Solidity et Web3',
      'Implémenter des DApps',
      'Gérer les tokens et NFTs',
      'Sécuriser les applications blockchain'
    ],
    cpfEligible: true
  }
];

export function filterBlocs(query: string): BlocRNCP[] {
  if (!query.trim()) return blocsRNCP;
  
  return blocsRNCP.filter(bloc => 
    bloc.title.toLowerCase().includes(query.toLowerCase()) ||
    bloc.certificateur.toLowerCase().includes(query.toLowerCase()) ||
    bloc.competences.some(comp => 
      comp.toLowerCase().includes(query.toLowerCase())
    )
  );
}

export function getBlocById(id: string): BlocRNCP | undefined {
  return blocsRNCP.find(bloc => bloc.id === id);
}

