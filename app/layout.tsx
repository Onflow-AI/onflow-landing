import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://runonflow.com'),
  title: {
    default: 'Onflow | Test and improve product flows',
    template: '%s | Onflow',
  },
  description:
    'Onflow lets founders simulate personas with a swarm of agents to test, evaluate and iterate in a continous loop, optimising user flows for their target users.',
  keywords: [
    'QA automation',
    'AI testing',
    'computer vision',
    'agentic workflow',
    'UX research',
    'frontend testing',
    'autonomous agents',
    'visual regression testing',
    'browser using agents',
    'BUA',
  ],
  authors: [{ name: 'Onflow Team' }],
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
  alternates: {
    canonical: 'https://runonflow.com',
  },
  openGraph: {
    title: 'Onflow | Test and improve product flows',
    description:
      'Autonomous AI agents that see and use your app like humans. Detect bugs, find UX friction, and generate fixes automatically.',
    url: 'https://runonflow.com',
    siteName: 'Onflow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://runonflow.com/og-image.png', // Placeholder for now
        width: 1200,
        height: 630,
        alt: 'Onflow AI Agentic Testing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onflow | Test and improve product flows',
    description:
      'Autonomous AI agents that see and use your app like humans. Detect bugs, find UX friction, and generate fixes automatically.',
    creator: '@onflow_ai',
    images: ['https://runonflow.com/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Onflow',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Onflow lets founders simulate personas with a swarm of agents to test, evaluate and iterate in a continous loop, optimising user flows for their target users.',
  author: {
    '@type': 'Organization',
    name: 'Onflow',
    url: 'https://runonflow.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
