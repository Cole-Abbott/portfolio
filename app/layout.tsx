import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cole's Portfolio",
  description: "Cole Abbott's Mechanical Engineering Portfolio",
};

// const links: { label: string; path: string }[] = [
//   // More links...
//   { label: 'Home', path: '/' },
//   { label: 'About', path: '/about' },
// ]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-base-bg text-content-dark`}>
        {children}
      </body>
    </html>
  );
} 