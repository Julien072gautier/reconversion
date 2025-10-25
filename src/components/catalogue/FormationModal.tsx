'use client';

import { Formation } from '@/types/catalogue';
import { X, Clock, Euro, Award, Users, MapPin, Monitor, BookOpen, Tag, CheckCircle, Star } from 'lucide-react';

interface FormationModalProps {
  formation: Formation;
  onClose: () => void;
}

export default function FormationModal({ formation, onClose }: FormationModalProps) {
  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case 'débutant': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermédiaire': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'avancé': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'expert': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getModaliteIcon = (modalite: string) => {
    switch (modalite) {
      case 'présentiel': return <MapPin className="w-5 h-5" />;
      case 'distanciel': return <Monitor className="w-5 h-5" />;
      case 'hybride': return <Users className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded">
                {formation.code}
              </span>
              <span className={`text-sm font-medium px-3 py-1 rounded-full border ${getNiveauColor(formation.niveau)}`}>
                {formation.niveau}
              </span>
              {formation.cpfEligible && (
                <div className="flex items-center gap-1 text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  Éligible CPF
                </div>
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {formation.titre}
            </h2>
            <p className="text-gray-600 text-lg">
              {formation.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors ml-4"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Contenu principal */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations principales */}
            <div className="lg:col-span-2 space-y-6">
              {/* Durée, coût et modalité */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Durée</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{formation.duree}h</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Euro className="w-5 h-5" />
                    <span className="font-medium">Coût</span>
                  </div>
                  <p className="text-2xl font-bold text-brand-600">{formation.cout.toLocaleString('fr-FR')}€</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    {getModaliteIcon(formation.modalite)}
                    <span className="font-medium">Modalité</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 capitalize">{formation.modalite}</p>
                </div>
              </div>

              {/* Certification */}
              <div className="bg-brand-50 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-brand-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Certification</h3>
                    <p className="text-brand-700 font-medium mb-1">{formation.certification}</p>
                    <p className="text-sm text-gray-600">Délivrée par {formation.certificateur}</p>
                  </div>
                </div>
              </div>

              {/* Compétences */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compétences développées</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {formation.competences.map((competence, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{competence}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mots-clés</h3>
                <div className="flex flex-wrap gap-2">
                  {formation.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    S'inscrire à la formation
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Star className="w-5 h-5" />
                    Ajouter aux favoris
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Tag className="w-5 h-5" />
                    Partager
                  </button>
                </div>
              </div>

              {/* Informations pratiques */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations pratiques</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Niveau requis</span>
                    <span className="font-medium capitalize">{formation.niveau}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Modalité</span>
                    <span className="font-medium capitalize">{formation.modalite}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Éligible CPF</span>
                    <span className={`font-medium ${formation.cpfEligible ? 'text-green-600' : 'text-red-600'}`}>
                      {formation.cpfEligible ? 'Oui' : 'Non'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificateur</span>
                    <span className="font-medium">{formation.certificateur}</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-brand-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Besoin d'aide ?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Nos conseillers sont là pour vous accompagner dans votre choix de formation.
                </p>
                <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                  Contacter un conseiller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

