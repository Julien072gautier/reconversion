'use client';

import { useState } from 'react';
import type { BlocRNCP } from '@/types/reconversion';
import { cn } from '@/lib/utils';

interface BlocCardProps {
  bloc: BlocRNCP;
  isSelected: boolean;
  onSelect: (bloc: BlocRNCP) => void;
  onDeselect: (blocId: string) => void;
  className?: string;
}

export function BlocCard({ bloc, isSelected, onSelect, onDeselect, className }: BlocCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (isSelected) {
      onDeselect(bloc.id);
    } else {
      onSelect(bloc);
    }
  };

  return (
    <div className={cn(
      'bg-white border-2 rounded-lg p-6 transition-all duration-200 hover:shadow-md',
      isSelected 
        ? 'border-blue-500 bg-blue-50' 
        : 'border-gray-200 hover:border-gray-300',
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {bloc.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="font-medium">{bloc.certificateur}</span>
            <span>•</span>
            <span>{bloc.dureeHeures}h</span>
            <span>•</span>
            <span className={cn(
              'px-2 py-1 rounded-full text-xs font-medium',
              bloc.cpfEligible 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            )}>
              {bloc.cpfEligible ? 'Éligible CPF' : 'Non éligible'}
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg 
            className={cn('h-5 w-5 transform transition-transform', isExpanded && 'rotate-180')} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="mb-4">
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700">Code RNCP:</span>
            <span className="ml-2 text-sm text-gray-600">{bloc.rncpCode}</span>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-700">Compétences visées:</span>
            <ul className="mt-2 space-y-1">
              {bloc.competences.map((competence, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {competence}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <button
        onClick={handleToggle}
        className={cn(
          'w-full py-2 px-4 rounded-lg font-medium transition-colors',
          isSelected
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        )}
      >
        {isSelected ? 'Désélectionner ce bloc' : 'Sélectionner ce bloc'}
      </button>
    </div>
  );
}

