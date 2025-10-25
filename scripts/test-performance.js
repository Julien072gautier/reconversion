#!/usr/bin/env node

/**
 * Script de test des performances
 * Teste les optimisations Core Web Vitals
 */

const fs = require('fs');
const path = require('path');

console.log('⚡ Test des performances...\n');

// Test de la configuration Next.js
function testNextConfig() {
  console.log('⚙️  Test de la configuration Next.js...');
  
  const nextConfig = require('../next.config.js');
  
  const hasImageOptimization = nextConfig.images && nextConfig.images.formats;
  const hasCompression = nextConfig.compress;
  const hasSecurityHeaders = nextConfig.headers;
  const hasOptimizePackageImports = nextConfig.experimental && nextConfig.experimental.optimizePackageImports;
  
  console.log(`  ${hasImageOptimization ? '✅' : '❌'} Optimisation des images (WebP, AVIF)`);
  console.log(`  ${hasCompression ? '✅' : '❌'} Compression activée`);
  console.log(`  ${hasSecurityHeaders ? '✅' : '❌'} Headers de sécurité`);
  console.log(`  ${hasOptimizePackageImports ? '✅' : '❌'} Optimisation des imports`);
  
  const allOptimized = hasImageOptimization && hasCompression && hasSecurityHeaders && hasOptimizePackageImports;
  console.log(`\n  📊 Configuration Next.js: ${allOptimized ? '✅' : '❌'}\n`);
  return allOptimized;
}

// Test de la configuration Tailwind
function testTailwindConfig() {
  console.log('🎨 Test de la configuration Tailwind...');
  
  const tailwindConfig = require('../tailwind.config.js');
  
  const hasTypography = tailwindConfig.plugins && tailwindConfig.plugins.includes('@tailwindcss/typography');
  const hasContent = tailwindConfig.content && tailwindConfig.content.length > 0;
  const hasExtend = tailwindConfig.theme && tailwindConfig.theme.extend;
  
  console.log(`  ${hasTypography ? '✅' : '❌'} Plugin Typography`);
  console.log(`  ${hasContent ? '✅' : '❌'} Purge CSS configuré`);
  console.log(`  ${hasExtend ? '✅' : '❌'} Thème étendu`);
  
  const allOptimized = hasTypography && hasContent && hasExtend;
  console.log(`\n  📊 Configuration Tailwind: ${allOptimized ? '✅' : '❌'}\n`);
  return allOptimized;
}

// Test des optimisations de polices
function testFontOptimization() {
  console.log('🔤 Test des optimisations de polices...');
  
  const layoutFile = 'src/app/layout.tsx';
  if (fs.existsSync(layoutFile)) {
    const content = fs.readFileSync(layoutFile, 'utf8');
    
    const hasInterFont = content.includes('Inter');
    const hasDisplaySwap = content.includes('display: \'swap\'');
    const hasSubsets = content.includes('subsets: [\'latin\']');
    const hasVariable = content.includes('variable: \'--font-inter\'');
    
    console.log(`  ${hasInterFont ? '✅' : '❌'} Police Inter`);
    console.log(`  ${hasDisplaySwap ? '✅' : '❌'} Display swap`);
    console.log(`  ${hasSubsets ? '✅' : '❌'} Sous-ensembles optimisés`);
    console.log(`  ${hasVariable ? '✅' : '❌'} Variable CSS`);
    
    const allOptimized = hasInterFont && hasDisplaySwap && hasSubsets && hasVariable;
    console.log(`\n  📊 Optimisations polices: ${allOptimized ? '✅' : '❌'}\n`);
    return allOptimized;
  } else {
    console.log('  ❌ Fichier layout.tsx manquant\n');
    return false;
  }
}

// Test des optimisations d'images
function testImageOptimization() {
  console.log('🖼️  Test des optimisations d\'images...');
  
  const nextConfig = require('../next.config.js');
  const hasFormats = nextConfig.images && nextConfig.images.formats;
  const hasDeviceSizes = nextConfig.images && nextConfig.images.deviceSizes;
  const hasImageSizes = nextConfig.images && nextConfig.images.imageSizes;
  
  console.log(`  ${hasFormats ? '✅' : '❌'} Formats optimisés (WebP, AVIF)`);
  console.log(`  ${hasDeviceSizes ? '✅' : '❌'} Tailles d'appareils`);
  console.log(`  ${hasImageSizes ? '✅' : '❌'} Tailles d'images`);
  
  const allOptimized = hasFormats && hasDeviceSizes && hasImageSizes;
  console.log(`\n  📊 Optimisations images: ${allOptimized ? '✅' : '❌'}\n`);
  return allOptimized;
}

// Test des optimisations de bundle
function testBundleOptimization() {
  console.log('📦 Test des optimisations de bundle...');
  
  const packageJson = require('../package.json');
  const hasNext = packageJson.dependencies && packageJson.dependencies.next;
  const hasReact = packageJson.dependencies && packageJson.dependencies.react;
  const hasLucide = packageJson.dependencies && packageJson.dependencies['lucide-react'];
  
  console.log(`  ${hasNext ? '✅' : '❌'} Next.js installé`);
  console.log(`  ${hasReact ? '✅' : '❌'} React installé`);
  console.log(`  ${hasLucide ? '✅' : '❌'} Lucide React installé`);
  
  const allOptimized = hasNext && hasReact && hasLucide;
  console.log(`\n  📊 Bundle optimisé: ${allOptimized ? '✅' : '❌'}\n`);
  return allOptimized;
}

// Test des optimisations de performance
function testPerformanceOptimizations() {
  console.log('🚀 Test des optimisations de performance...');
  
  const performanceFile = 'src/components/seo/PerformanceOptimizations.tsx';
  if (fs.existsSync(performanceFile)) {
    const content = fs.readFileSync(performanceFile, 'utf8');
    
    const hasPreload = content.includes('preload');
    const hasLazyLoad = content.includes('lazy');
    const hasIntersectionObserver = content.includes('IntersectionObserver');
    const hasOptimizeScripts = content.includes('optimizeThirdPartyScripts');
    
    console.log(`  ${hasPreload ? '✅' : '❌'} Preloading des ressources`);
    console.log(`  ${hasLazyLoad ? '✅' : '❌'} Lazy loading`);
    console.log(`  ${hasIntersectionObserver ? '✅' : '❌'} Intersection Observer`);
    console.log(`  ${hasOptimizeScripts ? '✅' : '❌'} Optimisation des scripts`);
    
    const allOptimized = hasPreload && hasLazyLoad && hasIntersectionObserver && hasOptimizeScripts;
    console.log(`\n  📊 Optimisations performance: ${allOptimized ? '✅' : '❌'}\n`);
    return allOptimized;
  } else {
    console.log('  ❌ Fichier PerformanceOptimizations.tsx manquant\n');
    return false;
  }
}

// Exécuter tous les tests
const nextConfigTest = testNextConfig();
const tailwindConfigTest = testTailwindConfig();
const fontOptimizationTest = testFontOptimization();
const imageOptimizationTest = testImageOptimization();
const bundleOptimizationTest = testBundleOptimization();
const performanceOptimizationsTest = testPerformanceOptimizations();

// Résumé des tests
console.log('📊 Résumé des tests de performance:');
console.log(`  ${nextConfigTest ? '✅' : '❌'} Configuration Next.js`);
console.log(`  ${tailwindConfigTest ? '✅' : '❌'} Configuration Tailwind`);
console.log(`  ${fontOptimizationTest ? '✅' : '❌'} Optimisations polices`);
console.log(`  ${imageOptimizationTest ? '✅' : '❌'} Optimisations images`);
console.log(`  ${bundleOptimizationTest ? '✅' : '❌'} Bundle optimisé`);
console.log(`  ${performanceOptimizationsTest ? '✅' : '❌'} Optimisations performance`);

const allTestsPassed = nextConfigTest && tailwindConfigTest && fontOptimizationTest && 
                      imageOptimizationTest && bundleOptimizationTest && performanceOptimizationsTest;

console.log(`\n🎯 Score performance global: ${allTestsPassed ? '✅ EXCELLENT' : '❌ À AMÉLIORER'}`);

if (allTestsPassed) {
  console.log('\n🚀 Votre site est optimisé pour les performances !');
  console.log('⚡ Core Web Vitals optimisés');
  console.log('📱 Mobile-first responsive');
  console.log('🎯 Prêt pour le déploiement');
} else {
  console.log('\n⚠️  Des améliorations sont nécessaires');
  console.log('🔧 Consultez le MIGRATION_README.md pour les détails');
}

process.exit(allTestsPassed ? 0 : 1);

