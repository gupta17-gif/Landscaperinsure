import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact LandscaperInsure",
  description:
    "Get in touch with LandscaperInsure. Call, email, or request a callback. Licensed insurance broker — CA License #6006473.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Have questions? Need help with your policy? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">
                    <a
                      href="mailto:hello@landscaperinsure.com"
                      className="text-green-700 hover:underline"
                    >
                      hello@landscaperinsure.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Hours</h3>
                  <p className="mt-1 text-slate-600">
                    Monday – Friday: 8am – 6pm (Pacific)
                  </p>
                  <p className="text-slate-600">
                    Saturday: 9am – 1pm (Pacific)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">License</h3>
                  <p className="mt-1 text-slate-600">
                    California Insurance License #6006473
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Fastest Way to Get Quoted
              </h2>
              <p className="mt-4 text-slate-600">
                Our online quote form takes under 2 minutes. Fill it out and
                we&apos;ll call you back with options — usually within the hour
                during business hours.
              </p>
              <Link
                href="/quote"
                className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 transition-colors"
              >
                Get My Free Quote
              </Link>
              <p className="mt-4 text-sm text-slate-500">
                No obligation. No pressure. Just straightforward insurance advice
                from a licensed broker.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: "How quickly can I get a quote?",
                a: "Fill out our online form and we'll typically call you back within 1 hour during business hours. Many quotes can be completed in a single call.",
              },
              {
                q: "Can you help with claims?",
                a: "Yes. As your broker, we help guide you through the claims process and advocate on your behalf with the carrier.",
              },
              {
                q: "Do you serve my state?",
                a: "We serve landscaping businesses in all 50 states. Our carrier network covers every major market.",
              },
              {
                q: "How do I get a COI for a client?",
                a: "Just let us know and we'll have your carrier issue a Certificate of Insurance — usually same-day. We can add additional insured parties at no extra charge.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-1 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
