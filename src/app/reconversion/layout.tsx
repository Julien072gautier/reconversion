import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Stepper } from '@/components/reconversion/Stepper';

export const metadata: Metadata = {
  title: 'Reconversion professionnelle',
  description: 'Construisez votre parcours de reconversion professionnelle avec des blocs de compétences éligibles CPF.',
  robots: {
    index: true,
    follow: true,
  },
};

const steps = [
  'Projet',
  'Blocs',
  'Modalités',
  'Dossier',
  'Suivi'
];

interface ReconversionLayoutProps {
  children: React.ReactNode;
  currentStep?: number;
}

export default function ReconversionLayout({ 
  children, 
  currentStep = 1 
}: ReconversionLayoutProps) {
  return (
    <MainLayout>
      <div className="container py-8">
        {/* Stepper */}
        <div className="mb-8">
          <Stepper currentStep={currentStep} steps={steps} />
        </div>
        
        {/* Contenu */}
        {children}
      </div>
    </MainLayout>
  );
}

