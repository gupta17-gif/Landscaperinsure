import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "LandscaperInsure — Affordable Landscaping Insurance",
    template: "%s | LandscaperInsure",
  },
  description:
    "Get general liability insurance for your landscaping business in minutes. Free quotes, licensed broker, top-rated coverage. Nationwide.",
  keywords: [
    "landscaping insurance",
    "landscaper general liability",
    "landscaping business insurance",
    "GL insurance landscapers",
    "landscaping insurance cost",
    "landscaping insurance quote",
  ],
  openGraph: {
    title: "LandscaperInsure — Affordable Landscaping Insurance",
    description:
      "Get general liability insurance for your landscaping business in minutes. Free quotes from a licensed broker.",
    url: "https://landscaperinsure.com",
    siteName: "LandscaperInsure",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
