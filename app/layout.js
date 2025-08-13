import './globals.css';

export const metadata = {
   title: 'Portfolio - GreatStack',
   description: '',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="font-Outfit antialiased leading-8 overflow-x-hidden">
            {children}
         </body>
      </html>
   );
}
