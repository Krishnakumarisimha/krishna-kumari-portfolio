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
  title: "Krishna Kumari Simha | Resume Writer & Portfolio Designer",

  description:
    "Professional Resume Writing, LinkedIn Optimization, Portfolio Design and Career Branding Services.",

  keywords: [
    "Resume Writer",
    "Professional Resume Writer",
    "ATS Resume Writing",
    "LinkedIn Optimization",
    "LinkedIn Branding",
    "Portfolio Designer",
    "Career Branding",
    "Resume Writing Services",
    "Executive Resume Writer",
    "Resume Consultant",
    "Personal Branding",
    "CV Writing Services",
    "Modern Portfolio Design",
    "LinkedIn Profile Optimization",
    "Career Portfolio",
    "ATS Optimized Resume",
    "Freelance Resume Writer",
    "Professional CV Writer",
  ],
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}