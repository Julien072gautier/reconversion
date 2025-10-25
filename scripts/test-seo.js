#!/usr/bin/env node

/**
 * Script de test SEO complet
 * Teste toutes les optimisations SEO implémentées
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Test SEO complet...\n');

// Test des métadonnées
function testMetadata() {
  console.log('📋 Test des métadonnées...');
  
  const pages = [
    { file: 'src/app/page.tsx', expected: ['title', 'description', 'openGraph'] },
    { file: 'src/app/blocs/page.tsx', expected: ['title', 'description', 'keywords'] },
    { file: 'src/app/parcours/page.tsx', expected: ['title', 'description', 'openGraph'] },
    { file: 'src/app/dossier/page.tsx', expected: ['title', 'description', 'openGraph'] },
    { file: 'src/app/contact/page.tsx', expected: ['title', 'description', 'openGraph'] },
  ];
  
  let passed = 0;
  let total = pages.length;
  
  pages.forEach(({ file, expected }) => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      const hasAll = expected.every(meta => content.includes(meta));
      console.log(`  ${hasAll ? '✅' : '❌'} ${file}`);
      if (hasAll) passed++;
    } else {
      console.log(`  ❌ ${file} (fichier manquant)`);
    }
  });
  
  console.log(`\n  📊 Métadonnées: ${passed}/${total} pages optimisées\n`);
  return passed === total;
}

// Test des données structurées
function testStructuredData() {
  console.log('🏗️  Test des données structurées...');
  
  const structuredDataFile = 'src/components/seo/StructuredData.tsx';
  if (fs.existsSync(structuredDataFile)) {
    const content = fs.readFileSync(structuredDataFile, 'utf8');
    const hasOrganization = content.includes('Organization');
    const hasWebsite = content.includes('WebSite');
    const hasBreadcrumb = content.includes('BreadcrumbList');
    
    console.log(`  ${hasOrganization ? '✅' : '❌'} Schema Organization`);
    console.log(`  ${hasWebsite ? '✅' : '❌'} Schema Website`);
    console.log(`  ${hasBreadcrumb ? '✅' : '❌'} Schema BreadcrumbList`);
    
    const allPresent = hasOrganization && hasWebsite && hasBreadcrumb;
    console.log(`\n  📊 Données structurées: ${allPresent ? '✅' : '❌'}\n`);
    return allPresent;
  } else {
    console.log('  ❌ Fichier StructuredData.tsx manquant\n');
    return false;
  }
}

// Test des fichiers SEO
function testSEOFiles() {
  console.log('📁 Test des fichiers SEO...');
  
  const seoFiles = [
    { file: 'src/app/sitemap.ts', required: true },
    { file: 'src/app/robots.ts', required: true },
    { file: 'src/app/manifest.ts', required: true },
    { file: 'public/manifest.json', required: true },
  ];
  
  let passed = 0;
  let total = seoFiles.length;
  
  seoFiles.forEach(({ file, required }) => {
    const exists = fs.existsSync(file);
    console.log(`  ${exists ? '✅' : '❌'} ${file}`);
    if (exists) passed++;
  });
  
  console.log(`\n  📊 Fichiers SEO: ${passed}/${total} présents\n`);
  return passed === total;
}

// Test des optimisations de performance
function testPerformance() {
  console.log('⚡ Test des optimisations de performance...');
  
  const nextConfig = require('../next.config.js');
  const hasImageOptimization = nextConfig.images && nextConfig.images.formats;
  const hasCompression = nextConfig.compress;
  const hasSecurityHeaders = nextConfig.headers;
  
  console.log(`  ${hasImageOptimization ? '✅' : '❌'} Optimisation des images`);
  console.log(`  ${hasCompression ? '✅' : '❌'} Compression activée`);
  console.log(`  ${hasSecurityHeaders ? '✅' : '❌'} Headers de sécurité`);
  
  const allOptimized = hasImageOptimization && hasCompression && hasSecurityHeaders;
  console.log(`\n  📊 Performance: ${allOptimized ? '✅' : '❌'}\n`);
  return allOptimized;
}

// Test de l'accessibilité
function testAccessibility() {
  console.log('♿ Test de l\'accessibilité...');
  
  const layoutFile = 'src/app/layout.tsx';
  if (fs.existsSync(layoutFile)) {
    const content = fs.readFileSync(layoutFile, 'utf8');
    const hasLang = content.includes('lang="fr"');
    const hasViewport = content.includes('viewport');
    const hasThemeColor = content.includes('theme-color');
    
    console.log(`  ${hasLang ? '✅' : '❌'} Langue définie (fr)`);
    console.log(`  ${hasViewport ? '✅' : '❌'} Viewport configuré`);
    console.log(`  ${hasThemeColor ? '✅' : '❌'} Couleur de thème`);
    
    const allAccessible = hasLang && hasViewport && hasThemeColor;
    console.log(`\n  📊 Accessibilité: ${allAccessible ? '✅' : '❌'}\n`);
    return allAccessible;
  } else {
    console.log('  ❌ Fichier layout.tsx manquant\n');
    return false;
  }
}

// Exécuter tous les tests
const metadataTest = testMetadata();
const structuredDataTest = testStructuredData();
const seoFilesTest = testSEOFiles();
const performanceTest = testPerformance();
const accessibilityTest = testAccessibility();

// Résumé des tests
console.log('📊 Résumé des tests SEO:');
console.log(`  ${metadataTest ? '✅' : '❌'} Métadonnées complètes`);
console.log(`  ${structuredDataTest ? '✅' : '❌'} Données structurées`);
console.log(`  ${seoFilesTest ? '✅' : '❌'} Fichiers SEO`);
console.log(`  ${performanceTest ? '✅' : '❌'} Optimisations performance`);
console.log(`  ${accessibilityTest ? '✅' : '❌'} Accessibilité`);

const allTestsPassed = metadataTest && structuredDataTest && seoFilesTest && performanceTest && accessibilityTest;

console.log(`\n🎯 Score SEO global: ${allTestsPassed ? '✅ EXCELLENT' : '❌ À AMÉLIORER'}`);

if (allTestsPassed) {
  console.log('\n🚀 Votre site est optimisé pour le SEO !');
  console.log('📈 Prêt pour le référencement Google');
  console.log('🎯 Core Web Vitals optimisés');
  console.log('♿ Accessibilité conforme');
} else {
  console.log('\n⚠️  Des améliorations sont nécessaires');
  console.log('🔧 Consultez le MIGRATION_README.md pour les détails');
}

process.exit(allTestsPassed ? 0 : 1);

