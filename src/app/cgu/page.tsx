import { Metadata } from 'next';
import { MainLayout } from '@/components/layouts/MainLayout';

export const metadata: Metadata = {
  title: 'Conditions générales d\'utilisation',
  description: 'Conditions générales d\'utilisation du site Reconversion - Règles d\'usage, responsabilités et obligations des utilisateurs.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/cgu',
  },
};

export default function CGUPage() {
  return (
    <MainLayout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Conditions générales d'utilisation
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Article 1 - Objet
              </h2>
              <p className="text-slate-600 mb-4">
                Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site reconversion.fr 
                et des services proposés par Reconversion SAS.
              </p>
              <p className="text-slate-600">
                L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Article 2 - Accès au site
              </h2>
              <p className="text-slate-600 mb-4">
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
                Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
              <p className="text-slate-600">
                Reconversion SAS se réserve le droit de modifier, suspendre ou interrompre l'accès au site à tout moment.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Article 3 - Utilisation du site
              </h2>
              <p className="text-slate-600 mb-4">
                L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et aux présentes CGU.
              </p>
              <p className="text-slate-600 mb-4">
                Il est notamment interdit de :
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Utiliser le site à des fins illégales ou non autorisées</li>
                <li>Transmettre des contenus illicites, offensants ou diffamatoires</li>
                <li>Tenter de contourner les mesures de sécurité du site</li>
                <li>Collecter des données personnelles d'autres utilisateurs</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Article 4 - Responsabilité
              </h2>
              <p className="text-slate-600 mb-4">
                Reconversion SAS s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'exactitude, 
                la complétude ou l'actualité des informations diffusées sur le site.
              </p>
              <p className="text-slate-600">
                L'utilisateur est seul responsable de l'utilisation qu'il fait des informations et services proposés sur le site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Article 5 - Propriété intellectuelle
              </h2>
              <p className="text-slate-600">
                Tous les éléments du site (textes, images, vidéos, logos, etc.) sont protégés par le droit d'auteur. 
                Toute reproduction ou utilisation non autorisée est interdite.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Article 6 - Modification des CGU
              </h2>
              <p className="text-slate-600">
                Reconversion SAS se réserve le droit de modifier les présentes CGU à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur le site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Article 7 - Droit applicable et juridiction
              </h2>
              <p className="text-slate-600">
                Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

