import { GraduationCap, MapPin, Phone } from "lucide-react";
import { profile } from "./HOME";
import SectionHeading from "./SECTIONHEADING";

const paragraphs = [
  "I graduated with a Bachelor of Science in Information Technology from the Polytechnic University of the Philippines – Sta. Mesa, with Cum Laude honors.",
  "During my internship at NPVN Learning Programs Co., I built backend features, resolved production issues involving SEO and indexing, and served as Scrum Master for the team. For my capstone, I built a full-stack donation platform with React.js, FastAPI, and PostgreSQL.",
  "I'm detail-oriented, adaptable, and keen to keep learning. I'm open to software development, technical support, QA, and other IT roles.",
];

const education = {
  school: "Polytechnic University of the Philippines – Sta. Mesa",
  degree: "Bachelor of Science in Information Technology",
  honor: "Cum Laude",
  period: "2022 – 2026",
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#080818] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About Me" />
        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-xs text-slate-500">
                <GraduationCap size={14} /> Education
              </p>
              <p className="mt-2 text-sm font-medium text-white">{education.degree}</p>
              <p className="mt-1 text-xs text-slate-400">{education.school}</p>
              <p className="mt-1 text-xs text-slate-500">
                {education.period} · {education.honor}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin size={14} /> Location
              </p>
              <p className="mt-2 text-sm text-white">{profile.location}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-xs text-slate-500">
                <Phone size={14} /> Contact
              </p>
              <p className="mt-2 text-sm text-white">{profile.emailAddress}</p>
              <p className="mt-1 text-sm text-white">{profile.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}