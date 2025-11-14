// import { VehicleForm } from "@/components/shared/dashboard/vehicle-form";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { VehicleForm } from "@/components/shared/dashboard/create-vehicle/vehice-form";

export default function AddVehiclePage() {
  return (
    <div className="space-y-6">
      <PageHeader2 title="Add New Vehicle" />
      <VehicleForm />
    </div>
  );
}
