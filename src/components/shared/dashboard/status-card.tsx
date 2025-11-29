import React from "react";
import { cn } from "@/_lib/utils";
import { Badge } from "@/components/ui/badge";

type Status =
  | "pending"
  | "payment_failed"
  | "payment_success"
  | "assigned"
  | "in-progress"
  | "completed"
  | "cancelled";

const statusStyles: Record<Status, string> = {
  pending: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  payment_failed: "bg-red-100 text-red-700 border border-red-300",
  payment_success: "bg-green-100 text-green-700 border border-green-300",
  assigned: "bg-blue-100 text-blue-700 border border-blue-300",
  "in-progress": "bg-purple-100 text-purple-700 border border-purple-300",
  completed: "bg-emerald-100 text-emerald-700 border border-emerald-300",
  cancelled: "bg-gray-200 text-gray-600 border border-gray-300",
};

interface StatusBadgeProps {
  status: Status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "text-xs font-medium px-3 py-1 rounded-full capitalize",
        statusStyles[status]
      )}
    >
      {status.replace("-", " ")}
    </span>
  );
}
export interface BooleanStatusBadgeProps {
  status: boolean;
  trueLabel?: string;
  falseLabel?: string;
}

export const BooleanStatusBadge = ({
  status,
  trueLabel = "Active",
  falseLabel = "Inactive",
}: BooleanStatusBadgeProps) => {
  return (
    <Badge variant={status ? "default" : "secondary"}>
      {status ? trueLabel : falseLabel}
    </Badge>
  );
};

export const StatusBadge2 = ({ status }: { status: string }) => {
  const getVariant = (status: string) => {
    if (status.toLowerCase().includes("active"))
      return "text-green-600 bg-green-100";
    if (status.toLowerCase().includes("pending"))
      return "text-yellow-600 bg-yellow-100";
    if (status.toLowerCase().includes("inactive"))
      return "text-red-600 bg-red-100";
    return "outline";
  };

  return <Badge className={getVariant(status)}>{status}</Badge>;
};
