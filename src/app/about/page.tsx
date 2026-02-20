import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LandscaperInsure",
  description:
    "LandscaperInsure is a licensed insurance brokerage dedicated to helping landscaping businesses get affordable coverage. CA License #0F03649.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            About LandscaperInsure
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            We exist for one reason: to make insurance simple and affordable for
            landscaping businesses.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
          <p className="mt-4 text-lg text-slate-600">
            LandscaperInsure is operated by ContractorFlow Insurance Services, a
            licensed Property &amp; Casualty insurance brokerage. We hold a
            California insurance license (#0F03649) and serve landscaping
            businesses in all 50 states through our carrier network.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            As a broker, we work for <strong>you</strong> — not the insurance
            companies. We&apos;re compensated through commissions paid by
            carriers when you bind a policy. This means our service is free to
            you, and we&apos;re incentivized to find you the best coverage at
            the best rate.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            How We Get You Covered
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "You Tell Us Your Needs",
                desc: "Quick online form or phone call. We ask about your crew size, services, and what coverage you need.",
              },
              {
                step: "2",
                title: "We Shop the Market",
                desc: "We submit your information to multiple A-rated carriers and compare quotes to find the best fit.",
              },
              {
                step: "3",
                title: "You Choose & We Handle the Rest",
                desc: "Pick the quote that works for you. We handle binding, COIs, endorsements, and ongoing support.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-lg bg-white p-6 shadow-sm text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Landscapers Trust Us */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Landscapers Trust Us
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Landscaping-Only Focus",
                desc: "We don't insure restaurants, tech companies, or retail stores. We only serve landscapers. That means we understand your risks — tree work vs. mowing vs. hardscaping vs. irrigation — and know which carriers are best for each.",
              },
              {
                title: "Licensed & Regulated",
                desc: "We're a fully licensed insurance brokerage (CA License #0F03649), regulated by the California Department of Insurance. We carry E&O insurance and follow all state compliance requirements.",
              },
              {
                title: "Transparent Compensation",
                desc: "We earn commissions from carriers when you bind a policy — typically 5-15% of your premium. You never pay us directly. Our interests are aligned: we only get paid when you get covered.",
              },
              {
                title: "Contract Language Expertise",
                desc: "HOA requiring Additional Insured? GC asking for Waiver of Subrogation? City contract needs Primary & Noncontributory? We handle the endorsement language that most direct carriers can't.",
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

      {/* What Makes Us Different */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Broker vs. Direct: Why It Matters
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-700">Feature</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-700">LandscaperInsure (Broker)</th>
                  <th className="py-3 text-sm font-semibold text-slate-700">Direct Carrier</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">Quotes</td>
                  <td className="py-3 pr-4">Multiple carriers compared</td>
                  <td className="py-3">One carrier, one quote</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">Advocacy</td>
                  <td className="py-3 pr-4">We advocate for you</td>
                  <td className="py-3">Carrier advocates for themselves</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">COI/Endorsements</td>
                  <td className="py-3 pr-4">Same-day, any language</td>
                  <td className="py-3">Standard templates only</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">Industry knowledge</td>
                  <td className="py-3 pr-4">Landscaping specialists</td>
                  <td className="py-3">Generalist underwriting</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-slate-900">Cost to you</td>
                  <td className="py-3 pr-4">Free — carriers pay us</td>
                  <td className="py-3">Same price or higher</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Free quote in under 2 minutes. No obligation. No pressure.
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
