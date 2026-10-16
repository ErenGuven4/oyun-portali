import type { Metadata } from "next";
import YaziKarti from "../components/YaziKarti";
import { tumYazilar } from "@/lib/yazilar";

export const metadata: Metadata = {
  title: "Yazılar",
  description: "Tüm yazılar.",
};

export default async function YazilarSayfasi() {
  const yazilar = await tumYazilar();

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Yazılar</h1>

      {yazilar.length === 0 ? (
        <p className="mt-6 text-slate-600 dark:text-slate-400">
          Henüz yazı yok.
        </p>
      ) : (
        <div className="mt-2">
          {yazilar.map((yazi) => (
            <YaziKarti key={yazi.slug} yazi={yazi} />
          ))}
        </div>
      )}
    </>
  );
}
