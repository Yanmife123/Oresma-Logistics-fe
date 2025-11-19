"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoadingSpinner } from "@/components/shared/loading/loadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { FinishAssignmentRequest } from "@/_lib/api/rider/assignment";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string;
}

export function RouteProcess({ open, onOpenChange, id }: Props) {
  // ❗ Always call hooks unconditionally
  const {
    data: Result,
    isPending,
    isError,
    error: Error,
  } = useQuery({
    queryKey: ["startAssignment", id],
    queryFn: () => FinishAssignmentRequest(id),
    enabled: open, // 👈 ensures it only runs when open = true
  });

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent className="p-5 py-15">
        {isPending && (
          <div className="flex flex-col items-center">
            <div className="mb-4">
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
              <X className="text-red-700" size={32} />
              <h3 className="text-primaryT text-2xl font-semibold">
                Failed to Confirm
              </h3>
            </div>
            <div>{Error?.message}</div>
          </div>
        )}

        {!isPending && !isError && (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Image src={"/wallet.svg"} alt="wallet" width={96} height={96} />
              <h3 className="text-primaryT text-2xl font-semibold">
                Confirmed
              </h3>
            </div>
            <div>{Result?.message}</div>
            <Button asChild className="mt-4">
              <Link href={"/dashboard"}>Back to Home</Link>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
