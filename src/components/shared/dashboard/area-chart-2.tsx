"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface AreaChart2Data {
  name: string;
  value: number;
}

export interface AreaChart2ComponentProps {
  title: string;
  totalValue: string | number;
  data: AreaChart2Data[];
  highlightValue?: string | number;
  highlightLabel?: string;
  xAxisKey?: string;
  yAxisKey?: string;
  areaColor?: string;
  strokeColor?: string;
  gradientId?: string;
  height?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  className?: string;
}

export function AreaChart2Component({
  title,
  totalValue,
  data,
  highlightValue,
  // highlightLabel,
  xAxisKey = "name",
  yAxisKey = "value",
  areaColor = "hsl(var(--chart-2))",
  strokeColor = "hsl(var(--chart-2))",
  gradientId = "colorValue",
  height = 300,
  showGrid = true,
  showTooltip = true,
  className = "",
}: AreaChart2ComponentProps) {
  return (
    <Card className={`w-full border-t-4 border-t-blue-500 ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-2xl font-bold text-foreground">{totalValue}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Highlight value display */}
          {highlightValue && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
              <p className="text-sm font-semibold text-muted-foreground bg-background px-2 py-1 rounded">
                {highlightValue}
              </p>
            </div>
          )}

          {/* Area Chart */}
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart
              data={data}
              margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={areaColor} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={areaColor} stopOpacity={0} />
                </linearGradient>
              </defs>

              {showGrid && (
                <CartesianGrid strokeDasharray="0" stroke="transparent" />
              )}

              <XAxis
                dataKey={xAxisKey}
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: "12px" }}
              />

              <YAxis
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: "12px" }}
                tickFormatter={(value) => {
                  if (value >= 1000) {
                    return `${(value / 1000).toFixed(0)}k`;
                  }
                  return value.toString();
                }}
              />

              {showTooltip && (
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: `1px solid hsl(var(--border))`,
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                  formatter={(value) => {
                    if (typeof value === "number") {
                      return value.toLocaleString();
                    }
                    return value;
                  }}
                />
              )}

              <Area
                type="monotone"
                dataKey={yAxisKey}
                stroke={strokeColor}
                strokeWidth={2}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
