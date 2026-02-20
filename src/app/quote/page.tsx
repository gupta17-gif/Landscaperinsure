"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const CONSENT_LANGUAGE_VERSION = "v1.1";
const CONSENT_TEXT =
  'By clicking "Get My Free Quote," you consent to receive calls, texts, and voicemails from LandscaperInsure and its insurance partners at the phone number provided, including via automated technology and prerecorded messages. Message & data rates may apply. Consent is not a condition of purchase. You may opt out at any time by replying STOP to any text message or visiting landscaperinsure.com/opt-out.';

type FormData = {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  zipCode: string;
  crewSize: string;
  currentlyInsured: string;
};

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    zipCode: "",
    crewSize: "",
    currentlyInsured: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const canProceedStep1 =
    form.zipCode.length === 5 && form.crewSize && form.currentlyInsured;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const now = new Date().toISOString();
      const pageUrl = window.location.href;

      const { data: lead, error: leadError } = await supabase
        .from("leads")
        .insert({
          full_name: form.fullName,
          business_name: form.businessName,
          phone: form.phone,
          email: form.email || null,
          zip_code: form.zipCode,
          state: "unknown",
          segment: "Landscaping",
          data_source: "web_form",
          consent_to_call: true,
          consent_to_text: true,
          consent_timestamp: now,
          consent_ip: null,
          consent_page_url: pageUrl,
          consent_language_version: CONSENT_LANGUAGE_VERSION,
          consent_scope: ["sms", "voice", "prerecorded", "transfer_to_partner"],
          lead_status: "consented",
        })
        .select("id")
        .single();

      if (leadError) throw leadError;

      await supabase.from("compliance_log").insert({
        lead_id: lead.id,
        event_type: "consent_given",
        channel: "web_form",
        consent_text: CONSENT_TEXT,
        ip_address: null,
        user_agent: navigator.userAgent,
        page_url: pageUrl,
        details: {
          form_crew_size: form.crewSize,
          form_currently_insured: form.currentlyInsured,
          consent_language_version: CONSENT_LANGUAGE_VERSION,
        },
      });

      await supabase.from("inbound_contacts").insert({
        lead_id: lead.id,
        contact_type: "web_form",
        source_channel: "web_form",
        form_business_name: form.businessName,
        form_zip: form.zipCode,
        form_crew_size: form.crewSize,
        form_currently_insured: form.currentlyInsured === "yes",
        form_phone: form.phone,
        form_email: form.email || null,
      });

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-green-50 px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <span className="text-3xl text-green-600">✓</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Quote Request Received!
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Thanks, {form.fullName.split(" ")[0]}! One of our team will call you
            shortly to get you quoted.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            Check your phone — we&apos;ll send a confirmation text shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-50 py-12 md:py-20">
      <div className="mx-auto max-w-lg px-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Get Your Free Landscaping Insurance Quote
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Takes under 2 minutes. No obligation.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              step >= 1
                ? "bg-green-700 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            1
          </div>
          <div
            className={`h-0.5 w-12 ${
              step >= 2 ? "bg-green-700" : "bg-slate-200"
            }`}
          />
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              step >= 2
                ? "bg-green-700 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            2
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-lg md:p-8"
        >
          {step === 1 && (
            <div className="space-y-5">
              <p className="text-sm font-medium text-slate-500">
                Step 1 of 2: About your business
              </p>

              {/* Zip Code */}
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-slate-700"
                >
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  required
                  maxLength={5}
                  pattern="[0-9]{5}"
                  value={form.zipCode}
                  onChange={handleChange}
                  placeholder="33101"
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              {/* Crew Size */}
              <div>
                <label
                  htmlFor="crewSize"
                  className="block text-sm font-medium text-slate-700"
                >
                  Crew Size <span className="text-red-500">*</span>
                </label>
                <select
                  id="crewSize"
                  name="crewSize"
                  required
                  value={form.crewSize}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Select crew size</option>
                  <option value="just-me">Just me</option>
                  <option value="2-3">2-3 people</option>
                  <option value="4-10">4-10 people</option>
                  <option value="10+">10+ people</option>
                </select>
              </div>

              {/* Currently Insured */}
              <div>
                <label
                  htmlFor="currentlyInsured"
                  className="block text-sm font-medium text-slate-700"
                >
                  Currently have GL insurance?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="currentlyInsured"
                  name="currentlyInsured"
                  required
                  value={form.currentlyInsured}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes — looking for a better rate</option>
                  <option value="no">No — need new coverage</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className="mt-4 w-full rounded-lg bg-green-700 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  Step 2 of 2: Your contact info
                </p>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-green-700 hover:underline"
                >
                  ← Back
                </button>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-slate-700"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              {/* Business Name */}
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-slate-700"
                >
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="Smith's Landscaping LLC"
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              {/* Email (optional) */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email{" "}
                  <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@smithlandscaping.com"
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              {/* Consent Language */}
              <p className="text-xs leading-relaxed text-slate-400">
                {CONSENT_TEXT}
              </p>

              {/* Error */}
              {error && (
                <p className="text-sm font-medium text-red-600">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-green-700 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Get My Free Quote"}
              </button>

              {/* What happens next */}
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-700">
                  What happens next?
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-500">
                  <li>1. We&apos;ll call you within 1 hour during business hours</li>
                  <li>2. Quick 5-minute call to finalize your quote details</li>
                  <li>3. You&apos;ll get your quote — no obligation to buy</li>
                </ul>
              </div>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                <span>✓ No obligation</span>
                <span>✓ 2 minutes</span>
                <span>✓ Licensed broker</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
