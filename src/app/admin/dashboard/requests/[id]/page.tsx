import { AdminReqestsDetail } from "@/components/pages/admin/dashboard/requests/id/RequestDetail";
import { PageHeader2 } from "@/components/shared/headers/page-headers";

export default async function RequestsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <PageHeader2 title={`Request ID  #${id}`} />
      <div className="mt-4">
        <AdminReqestsDetail id={id} />
      </div>
    </div>
  );
}
