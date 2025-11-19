import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
import { VehicleForm } from "@/components/shared/dashboard/create-vehicle/vehice-form";
import { PageHeader2 } from "@/components/shared/headers/page-headers";

export default function AddVehiclePage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/rider/dashboard" },
          { label: "Vehicles", href: "/rider/dashboard/vehicle" },
        ]}
      />
      <PageHeader2 title="Vehicle" />
      <VehicleForm />
    </div>
  );
}
