import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "LandscaperInsure privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: February 19, 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Who We Are</h2>
            <p className="mt-3">
              LandscaperInsure is operated by Pro Specialty Insurance, a licensed insurance
              brokerage (CA License #6006473). This policy explains how we collect, use, and
              protect personal information when you use our website, forms, or communicate with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Information We Collect</h2>
            <p className="mt-3">We may collect the following information:</p>
            <ul className="mt-2 space-y-1 ml-4 list-disc">
              <li>Name, business name, phone number, email address, and zip code (from our quote form)</li>
              <li>Business details such as crew size and current insurance status</li>
              <li>IP address, browser type, and device information (collected automatically)</li>
              <li>Cookies and analytics data to improve our website</li>
              <li>Call recordings (with your consent, as required by applicable law)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. How We Use Your Information</h2>
            <p className="mt-3">We use your information to:</p>
            <ul className="mt-2 space-y-1 ml-4 list-disc">
              <li>Provide insurance quotes and connect you with appropriate carriers</li>
              <li>Contact you by phone, text, or email regarding your insurance inquiry</li>
              <li>Share your information with our insurance carrier partners to obtain quotes</li>
              <li>Comply with insurance licensing and regulatory requirements</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Information Sharing</h2>
            <p className="mt-3">
              We share your information with insurance carriers, managing general agents (MGAs),
              and wholesale brokers for the purpose of obtaining insurance quotes and binding
              coverage. We do not sell your personal information to unrelated third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Consent to Communications</h2>
            <p className="mt-3">
              By submitting our quote form, you consent to receive calls, texts, and voicemails
              from LandscaperInsure and its insurance partners at the phone number provided,
              including via automated technology and prerecorded messages. Message and data rates
              may apply. Consent is not a condition of purchase. You may opt out at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Data Security</h2>
            <p className="mt-3">
              We use industry-standard security measures including encryption in transit (TLS)
              and at rest to protect your personal information. Access to personal data is
              restricted to authorized personnel only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Data Retention</h2>
            <p className="mt-3">
              We retain your personal information for as long as necessary to fulfill the
              purposes for which it was collected, comply with legal obligations, and resolve
              disputes. Consent records are retained for a minimum of 5 years for regulatory
              compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Your Rights</h2>
            <p className="mt-3">
              Depending on your state of residence, you may have the right to:
            </p>
            <ul className="mt-2 space-y-1 ml-4 list-disc">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Opt out of communications at any time</li>
            </ul>
            <p className="mt-2">
              California residents have additional rights under the CCPA. Contact us to exercise
              any of these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Contact Us</h2>
            <p className="mt-3">
              For questions about this privacy policy or to exercise your data rights, contact
              us at{" "}
              <a href="mailto:privacy@landscaperinsure.com" className="text-green-700 hover:underline">
                privacy@landscaperinsure.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
