"use client";

const topImages = [
  "/works/mothish.jpeg",
  "/works/nike.jpeg",
  "/works/3.jpg",
  "/works/vedam.jpg",
  "/works/5.jpg",
  "/works/6.jpg",
];

const bottomImages = [
  "/works/7.jpg",
  "/works/thumbnail.jpg",
  "/works/image.png",
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
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px", // 🔥 more spacing
          width: "max-content",
          alignItems: "center",
          animation: `${
            direction === "left" ? "scroll-left" : "scroll-right"
          } 30s linear infinite`, // 🔥 smoother
        }}
      >
        {doubled.map((src, i) => (
<img
  key={i}
  src={src}
  alt=""
  style={{
    maxHeight: "180px",   // 🔥 control size here (reduce/increase)
    width: "auto",        // ✅ keeps natural width
    height: "auto",
    flexShrink: 0,
    transition: "transform 0.35s ease",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.1)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
  />
        ))}
      </div>
    </div>
  );
}

export function StudentWorks() {
  return (
    <div className="w-full bg-[#FBF8E4] text-[#1A1A1A]">
      
      {/* ===== SECTION 1 ===== */}
      <section className="w-full py-24 flex flex-col items-center gap-16">
        
        <h2
          className="uppercase text-center"
          style={{
            fontFamily: "Bebas Neue",
            fontSize: "80px", // 🔥 bigger title
            letterSpacing: "1px",
            fontWeight: 700,
          }}
        >
          STUDENT WORKS
        </h2>

        <div className="w-[92%]">
          <ImageStrip images={topImages} direction="left" />
        </div>
      </section>

      {/* ===== SECTION 2 ===== */}
      <section className="w-full pb-24 flex flex-col items-center gap-16">
        
        <div className="w-[92%]">
          <ImageStrip images={bottomImages} direction="right" />
        </div>
      </section>

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
    </div>
  );
}