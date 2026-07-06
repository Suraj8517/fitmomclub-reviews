import React from "react";


const cardVideo1="https://res.cloudinary.com/q1vba78b/video/upload/v1783062275/04-04-2026_Transformation__1080X1920_yxwger.mp4"
const cardVideo2="https://res.cloudinary.com/q1vba78b/video/upload/v1783062271/AQMvXQbGWkouS2LYsfuxQyZ-q6QnIxzXL-bLMfIAU0w1e2aoamq3iXFnFxZ3BM71rpNWmG0VsagaoFZ2R5VAPwZ9MTR1_fnevNP97EE_skb5kx.mp4"
const cardVideo3="https://res.cloudinary.com/q1vba78b/video/upload/v1783062396/TR_4_vb92li.mp4"
const cardVideo4="https://res.cloudinary.com/q1vba78b/video/upload/v1783062401/TR_3_agpivc.mp4"

// Swap these placeholders for your actual video files, e.g.:
// import cardVideo1 from "../../assets/gallery/card1.mp4";
const CARDS = [
  {
    span: "col-span-6 sm:col-span-3",
    title: "FitMom Club Member's Journey",
    author: "FitMom Club Member",
    videoSrc: cardVideo1,
    poster: "",
    titlePosition: "bottom",
    buttonPosition: "bottom-right",
  },
  {
    span: "col-span-6 sm:col-span-3",
    title: "17.6 kg down in 6 months",
    author: "FitMom Club Member",
    videoSrc: cardVideo2,
    poster: "",
    titlePosition: "top",
    buttonPosition: "top-right",
  },
  {
    span: "col-span-6 sm:col-span-3",
    title: "Lost 5kg in 3 months",
    author: "FitMom Club Member",
    videoSrc: cardVideo3,
    poster: "",
    titlePosition: "bottom",
    buttonPosition: "bottom-right",
  },
  {
    span: "col-span-6 sm:col-span-3",
    title: "Lost 10kg ",
    author: "FitMom Club Member",
    videoSrc: cardVideo4,
    poster: "",
    titlePosition: "top",
    buttonPosition: "top-right",
  },
];

const FILTERS_LEFT = ["Abstract", "3D", "Realism", "Human", "Environment"];
const FILTERS_RIGHT = ["Asset License", "Prompt Guide"];

function ArrowButton() {
  return (
    <button
      type="button"
      className="w-10 h-10 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
      aria-label="View project"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

function MediaCard({ card }) {
  const overlayPosition =
    card.titlePosition === "top"
      ? "top-6 items-start"
      : "bottom-6 items-end";

  return (
    <div
      className={`${card.span} relative rounded-3xl overflow-hidden bg-slate-200 aspect-[9/16]`}
    >
      {card.videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={card.videoSrc}
          poster={card.poster || undefined}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-slate-500 text-sm">
          Add video
        </div>
      )}

      {/* Gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

      {/* Title row */}
      <div
        className={`absolute inset-x-5 flex justify-between gap-3 ${overlayPosition}`}
      >
        <div>
          <p className="text-white font-medium leading-snug">{card.title}</p>
          <p className="text-white/70 text-sm mt-0.5">{card.author}</p>
        </div>
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section className="w-full bg-white pt-26 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
        

          {/* Top: headline + description */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-3">
            <h1 className="text-center sm:text-left text-5xl sm:text-6xl leading-[1.05] font-normal tracking-tight text-slate-900 font-serif">
              Short stories 
              <br />
              <span className="text-teal-700">from members</span>
            </h1>

            <div className="lg:pt-4 sm:pl-22">
              <p className="text-slate-500 text-base leading-relaxed max-w-lg text-center sm:text-left">
                Real experiences from FitMom Club members, sharing their challenges, small wins, and transformations to inspire and support others on their fitness journey.
              </p>
              
            </div>
          </div>
        </div>

        {/* Filter pills 
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-2.5">
            {FILTERS_LEFT.map((f) => (
              <button
                key={f}
                type="button"
                className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-slate-400 transition-colors"
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {FILTERS_RIGHT.map((f) => (
              <button
                key={f}
                type="button"
                className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-slate-400 transition-colors"
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Media gallery */}
        <div className="mt-8 grid grid-cols-12 gap-5">
          {CARDS.map((card, i) => (
            <MediaCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}