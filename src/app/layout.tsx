import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ABUEL BAYANGAN | VIBE CODER',
  description: 'Portfolio of Abuel A. Bayangan - BSIT Student, Full-Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased relative min-h-screen selection:bg-[#00ffcc] selection:text-black`}>
        {/* The grid background is handled in globals.css body */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] pointer-events-none"></div>
        {children}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
