"use client";
import { DashboardSidebar } from "@/components/pages/layout/dashboard/AppSideBar";
import { Suspense, useState } from "react";
import { cn } from "@/_lib/utils";
import { Header } from "@/components/shared/dashboard/header";
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-background">
      <Suspense fallback="">
        <DashboardSidebar
          isCollapsed={isSidebarCollapsed}
          onCollapsedChange={setIsSidebarCollapsed}
          isMobileOpen={isMobileSidebarOpen}
          onMobileClose={() => setIsMobileSidebarOpen(false)}
        />
      </Suspense>
      <div
        className={cn(
          "flex-1 transition-all duration-300",
          "lg:ml-20",
          !isSidebarCollapsed && "lg:ml-64"
        )}
      >
        <Header
          title="Dashboard"
          userImage="/diverse-user-avatars.png"
          userName="Admin"
          onToggleSidebar={() => {
            if (window.innerWidth < 1024) {
              setIsMobileSidebarOpen(!isMobileSidebarOpen);
            } else {
              setIsSidebarCollapsed(!isSidebarCollapsed);
            }
          }}
        />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
