"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoadingSpinner } from "@/components/shared/loading/loadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { FinishAssignmentRequest } from "@/_lib/api/rider/assignment";
interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string;
}
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
export function RouteProcess({ open, onOpenChange, id }: Props) {
  const {
    data: Result,
    isPending,
    isError,
    error: Error,
  } = useQuery({
    queryKey: ["startAssignment"],
    queryFn: () => FinishAssignmentRequest(id),
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent className="p-5 py-15">
        {isPending && (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {/* <Image  /> */}
              <LoadingSpinner color="blue" size="md" />
              <h3 className="text-primaryT text-2xl font-semibold">
                Processing.......
              </h3>
            </div>
            <div>The admin will get back to you</div>
            <div>Please check your mail box</div>
          </div>
        )}
        {!isPending && isError && (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {/* <Image  /> */}
              <X className="text-red-700" size="md" />
              <h3 className="text-primaryT text-2xl font-semibold">
                Failed of Confirmed
              </h3>
            </div>
            <div>{Error.message}</div>
          </div>
        )}
        {!isPending && !isError && (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {/* <Image  /> */}
              <Image src={"/wallet.svg"} alt="wallet" width={96} height={96} />
              <h3 className="text-primaryT text-2xl font-semibold">
                Confirmed
              </h3>
            </div>
            {/* <div>Your payment has been processed</div>
            <div>Please check your wallet</div> */}
            <div>{Result.message}</div>
            <Button asChild className=" mt-4">
              <Link href={"/dashboard"}>Back to Home </Link>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
