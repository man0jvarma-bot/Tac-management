"use client";

import Link from "next/link";

export function Navbar() {
return ( <nav className="fixed top-0 left-0 w-full z-50 
 bg-black/50 backdrop-blur-xl border-b border-white/10">

  <div className="w-full px-10 h-[80px] flex items-center justify-between">

    {/* LOGO */}
    <h1 className="text-2xl font-black tracking-[4px] italic text-white">
      THE <span className="text-[#FFC62A]">ART</span> CODE
    </h1>

    {/* RIGHT */}
    <div className="flex items-center gap-10">

      {/* LINKS */}
      <div className="hidden lg:flex items-center gap-10 text-[11px] tracking-[3px] uppercase text-white/70 font-bold">
        <Link href="#" className="hover:text-[#FFC62A] transition">
          Skills
        </Link>
        <Link href="#" className="hover:text-[#FFC62A] transition">
          Portfolio
        </Link>
        <Link href="#" className="hover:text-[#FFC62A] transition">
          Placements
        </Link>
        <Link href="#" className="hover:text-[#FFC62A] transition">
          Cohorts
        </Link>
      </div>

      {/* BUTTON */}
      <button className="bg-[#FFC62A] text-black px-8 py-3 text-[11px] font-black tracking-[2px] rounded-sm hover:bg-[#FFE8A3] transition-all duration-300">
        APPLY NOW
      </button>

    </div>
  </div>
</nav>

);
}
