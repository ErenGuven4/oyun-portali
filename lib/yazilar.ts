import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const YAZI_KLASORU = path.join(process.cwd(), "content/yazilar");

export type Yazi = {
  slug: string;
  baslik: string;
  ozet: string;
  tarih: string;
  etiketler: string[];
};

export type YaziDetay = Yazi & {
  html: string;
};

/** Markdown dosyasındaki frontmatter'ı tiplenmiş bir Yazi'ya çevirir. */
function yaziyaCevir(slug: string, veri: Record<string, unknown>): Yazi {
  return {
    slug,
    baslik: typeof veri.baslik === "string" ? veri.baslik : slug,
    ozet: typeof veri.ozet === "string" ? veri.ozet : "",
    tarih: typeof veri.tarih === "string" ? veri.tarih : "",
    etiketler: Array.isArray(veri.etiketler) ? veri.etiketler.map(String) : [],
  };
}

/** Tüm yazıları tarihe göre yeniden eskiye sıralı döndürür. */
export async function tumYazilar(): Promise<Yazi[]> {
  "use cache";

  const dosyalar = await fs.readdir(YAZI_KLASORU);

  const yazilar = await Promise.all(
    dosyalar
      .filter((dosya) => dosya.endsWith(".md"))
      .map(async (dosya) => {
        const icerik = await fs.readFile(path.join(YAZI_KLASORU, dosya), "utf8");
        const { data } = matter(icerik);
        return yaziyaCevir(dosya.replace(/\.md$/, ""), data);
      }),
  );

  return yazilar.sort((a, b) => b.tarih.localeCompare(a.tarih));
}

/** Tek bir yazıyı, markdown'ı HTML'e çevrilmiş halde döndürür. Yoksa null. */
export async function yaziyiGetir(slug: string): Promise<YaziDetay | null> {
  "use cache";

  try {
    const icerik = await fs.readFile(
      path.join(YAZI_KLASORU, `${slug}.md`),
      "utf8",
    );
    const { data, content } = matter(icerik);
    return {
      ...yaziyaCevir(slug, data),
      html: await marked.parse(content),
    };
  } catch {
    return null;
  }
}

/** 2026-01-15 -> 15 Ocak 2026 */
export function tarihiBicimlendir(tarih: string): string {
  if (!tarih) return "";
  return new Date(tarih).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
