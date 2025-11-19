import { RequestDetail2 } from "@/components/pages/rider/dashbord/requests/requestDetail";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";
export default async function RequestsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/rider/dashboard" },
          { label: "Active Requests", href: "/rider/dashboard/activeRequests" },
          { label: id },
        ]}
      />
      <div className="mt-4">
        <RequestDetail2 id={id} />
      </div>
    </div>
  );
}
