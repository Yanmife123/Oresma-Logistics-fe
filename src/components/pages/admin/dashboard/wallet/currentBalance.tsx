"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getAdminWalletSummary } from "@/_lib/api/wallet/get-all-wallet";
import { AdminWalletSummaryResponse } from "@/_lib/type/wallets/wallet";
import SkeletonCard from "@/components/shared/skeleton/single-card-skeleton";

export function WalletCard() {
  const {
    data: walletSummary,
    isLoading,
    isError,
  } = useQuery<AdminWalletSummaryResponse>({
    queryKey: ["admin-wallet-summary"],
    queryFn: getAdminWalletSummary,
    staleTime: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-6 mt-4 max-w-5xl">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }
  if (isError || !walletSummary) {
    return <div>Error loading wallet summary.</div>;
  }
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-4 max-w-7xl">
      <Card className="p-10 px-6 bg-[#F8F9FC] border-none shadow-[0px_4px_4px_0px_#00000040] w-full">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-5 justigy-end items-center">
            <h3 className="text-[#AEAFB2]">Total Wallets</h3>
            <div className="text-[#212529]">
              <div className="font-semibold  text-black md:text-xl text-sm">
                {walletSummary.data.overview.totalWallets} Wallets
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-end items-center">
            <h3 className="text-[#AEAFB2] font-semibold md:text-xl text-sm">
              Total Balance
            </h3>
            <div className="md:text-2xl font-semibold text-black md:text-normal text-lg">
              {walletSummary.data.overview.totalBalance}{" "}
              <span className="text-[#AEAFB2] md:text-normal text-sm">
                {walletSummary.data.currencyBreakdown[0]?.currency}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* <div className="flex flex-row gap-5 items-center ">
            <Button className="shadow-[0px_4px_4px_0px_#00000040] py-5 px-5 rounded-[10px] font-semibold cursor-pointer">
              Transfer money
            </Button>
            <Button
              variant={"ghost"}
              className="py-5 px-5 text-primaryT border-none shadow-[0px_4px_4px_0px_#00000040] bg-[#E6E8EB] rounded-[10px] font-semibold cursor-pointer"
            >
              Link account
            </Button>
          </div> */}
        </div>
      </Card>
      <Card className="p-10 px-6 bg-[#F8F9FC] border-none shadow-[0px_4px_4px_0px_#00000040]  w-full">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-5 justify-end items-center ">
            <h3 className="text-[#AEAFB2]">Average Balance</h3>
            <div className="text-[#212529]">
              <div className="font-semibold  text-black md:text-xl text-sm">
                {walletSummary.data.overview.averageBalance}{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-end items-center">
            <h3 className="text-[#AEAFB2] font-semibold md:text-xl text-sm">
              Total Transactions
            </h3>
            <div className="md:text-2xl font-semibold text-black md:text-normal text-lg">
              {walletSummary.data.overview.totalTransactions}{" "}
              <span className="text-[#AEAFB2] md:text-normal text-sm">
                {walletSummary.data.currencyBreakdown[0]?.currency}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* <div className="flex flex-row gap-5 items-center ">
            <Button className="shadow-[0px_4px_4px_0px_#00000040] py-5 px-5 rounded-[10px] font-semibold cursor-pointer">
              Transfer money
            </Button>
            <Button
              variant={"ghost"}
              className="py-5 px-5 text-primaryT border-none shadow-[0px_4px_4px_0px_#00000040] bg-[#E6E8EB] rounded-[10px] font-semibold cursor-pointer"
            >
              Link account
            </Button>
          </div> */}
        </div>
      </Card>
      <Card className="p-10 px-6 bg-[#F8F9FC] border-none shadow-[0px_4px_4px_0px_#00000040]  w-full">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-5 items-center justify-end">
            <h3 className="text-[#AEAFB2]">Active Wallets</h3>
            <div className="text-[#212529]">
              <div className="font-semibold  text-black md:text-xl text-sm">
                {walletSummary.data.statusBreakdown.active} Wallets
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-end">
            <h3 className="text-[#AEAFB2] ">Suspended Wallets</h3>
            <div className="md:text-2xl font-semibold text-black md:text-normal text-lg">
              {walletSummary.data.statusBreakdown.suspended} Wallets
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* <div className="flex flex-row gap-5 items-center ">
            <Button className="shadow-[0px_4px_4px_0px_#00000040] py-5 px-5 rounded-[10px] font-semibold cursor-pointer">
              Transfer money
            </Button>
            <Button
              variant={"ghost"}
              className="py-5 px-5 text-primaryT border-none shadow-[0px_4px_4px_0px_#00000040] bg-[#E6E8EB] rounded-[10px] font-semibold cursor-pointer"
            >
              Link account
            </Button>
          </div> */}
        </div>
      </Card>
      <Card className="p-10 px-6 bg-[#F8F9FC] border-none shadow-[0px_4px_4px_0px_#00000040]  w-full">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-5 items-center justify-end">
            <h3 className="text-[#AEAFB2]">Frozen Wallets</h3>
            <div className="text-[#212529]">
              <div className="font-semibold  text-black md:text-xl text-sm">
                {walletSummary.data.statusBreakdown.frozen} Wallets
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-end">
            <h3 className="text-[#AEAFB2] ">Closed Wallets</h3>
            <div className="md:text-2xl font-semibold text-black md:text-normal text-lg">
              {walletSummary.data.statusBreakdown.closed} Wallets
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* <div className="flex flex-row gap-5 items-center ">
            <Button className="shadow-[0px_4px_4px_0px_#00000040] py-5 px-5 rounded-[10px] font-semibold cursor-pointer">
              Transfer money
            </Button>
            <Button
              variant={"ghost"}
              className="py-5 px-5 text-primaryT border-none shadow-[0px_4px_4px_0px_#00000040] bg-[#E6E8EB] rounded-[10px] font-semibold cursor-pointer"
            >
              Link account
            </Button>
          </div> */}
        </div>
      </Card>
    </div>
  );
}
