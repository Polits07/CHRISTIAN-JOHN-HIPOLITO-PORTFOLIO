import { GraduationCap, Code2, Users, Mail, ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/*  Profile data (single source of truth, also used by CONTACT/FOOTER) */
/* ------------------------------------------------------------------ */
export const profile = {
  firstName: "Christian John",
  lastName: "Hipolito",
  tagline:
    "IT graduate (Cum Laude) who builds and maintains web applications with WordPress, PHP, Python, React.js, FastAPI, and PostgreSQL. I enjoy fixing real production problems and working in Agile teams.",
  location: "San Antonio, Nueva Ecija, Philippines",
  phone: "+63 905 625 8441",
  emailAddress: "jnistianhipolitov7@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/your-profile", // TODO: replace
    github: "https://github.com/your-username", // TODO: replace
    email: "mailto:jnistianhipolitov7@gmail.com",
  },
};

const heroStats = [
  { icon: GraduationCap, title: "Cum Laude", subtitle: "BS Information Technology\nPolytechnic University of the Philippines - Sta. Mesa" },
  {
    icon: Code2,
    title: "Backend Dev",
    subtitle: "WordPress, PHP, Python\nFastAPI",
    extra: { title: "Frontend Dev", subtitle: "HTML, React.js, Elementor,\nTailwind CSS, CSS" },
  },
  { icon: Users, title: "Scrum Master", subtitle: "Agile \nexperience" },
];

const socialBtn =
  "flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-violet-500/20 hover:text-white";

export default function Home() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section id="home" className="relative overflow-hidden bg-[#05050f] px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for opportunities
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Hi, I'm
              <br />
              {profile.firstName}
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                {profile.lastName}.
              </span>
            </h1>

            <p className="mt-5 text-lg">
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-medium text-transparent">
                Backend or Frontend Developer
              </span>
              <span className="text-slate-200"> & IT Graduate</span>
            </p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">{profile.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.03]"
              >
                View My Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">Find me on</p>
              <div className="flex gap-3">
                <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className={socialBtn} aria-label="LinkedIn">
                  <FaLinkedin size={16} />
                </a>
                <a href={profile.social.github} target="_blank" rel="noreferrer" className={socialBtn} aria-label="GitHub">
                  <FaGithub size={16} />
                </a>
                <a href={profile.social.email} className={socialBtn} aria-label="Email">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-blue-400 opacity-70 blur-md" />
              <img
                src="/PROFILE.png"
                alt={`${profile.firstName} ${profile.lastName}`}
                className="relative h-60 w-60 rounded-full border-4 border-[#05050f] object-cover"
              />
            </div>

            <div className="grid w-full grid-cols-3 gap-3">
              {heroStats.map(({ icon: Icon, title, subtitle, extra }) => (
                <div
                  key={title}
                  className="flex flex-col justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 text-violet-300" size={20} />
                  <p className="text-xs font-semibold text-white">{title}</p>
                  <p className="mt-1 whitespace-pre-line text-[11px] leading-tight text-slate-400">{subtitle}</p>
                  {extra && (
                    <>
                      <p className="mt-3 text-xs font-semibold text-white">{extra.title}</p>
                      <p className="mt-1 whitespace-pre-line text-[11px] leading-tight text-slate-400">{extra.subtitle}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}