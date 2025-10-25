#!/usr/bin/env node

/**
 * Script de test complet
 * Teste toutes les optimisations SEO et de performance
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧪 Test complet de l\'application Next.js...\n');

// Fonction pour exécuter un test
function runTest(testName, testFile) {
  console.log(`🔍 Exécution du test: ${testName}...`);
  
  try {
    if (fs.existsSync(testFile)) {
      execSync(`node ${testFile}`, { stdio: 'inherit' });
      console.log(`✅ ${testName} réussi\n`);
      return true;
    } else {
      console.log(`❌ ${testName} échoué (fichier manquant: ${testFile})\n`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${testName} échoué: ${error.message}\n`);
    return false;
  }
}

// Fonction pour vérifier les prérequis
function checkPrerequisites() {
  console.log('📋 Vérification des prérequis...');
  
  const prerequisites = [
    { name: 'Node.js', command: 'node --version' },
    { name: 'npm', command: 'npm --version' },
    { name: 'Next.js', file: 'package.json' },
    { name: 'TypeScript', file: 'tsconfig.json' },
    { name: 'Tailwind', file: 'tailwind.config.js' },
  ];
  
  let allPresent = true;
  
  prerequisites.forEach(({ name, command, file }) => {
    try {
      if (command) {
        execSync(command, { stdio: 'pipe' });
        console.log(`  ✅ ${name}`);
      } else if (file) {
        if (fs.existsSync(file)) {
          console.log(`  ✅ ${name}`);
        } else {
          console.log(`  ❌ ${name} (fichier manquant: ${file})`);
          allPresent = false;
        }
      }
    } catch (error) {
      console.log(`  ❌ ${name} (erreur: ${error.message})`);
      allPresent = false;
    }
  });
  
  console.log(`\n  📊 Prérequis: ${allPresent ? '✅' : '❌'}\n`);
  return allPresent;
}

// Fonction pour vérifier la structure des fichiers
function checkFileStructure() {
  console.log('📁 Vérification de la structure des fichiers...');
  
  const requiredFiles = [
    'src/app/layout.tsx',
    'src/app/page.tsx',
    'src/app/globals.css',
    'src/app/sitemap.ts',
    'src/app/robots.ts',
    'src/app/manifest.ts',
    'next.config.js',
    'package.json',
    'tsconfig.json',
    'tailwind.config.js',
  ];
  
  let allPresent = true;
  
  requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`  ✅ ${file}`);
    } else {
      console.log(`  ❌ ${file} (manquant)`);
      allPresent = false;
    }
  });
  
  console.log(`\n  📊 Structure des fichiers: ${allPresent ? '✅' : '❌'}\n`);
  return allPresent;
}

// Fonction pour vérifier les dépendances
function checkDependencies() {
  console.log('📦 Vérification des dépendances...');
  
  try {
    const packageJson = require('../package.json');
    const requiredDeps = ['next', 'react', 'react-dom'];
    const requiredDevDeps = ['typescript', 'tailwindcss', 'eslint'];
    
    let allPresent = true;
    
    requiredDeps.forEach(dep => {
      if (packageJson.dependencies && packageJson.dependencies[dep]) {
        console.log(`  ✅ ${dep} (${packageJson.dependencies[dep]})`);
      } else {
        console.log(`  ❌ ${dep} (manquant)`);
        allPresent = false;
      }
    });
    
    requiredDevDeps.forEach(dep => {
      if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
        console.log(`  ✅ ${dep} (${packageJson.devDependencies[dep]})`);
      } else {
        console.log(`  ❌ ${dep} (manquant)`);
        allPresent = false;
      }
    });
    
    console.log(`\n  📊 Dépendances: ${allPresent ? '✅' : '❌'}\n`);
    return allPresent;
  } catch (error) {
    console.log(`  ❌ Erreur lors de la vérification des dépendances: ${error.message}\n`);
    return false;
  }
}

// Exécuter tous les tests
console.log('🚀 Démarrage des tests...\n');

const prerequisitesCheck = checkPrerequisites();
const fileStructureCheck = checkFileStructure();
const dependenciesCheck = checkDependencies();

if (!prerequisitesCheck || !fileStructureCheck || !dependenciesCheck) {
  console.log('❌ Tests de base échoués. Arrêt des tests avancés.');
  process.exit(1);
}

// Tests avancés
const seoTest = runTest('Test SEO', 'scripts/test-seo.js');
const performanceTest = runTest('Test Performance', 'scripts/test-performance.js');

// Résumé final
console.log('📊 Résumé des tests:');
console.log(`  ${prerequisitesCheck ? '✅' : '❌'} Prérequis`);
console.log(`  ${fileStructureCheck ? '✅' : '❌'} Structure des fichiers`);
console.log(`  ${dependenciesCheck ? '✅' : '❌'} Dépendances`);
console.log(`  ${seoTest ? '✅' : '❌'} Tests SEO`);
console.log(`  ${performanceTest ? '✅' : '❌'} Tests Performance`);

const allTestsPassed = prerequisitesCheck && fileStructureCheck && dependenciesCheck && seoTest && performanceTest;

console.log(`\n🎯 Score global: ${allTestsPassed ? '✅ EXCELLENT' : '❌ À AMÉLIORER'}`);

if (allTestsPassed) {
  console.log('\n🚀 Votre application Next.js est prête !');
  console.log('📈 SEO optimisé au maximum');
  console.log('⚡ Performance optimisée');
  console.log('🎯 Prêt pour le déploiement');
  console.log('\n📝 Prochaines étapes:');
  console.log('  1. Configurez vos variables d\'environnement');
  console.log('  2. Ajoutez vos images optimisées');
  console.log('  3. Déployez sur Vercel ou votre plateforme préférée');
  console.log('  4. Soumettez votre sitemap à Google Search Console');
} else {
  console.log('\n⚠️  Des améliorations sont nécessaires');
  console.log('🔧 Consultez le MIGRATION_README.md pour les détails');
}

process.exit(allTestsPassed ? 0 : 1);

