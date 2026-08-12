export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-stone-400">
            <span className="font-semibold tracking-tight text-white">Inkuthazo Social Club</span>
            <span aria-hidden="true">•</span>
            <span>Est. 2023</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            <a
              href="#membership"
              className="text-stone-400 hover:text-white transition-colors"
            >
              Membership
            </a>
            <a href="#faq" className="text-stone-400 hover:text-white transition-colors">
              Questions
            </a>
            <a href="#contact" className="text-stone-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="/privacy" className="text-stone-400 hover:text-white transition-colors">
              Privacy
            </a>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-800 pt-5 text-[0.7rem] text-stone-400">
          <span>Inhlangano inamandla</span>
          <a
            href="mailto:inkuthazoburialclub@gmail.com"
            className="hover:text-white transition-colors"
          >
            inkuthazoburialclub@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
