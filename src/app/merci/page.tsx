import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Mail, Phone, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Merci pour votre message - MaReconversionCPF',
  description: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
  robots: {
    index: false,
    follow: true,
  },
};

interface MerciPageProps {
  searchParams: {
    subject?: string;
  };
}

export default function MerciPage({ searchParams }: MerciPageProps) {
  const subject = searchParams.subject || 'votre demande';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Carte principale */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
          {/* Icône de succès */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Message envoyé avec succès !
          </h1>

          {/* Message de confirmation */}
          <p className="text-lg text-gray-600 mb-8">
            Merci pour votre intérêt concernant <strong>{subject}</strong>. 
            Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
          </p>

          {/* Informations de contact */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Besoin d'aide immédiate ?
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-brand-500" />
                <span className="text-gray-700">contact@mareconversioncpf.fr</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-brand-500" />
                <span className="text-gray-700">01 23 45 67 89</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/reconversion/projet"
              className="flex-1 bg-brand-500 hover:bg-brand-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Commencer ma reconversion</span>
            </Link>
            <Link
              href="/"
              className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Link>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Temps de réponse moyen : 24h ouvrées
          </p>
        </div>
      </div>
    </div>
  );
}

