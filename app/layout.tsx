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
  metadataBase: new URL('https://onflow.ai'),
  title: {
    default: 'Onflow | Autonomous AI Agents for QA & UX Testing',
    template: '%s | Onflow',
  },
  description:
    'Onflow uses autonomous AI agents with computer vision to test your product like real users. Detect bugs, find UX friction, and generate fixes automatically.',
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
    canonical: 'https://onflow.ai',
  },
  openGraph: {
    title: 'Onflow | Autonomous AI Agents for QA & UX Testing',
    description:
      'Autonomous AI agents that see and use your app like humans. Detect bugs, find UX friction, and generate fixes automatically.',
    url: 'https://onflow.ai',
    siteName: 'Onflow',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://onflow.ai/og-image.png', // Placeholder for now
        width: 1200,
        height: 630,
        alt: 'Onflow AI Agentic Testing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onflow | Autonomous AI Agents for QA & UX Testing',
    description:
      'Autonomous AI agents that see and use your app like humans. Detect bugs, find UX friction, and generate fixes automatically.',
    creator: '@onflow_ai',
    images: ['https://onflow.ai/og-image.png'],
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
    'Onflow uses autonomous AI agents with computer vision to test your product like real users.',
  author: {
    '@type': 'Organization',
    name: 'Onflow',
    url: 'https://onflow.ai',
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
