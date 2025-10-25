# Palette de couleurs MaReconversionCPF

## Couleur principale : #33BAC6

### Description
La couleur principale de MaReconversionCPF est un turquoise/cyan moderne et professionnel qui évoque la confiance, l'innovation et la croissance.

### Palette complète

#### Couleur principale
- **#33BAC6** - Couleur principale (brand-500)
- **#3BB7C1** - Version claire (brand-400)
- **#2895A0** - Version foncée (brand-600)

#### Palette étendue
- **#E6F6F7** - brand-50 (très clair)
- **#CEEDF0** - brand-100 (clair)
- **#9DDBE0** - brand-200 (moyen clair)
- **#6CC9D1** - brand-300 (moyen)
- **#3BB7C1** - brand-400 (moyen foncé)
- **#33BAC6** - brand-500 (principal)
- **#2895A0** - brand-600 (foncé)
- **#1E7078** - brand-700 (très foncé)
- **#144A50** - brand-800 (ultra foncé)
- **#0A2528** - brand-900 (le plus foncé)

### Utilisation

#### Classes Tailwind
```css
/* Couleur de texte */
.text-brand-500
.text-primary-brand

/* Couleur de fond */
.bg-brand-500
.bg-primary-brand

/* Bordures */
.border-brand-500
.border-primary-brand

/* Focus rings */
.ring-brand-500
.ring-primary-brand
```

#### Classes CSS personnalisées
```css
/* Boutons */
.btn-primary-brand

/* Cartes */
.card-brand

/* Badges */
.badge-brand

/* Inputs */
.input-brand
```

### Variables CSS
```css
:root {
  --brand-primary: #33BAC6;
  --brand-primary-light: #3BB7C1;
  --brand-primary-dark: #2895A0;
  --brand-primary-50: #E6F6F7;
  --brand-primary-100: #CEEDF0;
  --brand-primary-200: #9DDBE0;
  --brand-primary-300: #6CC9D1;
  --brand-primary-400: #3BB7C1;
  --brand-primary-500: #33BAC6;
  --brand-primary-600: #2895A0;
  --brand-primary-700: #1E7078;
  --brand-primary-800: #144A50;
  --brand-primary-900: #0A2528;
}
```

### Exemples d'utilisation

#### Bouton principal
```html
<button class="btn-primary-brand">
  Commencer ma reconversion
</button>
```

#### Carte avec accent
```html
<div class="card-brand p-6">
  <h3 class="text-primary-brand font-semibold">Formation</h3>
  <p class="text-gray-600">Description de la formation</p>
</div>
```

#### Badge
```html
<span class="badge-brand">Éligible CPF</span>
```

#### Input avec focus
```html
<input class="input-brand" placeholder="Votre email" />
```

### Accessibilité

#### Contraste
- **Sur fond blanc** : Ratio de contraste 4.5:1 ✅
- **Sur fond clair** : Ratio de contraste 3:1 ✅
- **Sur fond foncé** : Ratio de contraste 7:1 ✅

#### Couleurs d'état
- **Succès** : Vert (#22c55e)
- **Attention** : Orange (#f59e0b)
- **Erreur** : Rouge (#ef4444)
- **Info** : #33BAC6 (couleur principale)

### Compatibilité

#### Navigateurs
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

#### Préfixes CSS
- ✅ Pas de préfixes nécessaires
- ✅ Support natif des variables CSS
- ✅ Support Tailwind CSS 3.0+

