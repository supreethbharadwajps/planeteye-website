import './globals.css';
import { Fraunces, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsappButton';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import SchemaScript from '@/components/ui/SchemaScript';
import { OrganizationSchema, WebSiteSchema } from '@/lib/schema-org';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata = {
  title: { default: 'Planet Eye – Managed Farmland near Bangalore', template: '%s | Planet Eye' },
  description: '15+ years managed farmland developer near Bangalore. Eco-friendly farm plots with EMI, gated communities, plantation maintenance. Invest today.',
  metadataBase: new URL('https://planeteye.in'),
  openGraph: { siteName: 'Planet Eye', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <SchemaScript schema={OrganizationSchema} />
        <SchemaScript schema={WebSiteSchema} />
      </head>
      <body className="font-sans text-charcoal bg-sand min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </body>
    </html>
  );
}