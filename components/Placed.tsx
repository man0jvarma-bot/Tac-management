"use client";

import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
subsets: ["latin"],
weight: "400",
});

export function PeopleSection() {
const people = [
{
initials: "SR",
name: "Sravani Reddy",
role: "VIDEO EDITOR",
company: "Digital Agency, Hyderabad",
salary: "₹28,000 / month",
},
{
initials: "AK",
name: "Aditya Kumar",
role: "FREELANCE CREATOR",
company: "Self — 12 Active Clients",
salary: "₹45,000 / month",
},
{
initials: "PM",
name: "Priya Murthy",
role: "GRAPHIC DESIGNER",
company: "Brand Studio, Vizag",
salary: "₹26,000 / month",
},
{
initials: "RV",
name: "Ravi Varma",
role: "MOTION DESIGNER",
company: "Content Lab — Remote",
salary: "₹35,000 / month",
},
];

return ( <section className="bg-[#FBF8E4] text-black py-24 overflow-hidden">

  {/* HEADER */}
  <div className="px-[5%] mb-16 flex justify-between items-start">

    <div>
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

    <div className="hidden md:block mt-10">
      <p className="text-sm tracking-[3px] text-[#C9A227] uppercase cursor-pointer">
        View All Stories →
      </p>
    </div>

  </div>

  {/* SCROLL AREA */}
  <div className="relative px-[5%] overflow-hidden">

    {/* LEFT FADE */}
    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#FBF8E4] to-transparent z-10" />

    {/* RIGHT FADE */}
    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#FBF8E4] to-transparent z-10" />

    {/* SCROLLING CARDS */}
    <motion.div
      className="flex gap-6"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[...people, ...people].map((person, i) => (
        <div
          key={i}
          className="min-w-[300px] bg-[#FFFDF5] border border-black/10 
          rounded-[20px] p-6 flex-shrink-0
          shadow-[0_8px_30px_rgba(0,0,0,0.04)] 
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
          transition duration-300"
        >

          {/* INITIALS */}
          <div className="w-12 h-12 rounded-[12px] bg-[#F4D03F] flex items-center justify-center mb-6 font-bold">
            {person.initials}
          </div>

          {/* NAME */}
          <h3 className="font-semibold text-lg mb-1">
            {person.name}
          </h3>

          {/* ROLE */}
          <p className="text-xs tracking-[3px] text-[#C9A227] mb-2">
            {person.role}
          </p>

          {/* COMPANY */}
          <p className="text-sm text-black/50 mb-6">
            {person.company}
          </p>

          {/* SALARY */}
          <div className="inline-block border border-[#C9A227]/40 px-4 py-2 text-sm rounded-[8px]">
            {person.salary}
          </div>

        </div>
      ))}
    </motion.div>

  </div>

</section>

);
}
