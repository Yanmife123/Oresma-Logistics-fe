"use client";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function AdminRequestHeader() {
  const path = usePathname();
  const RequestLink = [
    { label: "Truck requests", href: "/admin/dashboard/requests" },
    { label: "Car  requests", href: "/admin/dashboard/requests/car" },
    { label: "Bike requests", href: "/admin/dashboard/requests/bike" },
  ];
  return (
    <PageHeader2
      title="All Requests"
      actions={
        <>
          {RequestLink.map((link) => (
            <Button
              asChild
              key={link.label}
              className={`${
                path === link.href ? "bg-primaryT " : "bg-[#8B93A1]"
              } hover:bg-primaryT`}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </>
      }
    />
  );
}
