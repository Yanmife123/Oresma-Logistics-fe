import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WalletCard() {
  return (
    <Card className="p-10 px-6 bg-[#F8F9FC] border-none shadow-[0px_4px_4px_0px_#00000040] max-w-lg w-full">
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col gap-5">
          <h3 className="text-[#AEAFB2]">My account</h3>
          <div className="text-[#212529]">
            <div className="font-semibold  text-black md:text-xl text-sm">
              Oresma Riders{" "}
            </div>
            <div className="text-[#AEAFB2] md:text-normal text-sm">
              ID no: 345623 44544566
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[#AEAFB2] font-semibold md:text-xl text-sm">
            Available balance
          </h3>
          <div className="md:text-2xl font-semibold text-black md:text-normal text-lg">
            68,456. 34{" "}
            <span className="text-[#AEAFB2] md:text-normal text-sm">.N</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-row gap-5 items-center ">
          <Button className="shadow-[0px_4px_4px_0px_#00000040] py-5 px-5 rounded-[10px] font-semibold cursor-pointer">
            Transfer money
          </Button>
          <Button className="py-5 px-5 text-primaryT border-none shadow-[0px_4px_4px_0px_#00000040] bg-[#E6E8EB] rounded-[10px] font-semibold cursor-pointer">
            Link account
          </Button>
        </div>
      </div>
    </Card>
  );
}
