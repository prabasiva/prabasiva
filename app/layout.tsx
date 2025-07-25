import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getContent } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const content = getContent();

export const metadata: Metadata = {
  title: `${content.personal.name} - ${content.personal.title}`,
  description: content.personal.bio,
  keywords: "Digital Transformation Executive, Enterprise Architecture, API Platform, GenAI, Machine Learning, Data Analytics, Engineering Leader",
  authors: [{ name: content.personal.name }],
  creator: content.personal.name,
  openGraph: {
    title: `${content.personal.name} - ${content.personal.title}`,
    description: content.personal.bio,
    url: 'https://prabasiva.com',
    siteName: `${content.personal.name} Portfolio`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.personal.name} - ${content.personal.title}`,
    description: content.personal.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}