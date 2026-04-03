"use client";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white px-[6%] py-8 border-t border-white/10">

      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">

        <h2 className="text-xl tracking-[3px] font-semibold">
          <span className="text-[#C9A227]">TAC</span> SUITE
        </h2>

        <div className="flex gap-8 text-sm tracking-[3px] uppercase text-white/60">
          <a href="https://www.instagram.com/tac_theartcode?igsh=dTk2NGpvb2ZoZmVx" target="_blank" className="hover:text-[#C9A227] transition">Instagram</a>
          <a href="https://www.linkedin.com/company/tac-the-art-code/" target="_blank" className="hover:text-[#C9A227] transition">LinkedIn</a>
          <a href="https://www.youtube.com/@the_artcode" target="_blank" className="hover:text-[#C9A227] transition">YouTube</a>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mb-5"></div>

      {/* MIDDLE ROW — Address & Nav Links */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">

        <div className="flex flex-col gap-3">

          <div className="flex items-start gap-3">
            <span className="text-[#C9A227] mt-0.5">📍</span>
            <div>
              <p className="text-xs font-semibold tracking-[2px] uppercase text-white mb-0.5">Address</p>
              <p className="text-xs text-white/50 leading-relaxed">
                Plot No. 286, 4th Floor, Road No 16,<br />
                Ayyapa Society, Madhapur, Hyderabad, Pin - 500081
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#C9A227]">📞</span>
            <a href="tel:+919966430431" className="text-xs text-white/50 hover:text-[#C9A227] transition tracking-[1px]">
              +91 9966 430 431
            </a>
          </div>

        </div>

        <div className="flex flex-col gap-2 text-xs text-white/60 tracking-[2px]">
          <a href="/courses" className="hover:text-[#C9A227] transition flex items-center gap-2"><span className="text-[#C9A227]">»</span> Courses</a>
          <a href="/about" className="hover:text-[#C9A227] transition flex items-center gap-2"><span className="text-[#C9A227]">»</span> About Us</a>
          <a href="/contact" className="hover:text-[#C9A227] transition flex items-center gap-2"><span className="text-[#C9A227]">»</span> Contact</a>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mb-5"></div>

      {/* BOTTOM ROW */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

        <p className="text-xs text-white/40 tracking-[2px]">
          © 2025 TAC School of Modern Learning Pvt. Ltd. — Madhapur, Hyderabad
        </p>

        <div className="flex flex-wrap gap-2 text-xs tracking-[2px]">
          <span className="border border-white/10 px-3 py-1.5 rounded-[6px] text-white/60">DPIIT Recognised</span>
          <span className="border border-white/10 px-3 py-1.5 rounded-[6px] text-white/60">NSDC Affiliated</span>
          <span className="border border-white/10 px-3 py-1.5 rounded-[6px] text-white/60">Skill India Certified</span>
        </div>

      </div>

      {/* EXTRA INFO */}
      <div className="mt-5 text-center">
        <p className="text-xs text-white/50 mb-1">
          Building creators into professionals — portfolio, job & freelance ready.
        </p>
        <p className="text-xs text-[#C9A227]">contact@theartcode.in</p>
      </div>

    </footer>
  );
}