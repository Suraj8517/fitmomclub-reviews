export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <span
          className="text-lg font-semibold tracking-tight text-slate-900"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
        >
          FitMom Club
        </span>

        <p className="text-sm leading-relaxed text-slate-500">
          © 2026 VMax HealthTech Private Limited · All reviews from verified
          members
        </p>
      </div>
    </footer>
  );
}