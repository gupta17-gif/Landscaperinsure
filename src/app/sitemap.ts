import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://landscaperinsure.com";
  const now = new Date().toISOString();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/quote", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/general-liability", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/cost", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/workers-compensation", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/certificate-of-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/do-i-need-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    // Niche pages
    { url: "/lawn-care-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tree-trimming-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/hardscaping-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/irrigation-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/snow-removal-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    // State pages
    { url: "/california-landscaping-insurance", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/texas-landscaping-insurance", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/florida-landscaping-insurance", priority: 0.7, changeFrequency: "monthly" as const },
    // Resource pages
    { url: "/hoa-contracts", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/seasonal-coverage", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/employee-vs-subcontractor", priority: 0.7, changeFrequency: "monthly" as const },
    // Company pages
    { url: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/opt-out", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
