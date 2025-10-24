import { RiderDashbboardLayout } from "@/components/pages/layout/rider/RiderDashboardLayout";
export default function RiderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RiderDashbboardLayout>{children}</RiderDashbboardLayout>;
}
