"use client";
import { DashboardSidebar } from "@/components/pages/layout/dashboard/AppSideBar";
import { Suspense, useEffect, useState } from "react";
import { cn } from "@/_lib/utils";
import Cookies from "js-cookie";
import { Header } from "@/components/shared/headers/header";
import { User } from "@/_lib/type/cookies";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userCookies = Cookies.get("user");
    if (userCookies) {
      setUser(JSON.parse(userCookies));
    }
  }, []);

  // 👇 Prevent hydration mismatch by not rendering until mounted
  if (user === null) {
    return null; // or show a skeleton loader
  }

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
          title={`hello ${user?.name ?? ""}`}
          userImage="/diverse-user-avatars.png"
          userName={user?.name ?? ""}
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
