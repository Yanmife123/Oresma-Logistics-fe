import { AllRidersTable } from "@/components/pages/admin/dashboard/users/riders/rider-table";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";

export default function AllRiderPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Users", href: "/admin/dashboard/users" },
          { label: "All Riders", href: "/admin/dashboard/users/riders" },
        ]}
      />
      <AllRidersTable />
    </div>
  );
}
