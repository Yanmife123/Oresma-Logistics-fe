import { ActiveRequestsTable } from "@/components/pages/rider/dashbord/activeRequests/active-Requests";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
export default function RiderActiveRequests() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/rider/dashboard" },
          { label: "Active Requests", href: "/rider/dashboard/activeRequests" },
        ]}
      />
      <PageHeader2 title="My Active Requests" />
      <ActiveRequestsTable />
    </div>
  );
}
