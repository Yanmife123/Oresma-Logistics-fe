import { RouteMap } from "@/components/shared/map/route-map";
import { TripProcess } from "@/components/pages/rider/dashbord/activeRequests/route/TripProcess";
import { PageHeader2 } from "@/components/shared/headers/page-headers";

export default async function RoutePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="space-y-6">
      <PageHeader2 title={`Request Progress for ${id} `} />
      <div>
        <TripProcess id={id} />
      </div>
    </div>
  );
}
