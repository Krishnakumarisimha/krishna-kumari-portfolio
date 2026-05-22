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
  title: "Krishna Kumari Simha | Resume & LinkedIn Branding Expert",

  description:
    "Professional Resume Writing, LinkedIn Optimization, Portfolio Development, and Career Branding Services designed to help professionals stand out and grow globally.",

  keywords: [
    "Resume Writer",
    "LinkedIn Optimization",
    "Portfolio Designer",
    "ATS Resume",
    "Career Branding",
    "Resume Writing Services",
    "Professional Resume",
    "LinkedIn Branding",
  ],

  authors: [{ name: "Krishna Kumari Simha" }],

  creator: "Krishna Kumari Simha",

  openGraph: {
    title: "Krishna Kumari Simha | Resume & LinkedIn Branding Expert",

    description:
      "Professional Resume Writing, LinkedIn Optimization, Portfolio Development, and Career Branding Services.",

    url: "https://krishna-kumari-portfolio.vercel.app",

    siteName: "Krishna Kumari Portfolio",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}