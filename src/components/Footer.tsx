import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <span className="text-lg font-bold text-green-700">
                Landscaper<span className="text-slate-900">Insure</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Affordable insurance for landscaping businesses nationwide. Licensed broker, top-rated coverage.
            </p>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-semibold text-slate-900">Coverage</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><Link href="/general-liability" className="hover:text-green-700">General Liability</Link></li>
              <li><Link href="/workers-compensation" className="hover:text-green-700">Workers&apos; Compensation</Link></li>
              <li><Link href="/cost" className="hover:text-green-700">Insurance Cost</Link></li>
              <li><Link href="/certificate-of-insurance" className="hover:text-green-700">Certificate of Insurance</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><Link href="/do-i-need-insurance" className="hover:text-green-700">Do I Need Insurance?</Link></li>
              <li><Link href="/hoa-contracts" className="hover:text-green-700">HOA Contract Requirements</Link></li>
              <li><Link href="/seasonal-coverage" className="hover:text-green-700">Seasonal Coverage</Link></li>
              <li><Link href="/employee-vs-subcontractor" className="hover:text-green-700">Employee vs Subcontractor</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-green-700">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-green-700">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-green-700">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-green-700">Terms of Service</Link></li>
              <li><Link href="/opt-out" className="hover:text-green-700">Opt Out</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar — CA License # compliance */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          <p>
            LandscaperInsure | Licensed Insurance Brokerage
          </p>
          <p className="mt-1 font-medium text-slate-500">
            CA License #0F03649
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} LandscaperInsure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
