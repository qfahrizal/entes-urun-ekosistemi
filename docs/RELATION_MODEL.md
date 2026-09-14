# ENTES Ürün Ekosistemi – İlişki Modeli

Bu doküman, **ENTES Ürün Ekosistemi** projesindeki ürün ilişkilerinin nasıl tanımlandığını, hangi kurallarla sınıflandırıldığını ve yönlü ilişkinin neden kullanıldığını açıklar.

Bu dosyanın amacı, ileride `src/data/relations.ts` üzerinde değişiklik yapacak kişilerin ilişki seviyelerini teknik olarak tutarlı biçimde yönetmesini sağlamaktır.

---

# 1. İlişki Modelinin Amacı

Platform yalnızca:

```text
A ürünü B ürünüyle bağlantılıdır.
```

demekle yetinmez.

Kullanıcıya şu soruların cevabını da vermeye çalışır:

- Bu ürün gerçekten gerekli mi?
- Yalnızca belirli koşullarda mı gerekir?
- Opsiyonel bir geliştirme mi?
- Alternatif bir çözüm mü?
- Yoksa yalnızca teknik olarak ilişkili mi?
- Aynı iki ürün ters yönden bakıldığında aynı anlamı mı taşır?

Bu nedenle ilişkiler:

1. **yönlüdür**
2. **beş kullanıcı seviyesiyle gösterilir**
3. **teknik ilişki tipiyle ayrıca sınıflandırılır**
4. **neden, kullanım koşulu ve teknik not içerir**

---

# 2. Kullanıcıya Gösterilen 5 İlişki Seviyesi

Platformda kullanıcıya gösterilen seviyeler:

```ts
"required"
"conditional"
"optional"
"alternative"
"related"
```

Arayüzdeki karşılıkları:

| Kod | Arayüz | Açıklama |
|---|---|---|
| `required` | Gerekli | Seçili ürünün ilgili çözüm veya fonksiyonunda diğer ürün gerekli kabul edilir. |
| `conditional` | Koşula Bağlı | Diğer ürün yalnızca belirli model, bağlantı, sistem mimarisi veya uygulama şartlarında gerekli hale gelir. |
| `optional` | Opsiyonel | Temel fonksiyon için zorunlu değildir fakat sisteme ek fayda, izleme veya özellik kazandırabilir. |
| `alternative` | Alternatif | Aynı veya benzer ihtiyacı farklı bir yöntem veya ürünle karşılayabilir. |
| `related` | İlgili Ürün | Teknik veya kullanım açısından anlamlı bağlantı vardır fakat doğrudan gereklilik ilişkisi yoktur. |

---

# 3. Gerekli

`required`, en güçlü ilişki seviyesidir.

Bir ürün ancak gerçekten çözümün çalışması veya tanımlanan fonksiyonun gerçekleşmesi için gerekli olduğunda kullanılmalıdır.

Örnek mantık:

```text
Ürün A
→ Ürün B olmadan tanımlanan çözüm tamamlanamıyor
→ Gerekli
```

Bu statü gereksiz yere kullanılmamalıdır.

Model veya uygulama koşuluna bağlıysa `required` yerine çoğu durumda `conditional` daha doğru olur.

---

# 4. Koşula Bağlı

`conditional`, ürünün bazı durumlarda gerekli hale geldiği ilişki seviyesidir.

Koşullar şunlardan biri olabilir:

- belirli model
- akım seviyesi
- bağlantı tipi
- haberleşme mimarisi
- AG / OG uygulaması
- montaj şekli
- sistem topolojisi
- kullanıcı ihtiyacı

Örnek:

```text
Şebeke Analizörleri
→ Akım Trafosu
```

ürün grubu seviyesinde her model ve her uygulamada aynı zorunluluğu taşımayabilir.

Bu nedenle:

```text
Koşula Bağlı
```

olarak tanımlanabilir.

---

# 5. Opsiyonel

`optional`, seçili ürünün temel fonksiyonu için zorunlu olmayan ancak ek fayda sağlayan ürünleri ifade eder.

Örnek faydalar:

- uzaktan izleme
- veri toplama
- merkezi raporlama
- ek haberleşme
- enerji yönetimi
- kullanıcı deneyimini geliştiren ek işlevler

Örnek:

```text
Ölçüm cihazı
→ Enerji İzleme Yazılımı
```

ölçümün gerçekleşmesi için yazılım zorunlu olmayabilir.

Ancak uzaktan izleme veya raporlama istenirse değer sağlar.

Bu durumda:

```text
Opsiyonel
```

uygun olabilir.

---

# 6. Alternatif

`alternative`, aynı veya benzer ihtiyacı farklı ürün veya teknolojiyle karşılayan ürünleri ifade eder.

Alternatif demek:

```text
ürünler birebir aynıdır
```

anlamına gelmez.

Daha doğru ifade:

```text
aynı kullanıcı ihtiyacının farklı çözüm yollarıdır
```

Alternatif ilişkiler tanımlanırken:

- teknik kapasite,
- kullanım alanı,
- hız,
- bağlantı şekli,
- maliyet,
- performans,
- sistem mimarisi

gibi farklar dikkate alınmalıdır.

---

# 7. İlgili Ürün

`related`, teknik veya kullanım açısından bağlantılı fakat doğrudan gereklilik ilişkisi olmayan ürünler için kullanılır.

Örnek:

```text
Akım Trafosu
→ Şebeke Analizörü
```

Akım trafosu yalnızca Şebeke Analizörü ile kullanılmak zorunda değildir.

Aynı CT:

- ampermetre,
- enerji ölçer,
- koruma rölesi,
- reaktif güç kontrol rölesi,
- başka uyumlu cihazlar

ile de kullanılabilir.

Bu nedenle CT açısından Şebeke Analizörü:

```text
İlgili Ürün
```

olarak tanımlanabilir.

---

# 8. Yönlü İlişki Nedir?

Projenin temel prensiplerinden biri:

> **İlişki aynı olabilir, fakat bağımlılık iki yönde aynı olmak zorunda değildir.**

Bir relation kaydı iki ürün arasındaki bağlantıyı tek kez tanımlar.

Ancak her iki yön için ayrı:

```ts
sourceStatus
sourceTitle

targetStatus
targetTitle
```

değerleri tutulur.

Örnek:

```ts
{
  sourceProductId: "a-serisi-ag-akim-trafolari",
  targetProductId: "sebeke-analizorleri",

  sourceStatus: "related",
  sourceTitle: "Şebeke Analizi",

  targetStatus: "conditional",
  targetTitle: "Standart AG Akım Ölçümü",
}
```

Bu kaydın anlamı:

## A Serisi CT seçiliyken

```text
A Serisi CT
→ Şebeke Analizörleri

İlgili Ürün
```

## Şebeke Analizörü seçiliyken

```text
Şebeke Analizörleri
→ A Serisi CT

Koşula Bağlı
```

Bu bir çelişki değildir.

Seçili ürün açısından diğer ürünün rolü değişmektedir.

---

# 9. CT → Şebeke Analizörü Neden “İlgili Ürün”?

Akım trafosunun temel görevi:

```text
primer akımı
→ ölçüm / koruma cihazının kullanabileceği sekonder seviyeye dönüştürmek
```

Ancak CT'nin sekonder tarafında özellikle Şebeke Analizörü olmak zorunda değildir.

Başka uygun cihazlar da kullanılabilir.

Bu nedenle:

```text
CT
→ Şebeke Analizörü
```

ilişkisi doğrudan zorunluluk değildir.

Bu açıdan `related` mantıklıdır.

---

# 10. Şebeke Analizörü → CT Neden “Koşula Bağlı”?

Şebeke Analizörü ürün grubu içindeki tüm modeller ve tüm uygulamalar aynı bağlantı mimarisine sahip değildir.

Bazı durumlarda harici CT gerekirken bazı durumlarda:

- doğrudan ölçüm,
- farklı akım giriş yapısı,
- farklı model seçimi

mümkün olabilir.

Platform ürün grubu seviyesinde çalıştığı için:

```text
Şebeke Analizörü
→ CT
```

ilişkisinin genel statüsü:

```text
Koşula Bağlı
```

olarak tutulabilir.

Model seviyesinde ise aynı ilişki:

```text
Gerekli
```

hale gelebilir.

---

# 11. Ürün Grubu Seviyesi ve Model Seviyesi

Bu proje ağırlıklı olarak **ürün grubu seviyesinde** çalışır.

Bu çok önemlidir.

Örneğin:

```text
Şebeke Analizörleri
```

tek bir model değildir.

Aynı grup içinde:

- farklı akım girişleri,
- farklı haberleşme özellikleri,
- farklı bağlantı yapıları

olabilir.

Bu nedenle ürün grubu seviyesinde:

```text
Koşula Bağlı
```

olan bir ilişki, belirli bir model seviyesinde:

```text
Gerekli
```

olabilir.

Platform bu farkı tamamen çözmeye çalışmaz.

Model bazlı kesin teknik karar gerektiğinde resmi ENTES kaynakları esas alınmalıdır.

---

# 12. Relation Type ve Relation Status Aynı Şey Değildir

Projede iki ayrı kavram vardır:

## Relation Status

Kullanıcıya gösterilen önem / gereklilik seviyesi:

```ts
"required"
"conditional"
"optional"
"alternative"
"related"
```

## Relation Type

İlişkinin teknik kategorisi:

```ts
"measurement-input"
"measurement-analysis"
"data-transfer"
"control"
"protection"
"correction"
"communication"
"alternative"
```

Örneğin:

```text
type = measurement-input
status = conditional
```

olabilir.

Bu iki alan birbirinin yerine kullanılmamalıdır.

---

# 13. Relation Veri Yapısı

Temel relation yapısı:

```ts
{
  id: "relation-id",

  sourceProductId: "urun-a",
  targetProductId: "urun-b",

  type: "measurement-input",

  sourceStatus: "related",
  sourceTitle: "İlgili Uygulama",

  targetStatus: "conditional",
  targetTitle: "Koşullu Ölçüm Girdisi",

  reason:
    "İlişkinin neden var olduğu.",

  whenUsed:
    "Hangi durumda kullanıldığı.",

  whenNotRequired:
    "Hangi durumda gerekli olmadığı.",

  technicalNote:
    "Teknik sınır veya model doğrulama notu.",
}
```

---

# 14. Alanların Anlamı

## `id`

Benzersiz relation ID'sidir.

Duplicate olmamalıdır.

## `sourceProductId`

İlişkinin kaynak ürünü.

`products.ts` içerisinde mevcut olmalıdır.

## `targetProductId`

İlişkinin hedef ürünü.

`products.ts` içerisinde mevcut olmalıdır.

## `type`

Teknik ilişki kategorisi.

## `sourceStatus`

Seçili ürün source tarafındayken kullanıcıya gösterilen ilişki seviyesi.

## `sourceTitle`

Seçili ürün source tarafındayken diğer ürünün ilişkideki kısa açıklaması.

## `targetStatus`

Seçili ürün target tarafındayken kullanıcıya gösterilen ilişki seviyesi.

## `targetTitle`

Seçili ürün target tarafındayken diğer ürünün ilişkideki kısa açıklaması.

## `reason`

İki ürünün neden ilişkili olduğunu açıklar.

## `whenUsed`

İlişkinin hangi senaryoda anlamlı olduğunu açıklar.

## `whenNotRequired`

İlişkili ürünün hangi durumda gerekli olmayabileceğini açıklar.

Opsiyoneldir.

## `technicalNote`

Kullanıcının dikkat etmesi gereken teknik sınırı veya doğrulama ihtiyacını açıklar.

---

# 15. Yeni İlişki Tanımlama Karar Ağacı

Yeni relation oluştururken şu sırayı izleyin.

## Adım 1

İki ürün arasında gerçek teknik veya fonksiyonel bağlantı var mı?

```text
Hayır → Relation oluşturma
Evet → Devam
```

## Adım 2

Source ürün açısından target gerçekten gerekli mi?

```text
Evet → required
Hayır → Devam
```

## Adım 3

Belirli koşullarda gerekli mi?

```text
Evet → conditional
Hayır → Devam
```

## Adım 4

Temel fonksiyon için şart değil ama ek değer sağlıyor mu?

```text
Evet → optional
Hayır → Devam
```

## Adım 5

Aynı ihtiyacın alternatif çözümü mü?

```text
Evet → alternative
Hayır → related
```

Sonra aynı karar süreci ters yön için tekrar yapılmalıdır.

---

# 16. Status Belirlerken Kaçınılması Gereken Hatalar

## Hata 1 – Her teknik bağlantıyı “Gerekli” yapmak

Bir ürün diğer ürünle sık kullanılıyor diye zorunlu değildir.

## Hata 2 – Source ve target tarafına aynı status'ü otomatik vermek

İlişki yönlüdür.

Her iki yön ayrı değerlendirilmelidir.

## Hata 3 – Pazarlama önceliğini teknik statüye çevirmek

Bir ürün daha çok satılmak isteniyor diye:

```text
related → required
```

yapılmamalıdır.

## Hata 4 – Ürün grubu ile model seviyesini karıştırmak

Bir modelde zorunlu olan ilişki tüm ürün grubunda zorunlu olmayabilir.

## Hata 5 – Alternatif ürünleri birebir eşdeğer gibi göstermek

Alternatif ürünler aynı ihtiyacı farklı şekilde karşılayabilir.

Teknik farklar korunmalıdır.

---

# 17. Teknik Doğruluk ve Pazarlama Önceliği

Teknik ilişki seviyesi güvenilir kalmalıdır.

Pazarlama tarafında bir ürün daha görünür hale getirilecekse ayrı bir katman tercih edilmelidir.

Örnek:

```text
Teknik statü:
Koşula Bağlı

Pazarlama statüsü:
Öne Çıkan Ürün
```

veya:

```text
Yeni Ürün
Stratejik Ürün
Kampanya
Öne Çıkan Çözüm
```

gibi ayrı etiketler tasarlanabilir.

Bu sayede:

- teknik doğruluk korunur,
- pazarlama esnekliği sağlanır.

---

# 18. CT İlişkilerinde Özel Kural

Akım trafosu ilişkilerinde birden fazla CT tipi aynı cihazla ilişkili olabilir.

Bu:

```text
hepsi birlikte kullanılmalıdır
```

anlamına gelmez.

Uygun tip aşağıdaki kriterlere göre seçilir:

- primer akım
- sekonder çıkış
- cihazın giriş yapısı
- bara / kablo yapısı
- montaj imkânı
- AG / OG
- uygulama türü
- model uyumluluğu

Bu nedenle arayüzde:

```text
Uygun tip seçilir
```

uyarısı kullanılır.

---

# 19. CT Serisi İçin Dikkat

CT Serisi ürün grubu:

```text
CT-25
CT-80D
```

modellerini içerir.

Bu modeller tüm ENTES cihazlarıyla evrensel uyumlu kabul edilmemelidir.

İlişki metinlerinde:

```text
uyumlu model
uygun giriş yapısı
model bazlı doğrulama
```

ifadeleri kullanılmalıdır.

---

# 20. Clamp Tip CT İçin Dikkat

Clamp tip ürünlerde sekonder yapı modelden modele değişebilir.

Örneğin bazı modellerde:

```text
333 mV
```

bazılarında:

```text
5 A
```

gibi farklı çıkış yapıları olabilir.

Bu nedenle:

```text
Clamp CT tüm cihazlarla uyumludur.
```

gibi genel ifade kullanılmamalıdır.

---

# 21. SVG ve AHF İlişkilerinde Dikkat

Platformda SVG ve AHF aynı ürün grubu altında gösterilebilir.

Ancak teknik olarak:

```text
SVG
→ dinamik reaktif güç kompanzasyonu

AHF
→ aktif harmonik filtreleme
```

amaçları farklıdır.

Bu nedenle grup içindeki ilişkiler tanımlanırken:

```text
SVG/AHF = doğrudan alternatif
```

varsayımı otomatik yapılmamalıdır.

Bazı ilişkilerde yalnızca:

```text
İlgili Ürün
```

daha doğru olabilir.

---

# 22. SVC ile SVG/AHF Aynı Şey Değildir

SVC:

- uyumlu reaktif güç kontrol rölesi,
- endüktif yük sürücüsü,
- uygun şönt reaktör

ile çalışan farklı bir çözüm mimarisidir.

SVG/AHF ile:

```text
aynı ürün
```

veya her durumda:

```text
doğrudan alternatif
```

olarak değerlendirilmemelidir.

---

# 23. Harmonik Filtre Reaktörü ve AHF

Harmonik Filtre Reaktörü:

```text
pasif detuned kompanzasyon elemanı
```

olarak çalışır.

AHF ise:

```text
aktif harmonik filtre
```

çözümüdür.

İki ürünün harmoniklerle ilişkisi vardır ancak çalışma prensibi farklıdır.

Relation metinlerinde bu fark korunmalıdır.

---

# 24. Gerilim Koruma ve Surge Koruma

Bu iki ürün birbirinin yerine geçmez.

## Gerilim Koruma Rölesi

Genellikle:

- düşük gerilim
- yüksek gerilim
- faz problemleri
- frekans / dengesizlik gibi sürekli veya belirli süreli şebeke koşulları

üzerinde çalışır.

## Surge Koruma

Yüksek enerjili geçici darbe gerilimlerine karşı koruma sağlar.

Bu nedenle:

```text
Gerilim Koruma = Surge
```

şeklinde değerlendirilmemelidir.

---

# 25. Reaktif Güç Kontrol Rölesi ve SVC

SVC çözümünde uygun SVC destekli reaktif güç kontrol rölesi çözümün temel parçalarından biridir.

Bu nedenle SVC tarafından bakıldığında ilişki bazı durumlarda:

```text
Gerekli
```

olarak tanımlanabilir.

Ancak klasik reaktif güç kontrol rölesi tarafında SVC:

```text
her uygulamada gerekli
```

değildir.

Yönlü relation mantığı burada da önemlidir.

---

# 26. AYR ve NH Sigorta

AYR yük ayırıcı ile NH sigorta ilişkisi model uyumluluğuna göre değerlendirilmelidir.

Örnek:

```text
AYR.160 → NH00
AYR.250 → NH1
```

gibi model uyumlulukları korunmalıdır.

Genel relation seviyesi ürün grubu düzeyinde gösterilse bile teknik detaylarda model eşleşmesi göz ardı edilmemelidir.

---

# 27. Gateway ve Yazılım İlişkileri

Gateway her cihaz için zorunlu değildir.

Bazı cihazlar:

- doğrudan haberleşebilir,
- farklı network mimarisi kullanabilir,
- gateway gerektirmeyebilir.

Bu nedenle gateway ilişkileri çoğunlukla:

```text
Koşula Bağlı
```

veya:

```text
Opsiyonel
```

olarak değerlendirilmelidir.

Enerji izleme yazılımı da ölçümün kendisi için genellikle zorunlu değildir.

Bu nedenle:

```text
Opsiyonel
```

veya:

```text
İlgili Ürün
```

olabilir.

---

# 28. Teknik Metin Yazım Prensibi

Relation açıklamaları:

- kesin olmayan durumda kesinlik iddia etmemeli,
- model farklarını yok saymamalı,
- kısa ama açıklayıcı olmalı,
- kullanıcıya yanlış gereklilik algısı vermemeli.

Önerilen ifadeler:

```text
uygun modelde
uygulamaya göre
model ve bağlantı yapısına bağlı olarak
uyumlu cihazlarda
teknik doğrulama ile
```

Kaçınılması gereken ifadeler:

```text
her zaman gerekir
tüm modellerde kullanılır
bütün cihazlarla uyumludur
zorunludur
```

Teknik olarak doğrulanmadıkça kullanılmamalıdır.

---

# 29. Relation Güncellendiğinde Test

Bir relation değiştirildiğinde yalnızca tek yönden kontrol etmek yeterli değildir.

Minimum test:

```text
1. Source ürünü aç
2. Target kartını bul
3. sourceStatus doğru mu?
4. sourceTitle doğru mu?
5. Modal metnini kontrol et
6. Target ürüne geç
7. Source kartını bul
8. targetStatus doğru mu?
9. targetTitle doğru mu?
10. Modal metnini kontrol et
11. npm run build
```

---

# 30. Relation Veri Tutarlılığı

Her relation için:

```text
sourceProductId
targetProductId
```

`products.ts` içinde mevcut olmalıdır.

Relation ID'leri duplicate olmamalıdır.

Her relation'da şu alanlar bulunmalıdır:

```text
id
sourceProductId
targetProductId
type
sourceStatus
sourceTitle
targetStatus
targetTitle
reason
whenUsed
technicalNote
```

`whenNotRequired` ihtiyaca göre kullanılabilir.

---

# 31. Kaynak Doğrulama

Relation oluştururken öncelik:

1. resmi ENTES ürün sayfası
2. resmi katalog
3. resmi broşür
4. kullanım kılavuzu
5. teknik ekip / ürün sorumlusu geri bildirimi

olmalıdır.

Platform resmi teknik dokümanın yerine geçmez.

Model bazlı kesin karar gerektiğinde resmi kaynak esas alınmalıdır.

---

# 32. İlişki Modelinin Temel İlkeleri

Bu projenin relation sistemi aşağıdaki dört ilkeye dayanır:

### 1. Teknik doğruluk

Relation kullanıcının yanlış teknik sonuca ulaşmasına neden olmamalıdır.

### 2. Yönlülük

A → B ile B → A aynı olmak zorunda değildir.

### 3. Bağlam

Statü uygulama koşuluna göre değerlendirilmelidir.

### 4. Ölçek

Ürün grubu seviyesi ile model seviyesi birbirinden ayrılmalıdır.

---

# 33. Kısa Referans

```text
Gerekli
→ gerçekten gerekli

Koşula Bağlı
→ belirli koşulda gerekli

Opsiyonel
→ zorunlu değil, ek fayda

Alternatif
→ benzer ihtiyaca farklı çözüm

İlgili Ürün
→ anlamlı teknik bağlantı, doğrudan gereklilik yok
```

---

# 34. Son Not

Yeni relation eklerken en önemli soru:

> **“Bu ürün diğer üründen bakıldığında gerçekten ne kadar gerekli?”**

İkinci soru:

> **“Ters yönden baktığımda aynı cevap hâlâ doğru mu?”**

Bu iki soruya ayrı ayrı cevap verilmeden relation statüsü belirlenmemelidir.

---

**Proje:** ENTES Ürün Ekosistemi  
**Doküman:** İlişki Modeli  
**Yıl:** 2026
