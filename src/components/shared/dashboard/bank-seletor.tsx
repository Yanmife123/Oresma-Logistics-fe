"use client";
import { useState } from "react";
import { AllAvailableBanks, AvailableBank } from "@/_lib/type/wallets/wallet";
import { getAvailableBanks } from "@/_lib/api/wallet/get-all-wallet";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useQuery } from "@tanstack/react-query";

type BankSelectorProps = {
  onSelect: (bank: AvailableBank) => void;
};

export function BankSelector({ onSelect }: BankSelectorProps) {
  const [open, setOpen] = useState(false);
  const {
    data: banksData,
    isPending,
    isError,
  } = useQuery<AllAvailableBanks>({
    queryFn: getAvailableBanks,
    queryKey: ["AvailableBanks"],
    staleTime: 1000 * 60 * 60 * 24, // 24hrs
  });

  const [selectedBank, setSelectedBank] = useState<null | AvailableBank>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full border p-3 rounded-md text-start">
        {selectedBank ? selectedBank.name : "Select Bank"}
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0 flex justify-center">
        <Command className="w-90%">
          <CommandInput placeholder="Search bank..." />

          <CommandList>
            {isPending && (
              <div className="p-4 w-full text-center">Loading banks...</div>
            )}
            {isError && (
              <div className="p-4 text-red-500">Error loading banks</div>
            )}
            {banksData &&
              banksData.banks.map((bank) => (
                <CommandItem
                  key={bank.id}
                  onSelect={() => {
                    setSelectedBank(bank);
                    onSelect(bank);
                    setOpen(false);
                  }}
                >
                  {bank.name}
                </CommandItem>
              ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
