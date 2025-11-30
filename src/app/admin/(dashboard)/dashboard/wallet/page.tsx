import { WalletCard } from "@/components/pages/admin/dashboard/wallet/currentBalance";
// import { ExpensePieChart } from "@/components/pages/admin/dashboard/wallet/expense-chart";
// import { WalletBankCards } from "@/components/pages/admin/dashboard/wallet/savedCard";
// import { WalletHistory } from "@/components/pages/admin/dashboard/wallet/wallet-history";
import AllRiderWalletPage from "@/components/pages/admin/dashboard/wallet/all-rider-wallet";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";

export default function WalletDashboardPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Wallet", href: "/admin/dashboard/wallet" },
        ]}
      />
      <WalletCard />
      {/* <WalletBankCards /> */}
      <hr className="border-t border-[#F7F8FB] border-7" />
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="md:col-span-3">
          <AllRiderWalletPage />
          {/* <WalletHistory /> */}
        </div>
        {/* <ExpensePieChart /> */}
      </div>
    </div>
  );
}
