import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import { links, navItems } from "../../data/links";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold">
          Himanshu<span className="text-sky-700 dark:text-sky-400">.</span>
        </a>

        <ul className="hidden gap-7 text-sm text-slate-600 md:flex dark:text-slate-400">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-sky-700 dark:hover:text-sky-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-sky-700 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-700 hover:text-white md:block dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-slate-950"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 md:hidden dark:border-slate-700"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-700 dark:text-slate-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="block py-3 font-medium text-sky-700 dark:text-sky-400"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}