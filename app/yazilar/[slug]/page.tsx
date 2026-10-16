import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tarihiBicimlendir, tumYazilar, yaziyiGetir } from "@/lib/yazilar";

// Build sırasında her yazı için statik sayfa üretilsin diye.
export async function generateStaticParams() {
  const yazilar = await tumYazilar();
  return yazilar.map((yazi) => ({ slug: yazi.slug }));
}

export async function generateMetadata(
  props: PageProps<"/yazilar/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const yazi = await yaziyiGetir(slug);

  if (!yazi) return { title: "Yazı bulunamadı" };

  return { title: yazi.baslik, description: yazi.ozet };
}

export default async function YaziSayfasi(props: PageProps<"/yazilar/[slug]">) {
  const { slug } = await props.params;
  const yazi = await yaziyiGetir(slug);

  if (!yazi) notFound();

  return (
    <article>
      <Link
        href="/yazilar"
        className="text-sm text-slate-500 hover:text-sky-600 dark:hover:text-sky-400"
      >
        ← Yazılar
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-balance">
        {yazi.baslik}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500">
        <time dateTime={yazi.tarih}>{tarihiBicimlendir(yazi.tarih)}</time>
        {yazi.etiketler.map((etiket) => (
          <span
            key={etiket}
            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs dark:bg-slate-800"
          >
            {etiket}
          </span>
        ))}
      </div>

      <div
        className="yazi mt-10"
        dangerouslySetInnerHTML={{ __html: yazi.html }}
      />
    </article>
  );
}
