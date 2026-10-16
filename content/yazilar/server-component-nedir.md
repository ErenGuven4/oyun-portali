---
baslik: "Server Component'i nihayet anladım sanıyorum"
ozet: "Next.js'te bileşenlerin varsayılan olarak sunucuda çalışması ilk başta kafamı karıştırdı. Dosya okumaya çalışınca oturdu."
tarih: "2026-10-03"
etiketler: ["nextjs", "react"]
---

Next.js'e başladığımda en çok takıldığım şey `"use client"` satırıydı. Ne zaman
yazmam gerektiğini anlamıyordum, hata alınca rastgele ekliyordum.

## Varsayılan sunucu

Anladığım şu: `app` klasöründeki bileşenler **varsayılan olarak sunucuda**
çalışıyor. Yani kod senin bilgisayarında (ya da sunucuda) çalışıp sonucu HTML
olarak tarayıcıya gidiyor. Bileşenin kendisi tarayıcıya hiç inmiyor.

Bu yüzden bir server component'in içinde doğrudan dosya okuyabiliyorum:

```tsx
import fs from "node:fs/promises";

export default async function Sayfa() {
  const icerik = await fs.readFile("notlar.md", "utf8");
  return <article>{icerik}</article>;
}
```

Tarayıcıda `fs` diye bir şey yok. Bu kod tarayıcıda çalışsaydı patlardı. Sunucuda
çalıştığı için sorun değil.

## Ne zaman `"use client"`

Bir bileşenin tarayıcıda çalışması gereken bir işi varsa — tıklamaya tepki
vermek, `useState` ile bir şey tutmak, `window`'a bakmak — o zaman dosyanın
en üstüne `"use client"` yazıyorum.

Benim kafa karışıklığım şuradan geliyormuş: `useState` kullanmayan, sadece prop
alıp JSX döndüren bir kart bileşeni için `"use client"` yazmaya **gerek yok**.
Ben "React bileşeni = client" diye düşündüğüm için her yere yazıyordum.

## Küçük not

`params` artık bir Promise. Dinamik bir sayfada şöyle alıyorum:

```tsx
export default async function Sayfa({ params }: PageProps<"/yazilar/[slug]">) {
  const { slug } = await params;
  // ...
}
```

İlk gördüğümde `await` niye var diye şaşırmıştım.
