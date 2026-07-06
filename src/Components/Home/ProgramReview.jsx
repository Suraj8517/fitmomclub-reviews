import { Leaf, Flower2, Zap, Waves, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import imgHealth from "../../assets/home/program/img1.jpg";
import imgFertility from "../../assets/home/program/img4.jpg";
import imgPcos from "../../assets/home/program/img2.jpg";
import imgThyroid from "../../assets/home/program/img3.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROGRAMS = [
  {
    icon: Leaf,
    eyebrow: "Health & Lifestyle",
    rating: 4.8,
    reviewCount: 1200,
    review:
      "\"I stopped crash dieting and finally saw steady, visible change within the first month.\"",
    description: "Sustainable weight loss, without the crash diets.",
    image: imgHealth,
    link: "weight-management",
    accent: { badge: "bg-emerald-50", icon: "text-emerald-700" },
  },
  {
    icon: Flower2,
    eyebrow: "Fertility",
    rating: 4.9,
    reviewCount: 680,
    review:
      "\"The cycle tracking gave me clarity I never had. We conceived naturally within a few months.\"",
    description: "Structured cycle coaching for natural conception.",
    image: imgFertility,
    link: "natural-conception",
    accent: { badge: "bg-rose-50", icon: "text-rose-700" },
  },
  {
    icon: Zap,
    eyebrow: "PCOS Care",
    rating: 4.8,
    reviewCount: 520,
    review:
      "\"My symptoms improved once the coaching focused on insulin and blood sugar, not just weight.\"",
    description: "PCOS coaching built around hormone balance.",
    image: imgPcos,
    link: "pcos-insulin-management",
    accent: { badge: "bg-amber-50", icon: "text-amber-700" },
  },
  {
    icon: Waves,
    eyebrow: "Thyroid Care",
    rating: 4.6,
    reviewCount: 310,
    review:
      "\"Steady, practical support kept my energy and metabolism on track for the first time in years.\"",
    description: "Thyroid-aware support for metabolism and energy.",
    image: imgThyroid,
    link: "thyroid-metabolism",
    accent: { badge: "bg-sky-50", icon: "text-sky-700" },
  },
];

// ─── Shared wave clip-path for the photo edge ────────────────────────────────

function WaveClipDef() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="program-wave-clip" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0 L0.72,0
               C0.9,0.12 0.62,0.22 0.82,0.35
               C0.95,0.44 0.68,0.52 0.85,0.62
               C0.98,0.7 0.7,0.82 0.78,0.92
               C0.82,0.96 0.75,1 0.72,1
               L0,1 Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function StarRating({ rating, reviewCount }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < fullStars || (i === fullStars && hasHalf);
          return (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                filled ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
              }`}
              strokeWidth={0}
            />
          );
        })}
      </div>
      <span className="text-sm font-semibold text-slate-900">{rating.toFixed(1)}</span>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProgramCard({ program }) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Icon = program.icon;
  return (
    <div className="flex h-[500px] sm:h-[300px] flex-col overflow-hidden rounded-[2rem] bg-teal-100 shadow-[0_20px_60px_-20px_rgba(15,42,39,0.18)] sm:flex-row">
      {/* Photo */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-[42%]">
        <img
          src={program.image}
          alt={program.eyebrow}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            clipPath: isMobile ? "none" : "url(#program-wave-clip)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center gap-4 px-6 py-7 sm:gap-5 sm:px-8 sm:py-8">
        <div className="flex items-center gap-2.5">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${program.accent.badge}`}
          >
            <Icon className={`h-4 w-4 ${program.accent.icon}`} strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold tracking-wide text-slate-900">
            {program.eyebrow}
          </span>
        </div>

        <StarRating rating={program.rating} reviewCount={program.reviewCount} />

        <p className="font-poppins max-w-md text-base italic leading-snug text-slate-800 sm:text-lg">
          {program.description}
        </p>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProgramRatings() {
  const [current, setCurrent] = useState(0);
  const total = PROGRAMS.length;

  const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="w-full overflow-hidden bg-white py-20 px-4 sm:px-8">
      <WaveClipDef />

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1.5 text-xs font-semibold text-teal-800">
          Programs
        </span>
        <h2
          className="mt-4 text-3xl text-slate-900 sm:text-4xl"
          style={{
            fontFamily: "'Fraunces', serif",
            fontOpticalSizing: "auto",
            fontWeight: 600,
          }}
        >
          Ratings, by program
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-500">
          Every plan is scored on its own outcomes, not a single blended
          number.
        </p>
      </div>

      {/* Grid: all cards visible on lg+, only the active card shown on mobile */}
      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {PROGRAMS.map((program, i) => (
          <div key={i} className={i === current ? "block" : "hidden lg:block"}>
            <ProgramCard program={program} />
          </div>
        ))}
      </div>

      {/* Mobile-only navigation */}
      <div className="mx-auto mt-8 flex max-w-4xl items-center justify-between gap-4 lg:hidden">
        <button
          onClick={goPrev}
          aria-label="Previous program"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition-all duration-150 hover:border-teal-300"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2">
          {PROGRAMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to program ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-slate-900" : "w-1.5 bg-slate-300"
              } h-1.5`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next program"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition-all duration-150 hover:border-teal-300"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}