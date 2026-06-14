import Link from "next/link";
import { dealerConfig } from "@/data/dealerConfig";

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/autos/nieuw", label: "Auto toevoegen" },
  { href: "/", label: "Website bekijken" },
];

export function AdminLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-mist">
      <div className="border-b border-line bg-night text-white">
        <div className="container-page flex min-h-16 items-center justify-between gap-4">
          <Link href="/admin/dashboard" className="text-lg font-black">
            {dealerConfig.name} beheer
          </Link>
          <Link href="/" className="rounded border border-white/20 px-4 py-2 text-sm font-extrabold">
            Website
          </Link>
        </div>
      </div>
      <div className="container-page grid gap-7 py-7 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-lg border border-line bg-white p-3 shadow-card lg:sticky lg:top-7 lg:self-start">
          <nav className="grid gap-1">
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-4 py-3 text-sm font-extrabold text-ink hover:bg-mist"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section>
          <div className="mb-6">
            <h1 className="text-3xl font-black text-ink">{title}</h1>
            <p className="mt-2 text-slate-600">
              Mockbeheer voor de proefwebsite. Klaar om later op Supabase aan te sluiten.
            </p>
          </div>
          {children}
        </section>
      </div>
    </main>
  );
}
