import { cars } from "@/data/cars";
import { AdminCarTable } from "@/components/admin/AdminCarTable";

export function AdminDashboard() {
  const published = cars.filter((car) => car.status === "published").length;
  const sold = cars.filter((car) => car.status === "sold").length;
  const draft = cars.filter((car) => car.status === "draft").length;

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Gepubliceerd", published],
          ["Concept", draft],
          ["Verkocht", sold],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-line bg-white p-5 shadow-card">
            <p className="text-sm font-extrabold uppercase tracking-wider text-steel">{label}</p>
            <p className="mt-3 text-4xl font-black text-ink">{value}</p>
          </div>
        ))}
      </div>
      <AdminCarTable cars={cars} />
    </div>
  );
}
