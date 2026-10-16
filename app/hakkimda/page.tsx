import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: "Eren Güven hakkında kısa bilgi.",
};

export default function HakkimdaSayfasi() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Hakkımda</h1>

      <div className="yazi mt-8">
        <p>
          Dijital Oyun Tasarımı okuyorum. Çoğunlukla küçük prototiplerle
          uğraşıyorum — bir mekaniği alıp eğlenceli olup olmadığını anlayacak
          kadar ilerletmek, sonra bir sonrakine geçmek.
        </p>
        <p>
          Bu blogu öğrendiklerimi unutmamak için tutuyorum. Yazdıklarımın bir
          kısmı kendime not, bir kısmı da aynı şeyleri yeni öğrenen birine
          faydası olur diye.
        </p>
        <p>
          Bana <a href="mailto:erenguven_2004@hotmail.com">e-posta</a> ile
          ulaşabilirsin.
        </p>
      </div>
    </>
  );
}
