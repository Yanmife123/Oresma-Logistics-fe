import { RiderProfileResponse } from "@/_lib/type/auth/users";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck } from "lucide-react";

export function VehicleRiderProfile({
  rider,
}: {
  rider: RiderProfileResponse["rider"];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Truck className="w-5 h-5" />
          Vehicle Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Vehicle Type</span>
          <Badge variant="outline">
            {rider.vehicleInfo.vehicleType || "Not specified"}
          </Badge>
        </div>
        {!rider.vehicleInfo.vehicleType && (
          <p className="text-sm text-muted-foreground">
            No vehicle information on file. Please update your profile.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
