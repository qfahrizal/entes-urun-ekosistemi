"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";

import ExploreHome from "@/components/ExploreHome";
import FloatingSupport from "@/components/FloatingSupport";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductHero from "@/components/ProductHero";
import RelatedProducts from "@/components/RelatedProducts";
import SidebarDrawer from "@/components/SidebarDrawer";
import { products } from "@/data/products";

import type {
  MenuCategory,
  Product,
} from "@/types/ecosystem";


export default function KesfetPage() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);


  /*
   * null = Anasayfa
   * product = Ürün detay görünümü
   */
  const [
    selectedProduct,
    setSelectedProduct,
  ] = useState<Product | null>(null);


  /*
   * Drawer açıldığında hangi kategori
   * açık gösterilecek.
   */
  const [
    requestedCategory,
    setRequestedCategory,
  ] = useState<MenuCategory | null>(null);


  /*
   * /kesfet sayfası browser tarafından
   * reload edilirse landing page'e dön.
   
  useEffect(() => {
    const navigationEntries =
      performance.getEntriesByType(
        "navigation"
      ) as PerformanceNavigationTiming[];

    const navigationEntry =
      navigationEntries[0];

    if (
      navigationEntry?.type === "reload"
    ) {
      window.location.replace("/");
    }
  }, []);*/

  /* ==================================================
   BROWSER HISTORY
================================================== */

useEffect(() => {
  /*
   * /kesfet ilk açıldığında mevcut history
   * kaydını "anasayfa" olarak işaretle.
   */
  window.history.replaceState(
    {
      productId: null,
    },
    "",
    "/kesfet"
  );


  /*
   * Browser geri / ileri butonlarını dinle.
   */
  const handlePopState = (
    event: PopStateEvent
  ) => {
    const productId =
      event.state?.productId ?? null;


    /*
     * productId yoksa Keşfet Anasayfa
     */
    if (!productId) {
      setSelectedProduct(null);
      setRequestedCategory(null);
      setMenuOpen(false);

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }


    /*
     * Önceki ürün kaydını bul
     */
    const previousProduct =
      products.find(
        (item) =>
          item.id === productId
      );


    if (previousProduct) {
      setSelectedProduct(
        previousProduct
      );

      setRequestedCategory(null);
      setMenuOpen(false);

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  };


  window.addEventListener(
    "popstate",
    handlePopState
  );


  return () => {
    window.removeEventListener(
      "popstate",
      handlePopState
    );
  };
}, []);


  /* ==================================================
     ÜRÜN SEÇİMİ
  ================================================== 

  const selectProduct = (
    product: Product
  ) => {
    setSelectedProduct(product);
    setRequestedCategory(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };*/

const selectProduct = (
  product: Product
) => {
  /*
   * Yeni ürünü browser history'ye ekle.
   */
  window.history.pushState(
    {
      productId: product.id,
    },
    "",
    "/kesfet"
  );


  setSelectedProduct(product);
  setRequestedCategory(null);
  setMenuOpen(false);


  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  /* ==================================================
     ANASAYFAYA DÖN
  ================================================== */

  const goToExploreHome = () => {
    setSelectedProduct(null);
    setRequestedCategory(null);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /* ==================================================
     GENEL MENÜ
  ================================================== */

  const openGeneralMenu = () => {
    setRequestedCategory(null);
    setMenuOpen(true);
  };


  /* ==================================================
     BELİRLİ KATEGORİYİ AÇ
  ================================================== */

  const openCategoryMenu = (
    categoryId: MenuCategory
  ) => {
    setRequestedCategory(categoryId);
    setMenuOpen(true);
  };


  return (
    <main className="entes-tech-background min-h-screen text-entes-text">


      {/* ==================================================
          HEADER
      ================================================== */}

      <header className="sticky top-0 z-30 border-b border-black/10 bg-entes-accent shadow-[0_8px_30px_rgba(15,23,42,0.08)]">

        <div className="mx-auto flex h-[84px] max-w-[1500px] items-center px-3 sm:h-[92px] sm:px-5 lg:px-8">


          {/* ==================================================
              HAMBURGER
          ================================================== */}

          <button
            type="button"
            onClick={openGeneralMenu}
            aria-label="Ürün menüsünü aç"
            className="group mr-4 flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[6px] rounded-xl border border-black/15 bg-white/75 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:mr-6 sm:h-[52px] sm:w-[52px]"
          >
            <span className="h-0.5 w-5 rounded-full bg-black" />
            <span className="h-0.5 w-5 rounded-full bg-black" />
            <span className="h-0.5 w-5 rounded-full bg-black" />
          </button>


          {/* ==================================================
              ENTES LOGO
          ================================================== */}

          <button
            type="button"
            onClick={goToExploreHome}
            aria-label="Anasayfa'ya dön"
            className="shrink-0"
          >
            <Image
              src="/brand/entes-logo.jpg"
              alt="ENTES"
              width={200}
              height={73}
              className="h-[62px] w-auto object-contain transition duration-200 hover:opacity-90 sm:h-[62px]"
              priority
            />
          </button>


          {/* ==================================================
              ÜRÜN EKOSİSTEMİ
          ================================================== */}

          <button
            type="button"
            onClick={goToExploreHome}
            className="ml-4 min-w-0 flex-1 border-l-4 border-white/90 pl-4 text-left sm:ml-6 sm:pl-6"
          >
            <h1 className="text-[28px] font-black leading-none tracking-wide text-white">
              Ürün Ekosistemi
            </h1>

            {/*<p className="mt-1.5 hidden text-[12px] font-semibold tracking-[0.09em] text-white/65 sm:block">
              ÇÖZÜM PLATFORMU
            </p>*/}
          </button>


          {/* ==================================================
              ENTES WEB SİTESİ
          ================================================== */}

          <a
            href="https://www.entes.com.tr/"
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-3 inline-flex shrink-0 items-center gap-2 rounded-xl border border-black/20 bg-white/75 px-3 py-2.5 text-xs font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:ml-5 sm:px-4 sm:py-3 sm:text-sm"
          >
            <span className="sm:hidden">
              ENTES
            </span>

            <span className="hidden sm:inline">
              ENTES Resmi Web Sitesi
            </span>

          </a>

        </div>

      </header>


      {/* ==================================================
          SIDEBAR
      ================================================== */}

      <SidebarDrawer
        open={menuOpen}
        onClose={() =>
          setMenuOpen(false)
        }
        onProductSelect={selectProduct}
        selectedProductId={
          selectedProduct?.id
        }
        onHomeSelect={
          goToExploreHome
        }
        homeActive={
          !selectedProduct
        }
        requestedCategory={
          requestedCategory
        }
      />


      {/* ==================================================
          ANA İÇERİK
      ================================================== */}

      <div className="mx-auto max-w-[1380px] px-3 py-5 sm:px-5 sm:py-8 lg:px-8 lg:py-12">

        {selectedProduct ? (
          <>

            <ProductBreadcrumb
              product={
                selectedProduct
              }
              onHomeSelect={
                goToExploreHome
              }
            />


            <ProductHero
              product={
                selectedProduct
              }
            />


            <RelatedProducts
              product={
                selectedProduct
              }
              onProductSelect={
                selectProduct
              }
            />

          </>
        ) : (

          <ExploreHome
            onProductSelect={
              selectProduct
            }
            onOpenMenu={
              openGeneralMenu
            }
            onOpenCategory={
              openCategoryMenu
            }
          />

        )}

      </div>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="mt-12 border-t border-black/10 bg-entes-accent py-8 sm:mt-16">

        <div className="mx-auto flex max-w-[1380px] flex-col gap-2 px-5 text-xs text-black/70 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <span className="font-semibold text-black">
            © 2026 ENTES Ürün Ekosistemi
          </span>

          <span className="font-medium">
            Staj projesi kapsamında
            geliştirilmiştir.
          </span>

        </div>

      </footer>


      {/* ==================================================
          FLOATING TEKNİK DESTEK
      ================================================== */}

      <FloatingSupport />

    </main>
  );
}