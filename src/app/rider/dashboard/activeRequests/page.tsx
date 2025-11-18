import { ActiveRequestsTable } from "@/components/pages/rider/dashbord/activeRequests/active-Requests";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
export default function RiderActiveRequests() {
  return (
    <div className="space-y-6">
      <PageHeader2 title="My Active Requests" />
      <ActiveRequestsTable />
    </div>
  );
}
