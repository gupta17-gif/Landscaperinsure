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
              No obligation · 2 minutes · Licensed broker
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

      {/* Why landscapers need GL */}
      <section className="py-16 md:py-24">
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
                icon: "🏠",
              },
              {
                title: "Bodily Injury",
                desc: "A rock kicks up from a mower and injures a passerby. GL covers their medical bills and your legal defense.",
                icon: "🩹",
              },
              {
                title: "Contract Requirements",
                desc: "HOAs, commercial properties, and municipal contracts almost always require a Certificate of Insurance (COI) before you can bid.",
                icon: "📋",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16 md:py-24">
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

      {/* Coverage types */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Coverage for Every Type of Landscaping Business
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Lawn Maintenance & Mowing",
              "Landscape Design & Installation",
              "Tree Trimming & Removal",
              "Irrigation & Sprinkler Systems",
              "Hardscaping & Pavers",
              "Snow Removal (Seasonal)",
            ].map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>
                <span className="font-medium text-slate-700">{type}</span>
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
              "Florida", "Texas", "California", "New York", "Georgia",
              "Illinois", "Ohio", "Pennsylvania", "Arizona", "And more..."
            ].map((state) => (
              <span
                key={state}
                className="rounded-lg border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white"
              >
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
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
