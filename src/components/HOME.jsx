import { GraduationCap, Code2, Users, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { profile, heroStats } from "../data/PROFILE";

const ICONS = {
  GraduationCap,
  Code2,
  Users,
};

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#05050f] px-6 py-20 md:py-28"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Left column: text */}
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
              Backend Developer
            </span>
            <span className="text-slate-200"> Intern & IT Student</span>
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

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
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">
              Find me on
            </p>
            <div className="flex gap-3">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-violet-500/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-violet-500/20 hover:text-white"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.social.email}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-violet-500/20 hover:text-white"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right column: photo + stat cards */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-blue-400 opacity-70 blur-md" />
            <img
              src="/profile-photo.jpg"
              alt={`${profile.firstName} ${profile.lastName}`}
              className="relative h-60 w-60 rounded-full border-4 border-[#05050f] object-cover"
            />
          </div>

          <div className="grid w-full grid-cols-3 gap-3">
            {heroStats.map((stat) => {
              const Icon = ICONS[stat.icon];
              return (
                <div
                  key={stat.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 text-violet-300" size={20} />
                  <p className="text-xs font-semibold text-white">
                    {stat.title}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-[11px] leading-tight text-slate-400">
                    {stat.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}