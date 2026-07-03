import { useState, useEffect, useRef } from "react";
import img1 from "../../assets/home/transformation/1.png"
import img2 from "../../assets/home/transformation/2.png"
import img3 from "../../assets/home/transformation/3.png"
import img4 from "../../assets/home/transformation/4.png"
import img5 from "../../assets/home/transformation/5.png"
import img6 from "../../assets/home/transformation/6.png"
import img7 from "../../assets/home/transformation/7.png"
import img8 from "../../assets/home/transformation/8.png"
import img9 from "../../assets/home/transformation/9.png"
import img10 from "../../assets/home/transformation/10.png"
import img11 from "../../assets/home/transformation/11.png"
import img12 from "../../assets/home/transformation/12.png"
import img13 from "../../assets/home/transformation/13.png"
import img14 from "../../assets/home/transformation/14.png"
import img15 from "../../assets/home/transformation/15.png"
import img16 from "../../assets/home/transformation/16.png"
import img17 from "../../assets/home/transformation/17.png"

const allImages = [
  { name: "client1",   before: 0, after: 0, loss: 0, duration: "3 months", image: img1 },
  { name: "client2",  before: 0, after: 0, loss: 0,  duration: "2 months", image: img2 },
  { name: "client3",   before: 80, after: 65, loss: 15, duration: "4 months", image: img3 },
  { name: "client4",   before: 85, after: 72, loss: 18, duration: "5 months", image: img4 },
  { name: "client5", before: 0, after: 0, loss: 11, duration: "3 months", image: img5 },
  { name: "client6",   before: 92, after: 74, loss: 9,  duration: "2 months", image: img6 },
  { name: "client7",   before: 75, after: 70, loss: 14, duration: "4 months", image: img7 },
  { name: "client8",  before: 0, after: 0, loss: 0, duration: "3 months", image: img8 },
  { name: "client9",   before: 0, after: 0, loss: 0,  duration: "2 months", image: img9 },
  { name: "client10",   before: 93, after: 61, loss: 20, duration: "6 months", image: img10 },
  { name: "client11",    before: 94, after: 87, loss: 8,  duration: "2 months", image: img11 },
  { name: "client12",   before: 66, after: 56, loss: 13, duration: "3 months", image: img12 },
  { name: "client13",    before: 62, after: 53, loss: 16, duration: "5 months", image: img13 },
  { name: "client14",    before: 82, after: 75, loss: 6,  duration: "6 weeks",  image: img14 },
  { name: "client15",    before: 96, after: 78, loss: 17, duration: "5 months", image: img15 },
  { name: "client16",    before: 0, after: 0, loss: 17, duration: "5 months", image: img16 },
  { name: "client17",    before: 83, after: 73, loss: 17, duration: "5 months", image: img17 },

];

const CARDS = 6;
const INTERVAL = 2500;

export default function TransformationSection() {
  const [slots, setSlots] = useState(() =>
    Array.from({ length: CARDS }, (_, i) => i)
  );
  const [fadingCard, setFadingCard] = useState(null);
  const nextIndexRef = useRef(CARDS);

  useEffect(() => {
    const interval = setInterval(() => {
      const cardToSwap = Math.floor(Math.random() * CARDS);
      const incoming = nextIndexRef.current % allImages.length;

      setFadingCard(cardToSwap);

      setTimeout(() => {
        setSlots((prev) => {
          const updated = [...prev];
          updated[cardToSwap] = incoming;
          return updated;
        });
        nextIndexRef.current = (nextIndexRef.current + 1) % allImages.length;
        setFadingCard(null);
      }, 400);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []); // runs once, never restarts

  return (
    <section>
    <div
      className="px-5 md:py-26 py-4 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-32"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">
          Real results, real moms
        </p>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug text-neutral-900">
          Their transformation,{" "}
          <span className="text-[#00d1b8]">your inspiration</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {slots.map((imgIndex, cardIndex) => {
          const item = allImages[imgIndex];
          const isFading = fadingCard === cardIndex;
          return (
            <div key={cardIndex} className="relative rounded-2xl overflow-hidden group aspect-[4/3]">
              <img
                src={item.image}
                alt={`${item.name} transformation`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                style={{
                  opacity: isFading ? 0 : 1,
                  transition: "opacity 0.4s ease, transform 0.5s ease",
                }}
              />

              {/* Bottom gradient overlay */}
              <div
                className="absolute bottom-0 inset-x-0 pt-10 pb-3 px-3"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                  opacity: isFading ? 0 : 1,
                  transition: "opacity 0.4s ease",
                }}
              >
                <div className="flex items-end justify-between">
                  <div className="text-left">
                    <p className="text-white/60 text-[9px] uppercase tracking-wider leading-none mb-0.5">Before</p>
                    <p className={`text-white text-sm font-semibold leading-none ${item.before === 0 ? "hidden" : "visible" }`}>{item.before} kg</p>
                  </div>

                  <div className="text-center">
                    <p className={`text-[#00d1b8] text-base md:text-lg font-bold leading-none ${item.before === 0 ? "hidden" : "visible" }`}>−{item.before - item.after} kg</p>
                  </div>

                  <div className="text-right">
                    <p className="text-white/60 text-[9px] uppercase tracking-wider leading-none mb-0.5">After</p>
                    <p className={`text-white text-sm font-semibold leading-none ${item.before === 0 ? "hidden" : "visible" }`}>{item.after} kg</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
    <div
  className="w-full h-44"
  style={{
    background: `
      linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(255,255,255,0.98) 10%,
        rgba(245,245,245,0.96) 22%,
        rgba(225,225,225,0.92) 36%,
        rgba(190,190,190,0.82) 50%,
        rgba(130,130,130,0.68) 65%,
        rgba(70,70,70,0.85) 80%,
        rgba(25,25,25,0.96) 92%,
        #0d0d0d 100%
      )
    `,
  }}
/>
    </section>
  );
}