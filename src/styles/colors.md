# Couleurs FORMAPRO BY ACCERTIF & ACCERTIF

## Palette principale (officielle)

### Couleur principale FORMAPRO BY ACCERTIF (Brand)
- **500**: `#33BAC6` - Couleur principale FORMAPRO BY ACCERTIF
- **600**: `#2895A0` - Hover states
- **700**: `#1E7078` - Active states
- **800**: `#144A50` - Dark variants
- **900**: `#0A2528` - Darkest

### Couleurs ACCERTIF (officielles)
- **Primary**: `#003566` - Bleu principal ACCERTIF
- **Primary Light**: `#0056b3` - Bleu clair
- **Primary Dark**: `#002244` - Bleu foncé
- **Secondary**: `#CCA000` - Or principal
- **Secondary Light**: `#FFD700` - Or clair
- **Secondary Dark**: `#B8860B` - Or foncé

### Turquoise d'accent (Accent)
- **400**: `#2dd4bf` - Couleur d'accent
- **500**: `#14b8a6` - Principal
- **600**: `#0d9488` - Hover states

## Utilisation

### Classes Tailwind
```css
/* Couleur principale FORMAPRO BY ACCERTIF */
.text-brand-500
.bg-brand-500
.border-brand-500

/* Couleurs ACCERTIF */
.text-accertif-primary
.bg-accertif-primary
.border-accertif-primary
.text-accertif-secondary
.bg-accertif-secondary
.border-accertif-secondary

/* Alias pour compatibilité */
.text-primary-500
.bg-primary-500
.border-primary-500

/* Couleur d'accent */
.text-accent-400
.bg-accent-400
.border-accent-400
```

### Classes utilitaires
```css
/* Classes personnalisées */
.text-brand
.bg-brand
.border-brand
.ring-brand

/* Alias pour compatibilité */
.text-primary
.bg-primary
.border-primary
.ring-primary
```

## Composants

### Boutons
- **Primary FORMAPRO**: `bg-brand-500 hover:bg-brand-600`
- **Primary ACCERTIF**: `bg-accertif-primary hover:bg-accertif-primary-dark`
- **Secondary ACCERTIF**: `bg-accertif-secondary hover:bg-accertif-secondary-light`
- **Outline ACCERTIF**: `border-accertif-primary text-accertif-primary hover:bg-accertif-primary`
- **Secondary**: `bg-neutral-100 hover:bg-neutral-200`
- **Accent**: `bg-accent-500 hover:bg-accent-600`

### États
- **Success**: `bg-green-500`
- **Warning**: `bg-yellow-500`
- **Error**: `bg-red-500`
- **Info**: `bg-brand-500`

## Accessibilité

Toutes les couleurs respectent les ratios de contraste WCAG AA :
- Texte sur fond clair : ratio ≥ 4.5:1
- Texte sur fond sombre : ratio ≥ 4.5:1
- Éléments interactifs : ratio ≥ 3:1
