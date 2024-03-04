import { Inter } from "next/font/google";
import "./globals.css";
import { Happy_Monkey, Keania_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
const happyMonkey = Happy_Monkey({ subsets: ["latin"], weight: ['400']})

export const metadata = {
  title: "Whiseve",
  description: "Recreating the social life, making the college life more resourceful and fun...  Whiseve aims to power voice of students and help them message and connect anonymously in college.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={`${happyMonkey.className} bg-black text-white flex justify-center items-center overflow-hidden min-h-screen max-h-screen max-w-screen text-4xl sm:text-6xl`}>{children}</body>
    </html>
  );
}
