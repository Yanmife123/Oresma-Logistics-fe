import { TruckDetail } from "@/components/pages/dashboard/rider/truck/truckDetails";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
export default async function TruckDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Create Requests", href: "/dashboard/rider" },
          { label: "Trucks", href: "/dashboard/rider/trucks" },
          { label: id },
        ]}
      />
      <TruckDetail id={id} />
    </div>
  );
}
