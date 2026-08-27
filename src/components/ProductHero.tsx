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


  /* ==================================================
     ÜRÜN DEĞİŞTİĞİNDE RESET
  ================================================== */

  useEffect(() => {
    setCurrentIndex(0);
    setIsPaused(false);
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
      window.setInterval(() => {
        setCurrentIndex(
          (previousIndex) =>
            previousIndex ===
            modelPreviews.length - 1
              ? 0
              : previousIndex + 1
        );
      }, 4000);

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
    modelPreviews[currentIndex];


  return (
    <section className="entes-tech-card overflow-hidden rounded-3xl border border-entes-border">

      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">


        {/* ==================================================
            SOL TARAF
            ÜRÜN / MODEL GÖRSELİ
        ================================================== */}

        <div
          className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden bg-entes-surface-muted p-5 sm:min-h-[310px] sm:p-6 lg:min-h-[400px]"
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
        >


          {/* ==================================================
              MODEL CAROUSEL
          ================================================== */}

          {modelPreviews.length >
            0 &&
          currentModel ? (
            <>


              {/* ==================================================
                  MODEL GÖRSELİ + SARI HIGHLIGHT
              ================================================== */}

              <div className="relative flex h-[190px] w-full items-center justify-center sm:h-[230px] lg:h-[285px]">


                {/* DIŞ SOFT GLOW */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[175px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/20 blur-2xl sm:h-[205px] sm:w-[300px] lg:h-[235px] lg:w-[350px]" />


                {/* NET SARI OVAL */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[155px] w-[225px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-entes-accent/70 bg-entes-accent/10 transition-transform duration-500 sm:h-[185px] sm:w-[280px] lg:h-[215px] lg:w-[330px]" />


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
                    className="object-contain drop-shadow-[0_12px_20px_rgba(15,23,42,0.10)]"
                    priority={
                      currentIndex === 0
                    }
                  />

                </div>

              </div>


              {/* ==================================================
                  MODEL ADI
              ================================================== */}

              <div className="relative z-10 mt-4 text-center">

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
                    className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-entes-border bg-white/95 text-xl font-semibold shadow-sm backdrop-blur transition hover:border-entes-accent hover:bg-entes-accent sm:left-5"
                  >
                    ‹
                  </button>


                  <button
                    type="button"
                    onClick={
                      goToNext
                    }
                    aria-label="Sonraki model"
                    className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-entes-border bg-white/95 text-xl font-semibold shadow-sm backdrop-blur transition hover:border-entes-accent hover:bg-entes-accent sm:right-5"
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
                            ? "w-7 bg-entes-accent"
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
                TEK ÜRÜN GÖRSELİ + SARI HIGHLIGHT
            ================================================== */

            <div className="relative flex h-[200px] w-full items-center justify-center sm:h-[245px] lg:h-[320px]">

              {/* soft outer glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/18 blur-3xl sm:h-[220px] sm:w-[320px] lg:h-[270px] lg:w-[390px]" />

              {/* inner soft glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/12 blur-2xl sm:h-[180px] sm:w-[260px] lg:h-[220px] lg:w-[320px]" />

              {/* product */}
              <div className="relative z-10 h-[185px] w-[220px] sm:h-[225px] sm:w-[280px] lg:h-[290px] lg:w-[350px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 350px"
                  className="object-contain drop-shadow-[0_12px_20px_rgba(15,23,42,0.10)]"
                  priority
                />
              </div>
            </div>

          ) : (

            /* ==================================================
                GÖRSEL YOK
            ================================================== */

            <div className="text-center text-entes-text-muted">

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
            ÜRÜN BİLGİLERİ
        ================================================== */}

        <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8 xl:p-9">


          {/* ==================================================
              KATEGORİ
          ================================================== */}

          {category && (

            <span className="mb-3 inline-block w-fit rounded-full bg-entes-accent/10 px-3.5 py-1.5 text-[13px] font-semibold text-entes-text">
              {category.label}
            </span>

          )}


          {/* ==================================================
              ÜRÜN ADI
          ================================================== */}

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
              {product.description}
            </p>

          </div>


          {/* ==================================================
              DOKÜMAN VE MODEL BUTONLARI
          ================================================== */}

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">


            {/* BROŞÜR */}

            {product.brochureUrl && (

              <a
                href={
                  product.brochureUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-entes-accent px-4 py-2.5 text-[13px] font-semibold text-black transition hover:-translate-y-0.5 hover:brightness-95 sm:w-auto sm:px-5 sm:text-sm"
              >
                Broşür
              </a>

            )}


            {/* FİYAT LİSTESİ */}

            {product.priceListUrl && (

              <a
                href={
                  product.priceListUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-entes-border bg-white px-4 py-2.5 text-[13px] font-semibold text-entes-text transition hover:-translate-y-0.5 hover:border-entes-accent hover:bg-entes-accent/10 sm:w-auto sm:px-5 sm:text-sm"
              >
                Fiyat Listesi
              </a>

            )}


            {/* TÜM MODELLER */}

            {product.websiteUrl && (

              <a
                href={
                  product.websiteUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-entes-border bg-white px-4 py-2.5 text-[13px] font-semibold text-entes-text transition hover:-translate-y-0.5 hover:border-entes-accent hover:bg-entes-accent/10 sm:w-auto sm:px-5 sm:text-sm"
              >
                Tüm Modelleri Gör
              </a>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}