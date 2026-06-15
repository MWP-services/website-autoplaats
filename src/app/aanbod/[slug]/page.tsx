import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import { CarDetail } from "@/components/public/CarDetail";
import { ContactCTA } from "@/components/public/ContactCTA";
import { SiteShell } from "@/components/public/SiteShell";

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: DetailPageProps) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);
  return {
    title: car ? `${car.title} | Krijnen Auto Te Koop` : "Auto niet gevonden | Krijnen Auto Te Koop",
  };
}

export default async function CarDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug && item.status === "published");

  if (!car) notFound();

  return (
    <SiteShell>
      <CarDetail car={car} />
      <ContactCTA />
    </SiteShell>
  );
}
