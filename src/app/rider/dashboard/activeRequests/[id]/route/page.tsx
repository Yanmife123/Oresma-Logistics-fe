import { TripProcess } from "@/components/pages/rider/dashbord/activeRequests/route/TripProcess";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";

export default async function RoutePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/rider/dashboard" },
          { label: "Active Requests", href: "/rider/dashboard/activeRequests" },
          { label: id, href: `/rider/dashboard/activeRequests/${id}` },
          {
            label: "Routes",
            href: `/rider/dashboard/activeRequests/${id}/route`,
          },
        ]}
      />
      <PageHeader2 title={`Request Progress for ${id} `} />
      <div>
        <TripProcess id={id} />
      </div>
    </div>
  );
}
