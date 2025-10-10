"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BarChartData {
  name: string;
  value: number;
}

interface BarChartComponentProps {
  title: string;
  data: BarChartData[];
  totalValue?: string | number;
  color?: string;
  renderBatch?: () => React.ReactNode;
}

export function BarChartComponent({
  title,
  data,
  totalValue,
  color = "#fb923c",
  renderBatch,
}: BarChartComponentProps) {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        {renderBatch && renderBatch()}
      </CardHeader>
      <CardContent>
        <div className="relative">
          {totalValue && (
            <div className="absolute right-4 top-0 z-10 rounded-lg bg-white px-3 py-1.5 shadow-sm">
              <p className="text-lg font-bold">{totalValue}</p>
            </div>
          )}
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
