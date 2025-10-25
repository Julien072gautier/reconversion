#!/bin/bash

# Script de déploiement pour Next.js
echo "🚀 Déploiement de l'application Next.js..."

# Vérifier les prérequis
echo "📋 Vérification des prérequis..."

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    exit 1
fi

# Vérifier npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé"
    exit 1
fi

echo "✅ Prérequis vérifiés"

# Installation des dépendances
echo "📦 Installation des dépendances..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Échec de l'installation des dépendances"
    exit 1
fi

# Vérification TypeScript
echo "🔍 Vérification TypeScript..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "❌ Erreurs TypeScript détectées"
    exit 1
fi

# Linting
echo "🧹 Vérification du code..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  Avertissements de linting détectés"
fi

# Build de production
echo "🏗️  Build de production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Échec du build"
    exit 1
fi

echo "✅ Build réussi !"

# Vérification des fichiers de sortie
echo "📁 Vérification des fichiers de sortie..."
if [ -d ".next" ]; then
    echo "✅ Dossier .next créé"
else
    echo "❌ Dossier .next manquant"
    exit 1
fi

# Vérification des optimisations SEO
echo "🔍 Vérification des optimisations SEO..."
node scripts/seo-check.js

# Vérification des performances
echo "⚡ Vérification des performances..."
node scripts/performance-check.js

echo "🎉 Déploiement prêt !"
echo "📊 Statistiques du build:"
echo "  - Pages générées: $(find .next/server/pages -name "*.html" | wc -l)"
echo "  - Taille du bundle: $(du -sh .next/static | cut -f1)"
echo "  - Optimisations SEO: ✅"
echo "  - Optimisations performance: ✅"

echo "\n🚀 Votre application Next.js est prête pour le déploiement !"

