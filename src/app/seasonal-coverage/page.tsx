import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seasonal Landscaping Insurance — Do You Need Year-Round Coverage?",
  description:
    "Many landscapers wonder if they need insurance year-round. Learn about seasonal coverage options, off-season risks, and how to save money.",
};

export default function SeasonalCoveragePage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Seasonal Landscaping Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Your business slows down in winter. Should your insurance? Here&apos;s
            what seasonal landscapers need to know.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Should You Keep Insurance Year-Round?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            In most cases, <strong>yes</strong>. Here&apos;s why:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Completed Operations Claims",
                desc: "A client can file a claim for work you did last summer — even in January. If your policy lapsed, you have no coverage.",
              },
              {
                title: "Coverage Gaps Hurt Renewals",
                desc: "Carriers view lapses negatively. A gap in coverage can increase your next premium by 20-40%.",
              },
              {
                title: "Spring Scramble",
                desc: "Re-applying for insurance each spring means delays, new applications, and potentially higher rates. Keeping continuous coverage is easier and cheaper.",
              },
              {
                title: "Snow & Ice Services",
                desc: "Many landscapers do snow removal in winter. Your GL policy may cover this — cancelling it leaves you exposed.",
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
            How to Save on Off-Season Insurance
          </h2>
          <ul className="mt-8 space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 font-bold text-green-600">1.</span>
              <span>
                <strong>Reduce payroll estimates.</strong> If you lay off
                seasonal workers, update your carrier. Workers&apos; comp is
                based on payroll — lower payroll means lower premiums.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 font-bold text-green-600">2.</span>
              <span>
                <strong>Keep GL active.</strong> At $45-75/month, the cost of
                year-round GL is far less than the cost of a coverage gap.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 font-bold text-green-600">3.</span>
              <span>
                <strong>Ask about seasonal endorsements.</strong> Some carriers
                offer reduced off-season rates for landscapers in cold-weather
                states.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get Year-Round Protection
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We&apos;ll find you the most affordable year-round coverage so you&apos;re
            always protected.
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
