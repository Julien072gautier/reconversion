/**
 * Gestion Google Consent Mode v2 pour MaReconversionCPF
 * Conforme RGPD - Bloque par défaut tous les cookies non essentiels
 */

// Types pour les consentements
export interface ConsentPreferences {
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
}

// Types pour les signaux de consentement Google
export interface GoogleConsentSignals {
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
  security_storage: 'granted' | 'denied';
}

// Configuration par défaut - TOUS REFUSÉS (conforme RGPD)
const DEFAULT_CONSENT: GoogleConsentSignals = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted', // Seul le stockage de sécurité est accordé par défaut
};

// Clés de stockage localStorage
const CONSENT_KEY = 'mareconversioncpf_cookie_consent';
const PREFERENCES_KEY = 'mareconversioncpf_cookie_preferences';

/**
 * Initialise Google Consent Mode v2 avec les paramètres par défaut
 * Doit être appelé AVANT le chargement de GTM
 */
export function initializeGoogleConsent(): void {
  if (typeof window === 'undefined') return;

  // Initialiser dataLayer si inexistant
  window.dataLayer = window.dataLayer || [];
  
  // Fonction gtag si inexistante
  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }

  // Configuration par défaut - tous refusés
  window.gtag('consent', 'default', {
    ...DEFAULT_CONSENT,
    wait_for_update: 500, // Attendre 500ms avant de mettre à jour
  });

  console.log('🍪 Google Consent Mode v2 initialisé - Tous les cookies refusés par défaut');
}

/**
 * Convertit les préférences utilisateur en signaux Google Consent
 */
export function preferencesToGoogleConsent(preferences: ConsentPreferences): GoogleConsentSignals {
  return {
    // Cookies de sécurité - toujours accordés
    security_storage: 'granted',
    
    // Cookies fonctionnels
    functionality_storage: preferences.functional ? 'granted' : 'denied',
    
    // Cookies analytiques
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    
    // Cookies publicitaires
    ad_storage: preferences.advertising ? 'granted' : 'denied',
    ad_user_data: preferences.advertising ? 'granted' : 'denied',
    ad_personalization: preferences.advertising ? 'granted' : 'denied',
    
    // Personnalisation (liée à la publicité)
    personalization_storage: preferences.advertising ? 'granted' : 'denied',
  };
}

/**
 * Met à jour les signaux de consentement Google
 */
export function updateGoogleConsent(preferences: ConsentPreferences): void {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Consent Mode non disponible');
    return;
  }

  const consentSignals = preferencesToGoogleConsent(preferences);
  
  window.gtag('consent', 'update', consentSignals);
  
  console.log('🍪 Consentement mis à jour:', consentSignals);
}

/**
 * Sauvegarde les préférences dans localStorage
 */
export function saveConsentPreferences(preferences: ConsentPreferences): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CONSENT_KEY, 'true');
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
    console.log('🍪 Préférences sauvegardées:', preferences);
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des préférences:', error);
  }
}

/**
 * Charge les préférences depuis localStorage
 */
export function loadConsentPreferences(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const consent = localStorage.getItem(CONSENT_KEY);
    const preferences = localStorage.getItem(PREFERENCES_KEY);
    
    if (consent === 'true' && preferences) {
      const parsed = JSON.parse(preferences);
      console.log('🍪 Préférences chargées:', parsed);
      return parsed;
    }
  } catch (error) {
    console.error('Erreur lors du chargement des préférences:', error);
  }
  
  return null;
}

/**
 * Supprime les cookies non autorisés
 */
export function removeUnauthorizedCookies(preferences: ConsentPreferences): void {
  if (typeof window === 'undefined') return;

  const cookiesToRemove: string[] = [];

  // Cookies analytiques si refusés
  if (!preferences.analytics) {
    cookiesToRemove.push('_ga', '_gid', '_gat', '_gat_gtag_', '_gclid');
  }

  // Cookies publicitaires si refusés
  if (!preferences.advertising) {
    cookiesToRemove.push('_fbp', '_fbc', '_gcl_au', '_gcl_aw', '_gcl_dc');
  }

  // Supprimer les cookies
  cookiesToRemove.forEach(cookieName => {
    // Supprimer sur le domaine principal
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    
    // Supprimer sur les sous-domaines
    const hostname = window.location.hostname;
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
    
    // Supprimer sur le domaine parent
    const parentDomain = hostname.split('.').slice(-2).join('.');
    if (parentDomain !== hostname) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${parentDomain};`;
    }
  });

  if (cookiesToRemove.length > 0) {
    console.log('🍪 Cookies supprimés:', cookiesToRemove);
  }
}

/**
 * Réinitialise complètement le consentement
 */
export function resetConsent(): void {
  if (typeof window === 'undefined') return;

  // Supprimer du localStorage
  localStorage.removeItem(CONSENT_KEY);
  localStorage.removeItem(PREFERENCES_KEY);

  // Remettre les paramètres par défaut
  if (window.gtag) {
    window.gtag('consent', 'update', DEFAULT_CONSENT);
  }

  // Supprimer tous les cookies non essentiels
  const allCookies = document.cookie.split(';');
  allCookies.forEach(cookie => {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    
    // Garder seulement les cookies essentiels
    if (!['PHPSESSID', 'sessionid', 'csrf_token'].includes(name)) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  });

  console.log('🍪 Consentement réinitialisé');
}

// Déclaration globale pour TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

