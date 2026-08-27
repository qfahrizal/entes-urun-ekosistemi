export type ProductCategory =
  | "sensing"
  | "measurement"
  | "protection-control"
  | "correction"
  | "communication-energy";

export type MenuCategory =
  | "power-quality"
  | "measurement"
  | "compensation"
  | "energy-management"
  | "protection-control"
  | "current-transformers";

export type RelationStatus =
  | "required"
  | "conditional"
  | "optional"
  | "alternative";

export type RelationType =
  | "measurement-input"
  | "data-transfer"
  | "control"
  | "protection"
  | "correction"
  | "communication";

// ==================================================
// PRODUCT
// ==================================================

export interface Product {
  id: string;
  name: string;
  shortName?: string;

  category: ProductCategory;
  menuCategory: MenuCategory;

  role: string;
  description: string;

  image?: string;

  modelPreviews?: {
    name: string;
    image: string;
  }[];

  brochureUrl?: string;
  priceListUrl?: string;
  websiteUrl?: string;
}

// ==================================================
// RELATION
// ==================================================

export interface Relation {
  id: string;

  sourceProductId: string;
  targetProductId: string;

  type: RelationType;


  // --------------------------------------------------
  // ESKİ SİSTEM
  // --------------------------------------------------
  /*
   * Geçiş sürecinde henüz yeni yapıya
   * dönüştürülmemiş relation kayıtları için.
   *
   * Tüm relations.ts yeni sisteme geçirildikten
   * sonra status ve title tamamen kaldırılabilir.
   */

  status?: RelationStatus;
  title?: string;


  // --------------------------------------------------
  // SOURCE TARAFI
  // --------------------------------------------------
  /*
   * Seçili ürün sourceProductId ise
   * RelatedProducts bu alanları kullanır.
   */

  sourceStatus?: RelationStatus;
  sourceTitle?: string;


  // --------------------------------------------------
  // TARGET TARAFI
  // --------------------------------------------------
  /*
   * Seçili ürün targetProductId ise
   * RelatedProducts bu alanları kullanır.
   */

  targetStatus?: RelationStatus;
  targetTitle?: string;


  // --------------------------------------------------
  // İLİŞKİ DETAYLARI
  // --------------------------------------------------

  reason: string;

  whenUsed?: string;

  whenNotRequired?: string;

  technicalNote?: string;
}


// ==================================================
// SOLUTION PATH
// ==================================================

export interface SolutionPathStep {
  order: number;
  productId: string;
}

export interface SolutionPath {
  id: string;
  name: string;
  description: string;
  steps: SolutionPathStep[];
}