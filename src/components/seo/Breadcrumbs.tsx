import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  '/': [
    { label: 'Accueil', href: '/' },
  ],
  '/blocs': [
    { label: 'Accueil', href: '/' },
    { label: 'Catalogue', href: '/blocs' },
  ],
  '/parcours': [
    { label: 'Accueil', href: '/' },
    { label: 'Parcours', href: '/parcours' },
  ],
  '/dossier': [
    { label: 'Accueil', href: '/' },
    { label: 'Dossier', href: '/dossier' },
  ],
  '/contact': [
    { label: 'Accueil', href: '/' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = breadcrumbMap[pathname] || [];

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="container py-4">
      <ol className="flex items-center space-x-2 text-sm text-slate-600">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 mx-2 text-slate-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-slate-900 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

