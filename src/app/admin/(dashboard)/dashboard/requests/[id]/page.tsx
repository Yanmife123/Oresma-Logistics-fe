import { AdminReqestsDetail } from "@/components/pages/admin/dashboard/requests/id/RequestDetail";
import { Breadcrumb } from "@/components/shared/dashboard/breadcrumb";

export default async function RequestsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="">
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "All Request", href: "/admin/dashboard/requests" },
          { label: id },
        ]}
      />
      <div className="mt-4">
        {/* <Bread */}
        <AdminReqestsDetail id={id} />
      </div>
    </div>
  );
}
