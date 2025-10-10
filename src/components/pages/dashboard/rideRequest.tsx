"use client";
import { PeriodSelector } from "@/components/shared/dashboard/period-selector";
import { AreaChartComponent } from "@/components/shared/dashboard/area-chart";
import { Suspense } from "react";

const rideRequestsData = [
  { name: "June 12", value: 18000 },
  { name: "June 13", value: 22000 },
  { name: "June 14", value: 19000 },
  { name: "June 15", value: 25000 },
  { name: "June 16", value: 21000 },
  { name: "June 17", value: 23000 },
  { name: "June 18", value: 24000 },
];
export function RideRequest({ color }: { color?: string }) {
  return (
    <AreaChartComponent
      title="Your ride requests
Last 7 days"
      color={color || undefined}
      renderBatch={() => {
        return (
          <div>
            <Suspense>
              <PeriodSelector
                paramName="rideRequestDate"
                options={[
                  { label: "Last 7 days", value: "7days" },
                  { label: "Last 2 weeks", value: "2weeks" },
                  { label: "Last 1 month", value: "1month" },
                  { label: "Last 2 months", value: "2months" },
                  { label: "Last 1 year", value: "1year" },
                ]}
              />
            </Suspense>
          </div>
        );
      }}
      totalValue={"23,460"}
      data={rideRequestsData}
    />
  );
}
