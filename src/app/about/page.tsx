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

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          <p className="mt-4 text-lg text-slate-600">
            Landscapers build beautiful spaces. They shouldn&apos;t have to spend
            hours navigating confusing insurance options. We built
            LandscaperInsure to give every landscaping business — from solo
            operators to large crews — access to affordable, reliable coverage
            from top-rated carriers.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            As a licensed insurance brokerage, we work for <strong>you</strong>,
            not the insurance companies. We shop 30+ carriers to find the best
            rate for your specific situation.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Landscapers Trust Us
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Industry Focus",
                desc: "We only serve landscapers. That means we understand your risks, your clients, and your business better than a generalist broker.",
              },
              {
                title: "Licensed & Regulated",
                desc: "We're a fully licensed insurance brokerage (CA License #0F03649). Your interests come first — always.",
              },
              {
                title: "Fast & Simple",
                desc: "Get quoted in minutes, not days. We handle the paperwork, COIs, and carrier communication so you can focus on your business.",
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
            How We&apos;re Different
          </h2>
          <div className="mt-8 space-y-6 text-slate-600">
            <p>
              Most insurance brokers serve every industry under the sun.
              Landscaping is an afterthought. That means generic quotes, slow
              turnaround, and agents who don&apos;t understand why a mowing-only
              operation has different risk than a full-service firm doing
              hardscaping and tree removal.
            </p>
            <p>
              We do one thing: landscaping insurance. Our entire operation —
              from quoting to claims support — is built around the needs of
              landscaping businesses. We know the right coverage types, the best
              carriers for your niche, and the typical rates you should expect.
            </p>
            <p>
              The result? Better coverage, lower rates, and a broker who
              actually picks up the phone when you need help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16">
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
