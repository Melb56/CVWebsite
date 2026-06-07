import type { Metadata } from 'next';
import AosInit from './components/AosInit';


export const metadata: Metadata = {
   title: 'Mélanie Bruzac - Alternante Cybersécurité, Systèmes & Réseaux',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body>
          <AosInit />
        {children}
      </body>
    </html>
  );
}
