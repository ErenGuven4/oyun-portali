import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Sayfa bulunamadı</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Aradığın sayfa yok ya da taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm text-sky-600 hover:underline dark:text-sky-400"
      >
        ← Ana sayfaya dön
      </Link>
    </>
  );
}
