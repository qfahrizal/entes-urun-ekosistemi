"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { productCategories } from "@/data/categories";
import { products } from "@/data/products";

import type {
  MenuCategory,
  Product,
} from "@/types/ecosystem";

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

export default function SidebarDrawer({
  open,
  onClose,
  onProductSelect,
  selectedProductId,
  onHomeSelect,
  homeActive,
  requestedCategory = null,
}: SidebarDrawerProps) {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [openCategory, setOpenCategory] =
    useState<MenuCategory | null>(null);

  /*
   * Drawer her açıldığında:
   *
   * - belirli kategori kartından gelindiyse
   *   ilgili kategori açılır.
   *
   * - genel menüden gelindiyse
   *   bütün kategoriler kapalı olur.
   *
   * - önceki arama temizlenir.
   */
  useEffect(() => {
    if (!open) {
      return;
    }

    setOpenCategory(requestedCategory);
    setSearchTerm("");
  }, [open, requestedCategory]);

  const normalizedSearch = searchTerm
    .toLocaleLowerCase("tr-TR")
    .trim();

  /*
   * Arama sırasında kategori yapısını kaldırıp
   * eşleşen ürün gruplarını doğrudan göster.
   */
  const searchResults = useMemo(() => {
    if (!normalizedSearch) {
      return [];
    }

    return productCategories.flatMap(
      (category) =>
        category.families
          .filter((family) =>
            family.label
              .toLocaleLowerCase("tr-TR")
              .includes(normalizedSearch)
          )
          .map((family) => ({
            ...family,
            categoryLabel:
              category.label,
          }))
    );
  }, [normalizedSearch]);

  const handleFamilyClick = (
    productId?: string
  ) => {
    if (!productId) {
      return;
    }

    const product = products.find(
      (item) => item.id === productId
    );

    if (!product) {
      return;
    }

    onProductSelect(product);
    onClose();
  };

  const handleHomeClick = () => {
    onHomeSelect();

    setSearchTerm("");
    setOpenCategory(null);

    onClose();
  };

  return (
    <>
      {/* SAYFA KARARTMASI */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/25 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* SOLDAN AÇILAN MENÜ */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[390px] max-w-[90vw] transform overflow-y-auto border-r border-entes-border bg-entes-surface shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="sticky top-0 z-20 border-b border-entes-border bg-entes-surface px-5 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-entes-text-muted">
                ENTES ELEKTRONİK
              </p>

              {/* mt-1 yerine mt-2 veya mt-2.5 vererek boşluğu açtık */}
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

          {/* ÜRÜN ARAMA */}
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
              placeholder="Ürün veya ürün ailesi ara..."
              className="w-full rounded-xl border border-entes-border bg-white px-4 py-3 text-sm outline-none transition focus:border-entes-accent focus:ring-2 focus:ring-entes-accent/20"
            />
          </div>
        </div>

        {/* MENÜ İÇERİĞİ */}
        <div className="p-4">
          {/* ANASAYFA */}
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

          {/* ARAMA AKTİF */}
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
                          key={
                            family.id
                          }
                          type="button"
                          disabled={
                            !available
                          }
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
            <>
              {/* NORMAL KATEGORİ MENÜSÜ */}
              {productCategories.map(
                (category) => {
                  const categoryIsOpen =
                    openCategory ===
                    category.id;

                  return (
                    <section
                      key={
                        category.id
                      }
                      className="border-b border-entes-border-light py-2"
                    >
                      {/* KATEGORİ */}
                      <button
                        type="button"
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
                          {categoryIsOpen
                            ? "−"
                            : "+"}
                        </span>
                      </button>

                      {/* ÜRÜN GRUPLARI */}
                      {categoryIsOpen && (
                        <div className="mt-2 space-y-1 pl-3">
                          {category.families.map(
                            (
                              family
                            ) => {
                              const selected =
                                family.productId ===
                                selectedProductId;

                              const available =
                                Boolean(
                                  family.productId
                                );

                              return (
                                <button
                                  key={
                                    family.id
                                  }
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