import { dealerConfig } from "@/data/dealerConfig";
import { ContactCTA } from "@/components/public/ContactCTA";
import { SiteShell } from "@/components/public/SiteShell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h1 className="text-4xl font-black text-ink lg:text-5xl">Over Autoplaats</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Een moderne proefwebsite voor een occasionverkoper die zijn aanbod nu vooral via
              TikTok onder de aandacht brengt.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-mist p-7">
            <h2 className="text-2xl font-black text-ink">Professionele presentatie voor iedere auto</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Met deze website krijgt Autoplaats een eigen online showroom: overzichtelijke
              auto’s, duidelijke specificaties, grote foto’s, directe contactknoppen en een
              beheeromgeving waar later eenvoudig voorraad aan toegevoegd kan worden.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              TikTok blijft een sterk kanaal voor bereik. De website zorgt vervolgens voor rust,
              vertrouwen en conversie zodra een bezoeker meer informatie wil.
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
