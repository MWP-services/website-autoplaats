import { dealerConfig } from "@/data/dealerConfig";
import { ContactCTA } from "@/components/public/ContactCTA";
import { SiteShell } from "@/components/public/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h1 className="text-4xl font-black text-ink lg:text-5xl">Over Krijnen Auto Te Koop</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Een jonge, sportieve occasionverkoper die auto&apos;s krachtig via TikTok presenteert
              en bezoekers via deze website meer rust, overzicht en vertrouwen geeft.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-mist p-7">
            <h2 className="text-2xl font-black text-ink">Professionele presentatie voor iedere auto</h2>
            <p className="mt-4 leading-8 text-slate-700">
              De website is ingericht als moderne online showroom: grote foto&apos;s, heldere
              specificaties, badges voor belangrijke kenmerken en directe knoppen voor WhatsApp,
              bellen en bezichtigingen.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              TikTok zorgt voor bereik en snelheid. Deze proefwebsite zorgt daarna voor structuur,
              betrouwbaarheid en een duidelijke route naar contact.
            </p>
            <a
              href={dealerConfig.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 items-center rounded bg-night px-5 text-sm font-extrabold text-white"
            >
              Bekijk {dealerConfig.tiktokHandle}
            </a>
          </div>
        </div>
      </section>
      <ContactCTA />
    </SiteShell>
  );
}
