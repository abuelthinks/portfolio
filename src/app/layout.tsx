import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abuel Bayangan — Full-Stack Developer',
  description:
    'Portfolio of Abuel A. Bayangan — full-stack developer (Next.js, Django) and BSIT student on the Network & Security track at the University of the Cordilleras, Baguio City.',
  keywords: [
    'Abuel Bayangan',
    'Full-Stack Developer',
    'Next.js',
    'Django',
    'Network Security',
    'Baguio City',
    'Philippines',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Abuel A. Bayangan' }],
  creator: 'Abuel A. Bayangan',
  openGraph: {
    title: 'Abuel Bayangan — Full-Stack Developer',
    description:
      'Full-stack developer building with Next.js & Django, with a network & security mindset.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Abuel Bayangan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abuel Bayangan — Full-Stack Developer',
    description:
      'Full-stack developer building with Next.js & Django, with a network & security mindset.',
  },
};

export const viewport: Viewport = {
  themeColor: '#06070a',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased relative min-h-screen">
        {children}
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  );
}
