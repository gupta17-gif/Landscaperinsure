import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Insurance — Get a Free GL Quote in 2 Minutes",
  description:
    "Affordable general liability insurance for landscaping businesses. Protect your crews, equipment, and reputation. Free quotes from a licensed broker. Nationwide coverage.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Insurance Built for{" "}
              <span className="text-green-700">Landscapers</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 md:text-xl">
              Get general liability coverage for your landscaping business in
              under 2 minutes. Protect your crews, your equipment, and your
              reputation — from a licensed broker who actually understands your
              work.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/quote"
                className="rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors"
              >
                Get My Free Quote
              </Link>
              <Link
                href="/cost"
                className="text-lg font-medium text-green-700 hover:text-green-800 underline underline-offset-4"
              >
                See what it costs →
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              No obligation · 2 minutes · Licensed broker · CA #0F03649
            </p>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-slate-100 bg-white py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 text-center text-sm text-slate-500">
          <div>
            <span className="block text-2xl font-bold text-slate-900">50</span>
            States Served
          </div>
          <div>
            <span className="block text-2xl font-bold text-slate-900">$45-75</span>
            /month typical GL
          </div>
          <div>
            <span className="block text-2xl font-bold text-slate-900">2 min</span>
            Average Quote Time
          </div>
          <div>
            <span className="block text-2xl font-bold text-slate-900">A-rated</span>
            Insurance Carriers
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            What Landscapers Are Saying
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "Got my GL policy set up in one phone call. They understood exactly what a mowing operation needs — no upselling on stuff I don't need.",
                name: "Marcus R.",
                biz: "GreenEdge Lawn Care, TX",
              },
              {
                quote:
                  "My HOA client needed a COI with additional insured by Monday morning. LandscaperInsure had it in my inbox the same afternoon.",
                name: "Sarah K.",
                biz: "Precision Landscapes, FL",
              },
              {
                quote:
                  "I was paying $140/month with my old broker for the same coverage. Switched to LandscaperInsure and got it down to $62. Should have called sooner.",
                name: "James T.",
                biz: "Timber & Stone Hardscaping, CA",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-1 text-yellow-400">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <p className="mt-3 text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {t.name}
                </p>
                <p className="text-sm text-slate-500">{t.biz}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why landscapers need GL */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Why Every Landscaper Needs General Liability
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
            One accident on a job site can cost you everything. GL insurance is
            the foundation of protecting your landscaping business.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Property Damage",
                desc: "Your crew accidentally damages a client's fence, driveway, or sprinkler system. GL covers repair and replacement costs.",
                link: "/general-liability",
                linkText: "Learn about GL coverage →",
              },
              {
                title: "Bodily Injury",
                desc: "A rock kicks up from a mower and injures a passerby. GL covers their medical bills and your legal defense.",
                link: "/do-i-need-insurance",
                linkText: "Do I need insurance? →",
              },
              {
                title: "Contract Requirements",
                desc: "HOAs, commercial properties, and municipal contracts almost always require a Certificate of Insurance (COI) before you can bid.",
                link: "/certificate-of-insurance",
                linkText: "Learn about COIs →",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-500">{item.desc}</p>
                <Link
                  href={item.link}
                  className="mt-3 inline-block text-sm font-medium text-green-700 hover:underline"
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Tell Us About Your Business",
                desc: "Answer a few quick questions — business name, crew size, zip code. Takes under 2 minutes.",
              },
              {
                step: "2",
                title: "We Find Your Best Rate",
                desc: "Our team shops top-rated carriers to find you the most competitive GL coverage for your landscaping business.",
              },
              {
                step: "3",
                title: "Get Covered Fast",
                desc: "Review your quote, bind your policy, and get your Certificate of Insurance — often the same day.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/quote"
              className="inline-block rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors"
            >
              Start My Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage types with links */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Coverage for Every Type of Landscaping Business
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Lawn Maintenance & Mowing", href: "/lawn-care-insurance" },
              { name: "Landscape Design & Installation", href: "/general-liability" },
              { name: "Tree Trimming & Removal", href: "/tree-trimming-insurance" },
              { name: "Irrigation & Sprinkler Systems", href: "/irrigation-insurance" },
              { name: "Hardscaping & Pavers", href: "/hardscaping-insurance" },
              { name: "Snow Removal (Seasonal)", href: "/snow-removal-insurance" },
            ].map((type) => (
              <Link
                key={type.name}
                href={type.href}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 hover:border-green-300 hover:shadow-sm transition-all"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>
                <span className="font-medium text-slate-700">{type.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Broker advantage */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Why Work with a Broker?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
            Direct carriers give you one quote. We shop the market so you
            don&apos;t have to.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Contract Language Expertise",
                desc: "We match your policy to HOA, city, and GC contract requirements — Additional Insured, Waiver of Subrogation, Primary & Noncontributory.",
              },
              {
                title: "Same-Day COIs",
                desc: "Need a Certificate of Insurance for a job tomorrow? We handle it fast — often same-day turnaround.",
              },
              {
                title: "Underwriting Nuance",
                desc: "Tree work vs. mowing vs. hardscaping vs. irrigation — each has different risk profiles. We know which carriers are best for your specific operations.",
              },
              {
                title: "Claims Advocacy",
                desc: "When you have a claim, we go to bat for you with the carrier. A direct policy leaves you on your own.",
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

      {/* Nationwide */}
      <section className="bg-green-700 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Serving Landscapers Nationwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-green-100">
            Whether you&apos;re mowing lawns in Miami, trimming trees in Dallas,
            or installing hardscapes in LA — we know the insurance requirements
            in your state and can get you covered fast.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { name: "California", href: "/california-landscaping-insurance" },
              { name: "Texas", href: "/texas-landscaping-insurance" },
              { name: "Florida", href: "/florida-landscaping-insurance" },
              { name: "New York", href: "#" },
              { name: "Georgia", href: "#" },
              { name: "Illinois", href: "#" },
              { name: "Ohio", href: "#" },
              { name: "Pennsylvania", href: "#" },
              { name: "Arizona", href: "#" },
            ].map((state) => (
              <Link
                key={state.name}
                href={state.href}
                className="rounded-lg border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                {state.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-6">
            {[
              {
                q: "How much does landscaping insurance cost?",
                a: "Most landscapers pay $45–$75 per month for a standard $1M/$2M general liability policy. Your exact rate depends on revenue, crew size, services offered, and claims history.",
              },
              {
                q: "Do I need insurance if I'm a solo operator?",
                a: "Yes. Even solo landscapers face property damage and injury liability. Most clients and HOAs require proof of insurance before hiring, and one uninsured claim can bankrupt a small operation.",
              },
              {
                q: "How fast can I get a Certificate of Insurance (COI)?",
                a: "Once your policy is active, we can typically issue a COI the same day — including adding additional insured parties for HOA or commercial contracts.",
              },
              {
                q: "What's the difference between GL and workers' comp?",
                a: "General liability covers claims from third parties (clients, their property, bystanders). Workers' comp covers your employees' medical bills and lost wages from on-the-job injuries. Most landscapers with employees need both.",
              },
              {
                q: "Do you serve my state?",
                a: "Yes — we serve landscaping businesses in all 50 states through our network of A-rated carriers.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-lg border border-slate-200 bg-white"
              >
                <summary className="cursor-pointer px-6 py-4 font-semibold text-slate-900 flex items-center justify-between">
                  {faq.q}
                  <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <p className="px-6 pb-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Ready to Protect Your Landscaping Business?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Most landscapers get covered for less than $3/day. Find out your
            rate in under 2 minutes — no obligation.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors"
          >
            Get My Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
