"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

interface AreaChartData {
  name: string;
  value: number;
}

interface AreaChartComponentProps {
  title: string;
  data: AreaChartData[];
  totalValue?: string | number;
  color?: string;
  renderBatch?: () => React.ReactNode;
}

export function AreaChartComponent({
  title,
  data,
  totalValue,
  color = "#fb923c",
  renderBatch,
}: AreaChartComponentProps) {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        {renderBatch && renderBatch()}
      </CardHeader>
      <CardContent>
        <div className="relative">
          {totalValue && (
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-4 py-2 shadow-md">
              <p className="text-2xl font-bold">{totalValue}</p>
            </div>
          )}
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
