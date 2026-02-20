import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Texas Landscaping Insurance — GL & Workers' Comp Coverage",
  description:
    "Affordable landscaping insurance in Texas. Workers' comp is optional but recommended. Get GL coverage starting at $45/month from a licensed broker.",
};

export default function TexasPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Texas Landscaping Insurance
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Texas doesn&apos;t require workers&apos; comp, but that doesn&apos;t
            mean you should skip it. Here&apos;s what TX landscapers need to
            know.
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
            Texas Insurance Requirements
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Texas is one of the few states that does not require a state
            contractor&apos;s license for landscaping. However, many cities
            (Houston, Austin, Dallas, San Antonio) have their own licensing and
            insurance requirements.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "General Liability",
                desc: "Not legally required by the state, but required by virtually every commercial client, HOA, and property manager. Essential for any professional operation.",
              },
              {
                title: "Workers' Comp (Optional)",
                desc: "Texas is the only state where WC is truly optional. But without it, injured employees can sue you directly — and there's no cap on damages.",
              },
              {
                title: "Commercial Auto",
                desc: "Texas has high auto accident rates. If your truck is used for business, personal auto won't cover an accident on the way to a job.",
              },
              {
                title: "City-Level Requirements",
                desc: "Houston, Dallas, Austin, and San Antonio may require business licenses and proof of insurance. Check your city's requirements.",
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
            Why Texas Landscapers Still Need Workers&apos; Comp
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Being a &quot;non-subscriber&quot; (no WC) in Texas means:
          </p>
          <ul className="mt-6 ml-5 list-disc space-y-2 text-slate-700">
            <li>Injured employees can sue you in civil court with no caps on damages</li>
            <li>You lose common-law defenses (contributory negligence, fellow servant doctrine)</li>
            <li>You&apos;re personally liable for medical bills and lost wages</li>
            <li>Many GCs and commercial clients won&apos;t hire non-subscriber subs</li>
          </ul>
          <p className="mt-6 text-slate-600">
            For most Texas landscaping businesses with employees, workers&apos;
            comp is cheaper than the risk of going without it.
          </p>
          <Link
            href="/workers-compensation"
            className="mt-4 inline-block text-green-700 font-semibold hover:underline"
          >
            Learn more about workers&apos; comp →
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Typical Costs in Texas
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                type: "General Liability",
                range: "$45–$70",
                period: "/mo",
                detail: "$1M/$2M policy for most landscaping operations",
              },
              {
                type: "Workers' Comp",
                range: "$150–$350",
                period: "/mo",
                detail: "Varies by payroll size and crew risk class",
              },
              {
                type: "Commercial Auto",
                range: "$120–$280",
                period: "/mo",
                detail: "Trucks, trailers, and equipment in transit",
              },
            ].map((item) => (
              <div
                key={item.type}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-sm font-medium text-slate-500">
                  {item.type}
                </p>
                <p className="mt-2">
                  <span className="text-3xl font-bold text-slate-900">
                    {item.range}
                  </span>
                  <span className="text-lg text-slate-400">{item.period}</span>
                </p>
                <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Texas rates are generally at or slightly below the national average
            for landscaping GL.
          </p>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get Covered in Texas
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Free quote in under 2 minutes. We know the Texas market and will
            find you the right coverage at the best rate.
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
