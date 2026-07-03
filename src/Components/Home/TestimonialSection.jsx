import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const RAW_TESTIMONIALS = [
  {
    quote:
      "I started my journey with FitMom Club in August 2025 and have seen fantastic results. Guidance from my diet coach Rachana and fitness coach Chandini was very helpful in reaching my target the healthy way. Still continuing with them to get even fitter!",
    author: "Kavya Ramani, Lost 13kg",
  },
  {
    quote:
      "I reached out to FitMom Club because I wanted a structured, supportive space to focus on my fitness and well-being. The workouts are motivating, the coaching is personalized, and the community keeps me accountable in the best way.",
    author: "Suchithra S, Lost 9.5kg",
  },
  {
    quote:
      "I can genuinely see and feel an amazing transformation in myself. My Diastasis Recti, which was 4 fingers earlier, has now been completely reduced, and my energy, stamina, and confidence have improved tremendously.",
    author: "Naina Ghatge, Lost 4kg",
  },
  {
    quote:
      "Very happy with FitMom Club! I lost 4kg in just one month with workouts and a proper diet plan, and I also saw significant improvement in my diastasis recti. The workouts are effective, easy to follow, and well-guided.",
    author: "Nidhi Suhane, Lost 4kg",
  },
  {
    quote:
      "Postpartum, I had no idea where to start. My coaches built a plan around my recovery, not against it. Six months in, my diastasis recti has closed up and I finally feel like myself again.",
    author: "Meera Iyer, Lost 6kg",
  },
  {
    quote:
      "What I love most is that nobody made me feel guilty for slow weeks. The check-ins, the diet tweaks, the form corrections on every workout, it all added up. I am stronger now than I was before I had my baby.",
    author: "Ananya Deshpande, Lost 7.5kg",
  },
  {
    quote:
      "Between night feeds and a toddler, I didn't think consistency was possible. FitMom Club made it simple. Clear weekly plans, a coach who actually replies, and results I can see in the mirror.",
    author: "Priya Nair, Lost 5kg",
  },
];

const TESTIMONIALS = RAW_TESTIMONIALS.map(({ quote, author }) => {
  const [name, result] = author.split(",").map((s) => s.trim());
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return { quote, name, result, initials };
});

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setItemsPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return itemsPerView;
}

export default function TestimonialCarousel() {
  const itemsPerView = useItemsPerView();
  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);
  const [index, setIndex] = useState(0);
  const dragState = useRef({ startX: 0, dragging: false, moved: 0 });
  const trackRef = useRef(null);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (i) => setIndex(Math.min(Math.max(i, 0), maxIndex)),
    [maxIndex]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const onPointerDown = (e) => {
    dragState.current.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    dragState.current.dragging = true;
    dragState.current.moved = 0;
  };

  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    dragState.current.moved = x - dragState.current.startX;
  };

  const endDrag = () => {
    if (!dragState.current.dragging) return;
    const moved = dragState.current.moved;
    dragState.current.dragging = false;
    dragState.current.moved = 0;
    const threshold = 60;
    if (moved < -threshold) next();
    else if (moved > threshold) prev();
  };

  const cardWidth = 100 / itemsPerView;
  const trackOffset = index * cardWidth;

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-teal-800 uppercase">
            Transformation Stories
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-900">
            Real Moms, Real Results
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Every journey here started the same way ours did &mdash; with one
            small decision to begin.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="overflow-hidden select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={endDrag}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${trackOffset}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 px-3"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div className="relative h-full flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                    <Quote
                      className="absolute top-6 right-6 h-8 w-8 text-teal-50"
                      strokeWidth={0}
                      fill="currentColor"
                    />
                    <p className="relative font-serif text-[15px] leading-relaxed text-slate-700 flex-1">
                      {t.quote}
                    </p>
                    <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-900 text-sm font-semibold text-white shrink-0">
                        {t.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-slate-900 truncate">
                          {t.name}
                        </p>
                        <span className="inline-block mt-0.5 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-800">
                          {t.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots + nav buttons */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-teal-900" : "w-1.5 bg-slate-200"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-teal-900 shadow-sm hover:bg-teal-900 hover:text-white hover:border-teal-900 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={index === maxIndex}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-teal-900 shadow-sm hover:bg-teal-900 hover:text-white hover:border-teal-900 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}