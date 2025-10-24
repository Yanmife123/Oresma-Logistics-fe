"use client";
import {
  BaseTable,
  type RowAction,
} from "@/components/shared/table/table-style";
import { useRouter } from "next/navigation";

interface Trip {
  id: number;
  vehicleType: string;
  vehicleId: string;
  pickupLocation: string;
  noOfStops: number;
  finalDestination: string;
  dateOfTrip: string;
}

export function RequestTable() {
  const sampleData: Trip[] = [
    {
      id: 1,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1234",
      pickupLocation: "Abule St",
      noOfStops: 3,
      finalDestination: "Morndu",
      dateOfTrip: "12-06-2025",
    },
    {
      id: 2,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1234",
      pickupLocation: "Ikoyi",
      noOfStops: 0,
      finalDestination: "Ojota",
      dateOfTrip: "12-06-2025",
    },
    {
      id: 3,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1234",
      pickupLocation: "Abule St",
      noOfStops: 4,
      finalDestination: "Senger",
      dateOfTrip: "12-06-2025",
    },
    {
      id: 4,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1234",
      pickupLocation: "Ikoroodu",
      noOfStops: 1,
      finalDestination: "Morndu",
      dateOfTrip: "12-06-2025",
    },
    {
      id: 5,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1234",
      pickupLocation: "Abule St",
      noOfStops: 0,
      finalDestination: "Ikoroodu",
      dateOfTrip: "12-06-2025",
    },
    {
      id: 6,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1235",
      pickupLocation: "Lekki",
      noOfStops: 2,
      finalDestination: "VI",
      dateOfTrip: "12-07-2025",
    },
    {
      id: 7,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1236",
      pickupLocation: "Yaba",
      noOfStops: 1,
      finalDestination: "Surulere",
      dateOfTrip: "12-07-2025",
    },
    {
      id: 8,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1237",
      pickupLocation: "Ikeja",
      noOfStops: 3,
      finalDestination: "Ajah",
      dateOfTrip: "12-07-2025",
    },
    {
      id: 9,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1238",
      pickupLocation: "Bariga",
      noOfStops: 2,
      finalDestination: "Shomolu",
      dateOfTrip: "12-07-2025",
    },
    {
      id: 10,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1239",
      pickupLocation: "Mushin",
      noOfStops: 1,
      finalDestination: "Onipanu",
      dateOfTrip: "12-07-2025",
    },
    {
      id: 11,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1240",
      pickupLocation: "Gbagada",
      noOfStops: 4,
      finalDestination: "Ikoyi",
      dateOfTrip: "12-08-2025",
    },
    {
      id: 12,
      vehicleType: "Isuzu n400/1000",
      vehicleId: "#1241",
      pickupLocation: "Magodo",
      noOfStops: 2,
      finalDestination: "Lekki",
      dateOfTrip: "12-08-2025",
    },
  ];
  const rowActions: RowAction[] = [
    {
      label: "Decline",
      variant: "outline",
      onClick: (row) => {
        console.log("Declined:", row.id);
      },
    },
    {
      label: "Accept",
      variant: "default",
      onClick: (row) => {
        console.log("Accepted:", row.id);
        navigate.push(`/rider/dashboard/requests/${row.id}/route`);
      },
    },
  ];
  const navigate = useRouter();
  return (
    <div>
      <BaseTable
        columns={[
          { key: "vehicleType", label: "Vehicle type" },
          { key: "vehicleId", label: "Vehicle ID" },
          { key: "pickupLocation", label: "Pick up location" },
          { key: "noOfStops", label: "No of stops" },
          { key: "finalDestination", label: "Final destination" },
          { key: "dateOfTrip", label: "Date of trip" },
        ]}
        data={sampleData}
        rowActions={rowActions}
        onRowClick={(row) =>
          navigate.push(`/rider/dashboard/requests/${row.id}`)
        }
      />
    </div>
  );
}
