import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HOA Contract Insurance Requirements for Landscapers",
  description:
    "HOA and property management contracts require specific insurance. Learn the typical requirements and how to get compliant fast.",
};

export default function HOAContractsPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            HOA Contract Insurance Requirements
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Landing HOA contracts means bigger, recurring revenue. But HOAs have
            strict insurance requirements. Here&apos;s what you need.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Typical HOA Insurance Requirements
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Most HOA and property management contracts require:
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                req: "General Liability — $1M per occurrence / $2M aggregate",
                note: "This is the industry standard. Some large HOAs require $2M/$4M.",
              },
              {
                req: "The HOA listed as Additional Insured",
                note: "Your COI must name the HOA (and often the property management company) as additional insured.",
              },
              {
                req: "Workers' Compensation (if you have employees)",
                note: "HOAs want to avoid liability if your worker gets hurt on their property.",
              },
              {
                req: "Commercial Auto (sometimes)",
                note: "Required if your vehicles will be on HOA property regularly.",
              },
              {
                req: "30-day cancellation notice",
                note: "The HOA wants to be notified if your policy lapses. Standard on most COIs.",
              },
            ].map((item) => (
              <div key={item.req} className="rounded-lg border border-slate-200 p-5">
                <p className="font-semibold text-slate-900">{item.req}</p>
                <p className="mt-1 text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            How to Win More HOA Contracts
          </h2>
          <ol className="mt-8 space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-bold text-green-700">1.</span>
              <span>
                <strong>Have your insurance ready before you bid.</strong> HOAs
                reject bids from uninsured landscapers immediately.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700">2.</span>
              <span>
                <strong>Include your COI with your proposal.</strong> It signals
                professionalism and saves back-and-forth.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700">3.</span>
              <span>
                <strong>Ask your broker to add the HOA as additional insured.</strong>{" "}
                We handle this for free — it takes minutes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-700">4.</span>
              <span>
                <strong>Carry adequate limits.</strong> If the contract asks for
                $2M/$4M and you only have $1M/$2M, we can get you an umbrella
                policy.
              </span>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get HOA-Ready Insurance
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We&apos;ll make sure your policy meets any HOA&apos;s requirements.
            Free quote, fast COIs.
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
