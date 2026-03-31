"use client";

import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
subsets: ["latin"],
weight: "400",
});

export function ChallengeSection() {
return ( <section className="bg-[#FBF8E4] text-black py-28 px-[6%]">
  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div>

      <p className="text-xs tracking-[5px] text-[#C9A227] uppercase mb-6">
        06 / The Challenge
      </p>

      <h2
        className={`${bebas.className} uppercase text-[#111] mb-6`}
        style={{
          fontSize: "110px",
          lineHeight: "100px",
          letterSpacing: "1px",
        }}
      >
        ₹1 LAKH<br />
        CHALLENGE
      </h2>

      <p className="text-black/60 max-w-md leading-relaxed mb-8">
        After month 12, our students hit ₹1 lakh/month. Not a promise — a system.
        Portfolio → Job → Freelance gigs → Repeat clients → Scale.
      </p>

      <button className="bg-black text-white px-8 py-4 rounded-[10px] tracking-[3px] text-sm uppercase hover:opacity-80 transition">
        Join The Challenge
      </button>

    </div>

    {/* RIGHT SIDE (GRID BOXES) */}
    <div className="grid grid-cols-2 gap-6">

      {[
        {
          num: "01",
          title: "Build the Portfolio",
          desc: "10 industries. Real shoots. Real design. Certificate earned.",
        },
        {
          num: "02",
          title: "Crack the Job",
          desc: "₹25K–₹30K first job. LinkedIn active. IG content portfolio live.",
        },
        {
          num: "03",
          title: "Get Freelance Gigs",
          desc: "Parallel income from month one. 3–5 clients by month 6.",
        },
        {
          num: "04",
          title: "Hit ₹1L / Month",
          desc: "Salary + freelance = ₹1 lakh. Month 12 is the target.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#FFFDF5] border border-black/10 rounded-[18px] p-6
          hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]
          transition duration-300"
        >

          <p className="text-3xl font-bold text-black/20 mb-3">
            {item.num}
          </p>

          <h3 className="font-semibold text-lg mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-black/60 leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
  );
}
