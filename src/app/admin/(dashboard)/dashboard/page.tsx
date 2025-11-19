import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { Suspense } from "react";
import { PeriodSelector } from "@/components/shared/dashboard/period-selector";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StatCard } from "@/components/shared/dashboard/stats-card";
import TotalSales from "@/components/pages/rider/dashbord/totalSales";
import { Menu, CalendarArrowDown } from "lucide-react";
import RegisteredUsers from "@/components/pages/admin/dashboard/registeredUserChart";
import { RegisteredVehicle } from "@/components/pages/admin/dashboard/registeredVehicle";
export default function AdminDashboardPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4 w-full">
        <PageHeader2
          title="Admin Dashboard"
          actions={
            <>
              <Suspense fallback={""}>
                <PeriodSelector
                  options={[{ label: "30 Days", value: "30days" }]}
                  paramName="riderDashboardFliter"
                  className="cursor-pointer"
                />
              </Suspense>
              <Button className="rounded-full p-6 cursor-pointer" asChild>
                <Link href={"/admin/dashboard/requests"}>All Request</Link>
              </Button>
            </>
          }
        />
        <div>
          <div className="grid md:grid-cols-2 gap-4">
            <TotalSales />
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              <StatCard
                percentage
                value={45.6}
                label="Order rate"
                trend="+25%"
                trendDirection="up"
                icon={<Menu className="w-5 h-5" />}
                gradient="black"
              />
              <StatCard
                percentage
                value={45.6}
                label="Order rate"
                trend="+25%"
                trendDirection="up"
                icon={<CalendarArrowDown className="w-5 h-5" />}
                gradient="black"
              />
              <StatCard
                percentage
                value={45.6}
                label="Order rate"
                trend="+25%"
                trendDirection="up"
                icon={<CalendarArrowDown className="w-5 h-5" />}
                gradient="black"
              />
              <StatCard
                percentage
                value={45.6}
                label="Order rate"
                trend="+25%"
                trendDirection="up"
                icon={<CalendarArrowDown className="w-5 h-5" />}
                gradient="black"
              />
            </div>
            <RegisteredUsers />
            <RegisteredVehicle />
          </div>
        </div>
      </div>
    </div>
  );
}
