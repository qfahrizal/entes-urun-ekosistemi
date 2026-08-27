import { productCategories } from "@/data/categories";

import type { Product } from "@/types/ecosystem";

type ProductBreadcrumbProps = {
  product: Product;
  onHomeSelect: () => void;
};

export default function ProductBreadcrumb({
  product,
  onHomeSelect,
}: ProductBreadcrumbProps) {
  const category = productCategories.find(
    (item) => item.id === product.menuCategory
  );

  return (
    <nav
      aria-label="Ürün konumu"
      className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-base text-entes-text-muted sm:mb-6 sm:text-lg"
    >
      {/* ANASAYFA */}
      <button
        type="button"
        onClick={onHomeSelect}
        className="font-medium transition hover:text-entes-text hover:underline"
      >
        Anasayfa
      </button>

      <span
        aria-hidden="true"
        className="text-entes-border"
      >
        /
      </span>

      {/* KATEGORİ */}
      <span>
        {category?.label ?? "Ürünler"}
      </span>

      <span
        aria-hidden="true"
        className="text-entes-border"
      >
        /
      </span>

      {/* SEÇİLİ ÜRÜN */}
      <span className="font-semibold text-entes-text">
        {product.name}
      </span>
    </nav>
  );
}