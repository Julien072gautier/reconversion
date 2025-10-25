import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Mentions légales - FORMAPRO BY ACCERTIF',
  description: 'Mentions légales du site FORMAPRO BY ACCERTIF - Organisme de formation professionnelle certifié Qualiopi.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/mentions-legales',
  },
};

export default function MentionsPage() {
  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Mentions légales
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Éditeur du site
              </h2>
              <p className="text-slate-600 mb-4">
                Le site mareconversioncpf.fr est édité par ACCERTIF, organisme de formation professionnelle 
                certifié Qualiopi, dont le siège social est situé au 905 chemin de l'évêque, 82290 Montbeton, France.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Raison sociale :</strong> ACCERTIF<br />
                <strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)<br />
                <strong>Capital social :</strong> 1 000 €<br />
                <strong>N° SIRET :</strong> 91819995100016<br />
                <strong>Numéro TVA :</strong> FR73918199951<br />
                <strong>RCS :</strong> Montauban B 918 199 951<br />
                <strong>Code APE :</strong> 7022Z (Conseil pour les affaires et autres conseils de gestion)<br />
                <strong>N° Déclaration d'activité :</strong> 76820111882<br />
                <strong>Date d'enregistrement :</strong> 10/10/2022<br />
                <strong>Région :</strong> Occitanie
              </p>
              <p className="text-slate-600">
                <strong>Directeur de la publication :</strong> [Nom du directeur]<br />
                <strong>Email :</strong> hello@formaprobyaccertif.fr<br />
                <strong>Téléphone :</strong> 09 75 85 65 10<br />
                <strong>Certification :</strong> Organisme de formation certifié Qualiopi
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Hébergement
              </h2>
              <p className="text-slate-600">
                Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-slate-600 mb-4">
                L'ensemble du contenu du site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur et appartient à Reconversion SAS ou à ses partenaires.
              </p>
              <p className="text-slate-600">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Protection des données personnelles
              </h2>
              <p className="text-slate-600 mb-4">
                Les données personnelles collectées sur ce site sont traitées conformément à notre politique de confidentialité, 
                accessible à l'adresse : <a href="/confidentialite" className="text-slate-900 hover:underline">/confidentialite</a>
              </p>
              <p className="text-slate-600">
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition 
                aux données vous concernant. Pour exercer ces droits, contactez-nous à : hello@formaprobyaccertif.fr
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Cookies
              </h2>
              <p className="text-slate-600">
                Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
                Vous pouvez accepter ou refuser les cookies via les paramètres de votre navigateur.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Droit applicable
              </h2>
              <p className="text-slate-600">
                Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
