import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05050f]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-500/40 bg-violet-500/10 text-sm font-semibold text-violet-300">
            CH
          </span>
          <span className="text-sm font-medium text-white">
            Christian Hipolito
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                i === 0
                  ? "font-medium text-violet-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CV button */}
        <a
          href="/Christian_John_Apoloy_Hipolito_Resume.pdf"
          download
          className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.03] md:flex"
        >
          Download CV
          <Download size={16} />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Christian_John_Apoloy_Hipolito_Resume.pdf"
            download
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm font-medium text-white"
          >
            Download CV
            <Download size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}