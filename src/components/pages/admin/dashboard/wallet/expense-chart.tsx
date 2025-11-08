"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ExpenseData {
  name: string;
  value: number;
}

interface ExpensePieChartProps {
  data?: ExpenseData[];
  total?: number;
  currency?: string;
  timeRange?: "Daily" | "Weekly" | "Monthly";
  onTimeRangeChange?: (range: "Daily" | "Weekly" | "Monthly") => void;
  selectedRange?: "Daily" | "Weekly" | "Monthly";
  stats?: {
    daily: string;
    weekly: string;
    monthly: string;
  };
}

const COLOR_PALETTE = [
  "#3B82F6", // Blue
  "#10B981", // Green
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#8B5CF6", // Purple
  "#EC4899", // Pink
  "#06B6D4", // Cyan
  "#F97316", // Orange
  "#6366F1", // Indigo
  "#14B8A6", // Teal
];

const defaultData = [
  { name: "Food", value: 4500 },
  { name: "Salary", value: 3000 },
  { name: "Clothes", value: 2000 },
  { name: "Babe", value: 1500 },
  { name: "Transport", value: 1000 },
  { name: "Entertainment", value: 500 },
];

export function ExpensePieChart({
  data = defaultData,
  total = 12678,
  currency = "N",
  timeRange = "Monthly",
  onTimeRangeChange = () => {},
  selectedRange = "Monthly",
  stats = {
    daily: "275",
    weekly: "1,420",
    monthly: "8,460",
  },
}: ExpensePieChartProps) {
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: COLOR_PALETTE[index % COLOR_PALETTE.length],
  }));

  const colorStops = dataWithColors.map((item) => item.color).join(", ");

  const handleTimeRangeChange = (range: "Daily" | "Weekly" | "Monthly") => {
    onTimeRangeChange(range);
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-semibold">All Expenses</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-slate-900 hover:bg-slate-800"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Time Range Selector */}
        <div className="flex gap-6">
          {["Daily", "Weekly", "Monthly"].map((range) => (
            <button
              key={range}
              onClick={() =>
                handleTimeRangeChange(range as "Daily" | "Weekly" | "Monthly")
              }
              className="text-center cursor-pointer transition-colors"
            >
              <p
                className={`text-sm font-medium mb-1 ${
                  selectedRange === range ? "text-foreground" : "text-slate-400"
                }`}
              >
                {range}
              </p>
              <p
                className={`text-lg font-bold ${
                  selectedRange === range ? "text-foreground" : "text-slate-400"
                }`}
              >
                {stats[range.toLowerCase() as keyof typeof stats]}
              </p>
            </button>
          ))}
        </div>

        {/* Dropdown for time period */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">Last month</span>
          <ChevronRight className="h-4 w-4 text-slate-400 rotate-90" />
        </div>

        <div className="relative w-full h-64 flex items-center justify-center">
          {/* Pie Chart */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataWithColors}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {dataWithColors.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              {/* <Tooltip
                formatter={(value) => `${value} ${currency}`}
                contentStyle={{
                  backgroundColor: "#fff",
                  zIndex: 1000,
                  position: "relative",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                }}
              /> */}
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="flex flex-col items-center justify-center z-0"
              style={{
                width: "140px",
                height: "140px",
                backgroundColor: "#FDCBBA",
                borderRadius: "50%",
              }}
            >
              <p className="text-2xl font-bold text-slate-900">
                {total.toLocaleString()}
              </p>
              <p className="text-sm text-slate-700 font-medium">{currency}</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-3">
          {dataWithColors.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-slate-700 font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
