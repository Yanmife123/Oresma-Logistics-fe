"use client";
import {
  BaseTable,
  // type RowAction,
} from "@/components/shared/table/table-style";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { Processnvoice } from "../processing";
import CreateInoiveModal from "../invoiceCreateModal";
import { adminGetRideRequests } from "@/_lib/api/admin/get-ride-request";
import { useQuery } from "@tanstack/react-query";
import {
  RideRequest,
  RideRequestsResponse,
} from "@/_lib/type/request/rider-request";
import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/dashboard/status-card";

export function RequestsTable() {
  const navigate = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [seletedId, setSelectedId] = useState<string>("");

  const {
    data: Requests,
    isPending,
    isError,
    error: Error,
  } = useQuery<RideRequestsResponse>({
    queryFn: adminGetRideRequests,
    queryKey: ["AdminRideRequest"],
    refetchInterval: 4 * 60 * 1000, // 2 minutes
    refetchOnReconnect: true,
  });

  useEffect(() => {
    console.log(openModal);
  }, [openModal]);

  const RowActions = ({ row }: { row: RideRequest }) => {
    return (
      <div className="flex gap-1 sm:gap-2">
        {(row.status === "pending" || row.status === "payment_failed") && (
          <DeclineRequest id={row._id} />
        )}
        {!row.invoiceSent ? (
          <CreateInvoice id={row._id} />
        ) : row.status === "payment_failed" || row.status === "pending" ? (
          <ResendInvoice id={row._id} />
        ) : null}
      </div>
    );
  };

  const DeclineRequest = ({ id }: { id: string }) => {
    return (
      <Button
        variant={"outline"}
        onClick={(e) => {
          e.stopPropagation();
          console.log("Declined Request" + id);
        }}
      >
        Decline
      </Button>
    );
  };

  const CreateInvoice = ({ id }: { id: string }) => {
    return (
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setOpenModal(true);
          setSelectedId(id);
        }}
      >
        Send Invoice
      </Button>
    );
  };

  const ResendInvoice = ({ id }: { id: string }) => {
    return (
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedId(id);
          setOpenModal(true);
        }}
      >
        Resend Invoice
      </Button>
    );
  };

  if (isPending) {
    return <SkeletonCardList />;
  }
  if (isError) {
    return <div>{Error.message} </div>;
  }

  if (Requests?.count === 0) {
    return <div className="text-red-500">No Requests</div>;
  }

  if (!isPending && !Error && Requests?.count > 0) {
    return (
      <div>
        <BaseTable
          columns={[
            { key: "vehicleType", label: "Vehicle type" },
            { key: "_id", label: "Vehicle ID" },
            { key: "pickup.address", label: "Pick up location" },
            // { key: "no_of_stops", label: "No of stops" },
            { key: "dropoff.address", label: "Final destination" },
            { key: "userId.name", label: "Customer" },
            {
              key: "invoiceSent",
              label: "Invoice Sent",
              render: (value) => (
                <div>
                  {value ? (
                    <div className="text-green-500">Sent</div>
                  ) : (
                    <div className="text-red-500">Not Sent</div>
                  )}
                </div>
              ),
            },
            {
              key: "status",
              label: "Status",
              render(value, row) {
                return <StatusBadge status={value} />;
              },
            },
          ]}
          data={Requests.rideRequests!}
          rowActions2={(row) => <RowActions row={row} />}
          onRowClick={(row) =>
            navigate.push(`/admin/dashboard/requests/${row._id}`)
          }
        />

        <CreateInoiveModal
          open={openModal}
          onOpenChange={() => {
            setOpenModal(false);
            setSelectedId("");
          }}
          id={seletedId}
        />
      </div>
    );
  }
}
