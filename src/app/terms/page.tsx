import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "LandscaperInsure terms of service. Terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: February 19, 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Agreement</h2>
            <p className="mt-3">
              By accessing or using the LandscaperInsure website (landscaperinsure.com),
              you agree to these Terms of Service. If you do not agree, please do not use
              our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. About Our Services</h2>
            <p className="mt-3">
              LandscaperInsure is operated by Pro Specialty Insurance, a licensed
              insurance brokerage (CA License #6006473). We help landscaping businesses
              obtain insurance quotes from multiple carriers. We are an insurance broker —
              we do not underwrite policies or handle premium payments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Not Insurance Advice</h2>
            <p className="mt-3">
              The information on this website is for general informational purposes only
              and does not constitute insurance advice. Coverage options, availability, and
              pricing vary by state, carrier, and individual circumstances. Always review
              your actual policy documents for specific coverage details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Quote Requests</h2>
            <p className="mt-3">
              When you submit a quote request through our website, you authorize us to
              share your information with insurance carriers and partners for the purpose
              of obtaining insurance quotes. Submitting a quote request does not obligate
              you to purchase any insurance product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Communications Consent</h2>
            <p className="mt-3">
              By submitting our quote form, you consent to receive calls, texts, and
              voicemails from LandscaperInsure and its insurance partners at the phone
              number provided, including via automated technology and prerecorded messages.
              You may opt out at any time by replying STOP to any text message or visiting
              our opt-out page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Accuracy of Information</h2>
            <p className="mt-3">
              You agree to provide accurate and complete information when submitting quote
              requests. Inaccurate information may result in incorrect quotes or policy
              cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Intellectual Property</h2>
            <p className="mt-3">
              All content on this website — including text, graphics, logos, and software
              — is the property of Pro Specialty Insurance and is protected by
              copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Limitation of Liability</h2>
            <p className="mt-3">
              LandscaperInsure provides this website and its services on an &quot;as is&quot;
              basis. We are not liable for any damages arising from your use of the website,
              reliance on information provided, or any insurance products purchased through
              our services, to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Changes to Terms</h2>
            <p className="mt-3">
              We may update these terms from time to time. Continued use of the website
              after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Contact</h2>
            <p className="mt-3">
              For questions about these terms, contact us at{" "}
              <a href="mailto:hello@landscaperinsure.com" className="text-green-700 hover:underline">
                hello@landscaperinsure.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
