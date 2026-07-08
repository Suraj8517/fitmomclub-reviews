import React from "react";

import img from '../../assets/home/cta/mockupcta.png'
export default function CTASection({
  eyebrow= "Share your story and inspire others",
  imageSrc= img,
  imageAlt= "Person holding the FitMom Club app",

  left= {
    heading: "Have you been a FitMom Club member?",
    ctaLabel: "Write a Google Review",
    onClick: () => {window.open(
                "https://www.google.com/search?sca_esv=3926efc4ae7c8dc3&sxsrf=APpeQnv6lxE3Nuc5w-6f--gcR87hlbqh3Q:1783326023099&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_xiUktYNqhFFAEToXbnQTEpkbwZ8eHTUSzXMOydKjhVpQfhyJlY6XuCsY_MOCABU_7nHrp0yYmU32UsPCMv47NQoHQcL&q=FitMom+Club+Reviews&sa=X&ved=2ahUKEwjokYCRz72VAxVKbmwGHYncEIAQ0bkNegQILhAF&biw=1280&bih=551&dpr=1.5#lrd=0x3ba8f7ae88f23111:0x590c0b3b8586d660,1,,,,",
                "_blank",
                "noopener,noreferrer"
              )},
    desc:"Your review helps other women decide. Takes less than two minutes."
  },

  right= {
    heading: "New to FitMom Club?",
    ctaLabel: "Start Your Journey",
    onClick: () => {window.open(
                "https://zfrmz.in/6NcB2F4HpHEkGk3vrkIj",
                "_blank",
                "noopener,noreferrer"
              )},
    desc: "Join our community of empowered women and start your fitness journey today."
  },
}) {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        {eyebrow && (
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-6 sm:mb-8">
            {eyebrow}
          </h2>
        )}

        {/* Card */}
        <div
          className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] min-h-[500px] sm:min-h-[520px] "
          style={{
            background:
              "linear-gradient(120deg, #e7e7ec 0%, #dcdce1 32%, #7fbcae 62%, #0f766e 100%)",
          }}
        >
          {/* Text + CTA layer */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 px-6 sm:px-10 md:px-12 pt-12 sm:pt-14 md:pt-16 ">
            {/* Left CTA block */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-xl sm:text-3xl font-semibold leading-snug text-neutral-900 max-w-xs font-[poppins]">
                {left.heading}
              </h3>
              <p className="mt-2 text-normal text-neutral-600 max-w-[20rem]">
                {left.desc}
              </p>
              <button
                type="button"
                onClick={left.onClick}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
              >
                {left.ctaLabel}
              </button>
            </div>

            {/* Right CTA block */}
            <div className="hidden sm:flex flex-col items-center md:items-end text-center md:text-right">
              <h3 className="text-xl sm:text-3xl font-semibold leading-snug text-white max-w-xs">
                {right.heading}
              </h3>
              <p className="mt-2 text-normal text-white/70 max-w-[20rem]">
                {right.desc}
              </p>
              <button
                type="button"
                onClick={right.onClick}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                {right.ctaLabel}
              </button>
            </div>
          </div>

          {/* Image layer — anchored to the bottom of the card */}
          <div className="absolute inset-x-0 bottom-0 z-0 flex justify-center pointer-events-none">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-auto w-[22rem] sm:w-[28rem] md:w-[32rem] lg:w-[36rem] xl:w-[40rem] max-w-[90%] object-contain object-bottom select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}