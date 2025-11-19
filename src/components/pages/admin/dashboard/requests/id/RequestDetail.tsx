"use client";
import Image from "next/image";
import { useState } from "react";
// import { Ruler, SquareMenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { CustomerInput } from "@/components/utility/form/customInput";
// import z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { showToast } from "@/components/shared/toast";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { Processnvoice } from "../processing";
import { SingleRiderRequest } from "@/_lib/api/rider/assignment";
import { useQuery, useMutation } from "@tanstack/react-query";
import { AdminDelcineRequest } from "@/_lib/api/admin/decline-requests";
import { SingleRideRequestResponse } from "@/_lib/type/request/rider-request";
import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
import RequestDetailWrapper from "@/components/shared/dashboard/singleRequestDetails/requestDetailWrapper";
import CreateInoiveModal from "../invoiceCreateModal";
export function AdminReqestsDetail({ id }: { id: string }) {
  // type FormSchema = z.infer<typeof InvoiceCreateSchema>;
  // const InvoiceCreateSchema = z.object({
  //   contractor: z.string().min(1, "Contractor name is required"),
  //   email: z.email("Invalid email address"),
  //   date_of_contract: z.string().min(1, "Date of contract is required"),
  //   pickup_location: z.string().min(1, "Pick up location is required"),
  //   first_stop: z.string().min(1, "First stop is required"),
  //   destination: z.string().min(1, "Destination is required"),
  // });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(InvoiceCreateSchema),
  // });
  const [openModal, setOpenModal] = useState(false);

  const {
    data,
    isError,
    isPending,
    error: Error,
  } = useQuery<SingleRideRequestResponse>({
    queryKey: ["Single Request", id],
    queryFn: () => SingleRiderRequest(id),
    refetchInterval: 60 * 1000,
  });

  // const onSubmit: SubmitHandler<FormSchema> = async () => {
  //   setOpenModal(true);
  // };
  const DeclineRequest = ({ id }: { id: string }) => {
    const mutation = useMutation({
      mutationFn: AdminDelcineRequest,
      mutationKey: ["AdminDeclineRequest"],
      onSuccess: (data) => {
        showToast.success("Request Declined", data.message);
      },
      onError(error) {
        showToast.error("Failed to decline", error.message);
      },
    });
    const hanldeClick = async () => {
      await mutation.mutateAsync(id);
    };
    return (
      <Button
        variant={"outline"}
        onClick={(e) => {
          e.stopPropagation();
          hanldeClick();
        }}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Declining....." : " Decline"}
      </Button>
    );
  };
  if (isPending) {
    return <SkeletonCardList />;
  }

  if (!isPending && isError) {
    return <div className="text-red-500">{Error.message}</div>;
  }

  if (!isPending && !isError) {
    return (
      <RequestDetailWrapper request={data.rideRequest}>
        {(data.rideRequest.status === "pending" ||
          data.rideRequest.status === "payment_failed") && (
          <div className="grid grid-cols-1 gap-2">
            <Button
              onClick={(e) => {
                setOpenModal(true);
              }}
            >
              {data.rideRequest.invoiceSent
                ? "Resend Invoice"
                : "Create Invoice"}
            </Button>
            <DeclineRequest id={id} />
          </div>
        )}
        <CreateInoiveModal
          open={openModal}
          onOpenChange={() => {
            setOpenModal(false);
          }}
          id={id}
        />
      </RequestDetailWrapper>
    );
  }
}
