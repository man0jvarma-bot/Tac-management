"use client";

import { motion } from "framer-motion";

export function CertificateSection() {
return ( <section className="bg-[#1A1A1A] text-white px-[6%] py-28">

  {/* TOP */}
  <div className="grid md:grid-cols-2 gap-12 mb-20">

    {/* LEFT TITLE */}
    <div>
      <h2
        className="font-bebas uppercase text-[#F7F1E4] tracking-wide 
        drop-shadow-[0_2px_10px_rgba(255,255,255,0.08)]"
        style={{
          fontSize: "60px",
          lineHeight: "64px",
          letterSpacing: "1px",
          fontWeight: 700,
        }}
      >
        JOB & FREELANCE<br />
        READY CERTIFICATE
      </h2>
    </div>

    {/* RIGHT DESC */}
    <div className="flex items-center">
      <p className="text-white/60 text-sm max-w-md leading-relaxed">
        India’s first certificate that proves you can shoot, design, and market — across all industries, verified.
      </p>
    </div>

  </div>

  {/* MAIN CONTENT */}
  <div className="grid md:grid-cols-2 gap-12">

    {/* LEFT: CERTIFICATE CARD */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-8 border border-[#FFC62A]/20 rounded-[22px]
      bg-gradient-to-br from-[#1A1A1A] via-[#111] to-black
      shadow-[0_10px_40px_rgba(255,198,42,0.08)]
      hover:shadow-[0_12px_50px_rgba(255,198,42,0.12)]
      transition duration-300"
    >

      {/* SOFT GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#FFC62A]/70 blur-[0.5px]" />

      <h3 className="text-[#FFC62A] font-semibold mb-2 tracking-wide">
        THE ART CODE — TAC
      </h3>

      <p className="text-white/40 text-xs tracking-[2px] uppercase mb-6">
        Certificate of Job & Freelance Readiness
      </p>

      <p className="text-white/60 text-sm leading-relaxed mb-6">
        This certifies that the holder has successfully completed the TAC Suite program,
        demonstrating mastery across creative disciplines and building a verified industry portfolio.
      </p>

      {/* INFO GRID */}
      <div className="grid grid-cols-3 gap-4 text-xs text-white/60 mt-6">

        <div>
          <p className="text-white/30">Issued By</p>
          <p className="text-[#FFC62A]">THE ART CODE</p>
        </div>

        <div>
          <p className="text-white/30">Recognition</p>
          <p className="text-green-400">NSDC / Skill India</p>
        </div>

        <div>
          <p className="text-white/30">Status</p>
          <p className="text-green-400">DPIIT Recognised</p>
        </div>

      </div>

    </motion.div>

    {/* RIGHT: FEATURES */}
    <div className="space-y-6">

      {/* BADGE */}
      <div className="inline-block border border-[#FFC62A]/40 text-[#FFC62A] px-4 py-2 text-xs tracking-[3px] uppercase rounded-full">
        ★ India’s First 10-Industry Portfolio Certificate
      </div>

      {/* FEATURES */}
      {[
        {
          title: "10-Industry Portfolio Verified",
          desc: "Real businesses, real shoots, real deliverables across all industries.",
        },
        {
          title: "Social Profiles Built & Active",
          desc: "Instagram for brand growth. LinkedIn for jobs & freelance clients.",
        },
        {
          title: "Video Edits, Reels & Motion Graphics",
          desc: "Client-ready deliverables across short-form & long-form content.",
        },
        {
          title: "Freelance-Ready Client Skills",
          desc: "Briefing, invoicing, revisions, and retention systems.",
        },
        {
          title: "Live Digital Marketing Campaign",
          desc: "Real ads campaign executed before graduation.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="border-b border-white/10 pb-4 group"
        >

          <div className="flex items-start gap-3">

            {/* BULLET */}
            <span className="text-[#FFC62A] mt-1">→</span>

            <div>
              <h4 className="font-semibold text-white group-hover:text-[#FFC62A] transition">
                {item.title}
              </h4>

              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>

        </motion.div>
      ))}

      {/* CTA BOX */}
      <div className="mt-8 p-5 border border-[#FFC62A]/20 rounded-[18px]
      bg-gradient-to-r from-[#1A1A1A] via-[#111] to-black
      shadow-[0_8px_30px_rgba(255,198,42,0.06)]">

        <p className="text-[#FFC62A] font-bold text-lg">
          ₹25K–₹30K Avg First Job Package
        </p>

        <p className="text-white/50 text-sm">
          Freshers placed across Hyderabad, AP & remote roles.
        </p>

      </div>

    </div>

  </div>
</section>

);
}
