import { AllAdminTable } from "@/components/pages/admin/dashboard/allAdmins/all-admin-table";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
export default function AllAdminPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "All Admin", href: "/admin/dashboard/all-admin" },
        ]}
      />
      <AllAdminTable />
    </div>
  );
}
