'use client';

import { useMemo } from 'react';
import type { Dossier, ComplianceConfig } from '@/types/reconversion';
import { ensureCompliance } from '@/lib/validation/reconversion';
import { cn } from '@/lib/utils';

interface ComplianceGuardProps {
  dossier: Dossier;
  config?: ComplianceConfig;
  children: React.ReactNode;
  className?: string;
}

export function ComplianceGuard({ 
  dossier, 
  config = { minSyncRatio: 0.5, minHours: 100, maxHours: 500 },
  children,
  className 
}: ComplianceGuardProps) {
  const compliance = useMemo(() => {
    return ensureCompliance(dossier, config);
  }, [dossier, config]);

  return (
    <div className={cn('space-y-4', className)}>
      {!compliance.ok && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="h-5 w-5 text-red-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-red-800">
                Dossier incomplet
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul className="list-disc list-inside space-y-1">
                  {compliance.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={cn(
        'transition-opacity duration-200',
        compliance.ok ? 'opacity-100' : 'opacity-50 pointer-events-none'
      )}>
        {children}
      </div>

      {compliance.ok && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="h-5 w-5 text-green-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-green-800">
                Dossier conforme
              </h3>
              <p className="mt-1 text-sm text-green-700">
                Toutes les conditions sont respectées. Vous pouvez continuer.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

