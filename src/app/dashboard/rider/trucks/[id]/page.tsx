import { TruckDetail } from "@/components/pages/dashboard/rider/truck/truckDetails";
export default async function TruckDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <TruckDetail id={id} />;
}
