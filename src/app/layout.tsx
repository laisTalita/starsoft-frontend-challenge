import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import ClientProvider from '@/provider/ClientProvider';
import './globals.css';
import '@/styles/globals.scss';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description: 'Página Home',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ClientProvider>
          <Header />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
