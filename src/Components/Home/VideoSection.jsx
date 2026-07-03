import React from "react";

// Swap these placeholders for your actual video files, e.g.:
// import cardVideo1 from "../../assets/gallery/card1.mp4";
const CARDS = [
  {
    span: "col-span-12 sm:col-span-3",
    title: "Abstract Data Display",
    author: "Rudi Wibowo",
    videoSrc: "", // e.g. cardVideo1
    poster: "",
    titlePosition: "bottom",
    buttonPosition: "bottom-right",
  },
  {
    span: "col-span-12 sm:col-span-6",
    title: "Minimalist Geometric Composition",
    author: "Ilham Fahmi",
    videoSrc: "", // e.g. cardVideo2
    poster: "",
    titlePosition: "top",
    buttonPosition: "top-right",
  },
  {
    span: "col-span-12 sm:col-span-3",
    title: "Abstract 3D Illustration",
    author: "Nina Lestari",
    videoSrc: "", // e.g. cardVideo3
    poster: "",
    titlePosition: "bottom",
    buttonPosition: "bottom-right",
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
      className={`${card.span} relative rounded-3xl overflow-hidden bg-slate-200 aspect-[4/5] sm:aspect-auto sm:h-[26rem]`}
    >
      {/* Media: video if provided, otherwise a placeholder gradient */}
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
        {card.buttonPosition.includes("top") && <ArrowButton />}
      </div>

      {/* Bottom-right button (when not already placed with title) */}
      {card.buttonPosition === "bottom-right" && (
        <div className="absolute bottom-6 right-5">
          <ArrowButton />
        </div>
      )}
    </div>
  );
}

export default function VideoSection() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
        

          {/* Top: headline + description */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h1 className="text-5xl sm:text-6xl leading-[1.05] font-semibold tracking-tight text-slate-900">
              Short stories 
              <br />
              from members
            </h1>

            <div className="lg:pt-2 pl-22">
              <p className="text-slate-500 text-base leading-relaxed max-w-lg ">
                Real experiences from FitMom Club members, sharing their challenges, small wins, and transformations to inspire and support others on their fitness journey.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 transition-colors text-white text-sm font-medium px-6 py-3.5 rounded-full"
              >
                Try it For Free
              </a>
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