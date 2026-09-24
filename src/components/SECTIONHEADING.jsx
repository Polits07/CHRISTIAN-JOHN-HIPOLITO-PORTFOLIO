export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-slate-400">{subtitle}</p>}
    </div>
  );
}