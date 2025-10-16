"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTitle, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";
interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function TruckProcesing({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent className="p-5 py-15">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            {/* <Image  /> */}
            <LoadingSpinner />
            <h3 className="text-primaryT text-2xl font-semibold">
              Processing.......
            </h3>
          </div>
          <div>The admin will get back to you</div>
          <div>Please check your mail box</div>
          <Button
            asChild
            className="bg-secondaryT hover:bg-secondaryT/90 text-white hover:text-white mt-4"
          >
            <Link href={"/dashboard"}>Back to Home </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="relative h-24 w-24">
        {[...Array(8)].map((_, index) => {
          const rotation = (index * 360) / 8;
          const delay = index * 0.15;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${rotation}deg) translateY(-42px)`,
              }}
            >
              <div
                className="h-full w-full rounded-full animate-pulse"
                style={{
                  backgroundColor: `hsl(${45 - index * 15}, 100%, ${
                    60 - index * 5
                  }%)`,
                  animationDelay: `${delay}s`,
                  animationDuration: "1.2s",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
