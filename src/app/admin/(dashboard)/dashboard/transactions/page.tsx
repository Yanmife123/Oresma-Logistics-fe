import { AdminTransactionsTable } from "@/components/pages/admin/dashboard/transactions/transaction-Table";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
export default function TransactionPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Transactions" },
        ]}
      />
      <PageHeader2 title="Transactions" />
      <AdminTransactionsTable />
    </div>
  );
}
