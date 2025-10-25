'use client';

import React from 'react';
import { Settings } from 'lucide-react';
import { useConsent } from '@/hooks/useConsent';

/**
 * Bouton pour gérer les cookies (à placer dans le footer)
 * Permet de rouvrir la modale de préférences
 */
export default function ManageCookies() {
  console.log('🍪 ManageCookies rendu');
  
  const { openPreferences } = useConsent();
  console.log('🍪 openPreferences récupéré:', typeof openPreferences);

  const handleClick = () => {
    console.log('🍪 Bouton "Gérer mes cookies" cliqué');
    try {
      openPreferences();
      console.log('🍪 openPreferences appelé avec succès');
    } catch (error) {
      console.error('🍪 Erreur lors de l\'ouverture des préférences:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand-500 transition-colors duration-200"
      title="Gérer mes préférences de cookies"
    >
      <Settings className="w-4 h-4" />
      Gérer mes cookies
    </button>
  );
}

