#!/bin/bash

# Script de démarrage rapide pour Next.js
echo "🚀 Démarrage rapide de l'application Next.js..."

# Vérifier les prérequis
echo "📋 Vérification des prérequis..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer depuis https://nodejs.org/"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez l'installer depuis https://nodejs.org/"
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

echo "✅ Dépendances installées"

# Vérification TypeScript
echo "🔍 Vérification TypeScript..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "❌ Erreurs TypeScript détectées"
    exit 1
fi

echo "✅ TypeScript vérifié"

# Linting
echo "🧹 Vérification du code..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  Avertissements de linting détectés"
fi

echo "✅ Code vérifié"

# Test des optimisations
echo "🔍 Test des optimisations..."
node scripts/test-all.js

if [ $? -eq 0 ]; then
    echo "✅ Tous les tests passés"
else
    echo "⚠️  Certains tests ont échoué"
fi

# Build de développement
echo "🏗️  Build de développement..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Échec du build"
    exit 1
fi

echo "✅ Build réussi"

# Démarrage du serveur de développement
echo "🚀 Démarrage du serveur de développement..."
echo "📱 Votre application est accessible sur: http://localhost:3000"
echo "🔍 Ouvrez votre navigateur et testez les optimisations SEO !"

npm run dev

