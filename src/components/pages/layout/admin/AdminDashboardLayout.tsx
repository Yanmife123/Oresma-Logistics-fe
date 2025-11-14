"use client";
import AdminSideBar from "./AppSideBar";
import { Suspense, useState, useEffect } from "react";
import { cn } from "@/_lib/utils";
import { Header2 } from "@/components/shared/headers/header";
import { User } from "@/_lib/type/cookies";
import Cookies from "js-cookie";

export function DashbboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userCookies = Cookies.get("user");
    if (userCookies) {
      setUser(JSON.parse(userCookies));
    }
  }, []);
  return (
    <div className="flex min-h-screen bg-background">
      <Suspense>
        <AdminSideBar
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
        <Header2
          title="Admin Dashbaord"
          userImage="/diverse-user-avatars.png"
          userName={user?.name ?? ""}
          isMobileOpen={isMobileSidebarOpen}
          onToggleSidebar={() => {
            if (window.innerWidth < 1024) {
              setIsMobileSidebarOpen(!isMobileSidebarOpen);
            } else {
              setIsSidebarCollapsed(!isSidebarCollapsed);
            }
          }}
          bgcolor="#021533"
        />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
