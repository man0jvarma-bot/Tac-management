"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─── SCROLLING STRIPS DATA ──────────────────────────────── */
// Top strip: student design/logo works (right-to-left)
const topStripItems = [
  { label: "Brand Identity", color: "#FFC62A", icon: "◈" },
  { label: "Logo Design",    color: "#E8D5A0", icon: "⬡" },
  { label: "Social Kit",     color: "#FFC62A", icon: "▣" },
  { label: "Poster Art",     color: "#D4B87A", icon: "◉" },
  { label: "Motion Reel",    color: "#FFC62A", icon: "▷" },
  { label: "Color Grade",    color: "#E8D5A0", icon: "◑" },
  { label: "Brand Book",     color: "#FFC62A", icon: "◈" },
  { label: "Thumbnail Set",  color: "#D4B87A", icon: "▦" },
  { label: "Merch Design",   color: "#FFC62A", icon: "⬡" },
  { label: "IG Template",    color: "#E8D5A0", icon: "◉" },
];

// Bottom strip: similar works (left-to-right)
const bottomStripItems = [
  { label: "Product Shoot",   color: "#FFC62A", icon: "◎" },
  { label: "Reel Edit",       color: "#E8D5A0", icon: "▷" },
  { label: "Ad Campaign",     color: "#FFC62A", icon: "◈" },
  { label: "Brand Film",      color: "#D4B87A", icon: "◉" },
  { label: "Typography Kit",  color: "#FFC62A", icon: "▣" },
  { label: "Event Coverage",  color: "#E8D5A0", icon: "◑" },
  { label: "Pitch Deck",      color: "#FFC62A", icon: "▦" },
  { label: "Photo Edit",      color: "#D4B87A", icon: "⬡" },
  { label: "YT Thumbnail",    color: "#FFC62A", icon: "◈" },
  { label: "Brand Mockup",    color: "#E8D5A0", icon: "◉" },
];

/* ─── INFINITE STRIP ─────────────────────────────────────── */
function InfiniteStrip({
  items,
  direction = "left",
  speed = 35,
}: {
  items: typeof topStripItems;
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "max-content",
          animation: `strip-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(26,26,26,0.06)",
              border: "1px solid rgba(26,26,26,0.08)",
              borderRadius: "2px",
              padding: "11px 22px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span style={{ color: item.color }}>{item.icon}</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.55)",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TV / MONITOR COMPONENT ─────────────────────────────── */
function TelevisionPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scanline flicker effect
  const [flicker, setFlicker] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 80);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "640px",
        margin: "0 auto",
        filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.22)) drop-shadow(0 8px 24px rgba(255,198,42,0.08))",
      }}
    >
      {/* ── TV OUTER BODY ── */}
      <div
        style={{
          background: "linear-gradient(145deg, #2a2820 0%, #1a1812 40%, #222018 100%)",
          borderRadius: "16px 16px 12px 12px",
          padding: "18px 18px 0 18px",
          boxShadow:
            "inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
          position: "relative",
        }}
      >
        {/* Brand badge top-left */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "18px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "8px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#FFC62A",
            opacity: 0.7,
          }}
        >
          TAC · STUDIO
        </div>

        {/* Status LED */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "18px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 6px rgba(74,222,128,0.8)",
              animation: "led-pulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "7px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            LIVE
          </span>
        </div>

        {/* ── SCREEN BEZEL ── */}
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
            background: "#000",
            aspectRatio: "16/10",
            boxShadow:
              "inset 0 0 0 2px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.6)",
          }}
        >
          {/* Actual video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            src="/videos/showreel.mp4"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Scanlines overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* CRT vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.55) 100%)",
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          {/* Flicker flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.03)",
              opacity: flicker ? 1 : 0,
              transition: flicker ? "none" : "opacity 0.08s",
              pointerEvents: "none",
              zIndex: 4,
            }}
          />

          {/* Corner reflections */}
          <div
            style={{
              position: "absolute",
              top: 0, left: 0,
              width: "40%", height: "30%",
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
              pointerEvents: "none",
              zIndex: 5,
            }}
          />

          {/* Bottom HUD bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "8px 12px",
              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 6,
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "8px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#FFC62A",
              }}
            >
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "8px",
                letterSpacing: "1px",
                color: "rgba(255,255,255,0.35)",
              }}
            >
            </span>
          </div>
        </div>

        {/* ── TV CHIN / BOTTOM PANEL ── */}
        <div
          style={{
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            paddingBottom: "4px",
          }}
        >
          {/* Speaker grille dots */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
              }}
            />
          ))}
          {/* Center channel knob */}
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3a3828, #1a1812)",
              border: "1px solid rgba(255,255,255,0.1)",
              margin: "0 6px",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── TV NECK + BASE ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Neck */}
        <div
          style={{
            width: "60px",
            height: "22px",
            background: "linear-gradient(to bottom, #1a1812, #222018)",
            clipPath: "polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)",
          }}
        />
        {/* Base */}
        <div
          style={{
            width: "200px",
            height: "12px",
            background: "linear-gradient(145deg, #2a2820, #1a1812)",
            borderRadius: "6px 6px 4px 4px",
            boxShadow:
              "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        />
      </div>

      {/* ─── Keyframe injection ─── */}
      <style>{`
        @keyframes led-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(74,222,128,0.8); }
          50%       { opacity: 0.5; box-shadow: 0 0 3px rgba(74,222,128,0.4); }
        }
        @keyframes strip-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes strip-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

/* ─── HERO SECTION ───────────────────────────────────────── */
export function HeroSection() {
  return (
  <section
  className="min-h-screen bg-[#FBF8E4] text-[#1A1A1A] flex pt-[70px] overflow-x-hidden"
  style={{ marginLeft: "-1px" }}
>

      {/* ══ LEFT CONTENT ══ */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-[6%]">

        <p className="font-mono text-[10px] tracking-[3px] uppercase text-[#1A1A1A]/40 mb-6 flex items-center gap-4">
          <span className="w-10 h-[1px] bg-[#FFC62A] block" />
          THE ART CODE — MADHAPUR, HYDERABAD
        </p>

        <h1 className="leading-[1.0] font-black tracking-tight uppercase">
          <span className="block text-[50px] md:text-[75px]">LEARN</span>
          <span className="block text-[50px] md:text-[75px] text-[#FFC62A]">8 SKILLS.</span>
          <span className="block text-[50px] md:text-[75px] text-transparent" style={{ WebkitTextStroke: "1.5px rgba(26,26,26,0.2)" }}>
            ONE COURSE.
          </span>
        </h1>

        <p className="mt-6 text-[#1A1A1A]/60 max-w-md text-[15px] leading-[1.8] font-medium">
          India's first 8-in-1 creative suite program. Shoot content. Design brands.
          Edit reels. Land jobs. Crack freelance gigs. Build your ₹1L/month career.
        </p>

        <div className="flex flex-col gap-10 mt-10">
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#1D1D1D] text-[#FBF8E4] px-10 py-4 text-[12px] font-bold tracking-[2px] uppercase hover:scale-105 transition">
              ENROLL IN NEXT COHORT
            </button>
            <button className="border border-[#1D1D1D]/20 px-10 py-4 text-[12px] tracking-[2px] uppercase text-[#1A1A1A]/70 hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition">
              SEE PLACEMENT STORIES
            </button>
          </div>

          {/* STATS */}
          <div className="flex items-center gap-6 md:gap-8 border-t border-[#1D1D1D]/10 pt-8 max-w-xl">
            {[
              { val: "5",    label: "Cohorts Done" },
              { val: "₹30K", label: "Avg Package" },
              { val: "10",   label: "Portfolio" },
              { val: "8",    label: "Skills" },
            ].map((s, i) => (
              <>
                <div key={s.label} className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-black leading-none text-[#FFC62A]">{s.val}</span>
                  <span className="text-[8px] md:text-[9px] tracking-[2px] uppercase font-bold text-[#1A1A1A]/40 mt-1">{s.label}</span>
                </div>
                {i < 3 && <div className="w-[1px] h-10 bg-[#1D1D1D]/10" />}
              </>
            ))}
          </div>
        </div>
      </div>

      {/* ══ RIGHT: TV + STRIPS ══ */}
      <div className="hidden lg:flex flex-col justify-center items-center w-full lg:w-1/2 shrink-0 gap-8">

        {/* TOP STRIP — right to left */}
        <InfiniteStrip items={topStripItems} direction="left" speed={30} />

        {/* TELEVISION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="px-2"
        >
          <TelevisionPlayer />
        </motion.div>

        {/* BOTTOM STRIP — left to right */}
        <InfiniteStrip items={bottomStripItems} direction="right" speed={28} />

      </div>

    </section>
  );
}