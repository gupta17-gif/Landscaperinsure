import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Employee vs Subcontractor — Insurance Implications for Landscapers",
  description:
    "Hiring employees vs subcontractors has major insurance implications. Learn the differences, risks, and what coverage you need for each.",
};

export default function EmployeeVsSubcontractorPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Employee vs. Subcontractor: Insurance Guide
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            How you classify your workers directly impacts what insurance you
            need — and what happens if you get it wrong.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            The Key Differences
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-700">Factor</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-700">Employee (W-2)</th>
                  <th className="py-3 text-sm font-semibold text-slate-700">Subcontractor (1099)</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">Workers&apos; Comp</td>
                  <td className="py-3 pr-4">You must provide it</td>
                  <td className="py-3">They carry their own</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">GL Coverage</td>
                  <td className="py-3 pr-4">Covered under your policy</td>
                  <td className="py-3">Should have their own GL</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">Control</td>
                  <td className="py-3 pr-4">You control how, when, where</td>
                  <td className="py-3">They control their own methods</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">Equipment</td>
                  <td className="py-3 pr-4">You provide it</td>
                  <td className="py-3">They use their own</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-slate-900">Liability Risk</td>
                  <td className="py-3 pr-4">Higher — you&apos;re responsible</td>
                  <td className="py-3">Lower — if properly documented</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-red-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            The Misclassification Risk
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Calling someone a &quot;subcontractor&quot; when they&apos;re really
            an employee is one of the most common — and costly — mistakes in
            landscaping.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "State audits can reclassify your 1099 workers as W-2 employees",
              "Back-owed workers' comp premiums (often 3+ years) plus penalties",
              "IRS penalties for unpaid payroll taxes",
              "If a misclassified 'sub' gets hurt, YOUR insurance may deny the claim",
              "California AB5 and similar state laws have tightened classification rules",
            ].map((risk) => (
              <div key={risk} className="flex items-start gap-3">
                <span className="mt-0.5 text-red-600">&#x25CF;</span>
                <span className="text-slate-700">{risk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Best Practices
          </h2>
          <ul className="mt-8 space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600">&#x2714;</span>
              <span>Always get a COI from subcontractors <strong>before</strong> they start work</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">&#x2714;</span>
              <span>Use written subcontractor agreements that define the relationship</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">&#x2714;</span>
              <span>If you control their schedule, provide their tools, and they only work for you — they&apos;re probably an employee</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">&#x2714;</span>
              <span>When in doubt, classify as employee. The penalties for misclassification are severe.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Get the Right Coverage for Your Team
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether you have employees, subs, or both — we&apos;ll make sure
            you&apos;re properly covered.
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
