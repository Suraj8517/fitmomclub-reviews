import React from "react";
import heroimg1 from "../../assets/hero/NEW.png";
import heroimg2 from "../../assets/hero/hero2.jpg";
import bgImage from "../../assets/hero/bg.webp";

// Avatar images (placeholder headshots — swap for real member photos)
const AVATARS = [
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=47",
];

const STATS = [
  { icon: "dot", value: "10,000+", label: "Members worldwide" },
  { icon: "star", value: "4.8", label: "Average rating" },
  { icon: "globe", value: "38+", label: "Countries reached" },
  { icon: "check", value: "96%", label: "Would recommend" },
];

function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
    </svg>
  );
}

function StatIcon({ type }) {
  const common = "w-5 h-5";
  switch (type) {
    case "dot":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={common}>
          <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-9.13a4 4 0 110 8 4 4 0 010-8zm6 9.13a4 4 0 010 7.74" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className={common}>
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      );
    case "globe":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={common}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.8 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.8-3.8-9s1.3-6.4 3.8-9z" />
        </svg>
      );
    case "check":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Hero() {
  return (
    <section
      className="relative w-full bg-white min-h-screen py-6  px-6 sm:px-10 lg:px-16"
    >

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center mt-2 z-100">
        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-2.5 mb-2 mt-6 pt-10 ">
            <span className="w-6 h-px bg-emerald-800" />
            <span className="text-sm font-semibold tracking-wide text-emerald-800 uppercase">
              Verified member outcomes!
            </span>
          </div>

          <h1 className="text-6xl 2xl:text-7xl leading-[1.03] font-medium tracking-tight text-slate-900">
            Real health.
            <br />
            Real women.
            <br />
            <span className="italic font-serif">Real results.</span>
          </h1>

          <p className="mt-7 text-slate-500 text-lg leading-relaxed max-w-md">
            10,000+ women across 38 countries have changed their health
            story with FitMom Club. Here is what actually happened for
            them.
          </p>

          <div className="mt-10 flex items-center gap-8 flex-wrap">
            <a
              href="#"
              className="bg-gradient-to-r from-teal-800 to-teal-600 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-emerald-700 transition-colors text-white text-base font-medium px-8 py-4 rounded-full"
            >
              Start your journey
            </a>

            <a
              href="#reviews"
              className="text-base font-medium text-slate-900 hover:text-emerald-800 transition-colors underline underline-offset-4 decoration-slate-300 hover:decoration-emerald-800"
            >
              Read the reviews
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-10 h-10 rounded-full ring-4 ring-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
                <span className="ml-1.5 text-base font-semibold text-slate-900">
                  4.7
                </span>
              </div>
              <p className="text-sm text-slate-500">
                from 500+{" "}
                <span className="underline underline-offset-2">
                  reviews
                </span>
              </p>
            </div>
          </div>

        </div>
{/* Right: cropped/zoomed image, showing head to hips */}
<div className="flex justify-center lg:justify-end">
  <div className="w-full max-w-3xl h-screen relative">
    <img
      src={heroimg1}
      alt="FitMom Club member"
      className="w-full h-full object-cover"
    />
    <div className="z-10 pointer-events-none absolute inset-x-0 bottom-0 h-40 lg:h-76 bg-gradient-to-b from-transparent to-white" />
  </div>
</div>
        {/* Right: asymmetric image grid 
        <div className="grid grid-cols-12 gap-5 auto-rows-[17rem] lg:auto-rows-[18rem]">
          {/* Member workout / transformation photo — wide 
          <div className="col-span-7 row-span-1 rounded-[2rem] overflow-hidden bg-slate-200">
            <img
              src={heroimg1}
              alt="FitMom Club member training"
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* Goal achieved — narrow, now an image 
          <div className="col-span-5 row-span-1 rounded-[8rem] overflow-hidden bg-slate-200 relative">
            <img
              src="https://i.pravatar.cc/400?img=32"
              alt="FitMom Club member who achieved her 12-week program goal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Weight lost stat — narrow, now an image 
          <div className="col-span-4 row-span-1 rounded-[5rem] overflow-hidden bg-slate-200 border-4 border-emerald-800 relative">
            <img
              src="https://i.pravatar.cc/400?img=47"
              alt="Maria, FitMom Club member, -18 lbs result"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Coaching / community moment — wide 
          <div className="col-span-8 row-span-1 rounded-[2rem] overflow-hidden bg-slate-200 border-4 border-black/20 relative">
            <img
              src={heroimg2}
              alt="FitMom Club coaching session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        */}
      </div>

    </section>
  );
}