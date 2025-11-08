import { Card } from "@/components/ui/card";
import { MoreVerticalIcon } from "lucide-react";
import Image from "next/image";

type BankCardProps = {
  bankname: string;
  banknumber: string;
  balance: string;
  bankImage: string;
};

const BankCards = [
  {
    id: 1,
    bankname: "First bank",
    banknumber: "32****3456",
    balance: "12,345. 34",
    bankImage: "/admin/wallet/bank 1.png",
  },
  {
    id: 2,
    bankname: "First bank",
    banknumber: "32****3456",
    balance: "12,345. 34",
    bankImage: "/admin/wallet/bank 1.png",
  },
  {
    id: 3,
    bankname: "First bank",
    banknumber: "32****3456",
    balance: "12,345. 34",
    bankImage: "/admin/wallet/bank 1.png",
  },
];

export function WalletBankCards() {
  return (
    <div className="grid md:grid-cols-3 max-w-5xl gap-5">
      {BankCards.map((card) => (
        <BankCard
          key={card.id}
          bankname={card.bankname}
          banknumber={card.banknumber}
          balance={card.balance}
          bankImage={card.bankImage}
        />
      ))}
    </div>
  );
}

export function BankCard(card: BankCardProps) {
  return (
    <Card className="px-3 bg-[#F8F9FC] border-none shadow-[0px_4px_4px_0px_#00000040 w-full">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between flex-row items-center">
          <div>
            <h3 className="font-semibold">{card.bankname}</h3>
            <p className="text-[#AEAFB2] font-semibold">{card.banknumber}</p>
          </div>
          <Image
            src={card.bankImage}
            alt={card.bankname}
            width={40}
            height={40}
          />
        </div>
        <div>
          <div className="flex justify-between flex-row items-center">
            <div className=" font-semibold text-black">
              {card.balance}{" "}
              <span className="text-[#AEAFB2] md:text-normal text-sm">.N</span>
            </div>
            <div>
              <MoreVerticalIcon size={20} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
