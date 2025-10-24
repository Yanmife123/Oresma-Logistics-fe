"use client";
import { BarChartComponent } from "@/components/shared/dashboard/bar-chart";

const data = [
  { name: "Jan", value: 50000 },
  { name: "Feb", value: 65000 },
  { name: "Mar", value: 55000 },
  { name: "Apr", value: 23460 },
  { name: "May", value: 60000 },
  { name: "June", value: 80000 },
];
export default function TotalSales() {
  return <BarChartComponent title="Total Sales" data={data} color="#021533" />;
}
