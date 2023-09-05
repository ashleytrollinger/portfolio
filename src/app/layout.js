import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'; // Import Head from Next.js

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ashley Trollinger',
  description: 'Personal Portfolio developed by Ashley Trollinger to display her works',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width" />
        {/* Add other meta tags, title, and description here */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
