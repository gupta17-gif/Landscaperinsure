import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Script from "next/script";

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
    "lawn care insurance",
    "tree trimming insurance",
    "hardscaping insurance",
  ],
  openGraph: {
    title: "LandscaperInsure — Affordable Landscaping Insurance",
    description:
      "Get general liability insurance for your landscaping business in minutes. Free quotes from a licensed broker.",
    url: "https://landscaperinsure.com",
    siteName: "LandscaperInsure",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LandscaperInsure — Affordable Landscaping Insurance",
    description:
      "Get GL insurance for your landscaping business in minutes. Free quotes from a licensed broker. All 50 states.",
  },
  metadataBase: new URL("https://landscaperinsure.com"),
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "LandscaperInsure",
  legalName: "ContractorFlow Insurance Services",
  url: "https://landscaperinsure.com",
  description:
    "Licensed insurance brokerage specializing in affordable coverage for landscaping businesses nationwide.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$45-$75/month",
  knowsAbout: [
    "Landscaping Insurance",
    "General Liability Insurance",
    "Workers Compensation Insurance",
    "Certificate of Insurance",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Insurance License",
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: "California Department of Insurance",
    },
    identifier: "0F03649",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
