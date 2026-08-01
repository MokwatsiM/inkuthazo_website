
export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-stone-400">
          <span className="font-semibold tracking-tight text-white">Inkuthazo Social Club</span>
          <span>•</span>
          <span>Est. 2023</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[0.7rem] text-stone-400">
          <span>Community, connection, and celebration — together.</span>
          <span className="hidden sm:inline">Contact: inkuthazoburialclub@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
