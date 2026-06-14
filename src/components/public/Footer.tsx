import Link from "next/link";
import { dealerConfig } from "@/data/dealerConfig";
import { BrandLogo } from "@/components/public/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-night py-12 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BrandLogo />
            <div>
              <p className="text-lg font-extrabold">{dealerConfig.name}</p>
              <p className="text-sm text-slate-300">{dealerConfig.slogan}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Een professionele demo-showroom voor actueel occasionaanbod, directe contactmogelijkheden
            en een beheeromgeving die later gekoppeld kan worden aan Supabase.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-300">Website</h2>
          <div className="grid gap-3 text-sm text-slate-200">
            <Link href="/aanbod">Aanbod bekijken</Link>
            <Link href="/over-ons">Over Autoplaats</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin/login">Admin login</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-300">Contact</h2>
          <div className="grid gap-3 text-sm text-slate-200">
            <span>{dealerConfig.phone}</span>
            <span>{dealerConfig.email}</span>
            <a href={dealerConfig.tiktokUrl} target="_blank" rel="noreferrer">
              TikTok {dealerConfig.tiktokHandle}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
