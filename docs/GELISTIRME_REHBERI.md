# ENTES Ürün Ekosistemi – Geliştirme Rehberi

Bu doküman, **ENTES Ürün Ekosistemi** projesini ileride devralacak, bakımını yapacak veya geliştirecek kişiler için hazırlanmıştır.

Amaç; projede yeni ürün ekleme, mevcut ürün güncelleme, ilişki tanımlama, arama alias'ı ekleme, görsel değiştirme, build alma ve production'a gönderme adımlarını tek yerde toplamaktır.

> **Önemli:** Bu proje ürün grubu seviyesinde çalışan bir MVP'dir. Teknik ilişki seviyeleri değiştirilirken yalnızca görsel/ürün önceliği değil, teknik doğruluk da dikkate alınmalıdır.

---

# 1. Projenin Kısa Mimarisi

Projenin ana veri akışı aşağıdaki gibidir:

```text
products.ts
    ↓
categories.ts
    ↓
productSearchAliases.ts
    ↓
relations.ts
    ↓
SidebarDrawer / ProductHero / RelatedProducts
```

Temel mantık:

- `products.ts` → Ürünün kendisi
- `categories.ts` → Ürünün hangi ana kategoride ve hangi sırada görüneceği
- `productSearchAliases.ts` → Ürün/model kodlarının aramada hangi ürün grubuna gideceği
- `relations.ts` → Ürünler arasındaki teknik ve fonksiyonel bağlantılar
- `ecosystem.ts` → TypeScript tipleri

---

# 2. Önemli Dosyalar

## Veri Dosyaları

```text
src/data/products.ts
src/data/categories.ts
src/data/productSearchAliases.ts
src/data/relations.ts
```

## Tipler

```text
src/types/ecosystem.ts
```

## Ana Bileşenler

```text
src/components/SidebarDrawer.tsx
src/components/ProductHero.tsx
src/components/RelatedProducts.tsx
src/components/ProductBreadcrumb.tsx
src/components/ExploreHome.tsx
```

## Sayfalar

```text
src/app/page.tsx
src/app/kesfet/page.tsx
```

## Stil

```text
src/app/globals.css
```

## Statik Dosyalar

```text
public/products/
public/categories/
public/brand/
public/backgrounds/
```

---

# 3. Yeni Ürün Grubu Nasıl Eklenir?

Yeni bir ürün eklerken aşağıdaki sırayı takip edin.

---

## Adım 1 – Ürünü `products.ts` içine ekleyin

Dosya:

```text
src/data/products.ts
```

Örnek:

```ts
{
  id: "ornek-urun",
  name: "Örnek Ürün",
  category: "measurement",
  menuCategory: "measurement",

  role:
    "Ürünün ENTES ekosistemindeki temel rolü",

  description:
    "Ürünün ne yaptığı ve hangi uygulamalarda kullanıldığı ile ilgili kısa açıklama.",

  image:
    "/products/ornek-urun.png",

  brochureUrl:
    "https://www.entes.com.tr/...",

  priceListUrl:
    "https://www.entes.com.tr/...",

  websiteUrl:
    "https://www.entes.com.tr/...",
},
```

### Dikkat

`id` benzersiz olmalıdır.

Önerilen format:

```text
kucuk-harf-ve-tire
```

Örnek:

```text
ct-serisi-akim-trafolari
```

Aynı ID, diğer dosyalarda da birebir kullanılmalıdır.

---

# 4. Ürünü Kategoriye Eklemek

Dosya:

```text
src/data/categories.ts
```

Ürünü ilgili `families` listesine ekleyin.

Örnek:

```ts
{
  id: "ct-serisi-akim-trafolari",
  label: "CT Serisi Akım Trafoları",
  productId: "ct-serisi-akim-trafolari",
},
```

Buradaki:

```ts
productId
```

değeri, `products.ts` içerisindeki `id` ile birebir aynı olmalıdır.

---

# 5. Ürün Görseli Eklemek

Ürün görselleri:

```text
public/products/
```

klasöründe tutulur.

Örnek:

```text
public/products/ct-serisi.png
```

`products.ts` içerisinde:

```ts
image: "/products/ct-serisi.png",
```

şeklinde kullanılır.

## Doğru

```ts
image: "/products/urun.png",
```

## Yanlış

```ts
image: "/public/products/urun.png",
```

Next.js `public` klasörünü root olarak kabul eder.

---

# 6. Ürün Serileri Eklemek

Bir ürün grubunda birden fazla seri varsa:

```ts
seriesPages: [
  {
    name: "Seri A",
    path: "/seri-a/",
  },
  {
    name: "Seri B",
    path: "/seri-b/",
  },
],
```

kullanılabilir.

Bu yapı `ProductHero.tsx` içinde otomatik olarak:

```text
Ürün Serilerini Gör
```

butonunu aktif eder.

Seri seçildiğinde resmi ENTES sayfası yeni sekmede açılır.

---

# 7. Arama Alias'ı Eklemek

Dosya:

```text
src/data/productSearchAliases.ts
```

Amaç, kullanıcının ürün grubunun tam adını bilmeden model veya seri koduyla ürünü bulabilmesidir.

Örnek:

```ts
"ct-serisi-akim-trafolari": [
  "CT-25",
  "CT-80D",
],
```

Bu sayede aşağıdaki aramalar çalışabilir:

```text
CT-25
CT25
CT 25

CT-80D
CT80D
CT 80D
```

Alias listesine yalnızca gerçekten ilgili ürün grubuna yönlendirilmesi gereken seri/model adlarını ekleyin.

Gereksiz genel kelimeler eklemeyin.

Örneğin:

```text
CT
ürün
cihaz
```

gibi çok genel ifadeler yanlış eşleşmelere neden olabilir.

---

# 8. Yeni İlişki Nasıl Eklenir?

Dosya:

```text
src/data/relations.ts
```

İlişki yapısı yönlüdür.

Örnek:

```ts
{
  id: "urun-a-urun-b",

  sourceProductId: "urun-a",
  targetProductId: "urun-b",

  type: "measurement-input",

  sourceStatus: "related",
  sourceTitle: "İlgili Çözüm",

  targetStatus: "conditional",
  targetTitle: "Koşullu Ölçüm Girdisi",

  reason:
    "Bu iki ürünün neden ilişkili olduğunun kısa açıklaması.",

  whenUsed:
    "İlişkinin hangi uygulama veya koşullarda geçerli olduğu.",

  whenNotRequired:
    "Diğer ürünün hangi durumda gerekli olmayabileceği.",

  technicalNote:
    "Model ve uygulama bazında teknik doğrulama yapılmalıdır.",
},
```

---

# 9. İlişkiler Neden Yönlü?

Aynı iki ürün arasında ilişki olabilir; ancak bağımlılık seviyesi iki yönde aynı olmak zorunda değildir.

Örnek:

```text
Şebeke Analizörü
    ↓
A Serisi AG Akım Trafosu

Koşula Bağlı
```

Ama ters yönde:

```text
A Serisi AG Akım Trafosu
    ↓
Şebeke Analizörü

İlgili Ürün
```

olabilir.

Çünkü:

- Şebeke Analizörü bazı uygulamalarda harici CT'ye ihtiyaç duyabilir.
- Ancak Akım Trafosu yalnızca Şebeke Analizörü ile kullanılmak zorunda değildir.
- Aynı CT farklı ölçüm, koruma veya kontrol cihazlarıyla kullanılabilir.

Bu nedenle ilişki aynı olsa da bağımlılık seviyesi farklı olabilir.

---

# 10. İlişki Seviyeleri

Kullanıcıya gösterilen ilişki seviyeleri:

```ts
"required"
"conditional"
"optional"
"alternative"
"related"
```

Karşılıkları:

| Kod | Arayüzdeki Adı | Anlamı |
|---|---|---|
| `required` | Gerekli | Çözüm/fonksiyon için gerekli |
| `conditional` | Koşula Bağlı | Belirli uygulama/model koşullarında gerekli |
| `optional` | Opsiyonel | Zorunlu değil, ek fayda sağlar |
| `alternative` | Alternatif | Aynı veya benzer ihtiyaca alternatif çözüm |
| `related` | İlgili Ürün | Teknik veya kullanım açısından bağlantılı |

---

# 11. İlişki Seviyesi Seçerken Kullanılacak Kontrol

Yeni bir ilişki tanımlarken sırayla şu soruları sorun:

### 1. Ürün gerçekten zorunlu mu?

Evet ise:

```text
Gerekli
```

### 2. Yalnızca belirli model, bağlantı veya uygulamalarda mı gerekli?

Evet ise:

```text
Koşula Bağlı
```

### 3. Ana fonksiyon için şart değil ama ek değer sağlıyor mu?

Evet ise:

```text
Opsiyonel
```

### 4. Benzer ihtiyacı farklı bir ürün/teknoloji ile karşılayabilir mi?

Evet ise:

```text
Alternatif
```

### 5. Teknik veya uygulama açısından anlamlı bağlantı var ama doğrudan gereklilik yok mu?

Evet ise:

```text
İlgili Ürün
```

---

# 12. Teknik Doğruluk Prensibi

İlişkiler satış veya görünürlük amacıyla teknik gerçeklikten farklı gösterilmemelidir.

Örneğin teknik olarak:

```text
Koşula Bağlı
```

olan bir ürün, yalnızca daha fazla satılması isteniyor diye:

```text
Gerekli
```

olarak değiştirilmemelidir.

Bunun yerine ayrı bir pazarlama katmanı tasarlanabilir.

Örnek:

```text
Teknik statü:
Koşula Bağlı

Pazarlama statüsü:
Öne Çıkan Ürün
```

Bu ayrım projenin güvenilirliği için önemlidir.

---

# 13. Ürün Grubu ve Model Seviyesi Farkı

Platform ağırlıklı olarak ürün grubu seviyesinde çalışır.

Bu nedenle:

```text
Şebeke Analizörleri → Akım Trafosu
```

ilişkisi ürün grubu seviyesinde:

```text
Koşula Bağlı
```

olabilir.

Ancak belirli bir modelde CT zorunluysa, model seviyesinde aynı ilişki:

```text
Gerekli
```

olabilir.

Bu nedenle model seviyesinde kesin teknik karar gerektiğinde resmi ENTES teknik dokümanları kontrol edilmelidir.

---

# 14. Akım Trafolarında Özel Durum

Bir cihaz birden fazla akım trafosu tipiyle ilişkili olabilir.

Örneğin:

```text
A Serisi
Ayrılabilir
Clamp Tip
3 Fazlı
CT Serisi
OG
```

Bu ürünlerin tamamı aynı anda gerekli değildir.

Uygun tip:

- primer akıma,
- sekonder çıkışa,
- cihaz girişine,
- montaj şekline,
- sistemin AG/OG olmasına,
- uygulamanın teknik gereksinimine

göre değişebilir.

Bu nedenle `RelatedProducts.tsx` içinde kullanıcıya:

```text
Uygun tip seçilir
```

uyarısı gösterilir.

Yeni CT grupları eklenirse `RelatedProducts.tsx` içerisindeki CT ID listesi de kontrol edilmelidir.

---

# 15. Bir Ürün Silinecekse

Bir ürünü yalnızca `products.ts` içerisinden silmek yeterli değildir.

Aşağıdaki dosyalar kontrol edilmelidir:

```text
src/data/products.ts
src/data/categories.ts
src/data/productSearchAliases.ts
src/data/relations.ts
public/products/
```

Ayrıca ürün aşağıdaki alanlarda hard-coded kullanılıyor olabilir:

```text
src/components/ExploreHome.tsx
```

Örneğin `featuredProductIds` listesinde yer alabilir.

Silmeden önce proje genelinde ID araması yapılması önerilir.

VS Code:

```text
Ctrl + Shift + F
```

ile ürün ID'sini arayın.

---

# 16. Öne Çıkan Ürünleri Değiştirmek

Dosya:

```text
src/components/ExploreHome.tsx
```

İlgili bölüm:

```ts
const featuredProductIds = [
  "emk",
  "svg-ahf",
  "reaktif-guc-kontrol-rolesi",
  "entes-enerji-izleme-yazilimlari",
];
```

Burada ürün ID'leri değiştirilebilir.

Aynı dosyada ürünler için kısa öne çıkan bilgiler:

```ts
featuredHighlights
```

içerisinde tutulur.

Yeni bir featured product eklenirse `featuredHighlights` da güncellenmelidir.

---

# 17. Kategori Görsellerini Değiştirmek

Dosya:

```text
src/components/ExploreHome.tsx
```

İlgili yapı:

```ts
const categoryImages = {
  ...
};
```

Görseller:

```text
public/categories/
```

altında tutulur.

Kategori sayısı veya ID'leri değişirse bu map de güncellenmelidir.

---

# 18. Sidebar Aramasını Değiştirmek

Dosya:

```text
src/components/SidebarDrawer.tsx
```

Arama şu kaynakları kullanır:

```text
categories.ts
productSearchAliases.ts
```

Arama sistemi:

- Türkçe karakterleri normalize eder,
- tire/boşluk farklarını tolere eder,
- alias eşleşmesi yapar,
- seri/model prefix aramalarını destekler.

Alias mantığında değişiklik yapılacaksa:

```ts
normalizeSearchText
compactSearchText
aliasMatchesSearch
```

fonksiyonları kontrol edilmelidir.

---

# 19. Product Hero Alanını Değiştirmek

Dosya:

```text
src/components/ProductHero.tsx
```

Bu bileşen:

- ürün görselini,
- ürün adını,
- kategori bilgisini,
- rol açıklamasını,
- ürün açıklamasını,
- seri sayfalarını,
- broşür bağlantısını,
- fiyat listesi bağlantısını

gösterir.

Ürün `modelPreviews` içeriyorsa carousel devreye girer.

Ürün `seriesPages` içeriyorsa:

```text
Ürün Serilerini Gör
```

butonu çıkar.

---

# 20. İlişkili Ürün Kartlarını Değiştirmek

Dosya:

```text
src/components/RelatedProducts.tsx
```

Bu bileşen:

- seçili ürünle ilgili ilişkileri bulur,
- source/target yönünü belirler,
- doğru status bilgisini seçer,
- doğru title bilgisini seçer,
- filtreleri gösterir,
- ilişki modalını açar,
- CT özel durumunu yönetir.

İlişki mantığında değişiklik yapılacaksa en kritik component burasıdır.

---

# 21. Yönlü Status Mantığı

Seçili ürün relation'ın `sourceProductId` tarafındaysa:

```ts
sourceStatus
sourceTitle
```

kullanılır.

Seçili ürün `targetProductId` tarafındaysa:

```ts
targetStatus
targetTitle
```

kullanılır.

Özet:

```text
current product = source
→ sourceStatus
→ sourceTitle

current product = target
→ targetStatus
→ targetTitle
```

Eski `status` veya `title` fallback yapısı kullanılmamalıdır.

---

# 22. Yeni Ana Kategori Eklemek

Yeni bir ana kategori eklemek için:

## 1. `ecosystem.ts`

`MenuCategory` tipine yeni ID ekleyin.

Örnek:

```ts
export type MenuCategory =
  | "power-quality"
  | "measurement"
  | "new-category";
```

## 2. `categories.ts`

Yeni kategori tanımı ekleyin.

## 3. `ExploreHome.tsx`

`categoryImages` içine yeni kategori görseli ekleyin.

## 4. Görsel

```text
public/categories/
```

içine yeni kategori görseli ekleyin.

## 5. İlgili ürünler

`products.ts` içerisinde yeni kategoriye atanacak ürünlerin:

```ts
menuCategory
```

alanlarını güncelleyin.

---

# 23. Yeni Relation Type Eklemek

Kullanıcıya gösterilen ilişki seviyesi ile teknik relation type aynı şey değildir.

`RelationType` teknik sınıflandırma için kullanılır.

Mevcut tipler:

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

Yeni bir teknik relation type gerekirse:

```text
src/types/ecosystem.ts
```

içindeki `RelationType` güncellenmelidir.

Sonrasında:

```text
relations.ts
```

içerisinde kullanılabilir.

---

# 24. Landing Page ve Keşfet Sayfası

## Landing Page

```text
src/app/page.tsx
```

Route:

```text
/
```

## Ürün Ekosistemi

```text
src/app/kesfet/page.tsx
```

Route:

```text
/kesfet
```

ENTES logosu gerçek landing page'e döner:

```text
/
```

"Ürün Ekosistemi" başlığı ve breadcrumb ise:

```text
/kesfet
```

ana ekranına döner.

---

# 25. Browser History Mantığı

`src/app/kesfet/page.tsx` ürün geçişlerini browser history ile yönetir.

Örneğin:

```text
Şebeke Analizörü
→ A Serisi CT
→ CT Serisi
```

geçişlerinden sonra browser Back tuşu önceki ürüne dönebilir.

Bu yapı:

```ts
window.history.pushState
window.history.replaceState
popstate
```

ile yönetilir.

Bu bölümü değiştirirken browser geri/ileri testi mutlaka yapılmalıdır.

---

# 26. CSS ve Kurumsal Stil

Ana stil dosyası:

```text
src/app/globals.css
```

Ana ENTES vurgu rengi:

```css
--entes-accent: #fcd800;
```

Ana font:

```text
Montserrat
```

Kurumsal tema değiştirilecekse önce:

```css
:root
@theme inline
```

bölümleri kontrol edilmelidir.

---

# 27. Responsive Tasarım

Proje ağırlıklı olarak desktop kullanımına göre geliştirilmiştir.

Ancak temel responsive yapı Tailwind breakpoint'leri ile korunmuştur:

```text
sm:
md:
lg:
xl:
```

Responsive değişiklik yapılırken özellikle şu alanlar kontrol edilmelidir:

- header
- sidebar
- ProductHero
- RelatedProducts
- category cards
- modal yapıları

---

# 28. Development Server

Projeyi geliştirme modunda başlatmak için:

```bash
npm run dev
```

Sonra:

```text
http://localhost:3000
```

adresini açın.

Aynı ağdaki başka cihazdan test edilecekse bilgisayarın local IP adresi kullanılabilir.

Örnek:

```text
http://192.168.x.x:3000
```

---

# 29. Production Build

Her önemli değişiklikten sonra:

```bash
npm run build
```

çalıştırılmalıdır.

Başarılı bir build örneği:

```text
Compiled successfully
Finished TypeScript
Generating static pages
Finalizing page optimization
```

Build başarısızsa production'a push edilmemesi önerilir.

---

# 30. Git Akışı

Değişikliklerden sonra:

```bash
git status
```

ile kontrol edin.

Sonra:

```bash
git add .
git commit -m "Değişiklik açıklaması"
git push origin main
```

Önerilen commit mesajları:

```text
Add new current transformer product
Update relation data
Fix product search aliases
Improve related product UI
Update documentation
```

---

# 31. Vercel Deployment

Canlı adres:

```text
https://entes-product-ecosystem.vercel.app
```

GitHub `main` branch ile Vercel bağlantısı aktifse:

```text
git push origin main
```

sonrasında Vercel otomatik build ve deploy başlatır.

Akış:

```text
Local değişiklik
      ↓
npm run build
      ↓
git commit
      ↓
git push origin main
      ↓
Vercel
      ↓
Production
```

Deploy tamamlandıktan sonra production mutlaka test edilmelidir.

---

# 32. Deploy Sonrası Kontrol Listesi

## Genel

- [ ] `/` açılıyor
- [ ] `/kesfet` açılıyor
- [ ] ENTES logosu landing page'e dönüyor
- [ ] Ürün Ekosistemi başlığı keşfet ana ekranına dönüyor

## Sidebar

- [ ] 6 kategori görünüyor
- [ ] kategori accordion'ları açılıyor
- [ ] yeni ürün menüde görünüyor
- [ ] ürün araması çalışıyor
- [ ] model/alias araması çalışıyor

## Product Hero

- [ ] görsel yükleniyor
- [ ] kategori doğru
- [ ] ürün rolü doğru
- [ ] açıklama doğru
- [ ] seri linkleri doğru
- [ ] broşür linki doğru
- [ ] fiyat listesi doğru
- [ ] resmi web linki doğru

## Relations

- [ ] ilişkili ürün kartları doğru
- [ ] status doğru
- [ ] yön ters çevrilince status doğru
- [ ] relation title doğru
- [ ] modal açılıyor
- [ ] reason doğru
- [ ] whenUsed doğru
- [ ] technicalNote doğru
- [ ] CT "Uygun tip seçilir" uyarısı doğru yerde çıkıyor

## Navigation

- [ ] ürünler arası geçiş çalışıyor
- [ ] browser Back çalışıyor
- [ ] browser Forward çalışıyor

## Build

- [ ] `npm run build` başarılı

---

# 33. Teknik Kaynak Güncellemesi Yaparken

Resmi ENTES URL'leri zamanla değişebilir.

Özellikle şu alanlar düzenli kontrol edilmelidir:

```ts
brochureUrl
priceListUrl
websiteUrl
seriesPages
```

Bozuk link tespit edilirse mümkünse yeni resmi ENTES URL'siyle değiştirilmelidir.

---

# 34. Bir Ürün veya İlişki Güncellendiğinde Minimum Kontrol

Örneğin yalnızca bir relation değiştirildi.

Yine de aşağıdaki minimum test yapılmalıdır:

```text
1. İlgili source ürünü aç
2. Relation kartını kontrol et
3. Status/title kontrol et
4. Target ürüne geç
5. Ters yöndeki status/title kontrol et
6. Modal metinlerini kontrol et
7. npm run build
```

---

# 35. Veri Tutarlılığı Kontrolü

Yeni ürün veya relation eklendikten sonra şu mantıksal kontroller yapılmalıdır:

### Her kategori productId'si `products.ts` içinde var mı?

```text
categories.productId
→ products.id
```

### Her relation endpoint'i `products.ts` içinde var mı?

```text
sourceProductId
→ products.id

targetProductId
→ products.id
```

### Her relation ID benzersiz mi?

```text
relation.id
```

duplicate olmamalıdır.

### Her product ID benzersiz mi?

```text
product.id
```

duplicate olmamalıdır.

---

# 36. Sık Karşılaşılan Hatalar

## Ürün sidebar'da görünmüyor

Kontrol:

```text
products.ts
categories.ts
```

## Ürün aramada çıkmıyor

Kontrol:

```text
categories.ts
productSearchAliases.ts
SidebarDrawer.tsx
```

## Ürün resmi görünmüyor

Kontrol:

```text
public/products/
products.ts → image
```

## İlişki kartı çıkmıyor

Kontrol:

```text
relations.ts
sourceProductId
targetProductId
products.ts
```

## Yanlış status görünüyor

Kontrol:

```text
sourceStatus
targetStatus
```

ve seçili ürünün relation'ın hangi tarafında olduğu.

## Seri linki yanlış açılıyor

Kontrol:

```text
websiteUrl
seriesPages.path
```

## Build'de font hatası çıkıyor

İnternet bağlantısını kontrol edin.

`next/font/google` build sırasında Google Fonts'a erişmek isteyebilir.

---

# 37. Proje İçin Önerilen Geliştirme Alanları

İleride aşağıdaki geliştirmeler değerlendirilebilir:

### Teknik

- merkezi database
- admin panel
- relation yönetim ekranı
- model bazlı uyumluluk
- automated data validation
- kırık link kontrolü
- test altyapısı

### Kullanıcı Deneyimi

- daha gelişmiş arama
- ürün karşılaştırma
- breadcrumb geliştirme
- daha zengin ürün preview
- relation graph görünümü

### Pazarlama / Satış

- öne çıkan ürün katmanı
- kampanya etiketi
- talep/sepet
- bölgesel bayi yönlendirme
- lead form
- analytics
- ürün keşif funnel ölçümü

Teknik relation statüleri ile pazarlama öncelikleri ayrı tutulmalıdır.

---

# 38. Projenin Kapsam Sınırı

Bu proje:

```text
ürün seçici
mühendislik hesaplayıcı
model bazlı garanti sistemi
otomatik teklif sistemi
```

değildir.

Temel amacı:

```text
Ürünü bul
      ↓
İlişkisini anla
      ↓
Ekosistemi keşfet
```

akışını desteklemektir.

---

# 39. Devralan Kişi İçin Önerilen İlk Adımlar

Projeyi ilk kez açan kişi için önerilen sıra:

```text
1. README.md dosyasını oku
2. npm ci
3. npm run dev
4. /kesfet ekranını incele
5. products.ts dosyasını incele
6. categories.ts dosyasını incele
7. relations.ts dosyasını incele
8. RelatedProducts.tsx yönlü relation mantığını incele
9. npm run build
10. Küçük bir test değişikliği yap
```

---

# 40. Son Not

Bu projede en kritik iki konu:

```text
1. Veri tutarlılığı
2. Teknik doğruluk
```

UI değiştirilebilir, yeni özellikler eklenebilir ve pazarlama tarafında yeni katmanlar oluşturulabilir.

Ancak teknik ilişki seviyeleri değiştirilirken kullanıcıya yanlış bir gereklilik algısı verilmemelidir.

Model seviyesinde emin olunmayan durumlarda resmi ENTES teknik kaynakları referans alınmalıdır.

---

**Proje:** ENTES Ürün Ekosistemi  
**Geliştiren:** Fahrizal Qodrisyam  
**Departman:** ENTES Elektronik – Pazarlama / Ürün Bölümü  
**Yıl:** 2026
