import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SECTIONHEADING";

const projects = [
  {
    title: "DoughNation",
    subtitle: "Product Inventory & Donation Management System for Bakery Surplus",
    type: "Capstone Project · Frontend & Backend",
    description:
      "A web platform that helps bakeries track surplus inventory and route it to donation requests, with role-based access and location-aware notifications.",
    highlights: [
      "React.js and Tailwind CSS responsive interface",
      "FastAPI backend for authentication, inventory, and donation requests",
      "PostgreSQL storage with JWT authentication and role-based authorization",
      "Geolocation-based notifications and real-time communication",
    ],
    tags: ["React.js", "Tailwind CSS", "FastAPI", "PostgreSQL", "JWT"],
    live: null,
    github: null, // TODO: add repo URL
  },
  {
    title: "ALPs Website Revamp",
    subtitle: "Advanced Learning Programs",
    type: "Internship Project · Backend",
    description: "Backend enhancements and production fixes for a course and registration website.",
    highlights: [
      "Course management, registration forms, and email workflows",
      "SEO, Search Console indexing, and XML sitemap fixes",
      "Website migration and plugin troubleshooting",
    ],
    tags: ["WordPress", "PHP", "JavaScript", "SEO"],
    live: "https://alprograms.com",
    github: null,
  },
  {
    title: "ThePromptXcel Website Revamp",
    subtitle: "Custom WordPress tooling",
    type: "Internship Project · Backend",
    description: "Custom admin tools and interactive features for a content-driven WordPress site.",
    highlights: [
      "Shortcode-based content management and image/video galleries",
      "Dynamic contact forms with automated email notifications",
      "Tested and deployed enhancements to production",
    ],
    tags: ["WordPress", "PHP", "Elementor", "JavaScript"],
    live: "https://thepromptxcel.com",
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-[#080818] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Projects" subtitle="A capstone system and two production websites I worked on." />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`flex flex-col rounded-xl border p-6 ${
                i === 0
                  ? "border-violet-500/40 bg-violet-500/5 lg:col-span-3 lg:flex-row lg:gap-10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className={i === 0 ? "lg:w-1/2" : ""}>
                <p className="text-xs text-violet-300">{p.type}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{p.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`flex flex-1 flex-col justify-between ${i === 0 ? "mt-6 lg:mt-0" : "mt-4"}`}>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-400 marker:text-violet-400">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                {(p.live || p.github) && (
                  <div className="mt-6 flex gap-4 text-sm">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-300 hover:text-white">
                        <ExternalLink size={14} /> Visit site
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-300 hover:text-white">
                        <FaGithub size={14} /> Source code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}