import { RequestDetail } from "@/components/pages/rider/dashbord/requests/requestDetail";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
export default async function RequestsDetailPage({
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
          { label: "All Requests", href: "/rider/dashboard/requests" },
          { label: id },
        ]}
      />
      <div className="mt-4">
        <RequestDetail id={id} />
      </div>
    </div>
  );
}
