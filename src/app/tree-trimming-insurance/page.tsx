import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tree Trimming & Removal Insurance for Landscapers",
  description:
    "Tree trimming and removal insurance for landscaping businesses. Higher-risk work needs proper coverage. Get a free quote from a licensed broker.",
};

export default function TreeTrimmingInsurancePage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Tree Trimming &amp; Removal Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Tree work is one of the highest-risk landscaping services. Make sure
            your coverage matches the danger.
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
            Why Tree Work Costs More to Insure
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Carriers classify tree trimming and removal as higher-risk than
            standard lawn care. The reasons are straightforward:
          </p>
          <ul className="mt-6 ml-5 list-disc space-y-2 text-slate-700">
            <li>Working at height increases fall risk for your crew</li>
            <li>Chainsaws and heavy equipment create injury exposure</li>
            <li>Falling limbs can damage homes, vehicles, fences, and power lines</li>
            <li>Stump grinding near utilities risks underground damage</li>
            <li>Tree removal near structures carries major property damage risk</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Height Exclusions: Read the Fine Print
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Many standard landscaping GL policies exclude work above a certain
            height — commonly 15 or 25 feet. If you do tree trimming or removal
            above that threshold, your claim could be denied.
          </p>
          <div className="mt-6 rounded-lg bg-white p-6 shadow-sm border-l-4 border-yellow-500">
            <p className="text-slate-700">
              <strong>Important:</strong> Always confirm your policy&apos;s
              height limitation with your broker. If you work above the standard
              threshold, you need a policy specifically endorsing higher-altitude
              tree work. We match you with carriers that cover the full scope of
              your operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            What Coverage Do You Need?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "General Liability",
                desc: "Covers property damage from falling limbs, third-party injuries from debris, and completed operations claims.",
              },
              {
                title: "Workers' Comp",
                desc: "Essential for tree crews. Falls, chainsaw injuries, and struck-by incidents are among the most common claims.",
              },
              {
                title: "Commercial Auto",
                desc: "Trucks hauling chipper trailers and heavy equipment need commercial auto — personal policies won't cover it.",
              },
              {
                title: "Inland Marine",
                desc: "Chainsaws, chippers, stump grinders, and climbing gear are expensive. Protect them from theft and damage.",
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

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get the Right Coverage for Tree Work
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We specialize in landscaping insurance and know which carriers cover
            tree trimming without restrictive height exclusions.
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
