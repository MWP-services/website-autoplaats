import { cars } from "@/data/cars";
import { ContactCTA } from "@/components/public/ContactCTA";
import { InventoryGrid } from "@/components/public/InventoryGrid";
import { SiteShell } from "@/components/public/SiteShell";

type AanbodPageProps = {
  searchParams?: Promise<{ zoek?: string }>;
};

export default async function AanbodPage({ searchParams }: AanbodPageProps) {
  const params = await searchParams;

  return (
    <SiteShell>
      <section className="bg-white py-10 lg:py-14">
        <div className="container-page">
          <h1 className="text-4xl font-black text-ink lg:text-5xl">Actueel aanbod</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Zoek, filter en sorteer het aanbod van Autoplaats. Ontbrekende gegevens worden duidelijk
            als op aanvraag weergegeven, zodat de presentatie professioneel blijft.
          </p>
        </div>
      </section>
      <InventoryGrid cars={cars} initialQuery={params?.zoek ?? ""} />
      <ContactCTA />
    </SiteShell>
  );
}
