import { PageHeader } from "@/components/shared/headers/page-headers";
import { RequestDetail } from "@/components/pages/rider/dashbord/requests/requestDetail";
export default async function RequestsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="">
      <PageHeader title={`Request ID  #${id}`} />
      <div className="mt-4">
        <RequestDetail id={id} />
      </div>
    </div>
  );
}
