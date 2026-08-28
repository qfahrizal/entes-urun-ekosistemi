"use client";

import Image from "next/image";
import Link from "next/link";

import { productCategories } from "@/data/categories";
import { products } from "@/data/products";
import { relations } from "@/data/relations";


/* ==================================================
   LANDING İSTATİSTİKLERİ
================================================== */

const categoryCount =
  productCategories.length;

const productCount = new Set(
  products.map(
    (product) => product.id
  )
).size;

const relationCount =
  relations.length;


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ==================================================
          VIDEO BACKGROUND
      ================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source
          src="/videos/entes-hero3.mp4"
          type="video/mp4"
        />
      </video>


      {/* ==================================================
          VIDEO OVERLAY
      ================================================== */}

      {/* genel karartma */}
      <div className="absolute inset-0 bg-black/45" />


      {/* desktop'ta sol tarafı daha okunaklı yap */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.48)_35%,rgba(0,0,0,0.12)_68%,rgba(0,0,0,0.05)_100%)]" />


      {/* hafif alt gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-black/40 to-transparent" />


      {/* ==================================================
          ANA İÇERİK
      ================================================== */}

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] items-center px-8 py-12 lg:px-14 xl:px-20">

        <div className="w-full max-w-[760px]">


          {/* ==================================================
              ENTES LOGO
          ================================================== */}

          <div className="mb-10">

            <Image
              src="/brand/entes-logo-yellow.png"
              alt="ENTES"
              width={260}
              height={104}
              className="h-[68px] w-auto object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
              priority
            />

          </div>


          {/* ==================================================
              SMALL LABEL
          ================================================== */}

          {/*<div className="mb-5 flex items-center gap-3">

            <div className="h-[3px] w-10 bg-entes-accent" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              ENTES Çözüm Platformu
            </p>

          </div> */}


          {/* ==================================================
              BAŞLIK
          ================================================== */}

          <h1 className="max-w-[760px] text-[64px] font-bold leading-[0.98] tracking-[-0.045em] text-white xl:text-[74px]">
            Ürün
            <br />
            Ekosistemi
          </h1>


          {/* ==================================================
              AÇIKLAMA
          ================================================== */}

          <p className="mt-10 max-w-[620px] text-[19px] font-normal leading-8 text-white/80">
            ENTES ürünleri arasındaki
            teknik bağlantıları keşfedin
            ve ihtiyacınıza uygun çözüm
            ekosistemini inceleyin.
          </p>


          {/* ==================================================
              CTA
          ================================================== */}

          <div className="mt-10">

            <Link
              href="/kesfet"
              className="group inline-flex items-center justify-center rounded-xl bg-entes-accent px-7 py-4 text-[15px] font-bold text-black shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            >
              Ürünleri Keşfet

              <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>


          {/* ==================================================
              EKOSİSTEM İSTATİSTİKLERİ
          ================================================== */}

          <div className="mt-12 flex items-center gap-8 border-t border-white/15 pt-7">

            {/* KATEGORİ */}

            <div>
              <p className="text-[26px] font-bold leading-none text-white">
                {categoryCount}
              </p>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-white/55">
                Ürün Kategorisi
              </p>
            </div>


            <div className="h-10 w-px bg-white/15" />


            {/* ÜRÜN */}

            <div>
              <p className="text-[26px] font-bold leading-none text-white">
                {productCount}
              </p>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-white/55">
                Ürün Grubu
              </p>
            </div>


            <div className="h-10 w-px bg-white/15" />


            {/* RELATION */}

            <div>
              <p className="text-[26px] font-bold leading-none text-white">
                {relationCount}
              </p>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-white/55">
                Teknik İlişki
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          DEKORATİF SAĞ ALT DETAY
      ================================================== */}

      <div className="pointer-events-none absolute bottom-10 right-12 z-10 hidden text-[11px] font-medium tracking-[0.08em] text-white/45 lg:block">
        © 2026 ENTES Ürün Ekosistemi
      </div>

    </main>
  );
}