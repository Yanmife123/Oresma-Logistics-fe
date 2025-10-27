"use client";
// import { AreaChartComponent } from "@/components/shared/dashboard/area-chart";
import { AreaChart2Component } from "@/components/shared/dashboard/area-chart-2";
const data = [
  { name: "Jan", value: 50000 },
  { name: "Feb", value: 65000 },
  { name: "Mar", value: 55000 },
  { name: "Apr", value: 23460 },
  { name: "May", value: 60000 },
  { name: "June", value: 80000 },
];
export default function TotalSales() {
  return (
    <AreaChart2Component
      title="Total Sales"
      data={data}
      areaColor="#1E3A8A"
      totalValue={"N56, 680"}
    />
  );
}
