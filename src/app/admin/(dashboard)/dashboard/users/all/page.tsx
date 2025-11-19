import { AllUsersTable } from "@/components/pages/admin/dashboard/users/all/all-users-table";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
export default function AllUsersPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Users", href: "/admin/dashboard/users" },
          { label: "All Users", href: "/admin/dashboard/users/all" },
        ]}
      />
      <AllUsersTable />
    </div>
  );
}
