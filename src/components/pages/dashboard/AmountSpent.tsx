"use client";
import { BarChartComponent } from "@/components/shared/dashboard/bar-chart";
import { PeriodSelector } from "@/components/shared/dashboard/period-selector";
const amountSpentData = [
  { name: "June 12", value: 15000 },
  { name: "June 13", value: 18000 },
  { name: "June 14", value: 12000 },
  { name: "June 15", value: 23480 },
  { name: "June 16", value: 16000 },
  { name: "June 17", value: 19000 },
  { name: "June 18", value: 14000 },
];
export function AmountSpent({ color }: { color?: string }) {
  return (
    <BarChartComponent
      data={amountSpentData}
      title="Amount spent"
      totalValue="23,480"
      color={color || undefined}
      renderBatch={() => {
        return (
          <div>
            <PeriodSelector
              paramName="amountSpent"
              options={[
                { label: "Last 7 days", value: "7days" },
                { label: "Last 2 weeks", value: "2weeks" },
                { label: "Last 1 month", value: "1month" },
                { label: "Last 2 months", value: "2months" },
                { label: "Last 1 year", value: "1year" },
              ]}
            />
          </div>
        );
      }}
    />
  );
}
