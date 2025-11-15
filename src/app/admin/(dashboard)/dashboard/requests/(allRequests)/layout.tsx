import { AdminRequestHeader } from "@/components/pages/admin/dashboard/requests/pageHead";

export default function AdminRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div>
        <AdminRequestHeader />
      </div>
      <div>{children}</div>
    </div>
  );
}
