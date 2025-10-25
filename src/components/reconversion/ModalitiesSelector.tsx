'use client';

import { useState } from 'react';
import type { Modalites } from '@/types/reconversion';
import { cn } from '@/lib/utils';

interface ModalitiesSelectorProps {
  value: Modalites;
  onChange: (modalites: Modalites) => void;
  className?: string;
}

export function ModalitiesSelector({ value, onChange, className }: ModalitiesSelectorProps) {
  const [errors, setErrors] = useState<string[]>([]);

  const handleSyncRatioChange = (ratio: 0.5 | 0.75 | 1.0) => {
    const newModalites = { ...value, syncRatio: ratio };
    onChange(newModalites);
    
    // Validation en temps réel
    if (ratio < 0.5) {
      setErrors(['Le ratio synchrone doit être d\'au moins 50%']);
    } else {
      setErrors([]);
    }
  };

  const handleModeChange = (mode: 'presentiel' | 'distanciel' | 'hybride') => {
    onChange({ ...value, mode });
  };

  const handleElearningChange = (elearning: boolean) => {
    onChange({ ...value, elearning });
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* Explication */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Modalités de formation
        </h3>
        <p className="text-blue-800 text-sm">
          La réglementation impose un minimum de 50% d'heures en accompagnement synchrone 
          (en présentiel ou à distance avec formateur en direct).
        </p>
      </div>

      {/* Ratio synchrone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Ratio d'accompagnement synchrone *
        </label>
        <div className="space-y-3">
          {[
            { value: 0.5, label: '50% synchrone / 50% asynchrone', description: 'Minimum réglementaire' },
            { value: 0.75, label: '75% synchrone / 25% asynchrone', description: 'Recommandé' },
            { value: 1.0, label: '100% synchrone', description: 'Maximum d\'accompagnement' }
          ].map((option) => (
            <label key={option.value} className="flex items-start">
              <input
                type="radio"
                name="syncRatio"
                value={option.value}
                checked={value.syncRatio === option.value}
                onChange={() => handleSyncRatioChange(option.value)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">{option.label}</div>
                <div className="text-sm text-gray-500">{option.description}</div>
              </div>
            </label>
          ))}
        </div>
        
        {errors.length > 0 && (
          <div className="mt-2 text-sm text-red-600">
            {errors.map((error, index) => (
              <div key={index}>• {error}</div>
            ))}
          </div>
        )}
      </div>

      {/* Mode de formation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Mode de formation
        </label>
        <div className="space-y-3">
          {[
            { value: 'presentiel', label: 'Présentiel', description: 'Formation en salle' },
            { value: 'distanciel', label: 'Distanciel', description: 'Formation à distance' },
            { value: 'hybride', label: 'Hybride', description: 'Mix présentiel/distanciel' }
          ].map((option) => (
            <label key={option.value} className="flex items-start">
              <input
                type="radio"
                name="mode"
                value={option.value}
                checked={value.mode === option.value}
                onChange={() => handleModeChange(option.value as any)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">{option.label}</div>
                <div className="text-sm text-gray-500">{option.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* E-learning */}
      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={value.elearning}
            onChange={(e) => handleElearningChange(e.target.checked)}
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-900">
              Inclure un module e-learning
            </div>
            <div className="text-sm text-gray-500">
              Module complémentaire d'apprentissage en ligne
            </div>
          </div>
        </label>
      </div>

      {/* Résumé */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Résumé des modalités</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <div>• Ratio synchrone: {value.syncRatio * 100}%</div>
          <div>• Mode: {value.mode}</div>
          <div>• E-learning: {value.elearning ? 'Inclus' : 'Non inclus'}</div>
        </div>
      </div>
    </div>
  );
}

