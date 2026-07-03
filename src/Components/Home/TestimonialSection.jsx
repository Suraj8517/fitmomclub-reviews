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

const Card = ({ name, role, quote, className = "" }) => (
  <div
    className={`bg-gray-100 rounded-2xl p-6 flex flex-col gap-4 ${className}`}
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-sm font-semibold text-[#111213]">{name}</p>
        <p className="text-xs text-[#9CA3AF]">{role}</p>
      </div>
      <Stars />
    </div>
    <p className="text-sm leading-relaxed text-[#6B7280]">{quote}</p>
  </div>
);

const testimonials = {
  left: [
    {
      name: "Kavya Ramani",
      role: "Lost 13kg in 3 months.",
      quote:
        "I started my journey with fitmom club on August 2025... I have seen a fantastic results in my journey. And a guidance from my diet coach Rachana and fitness coach chandini are very helpful to reach my target in healthy way... My starting weight is 85.4kgs and present weight is 72.4kgs... Still I am continuing with them to get more fit.. Thankyou Fitmom club",
    },
    {
      name: "Suchithra S",
      role: "Lost 9.5kg",
      quote:
        "I reached out to FiTmomclub because I wanted a structured, supportive space to focus on my fitness and well-being. So far, my journey has been amazing. The workouts are motivating, the coaching is personalized, and the community keeps me accountable in the best way. I truly feel supported every step of the way. The changes I have noticed in myself have been both physical and emotional. I feel stronger, more energetic, and more confident, I was 100kgs today I am 91.5kgs."
    },
  ],
  right: [
    {
      name: "Naina Ghatge",
      role: "Lost 4kg in 2 months.",
      quote:
        "I can genuinely see and feel an amazing transformation in myself. My Diastasis Recti, which was 4 fingers earlier, has now been completely reduced. I have lost 4 kg in just 2 months, and my energy, stamina, and confidence have improved tremendously. One of the biggest changes for me is that my period pain has completely stopped, which has made a huge difference in my daily life. A heartfelt thank you to my dietitian Lavina Ma’am for such a simple, sustainable, and effective diet, and to my fit coach Dr. Bhanupriya Ma’am for the right workouts, guidance, and constant motivation.",
    },
    {
      name: "Nidhi Suhane",
      role: "Lost 4kg in 1 month.",
      quote:
        "Very happy with FitMom Club! I lost 4 kg in just one month with workouts and a proper diet plan, and I also saw significant improvement in my diastasis recti. The workouts are effective, easy to follow, and well-guided. Special thanks to Coach Mrs Ragala Amoolya and Dietitian Mrs Juveria Fatima for their constant support and guidance.",
    },
  ],
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
          Richi Sharma
        </p>
        <p className="text-white/70 text-sm">Lost 14 kg</p>
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