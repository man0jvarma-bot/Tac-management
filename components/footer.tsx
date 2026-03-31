"use client";

export function Footer() {
return ( <footer className="bg-[#0D0D0D] text-white px-[6%] py-16 border-t border-white/10">

  {/* TOP ROW */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">

    {/* LEFT LOGO */}
    <h2 className="text-xl tracking-[3px] font-semibold">
      <span className="text-[#C9A227]">TAC</span> SUITE
    </h2>

    {/* RIGHT LINKS */}
    <div className="flex gap-8 text-sm tracking-[3px] uppercase text-white/60">

      <a 
        href="https://www.instagram.com/tac_theartcode?igsh=dTk2NGpvb2ZoZmVx" 
        target="_blank"
        className="hover:text-[#C9A227] transition"
      >
        Instagram
      </a>

      <a 
        href="https://www.linkedin.com/company/tac-the-art-code/" 
        target="_blank"
        className="hover:text-[#C9A227] transition"
      >
        LinkedIn
      </a>

      <a 
        href="https://www.youtube.com/@the_artcode" 
        target="_blank"
        className="hover:text-[#C9A227] transition"
      >
        YouTube
      </a>

      <a 
        href="https://wa.me/" 
        target="_blank"
        className="hover:text-[#C9A227] transition"
      >
        WhatsApp
      </a>

    </div>

  </div>

  {/* DIVIDER */}
  <div className="border-t border-white/10 mb-8"></div>

  {/* BOTTOM ROW */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

    {/* LEFT TEXT */}
    <p className="text-xs text-white/40 tracking-[2px]">
      © 2025 TAC School of Modern Learning Pvt. Ltd. — Madhapur, Hyderabad
    </p>

    {/* RIGHT INFO */}
    <div className="flex flex-wrap gap-3 text-xs tracking-[2px]">

      <span className="border border-white/10 px-4 py-2 rounded-[6px] text-white/60">
        DPIIT Recognised
      </span>

      <span className="border border-white/10 px-4 py-2 rounded-[6px] text-white/60">
        NSDC Affiliated
      </span>

      <span className="border border-white/10 px-4 py-2 rounded-[6px] text-white/60">
        Skill India Certified
      </span>

    </div>

  </div>

  {/* EXTRA INFO */}
  <div className="mt-8 text-center">

    <p className="text-sm text-white/50 mb-2">
      Building creators into professionals — portfolio, job & freelance ready.
    </p>

    <p className="text-sm text-[#C9A227]">
      contact@theartcode.in
    </p>

  </div>

</footer>

);
}
