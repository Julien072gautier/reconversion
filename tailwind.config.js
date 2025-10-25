/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs MaReconversionCPF (#33BAC6)
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
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf', // Turquoise d'accent
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            h1: {
              color: '#0f172a',
              fontWeight: '700',
            },
            h2: {
              color: '#0f172a',
              fontWeight: '600',
            },
            h3: {
              color: '#0f172a',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};