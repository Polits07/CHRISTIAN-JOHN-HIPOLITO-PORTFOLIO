import { Briefcase, ExternalLink } from "lucide-react";
import SectionHeading from "./SECTIONHEADING";

const experience = [
  {
    company: "NPVN Learning Programs Co. (Advanced Learning Programs – ALPs)",
    role: "Backend Developer Intern",
    period: "February 2026 – June 2026",
    projects: [
      {
        name: "ALPs Website Revamp",
        url: "https://alprograms.com",
        bullets: [
          "Developed backend features and administrative functions using WordPress, PHP, and JavaScript, including course management, registration forms, email notification workflows, and dynamic website components.",
          "Resolved production issues involving SEO, Google Search Console indexing, XML sitemaps, WordPress plugins, website migration, and course management, improving stability and search visibility.",
          "Served as Scrum Master, facilitating Sprint Planning, Daily Scrums, Sprint Reviews, and Retrospectives while coordinating tasks between developers and stakeholders.",
        ],
      },
      {
        name: "ThePromptXcel Website Revamp",
        url: "https://thepromptxcel.com",
        bullets: [
          "Built custom WordPress administrative tools, shortcode-based content management, an image gallery, video features, and content editing functionality.",
          "Implemented dynamic contact forms, automated email notifications, and interactive components, validating each feature for usability and reliability.",
          "Worked with developers to test, troubleshoot, and deploy enhancements, keeping feature quality consistent across production releases.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-[#05050f] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Experience" />
        {experience.map((job) => (
          <div key={job.company} className="relative border-l border-violet-500/30 pl-8">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-violet-500/40 bg-[#05050f] text-violet-300">
              <Briefcase size={12} />
            </span>
            <h3 className="text-lg font-semibold text-white">{job.role}</h3>
            <p className="mt-1 text-sm text-violet-300">{job.company}</p>
            <p className="mt-1 text-xs text-slate-500">{job.period}</p>

            <div className="mt-8 space-y-6">
              {job.projects.map((p) => (
                <div key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-white">{p.name}</h4>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-blue-300 hover:text-white"
                    >
                      {p.url.replace("https://", "")}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-400 marker:text-violet-400">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}