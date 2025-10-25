import { Metadata } from 'next';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Identifiez des blocs de compétences éligibles CPF, assemblez votre parcours, préparez votre dossier de reconversion professionnelle.',
  openGraph: {
    title: 'Reconversion - Votre reconversion, bloc par bloc',
    description: 'Identifiez des blocs de compétences éligibles CPF, assemblez votre parcours, préparez votre dossier.',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <MainLayout>
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight text-balance">
            Votre reconversion, bloc par bloc.
          </h1>
          <p className="text-lg text-slate-600 mb-8 text-balance">
            Identifiez des blocs de compétences éligibles CPF, assemblez votre parcours, préparez
            votre dossier.
          </p>
          <Link
            href="/blocs"
            className="btn-primary"
          >
            Commencer
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

