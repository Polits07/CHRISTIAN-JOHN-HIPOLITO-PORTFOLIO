import { Code2, Database, Wrench} from "lucide-react";
import SectionHeading from "./SECTIONHEADING";

const skillGroups = [
  {
    title: "Programming & Development",
    icon: Code2,
    items: ["PHP", "Python", "JavaScript", "React.js", "Tailwind CSS", "FastAPI", "WordPress", "Elementor"],
  },
  { title: "Database & Security", icon: Database, items: ["PostgreSQL", "JWT Authentication", "Role-Based Access Control"] },
  { title: "Tools & Productivity", icon: Wrench, items: ["GitHub", "Google Search Console", "Microsoft Office"] },
 
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-[#05050f] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Skills" subtitle="Technologies and Tools I've familiar, used in internship and academic work." />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, items }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                  <Icon size={18} />
                </span>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}