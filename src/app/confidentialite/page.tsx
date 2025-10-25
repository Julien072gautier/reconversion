import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de Reconversion - Comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/confidentialite',
  },
};

export default function ConfidentialitePage() {
  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Politique de confidentialité
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Collecte des données personnelles
              </h2>
              <p className="text-slate-600 mb-4">
                Nous collectons les données personnelles que vous nous fournissez volontairement lorsque vous :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Créez un compte sur notre plateforme</li>
                <li>Vous inscrivez à nos formations</li>
                <li>Nous contactez via le formulaire de contact</li>
                <li>Participez à nos enquêtes ou questionnaires</li>
              </ul>
              <p className="text-slate-600">
                Les données collectées incluent notamment : nom, prénom, adresse email, numéro de téléphone, 
                informations professionnelles et objectifs de reconversion.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Utilisation des données
              </h2>
              <p className="text-slate-600 mb-4">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                <li>Fournir nos services de reconversion professionnelle</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Vous envoyer des informations sur nos formations</li>
                <li>Améliorer nos services et développer de nouveaux produits</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Base légale du traitement
              </h2>
              <p className="text-slate-600 mb-4">
                Conformément au RGPD, nous traitons vos données personnelles sur la base de :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Votre consentement</strong> pour l'envoi de communications marketing</li>
                <li><strong>L'exécution du contrat</strong> pour la fourniture de nos services</li>
                <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services</li>
                <li><strong>L'obligation légale</strong> pour certaines données de facturation</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Partage des données
              </h2>
              <p className="text-slate-600 mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Nos partenaires de formation (avec votre consentement)</li>
                <li>Nos prestataires techniques (sous contrat de confidentialité)</li>
                <li>Les autorités compétentes (si requis par la loi)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Sécurité des données
              </h2>
              <p className="text-slate-600">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
                contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Vos droits
              </h2>
              <p className="text-slate-600 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                <li><strong>Droit de limitation :</strong> limiter le traitement</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Pour exercer ces droits, contactez-nous à : dpo@reconversion.fr
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Conservation des données
              </h2>
              <p className="text-slate-600">
                Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, 
                et au maximum 3 ans après la fin de notre relation contractuelle, sauf obligation légale contraire.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-slate-600">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Contact
              </h2>
              <p className="text-slate-600">
                Pour toute question relative à cette politique de confidentialité, contactez-nous à : 
                <a href="mailto:dpo@reconversion.fr" className="text-slate-900 hover:underline">dpo@reconversion.fr</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

