'use client';

import { useState, useMemo } from 'react';
import { Filtres } from '@/types/catalogue';
import { formations, searchFormations } from '@/lib/mock/catalogue';
import SearchFilters from './SearchFilters';
import FormationGrid from './FormationGrid';
import FormationModal from './FormationModal';

export default function CatalogueClient() {
  const [filtres, setFiltres] = useState<Filtres>({
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

  const [selectedFormation, setSelectedFormation] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Recherche et filtrage des formations
  const formationsFiltrees = useMemo(() => {
    return searchFormations(filtres.recherche, filtres);
  }, [filtres]);

  const handleFormationClick = (formation: any) => {
    setSelectedFormation(formation);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFormation(null);
  };

  return (
    <div className="space-y-8">
      {/* Filtres de recherche */}
      <SearchFilters
        filtres={filtres}
        onFiltresChange={setFiltres}
        resultatsCount={formationsFiltrees.length}
      />

      {/* Grille des formations */}
      <FormationGrid
        formations={formationsFiltrees}
        onFormationClick={handleFormationClick}
      />

      {/* Modal de détail */}
      {showModal && selectedFormation && (
        <FormationModal
          formation={selectedFormation}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

