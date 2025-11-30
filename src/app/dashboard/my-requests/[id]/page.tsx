// import { AdminReqestsDetail } from "@/components/pages/admin/dashboard/requests/id/RequestDetail";

export default async function RequestsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <div className="mt-4">
        {/* <Bread */}
        not Avaliable
        {/* <AdminReqestsDetail id={id} /> */}
      </div>
    </div>
  );
}
