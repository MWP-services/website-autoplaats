import { cars } from "@/data/cars";
import { AanbodClient } from "@/app/aanbod/AanbodClient";
import { ContactCTA } from "@/components/public/ContactCTA";
import { SiteShell } from "@/components/public/SiteShell";

export default function AanbodPage() {
  return (
    <SiteShell>
      <section className="bg-white py-10 lg:py-14">
        <div className="container-page">
          <h1 className="text-4xl font-black text-ink lg:text-5xl">Actueel aanbod</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Zoek, filter en sorteer het aanbod van Krijnen Auto Te Koop. Ontbrekende gegevens worden duidelijk
            als op aanvraag weergegeven, zodat de presentatie professioneel blijft.
          </p>
        </div>
      </section>
      <AanbodClient cars={cars} />
      <ContactCTA />
    </SiteShell>
  );
}
