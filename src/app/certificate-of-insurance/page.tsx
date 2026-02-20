import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certificate of Insurance (COI) for Landscapers",
  description:
    "Need a certificate of insurance for your landscaping business? Learn what a COI is, who requires one, and how to get yours fast.",
};

export default function COIPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Certificate of Insurance for Landscapers
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            A COI proves you&apos;re insured. Most clients, HOAs, and property
            managers won&apos;t hire you without one.
          </p>
        </div>
      </section>

      {/* What Is a COI */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            What Is a Certificate of Insurance?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A Certificate of Insurance (COI) is a one-page document issued by
            your insurance carrier that summarizes your coverage. It shows:
          </p>
          <ul className="mt-6 ml-5 list-disc space-y-2 text-slate-700">
            <li>Your business name and address</li>
            <li>Policy number and effective dates</li>
            <li>Coverage types (GL, WC, auto, etc.)</li>
            <li>Policy limits ($1M per occurrence, $2M aggregate, etc.)</li>
            <li>Additional insured parties (if requested)</li>
          </ul>
          <p className="mt-6 text-slate-600">
            It does <strong>not</strong> change your policy — it simply proves
            your coverage exists.
          </p>
        </div>
      </section>

      {/* Who Requires One */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Who Requires a COI from Landscapers?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "HOAs & Property Managers",
                desc: "Almost every HOA contract requires a COI with the HOA listed as additional insured before work begins.",
              },
              {
                title: "Commercial Property Owners",
                desc: "Office parks, retail centers, and apartment complexes require proof of insurance from all vendors.",
              },
              {
                title: "General Contractors",
                desc: "If you sub out to a GC, they need your COI to satisfy their own insurance requirements.",
              },
              {
                title: "Government Contracts",
                desc: "Municipal landscaping bids always require proof of GL and often workers' comp COIs.",
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

      {/* How to Get One */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            How to Get a COI
          </h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                title: "Get insured",
                desc: "You need an active GL policy first. We can get you quoted and bound in as little as one business day.",
              },
              {
                title: "Request your COI",
                desc: "Once your policy is active, request a COI from your carrier or broker. We handle this for all our clients.",
              },
              {
                title: "Add additional insured (if needed)",
                desc: "Many clients want to be listed as 'additional insured' on your COI. This is a standard endorsement — just let us know who to add.",
              },
              {
                title: "Deliver to your client",
                desc: "COIs are typically emailed as a PDF. Most carriers can issue them same-day.",
              },
            ].map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Need a COI? Start with a Quote.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get insured, get your COI, and start landing bigger contracts.
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
