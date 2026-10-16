# Oyun Portalı

Oyun tasarımı notlarımı yazdığım blog. Next.js ile yazılmış, içerik markdown
dosyalarında duruyor.

## Çalıştırmak

```bash
npm install
npm run dev
```

Sonra [http://localhost:3000](http://localhost:3000).

## Yeni yazı eklemek

`content/yazilar/` içine bir `.md` dosyası ekle. Dosyanın başındaki frontmatter
bloğu başlık, tarih gibi bilgileri tutuyor:

```markdown
---
baslik: "Yazının başlığı"
ozet: "Listede görünecek kısa açıklama"
tarih: "2026-10-16"
etiketler: ["devlog", "unity"]
---

Yazının gövdesi buraya.
```

Dosya adı adresi belirliyor: `ilk-yazi.md` → `/yazilar/ilk-yazi`. Site yeni
yazıyı listeye kendiliğinden ekliyor, başka bir yere kaydetmeye gerek yok.

## Yapı

| Yol | Ne işe yarıyor |
| --- | --- |
| `content/yazilar/` | Yazılar (markdown) |
| `lib/yazilar.ts` | Markdown dosyalarını okuyup parse eden katman |
| `app/page.tsx` | Ana sayfa — tanıtım ve son yazılar |
| `app/yazilar/` | Yazı listesi ve tek yazı sayfası |
| `app/hakkimda/` | Hakkımda |
| `app/components/` | Paylaşılan bileşenler |

## Notlar

`next.config.ts` içinde `cacheComponents` açık. Bu yüzden dosya okuyan
fonksiyonlarda ve yılı hesaplayan `Footer` bileşeninde `"use cache"` var —
olmadan sayfalar statik üretilmiyor, `new Date()` de build'i hata ile
durduruyor.

---

Bu depo "ilk Git deposu" ödeviyle başladı, sonra blog projesine dönüştü.
