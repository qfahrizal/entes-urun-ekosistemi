"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";

import { productCategories } from "@/data/categories";
import { products } from "@/data/products";

import type {
  MenuCategory,
  Product,
} from "@/types/ecosystem";


/* ==================================================
   PROPS
================================================== */

type ExploreHomeProps = {
  onProductSelect: (
    product: Product
  ) => void;

  onOpenMenu: () => void;

  onOpenCategory: (
    categoryId: MenuCategory
  ) => void;
};


/* ==================================================
   ÖNE ÇIKAN ÜRÜNLER
================================================== */

const featuredProductIds = [
  "emk",
  "svg-ahf",
  "reaktif-guc-kontrol-rolesi",
  "entes-enerji-izleme-yazilimlari",
];

const featuredProducts =
  featuredProductIds
    .map((id) =>
      products.find(
        (product) =>
          product.id === id
      )
    )
    .filter(
      (
        product
      ): product is Product =>
        Boolean(product)
    );


/* ==================================================
   KATEGORİ GÖRSELLERİ
================================================== */

const categoryImages: Record<
  MenuCategory,
  string
> = {
  "power-quality":
    "/categories/1.png",

  measurement:
    "/categories/2.png",

  compensation:
    "/categories/3.png",

  "energy-management":
    "/categories/4.png",

  "protection-control":
    "/categories/5.png",

  "current-transformers":
    "/categories/6.png",
};


/* ==================================================
   COMPONENT
================================================== */

export default function ExploreHome({
  onProductSelect,
  onOpenMenu,
  onOpenCategory,
}: ExploreHomeProps) {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);


  /* ==================================================
     OTOMATİK CAROUSEL
  ================================================== */

  useEffect(() => {
    if (
      featuredProducts.length <= 1
    ) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setActiveIndex(
          (current) =>
            (current + 1) %
            featuredProducts.length
        );
      }, 4500);

    return () => {
      window.clearInterval(
        interval
      );
    };
  }, []);


  const activeProduct =
    featuredProducts[
      activeIndex
    ] ??
    featuredProducts[0];


  /* ==================================================
     CAROUSEL KONTROLLERİ
  ================================================== */

  const previousProduct = () => {
    setActiveIndex(
      (current) =>
        (current -
          1 +
          featuredProducts.length) %
        featuredProducts.length
    );
  };


  const nextProduct = () => {
    setActiveIndex(
      (current) =>
        (current + 1) %
        featuredProducts.length
    );
  };


  return (
    <div>

      {/* ==================================================
          ÖNE ÇIKAN ÜRÜNLER
      ================================================== */}

      {activeProduct && (
        <section>

          {/* SECTION HEADER */}

          <div className="mb-8 flex items-center justify-between gap-4">

            <div className="flex flex-col gap-2.5">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-entes-text-soft">
                Keşfet
              </p>

              <h2 className="type-section-title text-entes-text">
                Öne Çıkan Ürünler
              </h2>

            </div>


            {/* SLIDER OKLARI */}

            <div className="hidden gap-2 sm:flex">

              <button
                type="button"
                onClick={
                  previousProduct
                }
                aria-label="Önceki öne çıkan ürün"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-entes-border bg-white text-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-entes-accent hover:bg-entes-accent"
              >
                ←
              </button>


              <button
                type="button"
                onClick={
                  nextProduct
                }
                aria-label="Sonraki öne çıkan ürün"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-entes-border bg-white text-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-entes-accent hover:bg-entes-accent"
              >
                →
              </button>

            </div>

          </div>


          {/* ==================================================
              ÖNE ÇIKAN ÜRÜN KARTI
          ================================================== */}

          <div className="entes-tech-card overflow-hidden rounded-3xl border border-entes-border">

            <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-2">


              {/* GÖRSEL */}

              <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-entes-surface-muted p-6 sm:min-h-[280px]">
                {activeProduct.image ? (
                  <div className="relative z-10 flex h-[220px] w-full items-center justify-center sm:h-[260px]">
                    {/* Soft yellow glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/20 blur-3xl" />

                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/22 blur-2xl" />

                    <div className="relative h-full w-full">
                      <Image
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain drop-shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-entes-text-muted">
                    <div className="text-5xl">◈</div>
                    <p className="mt-3 text-xs">
                      Ürün görseli
                    </p>
                  </div>
                )}
              </div>


              {/* ÜRÜN BİLGİSİ */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">

                {/* BAŞLIK BLOĞU */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-entes-text-soft">
                    Öne Çıkan Ürün
                  </p>

                  {/* font-black (900) ve inline style ile maksimum kalınlık garantiye alındı */}
                  <h3 
                    style={{ fontWeight: 750 }}
                    className="break-words text-2xl font-extrabold leading-tight tracking-tight text-entes-text sm:text-3xl lg:text-[34px]"
                  >
                    {activeProduct.name}
                  </h3>
                </div>

                {/* AÇIKLAMA (mt-4 ile başlıkla aradaki boşluk net şekilde ayarlandı) */}
                <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-entes-text-muted sm:text-base">
                  {activeProduct.description}
                </p>

                {/* BUTON */}
                <button
                  type="button"
                  onClick={() => onProductSelect(activeProduct)}
                  className="group mt-6 inline-flex w-fit items-center rounded-xl bg-entes-accent px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95"
                >
                  Ürünü İncele
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>

            </div>

          </div>


          {/* ==================================================
              SLIDER NOKTALARI
          ================================================== */}

          {featuredProducts.length >
            1 && (

            <div className="mt-5 flex justify-center gap-2">

              {featuredProducts.map(
                (
                  featuredProduct,
                  index
                ) => (

                  <button
                    key={
                      featuredProduct.id
                    }
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        index
                      )
                    }
                    aria-label={`${featuredProduct.name} ürününü göster`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex ===
                      index
                        ? "w-8 bg-entes-accent"
                        : "w-2 bg-entes-border hover:bg-entes-text-muted"
                    }`}
                  />

                )
              )}

            </div>

          )}

        </section>
      )}


      {/* ==================================================
          ÜRÜN KATEGORİLERİ
      ================================================== */}

      <section className="mt-10 sm:mt-12 lg:mt-14">


        {/* ==================================================
            KATEGORİ SECTION HEADER
        ================================================== */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="flex flex-col gap-2">

              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-entes-text-soft">
                Ürün Portföyü
              </p>


              <h2 className="type-section-title text-entes-text">
                Ürün Kategorileri
              </h2>

            </div>


            {/*<p className="mt-6 max-w-2xl text-[15px] leading-7 text-entes-text-muted sm:text-base">
              ENTES ürün portföyündeki ana
              kategorilerden birini seçerek
              ürün gruplarını
              inceleyebilirsiniz.
            </p>*/}

          </div>


          {/* TÜM KATEGORİLER */}

          <button
            type="button"
            onClick={
              onOpenMenu
            }
            className="group w-full rounded-xl bg-entes-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-entes-primary-hover sm:w-auto"
          >
            Tüm Kategoriler

            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>

          </button>

        </div>


        {/* ==================================================
            KATEGORİ KARTLARI
        ================================================== */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {productCategories.map(
            (category) => (

              <button
                key={
                  category.id
                }
                type="button"
                onClick={() =>
                  onOpenCategory(
                    category.id
                  )
                }
                className="entes-tech-card entes-interactive-card group relative flex min-h-[205px] overflow-hidden rounded-2xl border border-entes-border text-left hover:border-entes-accent"
              >


                {/* ==================================================
                    SOL TARAF - YAZILAR
                ================================================== */}

                <div className="relative z-10 flex min-w-0 flex-1 flex-col p-5 sm:p-6">

                  {/* ÜRÜN GRUBU SAYISI */}

                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-entes-text-soft">
                    {
                      category.families
                        .length
                    }{" "}
                    ürün grubu
                  </p>


                  {/* KATEGORİ ADI */}

                  <h3 className="mt-4 max-w-[230px] text-xl font-semibold leading-snug text-entes-text">
                    {
                      category.label
                    }
                  </h3>


                  {/* ÜRÜNLERİ GÖR */}

                  <span className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-entes-text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-entes-text">

                    Ürünleri Gör

                    <span className="ml-1.5">
                      →
                    </span>

                  </span>

                </div>


                {/* ==================================================
                    SAĞ TARAF - ÜRÜN BALONCUĞU
                ================================================== */}

                <div className="relative flex w-[125px] shrink-0 items-center justify-center sm:w-[155px] lg:w-[145px] xl:w-[165px]">


                  {/* ARKA BALONCUK */}

                  <div className="absolute right-[-42px] top-1/2 h-[190px] w-[190px] -translate-y-1/2 rounded-full bg-entes-accent/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-entes-accent/18" />


                  {/* İÇ BALONCUK */}

                  <div className="absolute h-[132px] w-[132px] rounded-full border border-entes-accent/20 bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 group-hover:border-entes-accent/50 sm:h-[145px] sm:w-[145px]" />


                  {/* PNG ÜRÜN */}

                  <div className="relative z-10 h-[105px] w-[105px] transition-transform duration-300 group-hover:scale-[1.06] sm:h-[118px] sm:w-[118px]">

                    <Image
                      src={categoryImages[category.id]}
                      alt={category.label}
                      width={150}
                      height={150}
                      unoptimized
                      className="h-full w-full object-contain"
                    />

                  </div>

                </div>

              </button>

            )
          )}

        </div>

      </section>

    </div>
  );
}