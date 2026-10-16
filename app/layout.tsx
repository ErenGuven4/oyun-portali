import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s — Blog",
  },
  description:
    "Oyun tasarımı, prototipler ve yol boyunca öğrendiklerim üzerine notlar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-slate-200 dark:border-slate-800">
          <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
            <Link href="/" className="font-semibold tracking-tight">
              Blog
            </Link>
            <div className="flex gap-5 text-sm text-slate-600 dark:text-slate-400">
              <Link href="/yazilar" className="hover:text-sky-600 dark:hover:text-sky-400">
                Yazılar
              </Link>
              <Link href="/hakkimda" className="hover:text-sky-600 dark:hover:text-sky-400">
                Hakkımda
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
