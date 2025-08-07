import './globals.css';

export const metadata = {
   title: 'Portfolio - GreatStack',
   description: '',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="antialiased font-Outfit">{children}</body>
      </html>
   );
}
