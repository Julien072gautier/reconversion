import { usePathname } from 'next/navigation';

interface CanonicalUrlProps {
  url?: string;
}

export function CanonicalUrl({ url }: CanonicalUrlProps) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reconversion.fr';
  const canonicalUrl = url || `${baseUrl}${pathname}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}

