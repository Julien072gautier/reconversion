import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from '@/components/NavLink';
import ManageCookies from '@/components/ManageCookies';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="MaReconversionCPF - Logo" 
                width={120}
                height={40}
                className="h-10 w-auto logo-sharp"
                priority
                quality={100}
                unoptimized={false}
              />
            </Link>
            <nav className="flex gap-1">
              <NavLink href="/">Accueil</NavLink>
              <NavLink href="/catalogue">Catalogue</NavLink>
              <NavLink href="/reconversion/projet">Reconversion</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white mt-12">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Informations FORMAPRO BY ACCERTIF */}
            <div className="space-y-4">
              <div>
                <div className="mb-3">
                  <Image 
                    src="/logoblanc.png" 
                    alt="FORMAPRO BY ACCERTIF - Logo" 
                    width={160}
                    height={60}
                    className="h-12 w-auto logo-sharp"
                    quality={100}
                    unoptimized={false}
                  />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Organisme de formation professionnelle spécialisé dans la reconversion et le développement des compétences.
                </p>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p><strong>Adresse :</strong> 905 Chemin de l'Évêque<br />82290 Montbeton, France</p>
                <p><strong>Téléphone :</strong> 09 75 85 65 10</p>
                <p><strong>Email :</strong> hello@formaprobyaccertif.fr</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Nos Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/catalogue" className="hover:text-white transition-colors">Catalogue formations</Link></li>
                <li><Link href="/reconversion/projet" className="hover:text-white transition-colors">Reconversion professionnelle</Link></li>
                <li><Link href="/blocs" className="hover:text-white transition-colors">Blocs de compétences</Link></li>
                <li><Link href="/parcours" className="hover:text-white transition-colors">Parcours personnalisés</Link></li>
                <li><Link href="/dossier" className="hover:text-white transition-colors">Dossier CPF</Link></li>
              </ul>
            </div>

            {/* Formations */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Formations</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/catalogue?categorie=comptabilite" className="hover:text-white transition-colors">Comptabilité</Link></li>
                <li><Link href="/catalogue?categorie=digital" className="hover:text-white transition-colors">Digital</Link></li>
                <li><Link href="/catalogue?categorie=management" className="hover:text-white transition-colors">Management</Link></li>
                <li><Link href="/catalogue?categorie=bureautique" className="hover:text-white transition-colors">Bureautique</Link></li>
                <li><Link href="/catalogue?categorie=langues" className="hover:text-white transition-colors">Langues</Link></li>
              </ul>
            </div>

            {/* Informations légales */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Informations légales</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p><strong>Organisme de formation :</strong><br />ACCERTIF</p>
                <p><strong>N° SIRET :</strong> 918 199 951 00016</p>
                <p><strong>N° Déclaration :</strong> 76820111882</p>
                <p><strong>Code APE :</strong> 7022Z</p>
                <p><strong>RCS :</strong> Montauban B 918 199 951</p>
                <p><strong>Déclaration d'activité :</strong><br />enregistrée sous le numéro 76820111882</p>
              </div>
            </div>
          </div>

          {/* Liens légaux */}
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/cgu" className="hover:text-white transition-colors">
                CGU
              </Link>
              <Link href="/confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <ManageCookies />
            </div>
            <div className="mt-4 text-xs text-gray-500">
              <p>© 2024 ACCERTIF. Tous droits réservés.</p>
              <p>Organisme de formation certifié Qualiopi - Certification qualité des prestataires de formation</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
