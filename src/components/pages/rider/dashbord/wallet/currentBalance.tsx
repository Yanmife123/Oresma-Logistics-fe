"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AddBankAccount } from "./Add-bank-account";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleRiderWallet } from "@/_lib/api/wallet/get-all-wallet";
import SkeletonCard from "@/components/shared/skeleton/single-card-skeleton";
import { showToast } from "@/components/shared/toast";
import { SingleWallet } from "@/_lib/type/wallets/wallet";
import { AddWalletPin } from "./add-wallet-pin";
import WithdrawRequestsFormModal from "./withdraw-requests-form-modal";
import { useSearchParams } from "next/navigation";
import { useRouterParams } from "@/_lib/functions/params-router-function";

export function RiderWalletCard() {
  const [isAddBankOpen, setIsAddBankOpen] = useState(false);
  const searchParams = useSearchParams();
  const withdrawParam = searchParams.get("withdraw");
  const { updateParam } = useRouterParams();
  const {
    data: Wallet,
    isPending,
    error: Error,
  } = useQuery<SingleWallet>({
    queryKey: ["singleRiderWallet"],
    queryFn: getSingleRiderWallet,
  });
  // const router = useRouter();
  if (isPending)
    return (
      <div>
        <SkeletonCard />
      </div>
    );
  if (!isPending && Error) {
    showToast.error("Error", "Failed to load wallet data");
    return (
      <div className="">
        <SkeletonCard />
      </div>
    );
  }

  return (
    <>
      <Card className="p-10 px-6 bg-[#F8F9FC] border-none shadow-[0px_4px_4px_0px_#00000040] max-w-lg w-full">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-5">
            <h3 className="text-[#AEAFB2]">My account</h3>
            <div className="text-[#212529]">
              <div className="font-semibold  text-black md:text-xl text-sm">
                Oresma Riders{" "}
              </div>
              <div className="text-[#AEAFB2] md:text-normal text-sm">
                Id: {Wallet.wallet.userId}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-[#AEAFB2] font-semibold md:text-xl text-sm">
              Available balance
            </h3>
            <div className="md:text-2xl font-semibold text-black md:text-normal text-lg">
              {Wallet.wallet.balance}{" "}
              <span className="text-[#AEAFB2] md:text-normal text-sm">
                {Wallet.wallet.currency === "NGN" ? "₦" : "$"}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-row gap-5 items-center ">
            <Button
              className="shadow-[0px_4px_4px_0px_#00000040] py-5 px-5 rounded-[10px] font-semibold cursor-pointer"
              onClick={() => {
                updateParam({ inputValue: "form", paramName: "withdraw" });
              }}
            >
              Withdrawal Money
            </Button>
            <Button
              variant={"ghost"}
              className="py-5 px-5 text-primaryT border-none shadow-[0px_4px_4px_0px_#00000040] bg-[#E6E8EB] rounded-[10px] font-semibold cursor-pointer"
              onClick={() => setIsAddBankOpen(true)}
            >
              Add account
            </Button>
          </div>
        </div>
      </Card>
      <AddBankAccount
        isOpen={isAddBankOpen}
        onClose={() => setIsAddBankOpen(false)}
      />
      {withdrawParam === "form" && <WithdrawRequestsFormModal />}
      {!Wallet.wallet.isPinSet && <AddWalletPin />}
    </>
  );
}
