import MyRequestTable from "@/components/pages/dashboard/my-request/myRequest-table";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
import { PageHeader } from "@/components/shared/headers/page-headers";
export default function MyRequestPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "My Requests" },
        ]}
      />
      <PageHeader title="My Requests" />
      <MyRequestTable />
    </div>
  );
}
