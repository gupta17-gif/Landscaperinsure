import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Snow Removal Insurance for Landscapers",
  description:
    "Snow removal and ice management insurance for landscaping businesses. Covers slip-and-fall liability, property damage, and equipment. Seasonal and year-round options.",
};

export default function SnowRemovalInsurancePage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Snow Removal Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Many landscapers plow snow in the off-season. Snow and ice work
            carries major slip-and-fall liability — make sure you&apos;re
            covered.
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
            Why Snow Removal Is High-Risk
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Snow and ice management is one of the most litigated areas in
            property maintenance. If someone slips on a property you were
            contracted to clear, you could be named in a lawsuit — even if you
            did everything right.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Slip-and-Fall Claims",
                desc: "The #1 risk. A customer, tenant, or visitor slips on ice at a property you service. Average claims: $20,000–$50,000+.",
              },
              {
                title: "Property Damage",
                desc: "Plow blades scrape pavement, hit curbs, damage landscaping, or dent vehicles. Common and costly.",
              },
              {
                title: "Contractual Liability",
                desc: "Commercial snow contracts often include hold-harmless clauses that shift liability entirely to you.",
              },
              {
                title: "Completed Operations",
                desc: "You plowed at 4am. Someone slips at 8am on a spot that re-froze. You need coverage for claims after you've left the site.",
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
            Does Your GL Policy Cover Snow Removal?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Not always. Many standard landscaping GL policies{" "}
            <strong>exclude</strong> snow and ice operations or require a
            separate endorsement. Check your policy carefully.
          </p>
          <div className="mt-6 rounded-lg bg-white p-6 shadow-sm border-l-4 border-yellow-500">
            <p className="text-slate-700">
              <strong>What to ask your broker:</strong> &quot;Does my policy
              cover snow plowing, ice management, and salt/sand application? Is
              there a snow removal exclusion? What are my completed operations
              limits for snow work?&quot;
            </p>
          </div>
          <p className="mt-6 text-slate-600">
            We make sure your policy explicitly covers snow and ice operations —
            no exclusions, no surprises at claims time.
          </p>
          <Link
            href="/seasonal-coverage"
            className="mt-4 inline-block text-green-700 font-semibold hover:underline"
          >
            Learn about seasonal coverage options →
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get Snow-Ready Coverage
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Don&apos;t wait for the first storm. Get your snow removal coverage
            locked in now.
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
