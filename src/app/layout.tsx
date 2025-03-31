import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import dynamic from "next/dynamic";

// Lazy load
const Navbar = dynamic(() => import("./components/shared/navbar/navbar"), { ssr: true });
const Footer = dynamic(() => import("./components/shared/footer/footer"), { ssr: true });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovieUniverse",
  description: "The best place to find movies and TV shows",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="da">
        <body>
        <header>
            <Navbar />
        </header>
        <main>{children}</main>
        <footer>
            <Footer />
        </footer>
        </body>
        </html>
    );
}
