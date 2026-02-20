import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hardscaping Insurance — Coverage for Pavers, Retaining Walls & More",
  description:
    "Insurance for hardscaping contractors. Covers patios, retaining walls, walkways, and outdoor structures. Get a free quote from a licensed broker.",
};

export default function HardscapingInsurancePage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Hardscaping Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Patios, retaining walls, walkways, and outdoor kitchens — hardscaping
            carries unique risks that require proper coverage.
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
            Why Hardscaping Needs Specialized Coverage
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hardscaping involves permanent installations on client property.
            Unlike mowing, a mistake can&apos;t be undone next week. If a
            retaining wall fails, a patio cracks, or drainage goes wrong, the
            damage — and liability — can be significant.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Structural Failures",
                desc: "A retaining wall that collapses can damage adjacent property, vehicles, or injure people. Completed operations coverage is critical.",
              },
              {
                title: "Underground Utilities",
                desc: "Excavation for pavers or footings can hit gas lines, water mains, or fiber optic cables. GL covers the resulting damage.",
              },
              {
                title: "Drainage Issues",
                desc: "Improper grading can redirect water into a client's foundation. These claims can reach $50,000+.",
              },
              {
                title: "Material & Workmanship",
                desc: "Cracked pavers, settling walkways, or poorly-mixed concrete can lead to redo costs and lawsuits.",
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
            Coverage Checklist for Hardscapers
          </h2>
          <ul className="mt-8 ml-5 list-disc space-y-3 text-slate-700">
            <li>
              <strong>General Liability with Completed Operations</strong> —
              covers claims arising after the job is finished (wall collapse, drainage failure)
            </li>
            <li>
              <strong>Workers&apos; Comp</strong> — heavy lifting, excavation,
              and power tool use make injuries common
            </li>
            <li>
              <strong>Commercial Auto</strong> — hauling stone, pavers, and
              equipment requires commercial coverage
            </li>
            <li>
              <strong>Inland Marine</strong> — plate compactors, saws, and
              specialized tools need theft/damage protection
            </li>
            <li>
              <strong>Umbrella Policy</strong> — for high-value projects,
              additional liability limits above your base GL
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Protect Your Hardscaping Business
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We understand the unique risks of hardscaping and match you with
            carriers that cover excavation, structural work, and completed
            operations properly.
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
