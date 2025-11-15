"use client";
import {
  BaseTable,
  // type RowAction,
} from "@/components/shared/table/table-style";
// import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getAssignmentRide,
  AcceptAssignmentRequest,
  DeclineAssignmentRequest,
} from "@/_lib/api/rider/assignment";
import { AssignmentRequests } from "@/_lib/type/request/rider-assignment";
import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
import { Button } from "@/components/ui/button";
import { RideRequest } from "@/_lib/type/request/rider-request";

export function RequestTable() {
  const {
    data: AssignmentRequest,
    isPending,
    isError,
    error: Error,
  } = useQuery<AssignmentRequests>({
    queryFn: getAssignmentRide,
    queryKey: ["AssignmentRides"],
  });

  const AcceptRequest = ({ id }: { id: string }) => {
    const mutation = useMutation({
      mutationFn: AcceptAssignmentRequest,
      mutationKey: ["AcceptAssignment"],
    });

    const handlerSubmit = async () => {
      await mutation.mutateAsync(id);
    };

    return <Button onClick={handlerSubmit}>Accept</Button>;
  };
  const DeclineRequest = ({ id }: { id: string }) => {
    const mutation = useMutation({
      mutationFn: DeclineAssignmentRequest,
      mutationKey: ["AcceptAssignment"],
    });

    const handlerSubmit = async () => {
      await mutation.mutateAsync(id);
    };

    return (
      <Button variant={"outline"} onClick={handlerSubmit}>
        Accept
      </Button>
    );
  };

  const RowActions = ({ row }: { row: RideRequest }) => {
    return (
      <div className="flex gap-1 sm:gap-2">
        {row.status === "pending" && (
          <>
            <DeclineRequest id={row._id} /> <AcceptRequest id={row._id} />
          </>
        )}
      </div>
    );
  };

  // const navigate = useRouter();

  if (isPending) {
    return <SkeletonCardList />;
  }

  if (!isPending && isError) {
    if (isError) {
      return <div>{Error.message} </div>;
    }
  }

  if (!isPending && AssignmentRequest?.count === 0) {
    return <div className="text-red-500">No Assignment Requests</div>;
  }

  return (
    <div>
      <BaseTable
        columns={[
          { key: "vehicleType", label: "Vehicle type" },
          { key: "_id", label: "Vehicle ID" },
          { key: "pickup.address", label: "Pick up location" },
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
          { key: "status", label: "Status" },
        ]}
        data={AssignmentRequest?.rideRequests}
        // rowActions={RowActions}
        rowActions2={(row) => <RowActions row={row} />}
        // onRowClick={(row) =>
        //   navigate.push(`/rider/dashboard/requests/${row._id}`)
        // }
      />
    </div>
  );
}
