import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Card } from '@/components/Card';

export const metadata: Metadata = {
  title: 'Contact - FORMAPRO BY ACCERTIF',
  description: 'Contactez FORMAPRO BY ACCERTIF pour vos formations professionnelles. Organisme de formation certifié Qualiopi spécialisé dans la reconversion.',
  keywords: [
    'contact formation',
    'FORMAPRO BY ACCERTIF',
    'organisme formation',
    'formation professionnelle',
    'reconversion',
    'CPF',
    'Qualiopi'
  ],
  openGraph: {
    title: 'Contact - FORMAPRO BY ACCERTIF',
    description: 'Contactez FORMAPRO BY ACCERTIF pour vos formations professionnelles. Organisme de formation certifié Qualiopi.',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
            Contactez FORMAPRO BY ACCERTIF
          </h1>
          <p className="text-lg text-slate-600 mb-8 text-balance">
            Organisme de formation professionnelle certifié Qualiopi. Notre équipe d'experts vous accompagne dans votre parcours de reconversion et de développement des compétences.
          </p>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                📧 Nous écrire
              </h2>
              <p className="text-slate-600 mb-6">
                Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="info">Demande d'information</option>
                    <option value="support">Support technique</option>
                    <option value="counseling">Conseil en reconversion</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Envoyer le message
                </button>
              </form>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  📞 Informations de contact
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">hello@formaprobyaccertif.fr</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Téléphone</p>
                    <p className="text-slate-600">09 75 85 65 10</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Adresse</p>
                    <p className="text-slate-600">905 Chemin de l'Évêque<br />82290 Montbeton, France</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Horaires</p>
                    <p className="text-slate-600">Lun-Ven : 9h-18h</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">N° SIRET</p>
                    <p className="text-slate-600">918 199 951 00016</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Certification</p>
                    <p className="text-slate-600">Organisme certifié Qualiopi</p>
                  </div>
                </div>
              </Card>
              
              <Card>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  💬 FAQ rapide
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Comment financer ma formation ?</p>
                    <p className="text-slate-600 text-sm">Nos formations sont éligibles à différents dispositifs de financement : CPF, plan de développement des compétences, OPCO, Pôle Emploi, etc.</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Combien de temps dure une Form'action certifiante ?</p>
                    <p className="text-slate-600 text-sm">La durée varie selon les formations, généralement entre 14 et 60 heures. Chaque parcours est adapté à vos disponibilités.</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Les formations sont-elles accessibles à distance ?</p>
                    <p className="text-slate-600 text-sm">Oui, toutes nos formations sont accessibles à distance via notre plateforme SKILLUP by Accertif avec accompagnement individualisé.</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Comment s'inscrire à une formation ?</p>
                    <p className="text-slate-600 text-sm">Contactez-nous par téléphone ou email. Notre équipe vous accompagnera dans votre inscription et les démarches administratives.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
