"use client";

import { motion } from "framer-motion";

const industries = [
  { id: "01", title: "Food & Beverage", image: "/industries/1 - Food.jpg" },
  { id: "02", title: "Fashion & Beauty", image: "/industries/2 - Fashion.jpg" },
  { id: "03", title: "Apparel & Lifestyle", image: "/industries/3 - Apparel.jpg" },
  { id: "04", title: "Construction & Real Estate", image: "/industries/4 - Construction.jpg" },
  { id: "05", title: "Education & Training", image: "/industries/5 - Education.jpg" },
  { id: "06", title: "Entertainment & Media", image: "/industries/6 - Entertainment.jpg" },
  { id: "07", title: "Health & Wellness", image: "/industries/7 - Health.jpg" },
  { id: "08", title: "Automobiles & Transport", image: "/industries/8 - Automobiles.jpg" },
  { id: "09", title: "Jewellery & Boutiques", image: "/industries/9 - jewellery.jpg" },
  { id: "10", title: "Miscellaneous & Emerging", image: "/industries/10 - Miscelineous.jpg" },
];

export function IndustriesSection() {
  return (
    <section className="bg-[#1A1A1A] text-[#f7f1e4] px-[6%] py-28">

      {/* TOP */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
        <div className="flex items-center">
          <p className="text-[#f7f1e4]/60 text-sm max-w-sm leading-relaxed">
            One project per industry. No repeats. That portfolio is what gets you the job or the client.
          </p>
        </div>

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

      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {industries.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="overflow-hidden rounded-xl h-[220px] bg-[#111] flex items-center justify-center"
          >
            <img
              src={item.image}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
}