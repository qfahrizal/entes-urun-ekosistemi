"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";

import { productCategories } from "@/data/categories";

import type { Product } from "@/types/ecosystem";


type ProductHeroProps = {
  product: Product;
};


export default function ProductHero({
  product,
}: ProductHeroProps) {
  const category =
    productCategories.find(
      (item) =>
        item.id ===
        product.menuCategory
    );


  const modelPreviews =
    product.modelPreviews ?? [];


  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);


  const [
    isPaused,
    setIsPaused,
  ] = useState(false);


  const [
    isSeriesOpen,
    setIsSeriesOpen,
  ] = useState(false);


  /* ==================================================
     ÜRÜN DEĞİŞTİĞİNDE RESET
  ================================================== */

  useEffect(() => {
    setCurrentIndex(0);
    setIsPaused(false);
    setIsSeriesOpen(false);
  }, [product.id]);


  /* ==================================================
     OTOMATİK MODEL CAROUSEL
  ================================================== */

  useEffect(() => {
    if (
      modelPreviews.length <= 1 ||
      isPaused
    ) {
      return;
    }


    const interval =
      window.setInterval(
        () => {
          setCurrentIndex(
            (previousIndex) =>
              previousIndex ===
              modelPreviews.length - 1
                ? 0
                : previousIndex + 1
          );
        },
        4000
      );


    return () => {
      window.clearInterval(
        interval
      );
    };
  }, [
    modelPreviews.length,
    isPaused,
  ]);


  /* ==================================================
     CAROUSEL KONTROLLERİ
  ================================================== */

  const goToPrevious = () => {
    setCurrentIndex(
      (previousIndex) =>
        previousIndex === 0
          ? modelPreviews.length - 1
          : previousIndex - 1
    );
  };


  const goToNext = () => {
    setCurrentIndex(
      (previousIndex) =>
        previousIndex ===
        modelPreviews.length - 1
          ? 0
          : previousIndex + 1
    );
  };


  const currentModel =
    modelPreviews[
      currentIndex
    ];


  return (
    <>

      {/* ==================================================
          PRODUCT HERO
      ================================================== */}

      <section
        className="
          relative
          overflow-hidden
          rounded-3xl

          border border-white/60

          bg-transparent

          shadow-[0_18px_50px_rgba(15,23,42,0.13)]
        "
      >

        {/* ÜST ENTES IŞIK ÇİZGİSİ */}

        <div
          className="
            pointer-events-none
            absolute left-[7%] top-0
            z-30
            h-px w-[34%]

            bg-gradient-to-r
            from-transparent
            via-entes-accent/90
            to-transparent

            shadow-[0_0_14px_rgba(252,216,0,0.55)]
          "
        />


        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">


          {/* ==================================================
              SOL TARAF
              GLASSMORPHISM ÜRÜN / MODEL GÖRSELİ
          ================================================== */}

          <div
            className="
              relative

              flex
              min-h-[260px]
              flex-col
              items-center
              justify-center
              overflow-hidden

              border-b
              border-white/40

              bg-white/[0.08]

              p-5

              backdrop-blur-[14px]

              sm:min-h-[310px]
              sm:p-6

              lg:min-h-[400px]
              lg:border-b-0
              lg:border-r
              lg:border-white/40
            "
            onMouseEnter={() =>
              setIsPaused(true)
            }
            onMouseLeave={() =>
              setIsPaused(false)
            }
          >

            {/* ==================================================
                GLASS LIGHT LAYER
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute inset-0

                bg-gradient-to-br
                from-white/[0.20]
                via-white/[0.03]
                to-entes-accent/[0.03]
              "
            />


            {/* ÜST SOL SOFT WHITE LIGHT */}

            <div
              className="
                pointer-events-none
                absolute
                -left-20
                -top-24

                h-[300px]
                w-[300px]

                rounded-full

                bg-white/25

                blur-3xl
              "
            />


            {/* ==================================================
                MODEL CAROUSEL
            ================================================== */}

            {modelPreviews.length >
              0 &&
            currentModel ? (
              <>

                {/* MODEL GÖRSELİ */}

                <div className="relative z-10 flex h-[190px] w-full items-center justify-center sm:h-[230px] lg:h-[285px]">

                  {/* SOFT YELLOW GLOW */}

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/14 blur-3xl sm:h-[205px] sm:w-[300px] lg:h-[235px] lg:w-[350px]" />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[145px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/10 blur-2xl sm:h-[175px] sm:w-[250px] lg:h-[205px] lg:w-[300px]" />


                  {/* ÜRÜN */}

                  <div className="relative z-10 h-[170px] w-[210px] sm:h-[210px] sm:w-[260px] lg:h-[260px] lg:w-[310px]">

                    <Image
                      key={
                        currentModel.image
                      }
                      src={
                        currentModel.image
                      }
                      alt={`${product.name} - ${currentModel.name}`}
                      fill
                      sizes="(max-width: 640px) 210px, (max-width: 1024px) 260px, 310px"
                      className="
                        object-contain

                        drop-shadow-[0_14px_24px_rgba(15,23,42,0.16)]
                      "
                      priority={
                        currentIndex === 0
                      }
                    />

                  </div>

                </div>


                {/* MODEL ADI */}

                <div className="relative z-10 mt-4 rounded-xl bg-white/50 px-4 py-2 text-center backdrop-blur-md">

                  <p className="text-sm font-semibold leading-snug text-entes-text sm:text-[15px]">
                    {
                      currentModel.name
                    }
                  </p>


                  {modelPreviews.length >
                    1 && (

                    <p className="mt-1 text-xs font-medium text-entes-text-soft">
                      {currentIndex + 1}
                      {" / "}
                      {
                        modelPreviews.length
                      }
                    </p>

                  )}

                </div>


                {/* ==================================================
                    SOL / SAĞ OKLAR
                ================================================== */}

                {modelPreviews.length >
                  1 && (
                  <>

                    <button
                      type="button"
                      onClick={
                        goToPrevious
                      }
                      aria-label="Önceki model"
                      className="
                        absolute left-3 top-1/2 z-20

                        flex h-10 w-10
                        -translate-y-1/2
                        items-center justify-center

                        rounded-full

                        border border-white/60

                        bg-white/55

                        text-xl font-semibold

                        shadow-sm

                        backdrop-blur-xl

                        transition

                        hover:border-entes-accent
                        hover:bg-entes-accent

                        sm:left-5
                      "
                    >
                      ‹
                    </button>


                    <button
                      type="button"
                      onClick={
                        goToNext
                      }
                      aria-label="Sonraki model"
                      className="
                        absolute right-3 top-1/2 z-20

                        flex h-10 w-10
                        -translate-y-1/2
                        items-center justify-center

                        rounded-full

                        border border-white/60

                        bg-white/55

                        text-xl font-semibold

                        shadow-sm

                        backdrop-blur-xl

                        transition

                        hover:border-entes-accent
                        hover:bg-entes-accent

                        sm:right-5
                      "
                    >
                      ›
                    </button>

                  </>
                )}


                {/* ==================================================
                    CAROUSEL NOKTALARI
                ================================================== */}

                {modelPreviews.length >
                  1 && (

                  <div className="relative z-10 mt-3 flex flex-wrap items-center justify-center gap-2">

                    {modelPreviews.map(
                      (
                        model,
                        index
                      ) => (

                        <button
                          key={`${model.name}-${index}`}
                          type="button"
                          onClick={() =>
                            setCurrentIndex(
                              index
                            )
                          }
                          aria-label={`${model.name} modelini göster`}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index ===
                            currentIndex
                              ? "w-7 bg-entes-accent shadow-[0_0_10px_rgba(252,216,0,0.55)]"
                              : "w-2 bg-black/20 hover:bg-black/40"
                          }`}
                        />

                      )
                    )}

                  </div>

                )}

              </>
            ) : product.image ? (

              /* ==================================================
                  TEK ÜRÜN GÖRSELİ
              ================================================== */

              <div className="relative z-10 flex h-[200px] w-full items-center justify-center sm:h-[245px] lg:h-[320px]">

                {/* SOFT YELLOW GLOW */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/18 blur-3xl sm:h-[220px] sm:w-[320px] lg:h-[270px] lg:w-[390px]" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/12 blur-2xl sm:h-[180px] sm:w-[260px] lg:h-[220px] lg:w-[320px]" />


                {/* PRODUCT */}

                <div className="relative z-10 h-[185px] w-[220px] sm:h-[225px] sm:w-[280px] lg:h-[290px] lg:w-[350px]">

                  <Image
                    src={
                      product.image
                    }
                    alt={
                      product.name
                    }
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 350px"
                    className="
                      object-contain

                      drop-shadow-[0_14px_24px_rgba(15,23,42,0.16)]
                    "
                    priority
                  />

                </div>

              </div>

            ) : (

              /* ==================================================
                  GÖRSEL YOK
              ================================================== */

              <div className="relative z-10 text-center text-entes-text-muted">

                <div className="text-5xl">
                  ◈
                </div>

                <p className="mt-3 text-sm">
                  Ürün görseli
                </p>

              </div>

            )}

          </div>


          {/* ==================================================
              SAĞ TARAF
              TAM BEYAZ ÜRÜN BİLGİLERİ
          ================================================== */}

          <div
            className="
              flex
              flex-col
              justify-center

              bg-white

              p-5
              sm:p-7
              lg:p-8
              xl:p-9
            "
          >

            {/* KATEGORİ */}

            {category && (

              <span className="mb-3 inline-block w-fit rounded-full bg-entes-accent/10 px-3.5 py-1.5 text-[13px] font-semibold text-entes-text">
                {
                  category.label
                }
              </span>

            )}


            {/* ÜRÜN ADI */}

            <h1 className="mt-5 max-w-3xl break-words text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-entes-text sm:text-[33px] lg:text-[38px]">
              {product.name}
            </h1>


            {/* ==================================================
                EKOSİSTEMDEKİ ROLÜ
            ================================================== */}

            <div className="mt-5 border-l-[5px] border-entes-accent pl-5">

              <p className="text-[15px] font-semibold uppercase tracking-[0.1em] text-entes-text-soft">
                Ekosistemdeki Rolü
              </p>


              <p className="mt-2.5 max-w-2xl text-[15px] font-semibold leading-6 text-entes-text sm:text-[16px]">
                {product.role}
              </p>

            </div>


            {/* ==================================================
                ÜRÜN AÇIKLAMASI
            ================================================== */}

            <div className="mt-5">

              <p className="max-w-2xl text-[14px] font-normal leading-7 text-entes-text-muted sm:text-[15px]">
                {
                  product.description
                }
              </p>

            </div>


            {/* ==================================================
                BUTON HİYERARŞİSİ

                PRIMARY:
                Ürün Serilerini Gör /
                Tüm Modelleri Gör

                SECONDARY:
                Broşür / Fiyat Listesi
            ================================================== */}

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">


              {/* ==================================================
                  PRIMARY CTA
                  ÜRÜN SERİLERİ
              ================================================== */}

              {product.seriesPages &&
              product.seriesPages.length >
                0 &&
              product.websiteUrl ? (

                <button
                  type="button"
                  onClick={() =>
                    setIsSeriesOpen(
                      true
                    )
                  }
                  className="
                    group

                    inline-flex
                    w-full
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-entes-accent

                    bg-entes-accent

                    px-5
                    py-2.5

                    text-[13px]
                    font-bold
                    text-black

                    shadow-[0_0_16px_rgba(252,216,0,0.26)]

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:brightness-105

                    hover:shadow-[0_0_14px_rgba(252,216,0,0.65),0_0_34px_rgba(252,216,0,0.32)]

                    sm:w-auto
                    sm:px-6
                    sm:text-sm
                  "
                >
                  Ürün Serilerini Gör


                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>

              ) : product.websiteUrl ? (

                /* ==================================================
                    PRIMARY CTA
                    TÜM MODELLER
                ================================================== */

                <a
                  href={
                    product.websiteUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    inline-flex
                    w-full
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-entes-accent

                    bg-entes-accent

                    px-5
                    py-2.5

                    text-[13px]
                    font-bold
                    text-black

                    shadow-[0_0_16px_rgba(252,216,0,0.26)]

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:brightness-105

                    hover:shadow-[0_0_14px_rgba(252,216,0,0.65),0_0_34px_rgba(252,216,0,0.32)]

                    sm:w-auto
                    sm:px-6
                    sm:text-sm
                  "
                >
                  Tüm Modelleri Gör


                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>

                </a>

              ) : null}


              {/* ==================================================
                  SECONDARY
                  BROŞÜR
              ================================================== */}

              {product.brochureUrl && (

                <a
                  href={
                    product.brochureUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-entes-border

                    bg-transparent

                    px-4
                    py-2.5

                    text-[13px]
                    font-semibold
                    text-entes-text

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-entes-accent
                    hover:bg-entes-accent/[0.07]

                    sm:w-auto
                    sm:px-5
                    sm:text-sm
                  "
                >
                  Broşür
                </a>

              )}


              {/* ==================================================
                  SECONDARY
                  FİYAT LİSTESİ
              ================================================== */}

              {product.priceListUrl && (

                <a
                  href={
                    product.priceListUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-entes-border

                    bg-transparent

                    px-4
                    py-2.5

                    text-[13px]
                    font-semibold
                    text-entes-text

                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-entes-accent
                    hover:bg-entes-accent/[0.07]

                    sm:w-auto
                    sm:px-5
                    sm:text-sm
                  "
                >
                  Fiyat Listesi
                </a>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          ÜRÜN SERİLERİ MODALI
      ================================================== */}

      {isSeriesOpen &&
        product.seriesPages &&
        product.seriesPages.length >
          0 &&
        product.websiteUrl && (

          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
            onClick={() =>
              setIsSeriesOpen(
                false
              )
            }
          >

            <div
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-entes-border bg-white p-5 shadow-2xl sm:p-7"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* ==================================================
                  HEADER
              ================================================== */}

              <div className="flex items-start justify-between gap-5">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-entes-text-soft">
                    ENTES Ürün Serileri
                  </p>


                  <h3 className="mt-2 text-2xl font-bold text-entes-text">
                    {product.name}
                  </h3>


                  <p className="mt-2 text-sm leading-6 text-entes-text-muted">
                    İncelemek istediğiniz
                    ürün serisini seçin.
                  </p>

                </div>


                <button
                  type="button"
                  onClick={() =>
                    setIsSeriesOpen(
                      false
                    )
                  }
                  aria-label="Kapat"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-entes-border bg-white text-lg font-semibold transition hover:border-entes-accent hover:bg-entes-accent/10"
                >
                  ×
                </button>

              </div>


              {/* ==================================================
                  SERİLER
              ================================================== */}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {product.seriesPages.map(
                  (series) => {
                    const seriesUrl =
                      new URL(
                        series.path,
                        product.websiteUrl
                      ).toString();


                    return (

                      <a
                        key={
                          series.name
                        }
                        href={
                          seriesUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-[82px] items-center justify-between gap-4 rounded-2xl border border-entes-border bg-entes-surface-muted/40 p-4 transition hover:-translate-y-0.5 hover:border-entes-accent hover:bg-entes-accent/10 hover:shadow-sm"
                      >

                        <div>

                          <p className="text-sm font-bold text-entes-text">
                            {
                              series.name
                            }
                          </p>


                          <p className="mt-1 text-xs text-entes-text-soft">
                            Resmi ENTES
                            sayfası
                          </p>

                        </div>


                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-base font-bold text-entes-text transition group-hover:bg-entes-accent">
                          ↗
                        </span>

                      </a>

                    );
                  }
                )}

              </div>


              {/* ==================================================
                  FOOTER
              ================================================== */}

              <div className="mt-6 border-t border-entes-border pt-4">

                <p className="text-xs leading-5 text-entes-text-soft">
                  Seri seçildiğinde
                  ENTES'in resmi ürün
                  sayfası yeni sekmede
                  açılır.
                </p>

              </div>

            </div>

          </div>

        )}

    </>
  );
}