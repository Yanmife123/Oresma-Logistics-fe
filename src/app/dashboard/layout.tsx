import { DashboardLayout } from "@/components/pages/layout/dashboard/DashboardLayout";
export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
