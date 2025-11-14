import { VehicleForm } from "@/components/shared/dashboard/create-vehicle/vehice-form";
import { PageHeader2 } from "@/components/shared/headers/page-headers";

export default function AddVehiclePage() {
  return (
    <div className="space-y-6">
      <PageHeader2 title="Vehicle" />
      <VehicleForm />
    </div>
  );
}
