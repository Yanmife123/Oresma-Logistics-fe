import { DataTableCard } from "@/components/shared/dashboard/data-table-pie-card";
export function RegisteredVehicle() {
  const registeredVehiclesData = [
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
  ];
  return (
    <DataTableCard
      title="Registered Vehicles"
      data={registeredVehiclesData}
      percentage={50}
      percentageLabel="OCCUPIED"
      headers={["Car", "ID no"]}
      oddRowColor="#021533"
      evenRowColor="#f75720"
    />
  );
}
