import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
export default function AdminWithdrawHistory() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "All Withdrawal Requests" },
        ]}
      />
      <PageHeader2 title="Withdrawals" />
    </div>
  );
}
