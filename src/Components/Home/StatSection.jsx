import React from "react";
import { Users, Star, Globe2, CircleCheck } from "lucide-react";


const stats = [
  { Icon: Users, value: "1,00,000+", label: "Members worldwide" },
  { Icon: Star, value: "4.7", label: "Average rating" },
  { Icon: Globe2, value: "70+", label: "Countries reached" },
  { Icon: CircleCheck, value: "98%", label: "Success Rate" },
];

export default function StatsSection() {
  return (
    <section className=" py-14 sm:pt-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12 justify-center">
          <span className="h-px w-6 sm:w-8 bg-[#0E7C74]" />
          <span
            className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#4B7B76] text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Trusted by a growing community
          </span>
          <span className="h-px w-6 sm:w-8 bg-[#0E7C74]" />
        </div>

        <div className="relative">

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-y-14">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-2 sm:px-4">
                {/* icon */}
                <stat.Icon
                  className="text-[#0E7C74] mb-2 sm:mb-3"
                  size={18}
                  strokeWidth={1.75}
                />

               
                <span
                  className="text-[#0B3B36] leading-none"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontOpticalSizing: "auto",
                    fontWeight: 600,
                    fontSize: "clamp(1.5rem, 5vw, 2.75rem)",
                  }}
                >
                  {stat.value}
                </span>

                {/* label */}
                <span
                  className="mt-2 text-xs sm:text-sm text-[#4B7B76]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}