import type { MenuCategory } from "@/types/ecosystem";

export type ProductFamily = {
  id: string;
  label: string;
  productId?: string;
};

export type ProductCategoryDefinition = {
  id: MenuCategory;
  label: string;
  families: ProductFamily[];
};

export const productCategories: ProductCategoryDefinition[] = [
  {
    id: "power-quality",
    label: "Güç Kalitesi ve Enerji",
    families: [
      {
        id: "sebeke-analizorleri",
        label: "Şebeke Analizörleri",
        productId: "sebeke-analizorleri",
      },
      {
        id: "emk-class-a",
        label: "EMK Serisi Class A Kalite Analizörü",
        productId: "emk",
      },
      {
        id: "guc-enerji-olcerler",
        label: "Güç ve Enerji Ölçerler",
        productId: "guc-enerji-olcer",
      },
    ],
  },

  {
    id: "measurement",
    label: "Ölçme",
    families: [
      {
        id: "multimetreler",
        label: "Multimetreler",
        productId: "multimetre",
      },
      {
        id: "ampermetreler",
        label: "Ampermetreler",
        productId: "ampermetreler",
      },
      {
        id: "voltmetreler",
        label: "Voltmetreler",
        productId: "voltmetreler",
      },
      {
        id: "frekansmetreler",
        label: "Frekansmetreler",
        productId: "frekansmetreler",
      },
      {
        id: "cosfimetreler",
        label: "Cosφmetreler",
        productId: "cosfimetreler",
      },
      {
        id: "akim-transduserleri",
        label: "Akım Transdüserleri",
        productId: "akim-transduserleri",
      },
      {
        id: "gerilim-transduserleri",
        label: "Gerilim Transdüserleri",
        productId: "gerilim-transduserleri",
      },
      {
        id: "dc-ampermetreler",
        label: "DC Ampermetreler",
        productId: "dc-ampermetreler",
      },
      {
        id: "dc-voltmetreler",
        label: "DC Voltmetreler",
        productId: "dc-voltmetreler",
      },
    ],
  },

  {
    id: "compensation",
    label: "Kompanzasyon Cihazları",
    families: [
      {
        id: "reaktif-guc-kontrol-roleleri",
        label: "Reaktif Güç Kontrol Röleleri",
        productId: "reaktif-guc-kontrol-rolesi",
      },
      {
        id: "svc-urunleri",
        label: "SVC Ürünleri",
        productId: "svc-urunleri",
      },
      {
        id: "svg-ahf",
        label: "Statik Var Generatör (SVG) & Aktif Harmonik Filtre (AHF)",
        productId: "svg-ahf",
      },
      {
        id: "kondansatorler",
        label: "Kondansatörler",
        productId: "kondansator",
      },
      {
        id: "sont-reaktorleri",
        label: "Şönt Reaktörleri (Endüktif Yük Reaktörü)",
        productId: "sont-reaktorleri",
      },
      {
        id: "harmonik-filtre-reaktorleri",
        label: "Harmonik Filtre Reaktörleri",
        productId: "harmonik-filtre-reaktorleri",
      },
      {
        id: "kompanzasyon-kontaktorleri",
        label: "Kompanzasyon Kontaktörleri",
        productId: "kompanzasyon-kontaktorleri",
      },
      {
        id: "statik-kontaktorler",
        label: "Statik Kontaktörler",
        productId: "statik-kontaktorler",
      },
      {
        id: "desarj-unitesi",
        label: "Deşarj Ünitesi",
        productId: "desarj-unitesi",
      },
      {
        id: "ayr-yuk-ayiricilar",
        label: "AYR Serisi Yük Ayırıcılar",
        productId: "ayr-yuk-ayiricilar",
      },
      {
        id: "nh-sigortalar",
        label: "NH Serisi Bıçaklı Sigortalar",
        productId: "nh-sigortalar",
      },
    ],
  },

  {
    id: "energy-management",
    label: "Enerji Yönetimi Donanım ve Yazılımları",
    families: [
      {
        id: "enerji-izleme-yazilimlari",
        label: "ENTES Enerji İzleme Yazılımları",
        productId: "entes-enerji-izleme-yazilimlari",
      },
      {
        id: "gateway",
        label: "Gateway (Ağ Geçitleri)",
        productId: "gateway",
      },
      {
        id: "veri-toplayicilar",
        label: "Veri Toplayıcılar",
        productId: "veri-toplayicilar",
      },
    ],
  },

  {
    id: "protection-control",
    label: "Koruma & Kontrol",
    families: [
      {
        id: "astronomik-zaman-roleleri",
        label: "Astronomik Zaman Röleleri",
        productId: "astronomik-zaman-roleleri",
      },
      {
        id: "cok-fonksiyonlu-zaman-roleleri",
        label: "Çok Fonksiyonlu Zaman Röleleri",
        productId: "cok-fonksiyonlu-zaman-roleleri",
      },
      {
        id: "zaman-roleleri",
        label: "Zaman Röleleri",
        productId: "zaman-roleleri",
      },
      {
        id: "programlanabilir-zaman-saatleri",
        label: "Programlanabilir Zaman Saatleri",
        productId: "programlanabilir-zaman-saatleri",
      },
      {
        id: "toprak-kacak-akim",
        label: "Toprak Kaçak Akım Röleleri ve Toroid Akım Trafoları",
        productId: "toprak-kacak-akim-roleleri-toroid-akim-trafolari",
      },
      {
        id: "sivi-seviye-kontrol-roleleri",
        label: "Sıvı Seviye Kontrol Röleleri",
        productId: "sivi-seviye-kontrol-roleleri",
      },
      {
        id: "fotosel-roleleri",
        label: "Fotosel Röleleri",
        productId: "fotosel-roleleri",
      },
      {
        id: "gerilim-koruma-roleleri",
        label: "Gerilim Koruma Röleleri",
        productId: "gerilim-koruma-roleleri",
      },
      {
        id: "akim-koruma-roleleri",
        label: "Akım Koruma Röleleri",
        productId: "akim-koruma-roleleri",
      },
      {
        id: "termistor-rolesi",
        label: "Termistör Rölesi",
        productId: "termistor-rolesi",
      },
      {
        id: "ckr-koruma-rolesi",
        label: "CKR Koruma Rölesi",
        productId: "ckr-koruma-rolesi",
      },
      {
        id: "motor-faz-koruma-roleleri",
        label: "Motor (Faz) Koruma Röleleri",
        productId: "motor-faz-koruma-roleleri",
      },
      {
        id: "faz-sirasi-rolesi",
        label: "Faz Sırası Rölesi",
        productId: "faz-sirasi-rolesi",
      },
      {
        id: "guc-kaynaklari",
        label: "Güç Kaynakları",
        productId: "guc-kaynaklari",
      },
      {
        id: "kumanda-trafolari",
        label: "Kumanda Trafoları",
        productId: "kumanda-trafolari",
      },
      {
        id: "izolasyon-trafolari",
        label: "İzolasyon Trafoları",
        productId: "izolasyon-trafolari",
      },
      {
        id: "surge-koruma",
        label: "Surge (Darbe) Gerilimi Koruma Cihazı",
        productId: "surge-koruma",
      },
    ],
  },

  {
    id: "current-transformers",
    label: "Akım Trafoları",
    families: [
      {
        id: "og-akim-trafolari",
        label: "OG Akım Trafoları",
        productId: "og-akim-trafolari",
      },
      {
        id: "a-serisi-ag-akim-trafolari",
        label: "A Serisi Alçak Gerilim Akım Trafoları",
        productId: "a-serisi-ag-akim-trafolari",
      },
      {
        id: "ayrilabilir-akim-trafolari",
        label: "Ayrılabilir Akım Trafoları",
        productId: "ayrilabilir-akim-trafolari",
      },
      {
        id: "clamp-tip-ayrilabilir-akim-trafolari",
        label: "Clamp Tip Ayrılabilir Akım Trafoları",
        productId: "clamp-tip-ayrilabilir-akim-trafolari",
      },
      {
        id: "uc-fazli-akim-trafolari",
        label: "3 Fazlı Akım Trafoları",
        productId: "uc-fazli-akim-trafolari",
      },
    ],
  },
];