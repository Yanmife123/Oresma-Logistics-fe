"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoadingSpinner } from "@/components/shared/loading/loadingSpinner";
interface Props {
  message: string;
}
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Processnvoice({ message }: Props) {
  return (
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogContent className="p-5 py-15">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            {/* <Image  /> */}
            <Image src={"/wallet.svg"} alt="wallet" width={96} height={96} />
            <h3 className="text-primaryT text-2xl font-semibold">Sent</h3>
          </div>
          {message}
          <Button asChild className=" mt-4">
            <Link href={"/admin/dashboard/requests"}>Back to request </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Processing() {
  return (
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogContent className="p-5 py-15">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            {/* <Image  /> */}
            <LoadingSpinner color="orange" size="md" />
            <h3 className="text-primaryT text-2xl font-semibold">
              Processing.......
            </h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
