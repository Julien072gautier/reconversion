'use client';

import React, { useState, useEffect } from 'react';
import { X, Settings, Shield, BarChart3, Target, Check, Info } from 'lucide-react';
import { useConsent } from '@/hooks/useConsent';
import { ConsentPreferences } from '@/lib/consent-google';

/**
 * Bandeau de consentement cookies conforme RGPD
 * Affiche un bandeau + modale de préférences
 */
export default function CookieBanner() {
  const {
    hasConsent,
    preferences,
    showBanner,
    showPreferences,
    acceptAll,
    rejectAll,
    saveCustomPreferences,
    openPreferences,
    closePreferences,
    setPreferences,
  } = useConsent();

  const [localPreferences, setLocalPreferences] = useState<ConsentPreferences>(preferences);
  const [isClosing, setIsClosing] = useState(false);

  // Synchroniser les préférences locales
  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  // Gestion de la touche Échap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showPreferences) {
        handleClosePreferences();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showPreferences]);

  // Fermer la modale avec animation
  const handleClosePreferences = () => {
    setIsClosing(true);
    setTimeout(() => {
      closePreferences();
      setIsClosing(false);
    }, 200);
  };

  // Sauvegarder les préférences personnalisées
  const handleSavePreferences = () => {
    saveCustomPreferences(localPreferences);
  };

  // Accepter tout depuis la modale
  const handleAcceptAllFromModal = () => {
    const allAccepted: ConsentPreferences = {
      analytics: true,
      advertising: true,
      functional: true,
    };
    setLocalPreferences(allAccepted);
    saveCustomPreferences(allAccepted);
  };

  // Refuser tout depuis la modale
  const handleRejectAllFromModal = () => {
    const onlyEssential: ConsentPreferences = {
      analytics: false,
      advertising: false,
      functional: false,
    };
    setLocalPreferences(onlyEssential);
    saveCustomPreferences(onlyEssential);
  };

  // Toggle d'une catégorie
  const toggleCategory = (category: keyof ConsentPreferences) => {
    setLocalPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Debug logs
  console.log('🍪 CookieBanner render - hasConsent:', hasConsent, 'showBanner:', showBanner, 'showPreferences:', showPreferences);

  return (
    <>
      {/* Bandeau principal - affiché seulement si pas de consentement */}
      {!hasConsent && showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-brand-500 shadow-2xl">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Contenu */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-brand-500" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Respect de votre vie privée
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                analyser le trafic et personnaliser le contenu. Certains cookies sont 
                nécessaires au fonctionnement du site, d'autres nous aident à comprendre 
                comment vous utilisez notre site.
              </p>

              {/* Catégories de cookies */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Nécessaires (toujours actifs)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <BarChart3 className="w-3 h-3" />
                  <span>Analytiques</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Target className="w-3 h-3" />
                  <span>Publicitaires</span>
                </div>
              </div>

              {/* Liens légaux */}
              <div className="flex flex-wrap gap-2 text-xs">
                <a 
                  href="/politique-confidentialite" 
                  className="text-brand-500 hover:text-brand-600 underline"
                >
                  Politique de confidentialité
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="/mentions-legales" 
                  className="text-brand-500 hover:text-brand-600 underline"
                >
                  Mentions légales
                </a>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={openPreferences}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Settings className="w-4 h-4" />
                Personnaliser
              </button>
              
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Tout refuser
              </button>
              
              <button
                onClick={acceptAll}
                className="px-6 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Modale de préférences */}
      {showPreferences && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClosePreferences();
            }
          }}
        >
          <div 
            className={`bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-200 ${
              isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-brand-500" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Préférences des cookies
                </h2>
              </div>
              <button
                onClick={handleClosePreferences}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Contenu */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Gérez vos préférences de cookies. Vous pouvez activer ou désactiver 
                les différents types de cookies selon vos besoins.
              </p>

              {/* Catégories de cookies */}
              <div className="space-y-4 mb-6">
                {/* Cookies fonctionnels */}
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Settings className="h-5 w-5 mt-0.5 text-gray-600" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900">
                            Cookies fonctionnels
                          </h3>
                          <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                            Requis
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Ces cookies sont essentiels au fonctionnement du site web.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
                            Sessions utilisateur
                          </span>
                          <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
                            Préférences
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center justify-center w-12 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <BarChart3 className="h-5 w-5 mt-0.5 text-gray-600" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">
                          Cookies analytiques
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
                            Google Analytics
                          </span>
                          <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
                            Statistiques
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => toggleCategory('analytics')}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          localPreferences.analytics ? 'bg-brand-500' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            localPreferences.analytics ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cookies publicitaires */}
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Target className="h-5 w-5 mt-0.5 text-gray-600" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">
                          Cookies publicitaires
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Ces cookies sont utilisés pour afficher des publicités pertinentes.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
                            Publicités ciblées
                          </span>
                          <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">
                            Réseaux sociaux
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => toggleCategory('advertising')}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          localPreferences.advertising ? 'bg-brand-500' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            localPreferences.advertising ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">À propos de vos données</p>
                    <p>
                      Vos préférences sont sauvegardées localement sur votre appareil. 
                      Vous pouvez modifier ces paramètres à tout moment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAllFromModal}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Tout refuser
                </button>
                
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors"
                >
                  Sauvegarder mes préférences
                </button>
                
                <button
                  onClick={handleAcceptAllFromModal}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

