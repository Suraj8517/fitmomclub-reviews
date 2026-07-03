import React, { useRef, useState } from "react";
import { Star, Play, Pause } from "lucide-react";

const VIDEO_URL =
  "https://res.cloudinary.com/q1vba78b/video/upload/v1783072122/Legacy_Award_Client_testimonial_Video_1_1_hu2wxn.mp4";

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
    ))}
  </div>
);

const Avatar = ({ seed }) => (
  <img
    src={`https://i.pravatar.cc/64?img=${seed}`}
    alt=""
    className="h-10 w-10 rounded-full object-cover flex-shrink-0"
  />
);

const Card = ({ seed, name, role, quote, className = "" }) => (
  <div
    className={`bg-gray-100 rounded-2xl p-6 flex flex-col gap-4 ${className}`}
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <Avatar seed={seed} />
        <div>
          <p className="text-sm font-semibold text-[#111213]">{name}</p>
          <p className="text-xs text-[#9CA3AF]">{role}</p>
        </div>
      </div>
      <Stars />
    </div>
    <p className="text-sm leading-relaxed text-[#6B7280]">{quote}</p>
  </div>
);

const testimonials = {
  left: [
    {
      seed: 12,
      name: "Priya Nair",
      role: "Serial Entrepreneur, Singapore",
      quote:
        "Setting up our landing page used to eat a whole sprint. With this kit it took an afternoon — the components just snap together.",
    },
    {
      seed: 33,
      name: "Dawid Kowalski",
      role: "Fullstack Developer",
      quote:
        "The first impression is everything, and this library made ours look polished without hiring a designer. Genuinely hand-crafted, not generic.",
    },
  ],
  right: [
    {
      seed: 47,
      name: "Athar Rahman",
      role: "Founder, ScopeOwl",
      quote:
        "I only want to touch the engineering side. Having a solid set of components ready means I can validate an idea without getting stuck on layout.",
    },
    {
      seed: 21,
      name: "Priya Nair",
      role: "Software Developer, @Northwind",
      quote:
        "I've tried a lot of Tailwind kits — this is the most complete and the fastest to build with. The copy-paste workflow alone saves hours.",
    },
  ],
  belowVideo: {
    seed: 58,
    name: "Ravi Sethi",
    role: "Founder @Ovly",
    quote: "Feels like a real step up from the usual starter kits — and it actually looks this good out of the box 🚀",
  },
};

const VideoCard = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative bg-[#1A1B1E] rounded-2xl overflow-hidden aspect-[9/16] flex flex-col justify-end p-6">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        loop
        muted
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* dark gradient so the caption stays legible over the video */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

      <button
        aria-label={isPlaying ? "Pause testimonial video" : "Play testimonial video"}
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
      >
        {isPlaying ? (
          <Pause size={20} className="text-[#111213]" fill="currentColor" />
        ) : (
          <Play size={20} className="text-[#111213] ml-0.5" fill="currentColor" />
        )}
      </button>

      <div className="relative">
        <p className="text-white text-lg italic" style={{ fontFamily: "'Sora', sans-serif" }}>
          Marek Novak
        </p>
        <p className="text-white/70 text-sm">Developer and Software Engineer</p>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  return (
    <section className=" py-16 sm:py-20 px-4 sm:px-6 ">
      <div className="mx-auto max-w-6xl">
        {/* Badge */}
        <span
          className="inline-block text-xs font-medium text-[#4B5563] bg-white border border-[#E5E7EB] rounded-full px-3 py-1 mb-5"
        >
          Testimonial
        </span>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-[2.75rem] leading-tight text-[#111213] mb-12 max-w-xl"
          style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700 }}
        >
          Our Wall of Love — Words from Happy Clients
        </h2>

        {/* Grid */}
        <div
          className="grid gap-6 md:grid-cols-3"
        >
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {testimonials.left.map((t, i) => (
              <Card key={i} {...t} className="flex-1" />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <VideoCard />
            
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {testimonials.right.map((t, i) => (
              <Card key={i} {...t} className="flex-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}