'use client';

import { useState, useEffect, useCallback, createContext, useContext, ReactNode } from 'react';
import { 
  ConsentPreferences, 
  updateGoogleConsent, 
  saveConsentPreferences, 
  loadConsentPreferences,
  removeUnauthorizedCookies,
  resetConsent
} from '@/lib/consent-google';

// Interface du contexte
interface ConsentContextType {
  // État
  hasConsent: boolean;
  preferences: ConsentPreferences;
  showBanner: boolean;
  showPreferences: boolean;
  
  // Actions
  acceptAll: () => void;
  rejectAll: () => void;
  saveCustomPreferences: (preferences: ConsentPreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  resetConsentData: () => void;
  
  // Utilitaires
  setPreferences: (preferences: ConsentPreferences) => void;
}

// Créer le contexte
const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

// Provider du contexte
export function ConsentProvider({ children }: { children: ReactNode }) {
  // État du consentement
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: false,
    advertising: false,
    functional: false,
  });
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showPreferences, setShowPreferences] = useState<boolean>(false);

  // Charger les préférences au montage du composant
  useEffect(() => {
    const savedPreferences = loadConsentPreferences();
    
    if (savedPreferences) {
      setPreferences(savedPreferences);
      setHasConsent(true);
      
      // Appliquer les préférences à Google Consent Mode
      updateGoogleConsent(savedPreferences);
    } else {
      // Pas de consentement - afficher le bandeau
      setShowBanner(true);
    }
  }, []);

  /**
   * Accepter tous les cookies
   */
  const acceptAll = useCallback(() => {
    const allAccepted: ConsentPreferences = {
      analytics: true,
      advertising: true,
      functional: true,
    };

    setPreferences(allAccepted);
    setHasConsent(true);
    setShowBanner(false);
    setShowPreferences(false);

    // Sauvegarder et appliquer
    saveConsentPreferences(allAccepted);
    updateGoogleConsent(allAccepted);
  }, []);

  /**
   * Refuser tous les cookies (garder seulement les essentiels)
   */
  const rejectAll = useCallback(() => {
    const onlyEssential: ConsentPreferences = {
      analytics: false,
      advertising: false,
      functional: false,
    };

    setPreferences(onlyEssential);
    setHasConsent(true);
    setShowBanner(false);
    setShowPreferences(false);

    // Sauvegarder et appliquer
    saveConsentPreferences(onlyEssential);
    updateGoogleConsent(onlyEssential);
    removeUnauthorizedCookies(onlyEssential);
  }, []);

  /**
   * Sauvegarder les préférences personnalisées
   */
  const saveCustomPreferences = useCallback((newPreferences: ConsentPreferences) => {
    setPreferences(newPreferences);
    setHasConsent(true);
    setShowBanner(false);
    setShowPreferences(false);

    // Sauvegarder et appliquer
    saveConsentPreferences(newPreferences);
    updateGoogleConsent(newPreferences);
    removeUnauthorizedCookies(newPreferences);
  }, []);

  /**
   * Ouvrir la modale de préférences
   */
  const openPreferences = useCallback(() => {
    console.log('🍪 openPreferences appelé, showPreferences actuel:', showPreferences);
    setShowPreferences(true);
    console.log('🍪 showPreferences mis à true');
  }, [showPreferences]);

  /**
   * Fermer la modale de préférences
   */
  const closePreferences = useCallback(() => {
    setShowPreferences(false);
  }, []);

  /**
   * Réinitialiser le consentement (pour les tests)
   */
  const resetConsentData = useCallback(() => {
    resetConsent();
    setHasConsent(false);
    setPreferences({
      analytics: false,
      advertising: false,
      functional: false,
    });
    setShowBanner(true);
    setShowPreferences(false);
  }, []);

  const value: ConsentContextType = {
    // État
    hasConsent,
    preferences,
    showBanner,
    showPreferences,
    
    // Actions
    acceptAll,
    rejectAll,
    saveCustomPreferences,
    openPreferences,
    closePreferences,
    resetConsentData,
    
    // Utilitaires
    setPreferences,
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  );
}

/**
 * Hook pour utiliser le contexte de consentement
 */
export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent doit être utilisé dans un ConsentProvider');
  }
  return context;
}

