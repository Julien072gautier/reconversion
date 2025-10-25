'use client';

import { Formation } from '@/types/catalogue';
import { Clock, Euro, Award, Users, MapPin, Monitor, BookOpen, Tag } from 'lucide-react';

interface FormationCardProps {
  formation: Formation;
  onClick?: () => void;
}

export default function FormationCard({ formation, onClick }: FormationCardProps) {
  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case 'débutant': return 'bg-green-100 text-green-800';
      case 'intermédiaire': return 'bg-blue-100 text-blue-800';
      case 'avancé': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getModaliteIcon = (modalite: string) => {
    switch (modalite) {
      case 'présentiel': return <MapPin className="w-4 h-4" />;
      case 'distanciel': return <Monitor className="w-4 h-4" />;
      case 'hybride': return <Users className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-200 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      {/* Header avec code et niveau */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {formation.code}
              </span>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getNiveauColor(formation.niveau)}`}>
                {formation.niveau}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg leading-tight">
              {formation.titre}
            </h3>
          </div>
          {formation.cpfEligible && (
            <div className="flex-shrink-0 ml-2">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-brand-600" />
              </div>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {formation.description}
        </p>
      </div>

      {/* Informations principales */}
      <div className="p-4 space-y-3">
        {/* Durée et coût */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{formation.duree}h</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-brand-600">
            <Euro className="w-4 h-4" />
            <span>{formation.cout.toLocaleString('fr-FR')}€</span>
          </div>
        </div>

        {/* Modalité */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          {getModaliteIcon(formation.modalite)}
          <span className="capitalize">{formation.modalite}</span>
        </div>

        {/* Certification */}
        <div className="flex items-start gap-2">
          <Award className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-gray-600 font-medium">{formation.certification}</p>
            <p className="text-gray-500 text-xs">{formation.certificateur}</p>
          </div>
        </div>

        {/* Compétences principales */}
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Tag className="w-3 h-3" />
            <span>Compétences clés</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {formation.competences.slice(0, 3).map((competence, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {competence}
              </span>
            ))}
            {formation.competences.length > 3 && (
              <span className="text-xs text-gray-500">
                +{formation.competences.length - 3} autres
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer avec CTA */}
      <div className="p-4 pt-0">
        <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
          <BookOpen className="w-4 h-4" />
          Voir les détails
        </button>
      </div>
    </div>
  );
}

