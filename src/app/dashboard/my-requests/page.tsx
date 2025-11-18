import MyRequestTable from "@/components/pages/dashboard/my-request/myRequest-table";
import { PageHeader } from "@/components/shared/headers/page-headers";
export default function MyRequestPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="My Requests" />
      <MyRequestTable />
    </div>
  );
}
