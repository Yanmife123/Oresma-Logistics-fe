import { AdminDashboardBanner } from "@/components/pages/admin/Admin-Alert";
import { RideRequest } from "@/components/pages/dashboard/rideRequest";
import { RecentTravel } from "@/components/pages/dashboard/RecentTravel";
import { CancelledTrip } from "@/components/pages/dashboard/cencelledTrip";
import { AmountSpent } from "@/components/pages/dashboard/AmountSpent";
import { PageHeader } from "@/components/shared/headers/page-headers";
export default function AdminDashboardPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4 w-full">
        <PageHeader title="Admin Dashboard" />
        <AdminDashboardBanner />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <RideRequest color="#021533" />
        <RecentTravel />
        <CancelledTrip />
        <AmountSpent color="#021533" />
      </div>
    </div>
  );
}
