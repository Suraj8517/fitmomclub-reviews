import React from "react";
import heroimg1 from "../../assets/hero/NEW.png";
import heroimg2 from "../../assets/hero/hero2.jpg";
import bgImage from "../../assets/hero/bg.webp";


const AVATARS = [
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=47",
];



function Star() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
    </svg>
  );
}




export default function Hero() {
  return (
    <section
      className="relative w-full bg-white lg:min-h-screen py-10 lg:py-6 px-6 sm:px-10 lg:px-16 font-[poppins] flex items-center"
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 xl:gap-20 items-center lg:mt-2 z-100">
        <div className="order-first lg:order-last flex justify-center lg:justify-end">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-3xl relative">
            <div 
              aria-hidden="true"
              className="relative pointer-events-none select-none sm:absolute inset-0 z-0 flex items-center justify-center overflow-visible"
            >
              <span
                className=" absolute sm:static top-2 -sm:left-5 whitespace-nowrap normal-case text-teal-900/10 text-[5rem] sm:text-[4.5rem] lg:text-[7.5rem] xl:text-[9rem] leading-none -rotate-25
      origin-center"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Fitmom Club
              </span>
            </div>
           
            <div className="relative z-10 aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[calc(100vh-3rem)] rounded-[2rem] lg:rounded-none overflow-hidden">
              <img
                src={heroimg1}
                alt="FitMom Club member"
                className="absolute left-3 w-full h-full object-cover object-center "
              />
            </div>
            <div className="z-10 pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-28 lg:h-40 lg:rounded-none rounded-b-[2rem] bg-gradient-to-b from-transparent to-white" />
          </div>
        </div>

        {/* Copy */}
        <div className="order-last lg:order-first text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-2 mt-2 lg:mt-6 lg:pt-10">
            <span className="w-6 h-px bg-emerald-800" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-emerald-800 uppercase">
              Verified member outcomes!
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl leading-[1.08] lg:leading-[1.03] font-semibold tracking-tight text-slate-900">
            Real health.
            <br />
            Real women.
            <br />
            <span className="italic font-serif">Real results.</span>
          </h1>

          <p className="mt-5 lg:mt-7 text-slate-500 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            10,000+ women across 38 countries have changed their health
            story with FitMom Club. Here is what actually happened for
            them.
          </p>

          <div className="mt-8 lg:mt-10 flex items-center justify-center lg:justify-start gap-4 sm:gap-8 flex-wrap">
            <a
              href="#"
              className="bg-gradient-to-r from-teal-800 to-teal-600 hover:bg-gradient-to-r hover:from-emerald-900 hover:to-emerald-700 transition-colors text-white text-sm sm:text-base font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full"
            >
              Start your journey
            </a>

            <a
              href="#reviews"
              className="text-sm sm:text-base font-medium text-slate-900 hover:text-emerald-800 transition-colors underline underline-offset-4 decoration-slate-300 hover:decoration-emerald-800"
            >
              Read the reviews
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-4 ring-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
                <span className="ml-1.5 text-sm sm:text-base font-semibold text-slate-900">
                  4.7
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                from 500+{" "}
                <span className="underline underline-offset-2">
                  reviews
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}