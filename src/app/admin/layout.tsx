import { DashbboardLayout } from "@/components/pages/layout/admin/AdminDashboardLayout";
import React from "react";
export default function AdminDashbboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashbboardLayout>{children}</DashbboardLayout>;
}
