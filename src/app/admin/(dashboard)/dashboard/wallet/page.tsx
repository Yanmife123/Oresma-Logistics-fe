import { WalletCard } from "@/components/pages/admin/dashboard/wallet/currentBalance";
import { ExpensePieChart } from "@/components/pages/admin/dashboard/wallet/expense-chart";
import { WalletBankCards } from "@/components/pages/admin/dashboard/wallet/savedCard";
import { WalletHistory } from "@/components/pages/admin/dashboard/wallet/wallet-history";

export default function WalletDashboardPage() {
  return (
    <div className="space-y-6">
      <WalletCard />
      <WalletBankCards />
      <hr className="border-t border-[#F7F8FB] border-7" />
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="md:col-span-2">
          <WalletHistory />
        </div>
        <ExpensePieChart />
      </div>
    </div>
  );
}
