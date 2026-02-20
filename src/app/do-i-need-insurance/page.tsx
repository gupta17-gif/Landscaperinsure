import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Do I Need Landscaping Insurance?",
  description:
    "Find out if your landscaping business needs insurance. Learn about state requirements, client expectations, and the real cost of going uninsured.",
};

export default function DoINeedInsurancePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Do I Need Landscaping Insurance?
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Short answer: almost certainly yes. Here&apos;s why — and what
            happens if you skip it.
          </p>
        </div>
      </section>

      {/* The Answer */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            The Real Answer
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            If you do any of the following, you need general liability insurance:
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            {[
              "Work on anyone else's property (residential or commercial)",
              "Use powered equipment (mowers, trimmers, chainsaws, blowers)",
              "Have employees or hire subcontractors",
              "Sign contracts with clients, HOAs, or property managers",
              "Transport equipment in a truck or trailer",
              "Want to grow your business and land bigger jobs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-green-600 font-bold">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate-600">
            That covers virtually every landscaping business, from solo operators
            to large crews.
          </p>
        </div>
      </section>

      {/* What Happens Without It */}
      <section className="bg-red-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            What Happens If You Don&apos;t Have Insurance?
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "You pay out of pocket for accidents",
                desc: "A $25,000 property damage claim comes directly from your bank account. One bad day can bankrupt a small operation.",
              },
              {
                title: "You lose jobs to insured competitors",
                desc: "Most commercial clients, HOAs, and property managers won't even consider an uninsured landscaper. You're invisible to the best-paying jobs.",
              },
              {
                title: "You face state penalties",
                desc: "Many states require GL for licensed contractors. Operating without it can mean fines, license suspension, or criminal penalties.",
              },
              {
                title: "You can't hire employees legally",
                desc: "Workers' comp is required in most states as soon as you hire your first employee. No coverage = illegal operation.",
              },
              {
                title: "You get sued personally",
                desc: "Without insurance, plaintiffs go after your personal assets — your house, truck, savings. An LLC alone isn't enough protection.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-red-800">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types You Need */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            What Types of Insurance Do Landscapers Need?
          </h2>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 p-6">
              <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-800">
                ESSENTIAL
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">
                  General Liability (GL)
                </h3>
                <p className="mt-1 text-slate-600">
                  Covers property damage and bodily injury claims from clients
                  and third parties. Every landscaper needs this.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 p-6">
              <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-800">
                IF EMPLOYEES
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Workers&apos; Compensation
                </h3>
                <p className="mt-1 text-slate-600">
                  Required in most states once you hire employees. Covers medical
                  bills and lost wages for work injuries.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 p-6">
              <span className="rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-800">
                RECOMMENDED
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Commercial Auto</h3>
                <p className="mt-1 text-slate-600">
                  Personal auto policies don&apos;t cover commercial use. If your
                  truck is used for business, you need commercial auto.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 p-6">
              <span className="rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-800">
                RECOMMENDED
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Inland Marine / Equipment
                </h3>
                <p className="mt-1 text-slate-600">
                  Covers your mowers, blowers, and tools if stolen from your
                  trailer or damaged on a job site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Don&apos;t Risk Your Business
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Coverage starts at $45/month. Get a free quote in under 2 minutes.
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
