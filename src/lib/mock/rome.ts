import type { RomeCode } from '@/types/reconversion';

export const romeCodes: RomeCode[] = [
  { code: 'M1805', label: 'Études et développement informatique' },
  { code: 'M1806', label: 'Expertise et support en systèmes d\'information' },
  { code: 'M1807', label: 'Production et exploitation de systèmes d\'information' },
  { code: 'M1808', label: 'Administration et maintenance de systèmes d\'information' },
  { code: 'M1809', label: 'Études et développement de systèmes d\'information' },
  { code: 'M1810', label: 'Conception et développement d\'applications' },
  { code: 'M1811', label: 'Conception et développement de sites web' },
  { code: 'M1812', label: 'Conception et développement de jeux vidéo' },
  { code: 'M1813', label: 'Conception et développement de logiciels' },
  { code: 'M1814', label: 'Conception et développement de systèmes embarqués' },
  { code: 'M1815', label: 'Conception et développement de systèmes temps réel' },
  { code: 'M1816', label: 'Conception et développement de systèmes distribués' },
  { code: 'M1817', label: 'Conception et développement de systèmes mobiles' },
  { code: 'M1818', label: 'Conception et développement de systèmes cloud' },
  { code: 'M1819', label: 'Conception et développement de systèmes IoT' },
  { code: 'M1820', label: 'Conception et développement de systèmes IA' },
  { code: 'M1821', label: 'Conception et développement de systèmes blockchain' },
  { code: 'M1822', label: 'Conception et développement de systèmes cybersécurité' },
  { code: 'M1823', label: 'Conception et développement de systèmes DevOps' },
  { code: 'M1824', label: 'Conception et développement de systèmes data' },
  { code: 'M1825', label: 'Conception et développement de systèmes analytics' },
  { code: 'M1826', label: 'Conception et développement de systèmes ML' },
  { code: 'M1827', label: 'Conception et développement de systèmes NLP' },
  { code: 'M1828', label: 'Conception et développement de systèmes computer vision' },
  { code: 'M1829', label: 'Conception et développement de systèmes robotics' },
  { code: 'M1830', label: 'Conception et développement de systèmes automation' },
  { code: 'M1831', label: 'Conception et développement de systèmes RPA' },
  { code: 'M1832', label: 'Conception et développement de systèmes low-code' },
  { code: 'M1833', label: 'Conception et développement de systèmes no-code' },
  { code: 'M1834', label: 'Conception et développement de systèmes citizen development' },
  { code: 'M1835', label: 'Conception et développement de systèmes digital transformation' },
  { code: 'M1836', label: 'Conception et développement de systèmes agile' },
  { code: 'M1837', label: 'Conception et développement de systèmes scrum' },
  { code: 'M1838', label: 'Conception et développement de systèmes kanban' },
  { code: 'M1839', label: 'Conception et développement de systèmes lean' },
  { code: 'M1840', label: 'Conception et développement de systèmes six sigma' },
  { code: 'M1841', label: 'Conception et développement de systèmes ITIL' },
  { code: 'M1842', label: 'Conception et développement de systèmes COBIT' },
  { code: 'M1843', label: 'Conception et développement de systèmes ISO 27001' },
  { code: 'M1844', label: 'Conception et développement de systèmes GDPR' },
  { code: 'M1845', label: 'Conception et développement de systèmes RGPD' },
  { code: 'M1846', label: 'Conception et développement de systèmes compliance' },
  { code: 'M1847', label: 'Conception et développement de systèmes governance' },
  { code: 'M1848', label: 'Conception et développement de systèmes risk management' },
  { code: 'M1849', label: 'Conception et développement de systèmes security' },
  { code: 'M1850', label: 'Conception et développement de systèmes privacy' }
];

export function filterRomeCodes(query: string): RomeCode[] {
  if (!query.trim()) return romeCodes.slice(0, 10);
  
  return romeCodes
    .filter(rome => 
      rome.label.toLowerCase().includes(query.toLowerCase()) ||
      rome.code.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 10);
}

