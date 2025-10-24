"use client";

import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  percentage: number;
  label: string;
  trend?: string;
  trendDirection?: "up" | "down";
  icon?: ReactNode;
  gradient?: boolean;
  children?: ReactNode;
}

export function StatCard({
  percentage,
  label,
  trend,
  trendDirection,
  icon,
  gradient = false,
  children,
}: StatCardProps) {
  const trendColor =
    trendDirection === "up" ? "text-green-500" : "text-red-500";

  return (
    <Card
      className={`w-full p-6 flex flex-col justify-between hover:bg-gradient-to-br hover:to-[#35445C] hover:from-[#FA8E6A]  hover:text-white text-primaryT border-0 transition duration-300  ease-in-out     
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
          <div className="text-4xl font-bold mb-1 ">{percentage}%</div>
          <div
            className={`text-sm 
              
            `}
          >
            {label}
          </div>
        </div>

        {/* Circular indicator */}
        <div className="bg-primaryT w-[20px] h-[20px] rounded-full flex justify-center items-center">
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
        </div>
      </div>
    </Card>
  );
}
