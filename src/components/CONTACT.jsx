import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "./HOME";
import SectionHeading from "./SECTIONHEADING";

const INFO = [
  { icon: Mail, label: "Email", value: profile.emailAddress, href: profile.social.email },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

const field =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app with the message filled in (no backend needed).
  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-[#080818] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Contact" subtitle="Open to software development, technical support, and QA roles. Send me a message." />
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            {INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs text-slate-500">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-white hover:text-violet-300">{value}</a>
                  ) : (
                    <p className="text-sm text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={send} className="space-y-4">
            <input name="name" value={form.name} onChange={update} placeholder="Your name" required className={field} />
            <input name="email" type="email" value={form.email} onChange={update} placeholder="Your email" required className={field} />
            <textarea name="message" value={form.message} onChange={update} placeholder="Your message" rows={5} required className={field} />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.03]"
            >
              Send message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}