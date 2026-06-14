import { cars } from "@/data/cars";
import { dealerConfig } from "@/data/dealerConfig";
import { ContactCTA } from "@/components/public/ContactCTA";
import { FeaturedCars } from "@/components/public/FeaturedCars";
import { Hero } from "@/components/public/Hero";
import { SiteShell } from "@/components/public/SiteShell";
import { TrustBar } from "@/components/public/TrustBar";

export default function HomePage() {
  const publishedCars = cars.filter((car) => car.status === "published");
  const featuredCars = publishedCars.filter((car) => car.featured);
  const heroCar = featuredCars[0] ?? publishedCars[0];

  return (
    <SiteShell>
      <Hero car={heroCar} />
      <TrustBar />
      <FeaturedCars cars={featuredCars} />
      <section className="bg-mist py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-ink">Van TikTok naar een professionele showroom</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Autoplaats verkoopt nu vooral via TikTok. Deze proefwebsite laat zien hoe hetzelfde
              aanbod professioneler, rustiger en commercieel sterker gepresenteerd kan worden:
              met filters, detailpagina’s, duidelijke foto’s en directe contactmogelijkheden.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-card">
            <h3 className="text-2xl font-black text-ink">TikTok blijft belangrijk</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Bezoekers die via {dealerConfig.tiktokHandle} binnenkomen kunnen meteen het actuele
              aanbod bekijken, specificaties vergelijken en contact opnemen zonder eerst door losse
              video’s of berichten te zoeken.
            </p>
            <a
              href={dealerConfig.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-12 items-center rounded bg-night px-5 text-sm font-extrabold text-white"
            >
              Volg op TikTok
            </a>
          </div>
        </div>
      </section>
      <ContactCTA />
    </SiteShell>
  );
}
