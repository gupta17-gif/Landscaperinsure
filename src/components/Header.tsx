import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="text-xl font-bold text-green-700">
            Landscaper<span className="text-slate-900">Insure</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/general-liability" className="hover:text-green-700 transition-colors">
            General Liability
          </Link>
          <Link href="/cost" className="hover:text-green-700 transition-colors">
            Cost
          </Link>
          <Link href="/do-i-need-insurance" className="hover:text-green-700 transition-colors">
            Do I Need Insurance?
          </Link>
          <Link
            href="/quote"
            className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 transition-colors"
          >
            Get Free Quote
          </Link>
        </nav>

        {/* Mobile CTA */}
        <Link
          href="/quote"
          className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Free Quote
        </Link>
      </div>
    </header>
  );
}
