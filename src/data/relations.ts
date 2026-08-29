import type { Relation } from "@/types/ecosystem";

export const relations: Relation[] = [

  // ==================================================
  // GÜÇ KALİTESİ & ENERJİ
  // ==================================================


  // ==================================================
  // 1. ŞEBEKE ANALİZÖRLERİ
  // ==================================================


  // --------------------------------------------------
  // ŞEBEKE ANALİZÖRLERİ ↔ AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "a-serisi-sebeke-analizorleri",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "sebeke-analizorleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Şebeke Analizi",
    targetTitle: "Standart AG Akım Ölçümü",

    reason:
      "Şebeke Analizörünün akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilmelidir. A Serisi Alçak Gerilim Akım Trafoları uygun alçak gerilim ölçüm uygulamalarında kullanılabilir.",

    whenUsed:
      "Alçak gerilim sistemlerinde harici akım trafosu üzerinden ölçüm yapılan uygulamalarda değerlendirilir.",

    technicalNote:
      "Kullanılacak akım trafosu tipi, oranı ve sekonder değeri seçilen Şebeke Analizörü modeline ve tesisin ölçüm yapısına göre doğrulanmalıdır.",
  },

  {
    id: "ayrilabilir-sebeke-analizorleri",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "sebeke-analizorleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Şebeke Analizi",
    targetTitle: "Retrofit Akım Ölçümü",

    reason:
      "Şebeke Analizörünün akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilmelidir. Ayrılabilir Akım Trafoları özellikle mevcut tesislerde kolay montaj avantajı sağlayabilir.",

    whenUsed:
      "Mevcut iletken veya bara bağlantısının sökülmesinin istenmediği retrofit ölçüm uygulamalarında değerlendirilebilir.",

    technicalNote:
      "Akım trafosunun çıkış değeri ve Şebeke Analizörünün giriş yapısı model bazında doğrulanmalıdır.",
  },

  {
    id: "clamp-sebeke-analizorleri",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "sebeke-analizorleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Şebeke Analizi",
    targetTitle: "Clamp Tip Retrofit Ölçüm",

    reason:
      "Şebeke Analizörünün akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilmelidir. Clamp Tip Ayrılabilir Akım Trafoları mevcut tesislerde pratik kurulum avantajı sağlayabilir.",

    whenUsed:
      "Mevcut tesislere sonradan ölçüm sistemi eklenen ve kolay montaj ihtiyacı bulunan uygulamalarda değerlendirilebilir.",

    technicalNote:
      "Clamp Tip Akım Trafosu çıkış yapısı ile kullanılan Şebeke Analizörü modelinin akım giriş yapısı uyumlu olmalıdır.",
  },

  {
    id: "uc-fazli-sebeke-analizorleri",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "sebeke-analizorleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Şebeke Analizi",
    targetTitle: "Kompakt Üç Faz Akım Ölçümü",

    reason:
      "Üç fazlı sistemlerde Şebeke Analizörünün akım ölçüm altyapısının tamamlanması için uygun 3 Fazlı Akım Trafosu çözümü birlikte değerlendirilebilir.",

    whenUsed:
      "Üç fazlı elektrik sistemlerinde uygun analizör ve akım trafosu mimarisinin kullanıldığı uygulamalarda değerlendirilir.",

    technicalNote:
      "Akım trafosu oranı, çıkış tipi ve bağlantı yapısı kullanılan Şebeke Analizörü modeline göre doğrulanmalıdır.",
  },

  {
    id: "og-akim-trafolari-sebeke-analizorleri",
    sourceProductId: "og-akim-trafolari",
    targetProductId: "sebeke-analizorleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "OG Şebeke Analizi",
    targetTitle: "OG Akım Ölçümü",

    reason:
      "Şebeke Analizörünün orta gerilim ölçüm uygulamalarında kullanılması durumunda uygun OG Akım Trafosu, akım ölçüm altyapısının tamamlanması için birlikte değerlendirilmelidir.",

    whenUsed:
      "Akım bilgisinin orta gerilim tarafından alınması gereken ve Şebeke Analizörünün uygun ölçüm mimarisinde kullanıldığı uygulamalarda değerlendirilir.",

    technicalNote:
      "OG Akım Trafosu oranı, sekonder değeri ve Şebeke Analizörü uyumluluğu kullanılan ürün modeli ve tesisin ölçüm yapısına göre doğrulanmalıdır.",
  },


  // --------------------------------------------------
  // ŞEBEKE ANALİZÖRLERİ ↔ KOMPANZASYON / GÜÇ KALİTESİ
  // --------------------------------------------------

  {
    id: "sebeke-analizorleri-reaktif-guc-kontrol-roleleri",
    sourceProductId: "sebeke-analizorleri",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "correction",

    sourceStatus: "optional",
    targetStatus: "conditional",

    sourceTitle: "Kompanzasyon Kontrolü",
    targetTitle: "Kapsamlı Şebeke Ölçümü",

    reason:
      "Şebeke Analizörü ile tesisin reaktif güç ve güç faktörü değerleri izlenirken, kompanzasyonun otomatik olarak yönetilmesi istenen uygulamalarda Reaktif Güç Kontrol Röleleri tamamlayıcı bir çözüm olarak değerlendirilebilir.",

    whenUsed:
      "Ölçümün yanında tesisin reaktif güç durumunun otomatik kompanzasyon sistemiyle kontrol edilmesi istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca elektriksel parametrelerin ölçülmesi istenen veya kompanzasyon ihtiyacı bulunmayan uygulamalarda gerekli değildir.",

    technicalNote:
      "Şebeke Analizörü ile Reaktif Güç Kontrol Rölesi birbirinin zorunlu tamamlayıcısı değildir. İlişki, ölçüm ve kompanzasyon ihtiyaçlarının aynı tesis içerisinde birlikte bulunabileceği çözüm senaryosuna dayanır.",
  },

  {
    id: "sebeke-analizorleri-svg-ahf",
    sourceProductId: "sebeke-analizorleri",
    targetProductId: "svg-ahf",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "optional",

    sourceTitle: "Güç Kalitesi İyileştirme",
    targetTitle: "Şebeke Analizi",

    reason:
      "Şebeke Analizörleriyle yapılan ölçümlerde reaktif güç, harmonik veya diğer güç kalitesi problemleri tespit edildiğinde SVG veya AHF çözümleri uygun iyileştirme seçenekleri olarak değerlendirilebilir.",

    whenUsed:
      "Ölçüm sonuçlarında reaktif güç kompanzasyonu veya harmonik azaltımı ihtiyacı tespit edildiğinde değerlendirilebilir.",

    whenNotRequired:
      "Aktif güç kalitesi iyileştirmesi gerektiren bir problem bulunmadığında gerekli değildir.",

    technicalNote:
      "Şebeke Analizörü SVG veya AHF'nin zorunlu parçası değildir. Uygun çözüm ölçüm sonuçları ve tesisin güç kalitesi ihtiyacına göre belirlenmelidir.",
  },


  // --------------------------------------------------
  // ŞEBEKE ANALİZÖRLERİ ↔ ENERJİ YÖNETİMİ
  // --------------------------------------------------

  {
    id: "sebeke-analizorleri-gateway",
    sourceProductId: "sebeke-analizorleri",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "Şebeke Ölçüm Kaynağı",

    reason:
      "Şebeke Analizörlerinden elde edilen ölçüm verilerinin uzaktan veya üst seviye sistemlerde değerlendirilmesi istenirse Gateway tamamlayıcı bir haberleşme çözümü olarak önerilebilir.",

    whenUsed:
      "Şebeke Analizörü verilerinin ağ, uzaktan erişim veya enerji yönetimi altyapısına aktarılması istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Seçilen analizör modeli ve mevcut sistem mimarisi gerekli haberleşme ihtiyacını başka bir yöntemle karşılıyorsa ayrıca Gateway gerekmeyebilir.",

    technicalNote:
      "Haberleşme mimarisi kullanılan Şebeke Analizörü ve Gateway modellerinin desteklediği haberleşme özelliklerine göre doğrulanmalıdır.",
  },

  {
    id: "sebeke-analizorleri-veri-toplayicilar",
    sourceProductId: "sebeke-analizorleri",
    targetProductId: "veri-toplayicilar",
    type: "data-transfer",

    sourceStatus: "conditional",
    targetStatus: "related",

    sourceTitle: "Merkezi Veri Toplama",
    targetTitle: "Şebeke Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip Şebeke Analizörlerinden elde edilen ölçüm ve parametre verilerinin bir araya getirilmesi gereken uygulamalarda Veri Toplayıcılar sistem mimarisinin bir parçası olarak değerlendirilebilir.",

    whenUsed:
      "Bir veya birden fazla Şebeke Analizöründen elde edilen saha verilerinin merkezi olarak toplanması ve üst seviye sisteme aktarılması gerektiğinde değerlendirilebilir.",

    whenNotRequired:
      "Cihaz verileri başka bir uygun haberleşme altyapısıyla doğrudan aktarılıyorsa ayrıca Veri Toplayıcı gerekmeyebilir.",

    technicalNote:
      "Veri Toplayıcı kullanımı, desteklenen cihazlar ve haberleşme altyapısına göre doğrulanmalıdır.",
  },

  {
    id: "sebeke-analizorleri-enerji-izleme-yazilimlari",
    sourceProductId: "sebeke-analizorleri",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Enerji İzleme",
    targetTitle: "Şebeke Ölçüm Kaynağı",

    reason:
      "Şebeke Analizörlerinden elde edilen ölçüm ve enerji verilerinin uzaktan izlenmesi, analiz edilmesi ve enerji yönetiminde değerlendirilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı bir çözüm olarak önerilebilir.",

    whenUsed:
      "Müşteri ölçüm verilerini yalnızca cihaz ekranından değil, Enerji Doktoru gibi uzaktan izleme çözümleri üzerinden de takip etmek istediğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca cihaz üzerinden yerel ölçüm yapılmasının yeterli olduğu uygulamalarda gerekli değildir.",

    technicalNote:
      "Enerji Doktoru üzerinden uzaktan izleme için uygun Gateway ve haberleşme altyapısının sistem içerisinde bulunması gerekir. Kullanılacak bağlantı yapısı ürün modeline göre doğrulanmalıdır.",
  },


  // ==================================================
  // 2. EMK SERİSİ CLASS A KALİTE ANALİZÖRÜ
  // ==================================================


  // --------------------------------------------------
  // EMK ↔ AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "a-serisi-emk",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "emk",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç Kalitesi Analizi",
    targetTitle: "Standart AG Akım Ölçümü",

    reason:
      "EMK Serisi Class A Kalite Analizörünün akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilmelidir. A Serisi Alçak Gerilim Akım Trafoları uygun alçak gerilim uygulamalarında kullanılabilir.",

    whenUsed:
      "Harici akım trafosu üzerinden ölçüm yapılan alçak gerilim güç kalitesi uygulamalarında değerlendirilir.",

    technicalNote:
      "Akım trafosu sekonder değeri ve oranı seçilen EMK modeli ve uygulamaya göre doğrulanmalıdır.",
  },

  {
    id: "ayrilabilir-emk",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "emk",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç Kalitesi Analizi",
    targetTitle: "Retrofit Akım Ölçümü",

    reason:
      "EMK'nın akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilmelidir. Ayrılabilir Akım Trafoları mevcut tesislerde montaj kolaylığı sağlayabilir.",

    whenUsed:
      "Mevcut tesislere sonradan güç kalitesi ölçüm altyapısı eklenen retrofit uygulamalarda değerlendirilebilir.",

    technicalNote:
      "EMK ile kullanılacak akım trafosunun çıkış değeri ve teknik uyumluluğu model bazında kontrol edilmelidir.",
  },

  {
    id: "clamp-emk",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "emk",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç Kalitesi Analizi",
    targetTitle: "Clamp Tip Retrofit Ölçüm",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları, mevcut kablolarda EMK için gerekli akım ölçüm altyapısının daha kolay oluşturulmasına yardımcı olabilir.",

    whenUsed:
      "Retrofit veya mevcut tesis güç kalitesi ölçüm uygulamalarında değerlendirilebilir.",

    technicalNote:
      "EMK giriş özellikleriyle uyumlu çıkış yapısına sahip Clamp Tip Akım Trafosu modeli seçilmelidir.",
  },

  {
    id: "uc-fazli-emk",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "emk",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Üç Faz Güç Kalitesi Analizi",
    targetTitle: "Kompakt Üç Faz Akım Ölçümü",

    reason:
      "Üç fazlı sistemlerde EMK'nın akım ölçüm altyapısının tamamlanması için uygun 3 Fazlı Akım Trafosu çözümü birlikte değerlendirilebilir.",

    whenUsed:
      "Üç fazlı güç kalitesi ölçüm uygulamalarında değerlendirilir.",

    technicalNote:
      "Akım trafosu çıkış tipi ve EMK giriş uyumluluğu kullanılan modellere göre doğrulanmalıdır.",
  },

  {
    id: "og-akim-trafosu-emk",
    sourceProductId: "og-akim-trafolari",
    targetProductId: "emk",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "OG Güç Kalitesi Analizi",
    targetTitle: "OG Akım Ölçümü",

    reason:
      "EMK Serisi Class A Kalite Analizörünün orta gerilim güç kalitesi uygulamalarında kullanılması durumunda uygun OG Akım Trafosu ölçüm altyapısının bir parçası olarak birlikte değerlendirilmelidir.",

    whenUsed:
      "Güç kalitesinin orta gerilim tarafında izlenmesi gereken uygulamalarda değerlendirilir.",

    technicalNote:
      "OG uygulamasındaki ölçüm mimarisi, sekonder değerleri ve ürün uyumluluğu proje bazında doğrulanmalıdır.",
  },


  // --------------------------------------------------
  // EMK ↔ KOMPANZASYON / GÜÇ KALİTESİ
  // --------------------------------------------------

  {
    id: "emk-svg-ahf",
    sourceProductId: "emk",
    targetProductId: "svg-ahf",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "optional",

    sourceTitle: "Aktif Güç Kalitesi İyileştirme",
    targetTitle: "Class A Güç Kalitesi Analizi",

    reason:
      "EMK güç kalitesi problemlerinin ölçülmesi ve analiz edilmesinde kullanılırken SVG ve AHF çözümleri belirli reaktif güç ve harmonik problemlerinin iyileştirilmesinde değerlendirilebilir.",

    whenUsed:
      "EMK ölçümleri sonucunda aktif güç kalitesi iyileştirmesi gerektiren bir durum tespit edildiğinde değerlendirilebilir.",

    whenNotRequired:
      "Ölçülen sistemde aktif kompanzasyon veya harmonik filtreleme ihtiyacı bulunmuyorsa gerekli değildir.",

    technicalNote:
      "Uygun SVG veya AHF çözümünün seçimi ölçüm sonuçları, tesis özellikleri ve mühendislik değerlendirmesine göre yapılmalıdır.",
  },

  {
    id: "emk-harmonik-filtre-reaktorleri",
    sourceProductId: "emk",
    targetProductId: "harmonik-filtre-reaktorleri",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Pasif Harmonik Çözümü",
    targetTitle: "Harmonik Analizi",

    reason:
      "EMK ile tesisin harmonik yapısı ayrıntılı olarak değerlendirilebilir. Harmonik seviyelerinin kompanzasyon sistemini etkilediği uygulamalarda Harmonik Filtre Reaktörleri tamamlayıcı bir çözüm olarak değerlendirilebilir.",

    whenUsed:
      "EMK ölçümlerinde harmonik seviyelerinin reaktörlü kompanzasyon çözümünün değerlendirilmesini gerektirdiği uygulamalarda önerilebilir.",

    whenNotRequired:
      "Harmonik seviyelerinin Harmonik Filtre Reaktörü kullanımını gerektirmediği sistemlerde gerekli değildir.",

    technicalNote:
      "Harmonik Filtre Reaktörü seçimi yalnızca analizörün varlığına bağlı değildir; tesis ölçümleri ve mühendislik değerlendirmesi esas alınmalıdır.",
  },

  {
    id: "emk-reaktif-guc-kontrol-roleleri",
    sourceProductId: "emk",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "optional",

    sourceTitle: "Kompanzasyon Kontrolü",
    targetTitle: "Güç Kalitesi Analizi",

    reason:
      "EMK ile tesisin reaktif güç ve güç faktörü performansı analiz edilirken, tespit edilen reaktif güç ihtiyacının otomatik kompanzasyon sistemiyle yönetilmesi gereken uygulamalarda Reaktif Güç Kontrol Röleleri tamamlayıcı bir çözüm olarak değerlendirilebilir.",

    whenUsed:
      "EMK ölçümleri sonucunda tesisin reaktif güç kontrolüne veya otomatik kompanzasyona ihtiyaç duyduğu durumlarda önerilebilir.",

    whenNotRequired:
      "Yalnızca güç kalitesi ölçümü ve analizi yapılan veya kompanzasyon ihtiyacı bulunmayan uygulamalarda gerekli değildir.",

    technicalNote:
      "EMK ile Reaktif Güç Kontrol Rölesi doğrudan birbirinin zorunlu tamamlayıcısı değildir. İlişki ölçüm sonucunda ortaya çıkan kompanzasyon ihtiyacına bağlıdır.",
  },


  // --------------------------------------------------
  // EMK ↔ ENERJİ YÖNETİMİ
  // --------------------------------------------------

  {
    id: "emk-gateway",
    sourceProductId: "emk",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "Güç Kalitesi Veri Kaynağı",

    reason:
      "EMK ile elde edilen enerji ve güç kalitesi verilerinin uzaktan veya üst seviye sistemlerde değerlendirilmesi istenirse Gateway tamamlayıcı bir haberleşme çözümü olarak önerilebilir.",

    whenUsed:
      "EMK verilerinin ağ, uzaktan erişim veya enerji yönetimi altyapısına aktarılması istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Kullanılan EMK modelinin ve mevcut sistemin haberleşme özellikleri ihtiyacı başka bir yöntemle karşılıyorsa ayrıca Gateway gerekmeyebilir.",

    technicalNote:
      "Gateway gereksinimi EMK modeli, haberleşme protokolü ve kullanılan sistem mimarisine göre doğrulanmalıdır.",
  },

  {
    id: "emk-enerji-izleme-yazilimlari",
    sourceProductId: "emk",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Güç Kalitesi İzleme",
    targetTitle: "Güç Kalitesi Veri Kaynağı",

    reason:
      "EMK tarafından ölçülen enerji ve güç kalitesi verilerinin uzaktan takip edilmesi ve analiz edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı bir çözüm olarak önerilebilir.",

    whenUsed:
      "Enerji ve güç kalitesi verilerinin cihaz dışında Enerji Doktoru gibi uzaktan izleme çözümleri üzerinden takip edilmesi istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca cihaz üzerinden yerel ölçüm ve analiz yapılması yeterliyse gerekli değildir.",

    technicalNote:
      "Enerji Doktoru üzerinden uzaktan izleme için uygun Gateway ve haberleşme altyapısının sistem içerisinde bulunması gerekir. Kesin bağlantı yapısı kullanılan EMK modeline göre doğrulanmalıdır.",
  },


  // ==================================================
  // 3. GÜÇ VE ENERJİ ÖLÇERLER
  // ==================================================


  // --------------------------------------------------
  // GÜÇ VE ENERJİ ÖLÇERLER ↔ AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "a-serisi-guc-enerji-olcer",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "guc-enerji-olcer",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç ve Enerji Ölçümü",
    targetTitle: "Standart AG Akım Ölçümü",

    reason:
      "Harici akım trafosu girişi bulunan Güç ve Enerji Ölçer modellerinde A Serisi Alçak Gerilim Akım Trafoları, hat akımının ölçülmesi için tamamlayıcı çözüm olarak kullanılabilir.",

    whenUsed:
      "Harici akım trafosu üzerinden ölçüm yapan ve uygun akım trafosu girişine sahip modellerde değerlendirilir.",

    whenNotRequired:
      "Doğrudan akım ölçümü yapan veya farklı akım giriş yapısına sahip modellerde harici akım trafosu gerekmeyebilir.",

    technicalNote:
      "Akım trafosu oranı ve sekonder değeri kullanılacak Güç ve Enerji Ölçer modeline göre doğrulanmalıdır.",
  },

  {
    id: "ayrilabilir-akim-trafolari-guc-enerji-olcer",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "guc-enerji-olcer",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç ve Enerji Ölçümü",
    targetTitle: "Retrofit Akım Ölçümü",

    reason:
      "Ayrılabilir Akım Trafoları, uygun akım trafosu girişine sahip Güç ve Enerji Ölçerlerde mevcut bara veya iletken sökülmeden akım ölçüm altyapısının oluşturulmasına yardımcı olabilir.",

    whenUsed:
      "Mevcut tesislere sonradan enerji ölçümü eklenen ve kolay montaj ihtiyacı bulunan uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Doğrudan akım ölçen veya farklı akım giriş yapısına sahip Güç ve Enerji Ölçer modellerinde gerekli olmayabilir.",

    technicalNote:
      "Akım trafosu çıkış değeri ve Güç ve Enerji Ölçerin akım giriş yapısı model bazında eşleştirilmelidir.",
  },

  {
    id: "clamp-tip-guc-enerji-olcer",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "guc-enerji-olcer",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç ve Enerji Ölçümü",
    targetTitle: "Clamp Tip Retrofit Ölçüm",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları, uygun akım girişine sahip Güç ve Enerji Ölçerlerde mevcut kablolara kolay montaj sağlayan bir ölçüm çözümü olarak değerlendirilebilir.",

    whenUsed:
      "Mevcut tesisatta kolay montaj gerektiren ve seçilen Güç ve Enerji Ölçerin ilgili akım trafosu çıkışını desteklediği uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Doğrudan ölçüm yapan veya farklı akım giriş yapısına sahip ürün modellerinde gerekli olmayabilir.",

    technicalNote:
      "Clamp Tip Akım Trafosu çıkış tipi ile ölçüm cihazının akım giriş tipi model bazında eşleştirilmelidir.",
  },

  {
    id: "uc-fazli-akim-trafolari-guc-enerji-olcer",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "guc-enerji-olcer",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Üç Faz Güç ve Enerji Ölçümü",
    targetTitle: "Kompakt Üç Faz Akım Ölçümü",

    reason:
      "3 Fazlı Akım Trafoları, uygun Güç ve Enerji Ölçer modellerinde üç faz akımlarının ve buna bağlı enerji parametrelerinin ölçülmesi için tamamlayıcı çözüm olarak kullanılabilir.",

    whenUsed:
      "Üç fazlı sistemlerde hat akımlarının harici akım trafosu üzerinden ölçülmesi gereken uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Doğrudan akım ölçen veya farklı akım sensörü girişine sahip Güç ve Enerji Ölçer modellerinde gerekli olmayabilir.",

    technicalNote:
      "Akım trafosu oranı, sekonder çıkışı ve ölçüm cihazının akım giriş yapısı model bazında doğrulanmalıdır.",
  },


  // --------------------------------------------------
  // GÜÇ VE ENERJİ ÖLÇERLER ↔ ENERJİ YÖNETİMİ
  // --------------------------------------------------

  {
    id: "guc-enerji-olcer-gateway",
    sourceProductId: "guc-enerji-olcer",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "Enerji Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip Güç ve Enerji Ölçerlerden elde edilen ölçüm ve tüketim verilerinin uzaktan veya üst seviye sistemlerde değerlendirilmesi istenirse Gateway tamamlayıcı bir haberleşme çözümü olarak önerilebilir.",

    whenUsed:
      "Enerji ölçüm verilerinin ağ, uzaktan erişim veya enerji yönetimi altyapısına aktarılması istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca yerel ölçüm yapılan veya gerekli haberleşme altyapısının başka bir yöntemle sağlandığı uygulamalarda Gateway gerekmeyebilir.",

    technicalNote:
      "Gateway kullanımı ve protokol uyumluluğu seçilen Güç ve Enerji Ölçer modelinin haberleşme özelliklerine göre doğrulanmalıdır.",
  },

  {
    id: "guc-enerji-olcer-veri-toplayicilar",
    sourceProductId: "guc-enerji-olcer",
    targetProductId: "veri-toplayicilar",
    type: "data-transfer",

    sourceStatus: "conditional",
    targetStatus: "related",

    sourceTitle: "Merkezi Veri Toplama",
    targetTitle: "Enerji Ölçüm Kaynağı",

    reason:
      "Uygun haberleşme veya veri çıkışına sahip Güç ve Enerji Ölçerlerden elde edilen ölçüm ve tüketim verileri Veri Toplayıcılar aracılığıyla merkezi veri toplama altyapısına aktarılabilir.",

    whenUsed:
      "Ölçüm ve tüketim verilerinin Veri Toplayıcı üzerinden bir araya getirilmesi ve üst seviye sisteme aktarılması gereken uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Cihaz verileri başka bir uygun haberleşme altyapısıyla doğrudan aktarılıyorsa ayrıca Veri Toplayıcı gerekmeyebilir.",

    technicalNote:
      "Bağlantı ve veri aktarım seçeneklerinin desteği kullanılan Güç ve Enerji Ölçer ve Veri Toplayıcı modellerine göre doğrulanmalıdır.",
  },

  {
    id: "guc-enerji-olcer-enerji-izleme-yazilimlari",
    sourceProductId: "guc-enerji-olcer",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Enerji İzleme",
    targetTitle: "Enerji Ölçüm Kaynağı",

    reason:
      "Güç ve Enerji Ölçerlerden elde edilen ölçüm ve tüketim verilerinin uzaktan takip edilmesi, karşılaştırılması ve analiz edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı bir çözüm olarak önerilebilir.",

    whenUsed:
      "Müşteri enerji tüketimi ve elektriksel ölçüm verilerini cihaz ekranının yanı sıra Enerji Doktoru gibi uzaktan izleme çözümleri üzerinden takip etmek istediğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca yerel enerji ölçümü yapılan uygulamalarda gerekli değildir.",

    technicalNote:
      "Enerji Doktoru üzerinden uzaktan izleme için uygun Gateway ve haberleşme altyapısının sistem içerisinde bulunması gerekir. Kesin bağlantı yapısı kullanılan Güç ve Enerji Ölçer modeline göre doğrulanmalıdır.",
  },

  // ==================================================
  // ÖLÇME
  // ==================================================


  // ==================================================
  // 1. MULTİMETRELER
  // ==================================================


  // --------------------------------------------------
  // MULTİMETRELER ↔ AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "a-serisi-multimetreler",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "multimetre",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Çok Parametreli Ölçüm",
    targetTitle: "Standart AG Akım Ölçümü",

    reason:
      "Harici akım trafosu girişi bulunan Multimetre modellerinde A Serisi Alçak Gerilim Akım Trafoları, akım bilgisinin ölçüm cihazına uygun seviyede sağlanması için kullanılabilir.",

    whenUsed:
      "Harici akım trafosu üzerinden ölçüm yapan uygun Multimetre modellerinde değerlendirilir.",

    whenNotRequired:
      "Harici akım trafosu gerektirmeyen veya farklı akım giriş yapısına sahip Multimetre modellerinde gerekli olmayabilir.",

    technicalNote:
      "Akım trafosu oranı ve sekonder değeri seçilen Multimetre modelinin giriş özelliklerine göre doğrulanmalıdır.",
  },

  {
    id: "ayrilabilir-akim-trafolari-multimetreler",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "multimetre",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Çok Parametreli Ölçüm",
    targetTitle: "Retrofit Akım Ölçümü",

    reason:
      "Ayrılabilir Akım Trafoları, uygun Multimetre modellerinde mevcut bara veya iletken bağlantısı sökülmeden akım ölçüm altyapısının oluşturulmasına yardımcı olabilir.",

    whenUsed:
      "Mevcut tesislere sonradan Multimetre eklendiği retrofit uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Harici akım trafosu kullanılmayan Multimetre modellerinde gerekli değildir.",

    technicalNote:
      "Akım trafosu sekonder çıkışı ile Multimetrenin akım giriş yapısı model bazında eşleştirilmelidir.",
  },

  {
    id: "clamp-tip-multimetreler",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "multimetre",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Çok Parametreli Ölçüm",
    targetTitle: "Clamp Tip Retrofit Ölçüm",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları, uygun Multimetre modellerinde mevcut kablolara kolay montaj sağlayan bir akım ölçüm çözümü olarak değerlendirilebilir.",

    whenUsed:
      "Enerji kesilmeden veya mevcut kablo bağlantısı sökülmeden ölçüm altyapısı oluşturulması gereken uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Clamp Tip Akım Trafosu çıkışı Multimetrenin giriş yapısıyla uyumlu değilse farklı bir akım trafosu çözümü kullanılmalıdır.",

    technicalNote:
      "Akım trafosu çıkış tipi ile Multimetrenin akım giriş tipi model bazında doğrulanmalıdır.",
  },

  {
    id: "uc-fazli-akim-trafolari-multimetreler",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "multimetre",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Üç Faz Çok Parametreli Ölçüm",
    targetTitle: "Kompakt Üç Faz Akım Ölçümü",

    reason:
      "3 Fazlı Akım Trafoları, uygun Multimetre modellerinde üç faz akımlarının ölçülmesi için kompakt bir akım ölçüm çözümü olarak değerlendirilebilir.",

    whenUsed:
      "Üç fazlı sistemlerde Multimetrenin harici akım trafosu üzerinden ölçüm yaptığı uygun uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Farklı akım giriş yapısına sahip Multimetre modellerinde gerekli olmayabilir.",

    technicalNote:
      "Akım trafosu çıkış yapısı ve Multimetre giriş özellikleri model bazında doğrulanmalıdır.",
  },


  // --------------------------------------------------
  // MULTİMETRELER ↔ ENERJİ YÖNETİMİ
  // --------------------------------------------------

  {
    id: "multimetreler-gateway",
    sourceProductId: "multimetre",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "Çok Parametreli Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip Multimetrelerden elde edilen elektriksel ölçüm verilerinin uzaktan veya üst seviye sistemlerde değerlendirilmesi istenirse Gateway tamamlayıcı haberleşme çözümü olarak önerilebilir.",

    whenUsed:
      "Multimetre verilerinin ağ veya enerji yönetimi altyapısına aktarılması istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Haberleşmesiz modellerde veya yalnızca yerel ölçüm yapılan uygulamalarda Gateway gerekli değildir.",

    technicalNote:
      "Gateway kullanımı ve protokol uyumluluğu seçilen Multimetre modelinin haberleşme özelliklerine göre doğrulanmalıdır.",
  },

  {
    id: "multimetreler-veri-toplayicilar",
    sourceProductId: "multimetre",
    targetProductId: "veri-toplayicilar",
    type: "data-transfer",

    sourceStatus: "conditional",
    targetStatus: "related",

    sourceTitle: "Merkezi Veri Toplama",
    targetTitle: "Çok Parametreli Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip Multimetrelerden elde edilen elektriksel ölçüm değerleri Veri Toplayıcılar aracılığıyla merkezi enerji yönetimi altyapısına aktarılabilir.",

    whenUsed:
      "Bir veya birden fazla Multimetreden gelen ölçüm verilerinin merkezi olarak toplanması gerektiğinde değerlendirilebilir.",

    whenNotRequired:
      "Veriler başka bir uygun haberleşme altyapısıyla aktarılıyorsa ayrıca Veri Toplayıcı gerekli olmayabilir.",

    technicalNote:
      "İlişki yalnızca uygun haberleşme özelliğine sahip Multimetre ve Veri Toplayıcı modelleri için geçerlidir.",
  },

  {
    id: "multimetreler-enerji-izleme-yazilimlari",
    sourceProductId: "multimetre",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Ölçüm İzleme",
    targetTitle: "Çok Parametreli Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip Multimetrelerden elde edilen elektriksel ölçüm değerlerinin uzaktan izlenmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı çözüm olarak değerlendirilebilir.",

    whenUsed:
      "Temel elektriksel parametrelerin cihaz ekranının yanı sıra merkezi veya uzaktan izleme sistemi üzerinden de takip edilmesi istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca yerel panel ölçümünün yeterli olduğu uygulamalarda gerekli değildir.",

    technicalNote:
      "Uzaktan izleme için uygun Gateway ve haberleşme altyapısının bulunması gerekir. Uyumluluk Multimetre modeline göre doğrulanmalıdır.",
  },


  // --------------------------------------------------
  // TEK PARAMETRELİ ÖLÇÜM ↔ MULTİMETRE
  // --------------------------------------------------

  {
    id: "ampermetreler-multimetreler",
    sourceProductId: "ampermetreler",
    targetProductId: "multimetre",
    type: "measurement-input",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Çok Parametreli Ölçüm",
    targetTitle: "Akım Odaklı Ölçüm",

    reason:
      "Ampermetreler akım değerinin izlenmesine odaklanırken Multimetreler akımın yanında gerilim, frekans ve güç faktörü gibi farklı temel elektriksel parametrelerin aynı cihaz üzerinden izlenmesini sağlar.",

    whenUsed:
      "Yalnızca akım izleme ihtiyacında Ampermetre; birden fazla temel elektriksel parametrenin aynı cihaz üzerinden izlenmesi istendiğinde Multimetre değerlendirilebilir.",

    technicalNote:
      "İki ürün birbirinin zorunlu tamamlayıcısı değildir. Seçim ölçülmesi gereken parametre kapsamına göre yapılmalıdır.",
  },

  {
    id: "voltmetreler-multimetreler",
    sourceProductId: "voltmetreler",
    targetProductId: "multimetre",
    type: "measurement-input",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Çok Parametreli Ölçüm",
    targetTitle: "Gerilim Odaklı Ölçüm",

    reason:
      "Voltmetreler gerilim değerinin izlenmesine odaklanırken Multimetreler gerilimin yanında akım, frekans ve güç faktörü gibi farklı temel elektriksel parametreleri aynı cihaz üzerinden izleyebilir.",

    whenUsed:
      "Yalnızca gerilim takibinde Voltmetre; daha geniş temel ölçüm ihtiyacında Multimetre değerlendirilebilir.",

    technicalNote:
      "Seçim ölçülmesi gereken elektriksel parametre sayısına ve uygulama ihtiyacına göre yapılmalıdır.",
  },

  {
    id: "frekansmetreler-multimetreler",
    sourceProductId: "frekansmetreler",
    targetProductId: "multimetre",
    type: "measurement-input",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Çok Parametreli Ölçüm",
    targetTitle: "Frekans Odaklı Ölçüm",

    reason:
      "Frekansmetreler işletme frekansının izlenmesine odaklanırken Multimetreler frekansın yanında akım, gerilim ve güç faktörü gibi farklı temel parametreleri aynı cihaz üzerinden izleyebilir.",

    whenUsed:
      "Yalnızca frekans takibinde Frekansmetre; daha geniş temel ölçüm ihtiyacında Multimetre değerlendirilebilir.",

    technicalNote:
      "İki ürün arasındaki seçim ihtiyaç duyulan ölçüm kapsamına göre yapılmalıdır.",
  },

  {
    id: "cosfimetreler-multimetreler",
    sourceProductId: "cosfimetreler",
    targetProductId: "multimetre",
    type: "measurement-input",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Çok Parametreli Ölçüm",
    targetTitle: "Güç Faktörü Odaklı Ölçüm",

    reason:
      "Cosφmetreler güç faktörünün izlenmesine odaklanırken Multimetreler güç faktörünün yanında akım, gerilim ve frekans gibi farklı temel parametreleri aynı cihaz üzerinden izleyebilir.",

    whenUsed:
      "Yalnızca güç faktörünün izlenmesinde Cosφmetre; daha geniş temel ölçüm ihtiyacında Multimetre değerlendirilebilir.",

    technicalNote:
      "Seçim müşterinin ihtiyaç duyduğu ölçüm kapsamına göre yapılmalıdır.",
  },


  // ==================================================
  // 2. AMPERMETRELER
  // ==================================================

  {
    id: "a-serisi-ampermetreler",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "ampermetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Akım Gösterimi",
    targetTitle: "Standart AG Akım Ölçümü",

    reason:
      "A Serisi Alçak Gerilim Akım Trafoları, harici akım trafosu girişi bulunan Ampermetre modellerine uygun ölçüm akımı sağlayabilir.",

    whenUsed:
      "Harici akım trafosu üzerinden ölçüm yapan Ampermetre modellerinde değerlendirilebilir.",

    whenNotRequired:
      "Harici akım trafosu gerektirmeyen Ampermetre modellerinde gerekli değildir.",

    technicalNote:
      "Akım trafosu oranı ve sekonder değeri Ampermetre modeline göre doğrulanmalıdır.",
  },

  {
    id: "ayrilabilir-ampermetreler",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "ampermetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Akım Gösterimi",
    targetTitle: "Retrofit Akım Ölçümü",

    reason:
      "Ayrılabilir Akım Trafoları mevcut tesislerde bağlantı sökülmeden uygun Ampermetre için ölçüm sinyalinin elde edilmesini kolaylaştırabilir.",

    whenUsed:
      "Mevcut tesislere sonradan Ampermetre eklendiği retrofit uygulamalarda değerlendirilebilir.",

    technicalNote:
      "Akım trafosu çıkış değeri Ampermetre giriş yapısıyla uyumlu olmalıdır.",
  },

  {
    id: "clamp-ampermetreler",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "ampermetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Akım Gösterimi",
    targetTitle: "Clamp Tip Retrofit Ölçüm",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları, mevcut kablolarda uygun Ampermetre modelleri için kolay montajlı akım ölçüm çözümü sağlayabilir.",

    whenUsed:
      "Kablo bağlantısının sökülmesinin istenmediği retrofit ölçüm uygulamalarında değerlendirilebilir.",

    technicalNote:
      "Akım trafosu çıkışı ile Ampermetrenin giriş tipi uyumlu olmalıdır.",
  },

  {
    id: "uc-fazli-ampermetreler",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "ampermetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Üç Faz Akım Gösterimi",
    targetTitle: "Kompakt Üç Faz Akım Ölçümü",

    reason:
      "3 Fazlı Akım Trafoları uygun üç fazlı Ampermetre uygulamalarında faz akımlarının ölçülmesi için kullanılabilir.",

    whenUsed:
      "Üç faz akımının izlenmesi gereken ve uygun Ampermetre modelinin kullanıldığı uygulamalarda değerlendirilebilir.",

    technicalNote:
      "Akım trafosu çıkış tipi ve Ampermetre giriş uyumluluğu model bazında doğrulanmalıdır.",
  },

  {
    id: "akim-transduserleri-ampermetreler",
    sourceProductId: "akim-transduserleri",
    targetProductId: "ampermetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Yerel Akım Gösterimi",
    targetTitle: "Analog Akım Sinyali",

    reason:
      "Ampermetreler akım değerinin cihaz üzerinde görüntülenmesine odaklanırken Akım Transdüserleri ölçülen AC akım bilgisini otomasyon ve kontrol sistemlerinde kullanılabilecek standart analog sinyale dönüştürür.",

    whenUsed:
      "Akımın yerel olarak görüntülenmesi gerekiyorsa Ampermetre; ölçüm bilgisinin otomasyon veya kontrol sistemine analog sinyal olarak aktarılması gerekiyorsa Akım Transdüseri değerlendirilebilir.",

    technicalNote:
      "Bu iki ürün farklı kullanım amaçlarına sahiptir ve doğrudan birebir ikame değildir.",
  },


  // ==================================================
  // 3. VOLTMETRELER
  // ==================================================



  {
    id: "voltmetreler-gerilim-koruma-roleleri",
    sourceProductId: "voltmetreler",
    targetProductId: "gerilim-koruma-roleleri",
    type: "protection",

    sourceStatus: "conditional",
    targetStatus: "optional",

    sourceTitle: "Gerilim Koruması",
    targetTitle: "Gerilim Görüntüleme",

    reason:
      "Voltmetreler gerilim değerinin ölçülmesini ve görüntülenmesini sağlarken Gerilim Koruma Röleleri düşük veya aşırı gerilim gibi anormal şebeke koşullarına karşı koruma fonksiyonu sağlayabilir.",

    whenUsed:
      "Gerilimin yalnızca görüntülenmesinin yanında belirlenen sınırların dışına çıkılması durumunda koruma fonksiyonu da isteniyorsa değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca gerilim göstergesi istenen veya gerilim korumasının başka bir sistem tarafından sağlandığı uygulamalarda gerekli değildir.",

    technicalNote:
      "Voltmetre ölçüm, Gerilim Koruma Rölesi ise koruma amacıyla kullanılır; iki ürün birbirinin yerine geçmez.",
  },

  {
    id: "gerilim-transduserleri-voltmetreler",
    sourceProductId: "gerilim-transduserleri",
    targetProductId: "voltmetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Yerel Gerilim Gösterimi",
    targetTitle: "Analog Gerilim Sinyali",

    reason:
      "Voltmetreler gerilim değerinin cihaz üzerinde görüntülenmesine odaklanırken Gerilim Transdüserleri AC gerilim bilgisini kontrol ve otomasyon sistemlerinde kullanılabilecek standart analog sinyale dönüştürür.",

    whenUsed:
      "Gerilimin yerel olarak görüntülenmesi isteniyorsa Voltmetre; ölçüm bilgisinin başka bir kontrol veya otomasyon sistemine analog sinyal olarak aktarılması isteniyorsa Gerilim Transdüseri değerlendirilebilir.",

    technicalNote:
      "İki ürün farklı kullanım amaçlarına sahiptir ve doğrudan birebir ikame değildir.",
  },


  // ==================================================
  // 4. FREKANSMETRELER
  // ==================================================



  {
    id: "frekansmetreler-gerilim-koruma-roleleri",
    sourceProductId: "frekansmetreler",
    targetProductId: "gerilim-koruma-roleleri",
    type: "protection",

    sourceStatus: "conditional",
    targetStatus: "optional",

    sourceTitle: "Frekans Koruması",
    targetTitle: "Frekans Görüntüleme",

    reason:
      "Frekansmetreler sistem frekansının ölçülmesini sağlarken frekans koruma fonksiyonu bulunan uygun Gerilim Koruma Rölesi modelleri, frekansın belirlenen sınırların dışına çıkması durumunda koruma amacıyla değerlendirilebilir.",

    whenUsed:
      "Frekansın yalnızca görüntülenmesinin yanında frekans sapmalarına karşı otomatik koruma veya kontrol fonksiyonu da istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca frekans değerinin izlenmesinin yeterli olduğu veya korumanın başka bir sistem tarafından sağlandığı uygulamalarda gerekli değildir.",

    technicalNote:
      "Frekans koruma özelliği tüm Gerilim Koruma Rölesi modellerinde bulunmayabilir. Uygun model ürün özelliklerine göre doğrulanmalıdır.",
  },


  // ==================================================
  // 5. COSφMETRELER
  // ==================================================

  {
    id: "a-serisi-cosfimetreler",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "cosfimetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç Faktörü Ölçümü",
    targetTitle: "Standart 5 A Akım Ölçümü",

    reason:
      "Cosφmetrenin güç faktörünü hesaplayabilmesi için gerekli akım bilgisinin sağlanmasında uygun A Serisi Alçak Gerilim Akım Trafosu kullanılabilir.",

    whenUsed:
      "5 A sekonderli harici akım trafosu üzerinden Cosφ ölçümü yapılan alçak gerilim uygulamalarında değerlendirilir.",

    technicalNote:
      "Akım trafosu oranı ve sekonder değeri kullanılan Cosφmetreye ve tesis akımına göre seçilmelidir.",
  },

  {
    id: "ayrilabilir-cosfimetreler",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "cosfimetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç Faktörü Ölçümü",
    targetTitle: "Retrofit 5 A Akım Ölçümü",

    reason:
      "Cosφmetrenin ihtiyaç duyduğu akım bilgisinin sağlanmasında Ayrılabilir Akım Trafoları mevcut tesislerde montaj kolaylığı sağlayan bir seçenek olarak değerlendirilebilir.",

    whenUsed:
      "Mevcut bara veya iletken bağlantısının sökülmesinin istenmediği retrofit uygulamalarda değerlendirilebilir.",

    technicalNote:
      "Cosφmetrenin giriş yapısıyla uyumlu sekonder çıkışa sahip Akım Trafosu seçilmelidir.",
  },

  {
    id: "clamp-cosfimetreler",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "cosfimetreler",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Güç Faktörü Ölçümü",
    targetTitle: "Clamp Tip 5 A Akım Ölçümü",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları mevcut kablolarda Cosφmetre için gerekli akım bilgisinin kolay şekilde elde edilmesine yardımcı olabilir.",

    whenUsed:
      "Mevcut tesislere sonradan Cosφ ölçümü eklendiği uygulamalarda değerlendirilebilir.",

    technicalNote:
      "Cosφmetrenin akım giriş yapısıyla uyumlu çıkış sağlayan Clamp Tip model seçilmelidir.",
  },

  {
    id: "cosfimetreler-reaktif-guc-kontrol-roleleri",
    sourceProductId: "cosfimetreler",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "optional",

    sourceTitle: "Otomatik Kompanzasyon Kontrolü",
    targetTitle: "Güç Faktörü Görüntüleme",

    reason:
      "Cosφmetre ile tesisin güç faktörü izlenirken reaktif güç durumunun yalnızca görüntülenmesi yerine otomatik olarak yönetilmesi gerekiyorsa Reaktif Güç Kontrol Rölesi değerlendirilebilir.",

    whenUsed:
      "Cosφ değerlerinin kompanzasyon ihtiyacına işaret ettiği ve reaktif gücün otomatik olarak yönetilmek istendiği uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca güç faktörü değerinin görüntülenmesinin yeterli olduğu veya kompanzasyon ihtiyacının bulunmadığı sistemlerde gerekli değildir.",

    technicalNote:
      "Cosφmetre ve Reaktif Güç Kontrol Rölesi birbirinin zorunlu tamamlayıcısı değildir.",
  },

  {
    id: "cosfimetreler-kompanzasyon-kontaktorleri",
    sourceProductId: "cosfimetreler",
    targetProductId: "kompanzasyon-kontaktorleri",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "optional",

    sourceTitle: "Kademe Anahtarlama",
    targetTitle: "Güç Faktörü İzleme",

    reason:
      "Cosφ ölçümü sonucunda klasik kondansatör kademeli kompanzasyon ihtiyacı ortaya çıkarsa Kompanzasyon Kontaktörleri kompanzasyon sisteminin anahtarlama elemanlarından biri olarak değerlendirilebilir.",

    whenUsed:
      "Kontaktörlü klasik kompanzasyon sisteminin uygulanacağı tesislerde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca ölçüm yapılan veya farklı bir kompanzasyon teknolojisinin kullanıldığı sistemlerde gerekli değildir.",

    technicalNote:
      "Kompanzasyon Kontaktörü Cosφmetre tarafından doğrudan kontrol edilmez; kompanzasyon sisteminin bir parçasıdır.",
  },

  {
    id: "cosfimetreler-kondansatorler",
    sourceProductId: "cosfimetreler",
    targetProductId: "kondansator",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "optional",

    sourceTitle: "Kapasitif Kompanzasyon",
    targetTitle: "Güç Faktörü İzleme",

    reason:
      "Cosφ ölçümünde tesisin endüktif reaktif güç ihtiyacı tespit edilirse Kondansatörler klasik kompanzasyon çözümünün bir parçası olarak değerlendirilebilir.",

    whenUsed:
      "Endüktif yüklerin oluşturduğu reaktif gücün kapasitif kompanzasyonla azaltılması gereken uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Kompanzasyon ihtiyacı bulunmayan veya farklı kompanzasyon teknolojisinin kullanıldığı sistemlerde gerekli değildir.",

    technicalNote:
      "Kondansatör boyutlandırması tesisin reaktif güç ihtiyacı ve mühendislik hesabına göre yapılmalıdır.",
  },


  // ==================================================
  // 6. AKIM TRANSDÜSERLERİ
  // ==================================================

  {
    id: "a-serisi-akim-transduserleri",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "akim-transduserleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Analog Akım Dönüşümü",
    targetTitle: "Standart Akım Ölçüm Girişi",

    reason:
      "Uygun A Serisi Alçak Gerilim Akım Trafosu, primer hat akımını Akım Transdüserinin kullanabileceği sekonder akım seviyesine dönüştürebilir.",

    whenUsed:
      "Akım Transdüserinin girişine uygun sekonder değere sahip harici akım trafosu gereken uygulamalarda değerlendirilir.",

    technicalNote:
      "Akım trafosu sekonder değeri kullanılan Akım Transdüseri modelinin giriş değeriyle uyumlu olmalıdır.",
  },

  {
    id: "ayrilabilir-akim-transduserleri",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "akim-transduserleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Analog Akım Dönüşümü",
    targetTitle: "Retrofit Akım Ölçüm Girişi",

    reason:
      "Ayrılabilir Akım Trafoları mevcut tesislerde bağlantılar sökülmeden Akım Transdüseri için gerekli ölçüm sinyalinin elde edilmesini sağlayabilir.",

    whenUsed:
      "Mevcut tesislere sonradan analog akım izleme altyapısı eklendiğinde değerlendirilebilir.",

    technicalNote:
      "Akım Trafosu sekonder çıkışı ile Akım Transdüserinin giriş değeri uyumlu olmalıdır.",
  },

  {
    id: "clamp-akim-transduserleri",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "akim-transduserleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Analog Akım Dönüşümü",
    targetTitle: "Clamp Tip Akım Ölçüm Girişi",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları mevcut kablolarda Akım Transdüseri için gerekli ölçüm akımının kolay şekilde elde edilmesine yardımcı olabilir.",

    whenUsed:
      "Kabloyu sökmeden ölçüm altyapısı oluşturulması gereken retrofit uygulamalarda değerlendirilebilir.",

    technicalNote:
      "Akım Trafosu çıkışının kullanılan Akım Transdüserinin giriş değeriyle uyumlu olması gerekir.",
  },

  {
    id: "uc-fazli-akim-transduserleri",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "akim-transduserleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Üç Faz Analog Akım Ölçümü",
    targetTitle: "Üç Faz Akım Ölçüm Girişi",

    reason:
      "3 Fazlı Akım Trafoları uygun üç fazlı sistemlerde faz akımlarının Akım Transdüseri tabanlı analog ölçüm altyapısına aktarılmasında kullanılabilir.",

    whenUsed:
      "Üç fazlı sistemlerde faz akımlarının analog sinyallere dönüştürülmesi gereken uygulamalarda değerlendirilebilir.",

    technicalNote:
      "Akım Transdüserlerinin giriş yapısı nedeniyle üç faz ölçüm mimarisi uygulama bazında doğrulanmalıdır.",
  },

  {
    id: "og-akim-trafolari-akim-transduserleri",
    sourceProductId: "og-akim-trafolari",
    targetProductId: "akim-transduserleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "OG Analog Akım Ölçümü",
    targetTitle: "OG Akım Ölçüm Girişi",

    reason:
      "Uygun sekonder çıkışa sahip OG Akım Trafosu üzerinden elde edilen ölçüm akımı, orta gerilim tarafındaki akım bilgisinin standart analog sinyale dönüştürülmesi gereken uygulamalarda Akım Transdüserine giriş olarak uygulanabilir.",

    whenUsed:
      "OG tarafındaki akım bilgisinin analog otomasyon veya kontrol sistemine aktarılması gereken uygun uygulamalarda değerlendirilebilir.",

    technicalNote:
      "OG Akım Trafosu, Akım Transdüseri ve tesisin izolasyon gereksinimleri proje bazında doğrulanmalıdır.",
  },


  // ==================================================
  // 7. GERİLİM TRANSDÜSERLERİ
  // ==================================================

  // Voltmetre ilişkisi yukarıda:
  // gerilim-transduserleri-voltmetreler


  // ==================================================
  // 8. DC AMPERMETRELER
  // ==================================================

  {
    id: "dc-ampermetreler-gateway",
    sourceProductId: "dc-ampermetreler",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "DC Akım Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip DC Ampermetrelerden elde edilen akım ölçüm verilerinin uzaktan veya üst seviye sistemlere aktarılması istenirse Gateway tamamlayıcı bir haberleşme çözümü olarak değerlendirilebilir.",

    whenUsed:
      "DC akım değerlerinin uzaktan veya merkezi sistemlerde takip edilmesi gereken haberleşmeli modellerde değerlendirilebilir.",

    whenNotRequired:
      "Haberleşme özelliği bulunmayan modellerde veya yalnızca yerel ölçüm yapılan uygulamalarda Gateway gerekli değildir.",

    technicalNote:
      "RS-485 haberleşme tüm DC Ampermetre modellerinde bulunmaz. Gateway ile birlikte kullanım için seçilen DC Ampermetre modelinin haberleşme özelliği ve protokol uyumluluğu doğrulanmalıdır.",
  },

  {
    id: "dc-ampermetreler-enerji-izleme-yazilimlari",
    sourceProductId: "dc-ampermetreler",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan DC Akım İzleme",
    targetTitle: "DC Akım Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip DC Ampermetrelerden elde edilen akım değerleri, uygun haberleşme altyapısı üzerinden Enerji Doktoru'nda uzaktan izlenebilir ve enerji yönetimi kapsamında değerlendirilebilir.",

    whenUsed:
      "DC akım değerlerinin yalnızca cihaz ekranından değil merkezi veya uzaktan izleme sistemi üzerinden takip edilmesi istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca yerel DC akım ölçümü yapılan uygulamalarda gerekli değildir.",

    technicalNote:
      "Enerji Doktoru üzerinden uzaktan izleme için uygun Gateway ve haberleşme altyapısının bulunması gerekir. RS-485 haberleşme tüm DC Ampermetre modellerinde bulunmadığından seçilen modelin uyumluluğu doğrulanmalıdır.",
  },

  {
    id: "dc-ampermetreler-dc-voltmetreler",
    sourceProductId: "dc-ampermetreler",
    targetProductId: "dc-voltmetreler",
    type: "measurement-input",

    sourceStatus: "optional",
    targetStatus: "optional",

    sourceTitle: "DC Gerilim İzleme",
    targetTitle: "DC Akım İzleme",

    reason:
      "DC Ampermetreler sistemdeki akım değerini, DC Voltmetreler ise gerilim değerini izleyerek DC sistemin iki temel elektriksel büyüklüğünün birlikte takip edilmesine yardımcı olabilir.",

    whenUsed:
      "Müşterinin DC sistemde yalnızca tek bir parametre yerine hem akım hem de gerilim değerlerini takip etmek istediği uygulamalarda önerilebilir.",

    whenNotRequired:
      "Yalnızca tek bir DC elektriksel büyüklüğün izlenmesinin yeterli olduğu uygulamalarda ikinci cihaz gerekli olmayabilir.",

    technicalNote:
      "DC Ampermetre ve DC Voltmetre birbirinin yerine geçmez; farklı elektriksel büyüklükleri ölçen tamamlayıcı ürünlerdir.",
  },


  // ==================================================
  // 9. DC VOLTMETRELER
  // ==================================================

  {
    id: "dc-voltmetreler-gateway",
    sourceProductId: "dc-voltmetreler",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "DC Gerilim Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip DC Voltmetrelerden elde edilen gerilim ölçüm verilerinin uzaktan veya üst seviye sistemlere aktarılması istenirse Gateway tamamlayıcı bir haberleşme çözümü olarak değerlendirilebilir.",

    whenUsed:
      "DC gerilim değerlerinin uzaktan veya merkezi sistemlerde takip edilmesi gereken haberleşmeli modellerde değerlendirilebilir.",

    whenNotRequired:
      "Haberleşme özelliği bulunmayan modellerde veya yalnızca yerel gerilim ölçümü yapılan uygulamalarda Gateway gerekli değildir.",

    technicalNote:
      "RS-485 haberleşme tüm DC Voltmetre modellerinde bulunmaz. Gateway ile birlikte kullanım için seçilen DC Voltmetre modelinin haberleşme özelliği ve protokol uyumluluğu doğrulanmalıdır.",
  },

  {
    id: "dc-voltmetreler-enerji-izleme-yazilimlari",
    sourceProductId: "dc-voltmetreler",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan DC Gerilim İzleme",
    targetTitle: "DC Gerilim Ölçüm Kaynağı",

    reason:
      "Haberleşme özelliğine sahip DC Voltmetrelerden elde edilen gerilim değerleri, uygun haberleşme altyapısı üzerinden Enerji Doktoru'nda uzaktan izlenebilir ve enerji yönetimi kapsamında değerlendirilebilir.",

    whenUsed:
      "DC gerilim değerlerinin yalnızca cihaz ekranında değil merkezi veya uzaktan izleme sistemi üzerinden takip edilmesi istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca yerel DC gerilim ölçümü yapılan uygulamalarda gerekli değildir.",

    technicalNote:
     "Enerji Doktoru üzerinden uzaktan izleme için uygun Gateway ve haberleşme altyapısının bulunması gerekir. RS-485 haberleşme tüm DC Voltmetre modellerinde bulunmadığından seçilen modelin uyumluluğu doğrulanmalıdır.",
  },

  // ==================================================
  // KOMPANZASYON
  // 1. REAKTİF GÜÇ KONTROL RÖLELERİ
  // ==================================================


  // --------------------------------------------------
  // REAKTİF GÜÇ KONTROL RÖLESİ ↔ AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "a-serisi-reaktif-guc-kontrol-roleleri",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Kompanzasyon Kontrolü",
    targetTitle: "Akım Ölçüm Girişi",

    reason:
      "Reaktif Güç Kontrol Rölesinin tesisin reaktif güç durumunu değerlendirebilmesi için uygulamaya uygun akım bilgisinin sağlanması gerekir. A Serisi Alçak Gerilim Akım Trafoları uygun AG kompanzasyon uygulamalarında kullanılabilir.",

    whenUsed:
      "Alçak gerilim kompanzasyon sistemlerinde rölenin akım bilgisini harici akım trafosu üzerinden aldığı uygulamalarda değerlendirilir.",

    technicalNote:
      "Akım trafosu oranı ve sekonder değeri kullanılan Reaktif Güç Kontrol Rölesi modeline ve tesis akımına göre seçilmelidir.",
  },

  {
    id: "ayrilabilir-reaktif-guc-kontrol-roleleri",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Kompanzasyon Kontrolü",
    targetTitle: "Akım Ölçüm Girişi",

    reason:
      "Reaktif Güç Kontrol Rölesinin ihtiyaç duyduğu akım bilgisinin sağlanmasında Ayrılabilir Akım Trafoları mevcut tesislerde kolay montaj sağlayan bir seçenek olarak değerlendirilebilir.",

    whenUsed:
      "Mevcut iletken veya bara bağlantısının sökülmesinin istenmediği retrofit kompanzasyon uygulamalarında değerlendirilebilir.",

    technicalNote:
      "Rölenin akım giriş yapısıyla uyumlu sekonder çıkışa sahip Akım Trafosu seçilmelidir.",
  },

  {
    id: "clamp-reaktif-guc-kontrol-roleleri",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Kompanzasyon Kontrolü",
    targetTitle: "Akım Ölçüm Girişi",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları, mevcut tesislerde Reaktif Güç Kontrol Rölesinin ihtiyaç duyduğu akım bilgisinin pratik şekilde elde edilmesine yardımcı olabilir.",

    whenUsed:
      "Mevcut kablolara veya iletkenlere sonradan kompanzasyon ölçüm altyapısı eklendiği uygulamalarda değerlendirilebilir.",

    technicalNote:
      "Clamp Tip Akım Trafosunun çıkışı kullanılan Reaktif Güç Kontrol Rölesinin giriş yapısıyla uyumlu olmalıdır.",
  },

  {
    id: "uc-fazli-reaktif-guc-kontrol-roleleri",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Üç Faz Kompanzasyon Kontrolü",
    targetTitle: "Üç Faz Akım Ölçümü",

    reason:
      "Üç faz akım bilgisinin ayrı olarak değerlendirilmesi gereken kompanzasyon uygulamalarında uygun 3 Fazlı Akım Trafosu, Reaktif Güç Kontrol Rölesinin ölçüm altyapısında kullanılabilir.",

    whenUsed:
      "Üç faz akım ölçümünü destekleyen Reaktif Güç Kontrol Rölesi modellerinin kullanıldığı uygulamalarda değerlendirilir.",

    technicalNote:
      "Üç faz akım ölçüm desteği ve Akım Trafosu uyumluluğu röle modeli bazında doğrulanmalıdır.",
  },

  {
    id: "og-akim-trafolari-reaktif-guc-kontrol-roleleri",
    sourceProductId: "og-akim-trafolari",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "OG Kompanzasyon Kontrolü",
    targetTitle: "OG Akım Ölçümü",

    reason:
      "Kompanzasyon kontrolü için akım bilgisinin orta gerilim tarafından alınması gereken uygun uygulamalarda OG Akım Trafoları ölçüm altyapısının bir parçası olarak değerlendirilebilir.",

    whenUsed:
      "Akım bilgisinin OG tarafından alındığı kompanzasyon ve ölçüm uygulamalarında değerlendirilir.",

    whenNotRequired:
      "Akım bilgisinin alçak gerilim tarafından alındığı sistemlerde uygun AG Akım Trafosu çözümü kullanılabilir.",

    technicalNote:
      "OG Akım Trafosu oranı, sekonder değeri ve Reaktif Güç Kontrol Rölesi uyumluluğu proje bazında doğrulanmalıdır.",
  },


  // --------------------------------------------------
  // REAKTİF RÖLE ↔ KOMPANZASYON ELEMANLARI
  // --------------------------------------------------

  {
    id: "reaktif-role-kompanzasyon-kontaktorleri",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "kompanzasyon-kontaktorleri",
    type: "control",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Kademe Anahtarlama",
    targetTitle: "Otomatik Kompanzasyon Kontrolü",

    reason:
      "Klasik kondansatör kademeli otomatik kompanzasyon sistemlerinde Reaktif Güç Kontrol Rölesinin verdiği kontrol komutlarının güç kademelerine uygulanması için Kompanzasyon Kontaktörleri kullanılır.",

    whenUsed:
      "Elektromekanik kontaktörlü klasik kondansatör kademelerinin bulunduğu otomatik kompanzasyon sistemlerinde değerlendirilir.",

    whenNotRequired:
      "Statik anahtarlama veya farklı bir kompanzasyon mimarisinin kullanıldığı sistemlerde Kompanzasyon Kontaktörü gerekli olmayabilir.",

    technicalNote:
      "Kontaktör gücü ve kademe yapısı kullanılan kondansatör grubuna ve kompanzasyon sistemine uygun seçilmelidir.",
  },

  {
    id: "reaktif-role-kondansatorler",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "kondansator",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Kapasitif Kompanzasyon",
    targetTitle: "Otomatik Kompanzasyon Kontrolü",

    reason:
      "Tesisin endüktif reaktif güç ihtiyacının kapasitif kompanzasyonla karşılanması gereken uygulamalarda Kondansatörler, Reaktif Güç Kontrol Rölesinin yönettiği kompanzasyon sisteminin güç elemanları olarak değerlendirilebilir.",

    whenUsed:
      "Endüktif yüklerin oluşturduğu reaktif gücün kondansatör kademeleriyle kompanze edildiği sistemlerde değerlendirilir.",

    whenNotRequired:
      "Kapasitif kompanzasyon gerekmeyen veya farklı kompanzasyon teknolojisinin kullanıldığı sistemlerde gerekli değildir.",

    technicalNote:
      "Kondansatör gücü ve kademe yapısı tesisin reaktif güç ihtiyacına göre belirlenmelidir.",
  },

  {
    id: "harmonik-filtre-reaktorleri-reaktif-role",
    sourceProductId: "harmonik-filtre-reaktorleri",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Otomatik Kompanzasyon Kontrolü",
    targetTitle: "Harmonik Filtreli Kompanzasyon",

    reason:
      "Harmonik Filtre Reaktörlerinin kondansatör kademeleriyle birlikte kullanıldığı otomatik kompanzasyon sistemlerinde Reaktif Güç Kontrol Rölesi kompanzasyon kademelerinin yönetilmesinde kullanılabilir.",

    whenUsed:
      "Harmonik filtre reaktörlü otomatik kondansatör kademelerinin bulunduğu kompanzasyon sistemlerinde değerlendirilir.",

    whenNotRequired:
      "Sabit veya farklı kontrol mimarisine sahip uygulamalarda ayrıca Reaktif Güç Kontrol Rölesi gerekli olmayabilir.",

    technicalNote:
      "Reaktör ve kondansatör değerleri tesisin harmonik yapısı ve kompanzasyon ihtiyacına göre belirlenmelidir.",
  },

  {
    id: "reaktif-role-svc-urunleri",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "svc-urunleri",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "required",

    sourceTitle: "Dinamik Kompanzasyon",
    targetTitle: "SVC Kontrolü",

    reason:
      "Hızlı değişen veya dengesiz yüklerin bulunduğu tesislerde SVC destekli Reaktif Güç Kontrol Rölesi, sürücülü kompanzasyon yapısının kontrolünü sağlayabilir.",

    whenUsed:
      "Klasik kompanzasyonun yeterince hızlı veya hassas olmadığı ve SVC çözümünün kullanıldığı uygulamalarda değerlendirilir.",

    whenNotRequired:
      "Klasik kompanzasyon yapısının yeterli olduğu uygulamalarda SVC çözümüne ihtiyaç duyulmayabilir.",

    technicalNote:
      "SVC desteği kullanılan Reaktif Güç Kontrol Rölesi modeline bağlıdır.",
  },

  {
    id: "reaktif-role-sont-reaktorleri",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "sont-reaktorleri",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Endüktif Kompanzasyon",
    targetTitle: "Otomatik Kompanzasyon Kontrolü",

    reason:
      "Tesisin kapasitif reaktif güç ürettiği uygulamalarda Şönt Reaktörleri, Reaktif Güç Kontrol Rölesinin yönettiği sistem içerisinde endüktif kompanzasyon sağlamak için değerlendirilebilir.",

    whenUsed:
      "Tesisin kapasitif karakter gösterdiği ve endüktif reaktif güç ihtiyacının bulunduğu uygulamalarda değerlendirilir.",

    whenNotRequired:
      "Kapasitif reaktif güç problemi bulunmayan sistemlerde gerekli değildir.",

    technicalNote:
      "Şönt Reaktör gücü ve kontrol yöntemi tesisin reaktif güç ihtiyacına ve kullanılan röle modeline göre belirlenmelidir.",
  },

  {
    id: "reaktif-role-statik-kontaktorler",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "statik-kontaktorler",
    type: "control",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Hızlı Kademe Anahtarlama",
    targetTitle: "Kompanzasyon Kontrolü",

    reason:
      "Hızlı değişen yüklerin bulunduğu kompanzasyon uygulamalarında Statik Kontaktörler, kompanzasyon kademelerinin hızlı anahtarlanması için Reaktif Güç Kontrol Rölesiyle birlikte değerlendirilebilir.",

    whenUsed:
      "Hızlı yük değişimlerinin bulunduğu ve standart elektromekanik anahtarlamanın yeterli olmadığı uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Standart Kompanzasyon Kontaktörlerinin anahtarlama hızının yeterli olduğu sistemlerde gerekli değildir.",

    technicalNote:
      "Statik Kontaktör kullanımı yük karakteristiği, kademe gücü ve rölenin kontrol yapısına göre değerlendirilmelidir.",
  },

  {
    id: "desarj-unitesi-reaktif-guc-kontrol-roleleri",
    sourceProductId: "desarj-unitesi",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "control",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Otomatik Kademe Kontrolü",
    targetTitle: "Hızlı Kademe Deşarjı",

    reason:
      "Reaktif Güç Kontrol Rölesinin kondansatör kademelerini sık aralıklarla devreye alıp çıkardığı uygulamalarda Deşarj Ünitesi, kondansatörlerin daha hızlı yeniden devreye alınmasına yardımcı olabilir.",

    whenUsed:
      "Kademe değiştirme sürelerinin kısa olduğu ve kondansatörlerin hızlı deşarj edilmesi gereken otomatik kompanzasyon uygulamalarında değerlendirilir.",

    whenNotRequired:
      "Standart deşarj süresinin yeterli olduğu sistemlerde ayrıca Deşarj Ünitesi gerekli olmayabilir.",

    technicalNote:
      "Deşarj Ünitesi seçimi kullanılan kondansatörün gerilim ve güç değerlerine göre doğrulanmalıdır.",
  },

  // --------------------------------------------------
  // REAKTİF RÖLE ↔ ENERJİ YÖNETİMİ
  // --------------------------------------------------

  {
    id: "reaktif-role-gateway",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "Kompanzasyon Veri Kaynağı",

    reason:
      "Haberleşme özelliğine sahip Reaktif Güç Kontrol Rölelerinden elde edilen kompanzasyon ve elektriksel verilerin üst seviye sistemlere aktarılması istenirse Gateway tamamlayıcı haberleşme çözümü olarak değerlendirilebilir.",

    whenUsed:
      "Kompanzasyon sisteminin ağ veya enerji yönetimi altyapısına bağlanması istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca yerel kompanzasyon kontrolü yapılan sistemlerde veya gerekli haberleşmenin başka yöntemle sağlandığı uygulamalarda Gateway gerekli olmayabilir.",

    technicalNote:
      "Gateway ve Reaktif Güç Kontrol Rölesi haberleşme uyumluluğu kullanılan modellere göre doğrulanmalıdır.",
  },

  {
    id: "reaktif-role-veri-toplayicilar",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "veri-toplayicilar",
    type: "data-transfer",

    sourceStatus: "conditional",
    targetStatus: "related",

    sourceTitle: "Merkezi Veri Toplama",
    targetTitle: "Kompanzasyon Veri Kaynağı",

    reason:
      "Haberleşme özelliğine sahip Reaktif Güç Kontrol Rölelerinden elde edilen ölçüm ve kompanzasyon değerleri, uygun sistem mimarisinde Veri Toplayıcılar aracılığıyla merkezi enerji yönetimi altyapısına aktarılabilir.",

    whenUsed:
      "Bir veya birden fazla saha cihazından gelen verilerin merkezi olarak toplanması gereken uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Veriler başka bir uygun haberleşme altyapısı üzerinden aktarılıyorsa ayrıca Veri Toplayıcı gerekli olmayabilir.",

    technicalNote:
      "Kullanılan röle ve Veri Toplayıcı modellerinin haberleşme uyumluluğu doğrulanmalıdır.",
  },

  {
    id: "reaktif-role-enerji-izleme-yazilimlari",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Kompanzasyon İzleme",
    targetTitle: "Kompanzasyon Veri Kaynağı",

    reason:
      "Haberleşme özelliğine sahip Reaktif Güç Kontrol Rölelerinden elde edilen kompanzasyon ve reaktif güç bilgilerinin uzaktan takip edilmesi için ENTES Enerji İzleme Yazılımları değerlendirilebilir.",

    whenUsed:
      "Müşteri kompanzasyon sisteminin durumunu ve reaktif güç bilgilerini uzaktan izlemek istediğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca yerel kompanzasyon kontrolü ve izleme yapılan sistemlerde gerekli değildir.",

    technicalNote:
      "Uzaktan izleme için uygun Gateway ve haberleşme altyapısının sistem içerisinde bulunması gerekir.",
  },


  // --------------------------------------------------
  // REAKTİF RÖLE ↔ KORUMA
  // --------------------------------------------------

  {
    id: "reaktif-guc-kontrol-roleleri-nh-sigortalar",
    sourceProductId: "reaktif-guc-kontrol-rolesi",
    targetProductId: "nh-sigortalar",
    type: "protection",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Kompanzasyon Devresi Koruması",
    targetTitle: "Kompanzasyon Kontrolü",

    reason:
      "Reaktif Güç Kontrol Rölesinin yönettiği kompanzasyon sistemlerinde NH Bıçaklı Sigortalar, güç devresi ve kompanzasyon kademelerinin aşırı akım ve kısa devre koşullarına karşı korunmasında kullanılabilir.",

    whenUsed:
      "Kompanzasyon panosundaki güç kademelerinin uygun sigorta ile korunması gereken uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Korumanın farklı uygun bir yöntemle sağlandığı sistemlerde gerekli olmayabilir.",

    technicalNote:
      "NH Sigortanın anma akımı ve boyutu kompanzasyon sisteminin güç değerlerine göre seçilmelidir.",
  },

  // ==================================================
  // 2. SVG & AHF
  // ==================================================


  // --------------------------------------------------
  // SVG & AHF ↔ AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "a-serisi-svg-ahf",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "svg-ahf",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Aktif Güç Kalitesi Çözümü",
    targetTitle: "Akım Referansı",

    reason:
      "SVG ve AHF çözümlerinin sistem akımını değerlendirerek uygun düzeltme akımını oluşturabilmesi için uygulamaya uygun akım trafosu bilgisi kullanılabilir.",

    whenUsed:
      "Harici akım trafosu üzerinden akım referansı alınan SVG veya AHF uygulamalarında değerlendirilir.",

    technicalNote:
      "Akım trafosu oranı ve sekonder çıkışı kullanılan SVG/AHF modelinin giriş özelliklerine ve tesis akımına göre seçilmelidir.",
  },

  {
    id: "ayrilabilir-svg-ahf",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "svg-ahf",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Aktif Güç Kalitesi Çözümü",
    targetTitle: "Akım Referansı",

    reason:
      "Ayrılabilir Akım Trafoları, mevcut tesislerde SVG/AHF sisteminin ihtiyaç duyduğu akım referansının bağlantılar sökülmeden elde edilmesini kolaylaştırabilir.",

    whenUsed:
      "Mevcut bir tesise sonradan SVG veya AHF çözümü eklendiği retrofit uygulamalarda değerlendirilebilir.",

    technicalNote:
      "SVG/AHF giriş yapısıyla uyumlu sekonder çıkışa sahip Akım Trafosu seçilmelidir.",
  },

  {
    id: "clamp-svg-ahf",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "svg-ahf",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Aktif Güç Kalitesi Çözümü",
    targetTitle: "Akım Referansı",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları, mevcut kablolarda SVG/AHF sisteminin ihtiyaç duyduğu akım bilgisinin kolay şekilde alınmasına yardımcı olabilir.",

    whenUsed:
      "Retrofit uygulamalarda ve mevcut tesis bağlantılarının değiştirilmesinin istenmediği durumlarda değerlendirilebilir.",

    technicalNote:
      "Clamp Tip Akım Trafosu çıkışı kullanılan SVG/AHF ürününün giriş yapısıyla uyumlu olmalıdır.",
  },

  {
    id: "uc-fazli-svg-ahf",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "svg-ahf",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "required",

    sourceTitle: "Üç Faz Aktif Güç Kalitesi Çözümü",
    targetTitle: "Üç Faz Akım Referansı",

    reason:
      "Üç fazlı SVG ve AHF uygulamalarında uygun 3 Fazlı Akım Trafosu, sistemin ihtiyaç duyduğu faz akımı bilgisinin sağlanmasında kullanılabilir.",

    whenUsed:
      "Üç fazlı kompanzasyon ve aktif güç kalitesi iyileştirme uygulamalarında değerlendirilir.",

    technicalNote:
      "Akım trafosu çıkış değerleri ve bağlantı yapısı kullanılan SVG/AHF sisteminin giriş özellikleriyle uyumlu olmalıdır.",
  },


  // --------------------------------------------------
  // SVG & AHF ↔ REAKTİF GÜÇ KONTROL RÖLESİ
  // --------------------------------------------------

  {
    id: "svg-ahf-reaktif-guc-kontrol-roleleri",
    sourceProductId: "svg-ahf",
    targetProductId: "reaktif-guc-kontrol-rolesi",
    type: "correction",

    sourceStatus: "optional",
    targetStatus: "conditional",

    sourceTitle: "Kompanzasyon Kontrolü",
    targetTitle: "Aktif Güç Kalitesi Çözümü",

    reason:
      "SVG veya AHF çözümünün bulunduğu tesislerde klasik veya hibrit kompanzasyon yapısının da yönetilmesi gerekiyorsa Reaktif Güç Kontrol Röleleri tamamlayıcı çözüm olarak değerlendirilebilir.",

    whenUsed:
      "Aktif güç kalitesi çözümünün yanında kondansatör, reaktör veya farklı kompanzasyon kademelerinin ayrıca kontrol edilmesi gereken tesislerde değerlendirilebilir.",

    whenNotRequired:
      "SVG/AHF çözümünün ilgili güç kalitesi ve kompanzasyon ihtiyacını bağımsız olarak karşıladığı uygulamalarda gerekli olmayabilir.",

    technicalNote:
      "Reaktif Güç Kontrol Rölesi ile SVG/AHF doğrudan birbirinin zorunlu parçası değildir; birlikte kullanım ihtiyacı tesisin kompanzasyon mimarisine göre belirlenmelidir.",
  },


  // --------------------------------------------------
  // SVG & AHF ↔ ENERJİ YÖNETİMİ
  // --------------------------------------------------

  {
    id: "svg-ahf-gateway",
    sourceProductId: "svg-ahf",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "Güç Kalitesi Veri Kaynağı",

    reason:
      "SVG ve AHF sistemlerinin çalışma ve güç kalitesi verilerinin üst seviye sistemlere aktarılması istendiğinde Gateway tamamlayıcı haberleşme çözümü olarak değerlendirilebilir.",

    whenUsed:
      "SVG/AHF verilerinin ağ veya enerji yönetimi altyapısına aktarılması istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Kullanılan ürünün ve mevcut sistemin haberleşme altyapısı ihtiyacı başka şekilde karşılıyorsa ayrıca Gateway gerekli olmayabilir.",

    technicalNote:
      "Gateway ihtiyacı kullanılan SVG/AHF modeli, haberleşme özellikleri ve sistem mimarisine göre doğrulanmalıdır.",
  },

  {
    id: "svg-ahf-enerji-izleme-yazilimlari",
    sourceProductId: "svg-ahf",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Güç Kalitesi İzleme",
    targetTitle: "Güç Kalitesi Veri Kaynağı",

    reason:
      "SVG ve AHF çözümlerine ait çalışma ve güç kalitesi verilerinin uzaktan takip edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı çözüm olarak değerlendirilebilir.",

    whenUsed:
      "Müşteri SVG/AHF sistemini cihaz üzerindeki görüntülemeye ek olarak merkezi veya uzaktan izleme çözümü üzerinden takip etmek istediğinde değerlendirilebilir.",

    whenNotRequired:
      "Yalnızca yerel izleme yapısının yeterli olduğu uygulamalarda gerekli değildir.",

    technicalNote:
      "Uzaktan izleme için uygun Gateway ve haberleşme altyapısının sistem içerisinde bulunması gerekir.",
  },

  // ==================================================
  // 3. SVC ÜRÜNLERİ
  // ==================================================


  // --------------------------------------------------
  // SVC ↔ AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "a-serisi-svc-urunleri",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "svc-urunleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Dinamik Kompanzasyon",
    targetTitle: "Akım Ölçüm Girişi",

    reason:
      "SVC kompanzasyon sisteminde kullanılan kontrol yapısının tesisin reaktif güç durumunu değerlendirebilmesi için uygun akım trafosu çözümü birlikte değerlendirilebilir.",

    whenUsed:
      "SVC kontrol yapısının akım bilgisini harici akım trafosu üzerinden aldığı alçak gerilim uygulamalarında değerlendirilir.",

    whenNotRequired:
      "Kullanılan SVC mimarisinde akım bilgisi farklı bir ölçüm yapısından sağlanıyorsa ayrıca bu Akım Trafosu gerekli olmayabilir.",

    technicalNote:
      "Akım trafosu oranı ve sekonder değeri kullanılan SVC destekli kontrol yapısının giriş özelliklerine göre doğrulanmalıdır.",
  },

  {
    id: "ayrilabilir-svc-urunleri",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "svc-urunleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Dinamik Kompanzasyon",
    targetTitle: "Akım Ölçüm Girişi",

    reason:
      "Ayrılabilir Akım Trafoları, mevcut tesislere sonradan SVC kompanzasyon çözümü eklendiğinde akım ölçüm altyapısının daha kolay oluşturulmasına yardımcı olabilir.",

    whenUsed:
      "Mevcut iletken veya bara bağlantısının sökülmesinin istenmediği retrofit SVC uygulamalarında değerlendirilebilir.",

    whenNotRequired:
      "Akım bilgisinin başka uygun bir ölçüm altyapısından sağlandığı sistemlerde gerekli olmayabilir.",

    technicalNote:
      "Akım Trafosu çıkışı kullanılan SVC kontrol yapısının giriş özellikleriyle uyumlu olmalıdır.",
  },

  {
    id: "clamp-svc-urunleri",
    sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    targetProductId: "svc-urunleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Dinamik Kompanzasyon",
    targetTitle: "Akım Ölçüm Girişi",

    reason:
      "Clamp Tip Ayrılabilir Akım Trafoları, mevcut kablolarda SVC sistemi için ihtiyaç duyulan akım bilgisinin pratik şekilde elde edilmesine yardımcı olabilir.",

    whenUsed:
      "Kolay montaj ihtiyacının bulunduğu retrofit SVC uygulamalarında değerlendirilebilir.",

    whenNotRequired:
      "Kullanılan sistem farklı bir akım ölçüm altyapısı kullanıyorsa gerekli olmayabilir.",

    technicalNote:
      "Clamp Tip Akım Trafosu çıkışı kullanılan SVC kontrol yapısının giriş özellikleriyle uyumlu olmalıdır.",
  },

  {
    id: "uc-fazli-svc-urunleri",
    sourceProductId: "uc-fazli-akim-trafolari",
    targetProductId: "svc-urunleri",
    type: "measurement-input",

    sourceStatus: "related",
    targetStatus: "conditional",

    sourceTitle: "Üç Faz Dinamik Kompanzasyon",
    targetTitle: "Üç Faz Akım Ölçümü",

    reason:
      "Üç faz akım bilgisinin ayrı olarak değerlendirilmesi gereken uygun SVC uygulamalarında 3 Fazlı Akım Trafoları ölçüm altyapısının bir parçası olarak değerlendirilebilir.",

    whenUsed:
      "Üç faz akım ölçümünün SVC kontrol yapısında kullanıldığı uygulamalarda değerlendirilir.",

    technicalNote:
      "Üç faz ölçüm desteği ve Akım Trafosu uyumluluğu kullanılan SVC kontrol yapısına göre doğrulanmalıdır.",
  },


  // --------------------------------------------------
  // SVC ↔ ŞÖNT REAKTÖRLERİ
  // --------------------------------------------------

  {
    id: "svc-urunleri-sont-reaktorleri",
    sourceProductId: "svc-urunleri",
    targetProductId: "sont-reaktorleri",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Endüktif Kompanzasyon",
    targetTitle: "Dinamik Reaktör Kontrolü",

    reason:
      "SVC çözümünde Şönt Reaktörleri, kapasitif reaktif gücün hızlı ve kontrollü biçimde kompanze edilmesi gereken uygulamalarda endüktif güç elemanı olarak değerlendirilebilir.",

    whenUsed:
      "Tesisin kapasitif karakter gösterdiği ve hızlı veya hassas endüktif kompanzasyon gerektiği uygulamalarda değerlendirilir.",

    whenNotRequired:
      "Endüktif kompanzasyon ihtiyacının bulunmadığı sistemlerde Şönt Reaktörü gerekli değildir.",

    technicalNote:
      "Şönt Reaktör gücü ve SVC kontrol yapısı tesisin reaktif güç ihtiyacına göre belirlenmelidir.",
  },


  // --------------------------------------------------
  // SVC ↔ KONDANSATÖRLER
  // --------------------------------------------------

  {
    id: "svc-urunleri-kondansatorler",
    sourceProductId: "svc-urunleri",
    targetProductId: "kondansator",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Kapasitif Kompanzasyon",
    targetTitle: "Dinamik Kompanzasyon",

    reason:
      "SVC çözümünün klasik kondansatör kademeleriyle birlikte kullanıldığı hibrit kompanzasyon sistemlerinde Kondansatörler kapasitif reaktif güç ihtiyacını karşılamak için değerlendirilebilir.",

    whenUsed:
      "Tesisin endüktif reaktif güç ihtiyacının kondansatör kademeleriyle karşılandığı hibrit SVC uygulamalarında değerlendirilir.",

    whenNotRequired:
      "Kondansatör kademesi gerektirmeyen SVC uygulamalarında gerekli değildir.",

    technicalNote:
      "Kondansatör kademe yapısı ve SVC kontrol yaklaşımı tesisin kompanzasyon ihtiyacına göre belirlenmelidir.",
  },


  // --------------------------------------------------
  // SVC ↔ KOMPANZASYON KONTAKTÖRLERİ
  // --------------------------------------------------

  {
    id: "svc-urunleri-kompanzasyon-kontaktorleri",
    sourceProductId: "svc-urunleri",
    targetProductId: "kompanzasyon-kontaktorleri",
    type: "control",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Klasik Kademe Anahtarlama",
    targetTitle: "Hibrit Dinamik Kompanzasyon",

    reason:
      "SVC sistemiyle birlikte klasik kondansatör kademelerinin de kullanıldığı hibrit kompanzasyon sistemlerinde Kompanzasyon Kontaktörleri kondansatör kademelerinin anahtarlanmasında değerlendirilebilir.",

    whenUsed:
      "SVC ve klasik kondansatör kademelerinin aynı kompanzasyon sistemi içerisinde birlikte kullanıldığı uygulamalarda değerlendirilir.",

    whenNotRequired:
      "Kondansatör kademesi bulunmayan veya farklı anahtarlama yönteminin kullanıldığı SVC sistemlerinde gerekli değildir.",

    technicalNote:
      "Kompanzasyon Kontaktörü SVC'nin dinamik güç elemanını değil, klasik kondansatör kademelerini anahtarlamak için değerlendirilir.",
  },

  // ==================================================
  // 4. ŞÖNT REAKTÖRLERİ
  // ==================================================


  // --------------------------------------------------
  // ŞÖNT REAKTÖRÜ ↔ KONDANSATÖR
  // --------------------------------------------------

  {
    id: "sont-reaktorleri-kondansatorler",
    sourceProductId: "sont-reaktorleri",
    targetProductId: "kondansator",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Kapasitif Kompanzasyon",
    targetTitle: "Endüktif Kompanzasyon",

    reason:
      "Tesisin farklı çalışma koşullarında hem kapasitif hem de endüktif reaktif güç ihtiyacı oluşabiliyorsa Şönt Reaktörleri ve Kondansatörler aynı kompanzasyon sistemi içerisinde farklı yönlerde reaktif güç kontrolü sağlamak amacıyla birlikte değerlendirilebilir.",

    whenUsed:
      "Tesisin çalışma koşullarına bağlı olarak hem endüktif hem de kapasitif kompanzasyona ihtiyaç duyduğu uygulamalarda değerlendirilir.",

    whenNotRequired:
      "Tesis yalnızca tek yönde reaktif güç kompanzasyonuna ihtiyaç duyuyorsa iki ürün grubunun birlikte kullanılması gerekmeyebilir.",

    technicalNote:
      "Kondansatör ve Şönt Reaktör kademelerinin birlikte yönetimi kullanılan kontrol sistemi ve tesisin reaktif güç karakteristiğine göre belirlenmelidir.",
  },

  // ==================================================
  // 5. KONDANSATÖRLER
  // ==================================================

  {
    id: "kondansator-kompanzasyon-kontaktorleri",
    sourceProductId: "kondansator",
    targetProductId: "kompanzasyon-kontaktorleri",
    type: "control",

    sourceStatus: "conditional",
    targetStatus: "required",

    sourceTitle: "Kademe Anahtarlama",
    targetTitle: "Kapasitif Kademe",

    reason:
      "Otomatik ve klasik kondansatör kademeli kompanzasyon sistemlerinde Kompanzasyon Kontaktörleri, Kondansatör kademelerinin devreye alınması ve devreden çıkarılmasında kullanılır.",

    whenUsed:
      "Elektromekanik anahtarlamalı otomatik kondansatör kademelerinin bulunduğu kompanzasyon sistemlerinde değerlendirilir.",

    whenNotRequired:
      "Sabit kondansatör uygulamalarında veya farklı anahtarlama teknolojisinin kullanıldığı sistemlerde Kompanzasyon Kontaktörü gerekli olmayabilir.",

    technicalNote:
      "Kontaktör gücü kullanılan Kondansatör kademesinin reaktif güç değerine uygun seçilmelidir.",
  },


  // --------------------------------------------------
  // KONDANSATÖR ↔ HARMONİK FİLTRE REAKTÖRÜ
  // --------------------------------------------------

  {
    id: "kondansator-harmonik-filtre-reaktorleri",
    sourceProductId: "kondansator",
    targetProductId: "harmonik-filtre-reaktorleri",
    type: "correction",

    sourceStatus: "conditional",
    targetStatus: "required",

    sourceTitle: "Reaktörlü Kompanzasyon",
    targetTitle: "Kapasitif Kademe",

    reason:
      "Tesiste harmoniklerin kompanzasyon sistemini olumsuz etkileyebileceği durumlarda Harmonik Filtre Reaktörleri, Kondansatörlerle birlikte reaktörlü kompanzasyon kademesi oluşturmak için değerlendirilebilir.",

    whenUsed:
      "Harmonik seviyelerinin reaktörlü veya detuned kompanzasyon çözümünü gerektirdiği tesislerde değerlendirilir.",

    whenNotRequired:
      "Tesisin harmonik yapısı reaktörlü kompanzasyon gerektirmiyorsa Harmonik Filtre Reaktörü gerekli olmayabilir.",

    technicalNote:
      "Reaktör ve Kondansatör değerleri tesisin harmonik ölçümleri ve kompanzasyon hesabına göre birlikte seçilmelidir.",
  },


  // --------------------------------------------------
  // KONDANSATÖR ↔ STATİK KONTAKTÖR
  // --------------------------------------------------

  {
    id: "kondansator-statik-kontaktorler",
    sourceProductId: "kondansator",
    targetProductId: "statik-kontaktorler",
    type: "control",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Hızlı Kademe Anahtarlama",
    targetTitle: "Kapasitif Kademe",

    reason:
      "Hızlı değişen yüklerin bulunduğu kompanzasyon uygulamalarında Statik Kontaktörler, Kondansatör kademelerinin hızlı şekilde anahtarlanması için değerlendirilebilir.",

    whenUsed:
      "Kompanzasyon kademelerinin standart elektromekanik kontaktörlere göre daha hızlı anahtarlanmasının gerektiği uygulamalarda değerlendirilir.",

    whenNotRequired:
      "Standart Kompanzasyon Kontaktörlerinin anahtarlama hızının yeterli olduğu sistemlerde Statik Kontaktör gerekli değildir.",

    technicalNote:
      "Statik Kontaktörün güç ve bağlantı özellikleri kullanılacak Kondansatör kademesine uygun seçilmelidir.",
  },


  // --------------------------------------------------
  // KONDANSATÖR ↔ DEŞARJ ÜNİTESİ
  // --------------------------------------------------

  {
    id: "kondansator-desarj-unitesi",
    sourceProductId: "kondansator",
    targetProductId: "desarj-unitesi",
    type: "protection",

    sourceStatus: "conditional",
    targetStatus: "required",

    sourceTitle: "Hızlı Deşarj",
    targetTitle: "Kondansatör Deşarjı",

    reason:
      "Kondansatör kademelerinin kısa aralıklarla yeniden devreye alınması gereken uygulamalarda Deşarj Ünitesi, kondansatör üzerindeki artık gerilimin daha hızlı azaltılmasına yardımcı olabilir.",

    whenUsed:
      "Kondansatör kademelerinin sık veya hızlı anahtarlandığı otomatik kompanzasyon sistemlerinde değerlendirilebilir.",

    whenNotRequired:
      "Standart deşarj süresinin yeterli olduğu uygulamalarda ayrıca Deşarj Ünitesi gerekli olmayabilir.",

    technicalNote:
      "Deşarj Ünitesinin gerilim ve güç değerleri kullanılan Kondansatörle uyumlu olmalıdır.",
  },

  // ==================================================
  // 6. HARMONİK FİLTRE REAKTÖRLERİ
  // ==================================================


  // --------------------------------------------------
  // HARMONİK FİLTRE ↔ KOMPANZASYON KONTAKTÖRÜ
  // --------------------------------------------------

  {
    id: "harmonik-filtre-reaktorleri-kompanzasyon-kontaktorleri",
    sourceProductId: "harmonik-filtre-reaktorleri",
    targetProductId: "kompanzasyon-kontaktorleri",
    type: "control",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Kademe Anahtarlama",
    targetTitle: "Reaktörlü Kompanzasyon",

    reason:
      "Harmonik Filtre Reaktörü ve Kondansatörden oluşan kompanzasyon kademesinin otomatik olarak devreye alınması ve çıkarılması gereken uygulamalarda uygun Kompanzasyon Kontaktörü kullanılabilir.",

    whenUsed:
      "Kontaktörlü otomatik reaktörlü kompanzasyon kademelerinde değerlendirilir.",

    whenNotRequired:
      "Sabit kompanzasyon veya farklı anahtarlama yöntemlerinin kullanıldığı sistemlerde gerekli olmayabilir.",

    technicalNote:
      "Kontaktör, Harmonik Filtre Reaktörü ve Kondansatör grubunun elektriksel değerlerine uygun seçilmelidir.",
  },


  // --------------------------------------------------
  // HARMONİK FİLTRE ↔ STATİK KONTAKTÖR
  // --------------------------------------------------

  {
    id: "statik-kontaktorler-harmonik-filtre-reaktorleri",
    sourceProductId: "statik-kontaktorler",
    targetProductId: "harmonik-filtre-reaktorleri",
    type: "control",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Reaktörlü Kompanzasyon",
    targetTitle: "Hızlı Kademe Anahtarlama",

    reason:
      "Hızlı değişen yüklerin bulunduğu ve reaktörlü kompanzasyon kullanılan uygulamalarda Statik Kontaktörler, Kondansatör ve Harmonik Filtre Reaktöründen oluşan kademelerin hızlı anahtarlanması için değerlendirilebilir.",

    whenUsed:
      "Reaktörlü kompanzasyon kademelerinin hızlı şekilde devreye alınması ve çıkarılması gereken uygulamalarda değerlendirilir.",

    whenNotRequired:
      "Standart anahtarlama hızının yeterli olduğu veya reaktörlü kompanzasyon kullanılmayan sistemlerde gerekli değildir.",

    technicalNote:
      "Statik Kontaktör, Kondansatör ve Harmonik Filtre Reaktörünün elektriksel değerleri sistem tasarımına göre birlikte değerlendirilmelidir.",
  },


  // --------------------------------------------------
  // HARMONİK FİLTRE ↔ SVG / AHF
  // --------------------------------------------------

  {
    id: "harmonik-filtre-reaktorleri-svg-ahf",
    sourceProductId: "harmonik-filtre-reaktorleri",
    targetProductId: "svg-ahf",
    type: "correction",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Aktif Harmonik Filtreleme",
    targetTitle: "Pasif Harmonik Çözümü",

    reason:
      "Harmonik Filtre Reaktörleri kondansatörlerle birlikte pasif ve reaktörlü bir harmonik iyileştirme yaklaşımı sunarken, AHF aktif güç elektroniği temelli harmonik azaltım yaklaşımı sunar.",

    whenUsed:
      "Tesisin harmonik yapısı, yük değişkenliği ve kompanzasyon ihtiyacına göre pasif reaktörlü çözüm veya aktif harmonik filtreleme yaklaşımı değerlendirilebilir.",

    technicalNote:
      "Harmonik Filtre Reaktörü ile SVG/AHF ürün grubu birebir eşdeğer değildir. Özellikle harmonik azaltım karşılaştırmasında AHF fonksiyonu esas alınmalı ve uygun çözüm ölçüm sonuçlarına göre belirlenmelidir.",
  },

  // ==================================================
  // 8. STATİK KONTAKTÖRLER
  // ==================================================


  // --------------------------------------------------
  // STATİK KONTAKTÖR ↔ SURGE KORUMA
  // --------------------------------------------------

  {
    id: "statik-kontaktorler-surge-koruma",
    sourceProductId: "statik-kontaktorler",
    targetProductId: "surge-koruma",
    type: "protection",

    sourceStatus: "required",
    targetStatus: "optional",

    sourceTitle: "Darbe Gerilimi Koruması",
    targetTitle: "Statik Kontaktör Koruması",

    reason:
      "Statik Kontaktörlerin bulunduğu kompanzasyon panolarında uygun Surge Koruma çözümü, elektronik anahtarlama elemanlarının darbe gerilimlerine karşı korunmasına yardımcı olmak amacıyla birlikte değerlendirilmelidir.",

    whenUsed:
      "Statik Kontaktör kullanılan ve darbe gerilimlerine karşı koruma ihtiyacı bulunan kompanzasyon panolarında değerlendirilir.",

    technicalNote:
      "Surge Koruma ürününün tipi, koruma seviyesi ve bağlantı yapısı tesisin şebeke yapısına ve uygulamanın koruma gereksinimlerine göre seçilmelidir.",
  },

  // ==================================================
  // 10. AYR SERİSİ YÜK AYIRICILAR
  // ==================================================


  // --------------------------------------------------
  // AYR YÜK AYIRICI ↔ NH BIÇAKLI SİGORTA
  // --------------------------------------------------

  {
    id: "ayr-yuk-ayiricilar-nh-sigortalar",
    sourceProductId: "ayr-yuk-ayiricilar",
    targetProductId: "nh-sigortalar",
    type: "protection",

    sourceStatus: "required",
    targetStatus: "conditional",

    sourceTitle: "Sigortalı Devre Koruması",
    targetTitle: "Sigortalı Yük Ayırma",

    reason:
      "AYR Serisi Yük Ayırıcılar uygun NH Bıçaklı Sigortalarla birlikte kullanılarak devrenin yük altında ayrılması ile aşırı akım ve kısa devre korumasının aynı çözüm içerisinde sağlanmasına yardımcı olur.",

    whenUsed:
      "Sigortalı yük ayırma ve devre korumasının birlikte istendiği elektrik dağıtım ve pano uygulamalarında değerlendirilir.",

    whenNotRequired:
      "NH Sigortanın farklı bir sigorta taşıyıcı veya koruma mimarisi içerisinde kullanıldığı uygulamalarda AYR Serisi Yük Ayırıcı gerekli olmayabilir.",

    technicalNote:
      "AYR Serisi Yük Ayırıcı ile kullanılacak NH Sigortanın boyutu ve anma akımı seçilen yük ayırıcı modeline ve uygulamanın koruma gereksinimlerine uygun olmalıdır.",
  },

  // ==================================================
  // ENERJİ YÖNETİMİ DONANIM & YAZILIMLARI
  // ==================================================


  // ==================================================
  // 1. GATEWAY
  // ==================================================


  // --------------------------------------------------
  // GATEWAY ↔ VERİ TOPLAYICILAR
  // --------------------------------------------------

  {
    id: "gateway-veri-toplayicilar",
    sourceProductId: "gateway",
    targetProductId: "veri-toplayicilar",
    type: "data-transfer",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Merkezi Veri Toplama",
    targetTitle: "Üst Seviye Haberleşme",

    reason:
      "Birden fazla saha cihazından elde edilen ölçüm ve parametre verilerinin önce merkezi olarak toplanması, ardından ağ veya enerji yönetimi altyapısına aktarılması gereken sistemlerde Gateway ve Veri Toplayıcılar birlikte değerlendirilebilir.",

    whenUsed:
      "Çok sayıda saha cihazından gelen verilerin bir araya getirilmesi ve daha sonra üst seviye haberleşme altyapısına aktarılması gereken uygulamalarda değerlendirilebilir.",

    whenNotRequired:
      "Saha cihazlarının gerekli üst seviye haberleşme altyapısına doğrudan bağlanabildiği veya ayrıca merkezi veri toplama katmanına ihtiyaç bulunmadığı sistemlerde birlikte kullanılmaları gerekmeyebilir.",

    technicalNote:
      "Gateway ve Veri Toplayıcının birlikte kullanım ihtiyacı cihaz sayısına, haberleşme protokollerine ve sistem mimarisine göre belirlenmelidir.",
  },

  // --------------------------------------------------
  // GATEWAY ↔ ENERJİ İZLEME YAZILIMLARI
  // --------------------------------------------------

  {
    id: "gateway-enerji-izleme-yazilimlari",
    sourceProductId: "gateway",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "required",

    sourceTitle: "Enerji İzleme ve Analiz",
    targetTitle: "Haberleşme Altyapısı",

    reason:
      "Gateway, uygun saha cihazlarından elde edilen ölçüm ve enerji verilerinin Enerji Doktoru'na aktarılmasını sağlayan haberleşme katmanı olarak değerlendirilebilir. Enerji Doktoru ise bu verilerin uzaktan izlenmesi, analiz edilmesi ve enerji yönetimi amacıyla değerlendirilmesini sağlar.",

    whenUsed:
      "Saha cihazlarından elde edilen ölçüm ve enerji verilerinin Enerji Doktoru üzerinden uzaktan izlenmesi ve değerlendirilmesi istendiğinde birlikte kullanılır.",

    whenNotRequired:
      "Gateway yalnızca farklı bir üst seviye sisteme veri aktarımı amacıyla kullanılıyorsa Enerji Doktoru'nun kullanılması zorunlu değildir.",

    technicalNote:
      "Enerji Doktoru üzerinden saha verilerinin izlenebilmesi için uygun Gateway ve haberleşme altyapısının bulunması gerekir. Gateway modeli ve saha cihazı uyumluluğu sistem mimarisine göre doğrulanmalıdır.",
  },

  // ==================================================
  // 2. VERİ TOPLAYICILAR
  // ==================================================


  // --------------------------------------------------
  // VERİ TOPLAYICI ↔ ENERJİ İZLEME YAZILIMLARI
  // --------------------------------------------------

  {
    id: "veri-toplayicilar-enerji-izleme-yazilimlari",
    sourceProductId: "veri-toplayicilar",
    targetProductId: "entes-enerji-izleme-yazilimlari",
    type: "data-transfer",

    sourceStatus: "optional",
    targetStatus: "conditional",

    sourceTitle: "Enerji Doktoru'na Veri Aktarımı",
    targetTitle: "Merkezi Veri Toplama",

    reason:
      "Veri Toplayıcılar, uyumlu saha cihazlarından elde edilen ölçüm ve parametre verilerinin merkezi olarak toplanmasına yardımcı olur. Toplanan veriler uygun sistem mimarisinde Enerji Doktoru üzerinden izlenebilir ve analiz edilebilir.",

    whenUsed:
      "Birden fazla saha cihazından elde edilen verilerin merkezi olarak toplanarak Enerji Doktoru'nda değerlendirilmesi istendiğinde birlikte kullanılabilir.",

    whenNotRequired:
      "Saha cihazlarından gelen veriler uygun haberleşme altyapısı üzerinden Enerji Doktoru'na başka bir yöntemle aktarılabiliyorsa ayrıca Veri Toplayıcı gerekli olmayabilir.",

    technicalNote:
      "Veri Toplayıcı ihtiyacı desteklenen saha cihazlarına, haberleşme protokollerine, cihaz sayısına ve sistem mimarisine göre belirlenmelidir.",
  },

  // ==================================================
  // KORUMA & KONTROL
  // ZAMANLAMA & AYDINLATMA KONTROLÜ
  // ==================================================


  // ==================================================
  // 1. ASTRONOMİK ZAMAN RÖLELERİ
  // ==================================================


  // --------------------------------------------------
  // ASTRONOMİK ZAMAN RÖLESİ ↔ FOTOSEL RÖLESİ
  // --------------------------------------------------

  {
    id: "astronomik-zaman-roleleri-fotosel-roleleri",
    sourceProductId: "astronomik-zaman-roleleri",
    targetProductId: "fotosel-roleleri",
    type: "control",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Işık Seviyesine Göre Kontrol",
    targetTitle: "Astronomik Aydınlatma Kontrolü",

    reason:
      "Astronomik Zaman Röleleri ve Fotosel Röleleri dış ortam aydınlatmasının otomatik kontrolünde iki farklı yaklaşım sunar. Astronomik Zaman Rölesi gün doğumu ve gün batımı zamanlarını coğrafi konuma göre hesaplarken Fotosel Rölesi ortam ışık seviyesini doğrudan algılar.",

    whenUsed:
      "Kontrolün coğrafi konuma göre hesaplanan gün doğumu ve gün batımı saatlerine bağlı olması isteniyorsa Astronomik Zaman Rölesi; gerçek ortam ışık seviyesine göre çalışması isteniyorsa Fotosel Rölesi değerlendirilebilir.",

    technicalNote:
      "Bu iki ürün birbirinin zorunlu tamamlayıcısı değildir. Aynı genel aydınlatma kontrol ihtiyacını farklı algılama ve kontrol yöntemleriyle karşılayan alternatif çözümlerdir.",
  },


  // --------------------------------------------------
  // ASTRONOMİK ZAMAN RÖLESİ ↔ PROGRAMLANABİLİR ZAMAN SAATİ
  // --------------------------------------------------

  {
    id: "astronomik-zaman-roleleri-programlanabilir-zaman-saatleri",
    sourceProductId: "astronomik-zaman-roleleri",
    targetProductId: "programlanabilir-zaman-saatleri",
    type: "control",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Takvim Bazlı Programlama",
    targetTitle: "Astronomik Zamanlama",

    reason:
      "Astronomik Zaman Röleleri gün doğumu ve gün batımı zamanlarını coğrafi konuma göre otomatik hesaplarken Programlanabilir Zaman Saatleri elektrikli ekipmanları kullanıcı tarafından belirlenen günlük veya haftalık zaman programlarına göre kontrol eder.",

    whenUsed:
      "Kontrolün gün doğumu veya gün batımına bağlı olması gerekiyorsa Astronomik Zaman Rölesi; sabit günlük veya haftalık çalışma programları isteniyorsa Programlanabilir Zaman Saati değerlendirilebilir.",

    technicalNote:
      "Uygun ürün, kontrol senaryosunun astronomik olaylara mı yoksa kullanıcı tarafından belirlenen takvim programına mı bağlı olduğuna göre seçilmelidir.",
  },


  // --------------------------------------------------
  // ASTRONOMİK ZAMAN RÖLESİ ↔ GATEWAY
  // --------------------------------------------------

  {
    id: "astronomik-zaman-roleleri-gateway",
    sourceProductId: "astronomik-zaman-roleleri",
    targetProductId: "gateway",
    type: "communication",

    sourceStatus: "conditional",
    targetStatus: "related",

    sourceTitle: "Uzaktan Haberleşme",
    targetTitle: "Haberleşmeli Zaman Kontrolü",

    reason:
      "RS-485 Modbus haberleşme özelliğine sahip Astronomik Zaman Rölesi modelleri, uygun Gateway üzerinden ağ veya üst seviye haberleşme altyapısına bağlanabilir.",

    whenUsed:
      "Haberleşmeli Astronomik Zaman Rölesi modeline uzaktan erişilmesi veya cihazın üst seviye haberleşme altyapısına bağlanması gerektiğinde değerlendirilebilir.",

    whenNotRequired:
      "RS-485 haberleşmesi bulunmayan modellerde veya yalnızca yerel zaman kontrolü yapılan uygulamalarda Gateway gerekli değildir.",

    technicalNote:
      "Gateway ilişkisi tüm Astronomik Zaman Rölesi modelleri için geçerli değildir. Haberleşme desteği ve cihaz uyumluluğu model bazında doğrulanmalıdır.",
  },


  // ==================================================
  // 2. ÇOK FONKSİYONLU ZAMAN RÖLELERİ
  // ==================================================


  // --------------------------------------------------
  // ÇOK FONKSİYONLU ZAMAN RÖLESİ ↔ ZAMAN RÖLESİ
  // --------------------------------------------------

  {
    id: "cok-fonksiyonlu-zaman-roleleri-zaman-roleleri",
    sourceProductId: "cok-fonksiyonlu-zaman-roleleri",
    targetProductId: "zaman-roleleri",
    type: "control",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Temel Zamanlama",
    targetTitle: "Çok Fonksiyonlu Zamanlama",

    reason:
      "Standart Zaman Röleleri temel süre bazlı kontrol fonksiyonlarına yönelik daha sade bir çözüm sunarken Çok Fonksiyonlu Zaman Röleleri aynı cihaz ailesi içerisinde birden fazla zamanlama ve tetikleme fonksiyonu sağlayabilir.",

    whenUsed:
      "Uygulamada yalnızca temel bir zaman gecikmesi veya zamanlama fonksiyonu yeterliyse Zaman Rölesi; daha fazla zamanlama veya tetikleme fonksiyonuna ihtiyaç varsa Çok Fonksiyonlu Zaman Rölesi değerlendirilebilir.",

    technicalNote:
      "İki ürün ailesi birbirinin zorunlu tamamlayıcısı değildir. Seçim gerekli fonksiyon sayısına ve kontrol senaryosuna göre yapılmalıdır.",
  },


  // --------------------------------------------------
  // ÇOK FONKSİYONLU ZAMAN RÖLESİ ↔ PROGRAMLANABİLİR ZAMAN SAATİ
  // --------------------------------------------------

  {
    id: "cok-fonksiyonlu-zaman-roleleri-programlanabilir-zaman-saatleri",
    sourceProductId: "cok-fonksiyonlu-zaman-roleleri",
    targetProductId: "programlanabilir-zaman-saatleri",
    type: "control",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Takvim Bazlı Programlama",
    targetTitle: "Süre ve Tetikleme Bazlı Kontrol",

    reason:
      "Çok Fonksiyonlu Zaman Röleleri tetikleme ve süre bazlı kontrol fonksiyonlarına odaklanırken Programlanabilir Zaman Saatleri elektrikli ekipmanların günlük veya haftalık zaman programlarına göre çalıştırılmasını sağlar.",

    whenUsed:
      "Kontrolün bir tetikleme veya gecikme süresine göre yapılması gerekiyorsa Çok Fonksiyonlu Zaman Rölesi; belirli gün ve saatlere göre tekrarlanan bir çalışma programı gerekiyorsa Programlanabilir Zaman Saati değerlendirilebilir.",

    technicalNote:
      "Uygun ürün seçimi süre ve olay bazlı otomasyon ile takvim bazlı programlama ihtiyacına göre yapılmalıdır.",
  },


  // --------------------------------------------------
  // ÇOK FONKSİYONLU ZAMAN RÖLESİ ↔ ASTRONOMİK ZAMAN RÖLESİ
  // --------------------------------------------------

  {
    id: "cok-fonksiyonlu-zaman-roleleri-astronomik-zaman-roleleri",
    sourceProductId: "cok-fonksiyonlu-zaman-roleleri",
    targetProductId: "astronomik-zaman-roleleri",
    type: "control",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Astronomik Zamanlama",
    targetTitle: "Süre ve Tetikleme Bazlı Kontrol",

    reason:
      "Çok Fonksiyonlu Zaman Röleleri makine ve pano uygulamalarındaki süre ve tetikleme bazlı kontrol ihtiyaçlarına çözüm sunarken Astronomik Zaman Röleleri gün doğumu ve gün batımına bağlı otomatik kontrol senaryolarına yöneliktir.",

    whenUsed:
      "Kontrol senaryosu süre veya harici tetiklemeye bağlıysa Çok Fonksiyonlu Zaman Rölesi; gün doğumu veya gün batımı zamanlarına bağlıysa Astronomik Zaman Rölesi değerlendirilebilir.",

    technicalNote:
      "Bu ilişki doğrudan teknik bağlantı değil, farklı uygulama ihtiyaçlarına yönelik alternatif kontrol yaklaşımıdır.",
  },


  // ==================================================
  // 3. ZAMAN RÖLELERİ
  // ==================================================


  // --------------------------------------------------
  // ZAMAN RÖLESİ ↔ PROGRAMLANABİLİR ZAMAN SAATİ
  // --------------------------------------------------

  {
    id: "zaman-roleleri-programlanabilir-zaman-saatleri",
    sourceProductId: "zaman-roleleri",
    targetProductId: "programlanabilir-zaman-saatleri",
    type: "control",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Takvim Bazlı Programlama",
    targetTitle: "Temel Süre Bazlı Kontrol",

    reason:
      "Zaman Röleleri elektrik devreleri ve ekipmanlarının belirlenen süreye göre kontrol edilmesine odaklanırken Programlanabilir Zaman Saatleri ekipmanların belirlenen günlük veya haftalık zaman programlarına göre çalıştırılmasını sağlar.",

    whenUsed:
      "Kontrol bir olaydan sonra geçen süreye bağlıysa Zaman Rölesi; ekipmanın belirli gün ve saatlerde çalışması isteniyorsa Programlanabilir Zaman Saati değerlendirilebilir.",

    technicalNote:
      "İki ürün birbirinin zorunlu tamamlayıcısı değildir. Uygun çözüm süre bazlı kontrol veya takvim bazlı programlama ihtiyacına göre seçilmelidir.",
  },


  // --------------------------------------------------
  // ZAMAN RÖLESİ ↔ ASTRONOMİK ZAMAN RÖLESİ
  // --------------------------------------------------

  {
    id: "zaman-roleleri-astronomik-zaman-roleleri",
    sourceProductId: "zaman-roleleri",
    targetProductId: "astronomik-zaman-roleleri",
    type: "control",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Astronomik Zamanlama",
    targetTitle: "Temel Süre Bazlı Kontrol",

    reason:
      "Standart Zaman Röleleri belirlenen süre üzerinden kontrol gerçekleştirirken Astronomik Zaman Röleleri coğrafi konuma bağlı gün doğumu ve gün batımı zamanlarını hesaplayarak kontrol gerçekleştirir.",

    whenUsed:
      "Süre bazlı temel kontrol gerekiyorsa Zaman Rölesi; özellikle dış aydınlatma gibi kontrol zamanının gün doğumu veya gün batımına bağlı olması gerekiyorsa Astronomik Zaman Rölesi değerlendirilebilir.",

    technicalNote:
      "Astronomik Zaman Rölesi standart Zaman Rölesinin doğrudan devam ürünü değildir. İki ürün farklı zamanlama yöntemleri sunar.",
  },

  // ==================================================
  // KORUMA & KONTROL
  // KORUMA ÇEKİRDEĞİ
  // ==================================================


  // ==================================================
  // 1. GERİLİM KORUMA RÖLELERİ
  // ==================================================


  // --------------------------------------------------
  // GERİLİM KORUMA ↔ MOTOR (FAZ) KORUMA
  // --------------------------------------------------

  {
    id: "gerilim-koruma-roleleri-motor-faz-koruma-roleleri",
    sourceProductId: "gerilim-koruma-roleleri",
    targetProductId: "motor-faz-koruma-roleleri",
    type: "protection",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Motor ve Faz Odaklı Koruma",
    targetTitle: "Şebeke Gerilim Koruması",

    reason:
      "Gerilim Koruma Röleleri düşük ve aşırı gerilim gibi şebeke gerilimi problemlerine odaklanırken Motor (Faz) Koruma Röleleri özellikle üç fazlı motorlarda faz yokluğu, faz sırası ve gerilim dengesizliği gibi motor odaklı koruma fonksiyonları sunar.",

    whenUsed:
      "Korunacak yük üç fazlı motor ise ve temel ihtiyaç faz koşullarının izlenmesi ise Motor (Faz) Koruma Rölesi; şebeke gerilim sınırlarının izlenmesi ön plandaysa Gerilim Koruma Rölesi değerlendirilebilir.",

    technicalNote:
      "İki ürün ailesinin fonksiyonları seçilen modele göre kısmen örtüşebilir. Uygun ürün korunacak ekipmana ve gerekli koruma fonksiyonlarına göre seçilmelidir.",
  },


  // --------------------------------------------------
  // GERİLİM KORUMA ↔ FAZ SIRASI RÖLESİ
  // --------------------------------------------------

  {
    id: "gerilim-koruma-roleleri-faz-sirasi-rolesi",
    sourceProductId: "gerilim-koruma-roleleri",
    targetProductId: "faz-sirasi-rolesi",
    type: "protection",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Özel Faz Sırası Koruması",
    targetTitle: "Geniş Gerilim ve Faz Koruması",

    reason:
      "Bazı Gerilim Koruma Rölesi modelleri faz sırası kontrolünü diğer gerilim koruma fonksiyonlarıyla birlikte sunarken Faz Sırası Rölesi yalnızca üç fazın doğru sıralanmasının kontrol edilmesine yönelik daha özel bir çözümdür.",

    whenUsed:
      "Yalnızca faz sırasının kontrol edilmesi gerekiyorsa Faz Sırası Rölesi; düşük veya aşırı gerilim gibi ek şebeke koruma fonksiyonlarına da ihtiyaç varsa uygun Gerilim Koruma Rölesi değerlendirilebilir.",

    technicalNote:
      "Faz sırası fonksiyonu tüm Gerilim Koruma Rölesi modellerinde bulunmayabilir. Seçilen modelin fonksiyonları doğrulanmalıdır.",
  },

  // --------------------------------------------------
  // GERİLİM KORUMA ↔ SURGE KORUMA
  // --------------------------------------------------

  {
    id: "gerilim-koruma-roleleri-surge-koruma",
    sourceProductId: "gerilim-koruma-roleleri",
    targetProductId: "surge-koruma",
    type: "protection",

    sourceStatus: "conditional",
    targetStatus: "conditional",

    sourceTitle: "Darbe Gerilimi Koruması",
    targetTitle: "Şebeke Gerilim Koruması",

    reason:
      "Gerilim Koruma Rölesi düşük ve aşırı şebeke gerilimlerini izlerken Surge Koruma Cihazı kısa süreli ve yüksek enerjili darbe gerilimlerini sınırlandırmaya yönelik farklı bir koruma katmanı sağlar.",

    whenUsed:
      "Hassas ekipmanların bulunduğu ve hem sürekli şebeke gerilim anomalilerine hem de geçici darbe gerilimlerine karşı koruma istenen uygulamalarda birlikte değerlendirilebilir.",

    whenNotRequired:
      "Darbe gerilimi korumasının başka uygun bir SPD altyapısıyla sağlandığı uygulamalarda ayrıca Surge Koruma ürünü gerekli olmayabilir.",

    technicalNote:
      "Surge Koruma Cihazı Gerilim Koruma Rölesinin yerine geçmez. İki ürün farklı tür ve sürelerdeki gerilim problemlerine karşı koruma sağlar.",
  },

  // ==================================================
  // 2. AKIM KORUMA RÖLELERİ
  // ==================================================

  // --------------------------------------------------
  // AKIM KORUMA ↔ A SERİSİ AG AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "akim-koruma-roleleri-a-serisi-ag-akim-trafolari",
    sourceProductId: "akim-koruma-roleleri",
    targetProductId: "a-serisi-ag-akim-trafolari",
    type: "measurement-input",

    sourceStatus: "conditional",
    targetStatus: "related",

    sourceTitle: "X/5A Akım Ölçüm Girişi",
    targetTitle: "Akım Koruması",

    reason:
      "AKC-01A ve AKC-01D gibi X/5A akım trafosu girişini destekleyen Akım Koruma Rölesi modellerinde A Serisi Alçak Gerilim Akım Trafoları, daha yüksek primer akımların izlenebilmesi için 5 A sekonder akım bilgisinin sağlanmasında kullanılabilir.",

    whenUsed:
      "AKC-01A veya AKC-01D gibi X/5A akım trafosu girişini destekleyen modellerde ve doğrudan ölçüm aralığının üzerindeki hat akımlarının izlenmesi gerektiğinde değerlendirilir.",

    whenNotRequired:
      "Akım doğrudan rölenin ölçüm aralığındaysa veya farklı akım algılama yapısı kullanan bir Akım Koruma Rölesi modeli seçilmişse gerekli değildir.",

    technicalNote:
      "Bu ilişki tüm Akım Koruma Rölesi modelleri için geçerli değildir. Akım trafosunun sekonder çıkışı ve kullanılan röle modelinin giriş yapısı mutlaka doğrulanmalıdır.",
  },

  // --------------------------------------------------
  // AKIM KORUMA ↔ AYRILABİLİR AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "akim-koruma-roleleri-ayrilabilir-akim-trafolari",
    sourceProductId: "akim-koruma-roleleri",
    targetProductId: "ayrilabilir-akim-trafolari",
    type: "measurement-input",

    sourceStatus: "conditional",
    targetStatus: "related",

    sourceTitle: "Ayrılabilir Akım Ölçüm Girişi",
    targetTitle: "Akım Koruması",

    reason:
      "5 A sekonder çıkışlı uygun Ayrılabilir Akım Trafoları, Akım Koruma Rölesinin ihtiyaç duyduğu akım bilgisinin mevcut bara veya kablo bağlantısı sökülmeden elde edilmesini sağlayabilir.",

    whenUsed:
      "Mevcut tesise Akım Koruma Rölesi eklendiğinde ve iletkeni veya barayı ayırmadan X/5A ölçüm altyapısı oluşturulması istendiğinde değerlendirilebilir.",

    whenNotRequired:
      "Akım trafosu gerektirmeyen veya farklı akım giriş yapısına sahip Akım Koruma Rölesi modellerinde gerekli değildir.",

    technicalNote:
      "Ayrılabilir Akım Trafosunun 5 A sekonder çıkışı ve oranı kullanılan Akım Koruma Rölesiyle uyumlu olmalıdır.",
  },

  // --------------------------------------------------
  // AKIM KORUMA ↔ CLAMP TİP AKIM TRAFOLARI
  // --------------------------------------------------

  {
    id: "akim-koruma-roleleri-clamp-tip-akim-trafolari",
    sourceProductId: "akim-koruma-roleleri",
    targetProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    type: "measurement-input",

    sourceStatus: "conditional",
    targetStatus: "related",

    sourceTitle: "Clamp Tip Akım Ölçüm Girişi",
    targetTitle: "Akım Koruması",

    reason:
      "Uygun 5 A sekonder çıkışlı Clamp Tip Ayrılabilir Akım Trafoları, bazı Akım Koruma Rölesi uygulamalarında mevcut iletkene kolay montaj sağlayan akım ölçüm çözümü olarak değerlendirilebilir.",

    whenUsed:
      "Mevcut tesisatta kolay montaj istendiğinde ve seçilen Clamp Tip Akım Trafosu kullanılan Akım Koruma Rölesine uygun 5 A sekonder çıkışı sağladığında değerlendirilebilir.",

    whenNotRequired:
      "333 mV çıkışlı Clamp Tip Akım Trafoları 5 A akım trafosu girişi gerektiren rölelerle doğrudan kullanılamaz. Farklı akım giriş yapısına sahip röle modellerinde bu ilişki geçerli olmayabilir.",

    technicalNote:
      "Clamp Tip ailesinde çıkış yapıları model bazında değişir. Akım Koruma Rölesiyle birlikte kullanılacak modelin uygun 5 A sekonder çıkışına sahip olduğu doğrulanmalıdır.",
  },

  // ==================================================
  // 3. CKR KORUMA RÖLESİ
  // ==================================================

  {
    id: "ckr-koruma-rolesi-akim-koruma-roleleri",
    sourceProductId: "ckr-koruma-rolesi",
    targetProductId: "akim-koruma-roleleri",
    type: "protection",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Temel Akım Koruması",
    targetTitle: "Kapsamlı Sekonder Koruma",

    reason:
      "CKR Koruma Rölesi kısa devre ve toprak arızalarına karşı çok fazlı ve zaman karakteristikli sekonder koruma sağlarken Akım Koruma Röleleri daha temel düşük veya aşırı akım kontrolü gerektiren uygulamalara yönelik çözüm sunar.",

    whenUsed:
      "Daha temel düşük veya aşırı akım sınır kontrolünün yeterli olduğu uygulamalarda Akım Koruma Rölesi; transformatör, motor, jeneratör veya enerji nakil hattı gibi uygulamalarda daha kapsamlı faz ve toprak aşırı akım koruması gerektiğinde CKR Koruma Rölesi değerlendirilebilir.",

    technicalNote:
      "Akım Koruma Röleleri CKR Koruma Rölesinin doğrudan birebir yerine geçen ürünler değildir. Uygun ürün gerekli koruma fonksiyonlarına, arıza tipine ve koruma koordinasyonuna göre seçilmelidir.",
  },

  // ==================================================
  // 4. TERMİSTÖR RÖLESİ ↔ MOTOR (FAZ) KORUMA
  // ==================================================

  {
    id: "termistor-rolesi-motor-faz-koruma-roleleri",
    sourceProductId: "termistor-rolesi",
    targetProductId: "motor-faz-koruma-roleleri",
    type: "protection",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Kapsamlı Motor ve Faz Koruması",
    targetTitle: "PTC Termal Koruma",

    reason:
      "Termistör Rölesi motor sargı sıcaklığını PTC sensörü üzerinden izleyerek termal koruma sağlarken bazı Motor (Faz) Koruma Rölesi modelleri PTC korumasını faz yokluğu, faz sırası ve gerilim dengesizliği gibi ek motor koruma fonksiyonlarıyla birlikte sunabilir.",

    whenUsed:
      "Yalnızca PTC üzerinden motor sıcaklık koruması gerekiyorsa Termistör Rölesi; PTC korumasının yanında faz koşullarının da izlenmesi gerekiyorsa uygun Motor (Faz) Koruma Rölesi modeli değerlendirilebilir.",

    technicalNote:
      "PTC koruması tüm Motor (Faz) Koruma Rölesi modellerinde bulunmaz. Ürün seçiminde seçilen modelin PTC girişine sahip olup olmadığı doğrulanmalıdır.",
  },

  // ==================================================
  // 5. MOTOR (FAZ) KORUMA ↔ FAZ SIRASI
  // ==================================================

  {
    id: "motor-faz-koruma-roleleri-faz-sirasi-rolesi",
    sourceProductId: "motor-faz-koruma-roleleri",
    targetProductId: "faz-sirasi-rolesi",
    type: "protection",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "Özel Faz Sırası Kontrolü",
    targetTitle: "Kapsamlı Motor ve Faz Koruması",

    reason:
      "Motor (Faz) Koruma Röleleri faz sırası kontrolünü faz yokluğu ve faz dengesizliği gibi ek motor koruma fonksiyonlarıyla birlikte sunabilirken Faz Sırası Rölesi yalnızca üç fazın doğru sıralanmasının kontrol edilmesine yönelik daha özel bir çözümdür.",

    whenUsed:
      "Yalnızca yanlış faz sırası nedeniyle motorun ters yönde çalışmasının önlenmesi gerekiyorsa Faz Sırası Rölesi; faz sırasının yanında faz yokluğu, dengesizlik veya modele bağlı ek motor koruma fonksiyonları isteniyorsa Motor (Faz) Koruma Rölesi değerlendirilebilir.",

    technicalNote:
      "Faz sırası koruması Motor (Faz) Koruma Rölesi ailesindeki tüm modellerde bulunmayabilir. Gerekli fonksiyonlar seçilen model üzerinden doğrulanmalıdır.",
  },

  // ==================================================
  // SIVI SEVIYE KONTROL ROLELERI
  // ==================================================


  // --------------------------------------------------
  // SIVI SEVIYE KONTROLU <-> MOTOR KORUMA
  // Yeni çözüm / cross-sell ilişkisi
  // --------------------------------------------------

  {
    id: "sivi-seviye-kontrol-roleleri-motor-faz-koruma-roleleri",
    sourceProductId: "sivi-seviye-kontrol-roleleri",
    targetProductId: "motor-faz-koruma-roleleri",
    type: "protection",

    sourceStatus: "optional",
    targetStatus: "optional",

    sourceTitle: "Pompa Motoru Koruması",
    targetTitle: "Seviyeye Göre Pompa Kontrolü",

    reason:
      "Sıvı Seviye Kontrol Rölesi tank, kuyu veya sıvı deposundaki seviyeye göre pompa kontrolünü gerçekleştirirken, üç fazlı pompa motorunun kullanıldığı uygulamalarda Motor (Faz) Koruma Rölesi motorun faz hatalarına karşı korunması için tamamlayıcı bir çözüm olarak değerlendirilebilir.",

    whenUsed:
      "Sıvı seviyesine göre çalışan sistemde üç fazlı bir pompa motoru bulunuyorsa ve motor için ayrıca faz koruması isteniyorsa iki ürün birlikte değerlendirilebilir.",

    whenNotRequired:
      "Pompa kullanılmayan, üç fazlı motor bulunmayan veya motor korumasının başka bir uygun sistem tarafından sağlandığı uygulamalarda Motor (Faz) Koruma Rölesi gerekli olmayabilir.",

    technicalNote:
      "Sıvı Seviye Kontrol Rölesi proses seviyesine göre kontrol, Motor (Faz) Koruma Rölesi ise elektrik motorunun korunması amacıyla kullanılır. İki ürün birbirinin yerine geçmez.",
  },

  // ==================================================
  // GUC KAYNAKLARI
  // KUMANDA TRAFOLARI
  // ==================================================

  {
    id: "guc-kaynaklari-kumanda-trafolari",
    sourceProductId: "guc-kaynaklari",
    targetProductId: "kumanda-trafolari",
    type: "control",

    sourceStatus: "related",
    targetStatus: "related",

    sourceTitle: "24 VAC Kontrol Beslemesi",
    targetTitle: "12/24 VDC Kontrol Beslemesi",

    reason:
      "Güç Kaynakları elektrik ve otomasyon sistemleri için 12 VDC veya 24 VDC besleme sağlarken Kumanda Trafoları elektrik panolarındaki kontrol ve ölçüm devreleri için 24 VAC besleme sağlar.",

    whenUsed:
      "Beslenecek cihaz veya kontrol devresi 24 VAC gerektiriyorsa Kumanda Trafosu; 12 VDC veya 24 VDC gerektiriyorsa uygun Güç Kaynağı değerlendirilebilir.",

    technicalNote:
      "İki ürün ailesi doğrudan birbirinin yerine kullanılamaz. Seçim yapılırken bağlı yükün AC veya DC besleme tipi, gerekli gerilim seviyesi, akım ve güç ihtiyacı dikkate alınmalıdır.",
  },

  {
    id: "a-serisi-ayrilabilir-akim-trafolari",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "ayrilabilir-akim-trafolari",
    type: "measurement-input",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Sökmeden Retrofit Montaj",
    targetTitle: "Standart AG Akım Ölçümü",

    reason:
      "A Serisi Alçak Gerilim Akım Trafoları standart AG akım ölçüm uygulamalarına yönelik geniş ürün seçenekleri sunarken Ayrılabilir Akım Trafoları mevcut tesislerde bara veya iletken sökülmeden montaj yapılabilmesine yönelik alternatif bir çözüm sunar.",

    whenUsed:
      "Yeni kurulum veya standart pano uygulamalarında uygun A Serisi Akım Trafosu; mevcut tesis bağlantılarının sökülmesinin istenmediği retrofit uygulamalarda Ayrılabilir Akım Trafosu değerlendirilebilir.",

    technicalNote:
      "Ürün seçimi yalnızca montaj tipine göre yapılmamalıdır. Primer akım, bara veya kablo ölçüsü, sekonder çıkış değeri, doğruluk sınıfı ve bağlanacak cihazın giriş özellikleri birlikte değerlendirilmelidir.",
  },

  {
    id: "a-serisi-clamp-tip-ayrilabilir-akim-trafolari",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    type: "measurement-input",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Enerji Kesmeden Kolay Montaj",
    targetTitle: "Standart AG Akım Ölçümü",

    reason:
      "A Serisi Alçak Gerilim Akım Trafoları standart AG ölçüm uygulamalarına yönelik çözüm sunarken Clamp Tip Ayrılabilir Akım Trafoları mevcut tesislerde enerji kesilmeden ve iletken sökülmeden kolay montaj yapılması gereken uygulamalara yönelik alternatif bir yaklaşım sunar.",

    whenUsed:
      "Standart yeni kurulumlarda uygun A Serisi Akım Trafosu; mevcut tesiste hızlı ve müdahalesi düşük bir retrofit ölçüm çözümü istendiğinde uygun Clamp Tip Ayrılabilir Akım Trafosu değerlendirilebilir.",

    technicalNote:
      "Clamp Tip ailesinde 333 mV ve 5 A çıkışlı farklı modeller bulunduğundan, seçilen modelin bağlanacağı ölçüm veya kontrol cihazının giriş yapısıyla uyumlu olduğu doğrulanmalıdır.",
  },

  {
    id: "a-serisi-uc-fazli-akim-trafolari",
    sourceProductId: "a-serisi-ag-akim-trafolari",
    targetProductId: "uc-fazli-akim-trafolari",
    type: "measurement-input",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Kompakt Üç Faz Ölçümü",
    targetTitle: "Klasik AG Akım Ölçümü",

    reason:
      "A Serisi Alçak Gerilim Akım Trafoları faz akımlarının uygun ayrı akım trafosu çözümleriyle ölçülmesine olanak sağlarken 3 Fazlı Akım Trafoları üç faz iletkeninin tek ve kompakt bir yapı üzerinden ölçülmesine yönelik alternatif bir çözüm sunar.",

    whenUsed:
      "Uygulamada ayrı akım trafolarının kullanılması daha uygun olduğunda A Serisi; üç faz ölçümünün kompakt bir yapı üzerinden gerçekleştirilmesi ve mekanik yapının uygun olması durumunda 3 Fazlı Akım Trafosu değerlendirilebilir.",

    technicalNote:
      "3 Fazlı Akım Trafosu seçilirken şalter veya bara geometrisi, primer akım, sekonder çıkış tipi ve bağlanacak ölçüm cihazının giriş özellikleri doğrulanmalıdır.",
  },

  {
    id: "ayrilabilir-clamp-tip-akim-trafolari",
    sourceProductId: "ayrilabilir-akim-trafolari",
    targetProductId: "clamp-tip-ayrilabilir-akim-trafolari",
    type: "measurement-input",

    sourceStatus: "alternative",
    targetStatus: "alternative",

    sourceTitle: "Clamp Tip Retrofit Ölçüm",
    targetTitle: "5 A Retrofit Akım Ölçümü",

    reason:
      "Ayrılabilir Akım Trafoları ve Clamp Tip Ayrılabilir Akım Trafoları mevcut tesislerde iletken sökülmeden montaja yönelik iki farklı retrofit akım ölçüm yaklaşımı sunar. Uygun ürün mekanik montaj yapısına ve ihtiyaç duyulan sekonder çıkışa göre seçilebilir.",

    whenUsed:
      "Mevcut tesislerde kolay montaj gerektiğinde, bağlanacak cihazın giriş tipi ve mekanik kurulum şartlarına göre Ayrılabilir veya Clamp Tip Ayrılabilir Akım Trafosu değerlendirilebilir.",

    technicalNote:
      "Ayrılabilir Akım Trafoları 5 A sekonder ölçüm yaklaşımına yönelikken Clamp Tip ailesinde modele göre 333 mV veya 5 A çıkış bulunabilir. Cihaz giriş uyumluluğu mutlaka doğrulanmalıdır.",
  },
];