import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Florida Landscaping Insurance — GL, Workers' Comp & Hurricane Coverage",
  description:
    "Landscaping insurance in Florida. Workers' comp required with 4+ employees. Learn about hurricane liability, FL requirements, and get a free quote.",
};

export default function FloridaPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Florida Landscaping Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Year-round growing season means year-round risk. Florida landscapers
            face unique challenges from hurricanes, heat, and high litigation
            rates.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Florida Insurance Requirements
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Workers' Comp (4+ Employees)",
                desc: "Florida requires workers' comp for landscaping businesses with 4 or more employees. Construction-related landscaping may have different thresholds.",
              },
              {
                title: "General Liability",
                desc: "Not state-mandated, but required by every HOA, condo association, and commercial property in Florida. Many require $1M/$2M minimum.",
              },
              {
                title: "Commercial Auto",
                desc: "Florida has mandatory PIP (Personal Injury Protection) for all vehicles. Commercial trucks need commercial auto policies with higher liability limits.",
              },
              {
                title: "No State Licensing",
                desc: "Florida doesn't require a state-level landscaping license, but many counties and cities (Miami-Dade, Broward, Palm Beach) have local licensing requirements.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Florida-Specific Risks
          </h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Hurricane & Storm Cleanup
              </h3>
              <p className="mt-2 text-slate-600">
                Many landscapers do storm cleanup work after hurricanes. This
                involves downed trees, debris removal, and emergency work on
                damaged properties — all higher-risk activities. Make sure your
                GL policy doesn&apos;t exclude storm-related work.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Heat-Related Injuries
              </h3>
              <p className="mt-2 text-slate-600">
                Florida&apos;s heat index regularly exceeds 100°F. Heat stroke
                and dehydration are common workers&apos; comp claims for
                landscaping crews. Proper hydration protocols can reduce claims
                and premiums.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                High Litigation State
              </h3>
              <p className="mt-2 text-slate-600">
                Florida has one of the highest rates of slip-and-fall lawsuits in
                the country. If you maintain commercial properties, adequate GL
                limits are critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Typical Costs in Florida
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                type: "General Liability",
                range: "$50–$80",
                period: "/mo",
                detail: "$1M/$2M policy for most landscaping operations",
              },
              {
                type: "Workers' Comp",
                range: "$180–$450",
                period: "/mo",
                detail: "Required with 4+ employees in Florida",
              },
              {
                type: "Commercial Auto",
                range: "$130–$300",
                period: "/mo",
                detail: "Trucks, trailers, and equipment in transit",
              },
            ].map((item) => (
              <div
                key={item.type}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-sm font-medium text-slate-500">
                  {item.type}
                </p>
                <p className="mt-2">
                  <span className="text-3xl font-bold text-slate-900">
                    {item.range}
                  </span>
                  <span className="text-lg text-slate-400">{item.period}</span>
                </p>
                <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Florida rates are above the national average due to high claim
            frequency and litigation costs.
          </p>
          <Link
            href="/cost"
            className="mt-4 inline-block text-green-700 font-semibold hover:underline"
          >
            See nationwide cost comparison →
          </Link>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get Covered in Florida
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We know the Florida market and its unique challenges. Get a free
            quote in under 2 minutes.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors"
          >
            Get My Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
