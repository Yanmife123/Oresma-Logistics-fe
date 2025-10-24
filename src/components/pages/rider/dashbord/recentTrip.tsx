import { DataTableCard } from "@/components/shared/dashboard/data-table-pie-card";
export function RecentTrip() {
  const recentTripsData = [
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
  ];
  return (
    <DataTableCard
      title="Recent trips"
      data={recentTripsData}
      percentage={50}
      percentageLabel="OCCUPIED"
      headers={["Car", "ID no"]}
      highlighted
      oddRowColor=" #021533"
      evenRowColor="#f75720"
    />
  );
}
