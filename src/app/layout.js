import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({
     subsets: ["latin"],
     display: "swap",
     variable: "--font-inter",
});

export const metadata = {
     title: "Combined Tours & Travels",
     description: "Combined Tours & Travels web application",
};

export default function RootLayout({ children }) {
     return (
          <html lang="en">
               <body className={inter.variable}>
                    <Navbar />
                    <main className="">{children}</main>
               </body>
          </html>
     );
}
