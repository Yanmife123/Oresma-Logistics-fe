"use client";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getAssignmentRide } from "@/_lib/api/rider/assignment";
import { BaseTable } from "@/components/shared/table/table-style";
import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
import { useRouter } from "next/navigation";
import {
  RideRequestsResponse,
  RideRequest,
} from "@/_lib/type/request/rider-request";
import { StatusBadge } from "@/components/shared/dashboard/status-card";
import { Button } from "@/components/ui/button";

export function ActiveRequestsTable() {
  const {
    data: AllUserRequest,
    isPending,
    isError,
    error: Error,
  } = useQuery<RideRequestsResponse>({
    queryFn: getAssignmentRide,
    queryKey: ["RiderAssignmentRequests"],
    refetchInterval: 60 * 1000,
  });
  const navigate = useRouter();
  if (isPending) {
    return <SkeletonCardList />;
  }

  if (!isPending && isError) {
    if (isError) {
      return <div>{Error.message} </div>;
    }
  }

  if (!isPending && !isError && AllUserRequest.count === 0) {
    return <div className="text-red-500">No Assignment Requests</div>;
  }

  const StartTrip = ({ row }: { row: RideRequest }) => {
    return (
      <Button
        onClick={(e) => {
          e.stopPropagation();
          navigate.push(`/rider/dashboard/activeRequests/${row._id}/route`);
        }}
      >
        Start Trip
      </Button>
    );
  };

  if (!isPending && !isError && AllUserRequest.count > 0) {
    return (
      <div>
        <BaseTable
          columns={[
            { key: "vehicleType", label: "Vehicle type" },
            { key: "_id", label: "Vehicle ID" },
            { key: "pickup.address", label: "Pick up location" },
            { key: "dropoff.address", label: "Final destination" },
            { key: "userId.name", label: "Username" },
            { key: "userId.phone", label: "User Phone" },
            { key: "userId.email", label: "User Email" },
            { key: "referenceCode", label: "Reference Code" },
            {
              key: "status",
              label: "Status",
              render(value, row) {
                return <StatusBadge status={value} />;
              },
            },
            { key: "createdAt", label: "Date Created" },
          ]}
          data={AllUserRequest.rideRequests}
          rowActions2={(row) => {
            return (
              <>
                <StartTrip row={row} />
              </>
            );
          }}
          onRowClick={(row) =>
            navigate.push(`/rider/dashboard/activeRequests/${row._id}`)
          }
        />
      </div>
    );
  }
}
