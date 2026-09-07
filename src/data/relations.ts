import type { Relation } from "@/types/ecosystem";

export const relations: Relation[] = [

  {
      id: "a-serisi-sebeke-analizorleri",
      sourceProductId: "a-serisi-ag-akim-trafolari",
      targetProductId: "sebeke-analizorleri",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Şebeke Analizi",
      targetTitle: "Standart AG Akım Ölçümü",
  
      reason:
        "Şebeke Analizörünün akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilebilir. A Serisi Alçak Gerilim Akım Trafoları uygun alçak gerilim ölçüm uygulamalarında kullanılabilir.",
  
      whenUsed:
        "Alçak gerilim sistemlerinde harici akım trafosu üzerinden ölçüm yapılan uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Seçilen Şebeke Analizörü modeli veya ölçüm mimarisi farklı bir akım ölçüm yöntemi kullanıyorsa A Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "Kullanılacak akım trafosu tipi, oranı ve sekonder değeri seçilen Şebeke Analizörü modeline ve tesisin ölçüm yapısına göre doğrulanmalıdır.",
    },

  {
      id: "ayrilabilir-sebeke-analizorleri",
      sourceProductId: "ayrilabilir-akim-trafolari",
      targetProductId: "sebeke-analizorleri",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Şebeke Analizi",
      targetTitle: "Retrofit Akım Ölçümü",
  
      reason:
        "Şebeke Analizörünün akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilebilir. Ayrılabilir Akım Trafoları özellikle mevcut tesislerde kolay montaj avantajı sağlayabilir.",
  
      whenUsed:
        "Mevcut iletken veya bara bağlantısının sökülmesinin istenmediği retrofit ölçüm uygulamalarında değerlendirilebilir.",
  
      whenNotRequired:
        "Yeni tesislerde veya farklı tipte bir akım trafosunun daha uygun olduğu uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosunun çıkış değeri ve Şebeke Analizörünün giriş yapısı model bazında doğrulanmalıdır.",
    },

  {
      id: "clamp-sebeke-analizorleri",
      sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
      targetProductId: "sebeke-analizorleri",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Şebeke Analizi",
      targetTitle: "Clamp Tip Retrofit Ölçüm",
  
      reason:
        "Şebeke Analizörünün akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilebilir. Clamp Tip Ayrılabilir Akım Trafoları mevcut tesislerde pratik kurulum avantajı sağlayabilir.",
  
      whenUsed:
        "Mevcut tesislere sonradan ölçüm sistemi eklenen ve kolay montaj ihtiyacı bulunan uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Standart kapalı tip veya başka bir akım trafosu çözümünün tercih edildiği uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Clamp Tip Akım Trafosu çıkış yapısı ile kullanılan Şebeke Analizörü modelinin akım giriş yapısı uyumlu olmalıdır.",
    },

  {
      id: "uc-fazli-sebeke-analizorleri",
      sourceProductId: "uc-fazli-akim-trafolari",
      targetProductId: "sebeke-analizorleri",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Şebeke Analizi",
      targetTitle: "Kompakt Üç Faz Akım Ölçümü",
  
      reason:
        "Üç fazlı sistemlerde Şebeke Analizörünün akım ölçüm altyapısının tamamlanması için uygun 3 Fazlı Akım Trafosu çözümü birlikte değerlendirilebilir.",
  
      whenUsed:
        "Üç fazlı elektrik sistemlerinde uygun analizör ve akım trafosu mimarisinin kullanıldığı uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Üç ayrı akım trafosu veya farklı bir akım ölçüm mimarisinin kullanıldığı uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu oranı, çıkış tipi ve bağlantı yapısı kullanılan Şebeke Analizörü modeline göre doğrulanmalıdır.",
    },

  {
      id: "og-akim-trafolari-sebeke-analizorleri",
      sourceProductId: "og-akim-trafolari",
      targetProductId: "sebeke-analizorleri",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "OG Şebeke Analizi",
      targetTitle: "OG Akım Ölçümü",
  
      reason:
        "Şebeke Analizörünün orta gerilim ölçüm uygulamalarında kullanılması durumunda uygun OG Akım Trafosu, akım ölçüm altyapısının bir parçası olarak birlikte değerlendirilebilir.",
  
      whenUsed:
        "Akım bilgisinin orta gerilim tarafından alınması gereken ve Şebeke Analizörünün uygun ölçüm mimarisinde kullanıldığı uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Alçak gerilim ölçüm uygulamalarında OG Akım Trafosu gerekli değildir.",
  
      technicalNote:
        "OG Akım Trafosu oranı, sekonder değeri ve Şebeke Analizörü uyumluluğu kullanılan ürün modeli ve tesisin ölçüm yapısına göre doğrulanmalıdır. OG gerilim doğrudan analizör girişine uygulanmamalıdır.",
    },

  {
      id: "sebeke-analizorleri-guc-enerji-olcerler",
      sourceProductId: "sebeke-analizorleri",
      targetProductId: "guc-enerji-olcer",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Güç ve Enerji Ölçümü",
      targetTitle: "Kapsamlı Şebeke Analizi",
  
      reason:
        "Şebeke Analizörleri ile Güç ve Enerji Ölçerler akım, gerilim, güç ve enerji gibi bazı ortak elektriksel parametreleri ölçebilir. Şebeke Analizörleri daha kapsamlı şebeke ve güç kalitesi analizi sunarken, Güç ve Enerji Ölçerler daha temel güç ve enerji izleme ihtiyaçlarında değerlendirilebilir.",
  
      whenUsed:
        "Uygulamanın ihtiyaç duyduğu ölçüm kapsamına göre daha temel enerji ölçümü veya daha kapsamlı şebeke analizi arasında seçim yapılırken değerlendirilebilir.",
  
      technicalNote:
        "İki ürün grubu birebir eşdeğer değildir. Ölçülen parametreler, haberleşme, kayıt, harmonik ve güç kalitesi özellikleri model bazında farklılık gösterebilir.",
    },

  {
      id: "sebeke-analizorleri-emk-class-a",
      sourceProductId: "sebeke-analizorleri",
      targetProductId: "emk",
      type: "measurement-analysis",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "İleri Güç Kalitesi Analizi",
      targetTitle: "Sürekli Şebeke İzleme",
  
      reason:
        "Şebeke Analizörleri sürekli elektriksel parametre ve şebeke takibi sağlarken, EMK Class A Kalite Analizörleri daha ileri güç kalitesi ve olay analizi için kullanılabilir.",
  
      whenUsed:
        "Tesisin sürekli şebeke izlemesine ek olarak daha detaylı ve Class A seviyesinde güç kalitesi analizi gerektiğinde birlikte değerlendirilebilir.",
  
      technicalNote:
        "Şebeke Analizörleri ile EMK Class A Kalite Analizörleri birbirinin doğrudan alternatifi değildir. Aynı sistemde farklı ölçüm ve analiz seviyelerinde birlikte kullanılabilir."
    },

  {
      id: "sebeke-analizorleri-multimetreler",
      sourceProductId: "sebeke-analizorleri",
      targetProductId: "multimetre",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Temel Çoklu Ölçüm",
      targetTitle: "Kapsamlı Şebeke Analizi",
  
      reason:
        "Multimetreler temel elektriksel parametrelerin tek cihaz üzerinden izlenmesini sağlarken, Şebeke Analizörleri daha kapsamlı güç, enerji, harmonik, demand ve haberleşme özellikleri sunabilen gelişmiş bir ölçüm yaklaşımıdır.",
  
      whenUsed:
        "Uygulamada yalnızca temel pano ölçümleri yeterliyse Multimetre, daha kapsamlı şebeke analizi ve enerji takibi gerekiyorsa Şebeke Analizörü değerlendirilebilir.",
  
      technicalNote:
        "Ürün grupları birebir eşdeğer değildir. Uygun seçim gerekli ölçüm parametreleri ve sistem fonksiyonlarına göre yapılmalıdır.",
    },

  {
      id: "sebeke-analizorleri-reaktif-guc-kontrol-roleleri",
      sourceProductId: "sebeke-analizorleri",
      targetProductId: "reaktif-guc-kontrol-rolesi",
      type: "correction",
  
      sourceStatus: "related",
      targetStatus: "optional",
  
      sourceTitle: "Kompanzasyon Kontrolü",
      targetTitle: "Kapsamlı Şebeke Ölçümü",
  
      reason:
        "Şebeke Analizörü tesisin reaktif güç ve güç faktörü değerlerini izleyebilir. Reaktif güç durumunun otomatik olarak yönetilmesi gereken uygulamalarda Reaktif Güç Kontrol Röleleri aynı çözüm ekosisteminde değerlendirilebilir.",
  
      whenUsed:
        "Tesisin ölçüm ihtiyacının yanında reaktif güç kompanzasyonunun otomatik olarak yönetilmesi gerektiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca elektriksel parametrelerin ölçülmesi istenen veya kompanzasyon ihtiyacı bulunmayan uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Şebeke Analizörü ile Reaktif Güç Kontrol Rölesi birbirinin zorunlu tamamlayıcısı değildir. Şebeke Analizörü ölçüm ve analiz, Reaktif Güç Kontrol Rölesi ise kompanzasyon kontrolü görevini üstlenir.",
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
        "Şebeke Analizörleriyle yapılan ölçümlerde reaktif güç veya harmonik problemleri tespit edildiğinde SVG veya AHF çözümleri uygun güç kalitesi iyileştirme seçenekleri olarak değerlendirilebilir.",
  
      whenUsed:
        "Ölçüm sonuçlarında dinamik reaktif güç kompanzasyonu veya harmonik azaltımı ihtiyacı tespit edildiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Reaktif güç veya harmonik kaynaklı aktif iyileştirme ihtiyacı bulunmadığında gerekli değildir.",
  
      technicalNote:
        "SVG ve AHF farklı problemlere yönelik aktif güç elektroniği çözümleridir. SVG temel olarak dinamik reaktif güç kompanzasyonu, AHF ise harmonik akımların azaltılması için kullanılır. Şebeke Analizörü bu ürünlerin zorunlu parçası değildir.",
    },

  {
      id: "sebeke-analizorleri-gateway",
      sourceProductId: "sebeke-analizorleri",
      targetProductId: "gateway",
      type: "communication",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Uzaktan Haberleşme",
      targetTitle: "Şebeke Ölçüm Kaynağı",
  
      reason:
        "Şebeke Analizörlerinden elde edilen ölçüm verilerinin ağ veya uzaktan erişim altyapısına aktarılması gerektiğinde Gateway birlikte değerlendirilebilir.",
  
      whenUsed:
        "Şebeke Analizörü RS-485 gibi saha haberleşmesi kullanıyor ve verilerin Ethernet veya hücresel ağ üzerinden üst seviye sisteme aktarılması gerekiyorsa değerlendirilebilir.",
  
      whenNotRequired:
        "Seçilen Şebeke Analizörü modeli gerekli ağ bağlantısını doğrudan sağlıyorsa veya mevcut haberleşme altyapısı ihtiyacı karşılıyorsa ayrıca Gateway gerekli olmayabilir.",
  
      technicalNote:
        "Gateway ihtiyacı Şebeke Analizörü modelinin RS-485, Ethernet veya diğer haberleşme özelliklerine ve tesisin ağ mimarisine göre doğrulanmalıdır.",
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
        "Şebeke Analizörlerinden elde edilen ölçüm ve enerji verilerinin merkezi olarak izlenmesi, analiz edilmesi, raporlanması ve enerji yönetiminde değerlendirilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı bir çözüm olarak kullanılabilir.",
  
      whenUsed:
        "Müşteri ölçüm verilerini yalnızca cihaz üzerinden değil, Enerji Doktoru gibi merkezi veya uzaktan enerji izleme çözümleri üzerinden de takip etmek istediğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca cihaz üzerinden yerel ölçüm yapılmasının yeterli olduğu uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Uzaktan enerji izleme için gerekli haberleşme yapısı seçilen Şebeke Analizörü modeline göre doğrudan ağ bağlantısı veya uygun Gateway üzerinden sağlanabilir. Model ve yazılım uyumluluğu güncel teknik dokümanlarla doğrulanmalıdır.",
    },

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
        "EMK Serisi Class A Kalite Analizörünün akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilebilir. A Serisi Alçak Gerilim Akım Trafoları uygun alçak gerilim ölçüm uygulamalarında kullanılabilir.",
  
      whenUsed:
        "Harici akım trafosu üzerinden ölçüm yapılan alçak gerilim güç kalitesi uygulamalarında değerlendirilir.",
  
      whenNotRequired:
        "Seçilen EMK modeli veya ölçüm mimarisi farklı bir akım sensörü veya akım ölçüm yöntemi kullanıyorsa A Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu sekonder değeri, oranı ve bağlantı yapısı seçilen EMK modeli ve uygulamaya göre doğrulanmalıdır.",
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
        "EMK'nın akım ölçüm altyapısının tamamlanması için uygulamaya uygun bir akım trafosu birlikte değerlendirilebilir. Ayrılabilir Akım Trafoları özellikle mevcut tesislerde montaj kolaylığı sağlayabilir.",
  
      whenUsed:
        "Mevcut tesislere sonradan güç kalitesi ölçüm altyapısı eklenen retrofit uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Yeni tesislerde veya farklı bir akım trafosu ya da akım sensörü çözümünün daha uygun olduğu uygulamalarda gerekli olmayabilir.",
  
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
        "Clamp Tip Ayrılabilir Akım Trafoları mevcut kablolarda EMK için gerekli akım ölçüm altyapısının daha kolay oluşturulmasına yardımcı olabilir.",
  
      whenUsed:
        "Retrofit veya mevcut tesis güç kalitesi ölçüm uygulamalarında kolay montaj ihtiyacı bulunduğunda değerlendirilebilir.",
  
      whenNotRequired:
        "Standart kapalı tip, üç fazlı veya farklı bir akım ölçüm çözümünün kullanıldığı uygulamalarda gerekli değildir.",
  
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
        "Üç fazlı güç kalitesi ölçüm uygulamalarında uygun akım ölçüm mimarisi kullanıldığında değerlendirilir.",
  
      whenNotRequired:
        "Üç ayrı akım trafosu veya farklı bir akım ölçüm mimarisinin kullanıldığı uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu çıkış tipi, oranı ve EMK giriş uyumluluğu kullanılan modellere göre doğrulanmalıdır.",
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
        "EMK Serisi Class A Kalite Analizörünün orta gerilim güç kalitesi uygulamalarında kullanılması durumunda uygun OG Akım Trafosu ölçüm altyapısının bir parçası olarak birlikte değerlendirilebilir.",
  
      whenUsed:
        "Güç kalitesinin orta gerilim tarafında izlenmesi gereken ve uygun ölçü trafosu mimarisinin kullanıldığı uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Alçak gerilim güç kalitesi ölçüm uygulamalarında OG Akım Trafosu gerekli değildir.",
  
      technicalNote:
        "OG uygulamasındaki ölçüm mimarisi, sekonder değerleri ve ürün uyumluluğu proje bazında doğrulanmalıdır. Orta gerilim doğrudan EMK ölçüm girişine uygulanmamalıdır.",
    },

  {
      id: "emk-guc-ve-enerji-olcerler",
      sourceProductId: "emk",
      targetProductId: "guc-enerji-olcer",
      type: "measurement-analysis",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "Güç ve Enerji Ölçümü",
      targetTitle: "İleri Güç Kalitesi Analizi",
  
      reason:
        "Güç ve Enerji Ölçerler enerji tüketimi ve temel güç parametrelerinin takibine odaklanırken, EMK Serisi Class A Kalite Analizörleri daha detaylı güç kalitesi ve olay analizi sağlar.",
  
      whenUsed:
        "Aynı tesis içerisinde enerji tüketimi takibi ile ileri güç kalitesi analizinin birlikte gerekli olduğu uygulamalarda değerlendirilebilir.",
  
      technicalNote:
        "Ürün grupları birbirinin doğrudan alternatifi değildir. Güç ve Enerji Ölçerler enerji ölçümü ve tüketim takibi, EMK ise ileri güç kalitesi analizi amacıyla kullanılır.",
    },

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
        "EMK ölçümleri sonucunda dinamik reaktif güç kompanzasyonu veya harmonik azaltımı gerektiren bir durum tespit edildiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Ölçülen sistemde aktif kompanzasyon veya harmonik filtreleme ihtiyacı bulunmuyorsa gerekli değildir.",
  
      technicalNote:
        "SVG ve AHF farklı problemlere yönelik aktif güç elektroniği çözümleridir. SVG temel olarak dinamik reaktif güç kompanzasyonu, AHF ise harmonik akımların azaltılması için kullanılır. Uygun çözüm tesis ölçümleri ve mühendislik değerlendirmesine göre belirlenmelidir.",
    },

  {
      id: "emk-svc",
      sourceProductId: "emk",
      targetProductId: "svc-urunleri",
      type: "correction",
  
      sourceStatus: "conditional",
      targetStatus: "optional",
  
      sourceTitle: "Dinamik Kompanzasyon",
      targetTitle: "Class A Güç Kalitesi Analizi",
  
      reason:
        "EMK ile reaktif güç, güç faktörü ve güç kalitesi davranışı analiz edilebilir. Dinamik reaktif güç kompanzasyonu ihtiyacının bulunduğu uygun uygulamalarda SVC Ürünleri birlikte değerlendirilebilir.",
  
      whenUsed:
        "EMK ölçümleri sonucunda yük değişimlerine bağlı dinamik reaktif güç kompanzasyonu ihtiyacı tespit edildiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Dinamik kompanzasyon ihtiyacı bulunmayan veya farklı bir kompanzasyon teknolojisinin uygun olduğu uygulamalarda gerekli değildir.",
  
      technicalNote:
        "SVC seçimi yalnızca EMK ölçüm sonuçlarına bağlı değildir. Tesis yük karakteristiği, reaktif güç ihtiyacı ve mühendislik değerlendirmesi birlikte dikkate alınmalıdır.",
    },

  {
      id: "emk-harmonik-filtre-reaktorleri",
      sourceProductId: "emk",
      targetProductId: "harmonik-filtre-reaktorleri",
      type: "correction",
  
      sourceStatus: "conditional",
      targetStatus: "optional",
  
      sourceTitle: "Pasif Harmonik Çözümü",
      targetTitle: "Harmonik Analizi",
  
      reason:
        "EMK ile tesisin harmonik yapısı ayrıntılı olarak değerlendirilebilir. Harmonik seviyelerinin kompanzasyon sistemini etkilediği uygulamalarda Harmonik Filtre Reaktörleri tamamlayıcı bir çözüm olarak değerlendirilebilir.",
  
      whenUsed:
        "EMK ölçümlerinde harmonik seviyelerinin reaktörlü kompanzasyon çözümünün değerlendirilmesini gerektirdiği uygulamalarda önerilebilir.",
  
      whenNotRequired:
        "Harmonik seviyelerinin Harmonik Filtre Reaktörü kullanımını gerektirmediği sistemlerde gerekli değildir.",
  
      technicalNote:
        "Harmonik Filtre Reaktörü seçimi yalnızca analizörün varlığına bağlı değildir. Tesis ölçümleri, kompanzasyon yapısı, harmonik seviyeleri ve mühendislik değerlendirmesi esas alınmalıdır.",
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
        "EMK ölçümleri sonucunda tesisin reaktif güç kontrolüne veya otomatik kompanzasyona ihtiyaç duyduğu durumlarda değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca güç kalitesi ölçümü ve analizi yapılan veya kompanzasyon ihtiyacı bulunmayan uygulamalarda gerekli değildir.",
  
      technicalNote:
        "EMK ile Reaktif Güç Kontrol Rölesi doğrudan birbirinin zorunlu tamamlayıcısı değildir. EMK ölçüm ve analiz, Reaktif Güç Kontrol Rölesi ise klasik kompanzasyon sisteminin kontrolü tarafında görev yapar.",
    },

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
        "EMK ile elde edilen enerji ve güç kalitesi verilerinin farklı ağ veya uzaktan erişim altyapılarına aktarılması istendiğinde Gateway tamamlayıcı bir haberleşme çözümü olarak değerlendirilebilir.",
  
      whenUsed:
        "EMK verilerinin mevcut haberleşme yapısından farklı bir ağ, uzaktan erişim veya enerji yönetimi altyapısına aktarılması gerektiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Kullanılan EMK modeli gerekli haberleşme bağlantısını doğrudan sağlıyor veya mevcut sistem mimarisi haberleşme ihtiyacını karşılıyorsa ayrıca Gateway gerekli olmayabilir.",
  
      technicalNote:
        "Gateway gereksinimi EMK modeli, desteklenen haberleşme protokolleri ve tesisin ağ mimarisine göre doğrulanmalıdır.",
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
        "EMK tarafından ölçülen enerji ve güç kalitesi verilerinin merkezi veya uzaktan takip edilmesi ve analiz edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı bir çözüm olarak değerlendirilebilir.",
  
      whenUsed:
        "Enerji ve güç kalitesi verilerinin yalnızca cihaz üzerinden değil, Enerji Doktoru gibi merkezi veya uzaktan izleme çözümleri üzerinden de takip edilmesi istendiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca cihaz üzerinden yerel ölçüm ve analiz yapılmasının yeterli olduğu uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Uzaktan izleme için gerekli haberleşme altyapısı kullanılan EMK modeline ve sistem mimarisine göre doğrudan ağ bağlantısı veya uygun Gateway üzerinden sağlanabilir. Cihaz ve yazılım uyumluluğu model bazında doğrulanmalıdır.",
    },

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
        "Akım trafosu oranı, sekonder değeri ve bağlantı yapısı kullanılacak Güç ve Enerji Ölçer modeline göre doğrulanmalıdır.",
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

  {
      id: "ct-serisi-guc-enerji-olcer",
      sourceProductId: "ct-serisi-akim-trafolari",
      targetProductId: "guc-enerji-olcer",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Güç ve Enerji Ölçümü",
      targetTitle: "Uyumlu Akım Ölçümü",
  
      reason:
        "CT Serisi Akım Trafoları, bu akım trafosu ailesini destekleyen Güç ve Enerji Ölçer modellerinde akım ölçüm altyapısının tamamlanması için kullanılabilir.",
  
      whenUsed:
        "CT-25, CT-80D veya ilgili CT Serisi Akım Trafosu ile çalışacak şekilde tasarlanmış Güç ve Enerji Ölçer modellerinde değerlendirilir.",
  
      whenNotRequired:
        "Doğrudan akım ölçümü yapan, X/5A akım trafosu kullanan veya farklı bir akım giriş yapısına sahip modellerde CT Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "CT-25, CT-80D veya diğer CT Serisi Akım Trafosu kullanım gereksinimi seçilen Güç ve Enerji Ölçer modelinin akım giriş yapısına göre doğrulanmalıdır.",
    },

  {
      id: "guc-enerji-olcer-gateway",
      sourceProductId: "guc-enerji-olcer",
      targetProductId: "gateway",
      type: "communication",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Uzaktan Haberleşme",
      targetTitle: "Enerji Ölçüm Kaynağı",
  
      reason:
        "Güç ve Enerji Ölçerlerden elde edilen ölçüm ve tüketim verilerinin ağ veya uzaktan erişim altyapısına aktarılması gerektiğinde Gateway birlikte değerlendirilebilir.",
  
      whenUsed:
        "Seçilen Güç ve Enerji Ölçer haberleşme özelliğine sahipse ve verilerin Ethernet, hücresel ağ veya üst seviye enerji yönetimi sistemine aktarılması gerekiyorsa değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca yerel ölçüm yapılan, cihazın gerekli ağ bağlantısını doğrudan sağlayabildiği veya mevcut haberleşme altyapısının ihtiyacı karşıladığı uygulamalarda Gateway gerekli olmayabilir.",
  
      technicalNote:
        "Gateway gereksinimi seçilen Güç ve Enerji Ölçer modelinin RS-485, Ethernet veya diğer haberleşme özelliklerine ve tesisin ağ mimarisine göre doğrulanmalıdır.",
    },

  {
      id: "guc-enerji-olcer-veri-toplayicilar",
      sourceProductId: "guc-enerji-olcer",
      targetProductId: "veri-toplayicilar",
      type: "data-transfer",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Pulse Tabanlı Veri Toplama",
      targetTitle: "Enerji Ölçüm Kaynağı",
  
      reason:
        "Pulse çıkışına sahip Güç ve Enerji Ölçer modellerinde tüketim verilerinin pulse tabanlı olarak merkezi veri toplama sistemine aktarılması gerektiğinde Veri Toplayıcılar birlikte değerlendirilebilir.",
  
      whenUsed:
        "Güç ve Enerji Ölçerin pulse çıkışının kullanıldığı ve bu pulse verilerinin Veri Toplayıcı üzerinden merkezi sisteme aktarılmasının istendiği uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Cihaz verileri RS-485, Ethernet veya başka uygun bir haberleşme altyapısıyla doğrudan aktarılıyorsa ayrıca Veri Toplayıcı gerekli olmayabilir.",
  
      technicalNote:
        "Bu ilişki özellikle pulse çıkışlı ölçüm senaryoları içindir. Veri Toplayıcının desteklediği giriş yapısı ve seçilen Güç ve Enerji Ölçerin pulse çıkış özellikleri model bazında doğrulanmalıdır.",
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
        "Güç ve Enerji Ölçerlerden elde edilen ölçüm ve tüketim verilerinin merkezi olarak takip edilmesi, karşılaştırılması, raporlanması ve analiz edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı bir çözüm olarak değerlendirilebilir.",
  
      whenUsed:
        "Müşteri enerji tüketimi ve elektriksel ölçüm verilerini yalnızca cihaz üzerinden değil, Enerji Doktoru gibi merkezi veya uzaktan izleme çözümleri üzerinden de takip etmek istediğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca yerel enerji ölçümü ve cihaz üzerinden takip yapılmasının yeterli olduğu uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Uzaktan izleme için gerekli haberleşme altyapısı kullanılan Güç ve Enerji Ölçer modeline göre doğrudan haberleşme veya uygun Gateway üzerinden sağlanabilir. Cihaz, haberleşme altyapısı ve yazılım uyumluluğu model bazında doğrulanmalıdır.",
    },

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
        "Akım trafosu oranı, sekonder değeri ve bağlantı yapısı seçilen Multimetre modelinin giriş özelliklerine göre doğrulanmalıdır.",
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
        "Mevcut tesislere sonradan Multimetre eklendiği ve kolay montaj ihtiyacı bulunduğu retrofit uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Harici akım trafosu kullanılmayan veya farklı bir akım trafosu çözümünün tercih edildiği Multimetre modellerinde gerekli değildir.",
  
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
        "Mevcut tesislerde iletken bağlantısının sökülmesinin istenmediği ve kolay montaj ihtiyacı bulunan ölçüm uygulamalarında değerlendirilebilir.",
  
      whenNotRequired:
        "Clamp Tip Akım Trafosu çıkışı Multimetrenin giriş yapısıyla uyumlu değilse veya farklı bir akım trafosu çözümü kullanılıyorsa gerekli değildir.",
  
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
        "Üç ayrı akım trafosu, doğrudan ölçüm veya farklı bir akım giriş yapısının kullanıldığı uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu çıkış yapısı, oranı ve Multimetre giriş özellikleri model bazında doğrulanmalıdır.",
    },

  {
      id: "ct-serisi-multimetreler",
      sourceProductId: "ct-serisi-akim-trafolari",
      targetProductId: "multimetre",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Çok Parametreli Ölçüm",
      targetTitle: "Uyumlu CT Serisi Akım Ölçümü",
  
      reason:
        "CT Serisi Akım Trafoları, bu akım trafosu ailesini destekleyen Multimetre modellerinde akım ölçüm altyapısının tamamlanması için kullanılabilir.",
  
      whenUsed:
        "CT-25 veya ilgili CT Serisi Akım Trafosu ile çalışacak şekilde tasarlanmış Multimetre modellerinde değerlendirilir.",
  
      whenNotRequired:
        "X/5A akım trafosu kullanan, doğrudan akım ölçümü yapan veya farklı bir akım giriş yapısına sahip Multimetre modellerinde CT Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "CT-25 veya diğer CT Serisi Akım Trafosu kullanım gereksinimi seçilen Multimetre modelinin akım giriş yapısına göre doğrulanmalıdır.",
    },

  {
      id: "multimetreler-gateway",
      sourceProductId: "multimetre",
      targetProductId: "gateway",
      type: "communication",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Uzaktan Haberleşme",
      targetTitle: "Çok Parametreli Ölçüm Kaynağı",
  
      reason:
        "Haberleşme özelliğine sahip Multimetrelerden elde edilen elektriksel ölçüm verilerinin ağ veya uzaktan erişim altyapısına aktarılması gerektiğinde Gateway birlikte değerlendirilebilir.",
  
      whenUsed:
        "Multimetre RS-485 gibi uygun bir haberleşme özelliğine sahipse ve ölçüm verilerinin Ethernet, hücresel ağ veya üst seviye sisteme aktarılması gerekiyorsa değerlendirilebilir.",
  
      whenNotRequired:
        "Haberleşmesiz modellerde, yalnızca yerel ölçüm yapılan uygulamalarda veya mevcut haberleşme altyapısının ihtiyacı doğrudan karşıladığı sistemlerde Gateway gerekli değildir.",
  
      technicalNote:
        "Gateway gereksinimi seçilen Multimetre modelinin haberleşme özelliklerine, desteklenen protokollere ve tesisin ağ mimarisine göre doğrulanmalıdır.",
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
        "Haberleşme özelliğine sahip Multimetrelerden elde edilen temel elektriksel ölçüm değerlerinin merkezi veya uzaktan takip edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı bir çözüm olarak değerlendirilebilir.",
  
      whenUsed:
        "Akım, gerilim, frekans ve güç faktörü gibi ölçüm değerlerinin cihaz ekranının yanı sıra Enerji Doktoru gibi merkezi veya uzaktan izleme çözümleri üzerinden de takip edilmesi istendiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca yerel pano ölçümünün yeterli olduğu uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Uzaktan izleme için gerekli haberleşme altyapısı seçilen Multimetre modelinin haberleşme özelliklerine ve sistem mimarisine göre uygun Gateway veya mevcut haberleşme altyapısı üzerinden sağlanabilir. Cihaz ve yazılım uyumluluğu model bazında doğrulanmalıdır.",
    },

  {
      id: "ampermetreler-multimetreler",
      sourceProductId: "ampermetreler",
      targetProductId: "multimetre",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Çok Parametreli Ölçüm",
      targetTitle: "Akım Odaklı Ölçüm",
  
      reason:
        "Ampermetreler akım değerinin izlenmesine odaklanırken Multimetreler akımın yanında gerilim, frekans ve güç faktörü gibi farklı temel elektriksel parametrelerin aynı cihaz üzerinden izlenmesini sağlayabilir.",
  
      whenUsed:
        "Yalnızca akım izleme ihtiyacında Ampermetre; birden fazla temel elektriksel parametrenin aynı cihaz üzerinden izlenmesi istendiğinde Multimetre değerlendirilebilir.",
  
      technicalNote:
        "İki ürün birbirinin zorunlu tamamlayıcısı değildir. Seçim ölçülmesi gereken parametre kapsamına ve uygulama ihtiyacına göre yapılmalıdır.",
    },

  {
      id: "voltmetreler-multimetreler",
      sourceProductId: "voltmetreler",
      targetProductId: "multimetre",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Çok Parametreli Ölçüm",
      targetTitle: "Gerilim Odaklı Ölçüm",
  
      reason:
        "Voltmetreler gerilim değerinin izlenmesine odaklanırken Multimetreler gerilimin yanında akım, frekans ve güç faktörü gibi farklı temel elektriksel parametreleri aynı cihaz üzerinden izleyebilir.",
  
      whenUsed:
        "Yalnızca gerilim takibinde Voltmetre; daha geniş temel ölçüm ihtiyacında Multimetre değerlendirilebilir.",
  
      technicalNote:
        "İki ürün birbirinin zorunlu tamamlayıcısı değildir. Seçim ölçülmesi gereken elektriksel parametrelerin kapsamına göre yapılmalıdır.",
    },

  {
      id: "frekansmetreler-multimetreler",
      sourceProductId: "frekansmetreler",
      targetProductId: "multimetre",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Çok Parametreli Ölçüm",
      targetTitle: "Frekans Odaklı Ölçüm",
  
      reason:
        "Frekansmetreler işletme frekansının izlenmesine odaklanırken Multimetreler frekansın yanında akım, gerilim ve güç faktörü gibi farklı temel elektriksel parametreleri aynı cihaz üzerinden izleyebilir.",
  
      whenUsed:
        "Yalnızca frekans takibinde Frekansmetre; daha geniş temel ölçüm ihtiyacında Multimetre değerlendirilebilir.",
  
      technicalNote:
        "İki ürün birbirinin zorunlu tamamlayıcısı değildir. Seçim ihtiyaç duyulan ölçüm kapsamına göre yapılmalıdır.",
    },

  {
      id: "cosfimetreler-multimetreler",
      sourceProductId: "cosfimetreler",
      targetProductId: "multimetre",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Çok Parametreli Ölçüm",
      targetTitle: "Güç Faktörü Odaklı Ölçüm",
  
      reason:
        "Cosφmetreler güç faktörünün izlenmesine odaklanırken Multimetreler güç faktörünün yanında akım, gerilim ve frekans gibi farklı temel elektriksel parametreleri aynı cihaz üzerinden izleyebilir.",
  
      whenUsed:
        "Yalnızca güç faktörünün izlenmesinde Cosφmetre; daha geniş temel ölçüm ihtiyacında Multimetre değerlendirilebilir.",
  
      technicalNote:
        "İki ürün birbirinin zorunlu tamamlayıcısı değildir. Seçim müşterinin ihtiyaç duyduğu ölçüm kapsamına göre yapılmalıdır.",
    },

  {
      id: "multimetreler-guc-enerji-olcerler",
      sourceProductId: "multimetre",
      targetProductId: "guc-enerji-olcer",
      type: "measurement-analysis",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "Güç ve Enerji Ölçümü",
      targetTitle: "Temel Çok Parametreli Ölçüm",
  
      reason:
        "Multimetreler akım, gerilim, frekans ve güç faktörü gibi temel elektriksel parametrelerin çoklu pano ölçümüne odaklanırken, Güç ve Enerji Ölçerler güç ve enerji tüketiminin ölçülmesi ve izlenmesine yönelik ek fonksiyonlar sunar.",
  
      whenUsed:
        "Aynı tesis içerisinde temel elektriksel parametrelerin izlenmesi ile güç ve enerji tüketiminin takip edilmesi gibi farklı ölçüm ihtiyaçları bulunduğunda birlikte değerlendirilebilir.",
  
      technicalNote:
        "Multimetreler ile Güç ve Enerji Ölçerler birbirinin doğrudan alternatifi değildir. Ürün gruplarının ölçtüğü parametreler model bazında örtüşebilse de temel kullanım amaçları ve fonksiyon kapsamları farklıdır.",
    },

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
        "Harici akım trafosu üzerinden ölçüm yapan Ampermetre modellerinde değerlendirilir.",
  
      whenNotRequired:
        "Harici akım trafosu gerektirmeyen veya farklı akım giriş yapısına sahip Ampermetre modellerinde gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu oranı, sekonder değeri ve bağlantı yapısı kullanılan Ampermetre modeline göre doğrulanmalıdır.",
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
        "Ayrılabilir Akım Trafoları, mevcut tesislerde bara veya iletken bağlantısı sökülmeden uygun Ampermetre modelleri için akım ölçüm altyapısının oluşturulmasına yardımcı olabilir.",
  
      whenUsed:
        "Mevcut tesislere sonradan Ampermetre eklendiği ve bağlantının sökülmesinin istenmediği retrofit uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Yeni tesislerde veya farklı bir akım trafosu ya da doğrudan ölçüm yönteminin tercih edildiği uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu çıkış değeri ve Ampermetrenin akım giriş yapısı model bazında uyumlu olmalıdır.",
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
        "Clamp Tip Ayrılabilir Akım Trafoları, mevcut kablolarda uygun Ampermetre modelleri için kolay montajlı bir akım ölçüm çözümü sağlayabilir.",
  
      whenUsed:
        "Kablo bağlantısının sökülmesinin istenmediği ve kolay montaj ihtiyacının bulunduğu retrofit ölçüm uygulamalarında değerlendirilebilir.",
  
      whenNotRequired:
        "Clamp Tip Akım Trafosu çıkışı Ampermetrenin giriş yapısıyla uyumlu değilse veya farklı bir akım trafosu çözümü kullanılıyorsa gerekli değildir.",
  
      technicalNote:
        "Akım trafosu çıkış tipi ile Ampermetrenin giriş tipi model bazında doğrulanmalıdır.",
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
        "3 Fazlı Akım Trafoları, uygun üç fazlı Ampermetre uygulamalarında faz akımlarının ölçülmesi için kompakt bir ölçüm çözümü olarak değerlendirilebilir.",
  
      whenUsed:
        "Üç faz akımının izlenmesi gereken ve uygun Ampermetre modelinin kullanıldığı uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Üç ayrı akım trafosu, doğrudan akım ölçümü veya farklı bir akım giriş yapısının kullanıldığı uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu çıkış tipi, oranı ve Ampermetre giriş uyumluluğu model bazında doğrulanmalıdır.",
    },

  {
      id: "ct-serisi-ampermetreler",
      sourceProductId: "ct-serisi-akim-trafolari",
      targetProductId: "ampermetreler",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Akım Gösterimi",
      targetTitle: "Uyumlu CT Serisi Akım Ölçümü",
  
      reason:
        "CT Serisi Akım Trafoları, bu akım trafosu ailesini destekleyen Ampermetre modellerinde akım ölçüm altyapısının tamamlanması için kullanılabilir.",
  
      whenUsed:
        "CT-25 veya ilgili CT Serisi Akım Trafosu ile çalışacak şekilde tasarlanmış Ampermetre modellerinde değerlendirilir.",
  
      whenNotRequired:
        "X/5A akım trafosu kullanan, doğrudan akım ölçümü yapan veya farklı akım giriş yapısına sahip Ampermetre modellerinde CT Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "CT-25 veya diğer CT Serisi Akım Trafosu kullanım gereksinimi seçilen Ampermetre modelinin akım giriş yapısına göre doğrulanmalıdır.",
    },

  {
      id: "akim-transduserleri-ampermetreler",
      sourceProductId: "akim-transduserleri",
      targetProductId: "ampermetreler",
      type: "measurement-analysis",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "Yerel Akım Gösterimi",
      targetTitle: "Analog Akım Sinyali",
  
      reason:
        "Ampermetreler akım değerinin cihaz üzerinde görüntülenmesine odaklanırken Akım Transdüserleri ölçülen AC akım bilgisini otomasyon ve kontrol sistemlerinde kullanılabilecek standart analog sinyale dönüştürür.",
  
      whenUsed:
        "Akımın yerel olarak görüntülenmesi gerekiyorsa Ampermetre; ölçüm bilgisinin otomasyon veya kontrol sistemine analog sinyal olarak aktarılması gerekiyorsa Akım Transdüseri değerlendirilebilir.",
  
      technicalNote:
        "İki ürün farklı kullanım amaçlarına sahiptir ve doğrudan birebir ikame değildir. Aynı sistemde yerel gösterim ve otomasyon verisi gibi farklı ihtiyaçlar için birlikte bulunabilirler.",
    },

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
        "Voltmetreler gerilim değerinin ölçülmesini ve görüntülenmesini sağlarken Gerilim Koruma Röleleri düşük veya aşırı gerilim gibi anormal şebeke koşullarına karşı otomatik koruma fonksiyonu sağlayabilir.",
  
      whenUsed:
        "Gerilimin yalnızca görüntülenmesinin yanında belirlenen sınırların dışına çıkılması durumunda otomatik koruma veya kontrol fonksiyonu da isteniyorsa değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca gerilim göstergesi istenen veya gerilim korumasının başka bir sistem tarafından sağlandığı uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Voltmetre ölçüm ve görüntüleme, Gerilim Koruma Rölesi ise koruma ve kontrol amacıyla kullanılır. İki ürün birbirinin yerine geçmez.",
    },

  {
      id: "gerilim-transduserleri-voltmetreler",
      sourceProductId: "gerilim-transduserleri",
      targetProductId: "voltmetreler",
      type: "measurement-analysis",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "Yerel Gerilim Gösterimi",
      targetTitle: "Analog Gerilim Sinyali",
  
      reason:
        "Voltmetreler gerilim değerinin cihaz üzerinde görüntülenmesine odaklanırken Gerilim Transdüserleri AC gerilim bilgisini kontrol ve otomasyon sistemlerinde kullanılabilecek standart analog sinyale dönüştürür.",
  
      whenUsed:
        "Gerilimin yerel olarak görüntülenmesi isteniyorsa Voltmetre; ölçüm bilgisinin başka bir kontrol veya otomasyon sistemine analog sinyal olarak aktarılması isteniyorsa Gerilim Transdüseri değerlendirilebilir.",
  
      technicalNote:
        "İki ürün farklı kullanım amaçlarına sahiptir ve doğrudan birebir ikame değildir. Aynı sistem içerisinde farklı veri kullanım ihtiyaçları için birlikte değerlendirilebilirler.",
    },

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
        "Frekansmetreler sistem frekansının ölçülmesini ve görüntülenmesini sağlarken frekans koruma fonksiyonu bulunan uygun Gerilim Koruma Rölesi modelleri, frekansın belirlenen sınırların dışına çıkması durumunda otomatik koruma amacıyla değerlendirilebilir.",
  
      whenUsed:
        "Frekansın yalnızca görüntülenmesinin yanında frekans sapmalarına karşı otomatik koruma veya kontrol fonksiyonu da istendiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca frekans değerinin izlenmesinin yeterli olduğu veya frekans korumasının başka bir sistem tarafından sağlandığı uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Frekans koruma özelliği tüm Gerilim Koruma Rölesi modellerinde bulunmayabilir. Kullanılacak rölenin frekans koruma özelliği ürün modeli üzerinden doğrulanmalıdır.",
    },

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
        "Cosφmetrenin güç faktörünü belirleyebilmesi için gerekli akım bilgisinin sağlanmasında uygun A Serisi Alçak Gerilim Akım Trafosu kullanılabilir.",
  
      whenUsed:
        "5 A sekonderli harici akım trafosu üzerinden Cosφ ölçümü yapılan alçak gerilim uygulamalarında değerlendirilir.",
  
      whenNotRequired:
        "Farklı bir akım ölçüm yapısının kullanıldığı uygulamalarda A Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu oranı ve sekonder değeri kullanılan Cosφmetreye ve tesis akımına göre seçilmeli ve model uyumluluğu doğrulanmalıdır.",
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
  
      whenNotRequired:
        "Yeni tesislerde veya farklı bir akım trafosu çözümünün tercih edildiği uygulamalarda gerekli olmayabilir.",
  
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
      targetTitle: "Clamp Tip Retrofit Akım Ölçümü",
  
      reason:
        "Clamp Tip Ayrılabilir Akım Trafoları mevcut kablolarda Cosφmetre için gerekli akım bilgisinin kolay montajla elde edilmesine yardımcı olabilir.",
  
      whenUsed:
        "Mevcut tesislere sonradan Cosφ ölçümü eklendiği ve kablo bağlantısının sökülmesinin istenmediği uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Clamp Tip Akım Trafosu çıkışı Cosφmetrenin giriş yapısıyla uyumlu değilse veya farklı bir akım trafosu çözümü kullanılıyorsa gerekli değildir.",
  
      technicalNote:
        "Cosφmetrenin akım giriş yapısıyla uyumlu çıkış sağlayan Clamp Tip Akım Trafosu modeli seçilmelidir.",
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
        "Cosφmetre ile tesisin güç faktörü izlenirken reaktif güç durumunun yalnızca görüntülenmesi yerine otomatik olarak yönetilmesi gerekiyorsa Reaktif Güç Kontrol Rölesi aynı çözüm ekosisteminde değerlendirilebilir.",
  
      whenUsed:
        "Cosφ değerlerinin kompanzasyon ihtiyacına işaret ettiği ve reaktif gücün otomatik olarak yönetilmesi istendiği uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca güç faktörü değerinin görüntülenmesinin yeterli olduğu veya kompanzasyon ihtiyacının bulunmadığı sistemlerde gerekli değildir.",
  
      technicalNote:
        "Cosφmetre yalnızca güç faktörünün ölçülmesi ve görüntülenmesi amacıyla kullanılır. Reaktif Güç Kontrol Rölesi ise kompanzasyon sisteminin otomatik kontrolünü gerçekleştirir. İki ürün birbirinin zorunlu tamamlayıcısı değildir.",
    },

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
        "Uygun A Serisi Alçak Gerilim Akım Trafosu, primer hat akımını Akım Transdüserinin kullanabileceği sekonder akım seviyesine dönüştürerek ölçüm girişinin oluşturulmasını sağlayabilir.",
  
      whenUsed:
        "Akım Transdüserinin girişine uygun 1 A veya 5 A gibi sekonder ölçüm akımı sağlayan harici akım trafosu gereken uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Akım bilgisinin farklı bir uygun ölçüm yapısı üzerinden sağlandığı uygulamalarda A Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu sekonder değeri ve oranı kullanılan Akım Transdüseri modelinin giriş değeriyle uyumlu olmalıdır.",
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
        "Ayrılabilir Akım Trafoları, mevcut tesislerde iletken veya bara bağlantıları sökülmeden Akım Transdüseri için gerekli ölçüm akımının elde edilmesini sağlayabilir.",
  
      whenUsed:
        "Mevcut tesislere sonradan analog akım izleme veya otomasyon altyapısı eklendiği retrofit uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Yeni tesislerde veya farklı bir akım trafosu çözümünün tercih edildiği uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım Trafosu sekonder çıkışı ile Akım Transdüserinin giriş değeri model bazında uyumlu olmalıdır.",
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
        "Clamp Tip Ayrılabilir Akım Trafoları, mevcut kablolarda Akım Transdüseri için gerekli ölçüm akımının kolay montajla elde edilmesine yardımcı olabilir.",
  
      whenUsed:
        "Kablo bağlantısının sökülmesinin istenmediği ve mevcut tesise sonradan analog ölçüm altyapısı eklendiği uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Clamp Tip Akım Trafosu çıkışı Akım Transdüserinin giriş yapısıyla uyumlu değilse veya farklı bir ölçüm çözümü kullanılıyorsa gerekli değildir.",
  
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
        "3 Fazlı Akım Trafoları, uygun üç fazlı sistemlerde faz akımlarının Akım Transdüseri tabanlı analog ölçüm altyapısına aktarılmasında kullanılabilir.",
  
      whenUsed:
        "Üç fazlı sistemlerde faz akımlarının otomasyon veya kontrol sistemi için standart analog sinyallere dönüştürülmesi gerektiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Tek fazlı ölçüm yapılan veya farklı akım trafosu yapılarının kullanıldığı uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım Transdüserleri tek ölçüm kanallı olabileceğinden üç fazlı ölçüm mimarisinde faz başına gerekli transdüser yapısı ve 3 Fazlı Akım Trafosunun çıkışları uygulama bazında doğrulanmalıdır.",
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
        "Uygun sekonder çıkışa sahip OG Akım Trafosu üzerinden elde edilen ölçüm akımı, orta gerilim tarafındaki akım bilgisinin standart analog sinyale dönüştürülmesi gereken uygulamalarda Akım Transdüserine giriş olarak kullanılabilir.",
  
      whenUsed:
        "OG tarafındaki akım bilgisinin uygun ölçüm trafosu üzerinden otomasyon veya kontrol sistemine analog sinyal olarak aktarılması gerektiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Orta gerilim ölçüm ihtiyacının bulunmadığı veya farklı bir ölçüm mimarisinin kullanıldığı uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Akım Transdüseri OG primer devresine doğrudan bağlanmaz. Uygun OG Akım Trafosunun izole sekonder ölçüm sinyalini kullanabilir. Akım trafosu sekonder değeri, izolasyon gereksinimleri ve sistem uyumluluğu proje bazında doğrulanmalıdır.",
    },

  {
      id: "dc-ampermetreler-gateway",
      sourceProductId: "dc-ampermetreler",
      targetProductId: "gateway",
      type: "communication",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Uzaktan Haberleşme",
      targetTitle: "DC Akım Ölçüm Kaynağı",
  
      reason:
        "Haberleşme özelliğine sahip DC Ampermetrelerden elde edilen akım ölçüm verilerinin ağ veya uzaktan erişim altyapısına aktarılması gerektiğinde Gateway birlikte değerlendirilebilir.",
  
      whenUsed:
        "RS-485 gibi uygun haberleşme özelliğine sahip DC Ampermetre modellerinde ölçüm verilerinin Ethernet, hücresel ağ veya üst seviye sisteme aktarılması gerektiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Haberleşme özelliği bulunmayan modellerde, yalnızca yerel ölçüm yapılan uygulamalarda veya mevcut haberleşme altyapısının ihtiyacı karşıladığı sistemlerde Gateway gerekli değildir.",
  
      technicalNote:
        "RS-485 haberleşme tüm DC Ampermetre modellerinde bulunmaz. Gateway gereksinimi, seçilen DC Ampermetre modelinin haberleşme özelliklerine, protokol uyumluluğuna ve tesisin ağ mimarisine göre doğrulanmalıdır.",
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
        "Haberleşme özelliğine sahip uygun DC Ampermetre modellerinden elde edilen akım değerlerinin merkezi veya uzaktan takip edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı çözüm olarak değerlendirilebilir.",
  
      whenUsed:
        "DC akım değerlerinin yalnızca cihaz ekranından değil merkezi veya uzaktan izleme sistemi üzerinden de takip edilmesi istendiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca yerel DC akım ölçümünün yeterli olduğu uygulamalarda gerekli değildir.",
  
      technicalNote:
        "ENTES Enerji İzleme Yazılımları ile kullanım, seçilen DC Ampermetre modelinin haberleşme özelliklerine ve yazılım uyumluluğuna bağlıdır. Uygun model ve haberleşme altyapısı bulunması halinde bağlantı doğrudan veya uygun Gateway üzerinden sağlanabilir; kesin uyumluluk model bazında doğrulanmalıdır.",
    },

  {
      id: "dc-ampermetreler-dc-voltmetreler",
      sourceProductId: "dc-ampermetreler",
      targetProductId: "dc-voltmetreler",
      type: "measurement-analysis",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "DC Gerilim İzleme",
      targetTitle: "DC Akım İzleme",
  
      reason:
        "DC Ampermetreler sistemdeki akım değerini, DC Voltmetreler ise gerilim değerini izleyerek DC sistemin iki temel elektriksel büyüklüğünün birlikte takip edilmesine yardımcı olabilir.",
  
      whenUsed:
        "DC sistemde yalnızca tek bir parametre yerine hem akım hem de gerilim değerlerinin takip edilmesi istendiğinde birlikte değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca tek bir DC elektriksel büyüklüğünün izlenmesinin yeterli olduğu uygulamalarda ikinci cihaz gerekli olmayabilir.",
  
      technicalNote:
        "DC Ampermetre ve DC Voltmetre birbirinin yerine geçmez. Farklı elektriksel büyüklükleri ölçen ve aynı DC sistem içerisinde tamamlayıcı olarak kullanılabilecek ürünlerdir.",
    },

  {
      id: "dc-voltmetreler-gateway",
      sourceProductId: "dc-voltmetreler",
      targetProductId: "gateway",
      type: "communication",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Uzaktan Haberleşme",
      targetTitle: "DC Gerilim Ölçüm Kaynağı",
  
      reason:
        "Haberleşme özelliğine sahip DC Voltmetrelerden elde edilen gerilim ölçüm verilerinin ağ veya uzaktan erişim altyapısına aktarılması gerektiğinde Gateway birlikte değerlendirilebilir.",
  
      whenUsed:
        "RS-485 gibi uygun haberleşme özelliğine sahip DC Voltmetre modellerinde gerilim verilerinin Ethernet, hücresel ağ veya üst seviye sisteme aktarılması gerektiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Haberleşme özelliği bulunmayan modellerde, yalnızca yerel gerilim ölçümü yapılan uygulamalarda veya mevcut haberleşme altyapısının ihtiyacı karşıladığı sistemlerde Gateway gerekli değildir.",
  
      technicalNote:
        "RS-485 haberleşme tüm DC Voltmetre modellerinde bulunmaz. Gateway gereksinimi, seçilen DC Voltmetre modelinin haberleşme özelliklerine, protokol uyumluluğuna ve tesisin ağ mimarisine göre doğrulanmalıdır.",
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
        "Haberleşme özelliğine sahip uygun DC Voltmetre modellerinden elde edilen gerilim değerlerinin merkezi veya uzaktan takip edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı çözüm olarak değerlendirilebilir.",
  
      whenUsed:
        "DC gerilim değerlerinin yalnızca cihaz ekranından değil merkezi veya uzaktan izleme sistemi üzerinden de takip edilmesi istendiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca yerel DC gerilim ölçümünün yeterli olduğu uygulamalarda gerekli değildir.",
  
      technicalNote:
        "ENTES Enerji İzleme Yazılımları ile kullanım, seçilen DC Voltmetre modelinin haberleşme özelliklerine ve yazılım uyumluluğuna bağlıdır. Uygun model ve haberleşme altyapısı bulunması halinde bağlantı doğrudan veya uygun Gateway üzerinden sağlanabilir; kesin uyumluluk model bazında doğrulanmalıdır.",
    },

  {
      id: "a-serisi-reaktif-guc-kontrol-roleleri",
      sourceProductId: "a-serisi-ag-akim-trafolari",
      targetProductId: "reaktif-guc-kontrol-rolesi",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Kompanzasyon Kontrolü",
      targetTitle: "Akım Ölçüm Girişi",
  
      reason:
        "Reaktif Güç Kontrol Rölesinin tesisin reaktif güç durumunu değerlendirebilmesi için uygulamaya uygun akım bilgisinin sağlanması gerekir. A Serisi Alçak Gerilim Akım Trafoları uygun AG kompanzasyon uygulamalarında kullanılabilir.",
  
      whenUsed:
        "Alçak gerilim kompanzasyon sistemlerinde rölenin akım bilgisini harici akım trafosu üzerinden aldığı uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Farklı ve uyumlu bir akım ölçüm çözümünün kullanıldığı uygulamalarda A Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu oranı, sekonder değeri ve bağlantı yapısı kullanılan Reaktif Güç Kontrol Rölesi modeline ve tesis akımına göre doğrulanmalıdır.",
    },

  {
      id: "ayrilabilir-reaktif-guc-kontrol-roleleri",
      sourceProductId: "ayrilabilir-akim-trafolari",
      targetProductId: "reaktif-guc-kontrol-rolesi",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Kompanzasyon Kontrolü",
      targetTitle: "Retrofit Akım Ölçüm Girişi",
  
      reason:
        "Reaktif Güç Kontrol Rölesinin ihtiyaç duyduğu akım bilgisinin sağlanmasında Ayrılabilir Akım Trafoları mevcut tesislerde kolay montaj sağlayan bir seçenek olarak değerlendirilebilir.",
  
      whenUsed:
        "Mevcut iletken veya bara bağlantısının sökülmesinin istenmediği retrofit kompanzasyon uygulamalarında değerlendirilebilir.",
  
      whenNotRequired:
        "Yeni tesislerde veya farklı bir akım trafosu çözümünün tercih edildiği uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Rölenin akım giriş yapısıyla uyumlu sekonder çıkışa sahip Akım Trafosu seçilmelidir.",
    },

  {
      id: "clamp-reaktif-guc-kontrol-roleleri",
      sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
      targetProductId: "reaktif-guc-kontrol-rolesi",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Kompanzasyon Kontrolü",
      targetTitle: "Clamp Tip Akım Ölçüm Girişi",
  
      reason:
        "Clamp Tip Ayrılabilir Akım Trafoları, mevcut tesislerde Reaktif Güç Kontrol Rölesinin ihtiyaç duyduğu akım bilgisinin pratik şekilde elde edilmesine yardımcı olabilir.",
  
      whenUsed:
        "Mevcut kablolara veya iletkenlere sonradan kompanzasyon ölçüm altyapısı eklendiği uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Clamp Tip Akım Trafosu çıkışı rölenin giriş yapısıyla uyumlu değilse veya farklı bir akım trafosu çözümü kullanılıyorsa gerekli değildir.",
  
      technicalNote:
        "Clamp Tip Akım Trafosunun çıkışı kullanılan Reaktif Güç Kontrol Rölesinin giriş yapısıyla uyumlu olmalıdır.",
    },

  {
      id: "uc-fazli-reaktif-guc-kontrol-roleleri",
      sourceProductId: "uc-fazli-akim-trafolari",
      targetProductId: "reaktif-guc-kontrol-rolesi",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Üç Faz Kompanzasyon Kontrolü",
      targetTitle: "Üç Faz Akım Ölçümü",
  
      reason:
        "Üç faz akım bilgisinin ayrı olarak değerlendirilmesi gereken kompanzasyon uygulamalarında uygun 3 Fazlı Akım Trafosu, Reaktif Güç Kontrol Rölesinin ölçüm altyapısında kullanılabilir.",
  
      whenUsed:
        "Üç faz akım ölçümünü destekleyen Reaktif Güç Kontrol Rölesi modellerinin kullanıldığı uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Tek akım trafosu ile çalışan röle modellerinde veya farklı akım ölçüm mimarilerinde gerekli olmayabilir.",
  
      technicalNote:
        "Üç faz akım ölçüm desteği, Akım Trafosu çıkış yapısı ve röle uyumluluğu model bazında doğrulanmalıdır.",
    },

  {
      id: "og-akim-trafolari-reaktif-guc-kontrol-roleleri",
      sourceProductId: "og-akim-trafolari",
      targetProductId: "reaktif-guc-kontrol-rolesi",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "OG Kompanzasyon Kontrolü",
      targetTitle: "OG Akım Ölçümü",
  
      reason:
        "Kompanzasyon kontrolü için akım bilgisinin orta gerilim tarafından alınması gereken uygun uygulamalarda OG Akım Trafoları ölçüm altyapısının bir parçası olarak değerlendirilebilir.",
  
      whenUsed:
        "OG uyumlu Reaktif Güç Kontrol Rölesi modellerinin kullanıldığı ve akım bilgisinin orta gerilim tarafındaki ölçüm altyapısından alınması gereken uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Akım bilgisinin alçak gerilim tarafından alındığı sistemlerde uygun AG Akım Trafosu çözümü kullanılabilir.",
  
      technicalNote:
        "Reaktif Güç Kontrol Rölesi OG primer devresine doğrudan bağlanmaz. OG uyumlu uygulamalarda ölçüm bilgisi uygun ölçü trafolarının sekonderlerinden alınır. Akım Trafosu oranı, sekonder değeri ve röle uyumluluğu proje bazında doğrulanmalıdır.",
    },

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
        "Klasik kondansatör kademeli otomatik kompanzasyon sistemlerinde Reaktif Güç Kontrol Rölesinin verdiği kontrol komutlarının güç kademelerine uygulanması için Kompanzasyon Kontaktörleri kullanılabilir.",
  
      whenUsed:
        "Elektromekanik kontaktörlü klasik kondansatör kademelerinin bulunduğu otomatik kompanzasyon sistemlerinde değerlendirilir.",
  
      whenNotRequired:
        "Statik anahtarlama, SVC, SVG veya farklı bir kompanzasyon mimarisinin kullanıldığı sistemlerde Kompanzasyon Kontaktörü gerekli olmayabilir.",
  
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
        "Kapasitif kompanzasyon gerekmeyen veya SVC, SVG gibi farklı kompanzasyon teknolojilerinin kullanıldığı sistemlerde gerekli olmayabilir.",
  
      technicalNote:
        "Kondansatör gücü ve kademe yapısı tesisin reaktif güç ihtiyacına ve mühendislik hesabına göre belirlenmelidir.",
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
        "Harmoniklerin bulunduğu ve harmonik filtre reaktörlü kondansatör kademeleriyle kompanzasyon yapılması gereken sistemlerde değerlendirilir.",
  
      whenNotRequired:
        "Harmonik filtre reaktörü gerektirmeyen veya farklı bir kompanzasyon ve harmonik azaltma teknolojisinin kullanıldığı uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Harmonik Filtre Reaktörü ve kondansatör değerleri tesisin harmonik yapısı, rezonans riski ve kompanzasyon ihtiyacına göre belirlenmelidir.",
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
        "Hızlı değişen veya kapasitif reaktif güç kontrolünün daha hassas yapılması gereken tesislerde SVC destekli Reaktif Güç Kontrol Rölesi, Endüktif Yük Sürücüleri ve SVC Şönt Reaktörlerinden oluşan çözümün kontrolünü sağlayabilir.",
  
      whenUsed:
        "Klasik kompanzasyonun yeterince hızlı veya hassas olmadığı ve ENTES SVC çözümünün kullanıldığı uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Klasik kompanzasyon yapısının yeterli olduğu veya farklı bir aktif kompanzasyon teknolojisinin kullanıldığı uygulamalarda SVC çözümüne ihtiyaç duyulmayabilir.",
  
      technicalNote:
        "SVC çözümünün kontrolü için SVC desteği bulunan uygun Reaktif Güç Kontrol Rölesi modeli kullanılmalıdır. Her Reaktif Güç Kontrol Rölesi modeli SVC kontrolünü desteklemez.",
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
        "Tesisin kapasitif reaktif güç ürettiği uygulamalarda Şönt Reaktörleri, Reaktif Güç Kontrol Rölesinin yönettiği sistem içerisinde endüktif reaktif güç sağlayarak kompanzasyona yardımcı olabilir.",
  
      whenUsed:
        "Tesisin kapasitif karakter gösterdiği ve endüktif reaktif güç ihtiyacının bulunduğu uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Kapasitif reaktif güç problemi bulunmayan veya endüktif kompanzasyonun farklı bir yöntemle sağlandığı sistemlerde gerekli değildir.",
  
      technicalNote:
        "Şönt Reaktör gücü ve kontrol yöntemi tesisin reaktif güç ihtiyacına ve kullanılan Reaktif Güç Kontrol Rölesi modeline göre belirlenmelidir.",
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
        "Hızlı değişen yüklerin bulunduğu kompanzasyon uygulamalarında Statik Kontaktörler, uygun kompanzasyon kademelerinin elektromekanik kontaktörlere göre daha hızlı anahtarlanması için Reaktif Güç Kontrol Rölesiyle birlikte değerlendirilebilir.",
  
      whenUsed:
        "Hızlı yük değişimlerinin bulunduğu ve standart elektromekanik anahtarlamanın yeterli olmadığı kompanzasyon uygulamalarında değerlendirilebilir.",
  
      whenNotRequired:
        "Standart Kompanzasyon Kontaktörlerinin anahtarlama hızının yeterli olduğu veya SVC/SVG gibi farklı bir kompanzasyon mimarisinin kullanıldığı sistemlerde gerekli değildir.",
  
      technicalNote:
        "Statik Kontaktör kullanımı yük karakteristiği, kademe gücü ve kullanılan Reaktif Güç Kontrol Rölesinin kontrol yapısına göre doğrulanmalıdır.",
    },

  {
      id: "reaktif-role-svg-ahf",
      sourceProductId: "reaktif-guc-kontrol-rolesi",
      targetProductId: "svg-ahf",
      type: "correction",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "Aktif Kompanzasyon ve Harmonik Çözümü",
      targetTitle: "Klasik / SVC Kompanzasyon Kontrolü",
  
      reason:
        "Reaktif Güç Kontrol Röleleri klasik veya SVC tabanlı kompanzasyon sistemlerinin kontrolünde kullanılırken, SVG ve AHF ürünleri aktif güç elektroniği tabanlı farklı kompanzasyon ve güç kalitesi çözümleri sunar.",
  
      whenUsed:
        "Tesisin reaktif güç kompanzasyonu, hızlı yük değişimleri veya harmonik azaltma ihtiyacına göre klasik kompanzasyon, SVC, SVG veya AHF çözümleri arasında uygun yaklaşım değerlendirilirken birlikte incelenebilir.",
  
      technicalNote:
        "SVG, reaktif güç kompanzasyonunda Reaktif Güç Kontrol Rölesi tabanlı klasik veya SVC çözümlerine alternatif bir aktif yaklaşım oluşturabilir. AHF ise esas olarak harmonik akım kompanzasyonu sağlar ve Reaktif Güç Kontrol Rölesinin doğrudan alternatifi değildir. Bu nedenle birleşik SVG & AHF ürün grubu için ilişki 'İlgili Ürün' olarak tanımlanmıştır.",
    },

  {
      id: "reaktif-role-gateway",
      sourceProductId: "reaktif-guc-kontrol-rolesi",
      targetProductId: "gateway",
      type: "communication",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Uzaktan Haberleşme",
      targetTitle: "Kompanzasyon Veri Kaynağı",
  
      reason:
        "Haberleşme özelliğine sahip Reaktif Güç Kontrol Rölelerinden elde edilen kompanzasyon ve elektriksel verilerin ağ veya uzaktan erişim altyapısına aktarılması gerektiğinde Gateway birlikte değerlendirilebilir.",
  
      whenUsed:
        "RS-485 gibi uygun haberleşme özelliğine sahip Reaktif Güç Kontrol Rölesinin Ethernet, hücresel ağ veya üst seviye enerji yönetimi altyapısına bağlanması gerektiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Haberleşmesiz röle modellerinde, yalnızca yerel kompanzasyon kontrolü yapılan sistemlerde veya mevcut haberleşme altyapısının ihtiyacı karşıladığı uygulamalarda Gateway gerekli olmayabilir.",
  
      technicalNote:
        "RS-485 haberleşme tüm Reaktif Güç Kontrol Rölesi modellerinde bulunmaz. Gateway gereksinimi ve protokol uyumluluğu kullanılan röle modeline ve tesisin haberleşme mimarisine göre doğrulanmalıdır.",
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
        "Haberleşme özelliğine sahip uygun Reaktif Güç Kontrol Rölelerinden elde edilen kompanzasyon ve reaktif güç bilgilerinin merkezi veya uzaktan takip edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı çözüm olarak değerlendirilebilir.",
  
      whenUsed:
        "Kompanzasyon sisteminin durumu, reaktif güç bilgileri ve desteklenen diğer elektriksel verilerin yalnızca yerel cihaz üzerinden değil merkezi veya uzaktan izleme sistemi üzerinden de takip edilmesi istendiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca yerel kompanzasyon kontrolü ve izlemenin yeterli olduğu sistemlerde gerekli değildir.",
  
      technicalNote:
        "Uzaktan izleme için gerekli haberleşme altyapısı seçilen Reaktif Güç Kontrol Rölesi modeline ve sistem mimarisine göre uygun Gateway veya mevcut haberleşme altyapısı üzerinden sağlanabilir. ENTES Enerji İzleme Yazılımları ile cihaz uyumluluğu model bazında doğrulanmalıdır.",
    },

  {
      id: "svc-urunleri-kondansatorler",
      sourceProductId: "svc-urunleri",
      targetProductId: "kondansator",
      type: "correction",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Kapasitif Kompanzasyon Kademeleri",
      targetTitle: "Dinamik / Hibrit Kompanzasyon",
  
      reason:
        "ENTES SVC çözümü, SVC kontrollü endüktif kompanzasyon yapısının yanında klasik kondansatör kademelerinin de bulunduğu hibrit kompanzasyon sistemlerinde kullanılabilir. Bu durumda Kondansatörler tesisin endüktif reaktif güç ihtiyacının kapasitif olarak karşılanmasına yardımcı olur.",
  
      whenUsed:
        "SVC çözümünün klasik kondansatör kademeleriyle birlikte kullanıldığı ve tesisin endüktif reaktif güç ihtiyacının kapasitif kompanzasyonla karşılanmasının gerektiği hibrit uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Kondansatör kademesine ihtiyaç bulunmayan veya reaktif güç ihtiyacının farklı bir kompanzasyon yaklaşımıyla karşılandığı SVC uygulamalarında gerekli olmayabilir.",
  
      technicalNote:
        "SVC destekli Reaktif Güç Kontrol Rölelerinde klasik kondansatör kademeleri ile SVC fonksiyonu aynı kompanzasyon mimarisi içerisinde birlikte kullanılabilir. Kondansatör gücü ve kademe yapısı tesisin reaktif güç ihtiyacına göre belirlenmelidir.",
    },

  {
      id: "svc-urunleri-sont-reaktorleri",
      sourceProductId: "svc-urunleri",
      targetProductId: "sont-reaktorleri",
      type: "correction",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Endüktif Kompanzasyon",
      targetTitle: "SVC Uyumlu Şönt Reaktör",
  
      reason:
        "ENTES SVC çözümünde uygun tek fazlı Şönt Reaktörleri, Endüktif Yük Sürücüleri üzerinden kontrollü şekilde devreye alınarak kapasitif reaktif gücün hızlı ve ayarlanabilir biçimde kompanze edilmesinde kullanılabilir.",
  
      whenUsed:
        "Tesisin kapasitif karakter gösterdiği ve SVC çözümü ile hızlı veya hassas endüktif kompanzasyon yapılması gereken uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Endüktif kompanzasyon ihtiyacının bulunmadığı veya farklı bir kompanzasyon teknolojisinin kullanıldığı SVC uygulamalarında gerekli olmayabilir.",
  
      technicalNote:
        "ENTES standart seri tek fazlı Şönt Reaktörleri SVC ile uyumludur. SVC uygulamasında uygun tek fazlı Şönt Reaktör modeli, Endüktif Yük Sürücüsü ve SVC desteğine sahip Reaktif Güç Kontrol Rölesi ile birlikte değerlendirilmelidir. Üç fazlı standart Şönt Reaktörler aynı SVC sürücü yapısıyla karıştırılmamalıdır.",
    },

  {
      id: "svc-urunleri-kompanzasyon-kontaktorleri",
      sourceProductId: "svc-urunleri",
      targetProductId: "kompanzasyon-kontaktorleri",
      type: "control",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Klasik Kademe Anahtarlama",
      targetTitle: "Hibrit SVC Kompanzasyonu",
  
      reason:
        "SVC çözümü ile birlikte klasik kondansatör kademelerinin de kullanıldığı hibrit kompanzasyon sistemlerinde Kompanzasyon Kontaktörleri, kondansatör kademelerinin elektromekanik olarak anahtarlanmasında kullanılabilir.",
  
      whenUsed:
        "SVC destekli kompanzasyon sistemi içerisinde klasik kontaktörlü kondansatör kademelerinin de bulunduğu uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Klasik kondansatör kademesi bulunmayan veya kondansatörlerin farklı bir anahtarlama yöntemiyle kontrol edildiği SVC uygulamalarında gerekli değildir.",
  
      technicalNote:
        "Kompanzasyon Kontaktörü SVC'nin Endüktif Yük Sürücüsünü veya SVC'ye özel Şönt Reaktörlerini kontrol etmez. Hibrit sistemde bulunan klasik kondansatör kademelerinin anahtarlanmasında kullanılır.",
    },

  {
      id: "svc-urunleri-svg-ahf",
      sourceProductId: "svc-urunleri",
      targetProductId: "svg-ahf",
      type: "correction",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "Aktif Kompanzasyon ve Güç Kalitesi",
      targetTitle: "SVC Tabanlı Dinamik Kompanzasyon",
  
      reason:
        "SVC ürünleri tristör kontrollü reaktör ve kompanzasyon elemanları üzerinden dinamik reaktif güç kontrolü sağlarken, SVG ve AHF ürünleri aktif güç elektroniği tabanlı farklı kompanzasyon ve güç kalitesi çözümleri sunar.",
  
      whenUsed:
        "Tesisin hızlı reaktif güç kompanzasyonu, yük değişimlerine cevap veya harmonik azaltma ihtiyacına göre SVC, SVG ve AHF teknolojileri arasında uygun çözüm yaklaşımı değerlendirilirken birlikte incelenebilir.",
  
      technicalNote:
        "SVG, reaktif güç kompanzasyonunda SVC'ye alternatif aktif bir teknoloji olarak değerlendirilebilir. AHF ise esas olarak harmonik akımların azaltılmasına odaklandığından SVC'nin doğrudan alternatifi değildir. SVG ve AHF uygulamada birleşik bir ürün grubu olarak temsil edildiği için ilişki 'İlgili Ürün' olarak tanımlanmıştır.",
    },

  {
      id: "a-serisi-svg-ahf",
      sourceProductId: "a-serisi-ag-akim-trafolari",
      targetProductId: "svg-ahf",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Aktif Güç Kalitesi Çözümü",
      targetTitle: "Standart AG Akım Referansı",
  
      reason:
        "SVG ve AHF çözümlerinin sistem akımını değerlendirerek uygun düzeltme akımını oluşturabilmesi için uygulamaya uygun A Serisi Alçak Gerilim Akım Trafosu ölçüm referansı olarak kullanılabilir.",
  
      whenUsed:
        "Harici akım trafosu üzerinden akım referansı alınan ve seçilen SVG veya AHF ürününün giriş yapısıyla uyumlu AG uygulamalarında değerlendirilir.",
  
      whenNotRequired:
        "Akım bilgisinin farklı ve uyumlu bir ölçüm yapısından sağlandığı uygulamalarda A Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu oranı, sekonder çıkışı ve bağlantı yapısı kullanılan SVG/AHF modelinin giriş özelliklerine ve tesis akımına göre doğrulanmalıdır.",
    },

  {
      id: "ayrilabilir-svg-ahf",
      sourceProductId: "ayrilabilir-akim-trafolari",
      targetProductId: "svg-ahf",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Aktif Güç Kalitesi Çözümü",
      targetTitle: "Retrofit Akım Referansı",
  
      reason:
        "Ayrılabilir Akım Trafoları, mevcut tesislerde SVG/AHF sisteminin ihtiyaç duyduğu akım referansının iletken veya bara bağlantıları sökülmeden elde edilmesini kolaylaştırabilir.",
  
      whenUsed:
        "Mevcut bir tesise sonradan SVG veya AHF çözümü eklendiği ve kolay montaj ihtiyacının bulunduğu retrofit uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Yeni tesislerde, farklı bir akım trafosu çözümünün tercih edildiği veya akım bilgisinin başka uygun bir ölçüm altyapısından sağlandığı uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Ayrılabilir Akım Trafosunun sekonder çıkışı ve oranı kullanılan SVG/AHF ürününün akım giriş yapısıyla model bazında uyumlu olmalıdır.",
    },

  {
      id: "clamp-svg-ahf",
      sourceProductId: "clamp-tip-ayrilabilir-akim-trafolari",
      targetProductId: "svg-ahf",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Aktif Güç Kalitesi Çözümü",
      targetTitle: "Clamp Tip Akım Referansı",
  
      reason:
        "Clamp Tip Ayrılabilir Akım Trafoları, mevcut kablolarda SVG/AHF sisteminin ihtiyaç duyduğu akım bilgisinin bağlantılar sökülmeden elde edilmesine yardımcı olabilir.",
  
      whenUsed:
        "Mevcut tesis bağlantılarının değiştirilmesinin istenmediği ve seçilen SVG/AHF ürününün ilgili akım trafosu çıkışını desteklediği retrofit uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Clamp Tip Akım Trafosu çıkışı SVG/AHF ürününün giriş yapısıyla uyumlu değilse veya farklı bir akım ölçüm çözümü kullanılıyorsa gerekli değildir.",
  
      technicalNote:
        "Clamp Tip Akım Trafosunun çıkış tipi, oranı ve bağlantı yapısı kullanılan SVG/AHF ürününün giriş özellikleriyle model bazında doğrulanmalıdır.",
    },

  {
      id: "uc-fazli-svg-ahf",
      sourceProductId: "uc-fazli-akim-trafolari",
      targetProductId: "svg-ahf",
      type: "measurement-input",
  
      sourceStatus: "related",
      targetStatus: "conditional",
  
      sourceTitle: "Üç Faz Aktif Güç Kalitesi Çözümü",
      targetTitle: "Üç Faz Akım Referansı",
  
      reason:
        "Üç fazlı SVG ve AHF uygulamalarında uygun 3 Fazlı Akım Trafosu, sistemin ihtiyaç duyduğu faz akımı bilgilerinin ölçüm altyapısına sağlanmasında kullanılabilir.",
  
      whenUsed:
        "Üç fazlı kompanzasyon veya aktif harmonik azaltma uygulamalarında ve seçilen SVG/AHF sisteminin akım giriş yapısıyla uyumlu olduğu durumlarda değerlendirilir.",
  
      whenNotRequired:
        "Farklı bir akım ölçüm mimarisinin kullanıldığı veya 3 Fazlı Akım Trafosu çıkışının seçilen SVG/AHF sistemiyle uyumlu olmadığı uygulamalarda gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosu çıkış değerleri, faz bağlantıları ve SVG/AHF ürününün akım giriş yapısı model bazında doğrulanmalıdır.",
    },

  {
      id: "svg-ahf-gateway",
      sourceProductId: "svg-ahf",
      targetProductId: "gateway",
      type: "communication",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Uzaktan Haberleşme",
      targetTitle: "Aktif Güç Kalitesi Veri Kaynağı",
  
      reason:
        "SVG ve AHF sistemlerinin çalışma, kompanzasyon ve güç kalitesi verilerinin ağ veya uzaktan erişim altyapısına aktarılması gerektiğinde Gateway birlikte değerlendirilebilir.",
  
      whenUsed:
        "SVG/AHF verilerinin Ethernet, hücresel ağ veya üst seviye enerji yönetimi altyapısına aktarılması gerektiği ve sistem mimarisinin Gateway kullanımını gerektirdiği uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Yalnızca yerel izleme yapılan veya ürünün mevcut haberleşme altyapısının ağ bağlantısı ihtiyacını doğrudan karşıladığı uygulamalarda ayrıca Gateway gerekli olmayabilir.",
  
      technicalNote:
        "SVG ve AHF ürünlerinde RS-485 haberleşme desteği bulunabilir. Gateway gereksinimi, kullanılan SVG/AHF modelinin haberleşme özelliklerine, desteklenen protokollere ve tesisin ağ mimarisine göre doğrulanmalıdır.",
    },

  {
      id: "svg-ahf-enerji-izleme-yazilimlari",
      sourceProductId: "svg-ahf",
      targetProductId: "entes-enerji-izleme-yazilimlari",
      type: "data-transfer",
  
      sourceStatus: "optional",
      targetStatus: "related",
  
      sourceTitle: "Uzaktan Güç Kalitesi İzleme",
      targetTitle: "Aktif Güç Kalitesi Veri Kaynağı",
  
      reason:
        "SVG ve AHF çözümlerine ait çalışma, kompanzasyon ve güç kalitesi verilerinin merkezi veya uzaktan takip edilmesi için ENTES Enerji İzleme Yazılımları tamamlayıcı çözüm olarak değerlendirilebilir.",
  
      whenUsed:
        "Müşteri SVG/AHF sisteminin durumunu ve desteklenen ölçüm verilerini yalnızca cihaz üzerindeki ekranlardan değil, Enerji Doktoru gibi merkezi veya uzaktan izleme çözümleri üzerinden de takip etmek istediğinde değerlendirilebilir.",
  
      whenNotRequired:
        "Yalnızca yerel izleme yapısının yeterli olduğu uygulamalarda gerekli değildir.",
  
      technicalNote:
        "Uzaktan izleme için gerekli haberleşme altyapısı kullanılan SVG/AHF ürününün haberleşme özelliklerine ve sistem mimarisine göre uygun Gateway veya mevcut haberleşme altyapısı üzerinden sağlanabilir. ENTES Enerji İzleme Yazılımları ile ürün uyumluluğu model bazında doğrulanmalıdır.",
    },

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
        "Kompanzasyon Kontaktörünün güç ve anahtarlama özellikleri kullanılan Kondansatör kademesinin reaktif güç değerine uygun seçilmelidir.",
    },

  {
      id: "kondansator-harmonik-filtre-reaktorleri",
      sourceProductId: "kondansator",
      targetProductId: "harmonik-filtre-reaktorleri",
      type: "correction",
  
      sourceStatus: "conditional",
      targetStatus: "required",
  
      sourceTitle: "Reaktörlü Kompanzasyon",
      targetTitle: "Uyumlu Kapasitif Kademe",
  
      reason:
        "Harmoniklerin veya rezonans riskinin kompanzasyon sistemini olumsuz etkileyebileceği uygulamalarda Harmonik Filtre Reaktörleri, uygun Kondansatörlerle seri çalışarak detuned kompanzasyon kademesi oluşturabilir.",
  
      whenUsed:
        "Harmonik yapısının veya rezonans riskinin reaktörlü kompanzasyon çözümünü gerektirdiği tesislerde Harmonik Filtre Reaktörü ile uygun Kondansatör birlikte değerlendirilir.",
  
      whenNotRequired:
        "Tesisin harmonik ve rezonans koşulları reaktörlü kompanzasyon gerektirmiyorsa Harmonik Filtre Reaktörü gerekli olmayabilir.",
  
      technicalNote:
        "Harmonik Filtre Reaktörü uygun Kondansatör ile birlikte çalışan bir kompanzasyon elemanıdır. ENTES ürün tablolarında Harmonik Filtre Reaktörü modelleri için uygun Kondansatör modelleri ayrıca belirtilmektedir. Reaktörün P faktörü, rezonans frekansı, endüktansı ve Kondansatörün gerilim, kapasite ve reaktif güç değerleri model bazında eşleştirilmelidir.",
    },

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
        "Hızlı değişen yüklerin bulunduğu kompanzasyon uygulamalarında Statik Kontaktörler, uygun Kondansatör kademelerinin hızlı şekilde anahtarlanması için değerlendirilebilir.",
  
      whenUsed:
        "Kompanzasyon kademelerinin standart elektromekanik kontaktörlere göre daha hızlı devreye alınması ve çıkarılmasının gerektiği uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Standart Kompanzasyon Kontaktörlerinin anahtarlama hızının yeterli olduğu veya farklı bir kompanzasyon teknolojisinin kullanıldığı sistemlerde Statik Kontaktör gerekli değildir.",
  
      technicalNote:
        "Statik Kontaktörün güç, gerilim ve bağlantı özellikleri kullanılacak Kondansatör kademesine ve kompanzasyon sistemine uygun seçilmelidir.",
    },

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
        "Kondansatör kademelerinin kısa aralıklarla yeniden devreye alınması gereken uygulamalarda Deşarj Ünitesi, Kondansatör üzerinde kalan artık gerilimin daha hızlı azaltılmasına yardımcı olabilir.",
  
      whenUsed:
        "Kondansatör kademelerinin sık veya hızlı anahtarlandığı ve standart deşarj süresinin yeterli olmadığı otomatik kompanzasyon sistemlerinde değerlendirilir.",
  
      whenNotRequired:
        "Standart deşarj süresinin uygulama için yeterli olduğu sistemlerde ayrıca Deşarj Ünitesi gerekli olmayabilir.",
  
      technicalNote:
        "Deşarj Ünitesinin gerilim ve güç değerleri kullanılan Kondansatör modeliyle uyumlu olmalıdır.",
    },

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
        "Harmonik Filtre Reaktörü ve Kondansatörden oluşan kompanzasyon kademesinin otomatik olarak devreye alınması ve devreden çıkarılması gereken uygulamalarda uygun Kompanzasyon Kontaktörü kullanılabilir.",
  
      whenUsed:
        "Elektromekanik kontaktörlü otomatik detuned veya reaktörlü kompanzasyon kademelerinde değerlendirilir.",
  
      whenNotRequired:
        "Sabit kompanzasyon uygulamalarında veya farklı bir anahtarlama yönteminin kullanıldığı sistemlerde Kompanzasyon Kontaktörü gerekli olmayabilir.",
  
      technicalNote:
        "Kompanzasyon Kontaktörü, Harmonik Filtre Reaktörü ve Kondansatör grubunun gerilim, akım ve reaktif güç değerlerine uygun seçilmelidir.",
    },

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
        "Detuned veya reaktörlü kompanzasyon kademelerinin hızlı şekilde devreye alınması ve devreden çıkarılması gereken uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "Standart elektromekanik anahtarlama hızının yeterli olduğu veya reaktörlü kompanzasyon kullanılmayan sistemlerde gerekli değildir.",
  
      technicalNote:
        "Statik Kontaktör, Kondansatör ve Harmonik Filtre Reaktörünün elektriksel değerleri ve anahtarlama gereksinimleri sistem tasarımına göre birlikte değerlendirilmelidir.",
    },

  {
      id: "harmonik-filtre-reaktorleri-svg-ahf",
      sourceProductId: "harmonik-filtre-reaktorleri",
      targetProductId: "svg-ahf",
      type: "correction",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "Aktif Güç Kalitesi Çözümü",
      targetTitle: "Pasif Detuned Kompanzasyon",
  
      reason:
        "Harmonik Filtre Reaktörleri uygun Kondansatörlerle birlikte pasif detuned kompanzasyon yapısının bir parçası olarak harmonik ve rezonans etkilerinin kontrolüne yardımcı olurken, SVG ve AHF ürünleri aktif güç elektroniği tabanlı farklı güç kalitesi çözümleri sunar.",
  
      whenUsed:
        "Tesisin harmonik yapısı, reaktif güç ihtiyacı, yük değişkenliği ve kompanzasyon mimarisine göre pasif reaktörlü veya aktif güç kalitesi çözümleri değerlendirilirken birlikte incelenebilir.",
  
      technicalNote:
        "Harmonik Filtre Reaktörü ile SVG/AHF ürün grubu birebir alternatif değildir. AHF esas olarak aktif harmonik akım kompanzasyonuna, SVG ise aktif reaktif güç kompanzasyonuna odaklanır. Harmonik Filtre Reaktörü ise uygun Kondansatörle seri çalışan pasif detuned kompanzasyon elemanıdır. Bu nedenle birleşik SVG & AHF ürün grubu ile ilişki 'İlgili Ürün' olarak tanımlanmıştır.",
    },

  {
      id: "kompanzasyon-kontaktorleri-statik-kontaktorler",
      sourceProductId: "kompanzasyon-kontaktorleri",
      targetProductId: "statik-kontaktorler",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Hızlı Statik Anahtarlama",
      targetTitle: "Klasik Elektromekanik Anahtarlama",
  
      reason:
        "Kompanzasyon Kontaktörleri kondansatör kademelerinin elektromekanik olarak anahtarlanmasına odaklanırken, Statik Kontaktörler hızlı değişen yüklerin bulunduğu uygulamalarda tristör tabanlı çok daha hızlı anahtarlama sağlar.",
  
      whenUsed:
        "Standart kademe anahtarlamasında Kompanzasyon Kontaktörü; çok hızlı yük değişimlerine cevap verilmesi gereken kompanzasyon sistemlerinde Statik Kontaktör değerlendirilebilir.",
  
      technicalNote:
        "İki ürün aynı temel kademe anahtarlama ihtiyacına farklı teknolojilerle çözüm sunar. Seçim yük değişim hızı, anahtarlama sıklığı, kademe gücü ve kompanzasyon mimarisine göre yapılmalıdır.",
    },

  {
      id: "ayr-yuk-ayiricilar-nh-sigortalar",
      sourceProductId: "ayr-yuk-ayiricilar",
      targetProductId: "nh-sigortalar",
      type: "protection",
  
      sourceStatus: "required",
      targetStatus: "related",
  
      sourceTitle: "Uyumlu NH Sigorta",
      targetTitle: "Sigortalı Yük Ayırma",
  
      reason:
        "AYR Serisi Yük Ayırıcılar uygun NH Bıçaklı Sigortalar ile birlikte kullanılarak yük ayırma işlevine ek olarak aşırı akım ve kısa devre koşullarına karşı koruma sağlayan bir çözüm oluşturabilir.",
  
      whenUsed:
        "Elektrik devresinde yük ayırma ve NH sigorta tabanlı aşırı akım veya kısa devre korumasının birlikte sağlanması gereken uygulamalarda değerlendirilir.",
  
      technicalNote:
        "AYR.160 modeli NH00, AYR.250 modeli ise NH1 boyutundaki uygun NH sigortalarla eşleştirilir. Sigortanın anma akımı uygulamanın yük ve koruma gereksinimlerine göre seçilmelidir.",
    },

  {
      id: "gateway-enerji-izleme-yazilimlari",
      sourceProductId: "gateway",
      targetProductId: "entes-enerji-izleme-yazilimlari",
      type: "communication",
  
      sourceStatus: "optional",
      targetStatus: "conditional",
  
      sourceTitle: "Merkezi Enerji İzleme",
      targetTitle: "Saha Haberleşme Altyapısı",
  
      reason:
        "Gateway ürünleri saha cihazlarından elde edilen verilerin Ethernet, mobil ağ veya uygun haberleşme bağlantıları üzerinden üst seviye sistemlere aktarılmasını sağlayabilir. ENTES Enerji İzleme Yazılımları ise bu verilerin merkezi olarak izlenmesi, analiz edilmesi ve raporlanması için değerlendirilebilir.",
  
      whenUsed:
        "Saha cihazlarının ölçüm ve çalışma verilerinin Enerji Doktoru gibi merkezi veya uzaktan enerji izleme çözümlerine aktarılması gerektiğinde ve sistem mimarisi Gateway kullanımını gerektirdiğinde birlikte değerlendirilebilir.",
  
      whenNotRequired:
        "Gateway farklı bir üst seviye sistemle kullanılıyorsa Enerji İzleme Yazılımı gerekli değildir. Enerji İzleme Yazılımına veri aktarımı mevcut ağ veya cihazın doğrudan haberleşme altyapısıyla sağlanabiliyorsa ayrıca Gateway gerekli olmayabilir.",
  
      technicalNote:
        "Gateway ürün grubu ETMO, GEMO ve RS-USB2 gibi farklı haberleşme amaçlarına sahip ürünleri içerir. ETMO Ethernet, GEMO mobil ağ ve Ethernet, RS-USB2 ise yerel RS-485–USB dönüşümü gibi farklı bağlantı senaryolarına yöneliktir. Enerji İzleme Yazılımı ile kullanılacak bağlantı yapısı ve cihaz uyumluluğu model bazında doğrulanmalıdır.",
    },

  {
      id: "veri-toplayicilar-gateway",
      sourceProductId: "veri-toplayicilar",
      targetProductId: "gateway",
      type: "communication",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Uzak / Ağ Üzerinden Veri Aktarımı",
      targetTitle: "Pulse Veri Kaynağı",
  
      reason:
        "EPC-12 gibi Veri Toplayıcılar sayaçlardan gelen pulse verilerini toplar ve RS-485 üzerinden dış sisteme aktarabilir. Bu verilerin Ethernet, mobil ağ veya başka bir haberleşme ortamına taşınması gerektiğinde uygun Gateway çözümü birlikte değerlendirilebilir.",
  
      whenUsed:
        "Veri Toplayıcıdan elde edilen tüketim bilgilerinin yerel RS-485 hattının ötesine taşınması, merkezi bir ağa veya uzaktaki sisteme aktarılması gerektiğinde değerlendirilir.",
  
      whenNotRequired:
        "Veri Toplayıcının RS-485 çıkışı doğrudan uygun bir üst seviye sisteme bağlanabiliyorsa veya yalnızca yerel veri erişimi yeterliyse ayrıca Gateway gerekli olmayabilir.",
  
      technicalNote:
        "EPC-12 RS-485 haberleşme özelliğine sahiptir. Kullanılacak Gateway modeli, haberleşme protokolü ve sistem bağlantı mimarisi uygulamaya göre doğrulanmalıdır.",
    },

  {
      id: "veri-toplayicilar-enerji-izleme-yazilimlari",
      sourceProductId: "veri-toplayicilar",
      targetProductId: "entes-enerji-izleme-yazilimlari",
      type: "data-transfer",
  
      sourceStatus: "optional",
      targetStatus: "conditional",
  
      sourceTitle: "Merkezi Tüketim İzleme",
      targetTitle: "Pulse Tabanlı Veri Toplama",
  
      reason:
        "EPC-12 gibi Veri Toplayıcılar elektrik, su, doğalgaz ve benzeri sayaçlardan gelen pulse verilerini toplayarak tüketim bilgilerinin üst seviye enerji yönetimi sistemlerinde değerlendirilmesine imkân sağlayabilir.",
  
      whenUsed:
        "Enerji İzleme Yazılımında pulse çıkışlı elektrik, su, doğalgaz veya benzeri sayaçlardan gelen tüketim verilerinin merkezi olarak takip edilmesi gerektiğinde Veri Toplayıcı birlikte değerlendirilebilir.",
  
      whenNotRequired:
        "Enerji İzleme Yazılımına gerekli tüketim verileri doğrudan haberleşmeli sayaçlar veya diğer uyumlu ölçüm cihazları üzerinden sağlanıyorsa ayrıca Veri Toplayıcı gerekli olmayabilir.",
  
      technicalNote:
        "EPC-12, 12 adet pulse girişinden gelen sayaç verilerini toplar ve RS-485 üzerinden dışarı aktarabilir. Yazılımla kullanılacak veri aktarım yapısı, sayaç pulse parametreleri ve sistem uyumluluğu uygulama bazında doğrulanmalıdır.",
    },

  {
      id: "astronomik-zaman-roleleri-programlanabilir-zaman-saatleri",
      sourceProductId: "astronomik-zaman-roleleri",
      targetProductId: "programlanabilir-zaman-saatleri",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Programlanabilir Zaman Kontrolü",
      targetTitle: "Astronomik Zaman Kontrolü",
  
      reason:
        "Astronomik Zaman Röleleri bağlı cihazları kullanıcı tarafından belirlenen saatlerin yanında gün doğumu ve gün batımı zamanlarına göre kontrol edebilirken, Programlanabilir Zaman Saatleri günlük veya haftalık olarak tanımlanan sabit zaman programlarına göre kontrol sağlar.",
  
      whenUsed:
        "Kontrolün gün doğumu ve gün batımı gibi astronomik zamanlara göre otomatik değişmesi gerekiyorsa Astronomik Zaman Rölesi; sabit günlük veya haftalık çalışma programlarının yeterli olduğu uygulamalarda Programlanabilir Zaman Saati değerlendirilebilir.",
  
      technicalNote:
        "İki ürün benzer zaman tabanlı anahtarlama ihtiyacına farklı kapsamlarla çözüm sunar. Astronomik Zaman Rölelerinde coğrafi koordinat ve tarih kullanılarak gün doğumu ve gün batımı zamanları hesaplanabilir; Programlanabilir Zaman Saatleri ise önceden belirlenen günlük veya haftalık zaman programlarına odaklanır.",
    },

  {
      id: "astronomik-zaman-roleleri-fotosel-roleleri",
      sourceProductId: "astronomik-zaman-roleleri",
      targetProductId: "fotosel-roleleri",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Ortam Işığına Göre Kontrol",
      targetTitle: "Astronomik Aydınlatma Kontrolü",
  
      reason:
        "Astronomik Zaman Röleleri gün doğumu ve gün batımı zamanlarını tarih ve coğrafi konuma göre hesaplayarak kontrol sağlarken, Fotosel Röleleri ortamın gerçek aydınlık seviyesine göre bağlı cihazların kontrol edilmesini sağlar.",
  
      whenUsed:
        "Dış aydınlatmanın gün doğumu ve gün batımı hesabına göre kontrol edilmesi istendiğinde Astronomik Zaman Rölesi; gerçek ortam ışık seviyesinin doğrudan algılanmasına göre kontrol edilmesi istendiğinde Fotosel Rölesi değerlendirilebilir.",
  
      technicalNote:
        "Bu alternatif ilişkisi özellikle dış aydınlatma ve gün ışığına bağlı kontrol uygulamaları için geçerlidir. Astronomik Zaman Rölesi ışık seviyesini fiziksel olarak ölçmez; Fotosel Rölesi ise astronomik hesaplama yerine gerçek ortam aydınlığını algılar.",
    },

  {
      id: "cok-fonksiyonlu-zaman-roleleri-zaman-roleleri",
      sourceProductId: "cok-fonksiyonlu-zaman-roleleri",
      targetProductId: "zaman-roleleri",
      type: "alternative",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Temel Zamanlama Kontrolü",
      targetTitle: "Çok Fonksiyonlu Zamanlama",
  
      reason:
        "Zaman Röleleri belirli gecikme veya zamanlama fonksiyonlarına yönelik çözümler sunarken, Çok Fonksiyonlu Zaman Röleleri aynı cihaz ailesinde çekmede gecikme, bırakmada gecikme, impulse, flaşör, start-stop, sayıcı veya motor kontrolüne yönelik farklı zamanlama fonksiyonlarını destekleyebilir.",
  
      whenUsed:
        "Tek ve belirli bir zamanlama fonksiyonunun yeterli olduğu uygulamalarda Zaman Rölesi; farklı çalışma senaryolarının veya birden fazla zamanlama fonksiyonunun aynı cihaz üzerinden karşılanması gerektiği uygulamalarda Çok Fonksiyonlu Zaman Rölesi değerlendirilebilir.",
  
      technicalNote:
        "İki ürün aynı temel zamanlama ve kontrol ihtiyacına farklı fonksiyon kapsamlarıyla çözüm sunar. Desteklenen fonksiyonlar ve zaman aralıkları ürün modeline göre değiştiğinden seçim model bazında yapılmalıdır.",
    },

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
        "RS-485 haberleşme özelliğine sahip Astronomik Zaman Rölesi modelleri, uygun Gateway üzerinden ağ veya üst seviye haberleşme altyapısına bağlanabilir.",
  
      whenUsed:
        "RS-485 haberleşme özelliğine sahip Astronomik Zaman Rölesi modeline uzaktan erişilmesi veya cihazın üst seviye haberleşme altyapısına bağlanması gerektiğinde değerlendirilebilir.",
  
      whenNotRequired:
        "RS-485 haberleşmesi bulunmayan modellerde veya yalnızca yerel zaman kontrolü yapılan uygulamalarda Gateway gerekli değildir.",
  
      technicalNote:
        "Gateway ilişkisi tüm Astronomik Zaman Rölesi modelleri için geçerli değildir. Haberleşme desteği, protokol ve Gateway uyumluluğu model bazında doğrulanmalıdır.",
    },

  {
      id: "gerilim-koruma-roleleri-motor-faz-koruma-roleleri",
      sourceProductId: "gerilim-koruma-roleleri",
      targetProductId: "motor-faz-koruma-roleleri",
      type: "protection",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Motor ve Faz Odaklı Koruma",
      targetTitle: "Geniş Şebeke Gerilim Koruması",
  
      reason:
        "Gerilim Koruma Röleleri düşük ve aşırı gerilim, faz yokluğu, faz sırası, frekans veya nötr gibi modele bağlı şebeke koruma fonksiyonları sunabilirken Motor (Faz) Koruma Röleleri özellikle üç fazlı motorlarda faz yokluğu, faz sırası, gerilim asimetrisi ve bazı modellerde PTC gibi motor odaklı koruma fonksiyonları sağlayabilir.",
  
      whenUsed:
        "Koruma ihtiyacı genel şebeke gerilimi, frekans veya nötr koşullarına odaklanıyorsa uygun Gerilim Koruma Rölesi; üç fazlı motorun faz koşulları, asimetri veya modele bağlı PTC koruması ön plandaysa Motor (Faz) Koruma Rölesi değerlendirilebilir.",
  
      technicalNote:
        "Ürün aileleri tamamen eşdeğer değildir. Fonksiyonları seçilen modele göre kısmen örtüşür. Alternatiflik korunacak yük ve gerekli koruma fonksiyonlarının kapsamına bağlıdır.",
    },

  {
      id: "gerilim-koruma-roleleri-faz-sirasi-rolesi",
      sourceProductId: "gerilim-koruma-roleleri",
      targetProductId: "faz-sirasi-rolesi",
      type: "protection",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Özel Faz Sırası Kontrolü",
      targetTitle: "Geniş Gerilim ve Faz Koruması",
  
      reason:
        "Bazı Gerilim Koruma Rölesi modelleri faz sırası kontrolünü düşük veya aşırı gerilim, faz yokluğu ve diğer şebeke koruma fonksiyonlarıyla birlikte sunarken Faz Sırası Rölesi yalnızca üç fazın doğru sıralanmasının kontrol edilmesine yönelik daha özel bir çözüm sunar.",
  
      whenUsed:
        "Yalnızca üç fazın doğru sıralanmasının kontrol edilmesi gerekiyorsa Faz Sırası Rölesi; faz sırasının yanında düşük veya aşırı gerilim ve diğer şebeke koruma fonksiyonlarına da ihtiyaç varsa uygun Gerilim Koruma Rölesi değerlendirilebilir.",
  
      technicalNote:
        "Faz sırası fonksiyonu tüm Gerilim Koruma Rölesi modellerinde bulunmayabilir. Alternatiflik yalnızca bu fonksiyonu destekleyen uygun modeller ve uygulamalar için geçerlidir.",
    },

  {
      id: "gerilim-koruma-roleleri-surge-koruma",
      sourceProductId: "gerilim-koruma-roleleri",
      targetProductId: "surge-koruma",
      type: "protection",
  
      sourceStatus: "related",
      targetStatus: "related",
  
      sourceTitle: "Darbe Gerilimi Koruması",
      targetTitle: "Şebeke Gerilim Koruması",
  
      reason:
        "Gerilim Koruma Rölesi düşük ve aşırı şebeke gerilimlerini izlerken Surge Koruma Cihazı kısa süreli ve yüksek enerjili darbe gerilimlerini sınırlandırmaya yönelik farklı bir koruma katmanı sağlar.",
  
      whenUsed:
        "Hassas ekipmanların bulunduğu ve hem sürekli veya daha uzun süreli şebeke gerilim anomalilerine hem de geçici darbe gerilimlerine karşı koruma istendiğinde birlikte değerlendirilebilir.",
  
      whenNotRequired:
        "Darbe gerilimi korumasının başka uygun bir SPD altyapısıyla sağlandığı uygulamalarda ayrıca ENTES Surge Koruma ürünü gerekli olmayabilir.",
  
      technicalNote:
        "Surge Koruma Cihazı Gerilim Koruma Rölesinin yerine geçmez. Gerilim Koruma Rölesi şebeke gerilimi ve modele bağlı diğer faz koşullarını izlerken Surge Koruma Cihazı çok kısa süreli yüksek enerjili darbe gerilimlerine karşı koruma sağlar.",
    },

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
        "AKC-01A ve AKC-01D gibi X/5A akım trafosu girişini destekleyen Akım Koruma Rölesi modellerinde A Serisi Alçak Gerilim Akım Trafoları, daha yüksek primer akımların röle tarafından izlenebilmesi için uygun 5 A sekonder akım bilgisinin sağlanmasında kullanılabilir.",
  
      whenUsed:
        "X/5A akım trafosu girişini destekleyen uygun Akım Koruma Rölesi modellerinde ve hat akımının harici akım trafosu üzerinden izlenmesi gereken uygulamalarda değerlendirilir.",
  
      whenNotRequired:
        "CT-25 gibi farklı akım algılama yapısı kullanan Akım Koruma Rölesi modellerinde A Serisi Akım Trafosu gerekli olmayabilir.",
  
      technicalNote:
        "Akım trafosunun primer oranı, 5 A sekonder çıkışı ve kullanılan Akım Koruma Rölesi modelinin giriş yapısı doğrulanmalıdır.",
    },

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
        "5 A sekonder çıkışlı uygun Ayrılabilir Akım Trafoları, Akım Koruma Rölesinin ihtiyaç duyduğu akım bilgisinin mevcut bara veya iletken bağlantısı sökülmeden elde edilmesini sağlayabilir.",
  
      whenUsed:
        "Mevcut tesise X/5A girişli uygun Akım Koruma Rölesi eklendiğinde ve iletken veya bara bağlantısının sökülmesinin istenmediği retrofit uygulamalarda değerlendirilebilir.",
  
      whenNotRequired:
        "Akım trafosu gerektirmeyen veya CT-25 gibi farklı akım giriş yapısına sahip Akım Koruma Rölesi modellerinde gerekli değildir.",
  
      technicalNote:
        "Ayrılabilir Akım Trafosunun 5 A sekonder çıkışı, primer oranı ve kullanılan Akım Koruma Rölesinin giriş yapısı uyumlu olmalıdır.",
    },

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
        "Uygun 5 A sekonder çıkışlı Clamp Tip Ayrılabilir Akım Trafoları, bazı Akım Koruma Rölesi uygulamalarında mevcut iletken bağlantısı sökülmeden montaj sağlayan bir akım ölçüm çözümü olarak değerlendirilebilir.",
  
      whenUsed:
        "Retrofit uygulamada kolay montaj istendiğinde ve seçilen Clamp Tip Akım Trafosu kullanılan Akım Koruma Rölesine uygun 5 A sekonder çıkışı sağladığında değerlendirilebilir.",
  
      whenNotRequired:
        "333 mV çıkışlı Clamp Tip Akım Trafoları 5 A akım trafosu girişi gerektiren rölelerle doğrudan kullanılamaz. CT-25 veya farklı akım giriş yapısına sahip röle modellerinde bu ilişki geçerli olmayabilir.",
  
      technicalNote:
        "Clamp Tip ailesinde sekonder çıkış yapısı modele göre değişebilir. Akım Koruma Rölesiyle birlikte kullanılacak Akım Trafosunun uygun çıkış yapısına sahip olduğu model bazında doğrulanmalıdır.",
    },

  {
      id: "akim-koruma-roleleri-ct-serisi-akim-trafolari",
      sourceProductId: "akim-koruma-roleleri",
      targetProductId: "ct-serisi-akim-trafolari",
      type: "measurement-input",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "CT-25 Akım Ölçüm Girişi",
      targetTitle: "Uyumlu Akım Koruması",
  
      reason:
        "CT-25 Akım Trafosu, bu akım ölçüm yapısını destekleyen uygun Akım Koruma Rölesi modellerinde hat akımının röle tarafından izlenebilmesi için kullanılabilir.",
  
      whenUsed:
        "AKC-03A ve AKC-03D gibi CT-25 Akım Trafosu ile çalışacak şekilde tasarlanmış uygun Akım Koruma Rölesi modellerinde değerlendirilir.",
  
      whenNotRequired:
        "AKC-01A veya AKC-01D gibi X/5A akım trafosu girişi kullanan modellerde CT-25 yerine uygun 5 A sekonderli Akım Trafosu çözümü değerlendirilir.",
  
      technicalNote:
        "CT-25 ilişkisi yalnızca CT-25 girişini destekleyen uygun Akım Koruma Rölesi modelleri için geçerlidir. Akım Trafosu ve röle model uyumluluğu doğrulanmalıdır.",
    },

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
        "CKR Koruma Rölesi transformatör, motor, jeneratör ve enerji nakil hatlarında kısa devre ve toprak arızalarına karşı korumaya yönelikken Akım Koruma Röleleri daha temel düşük veya aşırı akım sınır kontrolü gerektiren uygulamalara yönelik çözüm sunar.",
  
      whenUsed:
        "Daha temel düşük veya aşırı akım sınır kontrolünün yeterli olduğu uygulamalarda Akım Koruma Rölesi; kısa devre veya toprak arızalarına yönelik daha kapsamlı koruma gerektiğinde CKR Koruma Rölesi değerlendirilebilir.",
  
      technicalNote:
        "Akım Koruma Röleleri CKR Koruma Rölesinin doğrudan birebir alternatifi değildir. Uygun ürün gerekli koruma fonksiyonuna, arıza tipine ve koruma koordinasyonuna göre seçilmelidir.",
    },

  {
      id: "termistor-rolesi-motor-faz-koruma-roleleri",
      sourceProductId: "termistor-rolesi",
      targetProductId: "motor-faz-koruma-roleleri",
      type: "protection",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Kapsamlı Motor ve Faz Koruması",
      targetTitle: "PTC Termal Koruma",
  
      reason:
        "Termistör Rölesi PTC sensörü bulunan motorlarda motor sargı sıcaklığına dayalı termal korumaya odaklanırken bazı Motor (Faz) Koruma Rölesi modelleri PTC korumasını faz yokluğu, faz sırası, gerilim veya asimetri gibi ek motor koruma fonksiyonlarıyla birlikte sunabilir.",
  
      whenUsed:
        "Yalnızca PTC üzerinden motor sıcaklık koruması gerekiyorsa Termistör Rölesi; PTC korumasının yanında faz ve gerilim koşullarının da izlenmesi gerekiyorsa PTC girişine sahip uygun Motor (Faz) Koruma Rölesi modeli değerlendirilebilir.",
  
      technicalNote:
        "PTC koruması tüm Motor (Faz) Koruma Rölesi modellerinde bulunmaz. Bu nedenle alternatiflik yalnızca PTC girişine sahip uygun Motor (Faz) Koruma Rölesi modelleri için geçerlidir.",
    },

  {
      id: "motor-faz-koruma-roleleri-faz-sirasi-rolesi",
      sourceProductId: "motor-faz-koruma-roleleri",
      targetProductId: "faz-sirasi-rolesi",
      type: "protection",
  
      sourceStatus: "alternative",
      targetStatus: "alternative",
  
      sourceTitle: "Özel Faz Sırası Kontrolü",
      targetTitle: "Kapsamlı Motor ve Faz Koruması",
  
      reason:
        "Motor (Faz) Koruma Rölelerinin bazı modelleri faz sırası kontrolünü faz yokluğu, gerilim asimetrisi ve diğer motor koruma fonksiyonlarıyla birlikte sunarken Faz Sırası Rölesi yalnızca motoru besleyen üç fazın doğru sıralanmasının kontrolüne yönelik daha özel bir çözüm sunar.",
  
      whenUsed:
        "Yalnızca yanlış faz sırası nedeniyle motorun ters yönde çalışmasının önlenmesi gerekiyorsa Faz Sırası Rölesi; faz sırasının yanında faz yokluğu, dengesizlik veya modele bağlı diğer motor koruma fonksiyonları isteniyorsa uygun Motor (Faz) Koruma Rölesi değerlendirilebilir.",
  
      technicalNote:
        "Faz sırası koruması Motor (Faz) Koruma Rölesi ailesindeki tüm modellerde bulunmayabilir. Alternatiflik bu fonksiyonu destekleyen uygun modeller için geçerlidir.",
    },

  {
      id: "sivi-seviye-kontrol-roleleri-motor-faz-koruma-roleleri",
      sourceProductId: "sivi-seviye-kontrol-roleleri",
      targetProductId: "motor-faz-koruma-roleleri",
      type: "protection",
  
      sourceStatus: "conditional",
      targetStatus: "related",
  
      sourceTitle: "Pompa Motoru Koruması",
      targetTitle: "Seviyeye Göre Pompa Kontrolü",
  
      reason:
        "Sıvı Seviye Kontrol Rölesi tank, kuyu veya sıvı deposundaki seviyeye göre pompa kontrolünü gerçekleştirirken üç fazlı pompa motorunun kullanıldığı uygulamalarda Motor (Faz) Koruma Rölesi motorun faz ve modele bağlı diğer elektriksel sorunlara karşı korunması için birlikte değerlendirilebilir.",
  
      whenUsed:
        "Sıvı seviyesine göre çalışan sistemde üç fazlı bir pompa motoru bulunuyorsa ve motor için ayrıca faz veya elektriksel koruma isteniyorsa Motor (Faz) Koruma Rölesi değerlendirilebilir.",
  
      whenNotRequired:
        "Pompa kullanılmayan, üç fazlı motor bulunmayan veya motor korumasının başka uygun bir sistem tarafından sağlandığı uygulamalarda Motor (Faz) Koruma Rölesi gerekli değildir.",
  
      technicalNote:
        "Sıvı Seviye Kontrol Rölesi proses seviyesine göre pompa kontrolü, Motor (Faz) Koruma Rölesi ise motorun elektriksel korunması amacıyla kullanılır. İki ürün birbirinin yerine geçmez.",
    },

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
        "Güç Kaynakları elektrik ve otomasyon sistemleri için modele göre 12 VDC veya 24 VDC besleme sağlarken Kumanda Trafoları elektrik panolarındaki uygun kontrol ve ölçüm devreleri için 24 VAC besleme sağlar.",
  
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
        "A Serisi Alçak Gerilim Akım Trafoları standart AG akım ölçüm uygulamalarına yönelik geniş ürün seçenekleri sunarken Ayrılabilir Akım Trafoları mevcut tesislerde bara veya iletken bağlantısı sökülmeden montaj yapılabilmesine yönelik alternatif bir çözüm sunar.",
  
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
  
      sourceTitle: "İletkeni Sökmeden Kolay Montaj",
      targetTitle: "Standart AG Akım Ölçümü",
  
      reason:
        "A Serisi Alçak Gerilim Akım Trafoları standart AG ölçüm uygulamalarına yönelik çözüm sunarken Clamp Tip Ayrılabilir Akım Trafoları mevcut tesislerde iletken bağlantısı sökülmeden kolay montaj yapılmasına yönelik alternatif bir yaklaşım sunar.",
  
      whenUsed:
        "Standart yeni kurulumlarda uygun A Serisi Akım Trafosu; mevcut tesiste hızlı ve müdahalesi düşük bir retrofit ölçüm çözümü istendiğinde uygun Clamp Tip Ayrılabilir Akım Trafosu değerlendirilebilir.",
  
      technicalNote:
        "Clamp Tip ailesinde modele göre farklı sekonder çıkış yapıları bulunabilir. Seçilen Akım Trafosunun bağlanacağı ölçüm veya kontrol cihazının giriş yapısıyla uyumlu olduğu doğrulanmalıdır.",
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
        "A Serisi Alçak Gerilim Akım Trafoları faz akımlarının uygun ayrı akım trafosu çözümleriyle ölçülmesine olanak sağlarken 3 Fazlı Akım Trafoları üç faz akım ölçümünün tek ve kompakt bir yapı üzerinden gerçekleştirilmesine yönelik alternatif bir çözüm sunar.",
  
      whenUsed:
        "Uygulamada ayrı Akım Trafolarının kullanılması daha uygun olduğunda A Serisi; üç faz ölçümünün kompakt bir yapı üzerinden gerçekleştirilmesi ve mekanik yapının uygun olması durumunda 3 Fazlı Akım Trafosu değerlendirilebilir.",
  
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
      targetTitle: "Ayrılabilir Retrofit Akım Ölçümü",
  
      reason:
        "Ayrılabilir Akım Trafoları ve Clamp Tip Ayrılabilir Akım Trafoları mevcut tesislerde iletken bağlantısı sökülmeden montaja yönelik iki farklı retrofit akım ölçüm yaklaşımı sunar. Uygun ürün mekanik montaj yapısına ve ihtiyaç duyulan sekonder çıkışa göre seçilebilir.",
  
      whenUsed:
        "Mevcut tesislerde kolay montaj gerektiğinde bağlanacak cihazın giriş tipi, primer akım ve mekanik kurulum şartlarına göre Ayrılabilir veya Clamp Tip Ayrılabilir Akım Trafosu değerlendirilebilir.",
  
      technicalNote:
        "İki ürün ailesinin sekonder çıkış ve mekanik özellikleri modele göre farklılık gösterebilir. Bağlanacak ölçüm veya kontrol cihazıyla uyumluluk doğrulanmalıdır.",
    },

  {
    id: "ct-serisi-sebeke-analizorleri",
    sourceProductId: "ct-serisi-akim-trafolari",
    targetProductId: "sebeke-analizorleri",
    type: "measurement-input",
  
    sourceStatus: "related",
    targetStatus: "conditional",
  
    sourceTitle: "Şebeke Analizi",
    targetTitle: "Kompakt Akım Ölçümü",
  
    reason:
      "CT Serisi Akım Trafoları, bu akım algılama yapısını destekleyen uygun Şebeke Analizörü modellerinde akım ölçüm bilgisinin sağlanması için kullanılabilir.",
  
    whenUsed:
      "Şebeke Analizörü modelinin CT-25 veya ilgili CT Serisi Akım Trafosu ile çalışmayı desteklediği uygulamalarda değerlendirilir.",
  
    whenNotRequired:
      "Şebeke Analizörünün farklı bir akım trafosu veya akım sensörü yapısı kullandığı uygulamalarda CT Serisi gerekli değildir.",
  
    technicalNote:
      "CT-25 ve CT-80D tüm Şebeke Analizörü modelleriyle uyumlu kabul edilmemelidir. Kesin CT ve analizör eşleşmesi model bazında doğrulanmalıdır.",
  },

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
      "Çok Fonksiyonlu Zaman Röleleri süre ve tetikleme bazlı kontrol fonksiyonlarına odaklanırken Programlanabilir Zaman Saatleri günlük veya haftalık zaman programlarına göre otomatik kontrol sağlar.",
  
    whenUsed:
      "Kullanıcının zamanlama ihtiyacının olay veya gecikme bazlı mı yoksa günlük ve haftalık takvim bazlı mı olduğuna göre birlikte değerlendirilebilir.",
  
    technicalNote:
      "İki ürün aynı genel zamanlama ve otomasyon ekosisteminde farklı kontrol yöntemleri sunan ilgili ürünlerdir.",
  },

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
      "Çok Fonksiyonlu Zaman Röleleri süre ve tetikleme bazlı otomasyon ihtiyaçlarına çözüm sunarken Astronomik Zaman Röleleri gün doğumu ve gün batımına bağlı zaman kontrolüne odaklanır.",
  
    whenUsed:
      "Farklı zamanlama ve otomatik kontrol yöntemlerinin değerlendirildiği uygulamalarda birlikte incelenebilir.",
  
    technicalNote:
      "Bu ilişki fiziksel bir bağlantıyı değil, aynı zamanlama ve kontrol ekosistemindeki ilgili çözüm seçeneklerini ifade eder.",
  },

  {
    id: "zaman-roleleri-programlanabilir-zaman-saatleri",
    sourceProductId: "zaman-roleleri",
    targetProductId: "programlanabilir-zaman-saatleri",
    type: "control",
  
    sourceStatus: "related",
    targetStatus: "related",
  
    sourceTitle: "Takvim Bazlı Programlama",
    targetTitle: "Süre Bazlı Kontrol",
  
    reason:
      "Zaman Röleleri bir olay veya giriş sonrasında belirlenen süreye göre kontrol sağlarken Programlanabilir Zaman Saatleri ekipmanların belirlenen gün ve saatlerde çalışmasını sağlar.",
  
    whenUsed:
      "Süre bazlı veya takvim bazlı kontrol seçenekleri değerlendirilirken birlikte incelenebilir.",
  
    technicalNote:
      "İki ürün aynı zamanlama ekosisteminde farklı kontrol mantıkları sunan ilgili ürünlerdir.",
  },

  {
    id: "zaman-roleleri-astronomik-zaman-roleleri",
    sourceProductId: "zaman-roleleri",
    targetProductId: "astronomik-zaman-roleleri",
    type: "control",
  
    sourceStatus: "related",
    targetStatus: "related",
  
    sourceTitle: "Astronomik Zamanlama",
    targetTitle: "Süre Bazlı Kontrol",
  
    reason:
      "Zaman Röleleri süre bazlı kontrol ihtiyaçlarına yönelikken Astronomik Zaman Röleleri gün doğumu ve gün batımı gibi astronomik zamanlara bağlı kontrol sağlar.",
  
    whenUsed:
      "Farklı zamanlama yöntemlerinin değerlendirildiği otomasyon ve kontrol uygulamalarında birlikte incelenebilir.",
  
    technicalNote:
      "Bu ürünler birbirine teknik olarak bağımlı değildir ancak kullanıcıya alternatif zamanlama yaklaşımlarını keşfetmesi için ilgili ürün olarak önerilebilir.",
  }
];
