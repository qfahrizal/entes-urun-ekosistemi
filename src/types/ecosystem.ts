// ==================================================
// PRODUCT CATEGORIES
// ==================================================

export type ProductCategory =
  | "sensing"
  | "measurement"
  | "protection-control"
  | "correction"
  | "communication-energy";


// ==================================================
// MENU CATEGORIES
// ==================================================

export type MenuCategory =
  | "power-quality"
  | "measurement"
  | "compensation"
  | "energy-management"
  | "protection-control"
  | "current-transformers";


// ==================================================
// RELATION STATUS
// ==================================================

export type RelationStatus =
  | "required"
  | "conditional"
  | "optional"
  | "alternative"
  | "related";


// ==================================================
// RELATION TYPE
// ==================================================

export type RelationType =
  | "measurement-input"
  | "measurement-analysis"
  | "data-transfer"
  | "control"
  | "protection"
  | "correction"
  | "communication"
  | "alternative";


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

  seriesPages?: {
    name: string;
    path: string;
  }[];
}


// ==================================================
// RELATION
// ==================================================

export interface Relation {
  id: string;

  /**
   * İlişkinin iki ucundaki ürünler.
   *
   * Relation tek bir kayıt olarak tutulur fakat
   * kullanıcı hangi üründen ilişkiye baktığına göre
   * farklı status ve title gösterilebilir.
   */
  sourceProductId: string;
  targetProductId: string;

  /**
   * İlişkinin teknik karakterini belirtir.
   *
   * Bu alan kullanıcıya gösterilen ilişki statüsünden
   * bağımsızdır.
   *
   * Örnek:
   * - measurement-input
   * - correction
   * - communication
   * - protection
   */
  type: RelationType;


  // ==================================================
  // SOURCE PERSPECTIVE
  // ==================================================

  /**
   * Kullanıcının seçtiği ürün sourceProductId ise
   * bu status gösterilir.
   *
   * Örnek:
   *
   * sourceProductId: Akım Trafosu
   * targetProductId: Şebeke Analizörü
   *
   * Kullanıcı Akım Trafosuna bakıyorsa:
   * sourceStatus kullanılacaktır.
   */
  sourceStatus: RelationStatus;

  /**
   * Kullanıcının seçtiği ürün sourceProductId ise,
   * karşı taraftaki ürün kartında gösterilecek
   * ilişki başlığıdır.
   */
  sourceTitle: string;


  // ==================================================
  // TARGET PERSPECTIVE
  // ==================================================

  /**
   * Kullanıcının seçtiği ürün targetProductId ise
   * bu status gösterilir.
   *
   * Örnek:
   *
   * sourceProductId: Akım Trafosu
   * targetProductId: Şebeke Analizörü
   *
   * Kullanıcı Şebeke Analizörüne bakıyorsa:
   * targetStatus kullanılacaktır.
   */
  targetStatus: RelationStatus;

  /**
   * Kullanıcının seçtiği ürün targetProductId ise,
   * karşı taraftaki ürün kartında gösterilecek
   * ilişki başlığıdır.
   */
  targetTitle: string;


  // ==================================================
  // RELATION DETAILS
  // ==================================================

  /**
   * İki ürünün neden ilişkili olduğunu açıklar.
   */
  reason: string;

  /**
   * İlişkinin hangi uygulama veya koşulda
   * anlamlı olduğunu açıklar.
   */
  whenUsed: string;

  /**
   * İlgili ürünün hangi durumda gerekli olmadığını
   * açıklar.
   *
   * Her relation için anlamlı olmadığı için optional.
   */
  whenNotRequired?: string;

  /**
   * Model uyumluluğu, bağlantı yapısı,
   * teknik sınırlamalar veya mühendislik açısından
   * dikkat edilmesi gereken bilgileri içerir.
   */
  technicalNote: string;
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