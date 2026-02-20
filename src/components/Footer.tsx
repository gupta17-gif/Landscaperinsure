import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-green-700">
                Landscaper<span className="text-slate-900">Insure</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Affordable insurance for landscaping businesses nationwide.
              Licensed broker, A-rated carriers.
            </p>
            <p className="mt-2 text-sm font-medium text-slate-600">
              CA License #6006473
            </p>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-semibold text-slate-900">Coverage</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/general-liability" className="hover:text-green-700">
                  General Liability
                </Link>
              </li>
              <li>
                <Link href="/workers-compensation" className="hover:text-green-700">
                  Workers&apos; Compensation
                </Link>
              </li>
              <li>
                <Link href="/cost" className="hover:text-green-700">
                  Insurance Cost
                </Link>
              </li>
              <li>
                <Link href="/certificate-of-insurance" className="hover:text-green-700">
                  Certificate of Insurance
                </Link>
              </li>
              <li>
                <Link href="/lawn-care-insurance" className="hover:text-green-700">
                  Lawn Care Insurance
                </Link>
              </li>
              <li>
                <Link href="/tree-trimming-insurance" className="hover:text-green-700">
                  Tree Trimming Insurance
                </Link>
              </li>
              <li>
                <Link href="/hardscaping-insurance" className="hover:text-green-700">
                  Hardscaping Insurance
                </Link>
              </li>
              <li>
                <Link href="/irrigation-insurance" className="hover:text-green-700">
                  Irrigation Insurance
                </Link>
              </li>
              <li>
                <Link href="/snow-removal-insurance" className="hover:text-green-700">
                  Snow Removal Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/do-i-need-insurance" className="hover:text-green-700">
                  Do I Need Insurance?
                </Link>
              </li>
              <li>
                <Link href="/hoa-contracts" className="hover:text-green-700">
                  HOA Contract Requirements
                </Link>
              </li>
              <li>
                <Link href="/seasonal-coverage" className="hover:text-green-700">
                  Seasonal Coverage
                </Link>
              </li>
              <li>
                <Link href="/employee-vs-subcontractor" className="hover:text-green-700">
                  Employee vs Subcontractor
                </Link>
              </li>
              <li className="pt-2 font-medium text-slate-600">By State</li>
              <li>
                <Link href="/california-landscaping-insurance" className="hover:text-green-700">
                  California
                </Link>
              </li>
              <li>
                <Link href="/texas-landscaping-insurance" className="hover:text-green-700">
                  Texas
                </Link>
              </li>
              <li>
                <Link href="/florida-landscaping-insurance" className="hover:text-green-700">
                  Florida
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/about" className="hover:text-green-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-700">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-700">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/opt-out" className="hover:text-green-700">
                  Opt Out
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          <p>
            LandscaperInsure is operated by Pro Specialty Insurance |
            Licensed Insurance Brokerage
          </p>
          <p className="mt-1 font-medium text-slate-500">
            CA License #6006473
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} LandscaperInsure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
