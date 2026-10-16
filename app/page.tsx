import Link from "next/link";
import YaziKarti from "./components/YaziKarti";
import { tumYazilar } from "@/lib/yazilar";

export default async function Home() {
  const yazilar = await tumYazilar();
  const sonYazilar = yazilar.slice(0, 3);

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Merhaba, ben Eren</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Dijital Oyun Tasarımı öğrencisiyim. Burada prototiplerimden notlar,
          oyun tasarımı üzerine düşünceler ve yol boyunca öğrendiğim teknik
          şeyler var.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Son yazılar
        </h2>

        <div className="mt-2">
          {sonYazilar.map((yazi) => (
            <YaziKarti key={yazi.slug} yazi={yazi} />
          ))}
        </div>

        {yazilar.length > sonYazilar.length && (
          <Link
            href="/yazilar"
            className="mt-6 inline-block text-sm text-sky-600 hover:underline dark:text-sky-400"
          >
            Tüm yazılar →
          </Link>
        )}
      </section>
    </>
  );
}
