"use client";

import Image from "next/image";

export default function FloatingSupport() {
  return (
    <div className="fixed bottom-5 right-4 z-40 sm:bottom-7 sm:right-7">

      <a
        href="https://www.entes.com.tr/teknik-destek/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ENTES teknik destek"
        className="group flex flex-col items-center"
      >

        {/* ==================================================
            KONUŞMA BALONU
        ================================================== */}

        <div className="mb-2 rounded-full border border-entes-border bg-white px-4 py-2 text-xs font-semibold text-entes-text shadow-md transition-all duration-200 group-hover:-translate-y-1 group-hover:border-entes-accent group-hover:bg-entes-accent sm:text-sm">
          Destek & İletişim
        </div>


        {/* ==================================================
            KARAKTER
        ================================================== */}

        <div className="relative">

          {/* ARKA SARI HALKA */}

          <div className="absolute bottom-0 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full bg-entes-accent/25 transition-all duration-300 group-hover:scale-110 group-hover:bg-entes-accent/35 sm:h-[130px] sm:w-[130px]" />


          {/* İÇ BEYAZ DAİRE */}

          <div className="relative flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-full border border-entes-accent/40 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.14)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-entes-accent sm:h-[120px] sm:w-[120px]">

            <Image
              src="/support/support-agent.png"
              alt="ENTES Teknik Destek"
              fill
              unoptimized
              sizes="120px"
              className="object-contain p-1"
            />

          </div>


          {/* ONLINE / DESTEK NOKTASI */}

          <div className="absolute bottom-1 right-0 h-4 w-4 rounded-full border-[3px] border-white bg-entes-accent shadow-sm sm:h-5 sm:w-5" />

        </div>

      </a>

    </div>
  );
}