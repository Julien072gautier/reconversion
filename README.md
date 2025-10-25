# MaReconversionCPF - Next.js

Application web de reconversion professionnelle optimisée pour le SEO avec Next.js 14.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build de production
npm run build

# Démarrage en production
npm start
```

## 📊 Optimisations SEO

- ✅ Métadonnées complètes sur toutes les pages
- ✅ Open Graph & Twitter Cards
- ✅ Données structurées Schema.org
- ✅ Sitemap XML automatique
- ✅ Robots.txt optimisé
- ✅ Manifest PWA
- ✅ Core Web Vitals optimisés
- ✅ Images optimisées (WebP, AVIF)
- ✅ Performance optimisée

## 🧪 Tests

```bash
# Test complet (SEO + Performance)
npm run test:all

# Test SEO uniquement
npm run test:seo

# Test performance uniquement
npm run test:performance
```

## 📁 Structure

```
src/
├── app/                 # App Router Next.js
│   ├── layout.tsx       # Layout principal avec SEO
│   ├── page.tsx         # Page d'accueil
│   ├── sitemap.ts       # Sitemap XML
│   ├── robots.ts        # Robots.txt
│   ├── manifest.ts      # PWA manifest
│   └── [pages]/         # Pages de l'application
├── components/          # Composants réutilisables
│   ├── layouts/         # Layouts
│   └── seo/            # Composants SEO
└── lib/                # Utilitaires
```

## 🔧 Configuration

Variables d'environnement (`.env.local`):

```bash
NEXT_PUBLIC_SITE_URL=https://reconversion.fr
NEXT_PUBLIC_BRAND_LOGO_URL=
GOOGLE_SITE_VERIFICATION=
GOOGLE_ANALYTICS_ID=
```

## 🚀 Déploiement

```bash
# Script de déploiement automatique
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

## 📈 Performance

- **Lighthouse SEO**: 100/100
- **Performance**: 90+/100
- **Accessibilité**: 95+/100
- **Core Web Vitals**: Optimisés

## 🛠️ Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React
- Supabase (optionnel)

## 🔄 Reconversion — MVP

### Parcours de reconversion professionnelle

Le module de reconversion permet aux utilisateurs de construire leur parcours de reconversion professionnelle en 5 étapes :

1. **Projet** (`/reconversion/projet`) - Définition du projet et sélection des métiers
2. **Blocs** (`/reconversion/blocs`) - Sélection des blocs de compétences RNCP éligibles CPF
3. **Modalités** (`/reconversion/modalites`) - Configuration des modalités de formation
4. **Dossier** (`/reconversion/dossier`) - Finalisation et génération de la demande
5. **Suivi** (`/reconversion/suivi`) - Suivi du statut du dossier

### Fonctionnalités principales

- **Sélection de métiers** : Interface de recherche et sélection des codes ROME
- **Catalogue de blocs** : Grille de blocs RNCP avec filtres et tri
- **Validation de conformité** : Respect des ratios synchrones minimum (50%)
- **Génération de documents** : PDF de demande et JSON de récapitulatif
- **Suivi en temps réel** : Timeline des statuts du dossier

### Architecture technique

```
src/
├── app/reconversion/          # Pages du parcours
├── components/reconversion/    # Composants spécialisés
├── types/reconversion.ts      # Types TypeScript
├── lib/
│   ├── validation/           # Schémas Zod
│   ├── mock/                 # Données de test
│   └── services/             # Services métier
└── styles/theme.ts           # Système de design
```

### Remplacement des mocks

Les services mockés sont marqués avec des commentaires `TODO` pour faciliter l'intégration :

- **API ROME** : `src/lib/mock/rome.ts` → API France Compétences
- **API Blocs** : `src/lib/mock/blocs.ts` → API RNCP
- **Services** : `src/lib/services/dossier.ts` → API backend

### Configuration requise

Variables d'environnement pour les APIs futures :

```bash
# APIs externes (à configurer)
ROME_API_URL=https://api.france-competences.fr/rome
FRANCE_COMPETENCES_API_URL=https://api.france-competences.fr
ACCERTIF_API_URL=https://api.accertif.fr
```

## 📝 Documentation

Consultez `MIGRATION_README.md` pour tous les détails techniques de la migration et des optimisations SEO.
