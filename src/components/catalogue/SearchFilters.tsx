'use client';

import { useState } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { Filtres } from '@/types/catalogue';
import { categories } from '@/lib/mock/catalogue';

interface SearchFiltersProps {
  filtres: Filtres;
  onFiltresChange: (filtres: Filtres) => void;
  resultatsCount: number;
}

export default function SearchFilters({ filtres, onFiltresChange, resultatsCount }: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    onFiltresChange({ ...filtres, recherche: value });
  };

  const handleCategorieChange = (categorie: string) => {
    onFiltresChange({ ...filtres, categorie: categorie === filtres.categorie ? '' : categorie });
  };

  const handleNiveauChange = (niveau: string) => {
    onFiltresChange({ ...filtres, niveau: niveau === filtres.niveau ? '' : niveau });
  };

  const handleModaliteChange = (modalite: string) => {
    onFiltresChange({ ...filtres, modalite: modalite === filtres.modalite ? '' : modalite });
  };

  const handlePrixChange = (field: 'prixMin' | 'prixMax', value: number) => {
    onFiltresChange({ ...filtres, [field]: value });
  };

  const handleDureeChange = (field: 'dureeMin' | 'dureeMax', value: number) => {
    onFiltresChange({ ...filtres, [field]: value });
  };

  const handleCpfEligibleChange = (value: boolean | null) => {
    onFiltresChange({ ...filtres, cpfEligible: value });
  };

  const clearFilters = () => {
    onFiltresChange({
      recherche: '',
      categorie: '',
      niveau: '',
      modalite: '',
      prixMin: 0,
      prixMax: 5000,
      dureeMin: 0,
      dureeMax: 100,
      cpfEligible: null
    });
  };

  const hasActiveFilters = filtres.categorie || filtres.niveau || filtres.modalite || 
    filtres.prixMin > 0 || filtres.prixMax < 5000 || 
    filtres.dureeMin > 0 || filtres.dureeMax < 100 || 
    filtres.cpfEligible !== null;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      {/* Barre de recherche */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher une formation..."
          value={filtres.recherche}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
        />
      </div>

      {/* Résultats et bouton filtres */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-600">
          {resultatsCount} formation{resultatsCount > 1 ? 's' : ''} trouvée{resultatsCount > 1 ? 's' : ''}
        </p>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Effacer les filtres
            </button>
          )}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filtres
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Filtres avancés */}
      {showFilters && (
        <div className="space-y-6 border-t border-gray-200 pt-6">
          {/* Catégories */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Catégories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {categories.map((categorie) => (
                <button
                  key={categorie.id}
                  onClick={() => handleCategorieChange(categorie.id)}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors text-left ${
                    filtres.categorie === categorie.id
                      ? 'bg-brand-100 text-brand-700 border-2 border-brand-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{categorie.icone}</span>
                    <span className="truncate">{categorie.nom}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Niveau et modalité */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Niveau</h3>
              <div className="space-y-2">
                {['débutant', 'intermédiaire', 'avancé', 'expert'].map((niveau) => (
                  <button
                    key={niveau}
                    onClick={() => handleNiveauChange(niveau)}
                    className={`w-full p-2 rounded-lg text-sm font-medium transition-colors text-left ${
                      filtres.niveau === niveau
                        ? 'bg-brand-100 text-brand-700'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {niveau.charAt(0).toUpperCase() + niveau.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Modalité</h3>
              <div className="space-y-2">
                {['présentiel', 'distanciel', 'hybride'].map((modalite) => (
                  <button
                    key={modalite}
                    onClick={() => handleModaliteChange(modalite)}
                    className={`w-full p-2 rounded-lg text-sm font-medium transition-colors text-left ${
                      filtres.modalite === modalite
                        ? 'bg-brand-100 text-brand-700'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {modalite.charAt(0).toUpperCase() + modalite.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Prix et durée */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Prix (€)</h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filtres.prixMin || ''}
                  onChange={(e) => handlePrixChange('prixMin', parseInt(e.target.value) || 0)}
                  className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filtres.prixMax || ''}
                  onChange={(e) => handlePrixChange('prixMax', parseInt(e.target.value) || 5000)}
                  className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Durée (heures)</h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filtres.dureeMin || ''}
                  onChange={(e) => handleDureeChange('dureeMin', parseInt(e.target.value) || 0)}
                  className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filtres.dureeMax || ''}
                  onChange={(e) => handleDureeChange('dureeMax', parseInt(e.target.value) || 100)}
                  className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                />
              </div>
            </div>
          </div>

          {/* CPF éligible */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Éligibilité CPF</h3>
            <div className="flex gap-2">
              <button
                onClick={() => handleCpfEligibleChange(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filtres.cpfEligible === true
                    ? 'bg-green-100 text-green-700 border-2 border-green-200'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                Éligible CPF
              </button>
              <button
                onClick={() => handleCpfEligibleChange(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filtres.cpfEligible === false
                    ? 'bg-red-100 text-red-700 border-2 border-red-200'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                Non éligible
              </button>
              <button
                onClick={() => handleCpfEligibleChange(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filtres.cpfEligible === null
                    ? 'bg-brand-100 text-brand-700 border-2 border-brand-200'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                Tous
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

