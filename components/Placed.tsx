"use client";

import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export function SimpleInfiniteCarousel() {
  const images = [
    "/students/2.png",
    "/students/3.png",
    "/students/4.png",
    "/students/5.png",
    "/students/6.png",
    "/students/7.png",
    "/students/8.png",
    "/students/9.png",
    "/students/10.png",
    "/students/11.png",
    "/students/12.png",
  ];

  return (
    <section className="bg-[#FBF8E4] text-black py-24 overflow-hidden">
      {/* HEADER */}
      <div className="px-[5%] mb-16">
        <p className="text-xs tracking-[4px] text-[#C9A227] uppercase mb-4">
          05 / Our People
        </p>

        <h2
          className={`${bebas.className} uppercase text-[#111]`}
          style={{
            fontSize: "76px",
            lineHeight: "72px",
            letterSpacing: "0.5px",
          }}
        >
          PLACED &<br />
          THRIVING.
        </h2>
      </div>

      {/* INFINITE SCROLL CAROUSEL */}
      <div className="relative overflow-hidden">
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }

          .carousel-track {
            display: flex;
            gap: 20px;
            animation: scroll-left 20s linear infinite; /* faster */
            padding: 0 20px;
            will-change: transform;
          }

          .carousel-track:hover {
            animation-play-state: paused;
          }

          .carousel-item {
            flex-shrink: 0;
            width: 320px;
            height: 420px;
            border-radius: 22px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            transition: box-shadow 0.3s ease;
          }

          .carousel-item:hover {
            box-shadow: 0 14px 50px rgba(0, 0, 0, 0.08);
          }

          .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        `}</style>

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#FBF8E4] to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#FBF8E4] to-transparent z-10" />

        {/* SCROLLING CAROUSEL */}
        <div className="carousel-track">
          {[...images, ...images].map((image, i) => (
            <div key={`carousel-item-${i}`} className="carousel-item">
              <img src={image} alt={`Student ${(i % images.length) + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SimpleInfiniteCarousel;