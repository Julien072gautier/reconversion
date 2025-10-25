'use client';

import { Formation } from '@/types/catalogue';
import FormationCard from './FormationCard';

interface FormationGridProps {
  formations: Formation[];
  onFormationClick?: (formation: Formation) => void;
}

export default function FormationGrid({ formations, onFormationClick }: FormationGridProps) {
  if (formations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune formation trouvée</h3>
        <p className="text-gray-600 mb-4">
          Essayez de modifier vos critères de recherche ou vos filtres.
        </p>
        <button className="text-brand-600 hover:text-brand-700 font-medium">
          Effacer tous les filtres
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {formations.map((formation) => (
        <FormationCard
          key={formation.id}
          formation={formation}
          onClick={() => onFormationClick?.(formation)}
        />
      ))}
    </div>
  );
}

