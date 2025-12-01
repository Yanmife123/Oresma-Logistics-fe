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

import { StartAssignmentRequest } from "@/_lib/api/rider/assignment";

import { showToast } from "@/components/shared/toast";

export function StartProcess({ id }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: StartAssignmentRequest,
    mutationKey: ["startAssignment"],
    onSuccess: (data) => {
      showToast.success("Trip has Started", data.message);
      setIsOpen(false);
    },
    onError: (error) => {
      showToast.error("Failed to start trip", error.message);
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
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Start Trip
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
              Start this Trip
            </AlertDialogTitle>
            <AlertDialogDescription className="text-primaryT/80">
              Are you sure you want to Start this trip
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="outline" onClick={Cancel} className="cursor-pointer">
            Cancel
          </Button>
          <Button
            onClick={Continue}
            className="cursor-pointer"
            disabled={mutation.isPending || mutation.isSuccess}
          >
            {mutation.isPending ? "Starting Trip...." : "Start Trip"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
