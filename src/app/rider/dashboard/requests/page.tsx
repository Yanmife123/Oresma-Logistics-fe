import { RequestTable } from "@/components/pages/rider/dashbord/requests/requestTable";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { Button } from "@/components/ui/button";
export default function RequestPage() {
  return (
    <div className="space-y-6">
      <PageHeader2
        title="All Requests"
        actions={
          <>
            <Button className="rounded-full p-6 cursor-pointer">
              incoming Request
            </Button>
          </>
        }
      />
      <div>
        <RequestTable />
      </div>
    </div>
  );
}
