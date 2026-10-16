---
baslik: "Buraya neden yazmaya başladım"
ozet: "Oyun tasarımı okurken öğrendiklerimi bir yerde biriktirmek istedim. Bu site o yer."
tarih: "2026-10-16"
etiketler: ["genel"]
---

Dijital Oyun Tasarımı okuyorum ve bir süredir öğrendiğim her şey kafamın içinde
dağınık duruyor. Bir prototip yapıyorum, bir şey çözüyorum, iki hafta sonra aynı
problemi yeniden çözmeye çalışıyorum. Bu yüzden buraya yazmaya karar verdim.

## Burada ne olacak

Çok iddialı bir plan yok. Aklımdakiler:

- Yaptığım oyun prototiplerinin devlog'ları
- Oynadığım oyunlardan tasarım notları
- Web tarafında öğrendiklerim — bu site de dahil

## Bu site nasıl çalışıyor

Yazılar `content/yazilar/` klasöründe düz markdown dosyaları olarak duruyor.
Yeni bir yazı eklemek için yeni bir `.md` dosyası açmam yeterli; site onu
kendiliğinden listeye ekliyor. Veritabanı yok, panel yok, sadece dosyalar.

Her dosyanın başında şöyle bir blok var:

```markdown
---
baslik: "Yazının başlığı"
ozet: "Listede görünecek kısa açıklama"
tarih: "2026-10-16"
etiketler: ["unity", "devlog"]
---
```

Buna *frontmatter* deniyor. Başlık, tarih gibi bilgileri yazının içeriğinden
ayrı tutmaya yarıyor.
