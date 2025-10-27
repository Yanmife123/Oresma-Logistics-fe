"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoadingSpinner } from "@/components/shared/loading/loadingSpinner";
interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useEffect, useState } from "react";

import Image from "next/image";
export function Processnvoice({ open, onOpenChange }: Props) {
  const [process, setProcess] = useState("process");

  useEffect(() => {
    const simulateProcess = async () => {
      // Simulate processing delay (3 seconds)
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setProcess("done");
    };

    simulateProcess();
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent className="p-5 py-15">
        {process === "process" && (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {/* <Image  /> */}
              <LoadingSpinner color="blue" size="md" />
              <h3 className="text-primaryT text-2xl font-semibold">
                Processing.......
              </h3>
            </div>
          </div>
        )}
        {process === "done" && (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {/* <Image  /> */}
              <Image src={"/wallet.svg"} alt="wallet" width={96} height={96} />
              <h3 className="text-primaryT text-2xl font-semibold">Sent</h3>
            </div>
            <div>Invoice has been sent to</div>
            <div>yamifebalogun@gmail.com</div>
            <Button asChild className=" mt-4">
              <Link href={"/admin/dashboard"}>Back to Home </Link>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
