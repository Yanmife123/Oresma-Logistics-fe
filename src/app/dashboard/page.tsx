import { DashboardBanner } from "@/components/pages/dashboard/alertBanner";
import { RideRequest } from "@/components/pages/dashboard/rideRequest";
import { RecentTravel } from "@/components/pages/dashboard/RecentTravel";
import { CancelledTrip } from "@/components/pages/dashboard/cencelledTrip";
import { AmountSpent } from "@/components/pages/dashboard/AmountSpent";
import { PageHeader } from "@/components/shared/headers/page-headers";
export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div>
        <PageHeader title="Overview" />
      </div>
      <DashboardBanner />
      <div className="grid lg:grid-cols-2 gap-8">
        <RideRequest />
        <RecentTravel />
        <CancelledTrip />
        <AmountSpent />
      </div>
    </div>
  );
}
