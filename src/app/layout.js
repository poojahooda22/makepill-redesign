import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from '@/components/cursor/Index';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Makepill Redesign",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor/>
        {children}
      </body>
    </html>
  );
}
