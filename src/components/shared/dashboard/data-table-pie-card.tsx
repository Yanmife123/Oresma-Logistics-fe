"use client";

import type React from "react";

import { DashboardCard } from "./dashboard-card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface DataRow {
  label: string;
  value: string;
  color?: string;
}

interface DataTableCardProps {
  title: string;
  data: DataRow[];
  percentage: number;
  percentageLabel: string;
  headers: [string, string];
  highlighted?: boolean;
  action?: React.ReactNode;
  oddRowColor?: string;
  evenRowColor?: string;
}

export function DataTableCard({
  title,
  data,
  percentage,
  percentageLabel,
  headers,
  highlighted = false,
  action,
  oddRowColor = "transparent",
  evenRowColor = "transparent",
}: DataTableCardProps) {
  const chartData = [
    { name: "used", value: percentage },
    { name: "unused", value: 100 - percentage },
  ];

  return (
    <DashboardCard
      header={title}
      action={action}
      className={highlighted ? "border-l-4 border-l-blue-500" : ""}
    >
      <div className="flex gap-6">
        {/* Data Table */}
        <div className="flex-1">
          <div className="space-y-2">
            <div className="flex gap-4 pb-2 border-b border-border">
              <span className="text-xs font-medium text-muted-foreground flex-1">
                {headers[0]}
              </span>
              <span className="text-xs font-medium text-muted-foreground w-20">
                {headers[1]}
              </span>
            </div>
            {data.map((row, index) => (
              <div
                key={index}
                className="flex gap-4 py-1 px-2 rounded"
                style={{
                  backgroundColor: index % 2 === 0 ? "#f3f4f6" : "#ffffff",
                }}
              >
                <div className="flex-1 flex items-center gap-2">
                  <div
                    className="min-w-3 min-h-3 max-w-3 max-h-3 rounded-full"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? oddRowColor : evenRowColor,
                    }}
                  />
                  <span className="text-sm text-foreground">{row.label}</span>
                </div>
                <span className="text-sm text-foreground w-20">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Chart */}
        <div className="flex flex-col items-center justify-center w-32 flex-shrink-0">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={55}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                <Cell fill={oddRowColor || "#FF6B35"} />
                <Cell fill={evenRowColor || "#1F2937"} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center mt-2">
            <div className="text-lg font-bold text-foreground">
              {percentage}%
            </div>
            <div className="text-xs text-muted-foreground">
              {percentageLabel}
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
