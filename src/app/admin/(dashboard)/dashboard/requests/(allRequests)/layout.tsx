import { AdminRequestHeader } from "@/components/pages/admin/dashboard/requests/pageHead";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";

export default function AdminRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "All Request", href: "/admin/dashboard/requests" },
        ]}
      />
      <div>
        <AdminRequestHeader />
      </div>
      <div>{children}</div>
    </div>
  );
}
