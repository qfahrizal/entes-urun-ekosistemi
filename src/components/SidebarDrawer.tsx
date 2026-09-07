"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { productCategories } from "@/data/categories";
import { products } from "@/data/products";
import { productSearchAliases } from "@/data/productSearchAliases";

import type {
  MenuCategory,
  Product,
} from "@/types/ecosystem";


/* ==================================================
   ARAMA NORMALİZASYONU
================================================== */

function normalizeSearchText(
  value: string
) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(/ı/g, "i")
    .replace(/ϕ|φ/g, "phi")
    .replace(
      /[^a-z0-9]+/g,
      " "
    )
    .trim()
    .replace(/\s+/g, " ");
}


function compactSearchText(
  value: string
) {
  return normalizeSearchText(
    value
  ).replace(/\s+/g, "");
}


/* ==================================================
   ALIAS EŞLEŞTİRME

   Örnekler:

   CT-25
   CT25
   CT 25

   aynı modele eşleşebilir.

   Ayrıca kullanıcı henüz modelin tamamını
   yazmadığında da:

   CT2 → CT-25
   CT8 → CT-80D
   MPR4 → MPR-4

   gibi eşleşmeler desteklenir.
================================================== */

function aliasMatchesSearch(
  alias: string,
  search: string
) {
  const aliasCompact =
    compactSearchText(alias);

  const searchCompact =
    compactSearchText(search);


  if (
    !aliasCompact ||
    !searchCompact
  ) {
    return false;
  }


  /* ==================================================
     TAM EŞLEŞME
  ================================================== */

  if (
    aliasCompact ===
    searchCompact
  ) {
    return true;
  }


  /* ==================================================
     KULLANICI MODELİ YAZMAYA DEVAM EDİYOR

     Örnek:

     CT2
       ↓
     CT25

     MPR4
       ↓
     MPR4D

     Çok genel aramaların fazla sonuç
     üretmemesi için minimum 3 karakter.
  ================================================== */

  if (
    searchCompact.length >= 3 &&
    searchCompact !== "ent" &&
    aliasCompact.startsWith(
      searchCompact
    )
  ) {
    return true;
  }


  /* ==================================================
     ALIAS SERİ PREFIX'İ

     Örnek:

     alias = MPR
     search = MPR4

     alias = GKRC
     search = GKRC01
  ================================================== */

  if (
    aliasCompact.length >= 3 &&
    aliasCompact !== "ent" &&
    searchCompact.startsWith(
      aliasCompact
    )
  ) {
    return true;
  }


  return false;
}


/* ==================================================
   PROPS
================================================== */

type SidebarDrawerProps = {
  open: boolean;

  onClose: () => void;

  onProductSelect: (
    product: Product
  ) => void;

  selectedProductId?: string;

  onHomeSelect: () => void;

  homeActive?: boolean;

  requestedCategory?: MenuCategory | null;
};


/* ==================================================
   COMPONENT
================================================== */

export default function SidebarDrawer({
  open,
  onClose,
  onProductSelect,
  selectedProductId,
  onHomeSelect,
  homeActive,
  requestedCategory = null,
}: SidebarDrawerProps) {

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");


  const [
    openCategory,
    setOpenCategory,
  ] = useState<MenuCategory | null>(
    null
  );


  /* ==================================================
     DRAWER AÇILDIĞINDA RESET

     - Kategori kartından gelindiyse
       ilgili kategori açılır.

     - Genel menüden gelindiyse
       kategoriler kapalı başlar.

     - Önceki arama temizlenir.
  ================================================== */

  useEffect(() => {
    if (!open) {
      return;
    }

    setOpenCategory(
      requestedCategory
    );

    setSearchTerm("");
  }, [
    open,
    requestedCategory,
  ]);


  /* ==================================================
     DRAWER AÇIKKEN

     - Escape ile kapat.
     - Arka sayfanın scroll'unu kilitle.
  ================================================== */

  useEffect(() => {
    if (!open) {
      return;
    }


    const previousOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      "hidden";


    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    open,
    onClose,
  ]);


  /* ==================================================
     NORMALİZE EDİLMİŞ ARAMA
  ================================================== */

  const normalizedSearch =
    normalizeSearchText(
      searchTerm
    );


  /* ==================================================
     ARAMA SONUÇLARI

     Arama sırasında kategori accordion yapısı
     kaldırılır ve eşleşen ürün grupları
     doğrudan gösterilir.
  ================================================== */

  const searchResults =
    useMemo(() => {
      if (!normalizedSearch) {
        return [];
      }


      const results: Array<{
        id: string;

        label: string;

        productId?: string;

        categoryLabel: string;

        matchedAlias?: string;

        score: number;

        categoryOrder: number;

        familyOrder: number;
      }> = [];


      productCategories.forEach(
        (
          category,
          categoryIndex
        ) => {

          category.families.forEach(
            (
              family,
              familyIndex
            ) => {

              const normalizedLabel =
                normalizeSearchText(
                  family.label
                );


              const labelMatches =
                normalizedLabel.includes(
                  normalizedSearch
                );


              const aliases =
                family.productId
                  ? (
                      productSearchAliases[
                        family.productId
                      ] ?? []
                    )
                  : [];


              const matchedAlias =
                aliases.find(
                  (alias) =>
                    aliasMatchesSearch(
                      alias,
                      normalizedSearch
                    )
                );


              if (
                !labelMatches &&
                !matchedAlias
              ) {
                return;
              }


              /*
               * Sıralama:
               *
               * 0 → alias tam eşleşmesi
               * 1 → alias / model prefix eşleşmesi
               * 2 → ürün adı baştan eşleşiyor
               * 3 → ürün adı içinde eşleşiyor
               */

              let score = 3;


              if (matchedAlias) {
                const aliasCompact =
                  compactSearchText(
                    matchedAlias
                  );


                const queryCompact =
                  compactSearchText(
                    normalizedSearch
                  );


                score =
                  aliasCompact ===
                  queryCompact
                    ? 0
                    : 1;
              }

              else if (
                normalizedLabel.startsWith(
                  normalizedSearch
                )
              ) {
                score = 2;
              }


              results.push({
                ...family,

                categoryLabel:
                  category.label,

                matchedAlias,

                score,

                categoryOrder:
                  categoryIndex,

                familyOrder:
                  familyIndex,
              });

            }
          );

        }
      );


      return results.sort(
        (a, b) => {

          if (
            a.score !== b.score
          ) {
            return (
              a.score -
              b.score
            );
          }


          if (
            a.categoryOrder !==
            b.categoryOrder
          ) {
            return (
              a.categoryOrder -
              b.categoryOrder
            );
          }


          return (
            a.familyOrder -
            b.familyOrder
          );

        }
      );

    }, [normalizedSearch]);


  /* ==================================================
     ÜRÜN SEÇİMİ
  ================================================== */

  const handleFamilyClick = (
    productId?: string
  ) => {
    if (!productId) {
      return;
    }


    const product =
      products.find(
        (item) =>
          item.id === productId
      );


    if (!product) {
      return;
    }


    onProductSelect(product);

    onClose();
  };


  /* ==================================================
     ANASAYFA
  ================================================== */

  const handleHomeClick = () => {
    onHomeSelect();

    setSearchTerm("");

    setOpenCategory(null);

    onClose();
  };


  /* ==================================================
     RENDER
  ================================================== */

  return (
    <>

      {/* ==================================================
          SAYFA KARARTMASI
      ================================================== */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/25 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />


      {/* ==================================================
          SOLDAN AÇILAN MENÜ
      ================================================== */}

      <aside
        aria-hidden={!open}
        className={`fixed left-0 top-0 z-50 h-screen w-[390px] max-w-[90vw] transform overflow-y-auto border-r border-entes-border bg-entes-surface shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="sticky top-0 z-20 border-b border-entes-border bg-entes-surface px-5 py-5">

          <div className="flex items-center justify-between gap-4">

            <div className="flex flex-col gap-1.5">

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-entes-text-muted">
                ENTES ELEKTRONİK
              </p>


              <h2 className="mt-2 text-xl font-bold">
                Ürünler
              </h2>

            </div>


            <button
              type="button"
              onClick={onClose}
              aria-label="Menüyü kapat"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-entes-border text-xl transition hover:border-entes-accent hover:bg-entes-accent"
            >
              ×
            </button>

          </div>


          {/* ==================================================
              ÜRÜN ARAMA
          ================================================== */}

          <div className="mt-5">

            <label
              htmlFor="urun-arama"
              className="sr-only"
            >
              Ürün Ara
            </label>


            <input
              id="urun-arama"
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              placeholder="Ürün, seri veya ürün kodu ara..."
              className="w-full rounded-xl border border-entes-border bg-white px-4 py-3 text-sm outline-none transition focus:border-entes-accent focus:ring-2 focus:ring-entes-accent/20"
            />

          </div>

        </div>


        {/* ==================================================
            MENÜ İÇERİĞİ
        ================================================== */}

        <div className="p-4">

          {/* ==================================================
              ANASAYFA
          ================================================== */}

          <button
            type="button"
            onClick={handleHomeClick}
            className={`mb-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
              homeActive
                ? "bg-entes-accent text-black"
                : "bg-entes-surface-muted hover:bg-entes-accent/20"
            }`}
          >
            <span>
              Anasayfa
            </span>
          </button>


          {/* ==================================================
              ARAMA AKTİF
          ================================================== */}

          {normalizedSearch ? (
            <>

              <div className="mb-3 flex items-center justify-between gap-3 px-2">

                <p className="text-xs font-bold uppercase tracking-wider text-entes-text-muted">
                  Arama Sonuçları
                </p>


                <span className="text-xs text-entes-text-muted">
                  {searchResults.length}
                </span>

              </div>


              {searchResults.length > 0 ? (

                <div className="space-y-2">

                  {searchResults.map(
                    (family) => {

                      const available =
                        Boolean(
                          family.productId
                        );


                      const selected =
                        family.productId ===
                        selectedProductId;


                      return (

                        <button
                          key={family.id}
                          type="button"
                          disabled={!available}
                          onClick={() =>
                            handleFamilyClick(
                              family.productId
                            )
                          }
                          className={`group w-full rounded-xl border px-4 py-3 text-left transition ${
                            selected
                              ? "border-entes-accent bg-entes-accent/10"
                              : available
                                ? "border-entes-border bg-white hover:border-entes-accent hover:bg-entes-accent/5"
                                : "cursor-default border-entes-border bg-white opacity-50"
                          }`}
                        >

                          <div className="flex items-start justify-between gap-3">

                            <div className="min-w-0">

                              <p
                                className={`text-sm leading-5 ${
                                  selected
                                    ? "font-bold"
                                    : "font-semibold"
                                }`}
                              >
                                {
                                  family.label
                                }
                              </p>


                              <p className="mt-1 text-xs leading-5 text-entes-text-muted">
                                {
                                  family.categoryLabel
                                }
                              </p>


                              {family.matchedAlias && (

                                <span className="mt-2 inline-flex rounded-full bg-entes-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-entes-text">
                                  Eşleşme:{" "}
                                  {
                                    family.matchedAlias
                                  }
                                </span>

                              )}

                            </div>


                            {available && (

                              <span className="shrink-0 pt-0.5 text-xs text-entes-text-muted transition group-hover:translate-x-0.5">
                                →
                              </span>

                            )}

                          </div>

                        </button>

                      );

                    }
                  )}

                </div>

              ) : (

                <div className="rounded-xl border border-dashed border-entes-border p-6 text-center">

                  <p className="text-sm font-semibold">
                    Sonuç bulunamadı
                  </p>


                  <p className="mt-2 text-xs leading-5 text-entes-text-muted">
                    Aramanızla eşleşen ürün
                    ailesi bulunamadı.
                  </p>


                  <button
                    type="button"
                    onClick={() =>
                      setSearchTerm("")
                    }
                    className="mt-4 text-xs font-semibold underline"
                  >
                    Aramayı temizle
                  </button>

                </div>

              )}

            </>

          ) : (

            /* ==================================================
               NORMAL KATEGORİ MENÜSÜ
            ================================================== */

            <>

              {productCategories.map(
                (category) => {

                  const categoryIsOpen =
                    openCategory ===
                    category.id;


                  return (

                    <section
                      key={category.id}
                      className="border-b border-entes-border-light py-2"
                    >

                      {/* ==================================================
                          KATEGORİ
                      ================================================== */}

                      <button
                        type="button"
                        aria-expanded={
                          categoryIsOpen
                        }
                        onClick={() =>
                          setOpenCategory(
                            (current) =>
                              current ===
                              category.id
                                ? null
                                : category.id
                          )
                        }
                        className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-3.5 text-left transition ${
                          categoryIsOpen
                            ? "bg-entes-accent/15"
                            : "hover:bg-entes-surface-muted"
                        }`}
                      >

                        <span className="text-sm font-bold leading-5">
                          {
                            category.label
                          }
                        </span>


                        <span className="shrink-0 text-xl font-light">
                          {
                            categoryIsOpen
                              ? "−"
                              : "+"
                          }
                        </span>

                      </button>


                      {/* ==================================================
                          ÜRÜN GRUPLARI
                      ================================================== */}

                      {categoryIsOpen && (

                        <div className="mt-2 space-y-1 pl-3">

                          {category.families.map(
                            (family) => {

                              const selected =
                                family.productId ===
                                selectedProductId;


                              const available =
                                Boolean(
                                  family.productId
                                );


                              return (

                                <button
                                  key={family.id}
                                  type="button"
                                  disabled={
                                    !available
                                  }
                                  onClick={() =>
                                    handleFamilyClick(
                                      family.productId
                                    )
                                  }
                                  className={`group flex w-full items-center justify-between gap-3 rounded-lg border-l-4 px-4 py-2.5 text-left text-sm transition ${
                                    selected
                                      ? "border-entes-accent bg-entes-accent/10 font-semibold text-entes-text"
                                      : available
                                        ? "border-transparent text-entes-text-muted hover:bg-entes-surface-muted hover:text-entes-text"
                                        : "cursor-default border-transparent text-entes-text-muted opacity-60"
                                  }`}
                                >

                                  <span className="leading-5">
                                    {
                                      family.label
                                    }
                                  </span>


                                  {available && (

                                    <span className="shrink-0 text-xs opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                                      →
                                    </span>

                                  )}

                                </button>

                              );

                            }
                          )}

                        </div>

                      )}

                    </section>

                  );

                }
              )}

            </>

          )}

        </div>

      </aside>

    </>
  );
}