"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DashoardSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-8 w-28" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center h-64 gap-4">
          {/* Chart skeleton */}
          <div className="w-full h-40 flex items-end justify-between gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${Math.random() * 100 + 40}px` }}
              />
            ))}
          </div>
          {/* Number skeleton */}
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </CardContent>
    </Card>
  );
}
