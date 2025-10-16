import { Booking } from "@/components/pages/dashboard/rider/booking";
import { AvailableRide } from "@/components/pages/dashboard/rider/available-ride";
import { Suspense } from "react";

export default function BookServicePage() {
  return (
    <div className="container mx-auto space-y-6 ">
      {/* <PageHeader
        title="Book Services"
        description="Where would you like to go to?"
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Route Finder" },
        ]}
      /> */}

      <div className="flex flex-col-reverse gap-6 overflow-x-auto lg:flex-row">
        <Suspense
          fallback={
            <div className="h-96 w-full animate-pulse rounded-lg bg-muted lg:w-80" />
          }
        >
          <AvailableRide />
        </Suspense>

        <div className="min-w-0 flex-1">
          <Booking />
        </div>
      </div>
    </div>
  );
}
