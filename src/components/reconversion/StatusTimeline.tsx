'use client';

import type { StatusHistory } from '@/types/reconversion';
import { cn } from '@/lib/utils';

interface StatusTimelineProps {
  history: StatusHistory[];
  className?: string;
}

export function StatusTimeline({ history, className }: StatusTimelineProps) {
  const getStatusInfo = (statut: StatusHistory['statut']) => {
    switch (statut) {
      case 'brouillon':
        return {
          label: 'Brouillon',
          color: 'bg-gray-500',
          icon: '📝'
        };
      case 'envoye':
        return {
          label: 'Envoyé',
          color: 'bg-blue-500',
          icon: '📤'
        };
      case 'en_attente_employeur':
        return {
          label: 'En attente employeur',
          color: 'bg-yellow-500',
          icon: '⏳'
        };
      case 'en_montage_of':
        return {
          label: 'En montage OF',
          color: 'bg-purple-500',
          icon: '🔧'
        };
      case 'accepte':
        return {
          label: 'Accepté',
          color: 'bg-green-500',
          icon: '✅'
        };
      case 'refuse':
        return {
          label: 'Refusé',
          color: 'bg-red-500',
          icon: '❌'
        };
      default:
        return {
          label: 'Inconnu',
          color: 'bg-gray-500',
          icon: '❓'
        };
    }
  };

  if (history.length === 0) {
    return (
      <div className={cn('text-center py-8 text-gray-500', className)}>
        Aucun historique disponible
      </div>
    );
  }

  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Suivi du dossier
      </h3>
      
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />
        
        <div className="space-y-6">
          {history.map((entry, index) => {
            const statusInfo = getStatusInfo(entry.statut);
            const isLast = index === history.length - 1;
            
            return (
              <div key={index} className="relative flex items-start">
                {/* Point de statut */}
                <div className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-medium z-10',
                  statusInfo.color
                )}>
                  {statusInfo.icon}
                </div>
                
                {/* Contenu */}
                <div className="ml-6 flex-1">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {statusInfo.label}
                      </h4>
                      <time className="text-sm text-gray-500">
                        {new Date(entry.date).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </time>
                    </div>
                    
                    {entry.note && (
                      <p className="text-sm text-gray-600 mt-2">
                        {entry.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Note informative */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <div className="flex items-start">
          <svg className="h-5 w-5 text-blue-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="text-sm font-medium text-blue-900">
              Information importante
            </h4>
            <p className="mt-1 text-sm text-blue-800">
              L'organisme de formation partenaire gère la prise de contact avec l'employeur 
              et le montage final du dossier de reconversion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

