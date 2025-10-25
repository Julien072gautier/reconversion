'use client';

import { useState, useMemo } from 'react';
import { BlocCard } from './BlocCard';
import type { BlocRNCP } from '@/types/reconversion';
import { blocsRNCP, filterBlocs } from '@/lib/mock/blocs';
import { cn } from '@/lib/utils';

interface BlocGridProps {
  selectedBlocs: BlocRNCP[];
  onBlocSelect: (bloc: BlocRNCP) => void;
  onBlocDeselect: (blocId: string) => void;
  className?: string;
}

export function BlocGrid({ selectedBlocs, onBlocSelect, onBlocDeselect, className }: BlocGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'duration' | 'certificateur'>('title');
  const [filterBy, setFilterBy] = useState<'all' | 'cpf-eligible' | 'cpf-ineligible'>('all');

  const filteredAndSortedBlocs = useMemo(() => {
    let filtered = searchQuery ? filterBlocs(searchQuery) : blocsRNCP;
    
    // Filtrer par éligibilité CPF
    if (filterBy === 'cpf-eligible') {
      filtered = filtered.filter(bloc => bloc.cpfEligible);
    } else if (filterBy === 'cpf-ineligible') {
      filtered = filtered.filter(bloc => !bloc.cpfEligible);
    }
    
    // Trier
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'duration':
          return a.dureeHeures - b.dureeHeures;
        case 'certificateur':
          return a.certificateur.localeCompare(b.certificateur);
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [searchQuery, sortBy, filterBy]);

  const totalHours = selectedBlocs.reduce((total, bloc) => total + bloc.dureeHeures, 0);

  return (
    <div className={cn('space-y-6', className)}>
      {/* Filtres et recherche */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rechercher
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Titre, compétences, certificateur..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trier par
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="title">Titre</option>
              <option value="duration">Durée</option>
              <option value="certificateur">Certificateur</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filtrer par
            </label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Tous</option>
              <option value="cpf-eligible">Éligibles CPF</option>
              <option value="cpf-ineligible">Non éligibles CPF</option>
            </select>
          </div>
        </div>
      </div>

      {/* Résumé de sélection */}
      {selectedBlocs.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Blocs sélectionnés ({selectedBlocs.length})
          </h3>
          <div className="text-blue-800">
            <p>Total: {totalHours} heures</p>
            <div className="mt-2 space-y-1">
              {selectedBlocs.map((bloc) => (
                <div key={bloc.id} className="text-sm">
                  • {bloc.title} ({bloc.dureeHeures}h)
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Grille des blocs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedBlocs.map((bloc) => (
          <BlocCard
            key={bloc.id}
            bloc={bloc}
            isSelected={selectedBlocs.some(selected => selected.id === bloc.id)}
            onSelect={onBlocSelect}
            onDeselect={onBlocDeselect}
          />
        ))}
      </div>

      {filteredAndSortedBlocs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            Aucun bloc trouvé pour votre recherche
          </div>
          <div className="text-gray-400 text-sm mt-2">
            Essayez de modifier vos critères de recherche
          </div>
        </div>
      )}
    </div>
  );
}

