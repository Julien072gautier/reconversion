/**
 * Système de thème FORMAPRO BY ACCERTIF
 * Couleurs et tokens de design cohérents
 */

export const theme = {
  colors: {
    // Couleurs principales - MaReconversionCPF (#33BAC6)
    brand: {
      50: '#E6F6F7',
      100: '#CEEDF0',
      200: '#9DDBE0',
      300: '#6CC9D1',
      400: '#3BB7C1',
      500: '#33BAC6', // Couleur principale MaReconversionCPF
      600: '#2895A0',
      700: '#1E7078',
      800: '#144A50',
      900: '#0A2528',
    },
    // Couleurs ACCERTIF (officielles)
    accertif: {
      primary: '#003566',
      'primary-light': '#0056b3',
      'primary-dark': '#002244',
      secondary: '#CCA000',
      'secondary-light': '#FFD700',
      'secondary-dark': '#B8860B',
    },
    // Alias pour compatibilité
    primary: {
      50: '#E6F6F7',
      100: '#CEEDF0',
      200: '#9DDBE0',
      300: '#6CC9D1',
      400: '#3BB7C1',
      500: '#33BAC6', // Couleur principale MaReconversionCPF
      600: '#2895A0',
      700: '#1E7078',
      800: '#144A50',
      900: '#0A2528',
    },
    
    // Couleur d'accent
    accent: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf', // Turquoise principal
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    
    // Gris neutres
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    
    // États
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
  },
  
  // Espacement cohérent
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },
  
  // Rayons de bordure
  borderRadius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },
  
  // Ombres
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  // Typographie
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',   // 48px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
} as const;

  // Utilitaires pour les classes Tailwind
export const getThemeClasses = {
  // Boutons
  button: {
    primary: 'bg-brand-500 hover:bg-brand-600 text-white font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
    secondary: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
  },
  
  // Cartes
  card: 'bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition-shadow',
  
  // Inputs
  input: 'w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors',
  
  // Badges
  badge: {
    success: 'bg-success-100 text-success-800 px-2 py-1 rounded-full text-xs font-medium',
    warning: 'bg-warning-100 text-warning-800 px-2 py-1 rounded-full text-xs font-medium',
    error: 'bg-error-100 text-error-800 px-2 py-1 rounded-full text-xs font-medium',
    info: 'bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium',
  },
} as const;

export type Theme = typeof theme;
export type ThemeColors = keyof typeof theme.colors;
export type ThemeSpacing = keyof typeof theme.spacing;
export type ThemeBorderRadius = keyof typeof theme.borderRadius;
