/* ==================================================
   ENTES ÜRÜN ARAMA ALIASLARI

   Teknik müşterilerin ürün ailesi yerine
   seri / model kodu yazarak ilgili ürün
   grubunu bulabilmesi için kullanılır.

   Aynı alias birden fazla ürün grubunda
   bulunabilir.
================================================== */

export const productSearchAliases: Record<
  string,
  string[]
> = {
  /* ==================================================
     GÜÇ KALİTESİ & ENERJİ
  ================================================== */

  "sebeke-analizorleri": [
    "mpr",
    "epm",
    "emr",
    "plug",
  ],

  emk: [
    "emk",
  ],

  "guc-enerji-olcer": [
    "es",
    "es3",
    "es3m",
    "emr",
    "epr",
  ],

  /* ==================================================
     ÖLÇME
  ================================================== */

  multimetre: [
    "emm",
    "epm",
    "evm",
  ],

  ampermetreler: [
    "epm",
  ],

  voltmetreler: [
    "evm",
  ],

  cosfimetreler: [
    "efc",
  ],

  frekansmetreler: [
    "ecr",
  ],

  "akim-transduserleri": [
    "ta",
  ],

  "gerilim-transduserleri": [
    "tv",
  ],

  "dc-ampermetreler": [
    "dca",
  ],

  "dc-voltmetreler": [
    "dcv",
  ],

  /* ==================================================
     KOMPANZASYON
  ================================================== */

  "reaktif-guc-kontrol-rolesi": [
    "rg",
    "rg3",
    "rgp",
    "rga",
    "rgsr",
  ],

  "svc-urunleri": [
    "rgsr",
    "rgp",
    "sr",
    "ent",
    "ent.srs1",
  ],

  /*
   * Kullanıcının verdiği ENT.SVG / ENT.AHF
   * kodları mevcut platformdaki SVG & AHF
   * ürün grubuna yönlendirilir.
   */
  "svg-ahf": [
    "ent.svg",
    "ent.ahf",
  ],

  kondansator: [
    "cf",
    "ent.cf",
    "ent.cmd",
    "ent.cxd",
    "ent.cxd.h",
    "cmd",
    "cxd",
  ],

  "sont-reaktorleri": [
    "ent.srs1",
    "ent.srs3",
    "srs1",
    "srs3",
  ],

  "harmonik-filtre-reaktorleri": [
    "ent.erh",
  ],

  "kompanzasyon-kontaktorleri": [
    "kt",
    "ent-kt",
    "ent.kt",
  ],

  "statik-kontaktorler": [
    "sc",
    "ent-sc",
    "ent.sc",
  ],

  "desarj-unitesi": [
    "du",
    "du.3",
    "du-3",
  ],

  "ayr-yuk-ayiricilar": [
    "ayr",
  ],

  "nh-sigortalar": [
    "nh",
    "ent.nh",
  ],

  /* ==================================================
     ENERJİ YÖNETİMİ
  ================================================== */

  "entes-enerji-izleme-yazilimlari": [
    "enerji doktoru",
    "doktor",
  ],

  gateway: [
    "etmo",
    "gemo",
    "rs",
  ],

  "veri-toplayicilar": [
    "epc",
  ],

  /* ==================================================
     KORUMA & KONTROL
  ================================================== */

  "astronomik-zaman-roleleri": [
    "dtr",
  ],

  "cok-fonksiyonlu-zaman-roleleri": [
    "mcb",
    "ertc",
  ],

  "zaman-roleleri": [
    "ertc",
    "mcb",
    "ef",
    "ser",
    "ssr",
    "dg",
    "erb",
  ],

  "programlanabilir-zaman-saatleri": [
    "mcb",
  ],

  "toprak-kacak-akim-roleleri-toroid-akim-trafolari":
    [
      "elr",
      "cbct",
    ],

  "sivi-seviye-kontrol-roleleri": [
    "ssrc",
    "pgs",
    "lls",
  ],

  "fotosel-roleleri": [
    "fg",
    "fg.göz",
    "fg4",
  ],

  "gerilim-koruma-roleleri": [
    "gkrc",
    "mcc",
  ],

  "akim-koruma-roleleri": [
    "akc",
  ],

  "termistor-rolesi": [
    "pt",
  ],

  "ckr-koruma-rolesi": [
    "ckr",
  ],

  "motor-faz-koruma-roleleri": [
    "mk",
    "mkc",
    "mks",
  ],

  "faz-sirasi-rolesi": [
    "fr",
  ],

  "guc-kaynaklari": [
    "ps",
  ],

  "kumanda-trafolari": [
    "ent.pst",
    "ent",
    "pst",
  ],

  "izolasyon-trafolari": [
    "ent.ist",
    "ent",
  ],

  "surge-koruma": [
    "spd",
  ],

  /* ==================================================
     AKIM TRAFOLARI
  ================================================== */

  "og-akim-trafolari": [
    "og",
    "ent.a65",
    "ent",
    "a65",
  ],

  "a-serisi-ag-akim-trafolari": [
    "ent.a",
    "ent",
    "enta",
  ],

  "ayrilabilir-akim-trafolari": [
    "ens.cys",
    "ens",
    "cys",
  ],

  "clamp-tip-ayrilabilir-akim-trafolari":
    [
      "ens.cct",
      "ens",
      "cct",
    ],

  "uc-fazli-akim-trafolari": [
    "ens.3phd",
    "ens.3pmd",
    "ens",
    "pmd",
    "phd",
  ],

  "ct-serisi-akim-trafolari": [
    "CT-25",
    "ct",
    "ct25",
    "CT-80D",
  ],
};