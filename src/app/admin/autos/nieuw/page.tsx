import { AdminLayout } from "@/components/admin/AdminLayout";
import { CarForm } from "@/components/admin/CarForm";

export default function NewCarPage() {
  return (
    <AdminLayout title="Auto toevoegen">
      <CarForm />
    </AdminLayout>
  );
}
