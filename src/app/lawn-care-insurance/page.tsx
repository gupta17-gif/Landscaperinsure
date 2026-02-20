import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lawn Care Insurance — Affordable Coverage for Mowing & Maintenance",
  description:
    "Lawn care insurance starting at $45/month. Covers property damage, bodily injury, and equipment. Get a free quote from a licensed broker in minutes.",
};

export default function LawnCareInsurancePage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Lawn Care Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Mowing, edging, fertilizing, and maintenance — your lawn care
            business needs protection from day one.
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
            Why Lawn Care Businesses Need Insurance
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Lawn care may seem lower-risk than tree removal or excavation, but
            accidents happen every day. A rock launched by a mower, a chemical
            burn on a client&apos;s lawn, or a crew member tripping over a
            sprinkler head can all lead to costly claims.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Property Damage",
                desc: "Mower throws debris through a window, fertilizer kills a lawn, equipment scratches a driveway. GL covers the repair costs.",
              },
              {
                title: "Bodily Injury",
                desc: "A client or bystander gets hit by flying debris or trips over your equipment. GL covers medical bills and legal fees.",
              },
              {
                title: "Completed Operations",
                desc: "Applied fertilizer that burned out a lawn weeks later? Completed operations coverage protects you after the job is done.",
              },
              {
                title: "Equipment Protection",
                desc: "Mowers, edgers, blowers, and trailers are expensive. Inland marine coverage protects against theft and damage.",
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
            What Does Lawn Care Insurance Cost?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Most lawn care businesses pay <strong>$45–$65 per month</strong> for
            a standard $1M/$2M general liability policy. Lawn care is one of the
            most affordable landscaping niches to insure because it&apos;s
            lower-risk than tree work or hardscaping.
          </p>
          <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              <strong>Typical policy:</strong> $1,000,000 per occurrence /
              $2,000,000 aggregate general liability. Add workers&apos; comp if
              you have employees, and commercial auto if you use your truck for
              business.
            </p>
          </div>
          <Link
            href="/cost"
            className="mt-6 inline-block text-green-700 font-semibold hover:underline"
          >
            See full cost breakdown for landscapers →
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Lawn Care vs. Landscaping Insurance
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Insurance carriers distinguish between lawn care (mowing,
            maintenance, fertilizing) and full-service landscaping (design,
            installation, hardscaping, tree work). Lawn care-only businesses
            typically get lower rates because the risk profile is simpler.
          </p>
          <p className="mt-4 text-slate-600">
            If you offer both lawn care and landscaping services, make sure your
            policy covers all your operations — not just mowing. An uncovered
            service is an uncovered claim.
          </p>
          <Link
            href="/general-liability"
            className="mt-4 inline-block text-green-700 font-semibold hover:underline"
          >
            Learn more about general liability coverage →
          </Link>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get Covered Today
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Affordable lawn care insurance from a licensed broker who understands
            your business.
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
