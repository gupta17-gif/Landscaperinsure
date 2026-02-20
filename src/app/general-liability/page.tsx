import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Liability Insurance for Landscapers",
  description:
    "Affordable general liability insurance for landscaping businesses. Covers property damage, bodily injury, and completed operations. Get a free quote in minutes.",
};

export default function GeneralLiabilityPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            General Liability Insurance for Landscapers
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Protect your landscaping business from lawsuits, property damage
            claims, and third-party injuries — starting at $45/month.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* What GL Covers */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            What Does General Liability Cover?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            General liability (GL) insurance is the foundation of protection for
            any landscaping business. It covers claims made by third parties —
            your clients, their neighbors, or passersby.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Bodily Injury
              </h3>
              <p className="mt-2 text-slate-600">
                A client trips over your equipment, a rock flies from your mower
                and hits someone — GL covers medical bills, legal fees, and
                settlements.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Property Damage
              </h3>
              <p className="mt-2 text-slate-600">
                You accidentally damage a client&apos;s fence, irrigation system,
                or driveway. GL pays for repairs or replacement.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Completed Operations
              </h3>
              <p className="mt-2 text-slate-600">
                A retaining wall you built collapses months later. Completed
                operations coverage protects you even after the job is done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Claims */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Common GL Claims for Landscapers
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "Mower throws a rock through a car windshield — $1,200 claim",
              "Client's dog escapes through a gate left open by your crew — $3,500 in vet bills",
              "Sprinkler installation causes water damage to a basement — $15,000 claim",
              "Tree limb falls on neighbor's fence during removal — $8,000 repair",
              "Customer slips on freshly-laid sod and breaks their wrist — $25,000 medical + legal",
            ].map((claim) => (
              <li key={claim} className="flex items-start gap-3">
                <span className="mt-1 text-green-600 font-bold">!</span>
                <span className="text-slate-700">{claim}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate-600">
            Without GL insurance, you&apos;d pay these out of pocket. One bad
            claim can bankrupt a small landscaping business.
          </p>
        </div>
      </section>

      {/* How Much */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            How Much Does Landscaper GL Insurance Cost?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Most landscaping businesses pay <strong>$45–$75 per month</strong>{" "}
            for a standard $1M/$2M general liability policy. Your exact rate
            depends on:
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Revenue and number of employees</li>
            <li>• Services offered (mowing vs. tree removal vs. hardscaping)</li>
            <li>• Claims history</li>
            <li>• State requirements and local regulations</li>
          </ul>
          <Link
            href="/cost"
            className="mt-6 inline-block text-green-700 font-semibold hover:underline"
          >
            See our full cost breakdown →
          </Link>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Who Needs Landscaping GL Insurance?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Solo Operators",
                desc: "Even if it's just you and a truck, one accident can wipe you out. Most clients and HOAs require proof of insurance before hiring.",
              },
              {
                title: "Small Crews (2-5)",
                desc: "More workers means more risk. GL is required in most states before you can bid on commercial jobs.",
              },
              {
                title: "Growing Companies",
                desc: "Scaling to 10+ employees? You'll need GL plus Workers' Comp. We can bundle both for savings.",
              },
              {
                title: "Subcontractors",
                desc: "General contractors require subs to carry their own GL. No insurance = no work.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get Covered in Minutes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Free quote. No obligation. Licensed broker working for you.
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
