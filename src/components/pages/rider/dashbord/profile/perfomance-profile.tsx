import { RiderProfileResponse } from "@/_lib/type/auth/users";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DollarSign, Package, Star } from "lucide-react";

export function PerformanceRiderProfile({
  rider,
}: {
  rider: RiderProfileResponse["rider"];
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rating Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {(rider.rating || 0).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">out of 5.0</p>
          </CardContent>
        </Card>

        {/* Total Deliveries Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-500" />
              Total Deliveries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {rider.totalDeliveries || 0}
            </div>
            <p className="text-xs text-muted-foreground mt-1">completed</p>
          </CardContent>
        </Card>

        {/* Total Earnings Card */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-500" />
              Total Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              $
              {(rider?.totalEarnings || 0).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-1">lifetime</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Average Rating
            </span>
            <div className="flex items-center gap-2">
              <div className="w-40 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-500"
                  style={{ width: `${((rider?.rating || 0) / 5) * 100}%` }}
                />
              </div>
              <span className="font-medium text-foreground">
                {(rider?.rating || 0).toFixed(1)}/5.0
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Delivery Success Rate
            </span>
            <span className="font-medium text-foreground">
              {rider?.totalDeliveries && rider.totalDeliveries > 0
                ? "100%"
                : "N/A"}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
