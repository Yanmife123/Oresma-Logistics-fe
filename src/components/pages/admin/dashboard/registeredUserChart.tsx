import { DataTableCard } from "@/components/shared/dashboard/data-table-pie-card";
export default function RegisteredUsers() {
  const user = [
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
    { label: "Sedan Truck", value: "#104244" },
  ];
  return (
    <DataTableCard
      title="Registered User"
      headers={["Car", "ID no"]}
      percentage={50}
      percentageLabel="OCCUPIED"
      //   highlighted
      oddRowColor="#B1B6C0"
      evenRowColor="#021533"
      data={user}
    />
  );
}
