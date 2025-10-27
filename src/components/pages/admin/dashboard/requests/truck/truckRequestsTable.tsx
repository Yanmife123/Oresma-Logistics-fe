"use client";
import {
  BaseTable,
  type RowAction,
} from "@/components/shared/table/table-style";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Processnvoice } from "../processing";
import CreateInoiveModal from "../invoiceCreateModal";
export interface Requests {
  id: number;
  vehicle_type: string;
  vehicle_id: string;
  pickup_location: string;
  no_of_stops: number;
  final_destination: string;
  date_of_trip: string;
}

export function TruckRequestsTable() {
  const navigate = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const data: Requests[] = [
    {
      id: 1,
      vehicle_type: "Isuzu m100/600",
      vehicle_id: "#1234",
      pickup_location: "Abule St",
      no_of_stops: 3,
      final_destination: "Ikorodu",
      date_of_trip: "12-06-2025",
    },
    {
      id: 2,
      vehicle_type: "Isuzu m100/600",
      vehicle_id: "#1234",
      pickup_location: "Ikeja",
      no_of_stops: 0,
      final_destination: "Ojota",
      date_of_trip: "12-06-2025",
    },
    {
      id: 3,
      vehicle_type: "Isuzu m100/600",
      vehicle_id: "#1234",
      pickup_location: "Abule St",
      no_of_stops: 4,
      final_destination: "Berger",
      date_of_trip: "12-06-2025",
    },
    {
      id: 4,
      vehicle_type: "Isuzu m100/600",
      vehicle_id: "#1234",
      pickup_location: "Ikorodu",
      no_of_stops: 1,
      final_destination: "Ikorodu",
      date_of_trip: "12-06-2025",
    },
    {
      id: 5,
      vehicle_type: "Isuzu m100/600",
      vehicle_id: "#1234",
      pickup_location: "Berger",
      no_of_stops: 1,
      final_destination: "Ikorodu",
      date_of_trip: "12-06-2025",
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
      label: "Create Invoice",
      variant: "default",
      onClick: (row) => {
        console.log("Accepted:", row.id);
        setOpenModal(true);
        // navigate.push(`/admin/dashboard/requests/${row.id}/route`);
      },
    },
  ];
  return (
    <div>
      <BaseTable
        columns={[
          { key: "vehicle_type", label: "Vehicle type" },
          { key: "vehicle_id", label: "Vehicle ID" },
          { key: "pickup_location", label: "Pick up location" },
          { key: "no_of_stops", label: "No of stops" },
          { key: "final_destination", label: "Final destination" },
          { key: "date_of_trip", label: "Date of trip" },
        ]}
        data={data}
        rowActions={rowActions}
        onRowClick={(row) =>
          navigate.push(`/admin/dashboard/requests/${row.id}`)
        }
      />

      <CreateInoiveModal
        open={openModal}
        onOpenChange={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
}
