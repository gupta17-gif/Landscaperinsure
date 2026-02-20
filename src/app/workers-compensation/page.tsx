import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workers' Compensation Insurance for Landscapers",
  description:
    "Workers' comp insurance for landscaping businesses. Required in most states when you hire employees. Get affordable coverage and stay compliant.",
};

export default function WorkersCompPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Workers&apos; Comp Insurance for Landscapers
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Landscaping is one of the highest-risk industries for workplace
            injuries. Workers&apos; comp protects your crew and your business.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-lg bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* What It Covers */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            What Does Workers&apos; Comp Cover?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Medical Expenses",
                desc: "Hospital visits, surgery, physical therapy, and prescriptions for work-related injuries.",
              },
              {
                title: "Lost Wages",
                desc: "Partial wage replacement while your employee recovers and can't work.",
              },
              {
                title: "Disability Benefits",
                desc: "Long-term payments if an injury causes permanent partial or total disability.",
              },
              {
                title: "Death Benefits",
                desc: "Financial support for the family of an employee who dies from a work-related injury.",
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

      {/* Common Injuries */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Common Landscaping Injuries
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Landscaping ranks among the top 10 most dangerous occupations. Common
            workers&apos; comp claims include:
          </p>
          <ul className="mt-8 space-y-3 text-slate-700">
            {[
              "Back injuries from lifting heavy equipment and materials",
              "Lacerations from mower blades, chainsaws, and hedge trimmers",
              "Heat stroke and dehydration during summer months",
              "Falls from ladders during tree trimming",
              "Eye injuries from flying debris",
              "Repetitive stress injuries (wrists, shoulders, knees)",
              "Insect stings and allergic reactions",
            ].map((injury) => (
              <li key={injury} className="flex items-start gap-3">
                <span className="mt-0.5 text-red-500">!</span>
                <span>{injury}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Do You Need It */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Do You Need Workers&apos; Comp?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            In most states, workers&apos; comp is <strong>required by law</strong>{" "}
            as soon as you hire your first employee. Requirements vary by state:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-6">
              <h3 className="font-semibold text-red-800">
                Required with 1+ employees
              </h3>
              <p className="mt-2 text-sm text-red-700">
                CA, NY, IL, PA, OH, NJ, MA, and most other states
              </p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-6">
              <h3 className="font-semibold text-yellow-800">
                Required with 3-5+ employees
              </h3>
              <p className="mt-2 text-sm text-yellow-700">
                FL (4+), GA (3+), NC (3+), SC (4+), and select states
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-6">
              <h3 className="font-semibold text-green-800">
                Special rules
              </h3>
              <p className="mt-2 text-sm text-green-700">
                TX (optional but recommended), AL (5+), MS (5+)
              </p>
            </div>
          </div>
          <p className="mt-6 text-slate-600">
            Even if your state doesn&apos;t require it, many general contractors
            and commercial clients will require proof of workers&apos; comp before
            hiring you as a subcontractor.
          </p>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            How Much Does It Cost?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Workers&apos; comp for landscapers typically costs{" "}
            <strong>$150–$400/month</strong> depending on payroll size and state.
            Landscaping carries a higher classification code rate due to injury
            risk.
          </p>
          <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              <strong>How it&apos;s calculated:</strong> Rate per $100 of payroll
              × total annual payroll ÷ 12. Landscaping class codes (NCCI 0042)
              typically run $5–$12 per $100 of payroll depending on your state and
              experience modifier.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Protect Your Crew. Protect Your Business.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get workers&apos; comp and GL quoted together — we&apos;ll find you the
            best rate across 30+ carriers.
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
