import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SECTIONHEADING";

// Add real certificates here. Only the honor below comes from your resume.
const certifications = [
  {
    title: "Cum Laude",
    issuer: "Polytechnic University of the Philippines – Sta. Mesa",
    date: "2026",
    detail: "Bachelor of Science in Information Technology",
    url: null,
  },
  // { title: "Certificate name", issuer: "Issuer", date: "2026", detail: "", url: "https://..." },
];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 bg-[#05050f] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Certifications & Honors" />
        {certifications.length === 0 ? (
          <p className="text-sm text-slate-400">Certifications will be listed here.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                  <Award size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{c.issuer}</p>
                {c.detail && <p className="mt-1 text-xs text-slate-500">{c.detail}</p>}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{c.date}</span>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-300 hover:text-white">
                      View <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}