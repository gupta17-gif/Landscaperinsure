import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opt Out of Communications",
  description: "Opt out of calls, texts, and emails from LandscaperInsure. We respect your preferences.",
};

export default function OptOutPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-slate-900">Opt Out</h1>
        <p className="mt-4 text-lg text-slate-600">
          We respect your communication preferences. Here&apos;s how to opt out
          of messages from LandscaperInsure.
        </p>

        <div className="mt-10 space-y-8">
          <section className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Text Messages (SMS)
            </h2>
            <p className="mt-3 text-slate-600">
              Reply <strong>STOP</strong> to any text message from us. You&apos;ll
              receive a confirmation that you&apos;ve been unsubscribed. No
              further text messages will be sent.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Phone Calls
            </h2>
            <p className="mt-3 text-slate-600">
              Tell any representative that you&apos;d like to be placed on our
              internal do-not-call list, or email us at{" "}
              <a
                href="mailto:optout@landscaperinsure.com"
                className="text-green-700 hover:underline"
              >
                optout@landscaperinsure.com
              </a>{" "}
              with the subject line &quot;Do Not Call&quot; and include your
              phone number.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Email</h2>
            <p className="mt-3 text-slate-600">
              Click the &quot;Unsubscribe&quot; link at the bottom of any
              marketing email from us, or email{" "}
              <a
                href="mailto:optout@landscaperinsure.com"
                className="text-green-700 hover:underline"
              >
                optout@landscaperinsure.com
              </a>{" "}
              with the subject line &quot;Unsubscribe&quot; and we&apos;ll
              remove you within 48 hours.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              All Communications
            </h2>
            <p className="mt-3 text-slate-600">
              To opt out of all communications at once, email{" "}
              <a
                href="mailto:optout@landscaperinsure.com"
                className="text-green-700 hover:underline"
              >
                optout@landscaperinsure.com
              </a>{" "}
              with &quot;Remove All&quot; as the subject line. Include your name
              and phone number so we can locate your record.
            </p>
          </section>

          <div className="rounded-lg bg-slate-50 p-6">
            <p className="text-sm text-slate-500">
              <strong>Processing time:</strong> SMS opt-outs are processed
              immediately. Phone and email opt-out requests are processed within
              48 business hours. You may still receive communications that were
              already in progress before your opt-out was processed.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              <strong>Note:</strong> Opting out of marketing communications will
              not affect transactional messages related to an active insurance
              policy (e.g., renewal notices, claims updates).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
