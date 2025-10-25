'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'bg-slate-900 text-white'
          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      {children}
    </Link>
  );
}