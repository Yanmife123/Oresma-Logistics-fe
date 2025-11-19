// import { VehicleForm } from "@/components/shared/dashboard/vehicle-form";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { VehicleForm } from "@/components/shared/dashboard/create-vehicle/vehice-form";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";

export default function AddVehiclePage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "All Vehicle", href: "/admin/dashboard/vehicle" },
          { label: "Add Vehicle", href: "/admin/dashboard/add-vehicle" },
        ]}
      />
      <PageHeader2 title="Add New Vehicle" />
      <VehicleForm />
    </div>
  );
}
