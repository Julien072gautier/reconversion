#!/bin/bash

# Script de build pour Next.js
echo "🚀 Building Next.js application..."

# Vérifier les variables d'environnement
if [ -z "$NEXT_PUBLIC_SITE_URL" ]; then
    echo "⚠️  Warning: NEXT_PUBLIC_SITE_URL not set"
fi

# Build de l'application
npm run build

# Vérifier le build
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📊 Bundle analysis:"
    npx @next/bundle-analyzer
else
    echo "❌ Build failed!"
    exit 1
fi

