"use client";

import { ChevronDown, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Transaction {
  id: string;
  time: string;
  merchant: string;
  paymentMethod: string;
  category: "Food" | "Salary" | "Transport" | "Entertainment";
  amount: string;
  categoryColor:
    | "text-slate-800"
    | "text-orange-500"
    | "text-green-500"
    | "text-blue-600";
}

interface WalletHistoryProps {
  transactions?: Transaction[];
  balance?: string;
  onSeeMore?: () => void;
}

export function WalletHistory({
  transactions = [
    {
      id: "1",
      time: "Today",
      merchant: "Chicken Republic",
      paymentMethod: "Card payment",
      category: "Food",
      amount: "-34,000 N",
      categoryColor: "text-slate-800",
    },
    {
      id: "2",
      time: "Today",
      merchant: "Chicken Republic",
      paymentMethod: "Card payment",
      category: "Food",
      amount: "-34,000 N",
      categoryColor: "text-orange-500",
    },
    {
      id: "3",
      time: "Today",
      merchant: "Chicken Republic",
      paymentMethod: "Card payment",
      category: "Salary",
      amount: "-34,000 N",
      categoryColor: "text-green-500",
    },
    {
      id: "4",
      time: "Today",
      merchant: "Chicken Republic",
      paymentMethod: "Card payment",
      category: "Food",
      amount: "-34,000 N",
      categoryColor: "text-slate-800",
    },
    {
      id: "5",
      time: "19:05",
      merchant: "Chicken Republic",
      paymentMethod: "Card payment",
      category: "Food",
      amount: "-34,000 N",
      categoryColor: "text-slate-800",
    },
    {
      id: "6",
      time: "19:05",
      merchant: "Chicken Republic",
      paymentMethod: "Card payment",
      category: "Food",
      amount: "-34,000 N",
      categoryColor: "text-slate-800",
    },
    {
      id: "7",
      time: "19:05",
      merchant: "Chicken Republic",
      paymentMethod: "Card payment",
      category: "Food",
      amount: "-34,000 N",
      categoryColor: "text-slate-800",
    },
  ],
  balance = "1,171,851",
  onSeeMore = () => {},
}: WalletHistoryProps) {
  const getCategoryBgColor = (category: string) => {
    const colors: Record<string, string> = {
      Food: "bg-slate-800",
      Salary: "bg-green-500",
      Transport: "bg-blue-600",
      Entertainment: "bg-orange-500",
    };
    return colors[category] || "bg-slate-800";
  };

  return (
    <div className="w-full rounded-lg border border-slate-200 bg-[#FCFCFD] p-4 md:p-6 shadow-[0px_4px_4px_0px_#00000025]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">
          Latest Transactions
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-slate-900 hover:bg-slate-800"
        >
          <MoreVertical className="h-5 w-5 text-white" />
        </Button>
      </div>

      {/* Transaction List - Cards on mobile, Table on desktop */}
      <div className="space-y-3 md:space-y-0">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="md:flex md:items-center md:justify-between md:px-4 md:py-3 md:border-b md:border-slate-100 last:md:border-b-0 rounded-lg border border-slate-200 p-4 md:border-0 md:rounded-none md:p-0 bg-slate-50 md:bg-transparent hover:bg-slate-100 md:hover:bg-transparent transition-colors"
          >
            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-3">
              {/* Top row: Time and Amount */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 uppercase">
                  Time
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {transaction.amount}
                </span>
              </div>

              {/* Merchant */}
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {transaction.merchant}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {transaction.paymentMethod}
                </p>
              </div>

              {/* Bottom row: Category and Chevron */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${getCategoryBgColor(
                      transaction.category
                    )}`}
                  />
                  <span className="text-xs font-medium text-slate-600">
                    {transaction.category}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-600">
                  {transaction.time}
                </div>
              </div>
            </div>

            {/* Desktop Table Layout */}
            <div className="hidden md:flex md:items-center md:justify-between md:w-full">
              {/* Time */}
              <div className="w-12 text-sm font-medium text-slate-600">
                {transaction.time}
              </div>

              {/* Merchant */}
              <div className="">
                <p className="text-sm font-medium text-foreground">
                  {transaction.merchant}
                </p>
              </div>
              <div className="w-12 text-sm font-medium text-slate-600">
                {transaction.paymentMethod}
              </div>

              {/* Category Badge */}
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${getCategoryBgColor(
                    transaction.category
                  )}`}
                />
                <span className="text-xs font-medium text-slate-600">
                  {transaction.category}
                </span>
              </div>

              {/* Amount */}
              <div className="flex w-24 items-center justify-end gap-2">
                <span className="text-right text-sm font-semibold text-foreground">
                  {transaction.amount}
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-6 text-center">
        <button
          onClick={onSeeMore}
          className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          See more →
        </button>
      </div>
    </div>
  );
}
