import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Onflow - Test your Flows',
  description:
    'Onflow uses AI agents with computer vision to test your product like real users—finding bugs, UX issues, and friction before launch.',
  keywords: [
    'QA automation',
    'AI testing',
    'user research',
    'computer vision',
    'agentic testing',
    'automated testing',
  ],
  authors: [{ name: 'Onflow' }],
  openGraph: {
    title: 'Onflow - Test your Flows',
    description:
      'AI-powered agentic testing with computer vision. Test your product like real users.',
    type: 'website',
    siteName: 'Onflow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onflow - Test your Flows',
    description:
      'AI-powered agentic testing with computer vision. Test your product like real users.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
