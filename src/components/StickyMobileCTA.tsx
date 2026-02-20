import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-lg md:hidden">
      <div className="flex gap-2">
        <Link
          href="/quote"
          className="flex-1 rounded-lg bg-green-700 py-3 text-center text-sm font-semibold text-white hover:bg-green-800 transition-colors"
        >
          Get Free Quote
        </Link>
        <a
          href="tel:+18001234567"
          className="flex items-center justify-center rounded-lg border border-green-700 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-50 transition-colors"
        >
          Call Us
        </a>
      </div>
    </div>
  );
}
