"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";

interface DashboardCardProps {
  header: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function DashboardCard({
  header,
  children,
  action,
  className,
}: DashboardCardProps) {
  return (
    <Card className={`w-full ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">{header}</CardTitle>
          {action && <div>{action}</div>}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
