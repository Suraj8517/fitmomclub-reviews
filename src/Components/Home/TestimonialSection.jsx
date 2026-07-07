import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  PenLine,
} from "lucide-react";

const RAW_TESTIMONIALS = [
  
  {
    quote:
      "FitMom Club helped me lose weight while gaining strength, stamina, and healthier habits. The personalized guidance from my coaches made fitness simple, sustainable, and truly life-changing.",
    author: "Preeti Nagraj, Lost 4kg",
    title: "A Lifestyle That Lasts",
    location: "Mumbai",
    plan: "PRO plan",
    duration: "10 months",
    tags: ["Strength training"],
  },
  {
    quote:
      "I started my journey with FitMom Club in August 2025 and have seen fantastic results. Guidance from my diet coach Rachana and fitness coach Chandini was very helpful in reaching my target the healthy way. I'm still continuing with them to become even fitter!",
    author: "Kavya Ramani, Lost 13kg",
    title: "Healthy Progress, Every Month",
    location: "Mumbai",
    plan: "PRO plan",
    duration: "10 months",
    tags: ["Weight loss"],
  },
  {
    quote:
      "I reached out to FitMom Club because I wanted a structured, supportive space to focus on my fitness and well-being. The workouts are motivating, the coaching is personalized, and the community keeps me accountable every step of the way.",
    author: "Suchithra S, Lost 9.5kg",
    title: "The Support I Was Looking For",
    location: "Chennai",
    plan: "Elite plan",
    duration: "8 months",
    tags: ["Personalized coaching"],
  },
  {
    quote:
      "I can genuinely see and feel an amazing transformation. My diastasis recti has completely healed, and my energy, stamina, and confidence have improved tremendously.",
    author: "Naina Ghatge, Lost 4kg",
    title: "A Stronger Postpartum Recovery",
    location: "Pune",
    plan: "PRO plan",
    duration: "6 months",
    tags: ["Diastasis recti", "Postpartum recovery"],
  },
  {
    quote:
      "Joining FitMom Club 3 months postpartum was life-changing. I lost over 10 kg, regained my strength and energy, and felt healthier than ever while safely continuing my breastfeeding journey.",
    author: "Saketha Lingampalli, Lost 10kg",
    title: "My Best Postpartum Decision",
    location: "Pune",
    plan: "PRO plan",
    duration: "6 months",
    tags: ["Postpartum recovery", "Weight loss"],
  },
  {
    quote:
      "Working out with FitMom Club has completely transformed my fitness routine. The workouts are engaging, the coaching is exceptional, and within just a few weeks I noticed a significant boost in my strength and energy.",
    author: "Junaid Ansari, Lost 13kg",
    title: "Stronger, Fitter & More Energetic",
    location: "Mumbai",
    plan: "PRO plan",
    duration: "10 months",
    tags: ["Weight loss"],
  },
  {
    quote:
      "Very happy with FitMom Club! I lost 4 kg in just one month and saw significant improvement in my diastasis recti. The workouts were effective, easy to follow, and well guided.",
    author: "Nidhi Suhane, Lost 4kg",
    title: "4 kg Down in Just One Month",
    location: "Bengaluru",
    plan: "Starter plan",
    duration: "1 month",
    tags: ["Weight loss", "Diastasis recti"],
  },
   {
    quote:
      "In just 6 months, I closed my diastasis recti gap, lost almost 5 kg, and became stronger and more energetic. FitMom Club made my postpartum recovery safe, sustainable, and enjoyable.",
    author: "Nidhi Suhane, Lost 5kg",
    title: "From Postpartum Struggles to Strength",
    location: "Bengaluru",
    plan: "Starter plan",
    duration: "1 month",
    tags: ["Weight loss", "Diastasis recti", "Postpartum recovery"],
  },
  {
    quote:
      "FitMom Club helped me lose 3.5 kg postpartum while safely maintaining my milk supply. With personalized coaching, I'm steadily closing my diastasis recti gap and building healthier habits for myself and my family.",
    author: "Monisha Monikantarajan, Lost 3.5kg",
    title: "Healing My DR Gap & Losing Weight Postpartum",
    location: "Bengaluru",
    plan: "Starter plan",
    duration: "1 month",
    tags: ["Weight loss", "Diastasis recti", "Postpartum recovery"],
  },
  {
    quote:
      "I lost 6 kg in just 4 months while reversing my borderline PCOS and improving my overall health. The guidance from my coaches made the journey practical, sustainable, and life-changing.",
    author: "Darshana Sethuraman, Lost 6kg",
    title: "Reversed PCOS, Reclaimed My Health",
    location: "Hyderabad",
    plan: "PRO plan",
    duration: "4 months",
    tags: ["PCOS", "Weight loss", "Personalized coaching"],
  },
  {
    quote:
      "Nobody made me feel guilty for slow weeks. The regular check-ins, nutrition guidance, and workout support helped me become stronger than I was before having my baby.",
    author: "Ananya Deshpande, Lost 7.5kg",
    title: "Stronger Than Ever Before",
    location: "Delhi NCR",
    plan: "Elite plan",
    duration: "7 months",
    tags: ["Strength training"],
  },
  {
    quote:
      "In just six months, I lost 9 kg, improved my HbA1c from 6.0 to 5.6, and came off medication. Thanks to my coaches, I've built healthier habits and transformed my lifestyle.",
    author: "Anju R, Lost 9kg",
    title: "9 kg Down & Off Medication",
    location: "Delhi NCR",
    plan: "Elite plan",
    duration: "7 months",
    tags: ["Strength training", "Personalized coaching"],
  },
  {
    quote:
      "Joining FitMom Club 3 months postpartum was life-changing. I lost over 10 kg, regained my confidence, and felt stronger, healthier, and more energetic every day.",
    author: "Roshini Ravunny, Lost 10kg",
    title: "Confidence After Motherhood",
    location: "Delhi NCR",
    plan: "Elite plan",
    duration: "7 months",
    tags: ["Postpartum recovery", "Personalized coaching"],
  },
   {
    quote:
      "FitMom Club helped me lose 7 kg postpartum while building healthier habits that fit my lifestyle. With expert coaching, balanced nutrition, and beginner-friendly workouts, I feel stronger, more confident, and healthier than ever.",
    author: "Disha Gandhi, Lost 7kg",
    title: "A Lifestyle Change That Lasts",
    location: "Delhi NCR",
    plan: "Elite plan",
    duration: "7 months",
    tags: ["Postpartum recovery", "Personalized coaching"],
  },
  {
    quote:
      "In just 3 months, I lost nearly 7 kg with constant motivation, personalized guidance, and enjoyable workouts. The journey felt simple, sustainable, and rewarding.",
    author: "Amuru Kishore, Lost 7kg",
    title: "Small Steps, Big Results",
    location: "Dubai (NRI)",
    plan: "Elite plan",
    duration: "3 months",
    tags: ["Weight loss", "Personalized coaching"],
  },
];

const TESTIMONIALS = RAW_TESTIMONIALS.map(
  ({ quote, author, title, location, plan, duration, tags }) => {
    const [name, result] = author.split(",").map((s) => s.trim());
    const initials = name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    return {
      quote,
      name,
      result,
      initials,
      title,
      location,
      plan,
      duration,
      tags,
      rating: 5,
    };
  }
);

const ALL_TAGS = [
  "All",
  ...Array.from(new Set(TESTIMONIALS.flatMap((t) => t.tags))),
];

const STATS = [
  { value: "3.3", label: "iOS App Store" },
  { value: "4.7", label: "Google Playstore" },
  { value: "4.7", label: "Google" },
];

const RATING_BREAKDOWN = [
  { stars: 5, percent: 82 },
  { stars: 4, percent: 11 },
  { stars: 3, percent: 4 },
  { stars: 2, percent: 2 },
  { stars: 1, percent: 1 },
];

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
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? TESTIMONIALS
        : TESTIMONIALS.filter((t) => t.tags.includes(activeTag)),
    [activeTag]
  );

  const maxIndex = Math.max(0, filtered.length - itemsPerView);
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const isProgrammaticScroll = useRef(false);
  const scrollEndTimeout = useRef(null);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Reset to the start whenever the filter changes.
  useEffect(() => {
    cardRefs.current = [];
    setIndex(0);
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
  }, [activeTag]);

  const scrollToIndex = useCallback(
    (i) => {
      const clamped = Math.min(Math.max(i, 0), maxIndex);
      const el = cardRefs.current[clamped];
      const container = scrollerRef.current;
      if (el && container) {
        isProgrammaticScroll.current = true;
        container.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
        setIndex(clamped);
        window.clearTimeout(scrollEndTimeout.current);
        scrollEndTimeout.current = window.setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 500);
      }
    },
    [maxIndex]
  );

  const next = useCallback(() => scrollToIndex(index + 1), [scrollToIndex, index]);
  const prev = useCallback(() => scrollToIndex(index - 1), [scrollToIndex, index]);

  // Keep the active dot in sync when the user scrolls/swipes naturally.
  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const container = scrollerRef.current;
    if (!container) return;

    let closest = 0;
    let closestDist = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const dist = Math.abs(el.offsetLeft - container.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setIndex(Math.min(closest, maxIndex));
  }, [maxIndex]);

  return (
    <section className="w-full bg-white py-6 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="mb-6 px-6 py-12 sm:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1.5 text-xs font-semibold text-teal-800">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified Member Reviews
          </span>

          <h2 className="mt-5 font-poppins text-3xl sm:text-4xl text-slate-900">
            Real results from real women
          </h2>

          <p className="mt-4 text-slate-500 max-w-xl mx-auto leading-relaxed">
            Over 1,00,000 women across India and worldwide have transformed
            their health with FitMom Club. Read what they have to say.
          </p>

          <div className="mt-9 flex flex-wrap items-start justify-center gap-x-10 gap-y-6 sm:gap-x-14 ">
            {STATS.map((s) => (
              <div key={s.label}>
                <p
                  className="font-poppins text-2xl sm:text-3xl text-slate-900"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontOpticalSizing: "auto",
                    fontWeight: 600,
                    fontSize: "clamp(1.5rem, 5vw, 2.75rem)",
                  }}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              window.open(
                "https://www.google.com/search?sca_esv=3926efc4ae7c8dc3&sxsrf=APpeQnv6lxE3Nuc5w-6f--gcR87hlbqh3Q:1783326023099&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_xiUktYNqhFFAEToXbnQTEpkbwZ8eHTUSzXMOydKjhVpQfhyJlY6XuCsY_MOCABU_7nHrp0yYmU32UsPCMv47NQoHQcL&q=FitMom+Club+Reviews&sa=X&ved=2ahUKEwjokYCRz72VAxVKbmwGHYncEIAQ0bkNegQILhAF&biw=1280&bih=551&dpr=1.5#lrd=0x3ba8f7ae88f23111:0x590c0b3b8586d660,1,,,,",
                "_blank",
                "noopener,noreferrer"
              )
            }
            type="button"
            className="mt-9 inline-flex items-center gap-2 mr-4 rounded-full border border-teal-200 bg-white px-5 py-2.5 text-sm font-medium text-teal-800 shadow-sm hover:bg-teal-900 hover:text-white hover:border-teal-900 transition-colors"
          >
            <PenLine className="h-4 w-4" />
            Share your story
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/search?sca_esv=3926efc4ae7c8dc3&sxsrf=APpeQnv6lxE3Nuc5w-6f--gcR87hlbqh3Q:1783326023099&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_xiUktYNqhFFAEToXbnQTEpkbwZ8eHTUSzXMOydKjhVpQfhyJlY6XuCsY_MOCABU_7nHrp0yYmU32UsPCMv47NQoHQcL&q=FitMom+Club+Reviews&sa=X&ved=2ahUKEwjokYCRz72VAxVKbmwGHYncEIAQ0bkNegQILhAF&biw=1280&bih=551&dpr=1.5#lrd=0x3ba8f7ae88f23111:0x590c0b3b8586d660,1,,,,",
                "_blank",
                "noopener,noreferrer"
              )
            }
            type="button"
            className="mt-9 inline-flex items-center gap-2 mr-4 rounded-full border border-teal-200 bg-white px-5 py-2.5 text-sm font-medium text-teal-800 shadow-sm hover:bg-teal-900 hover:text-white hover:border-teal-900 transition-colors"
          >
            <BookOpenCheck className="h-4 w-4" />
            Read the reviews
          </button>
        </div>

        {/* Rating summary */}
        <div className="mb-12 mx-auto grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 sm:gap-12 rounded-3xl border border-slate-100 bg-white px-6 py-8 sm:px-10 sm:max-w-3xl">
          <div className="flex sm:flex-col  items-center sm:items-start gap-4 sm:gap-2 sm:border-r sm:border-slate-100 sm:pr-12">
            <p
              className="font-poppins text-5xl text-slate-900"
              style={{
                fontFamily: "'Fraunces', serif",
                fontOpticalSizing: "auto",
                fontWeight: 600,
                fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              }}
            >
              4.7
            </p>
            <div>
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-1 text-sm text-slate-500 whitespace-nowrap">
                Based on 2,400+ reviews
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-2.5">
            {RATING_BREAKDOWN.map((r) => (
              <div key={r.stars} className="flex items-center gap-3">
                <span className="w-8 shrink-0 text-sm text-slate-500">
                  {r.stars}&nbsp;&#9733;
                </span>
                <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${r.percent}%` }}
                  />
                </div>
                <span className="w-9 shrink-0 text-right text-sm text-slate-500">
                  {r.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tag filter */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeTag === tag
                  ? "bg-teal-900 border-teal-900 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <style>{`
            .fmc-scroller {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .fmc-scroller::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-slate-500">
              No reviews match this filter yet.
            </p>
          ) : (
            <>
              {/* Left fade */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-0 -left-6 z-10 w-6 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent transition-opacity duration-300 ${
                  index === 0 ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Right fade */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-0 -right-6 z-10 w-6 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent transition-opacity duration-300 ${
                  index === maxIndex ? "opacity-0" : "opacity-100"
                }`}
              />

              <div
                ref={scrollerRef}
                onScroll={handleScroll}
                className="fmc-scroller flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-3 px-3"
              >
                {filtered.map((t, i) => (
                  <div
                    key={t.name + i}
                    ref={(el) => (cardRefs.current[i] = el)}
                    className="shrink-0 snap-start px-3 w-full md:w-1/3"
                  >
                    <div className="relative h-full flex flex-col rounded-2xl border border-slate-100 bg-teal-50 p-6 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-900 text-sm font-semibold text-white">
                            {t.initials}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-slate-900 truncate">
                              {t.name}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <div className="flex gap-0.5 text-amber-400">
                            {Array.from({ length: t.rating }).map((_, si) => (
                              <Star
                                key={si}
                                className="h-3 w-3"
                                fill="currentColor"
                                strokeWidth={0}
                              />
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                            <ShieldCheck className="h-3 w-3" />
                            Verified
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-4 text-lg text-slate-900 font-poppins">
                        {t.title}
                      </h3>

                      <p className="mt-2 text-[15px] leading-relaxed text-slate-600 flex-1">
                        {t.quote}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {t.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl bg-teal-100 px-4 py-2.5 text-sm font-medium text-teal-900">
                        {t.result}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Dots + nav buttons */}
        {filtered.length > 0 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-teal-900 shadow-sm hover:bg-teal-900 hover:text-white hover:border-teal-900 transition-colors disabled:opacity-30 disabled:bg-slate-50 disabled:text-slate-300 disabled:hover:bg-slate-50 disabled:hover:text-slate-300 disabled:hover:border-slate-200 disabled:pointer-events-none disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={index === maxIndex}
                aria-label="Next testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-teal-900 shadow-sm hover:bg-teal-900 hover:text-white hover:border-teal-900 transition-colors disabled:opacity-30 disabled:bg-slate-50 disabled:text-slate-300 disabled:hover:bg-slate-50 disabled:hover:text-slate-300 disabled:hover:border-slate-200 disabled:pointer-events-none disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}