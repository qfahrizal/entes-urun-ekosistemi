"use client";

import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { products } from "@/data/products";
import { relations } from "@/data/relations";

import type {
  Product,
  Relation,
  RelationStatus,
} from "@/types/ecosystem";


/* ==================================================
   PROPS
================================================== */

type RelatedProductsProps = {
  product: Product;

  onProductSelect: (
    product: Product
  ) => void;
};


type StatusFilter =
  | "all"
  | RelationStatus;


type RelatedItem = {
  product: Product;
  relation: Relation;
  status: RelationStatus;
  title: string;
};


/* ==================================================
   ÖNERİ SEVİYELERİ
================================================== */

const statusKeys: RelationStatus[] = [
  "required",
  "conditional",
  "optional",
  "alternative",
  "related",
];


const statusLabels: Record<
  RelationStatus,
  string
> = {
  required: "Gerekli",
  conditional: "Koşula Bağlı",
  optional: "Opsiyonel",
  alternative: "Alternatif",
  related: "İlgili Ürün",
};

const statusDescriptions: Record<
  RelationStatus,
  string
> = {
  required:
    "Seçili ürünün ilgili çözüm senaryosunda tamamlanması veya kullanılabilmesi için güçlü biçimde birlikte değerlendirilmesi gereken ürünü ifade eder.",

  conditional:
    "Tesis yapısına, ürün modeline, kullanım senaryosuna veya teknik ihtiyaca göre birlikte değerlendirilmesi gereken ürünü ifade eder.",

  optional:
    "Ana çözüm için zorunlu olmayan ancak ek işlev, izleme, haberleşme, koruma veya sistem bütünlüğü sağlayabilecek tamamlayıcı ürünü ifade eder.",

  alternative:
    "Aynı veya benzer ihtiyacın farklı kapsam ya da yöntemle karşılanabildiği alternatif ürün yaklaşımını ifade eder.",
  related:
    "Seçili ürünün alternatifi olmayan ancak aynı sistem veya uygulamada bağlantılı bir ihtiyaca çözüm sunduğu için birlikte değerlendirilebilecek ürünü ifade eder.",
  };


const statusOrder: Record<
  RelationStatus,
  number
> = {
  required: 0,
  conditional: 1,
  optional: 2,
  alternative: 3,
  related: 4,
};


const statusStyles: Record<
  RelationStatus,
  string
> = {
  required:
    "border-red-200 bg-red-50 text-red-700",

  conditional:
    "border-amber-200 bg-amber-50 text-amber-800",

  optional:
    "border-blue-200 bg-blue-50 text-blue-700",

  alternative:
    "border-violet-200 bg-violet-50 text-violet-700",
  related:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
};


/* ==================================================
   AKIM TRAFOSU ÜRÜN GRUPLARI

   Bir cihaz için birden fazla CT "Gerekli"
   görünüyorsa kullanıcı tümünü birlikte
   almak zorunda değildir.

   Uygulamaya uygun CT tipi seçilir.
================================================== */

const currentTransformerProductIds =
  new Set<string>([
    "og-akim-trafolari",
    "a-serisi-ag-akim-trafolari",
    "ayrilabilir-akim-trafolari",
    "clamp-tip-ayrilabilir-akim-trafolari",
    "uc-fazli-akim-trafolari",
  ]);


/* ==================================================
   YÖN BAZLI RELATION HELPER'LARI
================================================== */

/*
 * Seçili ürün relation'ın source tarafındaysa
 * sourceStatus kullanılır.
 *
 * Target tarafındaysa targetStatus kullanılır.
 *
 * Eski kayıt desteği için status fallback'i
 * bırakılmıştır.
 */

function getRelationStatus(
  relation: Relation,
  currentProductId: string
): RelationStatus {
  const isSource =
    relation.sourceProductId ===
    currentProductId;

  if (isSource) {
    return (
      relation.sourceStatus ??
      relation.status ??
      "conditional"
    );
  }

  return (
    relation.targetStatus ??
    relation.status ??
    "conditional"
  );
}


/*
 * İlişki başlığı da yön bazlıdır.
 */

function getRelationTitle(
  relation: Relation,
  currentProductId: string
): string {
  const isSource =
    relation.sourceProductId ===
    currentProductId;

  if (isSource) {
    return (
      relation.sourceTitle ??
      relation.title ??
      "Ürün İlişkisi"
    );
  }

  return (
    relation.targetTitle ??
    relation.title ??
    "Ürün İlişkisi"
  );
}


/* ==================================================
   COMPONENT
================================================== */

export default function RelatedProducts({
  product,
  onProductSelect,
}: RelatedProductsProps) {
  const scrollAreaRef =
    useRef<HTMLDivElement>(null);


  const [
    selectedRelationId,
    setSelectedRelationId,
  ] = useState<string | null>(null);


  const [
    statusFilter,
    setStatusFilter,
  ] = useState<StatusFilter>("all");


  /* ==================================================
     ÜRÜN DEĞİŞTİĞİNDE RESET
  ================================================== */

  useEffect(() => {
    setStatusFilter("all");
    setSelectedRelationId(null);
  }, [product.id]);


  /* ==================================================
     İLİŞKİLİ ÜRÜNLER
  ================================================== */

  const relatedItems =
    useMemo<RelatedItem[]>(() => {
      const relevantRelations =
        relations.filter(
          (relation) =>
            relation.sourceProductId ===
              product.id ||
            relation.targetProductId ===
              product.id
        );


      const items =
        relevantRelations
          .map((relation) => {
            const isSource =
              relation.sourceProductId ===
              product.id;


            const otherProductId =
              isSource
                ? relation.targetProductId
                : relation.sourceProductId;


            const relatedProduct =
              products.find(
                (item) =>
                  item.id ===
                  otherProductId
              );


            if (!relatedProduct) {
              return null;
            }


            const status =
              getRelationStatus(
                relation,
                product.id
              );


            const title =
              getRelationTitle(
                relation,
                product.id
              );


            return {
              product: relatedProduct,
              relation,
              status,
              title,
            };
          })
          .filter(
            (
              item
            ): item is RelatedItem =>
              item !== null
          );


      return items.sort(
        (a, b) =>
          statusOrder[a.status] -
          statusOrder[b.status]
      );
    }, [product.id]);


  /* ==================================================
     FİLTRELENMİŞ ÜRÜNLER
  ================================================== */

  const filteredItems =
    useMemo(() => {
      if (
        statusFilter === "all"
      ) {
        return relatedItems;
      }

      return relatedItems.filter(
        (item) =>
          item.status ===
          statusFilter
      );
    }, [
      relatedItems,
      statusFilter,
    ]);


  /* ==================================================
     AKTİF RELATION DETAYI
  ================================================== */

  const selectedItem =
    useMemo(() => {
      if (!selectedRelationId) {
        return undefined;
      }

      return relatedItems.find(
        (item) =>
          item.relation.id ===
          selectedRelationId
      );
    }, [
      relatedItems,
      selectedRelationId,
    ]);


  /* ==================================================
     MEVCUT ÖNERİ SEVİYELERİ
  ================================================== */

  const availableStatuses =
    useMemo(() => {
      return new Set<RelationStatus>(
        relatedItems.map(
          (item) =>
            item.status
        )
      );
    }, [relatedItems]);


  /* ==================================================
     AKIM TRAFOSU SEÇİM KONTROLÜ
  ================================================== */

  const requiredCurrentTransformerCount =
    useMemo(() => {
      return relatedItems.filter(
        (item) =>
          item.status ===
            "required" &&
          currentTransformerProductIds.has(
            item.product.id
          )
      ).length;
    }, [relatedItems]);


  const hasCurrentTransformerChoice =
    requiredCurrentTransformerCount > 1;


  /* ==================================================
     STATUS SAYISI
  ================================================== */

  const getStatusCount = (
    status: RelationStatus
  ) => {
    return relatedItems.filter(
      (item) =>
        item.status === status
    ).length;
  };


  /* ==================================================
     CAROUSEL
  ================================================== */

  const scroll = (
    direction: "left" | "right"
  ) => {
    scrollAreaRef.current?.scrollBy({
      left:
        direction === "left"
          ? -500
          : 500,

      behavior: "smooth",
    });
  };


  /* ==================================================
     RENDER
  ================================================== */

  return (
    <>

      {/* ==================================================
          İLİŞKİLİ ÜRÜNLER
      ================================================== */}

      <section className="mt-5 sm:mt-6">


        {/* ==================================================
            BAŞLIK
        ================================================== */}

        <div className="mt-8 sm:mt-12 flex items-end justify-between gap-4">

          <div>

            <div className="flex flex-wrap items-center gap-5">

              <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em] text-entes-text sm:text-[30px]">
                İlişkili Ürünler
              </h2>

              <span className="rounded-full bg-entes-accent/20 px-3 py-1 text-xs font-bold text-entes-text">
                {relatedItems.length}
              </span>

            </div>

          </div>


          {/* ==================================================
              CAROUSEL OKLARI
          ================================================== */}

          {filteredItems.length >
            0 && (

            <div className="hidden gap-2 sm:flex">

              <button
                type="button"
                onClick={() =>
                  scroll("left")
                }
                aria-label="Önceki ilişkili ürünler"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-entes-border bg-white text-lg transition hover:border-entes-accent hover:bg-entes-accent"
              >
                ←
              </button>


              <button
                type="button"
                onClick={() =>
                  scroll("right")
                }
                aria-label="Sonraki ilişkili ürünler"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-entes-border bg-white text-lg transition hover:border-entes-accent hover:bg-entes-accent"
              >
                →
              </button>

            </div>

          )}

        </div>


        {/* ==================================================
            ÖNERİ SEVİYESİ FİLTRELERİ
        ================================================== */}

        {relatedItems.length >
          0 && (
          <>

            <div className="mt-5 flex gap-2 overflow-x-auto pb-1">


              {/* TÜMÜ */}

              <button
                type="button"
                onClick={() =>
                  setStatusFilter(
                    "all"
                  )
                }
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
                  statusFilter ===
                  "all"
                    ? "border-entes-accent bg-entes-accent text-black"
                    : "border-entes-border bg-white text-entes-text-muted hover:border-entes-accent"
                }`}
              >
                Tümü (
                {relatedItems.length})
              </button>


              {/* STATUS FİLTRELERİ */}

              {statusKeys.map(
                (status) => {
                  if (
                    !availableStatuses.has(
                      status
                    )
                  ) {
                    return null;
                  }


                  return (
                    <button
                      key={status}
                      type="button"
                      onClick={() =>
                        setStatusFilter(
                          status
                        )
                      }
                      className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
                        statusFilter ===
                        status
                          ? statusStyles[
                              status
                            ]
                          : "border-entes-border bg-white text-entes-text-muted hover:border-entes-accent"
                      }`}
                    >
                      {
                        statusLabels[
                          status
                        ]
                      }{" "}
                      (
                      {getStatusCount(
                        status
                      )}
                      )
                    </button>
                  );
                }
              )}

            </div>


            {/* ==================================================
                SEÇİLİ STATUS AÇIKLAMASI
            ================================================== */}

            {statusFilter !==
              "all" && (

              <div className="mt-4 rounded-2xl border border-entes-border bg-white px-4 py-4 sm:px-5">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                  <span
                    className={`inline-flex w-fit shrink-0 rounded-full border px-3 py-1.5 text-xs font-bold sm:text-sm ${
                      statusStyles[
                        statusFilter
                      ]
                    }`}
                  >
                    {
                      statusLabels[
                        statusFilter
                      ]
                    }
                  </span>


                  <p className="text-sm leading-6 text-entes-text-muted sm:translate-y-[1px] sm:text-base sm:leading-7">
                    {
                      statusDescriptions[
                        statusFilter
                      ]
                    }
                  </p>

                </div>

              </div>

            )}


            {/* ==================================================
                AKIM TRAFOSU SEÇİM UYARISI
            ================================================== */}

            {hasCurrentTransformerChoice && (

              <div className="mt-4 rounded-2xl border border-entes-accent/50 bg-entes-accent/10 px-4 py-4 sm:px-5">

                <div className="flex items-start gap-3">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-entes-accent text-sm font-bold text-black">
                    i
                  </div>


                  <div>

                    <p className="text-sm font-bold text-entes-text">
                      Akım Trafosu Seçimi
                    </p>


                    <p className="mt-1 text-[13px] leading-6 text-entes-text-muted sm:text-sm">
                      Birden fazla akım
                      trafosu gerekli olarak
                      gösterilebilir.
                      Uygulamaya uygun tip
                      seçilir; tüm akım
                      trafosu ürün gruplarının
                      birlikte kullanılması
                      gerekmez.
                    </p>

                  </div>

                </div>

              </div>

            )}

          </>
        )}


        {/* ==================================================
            ÜRÜN KARTLARI
        ================================================== */}

        {relatedItems.length >
        0 ? (
          filteredItems.length >
          0 ? (

            <div
              ref={scrollAreaRef}
              className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-5 pt-2 pr-4 touch-pan-x sm:gap-5"
            >

              {filteredItems.map(
                ({
                  product:
                    relatedProduct,
                  relation,
                  status,
                  title,
                }) => {
                  const showCtChoice =
                    hasCurrentTransformerChoice &&
                    status === "required" &&
                    currentTransformerProductIds.has(
                      relatedProduct.id
                    );


                  return (
                    <div
                      key={
                        relation.id
                      }
                      className="min-w-[78vw] max-w-[78vw] snap-start overflow-hidden rounded-2xl border border-entes-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-entes-accent hover:shadow-lg sm:min-w-[260px] sm:max-w-[260px] lg:min-w-[230px] lg:max-w-[230px]"
                    >

                      {/* ==================================================
                          ÜRÜN GÖRSELİ
                      ================================================== */}

                      <button
                        type="button"
                        onClick={() =>
                          onProductSelect(
                            relatedProduct
                          )
                        }
                        className="block w-full text-left"
                      >

                        <div className="relative flex h-[150px] items-center justify-center overflow-hidden bg-entes-surface-muted p-5">
                          {relatedProduct.image ? (
                            <>
                              {/* Soft yellow glow */}
                              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/14 blur-2xl" />

                              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-entes-accent/10 blur-xl" />

                              <div className="relative z-10 flex items-center justify-center">
                                <Image
                                  src={relatedProduct.image}
                                  alt={relatedProduct.name}
                                  width={210}
                                  height={140}
                                  className="max-h-[120px] w-auto object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.10)]"
                                />
                              </div>
                            </>
                          ) : (
                            <span className="text-3xl text-entes-text-muted">
                              ◈
                            </span>
                          )}
                        </div>

                      </button>


                      {/* ==================================================
                          KART İÇERİĞİ
                      ================================================== */}

                      <div className="flex min-h-[220px] flex-col px-4 pb-4 pt-4">


                        {/* ÜRÜN ADI */}

                        <button
                          type="button"
                          onClick={() =>
                            onProductSelect(
                              relatedProduct
                            )
                          }
                          className="text-left"
                        >

                          <h3 className="min-h-[64px] text-base font-semibold leading-6 text-entes-text sm:text-[17px]">
                            {
                              relatedProduct.name
                            }
                          </h3>

                        </button>


                        {/* ==================================================
                            İLİŞKİ ETİKETLERİ
                        ================================================== */}

                        <div className="mt-3 flex flex-col items-start gap-2">

                          <span className="rounded-full bg-entes-surface-muted px-2.5 py-1 text-[10px] font-semibold text-entes-text">
                            {title}
                          </span>


                          <span
                            className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${
                              statusStyles[
                                status
                              ]
                            }`}
                          >
                            {
                              statusLabels[
                                status
                              ]
                            }
                          </span>


                          {/* CT ONE-OF MESAJI */}

                          {showCtChoice && (

                            <span className="rounded-full border border-entes-accent/60 bg-entes-accent/10 px-2.5 py-1 text-[10px] font-semibold text-entes-text">
                              Uygun tip seçilir
                            </span>

                          )}

                        </div>


                        {/* ==================================================
                            ALT AKSİYONLAR
                        ================================================== */}

                        <div className="mt-auto flex items-center justify-between gap-3 pt-5">

                          <button
                            type="button"
                            onClick={() =>
                              onProductSelect(
                                relatedProduct
                              )
                            }
                            className="text-left text-[11px] font-medium text-entes-text-muted transition hover:text-entes-text hover:underline"
                          >
                            Ürünü İncele →
                          </button>


                          <button
                            type="button"
                            onClick={() =>
                              setSelectedRelationId(
                                relation.id
                              )
                            }
                            aria-label={`${relatedProduct.name} ilişki detayını göster`}
                            title="İlişki detayları"
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-entes-border bg-white text-sm font-bold text-entes-text-muted transition hover:border-entes-accent hover:bg-entes-accent hover:text-black"
                          >
                            ?
                          </button>

                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          ) : (

            /* ==================================================
                BOŞ FİLTRE
            ================================================== */

            <div className="mt-5 rounded-2xl border border-dashed border-entes-border p-8 text-center">

              <p className="text-sm font-bold">
                Bu filtrede ilişkili
                ürün bulunmuyor.
              </p>


              <button
                type="button"
                onClick={() =>
                  setStatusFilter(
                    "all"
                  )
                }
                className="mt-3 text-xs font-semibold underline"
              >
                Tüm ilişkileri göster
              </button>

            </div>

          )

        ) : (

          /* ==================================================
              HİÇ RELATION YOK
          ================================================== */

          <div className="mt-5 rounded-2xl border border-dashed border-entes-border bg-entes-surface-muted/40 p-10 text-center">

            <div className="text-3xl text-entes-text-muted">
              ◈
            </div>


            <h3 className="mt-4 text-sm font-bold">
              Tanımlanmış ilişkili ürün
              bulunmuyor
            </h3>


            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-entes-text-muted">
              Bu ürün grubu için mevcut
              ekosistem modeli içerisinde
              ürün ilişkisi
              tanımlanmamıştır.
            </p>

          </div>

        )}

      </section>


      {/* ==================================================
          İLİŞKİ DETAY MODALI
      ================================================== */}

      {selectedItem && (

        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-0 sm:items-center sm:p-4"
          onClick={() =>
            setSelectedRelationId(
              null
            )
          }
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Ürün ilişkisi detayı"
            onClick={(event) =>
              event.stopPropagation()
            }
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:max-h-[85vh] sm:rounded-3xl sm:p-6 md:p-8"
          >


            {/* ==================================================
                MODAL HEADER
            ================================================== */}

            <div className="flex items-start justify-between gap-4">

              <div className="min-w-0">

                <p className="text-xs font-bold uppercase tracking-wider text-entes-text-muted">
                  İlişki Detayı
                </p>


                <h3 className="mt-2 break-words text-2xl font-bold leading-tight text-entes-text">
                  {product.name}
                </h3>


                <p className="mt-2 break-words text-sm text-entes-text-muted">
                  →{" "}
                  {
                    selectedItem
                      .product.name
                  }
                </p>

              </div>


              <button
                type="button"
                onClick={() =>
                  setSelectedRelationId(
                    null
                  )
                }
                aria-label="Detayı kapat"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-entes-border text-lg transition hover:border-entes-accent hover:bg-entes-accent"
              >
                ×
              </button>

            </div>


            {/* ==================================================
                ETİKETLER
            ================================================== */}

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-entes-surface-muted px-3 py-1.5 text-xs font-semibold">
                {
                  selectedItem.title
                }
              </span>


              <span
                className={`rounded-full border px-3 py-1.5 text-xs font-bold ${
                  statusStyles[
                    selectedItem.status
                  ]
                }`}
              >
                {
                  statusLabels[
                    selectedItem.status
                  ]
                }
              </span>


              {hasCurrentTransformerChoice &&
                selectedItem.status ===
                  "required" &&
                currentTransformerProductIds.has(
                  selectedItem.product.id
                ) && (

                  <span className="rounded-full border border-entes-accent/60 bg-entes-accent/10 px-3 py-1.5 text-xs font-semibold text-entes-text">
                    Uygun tip seçilir
                  </span>

                )}

            </div>


            {/* ==================================================
                ÖNERİ SEVİYESİ
            ================================================== */}

            <div className="mt-5 rounded-2xl border border-entes-border bg-entes-surface-muted/60 p-4">

              <p className="text-xs font-bold uppercase tracking-wider text-entes-text-muted">
                Öneri Seviyesi
              </p>


              <p className="mt-2 text-sm leading-6 text-entes-text-muted">
                {
                  statusDescriptions[
                    selectedItem.status
                  ]
                }
              </p>

            </div>


            {/* ==================================================
                CT SEÇİM NOTU
            ================================================== */}

            {hasCurrentTransformerChoice &&
              selectedItem.status ===
                "required" &&
              currentTransformerProductIds.has(
                selectedItem.product.id
              ) && (

                <div className="mt-4 rounded-2xl border border-entes-accent/50 bg-entes-accent/10 p-4">

                  <p className="text-sm font-bold text-entes-text">
                    Akım Trafosu Seçimi
                  </p>


                  <p className="mt-2 text-sm leading-6 text-entes-text-muted">
                    Bu ürün, seçili
                    uygulama için uygun
                    akım trafosu
                    seçeneklerinden biridir.
                    Listelenen tüm akım
                    trafosu tiplerinin
                    birlikte kullanılması
                    gerekmez.
                  </p>

                </div>

              )}


            {/* ==================================================
                İLİŞKİ DETAYLARI
            ================================================== */}

            <div className="mt-8 space-y-6">


              {/* NEDEN */}

              <div>

                <h4 className="text-sm font-bold">
                  Neden ilişkili?
                </h4>


                <p className="mt-2 text-[15px] leading-7 text-entes-text-muted">
                  {
                    selectedItem
                      .relation.reason
                  }
                </p>

              </div>


              {/* NE ZAMAN */}

              {selectedItem.relation
                .whenUsed && (

                <div>

                  <h4 className="text-sm font-bold">
                    Ne zaman kullanılır?
                  </h4>


                  <p className="mt-2 text-[15px] leading-7 text-entes-text-muted">
                    {
                      selectedItem
                        .relation
                        .whenUsed
                    }
                  </p>

                </div>

              )}


              {/* NE ZAMAN GEREKMEZ */}

              {selectedItem.relation
                .whenNotRequired && (

                <div>

                  <h4 className="text-sm font-bold">
                    Ne zaman gerekli
                    olmayabilir?
                  </h4>


                  <p className="mt-2 text-[15px] leading-7 text-entes-text-muted">
                    {
                      selectedItem
                        .relation
                        .whenNotRequired
                    }
                  </p>

                </div>

              )}


              {/* TEKNİK NOT */}

              {selectedItem.relation
                .technicalNote && (

                <div className="rounded-2xl bg-entes-surface-muted p-4">

                  <h4 className="text-sm font-bold">
                    Teknik Not
                  </h4>


                  <p className="mt-2 text-[15px] leading-7 text-entes-text-muted">
                    {
                      selectedItem
                        .relation
                        .technicalNote
                    }
                  </p>

                </div>

              )}

            </div>


            {/* ==================================================
                ÜRÜNE GİT
            ================================================== */}

            <div className="mt-8 flex">

              <button
                type="button"
                onClick={() => {
                  onProductSelect(
                    selectedItem.product
                  );

                  setSelectedRelationId(
                    null
                  );
                }}
                className="w-full rounded-xl bg-entes-accent px-5 py-3 text-center text-sm font-bold transition hover:brightness-95 sm:ml-auto sm:w-auto"
              >
                Ürünü İncele →
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}