"use client";

import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  percentage?: boolean;
  value?: string | number;
  label: string;
  trend?: string;
  trendDirection?: "up" | "down";
  icon?: ReactNode;
  gradient?: "organge" | "black";
  children?: ReactNode;
}

export function StatCard({
  percentage,
  label,
  trend,
  trendDirection,
  icon,
  gradient = "black",
  value,
}: // gradient = false,
// children,
StatCardProps) {
  const trendColor =
    trendDirection === "up" ? "text-green-500" : "text-red-500";

  return (
    <Card
      className={`w-full p-6 flex flex-col justify-between ${
        gradient === "organge"
          ? "hover:bg-gradient-to-br hover:to-[#35445C] hover:from-[#FA8E6A]"
          : // : "hover:bg-gradient-to-br hover:to-[#010C1C] hover:from-[#E6E8EB]"
            "hover:bg-gradient-to-br hover:to-[#35445C] hover:from-[#FA8E6A]"
      }  hover:text-white text-primaryT border-0 transition duration-300  ease-in-out     
      `}
    >
      {/* Header with icon and trend */}
      <div className="flex items-start justify-between mb-8">
        {icon && <div className="text-lg">{icon}</div>}
        {trend && (
          <div className={`text-sm font-medium ${trendColor}`}>{trend}</div>
        )}
      </div>

      {/* Main content */}
      <div className="flex items-end justify-between">
        <div className="flex-1">
          <div className="text-4xl font-bold mb-1 ">
            {percentage ? `${value}%` : value}
          </div>
          <div
            className={`text-sm 
              
            `}
          >
            {label}
          </div>
        </div>

        {/* Circular indicator */}
        <div className="bg-primaryT min-w-[20px] min-h-[20px] rounded-full flex justify-center items-center">
          <div className="min-w-[5px] min-h-[5px] bg-white rounded-full"></div>
        </div>
      </div>
    </Card>
  );
}
