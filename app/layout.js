import { Manrope } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Bridger Tower | Designer and Developer',
  description:
    'Bridger Tower is a designer and developer from Salt Lake City, UT. Crafting software and websites using Next.js, Tailwind, and Vercel.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="p-8 md:p-24 dark:bg-[#222] dark:text-[#EEE]">{children}</body>
      <Analytics />
    </html>
  );
}
