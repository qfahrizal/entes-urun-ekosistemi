# ENTES Ürün Ekosistemi

**Ürün Grupları Arası İlişki ve Keşif Platformu**

ENTES Elektronik Pazarlama Departmanı – Ürün Bölümü staj projesi kapsamında geliştirilen web tabanlı ürün keşif platformudur.

> **Ürünü bul → İlişkisini anla → Ekosistemi keşfet**

## Canlı Uygulama

**Production:**  
https://entes-product-ecosystem.vercel.app

## Projenin Amacı

ENTES ürün portföyünde bir ürün incelendiğinde, o ürünün diğer ENTES ürünleriyle olan teknik ve fonksiyonel bağlantılarını anlamak ek araştırma gerektirebilir.

Bu proje, ürünleri yalnızca tek tek listelemek yerine portföyü **bağlantılı bir ekosistem** olarak sunmayı amaçlar.

Kullanıcı:

- ürün grubunu veya bilinen ürün/model kodunu arayabilir,
- ürünün ekosistemdeki rolünü inceleyebilir,
- ilişkili ürünleri görebilir,
- ilişkinin seviyesini anlayabilir,
- başka bir ürüne geçerek portföyü keşfetmeye devam edebilir,
- broşür, fiyat listesi ve resmi ENTES ürün sayfalarına ulaşabilir.

> **Not:** Platform bir ürün seçici değildir. Kesin model seçimi veya mühendislik uygunluk hesabı yapmak yerine, ürün grupları arasındaki ilişkileri keşfetmeyi ve kullanıcıyı doğru resmi kaynaklara yönlendirmeyi amaçlar.

---

## Mevcut Kapsam

Platformun mevcut MVP sürümünde:

- **6 ana ürün kategorisi**
- **49 ürün grubu**
- **5 kullanıcıya gösterilen ilişki seviyesi**
- yönlü ürün ilişkileri
- ürün/model koduyla arama
- ilişki filtreleri
- resmi ENTES kaynaklarına yönlendirme
- canlı web deployment

bulunmaktadır.

### Ana Kategoriler

1. Güç Kalitesi ve Enerji
2. Ölçme
3. Kompanzasyon Cihazları
4. Enerji Yönetimi Donanım ve Yazılımları
5. Koruma & Kontrol
6. Akım Trafoları

---

## İlişki Seviyeleri

Kullanıcı arayüzünde ürünler arasındaki ilişkiler beş seviyede gösterilir:

| Seviye | Anlamı |
|---|---|
| **Gerekli** | İlgili çözüm veya fonksiyon için gerekli olan ürün |
| **Koşula Bağlı** | Belirli model, bağlantı veya uygulama koşullarında gerekli hale gelen ürün |
| **Opsiyonel** | Temel fonksiyon için zorunlu olmayan ancak ek fayda sağlayan ürün |
| **Alternatif** | Aynı veya benzer ihtiyacı farklı bir çözümle karşılayabilen ürün |
| **İlgili Ürün** | Teknik veya kullanım açısından bağlantılı fakat doğrudan zorunlu olmayan ürün |

### Yönlü İlişki Mantığı

İlişkiler yönlüdür. Bu nedenle:

```text
A → B
```

ile:

```text
B → A
```

aynı seviyede olmak zorunda değildir.

Örneğin:

```text
Şebeke Analizörleri
        ↓
A Serisi AG Akım Trafoları

Koşula Bağlı
```

iken ters yönde:

```text
A Serisi AG Akım Trafoları
        ↓
Şebeke Analizörleri

İlgili Ürün
```

olarak değerlendirilebilir.

Burada aynı iki ürün arasında teknik bir bağlantı vardır; ancak **seçili ürün açısından bağımlılık seviyesi farklıdır**.

---

## Kullanılan Teknolojiler

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Git / GitHub**
- **Vercel**

---

## Lokal Ortamda Çalıştırma

### Gereksinimler

Bilgisayarda aşağıdakilerin kurulu olması gerekir:

- Node.js
- npm
- Git

### 1. Repository'yi klonlayın

```bash
git clone <REPOSITORY_URL>
```

### 2. Proje klasörüne girin

```bash
cd entes-cozum-ekosistemi
```

### 3. Bağımlılıkları yükleyin

Repository'de `package-lock.json` bulunduğu için önerilen komut:

```bash
npm ci
```

Gerekirse:

```bash
npm install
```

### 4. Development server'ı başlatın

```bash
npm run dev
```

Tarayıcıdan:

```text
http://localhost:3000
```

adresini açın.

---

## Production Build

Değişiklikleri production'a göndermeden önce mutlaka build kontrolü yapılması önerilir:

```bash
npm run build
```

Başarılı build sonucunda temel route'lar:

```text
/
/kesfet
```

olarak üretilir.

---

## Proje Yapısı

```text
entes-cozum-ekosistemi/
│
├── public/
│   ├── backgrounds/
│   ├── brand/
│   ├── categories/
│   └── products/
│
├── src/
│   ├── app/
│   │   ├── kesfet/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ExploreHome.tsx
│   │   ├── FloatingSupport.tsx
│   │   ├── ProductBreadcrumb.tsx
│   │   ├── ProductHero.tsx
│   │   ├── RelatedProducts.tsx
│   │   └── SidebarDrawer.tsx
│   │
│   ├── data/
│   │   ├── categories.ts
│   │   ├── productSearchAliases.ts
│   │   ├── products.ts
│   │   └── relations.ts
│   │
│   └── types/
│       └── ecosystem.ts
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Temel Veri Dosyaları

### `src/data/products.ts`

Platformdaki ürün gruplarının ana veri kaynağıdır.

Bir ürün grubu için burada aşağıdaki bilgiler tanımlanabilir:

- `id`
- ürün adı
- kategori
- ekosistemdeki rol
- açıklama
- ürün görseli
- model/seri sayfaları
- broşür bağlantısı
- fiyat listesi bağlantısı
- resmi ENTES ürün sayfası

Örnek yapı:

```ts
{
  id: "ornek-urun",
  name: "Örnek Ürün",
  category: "measurement",
  menuCategory: "measurement",
  role: "Ürünün ekosistemdeki rolü",
  description: "Kısa ürün açıklaması",
  image: "/products/ornek-urun.png",
  brochureUrl: "...",
  priceListUrl: "...",
  websiteUrl: "...",
}
```

---

### `src/data/categories.ts`

Ürünlerin:

- ana kategoriler altında gruplanmasını,
- sidebar içerisinde görünmesini,
- kategori kartlarındaki sıralamasını

belirler.

Yeni bir ürün `products.ts` içerisine eklenmiş olsa bile, kullanıcı tarafından menüden erişilebilmesi için ilgili kategoriye burada da eklenmelidir.

---

### `src/data/productSearchAliases.ts`

Model veya ürün kodlarının hangi ürün grubuyla eşleşeceğini belirler.

Örnek:

```ts
"ct-serisi-akim-trafolari": [
  "CT-25",
  "CT-80D",
],
```

Böylece kullanıcı:

```text
CT-25
CT25
CT 25
```

gibi farklı yazımlarla ilgili ürün grubuna ulaşabilir.

---

### `src/data/relations.ts`

Projenin en kritik veri dosyasıdır.

Ürün grupları arasındaki teknik ve fonksiyonel ilişkiler burada tanımlanır.

Her ilişki iki yön için ayrı kullanıcı seviyesi ve başlık taşıyabilir:

```ts
{
  sourceProductId: "...",
  targetProductId: "...",

  sourceStatus: "related",
  sourceTitle: "...",

  targetStatus: "conditional",
  targetTitle: "...",

  reason: "...",
  whenUsed: "...",
  whenNotRequired: "...",
  technicalNote: "...",
}
```

Bu yapı sayesinde aynı iki ürün arasındaki bağlantı, kullanıcının hangi üründen baktığına göre farklı şekilde açıklanabilir.

---

## Yeni Bir Ürün Grubu Eklemek

Yeni ürün grubu eklerken genel olarak aşağıdaki sıra izlenmelidir:

### 1. Ürünü `products.ts` içine ekleyin

```text
src/data/products.ts
```

Benzersiz bir `id` kullanın.

### 2. Kategoriye ekleyin

```text
src/data/categories.ts
```

`productId`, `products.ts` içerisindeki ürün ID'siyle birebir aynı olmalıdır.

### 3. Gerekirse arama alias'larını ekleyin

```text
src/data/productSearchAliases.ts
```

Özellikle kullanıcıların ürün grubu adı yerine seri veya model kodu arayabileceği durumlarda kullanılmalıdır.

### 4. İlişkileri tanımlayın

```text
src/data/relations.ts
```

Yeni ürünün mevcut ürünlerle olan teknik ve fonksiyonel bağlantılarını değerlendirin.

### 5. Görseli ekleyin

Ürün görselleri:

```text
public/products/
```

klasöründe tutulur.

Örnek:

```text
public/products/yeni-urun.png
```

ve `products.ts` içerisinde:

```ts
image: "/products/yeni-urun.png",
```

şeklinde kullanılır.

### 6. Build kontrolü yapın

```bash
npm run build
```

---

## Yeni Bir İlişki Eklemek

Yeni ilişki tanımlarken şu sorular sırayla değerlendirilmelidir:

1. Bu iki ürün gerçekten teknik veya fonksiyonel olarak bağlantılı mı?
2. Seçili ürün açısından diğer ürün ne kadar gerekli?
3. İlişki ters yönden bakıldığında aynı seviyede mi?
4. İlişkinin kullanıcıya gösterilecek kısa başlığı ne olmalı?
5. Neden ilişkili?
6. Hangi koşulda kullanılır?
7. Hangi koşulda gerekli değildir?
8. Kullanıcının bilmesi gereken teknik bir not var mı?

Örnek:

```ts
{
  id: "ornek-iliski",

  sourceProductId: "urun-a",
  targetProductId: "urun-b",

  type: "measurement-input",

  sourceStatus: "related",
  sourceTitle: "Ölçüm Uygulaması",

  targetStatus: "conditional",
  targetTitle: "Akım Ölçüm Girdisi",

  reason:
    "İki ürün arasındaki ilişkinin kısa açıklaması.",

  whenUsed:
    "İlişkinin geçerli olduğu uygulama koşulları.",

  whenNotRequired:
    "Diğer ürünün gerekli olmadığı durumlar.",

  technicalNote:
    "Model ve uygulama bazlı teknik doğrulama yapılmalıdır.",
}
```

### Önemli

Bir ürünün ticari olarak daha fazla öne çıkarılmak istenmesi, teknik ilişki seviyesini değiştirmek için tek başına yeterli bir neden değildir.

Örneğin:

```text
Teknik ilişki:
Koşula Bağlı

Pazarlama önceliği:
Öne Çıkan Ürün
```

gibi ayrı katmanlar kullanılması daha doğru bir yaklaşımdır.

**Teknik doğruluk ile ticari öncelik birbirinden ayrılmalıdır.**

---

## Ürün Görselleri

Ürün görselleri:

```text
public/products/
```

altında tutulur.

Kod içerisindeki path `/public` içermemelidir.

Doğru:

```ts
image: "/products/ct-serisi.png",
```

Yanlış:

```ts
image: "/public/products/ct-serisi.png",
```

Yeni bir görsel ekledikten sonra hem local ortamda hem production build'de kontrol edilmelidir.

---

## Resmi ENTES Kaynakları

Platform, model bazlı detayları kendi içerisinde tekrar oluşturmaya çalışmak yerine mümkün olduğunda resmi ENTES kaynaklarına yönlendirir.

Ürünlerde aşağıdaki bağlantılar bulunabilir:

- resmi ürün grubu sayfası
- seri/model sayfası
- broşür
- fiyat listesi

Bu bağlantılar güncellenirken yalnızca doğrulanmış resmi ENTES kaynaklarının kullanılması önerilir.

---

## Teknik Doğruluk ve Kapsam

Platform:

- resmi teknik dokümanın yerine geçmez,
- model bazlı kesin ürün seçimi yapmaz,
- mühendislik hesabı yapmaz,
- teknik uygunluk garantisi vermez.

İlişkiler ağırlıklı olarak **ürün grubu seviyesinde** değerlendirilmiştir.

Örneğin bir ürün grubunda ilişki `Koşula Bağlı` olabilirken, belirli bir model seviyesinde aynı ilişki `Gerekli` hale gelebilir.

Model bazlı teknik karar gerektiğinde resmi ENTES:

- ürün sayfaları,
- katalogları,
- broşürleri,
- kullanım kılavuzları,
- teknik dokümanları

esas alınmalıdır.

---

## Bilinen Sınırlılıklar

Mevcut sürüm bir MVP'dir.

Başlıca sınırlılıklar:

- ilişkiler ürün grubu seviyesinde modellenmiştir,
- ilişki verileri manuel olarak yönetilmektedir,
- model bazlı tam uyumluluk matrisi bulunmamaktadır,
- ayrı bir içerik yönetim paneli bulunmamaktadır,
- kullanıcı analitiği bulunmamaktadır,
- teknik veri güncellemeleri gerektiğinde kaynak dosyaların manuel güncellenmesi gerekir.

---

## Gelecekte Geliştirilebilecek Alanlar

Proje devam ettirilirse aşağıdaki geliştirmeler değerlendirilebilir:

- ürün/model seviyesinde daha detaylı uyumluluk yapısı,
- teknik ekip için içerik yönetim paneli,
- merkezi veri tabanı,
- ürün ilişkilerinin yönetim ekranı,
- ürün kartlarında daha zengin ön izleme,
- resmi teknik tablo veya doküman ön izlemeleri,
- seçilen ürünleri bir talep/sepet yapısında toplama,
- ülke/il bazlı bayi veya satış ekibine yönlendirme,
- kullanım analitiği,
- kullanıcı geri bildirim mekanizması.

---

## Git ve Deployment Akışı

Canlı uygulama Vercel üzerinde çalışmaktadır:

https://entes-product-ecosystem.vercel.app

Repository ile Vercel bağlantısı aktif olduğu sürece `main` branch'e yapılan push sonrasında production deployment otomatik olarak oluşturulabilir.

Önerilen akış:

```text
Değişiklik
    ↓
Local test
    ↓
npm run build
    ↓
git add
    ↓
git commit
    ↓
git push origin main
    ↓
Vercel build
    ↓
Production deployment
```

Komutlar:

```bash
git status
npm run build

git add .
git commit -m "Değişiklik açıklaması"
git push origin main
```

Deploy sonrasında canlı uygulamada değişikliklerin doğru çalıştığı kontrol edilmelidir.

---

## Değişiklik Sonrası Kontrol Listesi

Önemli veri veya kod değişikliklerinden sonra en az aşağıdaki noktaları kontrol edin:

- [ ] Landing page açılıyor
- [ ] `/kesfet` açılıyor
- [ ] Sidebar kategorileri açılıyor
- [ ] Yeni veya değiştirilen ürün sidebar'da görünüyor
- [ ] Ürün araması çalışıyor
- [ ] Model/alias araması çalışıyor
- [ ] Ürün görseli yükleniyor
- [ ] Ürün serileri doğru açılıyor
- [ ] Broşür bağlantısı çalışıyor
- [ ] Fiyat listesi bağlantısı çalışıyor
- [ ] Resmi ENTES ürün sayfası açılıyor
- [ ] İlişkili ürün kartları doğru geliyor
- [ ] İlişki seviyesi doğru yönde gösteriliyor
- [ ] İlişki detay modalı çalışıyor
- [ ] Ürünler arası geçiş çalışıyor
- [ ] Browser geri/ileri davranışı çalışıyor
- [ ] `npm run build` başarılı

---

## Proje Bilgileri

**Proje:** ENTES Ürün Ekosistemi  
**Alt Başlık:** Ürün Grupları Arası İlişki ve Keşif Platformu  
**Tür:** Web tabanlı ürün keşif MVP'si  
**Departman:** ENTES Elektronik – Pazarlama Departmanı / Ürün Bölümü  
**Proje Sponsoru:** Baki Tuncer  
**Geliştiren:** Fahrizal Qodrisyam  
**Üniversite:** Yıldız Teknik Üniversitesi  
**Bölüm:** Elektronik ve Haberleşme Mühendisliği  
**Yıl:** 2026

---

## Proje Durumu

Staj projesi kapsamında geliştirilen MVP'nin production sürümü canlıya alınmıştır.

**Canlı sürüm:**  
https://entes-product-ecosystem.vercel.app

Projede yapılacak sonraki geliştirmelerde teknik doğruluğun korunması ve model bazlı kararların resmi ENTES kaynakları üzerinden doğrulanması önerilir.

---

## Kurumsal Not

Bu repository, ENTES Elektronik bünyesinde gerçekleştirilen staj projesinin kaynak kodlarını ve proje dokümantasyonunu içerir.

Repository görünürlüğü, kaynak kodun paylaşımı ve ileride yapılacak dış kullanımlar için ENTES Elektronik'in ilgili kurumsal politikaları esas alınmalıdır.
