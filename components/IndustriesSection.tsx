"use client";

import { motion } from "framer-motion";

const industries = [
  { id: "01", title: "Food & Beverage", tag: "CONTENT + BRAND KIT" },
  { id: "02", title: "Fashion & Beauty", tag: "REEL + POSTER" },
  { id: "03", title: "Apparel & Lifestyle", tag: "LOOKBOOK + EDIT" },
  { id: "04", title: "Construction & Real Estate", tag: "WALKTHROUGH VIDEO" },
  { id: "05", title: "Education & Training", tag: "PROMO FILM + KIT" },
  { id: "06", title: "Entertainment & Media", tag: "MINI SHORT FILM" },
  { id: "07", title: "Health & Wellness", tag: "BRAND VIDEO + AD" },
  { id: "08", title: "Automobiles & Transport", tag: "CINEMATIC REEL" },
  { id: "09", title: "Jewellery & Boutiques", tag: "PRODUCT + IG KIT" },
  { id: "10", title: "Miscellaneous & Emerging", tag: "FULL CAMPAIGN" },
];

export function IndustriesSection() {
  return (
    <section className="bg-[#1A1A1A] text-[#f7f1e4] px-[6%] py-28">

      {/* 🔥 TOP (TITLE RIGHT) */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-16">

        {/* LEFT TEXT */}
        <div className="flex items-center">
          <p className="text-[#f7f1e4]/60 text-sm max-w-sm leading-relaxed">
            One project per industry. No repeats. That portfolio is what gets you the job or the client.
          </p>
        </div>

        {/* RIGHT TITLE (EXACT SPEC) */}
        <div className="text-right">
          <h2
            className="uppercase font-bebas"
            style={{
              fontSize: "76px",
              lineHeight: "72.2px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              fontFamily: "'Bebas Neue', sans-serif",
              color: "#f7f1e4",
            }}
          >
            10 INDUSTRIES.<br />
            ONE STUDENT.
          </h2>
        </div>

      </div>

      {/* BADGE */}
      <div className="mb-10">
        <span className="border border-[#FFC62A]/40 text-[#FFC62A] px-4 py-2 text-xs tracking-[3px] uppercase">
          ★ FIRST IN INDIA – 10-INDUSTRY PORTFOLIO CERTIFICATION
        </span>
      </div>

      {/* GRID */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-5">

  {industries.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.04 }}
      whileHover={{ y: -8 }}
      className="group relative bg-[#1A1A1A] border border-[#2a2a2a] p-6 rounded-xl overflow-hidden transition-all duration-300"
    >

      {/* ✨ GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC62A]/20 via-transparent to-transparent blur-xl" />
      </div>

      {/* NUMBER */}
      <p className="text-[34px] font-bold text-white/10 mb-2 transition group-hover:text-white/20">
        {item.id}
      </p>

      {/* TITLE */}
      <h3 className="text-sm font-semibold mb-2 group-hover:text-[#FFC62A] transition">
        {item.title}
      </h3>

      {/* TAG (default) */}
      <span className="inline-block text-[10px] tracking-[2px] border border-[#FFC62A]/30 text-[#FFC62A] px-3 py-1 transition group-hover:opacity-0">
        {item.tag}
      </span>

      {/* 🔥 EXTRA INFO (REVEAL ON HOVER) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 left-6 right-6 text-[11px] text-white/70 opacity-0 group-hover:opacity-100 transition duration-300"
      >
        Real-world project + portfolio-ready output.
      </motion.div>

    </motion.div>
  ))}

</div>
    </section>
  );
}