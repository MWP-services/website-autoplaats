import Link from "next/link";
import { dealerConfig } from "@/data/dealerConfig";
import { BrandLogo } from "@/components/public/BrandLogo";

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-night p-4">
      <section className="w-full max-w-md rounded-lg bg-white p-7 shadow-soft">
        <div className="mb-7 text-center">
          <div className="mb-4 flex justify-center">
            <BrandLogo size="lg" />
          </div>
          <h1 className="text-3xl font-black text-ink">{dealerConfig.name} beheer</h1>
          <p className="mt-2 text-sm font-semibold text-slate-600">Log in om auto&apos;s te beheren.</p>
        </div>
        <form className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-extrabold text-ink">E-mailadres</span>
            <input
              type="email"
              placeholder="E-mailadres nog invullen"
              className="h-12 rounded border border-line px-4 text-sm font-semibold outline-none focus:border-gold"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-extrabold text-ink">Wachtwoord</span>
            <input
              type="password"
              placeholder="Wachtwoord"
              className="h-12 rounded border border-line px-4 text-sm font-semibold outline-none focus:border-gold"
            />
          </label>
          <Link
            href="/admin/dashboard"
            className="mt-2 inline-flex h-12 items-center justify-center rounded bg-night px-5 text-sm font-extrabold text-white"
          >
            Inloggen demo
          </Link>
          <p className="rounded bg-mist p-3 text-xs font-semibold text-slate-600">
            Dit is een mocklogin voor de proefwebsite. Echte authenticatie kan later via Supabase
            Auth worden aangesloten.
          </p>
        </form>
      </section>
    </main>
  );
}
