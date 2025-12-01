"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
interface Props {
  id: string;
}
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";

import { DeclineAssignmentRequest } from "@/_lib/api/rider/assignment";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/shared/toast";

export function EndProcess({ id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();

  const mutation = useMutation({
    mutationFn: DeclineAssignmentRequest,
    mutationKey: ["startAssignment"],
    onSuccess: (data) => {
      showToast.success("Trip has been Declined", data.message);
      navigate.push("/rider/dashboard/activeRequests");
    },
    onError: (error) => {
      showToast.error("Failed to Decline Reuqest", error.message);
    },
  });
  const Cancel = () => {
    setIsOpen(false);
  };
  const Continue = async () => {
    await mutation.mutateAsync(id);
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant={"destructive"}
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Decline Trip
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <AlertDialogHeader className="text-primaryT  rounded-t-lg flex flex-col items-start justify-between py-4">
          <div className="flex-1">
            <AlertDialogTitle className="text-2xl">
              Decline this Requests
            </AlertDialogTitle>
            <AlertDialogDescription className="text-primaryT/80">
              Are you sure you want to decline this ride request
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="outline" onClick={Cancel} className="cursor-pointer">
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={Continue}
            className="cursor-pointer"
            disabled={mutation.isPending || mutation.isSuccess}
          >
            {mutation.isPending ? "Declining Trip...." : "continue"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
