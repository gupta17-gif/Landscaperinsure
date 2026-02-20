import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Irrigation & Sprinkler Insurance for Landscapers",
  description:
    "Insurance for irrigation and sprinkler system installation and repair. Covers water damage, underground utility hits, and completed operations.",
};

export default function IrrigationInsurancePage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Irrigation &amp; Sprinkler Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Installing and repairing sprinkler systems carries water damage and
            underground utility risk. Proper insurance is essential.
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
            Common Irrigation Insurance Claims
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Irrigation work involves water, trenching, and connections to
            existing plumbing — all high-claim areas for landscapers.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Water Damage",
                desc: "A faulty connection or broken pipe floods a client's basement or crawl space. Claims can reach $20,000–$50,000+.",
              },
              {
                title: "Underground Utility Strikes",
                desc: "Trenching for new lines can hit gas, electric, or fiber optic utilities. GL covers the repair costs.",
              },
              {
                title: "Property Damage",
                desc: "Digging damages driveways, foundations, or existing landscaping. Restoration costs add up quickly.",
              },
              {
                title: "System Failure After Install",
                desc: "A system you installed leaks months later and damages the property. Completed operations coverage handles this.",
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
            What Coverage Do Irrigation Contractors Need?
          </h2>
          <ul className="mt-8 ml-5 list-disc space-y-3 text-slate-700">
            <li>
              <strong>General Liability</strong> — covers property damage and
              bodily injury from your irrigation work
            </li>
            <li>
              <strong>Completed Operations</strong> — critical for irrigation
              since leaks and failures often appear weeks or months after install
            </li>
            <li>
              <strong>Workers&apos; Comp</strong> — trenching and pipe work are
              physically demanding with injury risk
            </li>
            <li>
              <strong>Commercial Auto</strong> — if you haul pipe, fittings, and
              trenching equipment to job sites
            </li>
          </ul>
          <p className="mt-6 text-slate-600">
            Some states require a separate plumbing or irrigation contractor
            license for sprinkler work. Make sure your insurance matches your
            license classification.
          </p>
          <Link
            href="/general-liability"
            className="mt-4 inline-block text-green-700 font-semibold hover:underline"
          >
            Learn more about general liability coverage →
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get Irrigation Coverage That Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We match irrigation contractors with carriers that properly cover
            water damage and underground work.
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
