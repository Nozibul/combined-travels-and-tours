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
                    {/* <NextTopLoader color="rgb(5 150 105)" height={2} speed={200} /> */}
                    <Navbar />
                    <main className="p-2">{children}</main>
               </body>
          </html>
     );
}
