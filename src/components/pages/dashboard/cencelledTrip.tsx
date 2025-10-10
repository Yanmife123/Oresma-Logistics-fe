import { PeriodSelector } from "@/components/shared/dashboard/period-selector";
import { TripCard } from "@/components/shared/dashboard/trip-card";
import { Suspense } from "react";
const cancelledTrips = [
  {
    date: "14 January 2025",
    type: "High tide",
    estimatedCost: "12,400",
    approvedCost: "11,900",
  },
  {
    date: "14 January 2025",
    type: "Driver Stealth mismatched",
    estimatedCost: "12,400",
    approvedCost: "11,900",
  },
  {
    date: "14 January 2025",
    type: "Unavailable",
    estimatedCost: "12,400",
    approvedCost: "11,900",
  },
  {
    date: "14 January 2025",
    type: "Unavailable",
    estimatedCost: "12,400",
    approvedCost: "11,900",
  },
  {
    date: "14 January 2025",
    type: "Unavailable",
    estimatedCost: "12,400",
    approvedCost: "11,900",
  },
  {
    date: "14 January 2025",
    type: "Unavailable",
    estimatedCost: "12,400",
    approvedCost: "11,900",
  },
  {
    date: "14 January 2025",
    type: "Unavailable",
    estimatedCost: "12,400",
    approvedCost: "11,900",
  },
];

export function CancelledTrip() {
  return (
    <div className="">
      {/* Recent Trips */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent travel info</h2>
          <Suspense>
            <PeriodSelector
              options={[
                { label: "Last 7 days", value: "7days" },
                { label: "Last 2 weeks", value: "2weeks" },
                { label: "Last 1 month", value: "1month" },
                { label: "Last 2 months", value: "2months" },
                { label: "Last 1 year", value: "1year" },
              ]}
              paramName="cancelledTripsPeriod"
              defaultValue="7d"
            />
          </Suspense>
        </div>
        <div className="space-y-3 max-h-[350px] 3 overflow-y-auto my-scroll">
          {cancelledTrips.map((trip, index) => (
            <TripCard
              key={index}
              title={trip.date}
              subtitle={trip.type}
              distance={trip.estimatedCost}
              price={trip.approvedCost}
              image={"/dashboard/car.png"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
