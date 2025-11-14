import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Million Plan - From Zero to $1,000,000',
  description:
    'A rigorous, stepwise blueprint to build from no money, assets, contacts, or skills to $1,000,000 in value created. Education-first, ethics-first, execution-focused.',
  keywords: [
    'make money',
    'start from zero',
    'bootstrap',
    'no code',
    'entrepreneurship',
    'million plan',
    'blueprint'
  ],
  openGraph: {
    title: 'The Million Plan - From Zero to $1,000,000',
    description:
      'A rigorous, stepwise blueprint to build from no money, assets, contacts, or skills to $1,000,000 in value created.',
    url: 'https://agentic-cfe9a230.vercel.app',
    siteName: 'The Million Plan',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Million Plan - From Zero to $1,000,000',
    description:
      'A rigorous, stepwise blueprint to build from no money, assets, contacts, or skills to $1,000,000 in value created.'
  },
  metadataBase: new URL('https://agentic-cfe9a230.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
