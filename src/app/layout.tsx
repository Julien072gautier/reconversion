import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StructuredData } from '@/components/seo/StructuredData';
import { ConsentProvider } from '@/hooks/useConsent';
import { initializeGoogleConsent } from '@/lib/consent-google';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'MaReconversionCPF - Votre reconversion, bloc par bloc',
    template: '%s | MaReconversionCPF'
  },
  description: 'Identifiez des blocs de compétences éligibles CPF, assemblez votre parcours, préparez votre dossier. Plateforme de reconversion professionnelle.',
  keywords: [
    'reconversion professionnelle',
    'CPF',
    'formation',
    'compétences',
    'parcours professionnel',
    'dossier CPF',
    'blocs de compétences'
  ],
  authors: [{ name: 'MaReconversionCPF' }],
  creator: 'MaReconversionCPF',
  publisher: 'MaReconversionCPF',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mareconversioncpf.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'MaReconversionCPF',
    title: 'MaReconversionCPF - Votre reconversion, bloc par bloc',
    description: 'Identifiez des blocs de compétences éligibles CPF, assemblez votre parcours, préparez votre dossier.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MaReconversionCPF - Plateforme de reconversion professionnelle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaReconversionCPF - Votre reconversion, bloc par bloc',
    description: 'Identifiez des blocs de compétences éligibles CPF, assemblez votre parcours, préparez votre dossier.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialiser Google Consent Mode avant tout autre script
              (function() {
                ${initializeGoogleConsent.toString()}
                initializeGoogleConsent();
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ConsentProvider>
          <StructuredData />
          {children}
          <CookieBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
