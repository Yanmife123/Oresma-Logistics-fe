import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { Suspense } from "react";
import { PeriodSelector } from "@/components/shared/dashboard/period-selector";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/dashboard/stats-card";
import { Menu, CalendarArrowDown } from "lucide-react";
import RegisteredUsers from "@/components/pages/admin/dashboard/registeredUserChart";
import { RegisteredVehicle } from "@/components/pages/admin/dashboard/registeredVehicle";
import Link from "next/link";
export default function UsersPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4 w-full">
        <PageHeader2
          title="Users"
          actions={
            <>
              <Suspense fallback={""}>
                <PeriodSelector
                  options={[{ label: "30 Days", value: "30days" }]}
                  paramName="userDashboardFilter"
                  className="cursor-pointer"
                />
              </Suspense>
              <Button className="rounded-full p-6 cursor-pointer" asChild>
                <Link href={"/admin/dashboard/users/all"}>All Users</Link>
              </Button>
              <Button className="rounded-full p-6 cursor-pointer" asChild>
                <Link href={"/admin/dashboard/users/riders"}>All Riders</Link>
              </Button>
            </>
          }
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard
          value={2456}
          label="No. of invoices"
          trend="+25%"
          trendDirection="up"
          icon={<Menu className="w-5 h-5" />}
          gradient="black"
        />
        <StatCard
          value={245}
          label="Registered vehicles"
          trend="+25%"
          trendDirection="up"
          icon={<CalendarArrowDown className="w-5 h-5" />}
          gradient="black"
        />
        <StatCard
          value={245}
          label="Registered vehicles"
          trend="+25%"
          trendDirection="up"
          icon={<CalendarArrowDown className="w-5 h-5" />}
          gradient="black"
        />
        <StatCard
          value={2345}
          label="No of users"
          trend="+25%"
          trendDirection="up"
          icon={<CalendarArrowDown className="w-5 h-5" />}
          gradient="black"
        />
        <StatCard
          value={2345}
          label="No of users"
          trend="+25%"
          trendDirection="up"
          icon={<CalendarArrowDown className="w-5 h-5" />}
          gradient="black"
        />
        <StatCard
          percentage
          value={45.6}
          label="No of users"
          trend="+25%"
          trendDirection="up"
          icon={<CalendarArrowDown className="w-5 h-5" />}
          gradient="black"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <RegisteredUsers />
        <RegisteredVehicle />
      </div>
    </div>
  );
}
