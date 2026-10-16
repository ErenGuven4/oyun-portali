import Link from "next/link";
import { tarihiBicimlendir, type Yazi } from "@/lib/yazilar";

export default function YaziKarti({ yazi }: { yazi: Yazi }) {
  return (
    <article className="border-b border-slate-200 py-8 dark:border-slate-800">
      <h2 className="text-xl font-semibold tracking-tight">
        <Link
          href={`/yazilar/${yazi.slug}`}
          className="hover:text-sky-600 dark:hover:text-sky-400"
        >
          {yazi.baslik}
        </Link>
      </h2>

      <p className="mt-2 text-slate-600 dark:text-slate-400">{yazi.ozet}</p>

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
    </article>
  );
}
