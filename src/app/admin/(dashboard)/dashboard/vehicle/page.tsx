import { VehicleDashboardTable } from "@/components/pages/admin/dashboard/vehicle/vehicle-table";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";

export default function VehicleDashboardPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "All Vehicle", href: "/admin/dashboard/vehicle" },
        ]}
      />
      <VehicleDashboardTable />
    </div>
  );
}
