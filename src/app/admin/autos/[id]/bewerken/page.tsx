import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CarForm } from "@/components/admin/CarForm";

type EditCarPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export default async function EditCarPage({ params }: EditCarPageProps) {
  const { id } = await params;
  const car = cars.find((item) => item.id === id);

  if (!car) notFound();

  return (
    <AdminLayout title="Auto bewerken">
      <CarForm car={car} />
    </AdminLayout>
  );
}
