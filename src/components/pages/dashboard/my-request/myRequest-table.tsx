"use client";
import { useQuery } from "@tanstack/react-query";
import { getMyRequest } from "@/_lib/api/dashboard/rider/ride-request";
import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
import { AllUserRequests } from "@/_lib/type/request/user-request";
import { BaseTable } from "@/components/shared/table/table-style";
import { StatusBadge } from "@/components/shared/dashboard/status-card";
import { useRouter } from "next/navigation";

export default function MyRequestTable() {
  const {
    data: AllUserRequest,
    isPending,
    isError,
    error: Error,
  } = useQuery<AllUserRequests>({
    queryFn: getMyRequest,
    queryKey: ["UserRequests"],
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

  if (!isPending && !isError && AllUserRequest.count > 0) {
    return (
      <div>
        <BaseTable
          columns={[
            { key: "vehicleType", label: "Vehicle type" },
            { key: "_id", label: "Vehicle ID" },
            { key: "pickup.address", label: "Pick up location" },
            { key: "dropoff.address", label: "Final destination" },
            {
              key: "pricing.total",
              label: "Total fee",
              render(value, row) {
                return (
                  <div>
                    {" "}
                    {`${row.pricing.currency === "NGN" ? "₦" : "$"} ${
                      row.pricing.total
                    }`}
                  </div>
                );
              },
            },
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
          //   onRowClick={(row) =>
          //     navigate.push(`/dashboard/my-requests/${row._id}`)
          //   }
        />
      </div>
    );
  }
}
