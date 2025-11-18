import { RequestDetail2 } from "@/components/pages/rider/dashbord/requests/requestDetail";
export default async function RequestsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="">
      <div className="mt-4">
        <RequestDetail2 id={id} />
      </div>
    </div>
  );
}
