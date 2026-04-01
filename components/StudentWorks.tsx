"use client";

const topImages = [
  "/works/1.jpg",
  "/works/2.jpg",
  "/works/3.jpg",
  "/works/4.jpg",
  "/works/5.jpg",
  "/works/6.jpg",
];

const bottomImages = [
  "/works/7.jpg",
  "/works/8.jpg",
  "/works/9.jpg",
  "/works/10.jpg",
  "/works/11.jpg",
  "/works/12.jpg",
];

function ImageStrip({ images, direction = "left" }: any) {
  const doubled = [...images, ...images];

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "max-content",
          animation: `${direction === "left" ? "scroll-left" : "scroll-right"} 25s linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              width: "160px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "10px",
              flexShrink: 0,
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function StudentWorks() {
  return (
    <section className="w-full py-20 bg-[#FBF8E4] text-[#1A1A1A] flex flex-col items-center gap-12">

      {/* TITLE */}
      <h2
        className="uppercase text-center"
        style={{
          fontFamily: "Bebas Neue",
          fontSize: "70px",
          letterSpacing: "0.5px",
          fontWeight: 700,
          lineHeight: "72px",
        }}
      >
        STUDENT WORKS
      </h2>

      {/* TOP STRIP */}
      <div className="w-[90%]">
        <ImageStrip images={topImages} direction="left" />
      </div>

      {/* BOTTOM STRIP */}
      <div className="w-[90%]">
        <ImageStrip images={bottomImages} direction="right" />
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

    </section>
  );
}