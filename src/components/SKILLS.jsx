import { Wrench, KeyRound, ShieldCheck } from "lucide-react";
import { FaMicrosoft } from "react-icons/fa";
import {
  SiPhp,
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFastapi,
  SiWordpress,
  SiElementor,
  SiPostgresql,
  SiGithub,
  SiGooglesearchconsole,
  SiJira,
} from "react-icons/si";
import SectionHeading from "./SECTIONHEADING";

// Each skill: { name, icon, color }. "color" is the brand color shown on hover.
// Skills with no real logo (JWT, RBAC, Microsoft Office) use a generic Lucide icon instead.
const skillGroups = [
  {
    title: "Programming & Development",
    icon: SiPhp,
    items: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
      { name: "Elementor", icon: SiElementor, color: "#92003B" },
    ],
  },
  {
    title: "Database & Security",
    icon: SiPostgresql,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "JWT Authentication", icon: KeyRound, color: "#A78BFA" },
      { name: "Role-Based Access Control", icon: ShieldCheck, color: "#A78BFA" },
    ],
  },
  {
    title: "Tools & Productivity",
    icon: Wrench,
    items: [
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Google Search Console", icon: SiGooglesearchconsole, color: "#458CF5" },
      { name: "Microsoft Office", image: "/logos/office.png" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-[#05050f] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Skills" subtitle="Technologies and tools I'm familiar with, used in internship and academic work." />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map(({ title, icon: GroupIcon, items }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                  <GroupIcon size={18} />
                </span>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(({ name, icon: Icon, color, image }) => (
                  <span
                    key={name}
                    className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-slate-300 transition-colors hover:border-white/20"
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={name}
                        className="h-5 w-5 shrink-0 object-contain transition-transform group-hover:scale-110"
                      />
                    ) : (
                      <Icon
                        size={20}
                        style={{ color }}
                        className="shrink-0 opacity-90 transition-transform group-hover:scale-110"
                      />
                    )}
                    {name}
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