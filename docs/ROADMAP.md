# ENTES Ürün Ekosistemi – Roadmap

Bu doküman, **ENTES Ürün Ekosistemi** projesinin mevcut MVP sınırlarını, ertelenmiş geliştirme fikirlerini ve ileride değerlendirilebilecek teknik / ürün geliştirme alanlarını içerir.

Bu liste bir zorunlu geliştirme planı değildir.

Amaç, proje devredildikten sonra daha önce konuşulmuş veya potansiyel olarak değerli görülen fikirlerin kaybolmamasıdır.

---

# 1. Mevcut Durum

Mevcut production sürümü:

```text
https://entes-product-ecosystem.vercel.app
```

Mevcut MVP:

- 6 ana kategori
- 49 ürün grubu
- yönlü ürün ilişkileri
- 5 kullanıcı ilişki seviyesi
- ürün/model koduyla arama
- ilişki filtreleri
- relation detay modalı
- resmi ENTES kaynaklarına yönlendirme
- GitHub + Vercel deployment

Platform ağırlıklı olarak desktop kullanımına göre geliştirilmiştir.

---

# 2. MVP'nin Mevcut Sınırları

## 2.1 Ürün grubu seviyesinde çalışma

Platform ilişkileri çoğunlukla ürün grubu seviyesinde tanımlar.

Model bazlı tam uyumluluk matrisi bulunmamaktadır.

---

## 2.2 Manuel veri yönetimi

Ürün ve relation verileri:

```text
products.ts
categories.ts
productSearchAliases.ts
relations.ts
```

dosyaları üzerinden manuel yönetilir.

---

## 2.3 Admin panel bulunmaması

Teknik ekip veya ürün sorumlusu relation güncellemek istediğinde kaynak kodu değiştirmek gerekir.

---

## 2.4 Merkezi database bulunmaması

Veriler TypeScript dosyalarında tutulur.

Bu MVP için yeterlidir ancak uzun vadede ölçeklenebilirliği sınırlar.

---

## 2.5 Otomatik doğrulama sınırlı

Build sırasında TypeScript kontrolü yapılır ancak:

- eksik product relation endpoint,
- kırık resmi URL,
- duplicate semantic relation,
- model uyumsuzluğu

gibi tüm veri problemleri otomatik kontrol edilmez.

---

## 2.6 Kullanıcı analitiği bulunmaması

Şu anda:

- hangi ürünler daha çok açılıyor,
- kullanıcı hangi relation'a tıklıyor,
- hangi ürünler birlikte keşfediliyor,
- hangi resmi linklere gidiliyor

ölçülmemektedir.

---

# 3. Öncelik Seviyeleri

Roadmap üç seviyede değerlendirilebilir:

```text
P1 → Yüksek öncelik
P2 → Orta öncelik
P3 → İleri aşama / opsiyonel
```

---

# 4. P1 – Veri Yönetimi ve Teknik Sürdürülebilirlik

## 4.1 Admin / İçerik Yönetim Paneli

Amaç:

Kaynak kod değiştirmeden:

- ürün ekleme,
- ürün düzenleme,
- relation ekleme,
- relation status değiştirme,
- link güncelleme,
- görsel değiştirme

işlemlerinin yapılabilmesi.

Potansiyel kullanıcı:

```text
Ürün yönetimi
Pazarlama
Teknik ekip
```

---

## 4.2 Merkezi Database

TypeScript veri dosyaları yerine:

```text
Products
Categories
Relations
Aliases
Assets
```

tabloları / koleksiyonları kullanılabilir.

Olası çözümler:

- PostgreSQL
- Supabase
- Firebase
- kurum içi mevcut veri altyapısı

Kurumsal tercih belirlenmeden teknoloji seçimi yapılmamalıdır.

---

## 4.3 Veri Doğrulama Script'i

Build öncesinde otomatik kontrol:

```text
Her category productId var mı?
Her relation endpoint var mı?
Duplicate product ID var mı?
Duplicate relation ID var mı?
Eksik relation field var mı?
Bozuk asset path var mı?
```

gibi kontroller yapılabilir.

Örnek komut:

```text
npm run validate-data
```

---

## 4.4 Kırık Link Kontrolü

Periyodik olarak:

```text
brochureUrl
priceListUrl
websiteUrl
seriesPages
```

kontrol edilebilir.

Bozuk resmi ENTES URL'leri raporlanabilir.

---

# 5. P1 – Model Bazlı Uyumluluk

Mevcut platform ürün grubu seviyesinde çalışır.

Bir sonraki önemli teknik genişleme:

```text
Ürün Grubu
    ↓
Seri
    ↓
Model
```

seviyesine inmektir.

Örneğin:

```text
Şebeke Analizörü
→ CT
```

ilişkisi ürün grubu seviyesinde:

```text
Koşula Bağlı
```

iken belirli modelde:

```text
Gerekli
```

olabilir.

---

## 5.1 Compatibility Matrix

Model seviyesinde:

```text
Model A
→ CT tipi
→ Gateway
→ Yazılım
→ Haberleşme
```

uyumluluk matrisi oluşturulabilir.

Bu veri teknik ekip tarafından doğrulanmalıdır.

---

# 6. P1 – Teknik Doğruluk Workflow'u

Yeni relation ekleme süreci ileride şu şekilde olabilir:

```text
Taslak Relation
      ↓
Ürün Sorumlusu Kontrolü
      ↓
Teknik Onay
      ↓
Published
```

Relation kayıtlarına durum eklenebilir:

```text
Draft
Review
Approved
Published
```

Bu özellikle platform şirket içinde geniş kullanıma açılırsa önemlidir.

---

# 7. P2 – Ürün Kartlarında Zengin Önizleme

Daha önce önerilen geliştirmelerden biri:

> Sidebar içerisinde ürünün yalnızca adı yerine daha zengin bir önizleme gösterilmesi.

Örnek:

```text
Ürün adı
Mini ürün görseli
1 satır rol açıklaması
Kategori
```

Bu özellikle geniş ürün portföyünde navigasyonu kolaylaştırabilir.

---

# 8. P2 – Resmi Teknik Tablo Önizlemeleri

Potansiyel geliştirme:

Resmi ENTES teknik tablolarının belirli bölümlerinin platform içerisinde önizlenmesi.

Örnek:

```text
model karşılaştırma tablosu
teknik özellik tablosu
uyumluluk tablosu
```

Ancak temel prensip korunmalıdır:

> Platform resmi ENTES web sitesinin yerine geçmemelidir.

Bu nedenle mümkünse resmi kaynağa bağlantı her zaman korunmalıdır.

---

# 9. P2 – Ürün Karşılaştırma

Kullanıcı iki veya daha fazla ürün grubunu seçip:

```text
rol
uygulama alanı
relation yapısı
resmi kaynak
```

açısından karşılaştırabilir.

Bu özellik özellikle:

```text
Alternatif
```

statüsündeki ürünlerde faydalı olabilir.

---

# 10. P2 – Relation Graph Görünümü

Mevcut yapı kart bazlıdır.

Opsiyonel olarak kullanıcı:

```text
Seçili Ürün
   ↓
Gerekli
Koşula Bağlı
Opsiyonel
Alternatif
İlgili
```

ilişkilerini graph görünümünde görebilir.

Dikkat:

Graph görünümü ana deneyimin yerine geçmek zorunda değildir.

İkinci bir görünüm olarak sunulabilir.

---

# 11. P2 – Talep / Sepet Akışı

Kullanıcı keşfettiği ürünleri:

```text
Talebime Ekle
```

ile bir listede toplayabilir.

Örnek:

```text
Şebeke Analizörü
A Serisi CT
Gateway
```

Sonra:

```text
Talep Oluştur
```

ile satış kanalına yönlendirilebilir.

---

# 12. P2 – Bölgesel Satış / Bayi Yönlendirmesi

Talep oluşturulduktan sonra:

```text
Ülke
İl
Bölge
```

seçimine göre:

- ilgili ENTES satış ekibi,
- bölge sorumlusu,
- bayi,
- distribütör

yönlendirmesi yapılabilir.

Bu yapı CRM veya mevcut şirket sistemleriyle entegre edilebilir.

---

# 13. P2 – Pazarlama Öncelik Katmanı

Teknik relation statüsü değiştirilmeden ayrı ticari etiketler eklenebilir.

Örnek:

```text
Yeni Ürün
Öne Çıkan
Stratejik Ürün
Kampanya
Yeni Seri
```

Örnek veri:

```text
Technical Status:
Koşula Bağlı

Marketing Priority:
Öne Çıkan
```

Bu katman teknik doğruluk ile pazarlama hedeflerinin ayrılmasını sağlar.

---

# 14. P2 – Arama Geliştirmeleri

Mevcut alias search geliştirilebilir.

Potansiyel özellikler:

- fuzzy search
- typo tolerance
- autocomplete
- son aramalar
- popüler aramalar
- kategori bazlı filtre
- teknik özellik bazlı arama

---

# 15. P2 – Kullanıcı Geri Bildirim Mekanizması

Her relation veya ürün sayfasında:

```text
Bu bilgi faydalı mı?
Evet / Hayır
```

veya:

```text
Bilgi güncel değil
```

gibi geri bildirim seçenekleri olabilir.

Bu geri bildirim teknik ekibe yönlendirilebilir.

---

# 16. P2 – Analytics

Ölçülebilecek metrikler:

## Ürün keşfi

```text
Bir oturumda kaç ürün açılıyor?
```

## Relation click rate

```text
Hangi ilişki kartlarına daha çok tıklanıyor?
```

## Cross-product discovery

```text
Kullanıcı başladığı ürün dışında kaç ürün keşfediyor?
```

## Official link click

```text
Broşür
Fiyat listesi
Ürün sayfası
```

tıklamaları.

## Search success

```text
Arama yaptıktan sonra ürün açıldı mı?
```

Bu metrikler platformun gerçek kullanım değerini ölçmeye yardımcı olabilir.

---

# 17. P3 – CRM Entegrasyonu

Talep/sepet sistemi ileride:

```text
CRM
lead management
sales pipeline
```

sistemlerine bağlanabilir.

Bu durumda platform yalnızca keşif değil:

```text
keşif → talep → satış
```

akışının ilk adımı haline gelebilir.

---

# 18. P3 – Kullanıcı Rolleri

Platform şirket içinde genişletilirse:

```text
Viewer
Editor
Technical Reviewer
Admin
```

rolleri eklenebilir.

Örneğin:

```text
Pazarlama
→ içerik düzenleyebilir

Teknik ekip
→ relation onaylayabilir

Admin
→ publish edebilir
```

---

# 19. P3 – Relation Version History

Her relation değişikliğinin geçmişi tutulabilir.

Örnek:

```text
2026-09-01
conditional → related
Reason: Teknik doğrulama

2026-10-12
technicalNote updated
```

Bu kurumsal izlenebilirliği artırır.

---

# 20. P3 – Çok Dilli Yapı

Platform ileride:

```text
Türkçe
İngilizce
```

ve gerekirse farklı pazar dilleriyle genişletilebilir.

Ürün verisi ve relation metinleri localization yapısına taşınabilir.

---

# 21. P3 – API Katmanı

Ürün ekosistemi verileri API üzerinden servis edilebilir.

Örnek:

```text
GET /api/products
GET /api/products/:id
GET /api/products/:id/relations
```

Böylece aynı veri:

- web sitesi,
- mobil uygulama,
- satış aracı,
- başka iç sistemler

tarafından kullanılabilir.

---

# 22. P3 – Otomatik Teknik Veri Senkronizasyonu

Eğer ENTES tarafında merkezi ürün verisi veya PIM sistemi bulunursa:

```text
ürün adı
seri
model
teknik özellik
doküman linki
```

otomatik senkronize edilebilir.

Relation katmanı yine ayrı yönetilebilir.

---

# 23. Mobil / Responsive İyileştirmeler

Proje desktop-first geliştirilmiştir.

Gelecekte mobil kullanım önem kazanırsa:

- header sadeleştirme
- sidebar mobil navigation
- relation kart optimizasyonu
- modal düzeni
- touch interaction
- carousel davranışı

yeniden ele alınabilir.

Şu anki MVP için mobil optimizasyon ana öncelik değildir.

---

# 24. Performans

Ürün sayısı büyürse değerlendirilebilecek alanlar:

- image optimization
- lazy loading
- relation indexing
- search indexing
- server-side data fetching
- caching

Mevcut 49 ürünlük yapı için ekstra optimizasyon zorunlu değildir.

---

# 25. Test Altyapısı

Gelecekte otomatik testler eklenebilir.

## Unit Test

```text
relation direction
search normalization
alias matching
```

## Integration Test

```text
product → relation → other product
```

## E2E Test

```text
search product
open product
filter relation
open modal
navigate related product
```

Araç örnekleri:

```text
Vitest
Playwright
```

---

# 26. CI/CD Geliştirmesi

GitHub Actions ile:

```text
push
  ↓
lint
  ↓
type check
  ↓
data validation
  ↓
build
  ↓
deploy
```

akışı oluşturulabilir.

Vercel deployment yalnızca kontroller başarılıysa production'a alınabilir.

---

# 27. Accessibility

Gelecekte kapsamlı erişilebilirlik kontrolü yapılabilir.

Özellikle:

- keyboard navigation
- focus management
- modal accessibility
- aria labels
- color contrast
- screen reader support

kontrol edilebilir.

---

# 28. Güvenlik

Şu an proje ağırlıklı olarak statik veri ve public kaynaklar kullanır.

İleride:

- admin panel,
- CRM,
- form,
- kullanıcı hesabı,
- API

eklenirse:

- authentication
- authorization
- rate limiting
- input validation
- audit log

gibi güvenlik katmanları eklenmelidir.

---

# 29. Dokümantasyonun Sürdürülmesi

Yeni ana özellik eklendiğinde aşağıdaki dosyalar da güncellenmelidir:

```text
README.md
docs/GELISTIRME_REHBERI.md
docs/RELATION_MODEL.md
docs/ROADMAP.md
```

Kod ile dokümantasyon farklı gerçeklikler anlatmamalıdır.

---

# 30. Önerilen Uygulama Sırası

Eğer proje tekrar aktif geliştirmeye alınırsa önerilen sıra:

## Faz 1 – Sağlamlaştırma

```text
1. Data validation
2. Kırık link kontrolü
3. Teknik relation review
4. Admin / data management kararı
```

## Faz 2 – Kullanılabilirlik

```text
5. Daha güçlü search
6. Sidebar preview
7. Teknik tablo preview
8. Analytics
```

## Faz 3 – Ticari Akış

```text
9. Talep / sepet
10. Bölgesel satış yönlendirmesi
11. CRM entegrasyonu
```

## Faz 4 – Ölçekleme

```text
12. Model compatibility
13. Multi-language
14. API
15. Role / approval workflow
```

---

# 31. Öncelik Özeti

## P1

- veri doğrulama
- model bazlı uyumluluk
- relation approval
- admin / merkezi veri yönetimi
- kırık link kontrolü

## P2

- sidebar preview
- teknik tablo preview
- karşılaştırma
- graph görünümü
- gelişmiş arama
- talep / sepet
- satış yönlendirmesi
- pazarlama etiketleri
- analytics
- feedback

## P3

- CRM
- kullanıcı rolleri
- version history
- çok dil
- API
- PIM / veri senkronizasyonu
- ileri CI/CD

---

# 32. Başarı Nasıl Ölçülebilir?

Platform ileride aktif olarak kullanılmaya başlanırsa başarı yalnızca trafik ile ölçülmemelidir.

Önerilen metrikler:

```text
Cross-product discovery rate
Search success rate
Relations per session
Official source click rate
Repeat usage
Feedback score
Lead conversion
```

Bu sayede:

> “Platform kullanılıyor mu?”

sorusundan daha önemli olan:

> “Platform gerçekten ürün keşfini kolaylaştırıyor mu?”

sorusu cevaplanabilir.

---

# 33. Projenin Uzun Vadeli Konumu

Platformun uzun vadeli konumu şu üç kullanım alanından biri veya birleşimi olabilir:

### İç Öğrenme Aracı

Yeni çalışan ve stajyerlerin ENTES portföyünü öğrenmesi.

### Teknik Ürün Keşif Aracı

Teknik kullanıcıların bağlantılı ürünleri keşfetmesi.

### Pazarlama / Satış Destek Aracı

Kullanıcıyı tek üründen daha geniş ENTES çözüm ailesine yönlendirmek.

Hangi konumun öncelikli olacağı şirket stratejisine göre belirlenmelidir.

---

# 34. Korunması Gereken Temel Prensip

Proje nasıl geliştirilirse geliştirilsin:

> **Teknik doğruluk ile ticari öncelik ayrı tutulmalıdır.**

Bir ürün:

```text
daha fazla satılmak isteniyor
```

diye teknik relation statüsü değiştirilmemelidir.

Bunun yerine:

```text
Öne Çıkan
Yeni Ürün
Stratejik
Kampanya
```

gibi ayrı pazarlama katmanları kullanılmalıdır.

---

# 35. Sonuç

Mevcut sürüm çalışan bir MVP'dir.

Bir sonraki geliştirme aşamasında en büyük değer:

```text
daha fazla özellik eklemekten
```

önce:

```text
veri yönetimini ve teknik doğrulama sürecini sürdürülebilir hale getirmek
```

olacaktır.

Bu temel sağlamlaştırıldıktan sonra platform:

```text
keşif
→ öğrenme
→ teknik yönlendirme
→ talep
→ satış
```

akışına doğru genişletilebilir.

---

**Proje:** ENTES Ürün Ekosistemi  
**Doküman:** Roadmap  
**Yıl:** 2026
