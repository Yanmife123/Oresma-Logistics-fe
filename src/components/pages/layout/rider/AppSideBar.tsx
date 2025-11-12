"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/_lib/utils";
import {
  LayoutDashboard,
  User,
  Bike,
  Calendar,
  Bookmark,
  // Navigation,
  Car,
  // Search,
  // List,
  // Wrench,
  // HelpCircle,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "@/_lib/api/auth/logout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { showToast } from "@/components/shared/toast";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/rider/dashboard" },
  { icon: User, label: "Profile", href: "/rider/profile" },
  { icon: Bike, label: "Requests", href: "/rider/dashboard/requests" },
  { icon: Car, label: "Vehicle", href: "/rider/dashboard/vehicle" },
  { icon: Calendar, label: "Calendar", href: "/rider/calendar" },
  { icon: Bookmark, label: "Saved", href: "/rider/saved" },
  // { icon: Navigation, label: "Active Ride", href: "/admin/active-ride" },

  // { icon: Search, label: "Search", href: "/admin/search" },
  // { icon: List, label: "Listings", href: "/admin/listings" },
  // { icon: Wrench, label: "Book services", href: "/admin/book-services" },
  // { icon: HelpCircle, label: "Help Centre", href: "/admin/help-centre" },
];

interface SidebarProps {
  isCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function RiderSideBar({
  isCollapsed: controlledCollapsed,
  onCollapsedChange,
  isMobileOpen = false,
  onMobileClose,
}: SidebarProps = {}) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const pathname = usePathname();
  const navigate = useRouter();

  const isCollapsed = controlledCollapsed ?? internalCollapsed;
  const _setIsCollapsed = onCollapsedChange ?? setInternalCollapsed;

  const mutation = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      showToast.success("Logout Successful");
      navigate.push("/auth/login");
    },
  });

  const hanldeLogout = async () => {
    try {
      await mutation.mutateAsync();
    } catch (error) {
      if (error instanceof Error) {
        showToast.error(error.message);
      }
    }
  };
  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onMobileClose}
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen border-r border-border bg-background transition-all duration-300",
          // Desktop behavior
          "lg:z-40",
          isCollapsed ? "lg:w-20" : "lg:w-64",
          // Mobile behavior - slide in from left
          "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-border px-6">
            <div
              className={cn(
                "flex items-center gap-2",
                isCollapsed && "lg:justify-center lg:w-full"
              )}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primaryT shrink-0 relative">
                <Image src={"/logo2.svg"} alt="logitcs logo" fill />
              </div>
              <span
                className={cn(
                  "text-lg font-semibold",
                  isCollapsed && "lg:hidden"
                )}
              >
                Oresma Logistics
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onMobileClose}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primaryT text-white"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    isCollapsed && "lg:justify-center"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className={cn(isCollapsed && "lg:hidden")}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <div className="w-full mt-5">
              <Button
                variant="default"
                className="flex-1 flex items-center justify-center gap-2 py-6 text-base font-semibold w-full cursor-pointer bg-white hover:bg-white text-primaryT hover:text-primaryT"
                onClick={hanldeLogout}
              >
                <LogOut className="w-5 h-5 text-primaryT" />
                Login
              </Button>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
