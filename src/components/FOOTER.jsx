import { profile } from "./HOME";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050f] px-6 py-8 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All rights reserved.
    </footer>
  );
}