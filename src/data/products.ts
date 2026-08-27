import type { Product } from "@/types/ecosystem";

export const products: Product[] = [

  // --------------------------------------------------
  // GÜÇ KALİTESİ VE ENERJİ
  // --------------------------------------------------

  {
    id: "sebeke-analizorleri",
    name: "Şebeke Analizörleri",
    /*modelPreviews: [
      {
        name: "MPR-1 Serisi",
        image: "/products/sebeke-analizorleri/mpr-1.png",
      },
      {
        name: "MPR-2 Serisi",
        image: "/products/sebeke-analizorleri/mpr-2.png",
      },
      {
        name: "MPR-3 Serisi",
        image: "/products/sebeke-analizorleri/mpr-3.png",
      },
      {
        name: "MPR-4 Serisi",
        image: "/products/sebeke-analizorleri/mpr-4.png",
      },
      {
        name: "MPR-5 Serisi",
        image: "/products/sebeke-analizorleri/mpr-5.png",
      },
      {
        name: "MPR-6 Serisi",
        image: "/products/sebeke-analizorleri/mpr-6.png",
      },
      {
        name: "EPM-07 Serisi",
        image: "/products/sebeke-analizorleri/epm-07.png",
      },
    ],*/
    category: "measurement",
    menuCategory: "power-quality",
    role: "Elektriksel parametrelerin ölçülmesi, izlenmesi ve analiz edilmesi",
    description: "ENTES Şebeke Analizörleri; tesislerdeki gerilim, akım, güç, enerji ve ilgili elektriksel parametrelerin ölçülmesi ve izlenmesi amacıyla kullanılan ürün grubudur.",
    image: "/products/sebeke.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/mpr_1-2-3-4_leaflet-63e37ecfdbc48.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf#page=6",
    websiteUrl: "https://www.entes.com.tr/sebeke-analizorleri/",
  },

  {
    id: "emk",
    name: "EMK Serisi Class A Kalite Analizörü",
    /* modelPreviews: [
      {
        name: "EMK-01 Serisi",
        image: "/products/emk/emk.png",
      },
      {
        name: "EMK-10P Serisi",
        image: "/products/emk/emk-10p.png",
      },
    ],*/
    category: "measurement",
    menuCategory: "power-quality",
    role: "Elektriksel güç kalitesi parametrelerinin ölçülmesi, izlenmesi ve analiz edilmesi",
    description: "ENTES EMK Serisi Class A Kalite Analizörleri; AG ve OG sistemlerde elektriksel parametrelerin ve güç kalitesi olaylarının izlenmesi ve değerlendirilmesine yönelik kullanılan ürün grubudur.",
    image: "/products/emk.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/emk-serisi-class-a-kalite-analizoru/",
  },

  {
    id: "guc-enerji-olcer",
    name: "Güç ve Enerji Ölçerler",
    /* modelPreviews: [
      {
        name: "ES Serisi",
        image: "/products/guc-enerji-olcer/es.png",
      },
      {
        name: "ES3 Serisi",
        image: "/products/guc-enerji-olcer/es3.png",
      },
      {
        name: "ES3M MID Serisi",
        image: "/products/guc-enerji-olcer/es3m.png",
      },
      {
        name: "EPR-04S Serisi",
        image: "/products/guc-enerji-olcer/epr04.png",
      },
      {
        name: "EPR-04S-DIN Serisi",
        image: "/products/guc-enerji-olcer/epr04din.png",
      },
    ],*/
    category: "measurement",
    menuCategory: "power-quality",
    role: "Elektriksel güç ve enerji parametrelerinin ölçülmesi ve izlenmesi",
    description: "ENTES Güç ve Enerji Ölçerler; tesislerde aktif, reaktif ve görünür güç ile enerji tüketimi ve ilgili elektriksel parametrelerin ölçülmesi ve izlenmesine yönelik ürün grubudur.",
    image: "/products/es3.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/guc-ve-enerji-olcerler/",
  },

  // --------------------------------------------------
  // ÖLÇME
  // --------------------------------------------------

  {
    id: "multimetre",
    name: "Multimetreler",
    category: "measurement",
    menuCategory: "measurement",
    role: "Akım, gerilim, frekans ve güç faktörü gibi temel elektriksel parametrelerin ölçülmesi",
    description: "ENTES Multimetreler; dağıtım panoları, kat panoları, UPS panoları ve makine panolarında akım, gerilim, frekans ve cosφ gibi temel elektriksel parametrelerin izlenmesine yönelik ürün grubudur.",
    image: "/products/multimetre.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/multimetreler/",
  },

  {
    id: "ampermetreler",
    name: "Ampermetreler",
    category: "measurement",
    menuCategory: "measurement",
    role: "Elektrik sistemlerindeki akım değerlerinin ölçülmesi ve izlenmesi",
    description: "ENTES Ampermetreler; elektrik tesislerinde ve panolarda akım değerlerinin ölçülmesine yönelik ürün grubudur. Ürün ailesinde farklı ölçüm aralıkları ve bağlantı yapılarına sahip modeller bulunmaktadır.",
    image: "/products/ampermetre.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/ampermetreler/",
  },

  {
    id: "voltmetreler",
    name: "Voltmetreler",
    category: "measurement",
    menuCategory: "measurement",
    role: "Elektrik sistemlerindeki gerilim değerlerinin ölçülmesi ve izlenmesi",
    description: "ENTES Voltmetreler; tesislerdeki elektrik sistemlerinin gerilim değerlerinin ölçülmesi ve izlenmesine yönelik ürün grubudur. Ürün ailesinde tek fazlı ve üç fazlı farklı ölçüm seçenekleri bulunmaktadır.",
    image: "/products/voltmetre.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/voltmetreler/",
  },

  {
    id: "frekansmetreler",
    name: "Frekansmetreler",
    category: "measurement",
    menuCategory: "measurement",
    role: "Elektrik sistemlerindeki işletme frekansının ölçülmesi ve izlenmesi",
    description: "ENTES Frekansmetreler; endüstriyel tesislerde işletme geriliminin frekansını hassas şekilde ölçmek ve izlemek amacıyla kullanılan ölçüm cihazlarıdır.",
    image: "/products/frekansmetre.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/frekansmetreler/",
  },

  {
    id: "cosfimetreler",
    name: "Cosφmetreler",
    category: "measurement",
    menuCategory: "measurement",
    role: "Elektrik sistemindeki güç faktörünün ve yükün reaktif karakterinin izlenmesi",
    description: "ENTES Cosφmetreler; şebekeden çekilen enerjinin Cosφ değerini ölçmek ve yükün endüktif veya kapasitif karakterini izlemek amacıyla kullanılan ölçüm cihazlarıdır.",
    image: "/products/cosfimetre.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/cosfmetreler/",
  },

  {
    id: "akim-transduserleri",
    name: "Akım Transdüserleri",
    category: "measurement",
    menuCategory: "measurement",
    role: "AC akım bilgisinin standart analog çıkış sinyaline dönüştürülmesi",
    description: "ENTES Akım Transdüserleri; ölçülen AC akım bilgisini otomasyon ve kontrol sistemlerinde kullanılabilecek 0-20 mA DC analog sinyale dönüştürmek amacıyla kullanılan ürün grubudur.",
    image: "/products/ta.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/akim-transduserleri/",
  },

  {
    id: "gerilim-transduserleri",
    name: "Gerilim Transdüserleri",
    category: "measurement",
    menuCategory: "measurement",
    role: "AC gerilim bilgisinin standart analog çıkış sinyaline dönüştürülmesi",
    description: "ENTES Gerilim Transdüserleri; AC gerilim bilgisini kontrol ve gösterge sistemlerinde kullanılabilecek standart 0-20 mA DC analog sinyale dönüştürmek amacıyla kullanılan ürün grubudur.",
    image: "/products/tv.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/gerilim-transduserleri/",
  },

  {
    id: "dc-ampermetreler",
    name: "DC Ampermetreler",
    category: "measurement",
    menuCategory: "measurement",
    role: "DC sistemlerde akım değerinin ölçülmesi ve izlenmesi",
    description: "ENTES DC Ampermetreler; DC sistemlerde akım değerlerinin ölçülmesi ve izlenmesi amacıyla kullanılan ölçüm cihazlarıdır. Ürün ailesinde haberleşme ve kontak çıkışı gibi farklı özelliklere sahip modeller bulunmaktadır.",
    image: "/products/dca.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/dc-ampermetreler/",
  },

  {
    id: "dc-voltmetreler",
    name: "DC Voltmetreler",
    category: "measurement",
    menuCategory: "measurement",
    role: "DC sistemlerde gerilim değerinin ölçülmesi ve izlenmesi",
    description: "ENTES DC Voltmetreler; DC sistemlerde gerilim değerlerinin ölçülmesi ve izlenmesine yönelik kullanılan ölçüm cihazlarıdır. Ürün ailesinde haberleşme ve kontak çıkışı gibi farklı özelliklere sahip modeller bulunmaktadır.",
    image: "/products/dcv.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes-katalog-olcme-619d129637553.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/dc-voltmetreler/",
  },

  // --------------------------------------------------
  // KOMPANZASYON
  // --------------------------------------------------

  {
    id: "reaktif-guc-kontrol-rolesi",
    name: "Reaktif Güç Kontrol Röleleri",
    category: "correction",
    menuCategory: "compensation",
    role: "Kompanzasyon sisteminde reaktif gücün izlenmesi ve kompanzasyon kademelerinin kontrol edilmesi",
    description: "ENTES Reaktif Güç Kontrol Röleleri; tesisin reaktif gücünü izleyerek güç faktörünü hedeflenen değerde tutmak amacıyla kompanzasyon kademelerini yöneten ürün grubudur.",
    image: "/products/rg.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/entes_tr_kompanzasyon_katalog-6a87e62dbf278.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/reaktif-guc-kontrol-roleleri/",
  },

  {
    id: "svc-urunleri",
    name: "SVC Ürünleri",
    category: "correction",
    menuCategory: "compensation",
    role: "Hızlı değişen ve dengesiz yüklerde dinamik reaktif güç kompanzasyonu",
    description: "ENTES SVC Ürünleri; hızlı değişen ve dengesiz yüklerin bulunduğu sistemlerde reaktif gücün hızlı ve hassas şekilde kontrol edilmesine yönelik sürücülü kompanzasyon çözümüdür. SVC destekli reaktif güç kontrol röleleri, endüktif yük sürücüleri ve şönt reaktörlerle birlikte çalışır.",
    image: "/products/svc.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/kompanzasyon_cozumleri_tr-5da81f2d79094.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/svc-urunleri/",
  },

  {
    id: "svg-ahf",
    name: "Statik Var Generatör (SVG) & Aktif Harmonik Filtre (AHF)",
    category: "correction",
    menuCategory: "compensation",
    role: "Reaktif güç, harmonik ve faz dengesizliği problemlerinin aktif olarak iyileştirilmesi",
    description: "ENTES SVG ve AHF çözümleri; reaktif güç kompanzasyonu, harmonik filtreleme ve fazlar arası dengesizliğin iyileştirilmesine yönelik aktif güç kalitesi ürün grubudur.",
    image: "/products/svg-ahf.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/statik-var-generator-svg-ve-aktif-harmonik-filtre-ahf/",
  },

  {
    id: "kondansator",
    name: "Kondansatörler",
    category: "correction",
    menuCategory: "compensation",
    role: "Endüktif reaktif gücün kompanze edilmesi ve güç faktörünün iyileştirilmesi",
    description: "ENTES Kondansatörler; endüktif reaktif yüklerin kompanzasyonu amacıyla kullanılan alçak gerilim güç kondansatörleri ürün grubudur. Tek fazlı ve üç fazlı farklı güç ve gerilim seçenekleri bulunmaktadır.",
    image: "/products/kondansator.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/kondansatorler/",
  },

  {
    id: "sont-reaktorleri",
    name: "Şönt Reaktörleri (Endüktif Yük Reaktörü)",
    category: "correction",
    menuCategory: "compensation",
    role: "Kapasitif reaktif gücün endüktif yük oluşturarak kompanze edilmesi",
    description: "ENTES Şönt Reaktörleri; kapasitif karakterli tesislerde endüktif reaktif güç oluşturarak sistemin reaktif güç dengesinin sağlanmasına yönelik kullanılan kompanzasyon ürün grubudur. Tek fazlı ve üç fazlı seçenekleri bulunmaktadır.",
    image: "/products/sont.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/standart-seri-sont-reaktorler-enduktif-yuk-reaktoru/",
  },

  {
    id: "harmonik-filtre-reaktorleri",
    name: "Harmonik Filtre Reaktörleri",
    category: "correction",
    menuCategory: "compensation",
    role: "Harmonikli kompanzasyon sistemlerinde kondansatörlerin korunması ve rezonans riskinin azaltılması",
    description: "ENTES Harmonik Filtre Reaktörleri; kompanzasyon sistemlerinde kondansatör gruplarına seri bağlanarak harmonik akımların kondansatörler üzerindeki etkisinin azaltılmasına yönelik kullanılan ürün grubudur.",
    image: "/products/harmonik-filtre.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/harmonik-filtre-reaktorleri/",
  },

  {
    id: "kompanzasyon-kontaktorleri",
    name: "Kompanzasyon Kontaktörleri",
    category: "correction",
    menuCategory: "compensation",
    role: "Kompanzasyon kademelerindeki kondansatörlerin anahtarlanması",
    description: "ENTES Kompanzasyon Kontaktörleri; klasik kompanzasyon sistemlerinde kondansatör kademelerinin uygun şekilde devreye alınması ve çıkarılmasına yönelik kullanılan ürün grubudur.",
    image: "/products/kk.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/kompanzasyon-kontaktorleri/",
  },

  {
    id: "statik-kontaktorler",
    name: "Statik Kontaktörler",
    category: "correction",
    menuCategory: "compensation",
    role: "Hızlı değişen yüklerde kondansatör kademelerinin çok hızlı anahtarlanması",
    description: "ENTES Statik Kontaktörler; punto kaynak makineleri, vinçler, ark ocakları ve benzeri hızlı devreye girip çıkan yüklerin bulunduğu sistemlerde kompanzasyon kademelerinin çok kısa sürede devreye alınması ve çıkarılmasına yönelik kullanılan tristör tabanlı ürün grubudur.",
    image: "/products/statik-k.png",
    brochureUrl: "https://www.entes.com.tr/uploads/files/1675845738-statik_kontaktor_TR.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/statik-kontaktorler/",
  },

  {
    id: "desarj-unitesi",
    name: "Deşarj Ünitesi",
    category: "correction",
    menuCategory: "compensation",
    role: "Kompanzasyon kondansatörlerinin kısa sürede deşarj edilmesini sağlama",
    description: "ENTES Deşarj Ünitesi; hızlı devreye girip çıkan kompanzasyon kondansatörlerini kısa sürede deşarj ederek otomatik kompanzasyon sistemlerinde daha kısa kademe alma sürelerinin uygulanmasına yardımcı olan ürün grubudur.",
    image: "/products/du.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/desarj-unitesi/",
  },

  {
    id: "ayr-yuk-ayiricilar",
    name: "AYR Serisi Yük Ayırıcılar",
    category: "correction",
    menuCategory: "compensation",
    role: "Elektrik devresinin yük altında güvenli şekilde ayrılması ve NH sigortalarla birlikte koruma sağlanması",
    description: "ENTES AYR Serisi Yük Ayırıcılar; elektrik devresinin güvenli şekilde ayrılmasına yönelik kullanılan ve uygun NH bıçaklı sigortalarla birlikte kısa devre ve aşırı akım koruması sağlayabilen ürün grubudur.",
    image: "/products/ayr.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/tr-yuk-ayirici-leaflet-63e372a4d8565.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/ayr-serisi-yuk-ayiricilar/",
  },

  {
    id: "nh-sigortalar",
    name: "NH Serisi Bıçaklı Sigortalar",
    category: "correction",
    menuCategory: "compensation",
    role: "Elektrik devrelerinin aşırı yük ve kısa devre akımlarına karşı korunması",
    description: "ENTES NH Serisi Bıçaklı Sigortalar; aşırı yük veya kısa devre akımı oluştuğunda içerisindeki eriyen eleman üzerinden devreyi keserek koruma sağlayan ürün grubudur. NH00 ve NH1 boy seçenekleri uygun AYR Serisi Yük Ayırıcılarla birlikte kullanılabilir.",
    image: "/products/nh-sigorta.png",
    brochureUrl: "https://www.entes.com.tr/uploads/files/TR-NH-Sigorta-Leaflet.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/nh-serisi-bicakli-sigortalar/",
  },

  // --------------------------------------------------
  // AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "og-akim-trafolari",
    name: "OG Akım Trafoları",
    category: "sensing",
    menuCategory: "current-transformers",
    role: "Orta gerilim tarafındaki akım bilgisinin ölçüm ve kontrol cihazları için uygun sekonder akım seviyesine dönüştürülmesi",
    description: "ENTES OG Akım Trafoları; orta gerilim güç trafosunun primer tarafındaki XLPE kablolara monte edilerek OG tarafından akım ölçümü yapılmasına yönelik ürün grubudur. Özellikle elektrik sayacının güç trafosunun girişinde bulunduğu işletmelerde ve akım bilgisini orta gerilim tarafından alan reaktif güç kontrol uygulamalarında kullanılır.",
    image: "/products/og-ct.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/og-akim-trafolari/",
  },

  {
    id: "a-serisi-ag-akim-trafolari",
    name: "A Serisi Alçak Gerilim Akım Trafoları",
    category: "sensing",
    menuCategory: "current-transformers",
    role: "Alçak gerilim sistemlerindeki yüksek primer akımların ölçüm ve kontrol cihazları için uygun sekonder akım seviyesine dönüştürülmesi",
    description: "ENTES A Serisi Alçak Gerilim Akım Trafoları; alçak gerilim güç dağıtım sistemlerinde yüksek primer akımların ölçüm, enerji izleme ve kontrol cihazlarının kullanabileceği sekonder akım seviyelerine dönüştürülmesine yönelik ürün grubudur. Farklı primer akım, bara ölçüsü, doğruluk sınıfı ve modele bağlı 1 A veya 5 A sekonder seçenekleri bulunmaktadır.",
    image: "/products/ag-ct.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/tr-ent-a-serisi-leaflet-63ec5d429fc7b.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/a-serisi-alcak-gerilim-akim-trafolari/",
  },

  {
    id: "ayrilabilir-akim-trafolari",
    name: "Ayrılabilir Akım Trafoları",
    category: "sensing",
    menuCategory: "current-transformers",
    role: "Mevcut elektrik tesislerinde bara veya iletken sökülmeden yüksek primer akımların 5 A sekonder akıma dönüştürülmesi",
    description: "ENTES ENS.CYS Serisi Ayrılabilir Akım Trafoları; mevcut elektrik tesislerinde bara veya iletkenlerin sökülmesine ihtiyaç duyulmadan kolay montaj yapılabilen akım trafolarıdır. Yüksek primer akımları ölçüm, kontrol ve kompanzasyon cihazlarının kullanabileceği 5 A sekonder akım seviyesine dönüştürür.",
    image: "/products/ayrilabilir.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/tr_cys_akim_trafosu_leaflet-67e54d0e191ea.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/ayrilabilir-akim-trafolari/",
  },

  {
    id: "clamp-tip-ayrilabilir-akim-trafolari",
    name: "Clamp Tip Ayrılabilir Akım Trafoları",
    category: "sensing",
    menuCategory: "current-transformers",
    role: "Enerji kesilmeden bara veya kablolardan akım bilgisinin ölçüm ve kontrol cihazlarına aktarılması",
    description: "ENTES ENS.CCT Serisi Clamp Tip Ayrılabilir Akım Trafoları; mevcut tesislerde enerji kesilmeden ve iletken sökülmeden kolay montaj yapılmasına yönelik tasarlanmış akım trafolarıdır. Ürün ailesinde uygulamaya göre 333 mV gerilim çıkışlı ve 5 A akım çıkışlı modeller bulunmaktadır.",
    image: "/products/clamp-ct.png",
    brochureUrl: "https://www.entes.com.tr/uploads/contents/file/tr_ens_cct_akim_trafosu_leaflet-66f14be3bda81.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/clamp-tip-ayrilabilir-akim-trafolari-471/",
  },

  {
    id: "uc-fazli-akim-trafolari",
    name: "3 Fazlı Akım Trafoları",
    category: "sensing",
    menuCategory: "current-transformers",
    role: "Üç fazlı sistemlerde faz akımlarının kompakt bir yapı üzerinden ölçüm ve kontrol cihazlarına aktarılması",
    description: "ENTES 3 Fazlı Akım Trafoları; üç faz iletkeninin tek bir kompakt yapı üzerinden ölçülmesine yönelik ürün grubudur. Şalter üreticilerinin standart bara açıklıklarına uygun tasarımları sayesinde şalter çıkışlarına doğrudan monte edilebilir. Ürün ailesinde 5 A sekonder çıkışlı ENS.3PHD ve plug&meter uygulamalarına yönelik 330 mV çıkışlı ENS.3PMD serileri bulunmaktadır.",
    image: "/products/3fazli.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/3-fazli-akim-trafolari-528/",
  },

  // --------------------------------------------------
  // ENERJİ YÖNETİMİ
  // --------------------------------------------------

  {
    id: "gateway",
    name: "Gateway (Ağ Geçitleri)",
    category: "communication-energy",
    menuCategory: "energy-management",
    role: "Saha cihazları ile üst seviye ağ ve enerji yönetimi sistemleri arasında haberleşme bağlantısının sağlanması",
    description: "ENTES Gateway (Ağ Geçitleri); RS-485 haberleşmeli saha cihazlarından elde edilen elektriksel ölçüm ve parametre bilgilerinin üst seviye ağlara ve enerji yönetimi çözümlerine aktarılmasına yönelik haberleşme ürün grubudur. Uygulamaya göre Ethernet veya hücresel haberleşme altyapıları üzerinden uzaktan erişim ve veri aktarımının sağlanmasına yardımcı olur.",
    image: "/products/ag.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/modemler/",
  },

  {
    id: "entes-enerji-izleme-yazilimlari",
    name: "ENTES Enerji İzleme Yazılımları",
    category: "communication-energy",
    menuCategory: "energy-management",
    role: "Elektriksel ölçüm ve enerji verilerinin uzaktan izlenmesi, analiz edilmesi ve enerji yönetimi amacıyla değerlendirilmesi",
    description: "ENTES Enerji İzleme Yazılımları; saha cihazlarından elde edilen elektriksel ölçüm ve enerji verilerinin uzaktan izlenmesi, analiz edilmesi ve değerlendirilmesine yönelik yazılım çözümleridir. Enerji Doktoru üzerinden enerji tüketimleri ve elektriksel parametreler takip edilebilir; çözüm yapısına göre bulut üzerinden internet erişimi veya mobil uygulamalar aracılığıyla farklı cihazlardan izleme gerçekleştirilebilir.",
    image: "/products/enerji-doktoru.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/entes-enerji-izleme-yazilimlari/",
  },

  {
    id: "veri-toplayicilar",
    name: "Veri Toplayıcılar",
    category: "communication-energy",
    menuCategory: "energy-management",
    role: "Saha cihazlarından elde edilen ölçüm ve parametre verilerinin toplanması ve enerji yönetimi sistemlerine aktarılması",
    description: "ENTES Veri Toplayıcılar; uyumlu saha cihazlarından elde edilen elektriksel ölçüm ve parametre verilerinin bir araya getirilmesi ve enerji yönetimi sistemlerine aktarılmasına yönelik ürün grubudur. RS-485 haberleşmeli reaktif güç kontrol röleleri, şebeke analizörleri, ölçüm cihazları ve uygun koruma-kontrol cihazlarından gelen verilerin merkezi bir izleme altyapısına taşınmasında kullanılabilir.",
    image: "/products/epc12.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/veri-toplayicilar/",
  },

  // --------------------------------------------------
  // KORUMA & KONTROL
  // --------------------------------------------------

  {
    id: "astronomik-zaman-roleleri",
    name: "Astronomik Zaman Röleleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrikli cihazların gün doğumu, gün batımı veya programlanan zamanlara göre otomatik kontrol edilmesi",
    description: "ENTES Astronomik Zaman Röleleri; coğrafi konuma bağlı gün doğumu ve gün batımı saatlerini otomatik olarak hesaplayarak aydınlatma ve benzeri elektrikli sistemlerin belirlenen zamanlarda kontrol edilmesine yönelik ürün grubudur.",
    image: "/products/astronomik.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/astronomik-zaman-roleleri/",
  },

  {
    id: "cok-fonksiyonlu-zaman-roleleri",
    name: "Çok Fonksiyonlu Zaman Röleleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Makine ve otomasyon sistemlerinde farklı zamanlama ve tetikleme fonksiyonlarının gerçekleştirilmesi",
    description: "ENTES Çok Fonksiyonlu Zaman Röleleri; çekmede ve bırakmada gecikme, impulse, flaşör, start-stop, sayıcı ve benzeri farklı zamanlama fonksiyonlarını tek cihaz ailesi içerisinde sunarak endüstriyel otomasyon ve pano uygulamalarında esnek kontrol sağlar.",
    image: "/products/cok-fonk.tif",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/cok-fonksiyonlu-zaman-roleleri/",
  },

  {
    id: "zaman-roleleri",
    name: "Zaman Röleleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrik devreleri ve ekipmanlarının belirlenen süreye göre otomatik olarak kontrol edilmesi",
    description: "ENTES Zaman Röleleri; elektrik devreleri, makineler ve ekipmanların belirlenen bir süre sonunda veya belirli zaman aralıklarında devreye alınması ya da devreden çıkarılmasına yönelik kullanılan temel zamanlama ve kontrol ürün grubudur.",
    image: "/products/zaman.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/zaman-roleleri/",
  },

  {
    id: "programlanabilir-zaman-saatleri",
    name: "Programlanabilir Zaman Saatleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrikli ekipmanların günlük veya haftalık zaman programlarına göre otomatik kontrol edilmesi",
    description: "ENTES Programlanabilir Zaman Saatleri; elektrikle çalışan ekipmanların kullanıcı tarafından belirlenen günlük veya haftalık zaman dilimlerine göre otomatik olarak devreye alınması ve devreden çıkarılmasına yönelik kullanılan zamanlama ürün grubudur.",
    image: "/products/programlanabilir.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/programlanabilir-zaman-saatleri/",
  },

  {
    id: "toprak-kacak-akim-roleleri-toroid-akim-trafolari",
    name: "Toprak Kaçak Akım Röleleri ve Toroid Akım Trafoları",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrik tesislerinde kaçak akımın algılanması ve koruma sistemine açma komutu verilmesi",
    description: "ENTES Toprak Kaçak Akım Röleleri ve Toroid Akım Trafoları; tesislerde oluşabilecek kaçak akımın CBCT Serisi Toroid Akım Trafoları üzerinden algılanması ve ELR Serisi Toprak Kaçak Akım Röleleri tarafından değerlendirilerek koruma sistemine açma komutu verilmesine yönelik ürün grubudur.",
    image: "/products/kacak.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/elr-cbct/",
  },

  {
    id: "sivi-seviye-kontrol-roleleri",
    name: "Sıvı Seviye Kontrol Röleleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "İletken sıvıların seviyesinin algılanması ve pompa veya vana kontrolünün otomatikleştirilmesi",
    description: "ENTES Sıvı Seviye Kontrol Röleleri; su kuyuları, tanklar ve endüstriyel sıvı depolarındaki iletken sıvı seviyelerinin elektrotlar üzerinden algılanması ve seviyeye bağlı pompa veya vana kontrolünün gerçekleştirilmesine yönelik ürün grubudur.",
    image: "/products/sivi-seviye.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/sivi-seviye-kontrol-roleleri/",
  },
  
  {
    id: "fotosel-roleleri",
    name: "Fotosel Röleleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Aydınlatma sistemlerinin ortam ışık seviyesine göre otomatik olarak kontrol edilmesi",
    description: "ENTES Fotosel Röleleri; ortam ışık seviyesini algılayarak aydınlatma sistemlerinin karanlıkta otomatik olarak devreye alınması ve gün ışığında devreden çıkarılmasına yönelik kullanılan kontrol ürün grubudur.",
    image: "/products/fotosel.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/fotosel-roleleri/",
  },

  {
    id: "gerilim-koruma-roleleri",
    name: "Gerilim Koruma Röleleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrik sistemlerinin düşük ve aşırı gerilim ile çeşitli şebeke hatalarına karşı korunması",
    description: "ENTES Gerilim Koruma Röleleri; motorların ve elektrik sistemlerinin düşük veya aşırı gerilim, faz yokluğu ve modele bağlı olarak faz sırası, frekans, gerilim dengesizliği ve nötr kopması gibi şebeke problemlerine karşı korunmasına yönelik ürün grubudur.",
    image: "/products/gerilim-koruma.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/gerilim-koruma-roleleri/",
  },

  {
    id: "akim-koruma-roleleri",
    name: "Akım Koruma Röleleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrik sistemlerinin düşük veya aşırı akım koşullarına karşı korunması",
    description: "ENTES Akım Koruma Röleleri; sistemden geçen akımı izleyerek ölçülen değerin belirlenen alt veya üst sınırların dışına çıkması durumunda çıkış kontağı üzerinden sistemi devreden çıkarmaya yönelik kullanılan koruma ürün grubudur.",
    image: "/products/akim-koruma.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/akim-koruma-roleleri/",
  },

  {
    id: "faz-sirasi-rolesi",
    name: "Faz Sırası Rölesi",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Üç fazlı sistemlerde faz sırasının kontrol edilmesi ve yanlış faz sırasından kaynaklanan ters motor dönüşünün önlenmesi",
    description: "ENTES Faz Sırası Rölesi; üç fazlı sistemlerde R, S ve T fazlarının doğru sırada olup olmadığını kontrol ederek yanlış faz sırası durumunda çıkış rölesini devreden çıkaran koruma ürünüdür. Özellikle üç fazlı motorlarda ters dönüşün sistem veya kullanıcı açısından risk oluşturabileceği uygulamalarda kullanılır.",
    image: "/products/faz-sirasi.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/faz-sirasi-rolesi/",
  },

  {
    id: "termistor-rolesi",
    name: "Termistör Rölesi",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "PTC sensörü üzerinden motor sargı sıcaklığının izlenmesi ve aşırı sıcaklığa karşı motorun korunması",
    description: "ENTES Termistör Rölesi; PTC sensörlü motorların sargı sıcaklığını izleyerek sıcaklığın belirlenen sınır değerini aşması durumunda çıkış rölesi üzerinden motorun devreden çıkarılmasını sağlayan koruma ürünüdür.",
    image: "/products/termistor.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/termistor-rolesi/",
  },

  {
    id: "ckr-koruma-rolesi",
    name: "CKR Koruma Rölesi",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Transformatör, motor, jeneratör ve enerji nakil hatlarının kısa devre ve toprak arızalarına karşı korunması",
    description: "ENTES CKR Koruma Rölesi; transformatörlerin, motorların, jeneratörlerin ve enerji nakil hatlarının kısa devre ve toprak arızalarına karşı korunmasına yönelik sekonder koruma ürünüdür. CKR-93T modeli 3 faz ve 1 toprak koruması sunar ve faz ile toprak koruması için sabit ve ters zaman karakteristiklerinin ayarlanmasına imkan verir.",
    image: "/products/ckr.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/ckr-koruma-rolesi/",
  },

  {
    id: "motor-faz-koruma-roleleri",
    name: "Motor (Faz) Koruma Röleleri",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Üç fazlı motorların faz arızaları, faz sırası ve gerilim dengesizliği gibi durumlara karşı korunması",
    description: "ENTES Motor (Faz) Koruma Röleleri; sanayi tesislerindeki üç fazlı motorların faz yokluğu, faz sırası hatası ve faz dengesizliği gibi elektriksel problemlere karşı korunmasına yönelik ürün grubudur. Modele bağlı olarak ayarlanabilir asimetri, zaman gecikmesi ve PTC sıcaklık koruması gibi ilave fonksiyonlar da sunulabilir.",
    image: "/products/motor-faz.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/motor-faz-koruma-roleleri/",
  },

  {
    id: "guc-kaynaklari",
    name: "Güç Kaynakları",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrik ve otomasyon sistemleri için güvenli ve kararlı DC besleme gerilimi sağlanması",
    description: "ENTES Güç Kaynakları; geniş AC/DC giriş gerilimi aralığından elektrik ve otomasyon sistemleri için güvenli DC çıkış gerilimi sağlayan ürün grubudur. Ürün ailesinde farklı güç ve çıkış akımı seçeneklerine sahip 12 VDC ve 24 VDC modeller bulunmaktadır.",
    image: "/products/guc-kaynaklari.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/guc-kaynaklari/",
  },

  {
    id: "kumanda-trafolari",
    name: "Kumanda Trafoları",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrik panolarındaki kontrol ve ölçüm devreleri için 24 VAC besleme sağlanması",
    description: "ENTES Kumanda Trafoları; elektrik panolarında kullanılan kontrol ve ölçüm cihazlarının güvenli şekilde beslenmesi amacıyla şebeke gerilimini 24 VAC seviyesine dönüştüren ürün grubudur.",
    image: "/products/kumanda.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/kumanda-trafolari/",
  },

  {
    id: "izolasyon-trafolari",
    name: "İzolasyon Trafoları",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Primer ve sekonder devreler arasında galvanik izolasyon sağlanarak bağlı cihazların güvenli çalışmasının desteklenmesi",
    description: "ENTES İzolasyon Trafoları; primer ve sekonder devreleri elektriksel olarak birbirinden izole ederek hassas cihazların güvenli çalışmasını destekleyen ürün grubudur. Galvanik izolasyon gereken uygulamalarda ve nötr noktası bulunmayan şebekelerde nötr noktası oluşturmak amacıyla kullanılabilir.",
    image: "/products/izolasyon.png",
    brochureUrl: "https://www.entes.com.tr/uploads/files/tr_izolasyon_trafosu.pdf",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/izolasyon-trafolari/",
  },

  {
    id: "surge-koruma",
    name: "Surge (Darbe) Gerilimi Koruma Cihazı",
    category: "protection-control",
    menuCategory: "protection-control",
    role: "Elektrik sistemleri ve hassas ekipmanların yüksek enerjili darbe gerilimlerine karşı korunması",
    description: "ENTES Surge (Darbe) Gerilimi Koruma Cihazları; elektrik sistemlerinde oluşabilecek yüksek enerjili darbe gerilimlerinin enerjisini üzerine alarak bağlı hassas ekipmanların zarar görme riskini azaltmaya yönelik koruma ürün grubudur. Ürün ailesinde üçgen bağlantı için SPD-D ve yıldız bağlantı için SPD-S modelleri bulunmaktadır.",
    image: "/products/surge.png",
    brochureUrl: "https://www.entes.com.tr/brosurler/",
    priceListUrl: "https://www.entes.com.tr/uploads/contents/file/entes_fiyat_listesi_temmuz_2026-6a4f6f6446f2c.pdf",
    websiteUrl: "https://www.entes.com.tr/surge-darbe-gerilimi-koruma-cihazi/",
  },

];