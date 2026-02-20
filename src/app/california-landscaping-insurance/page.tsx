import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "California Landscaping Insurance — GL, Workers' Comp & More",
  description:
    "Landscaping insurance in California. CSLB license requirements, workers' comp rules, and affordable GL coverage. Licensed CA broker #0F03649.",
};

export default function CaliforniaPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            California Landscaping Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            California has some of the strictest contractor insurance
            requirements in the country. Here&apos;s what CA landscapers need to
            know.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors"
          >
            Get Your Free Quote
          </Link>
          <p className="mt-3 text-sm text-slate-400">
            Licensed California Insurance Broker · CA #0F03649
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            CSLB Requirements for C-27 Landscapers
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            California landscaping contractors holding a C-27 license from the
            Contractors State License Board (CSLB) must maintain:
          </p>
          <ul className="mt-6 ml-5 list-disc space-y-2 text-slate-700">
            <li>
              <strong>Contractor&apos;s Bond</strong> — $25,000 surety bond
              (required for all licensed contractors)
            </li>
            <li>
              <strong>Workers&apos; Compensation</strong> — required if you have
              any employees; exempt only if you have zero employees and file a
              Certificate of Exemption
            </li>
            <li>
              <strong>General Liability</strong> — not technically required by
              CSLB, but required by virtually every commercial client, HOA, and
              property manager
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            California-Specific Considerations
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Workers' Comp Is Strict",
                desc: "CA requires workers' comp with even one employee. No exceptions. Penalties for non-compliance include stop-work orders and fines up to $100,000.",
              },
              {
                title: "AB5 Classification Rules",
                desc: "California's ABC test makes it harder to classify workers as independent contractors. Most landscaping crews will be classified as employees.",
              },
              {
                title: "High Litigation State",
                desc: "California is one of the most litigious states. Adequate GL limits ($1M/$2M minimum) are essential — many commercial clients require $2M/$4M.",
              },
              {
                title: "Bond Expiry = Shopping Event",
                desc: "When your contractor's bond expires, it's a natural time to review all your insurance. Bundling GL + WC + bond often saves money.",
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

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Typical Costs in California
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-700">Coverage</th>
                  <th className="py-3 text-sm font-semibold text-slate-700">Typical Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">General Liability</td>
                  <td className="py-3">$55–$85/mo</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">Workers&apos; Comp</td>
                  <td className="py-3">$200–$500/mo (varies by payroll)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">Commercial Auto</td>
                  <td className="py-3">$150–$300/mo</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-slate-900">Contractor&apos;s Bond</td>
                  <td className="py-3">$100–$500/year</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            California rates tend to be higher than the national average due to
            stricter regulations and higher claim frequency.
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
            California&apos;s Landscaping Insurance Experts
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            As a licensed California broker (CA #0F03649), we know CA
            requirements inside and out. Get compliant and covered.
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
