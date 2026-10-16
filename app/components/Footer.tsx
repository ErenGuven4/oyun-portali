// "use cache" olmadan `new Date()` prerender sırasında hata veriyor:
// değeri her render'da değişebileceği için Next.js onu cache'lemeni istiyor.
export default async function Footer() {
  "use cache";

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-2xl px-6 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Eren Güven
      </div>
    </footer>
  );
}
