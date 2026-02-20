import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscaping Insurance Cost — How Much Do You Need to Pay?",
  description:
    "Landscaping insurance costs $45-$75/month for most businesses. See what affects your rate and how to save on general liability and workers' comp coverage.",
};

export default function CostPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            How Much Does Landscaping Insurance Cost?
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Most landscapers pay $45–$75/month for general liability. Here&apos;s
            what drives your rate and how to get the best deal.
          </p>
        </div>
      </section>

      {/* Average Costs */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Average Monthly Costs
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-700">
                    Coverage Type
                  </th>
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-700">
                    Monthly Cost
                  </th>
                  <th className="py-3 text-sm font-semibold text-slate-700">
                    What It Covers
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-medium text-slate-900">
                    General Liability
                  </td>
                  <td className="py-4 pr-4">$45–$75/mo</td>
                  <td className="py-4">
                    Property damage, bodily injury, completed operations
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-medium text-slate-900">
                    Workers&apos; Comp
                  </td>
                  <td className="py-4 pr-4">$150–$400/mo</td>
                  <td className="py-4">
                    Employee injuries on the job (required with employees)
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-medium text-slate-900">
                    Commercial Auto
                  </td>
                  <td className="py-4 pr-4">$100–$250/mo</td>
                  <td className="py-4">
                    Trucks, trailers, and equipment in transit
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 pr-4 font-medium text-slate-900">
                    Inland Marine
                  </td>
                  <td className="py-4 pr-4">$30–$80/mo</td>
                  <td className="py-4">
                    Equipment theft and damage (mowers, blowers, etc.)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-slate-900">
                    BOP (Bundle)
                  </td>
                  <td className="py-4 pr-4">$100–$200/mo</td>
                  <td className="py-4">
                    GL + property + business interruption bundled
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Affects Rate */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            What Affects Your Rate?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Annual Revenue",
                desc: "Higher revenue = more exposure = higher premiums. A $100K/year operation pays less than a $500K one.",
              },
              {
                title: "Number of Employees",
                desc: "More workers increase your risk profile. Solo operators get the lowest GL rates.",
              },
              {
                title: "Services Offered",
                desc: "Basic mowing is cheap to insure. Tree removal, excavation, and hardscaping cost more due to higher risk.",
              },
              {
                title: "Claims History",
                desc: "Clean record? You'll get better rates. Past claims can increase premiums 20-50%.",
              },
              {
                title: "Location",
                desc: "State regulations and local claim patterns affect pricing. Florida and California tend to be higher.",
              },
              {
                title: "Coverage Limits",
                desc: "Standard $1M/$2M is most common. Higher limits for commercial contracts cost more.",
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

      {/* How to Save */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            5 Ways to Lower Your Premium
          </h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                title: "Bundle your policies",
                desc: "Combining GL with commercial auto or inland marine often saves 10-15%.",
              },
              {
                title: "Pay annually instead of monthly",
                desc: "Most carriers offer a 5-10% discount for paying upfront.",
              },
              {
                title: "Maintain a clean claims record",
                desc: "Every claim-free year can lower your renewal rate.",
              },
              {
                title: "Use a broker (like us)",
                desc: "We shop multiple A-rated carriers to find the best rate — you'd only see one quote going direct.",
              },
              {
                title: "Right-size your coverage",
                desc: "Don't over-insure. A solo mowing operation doesn't need the same limits as a full-service firm.",
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
            Find Out Your Exact Rate
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every business is different. Get a personalized quote in under 2
            minutes — no obligation.
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
