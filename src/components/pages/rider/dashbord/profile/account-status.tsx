import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BooleanStatusBadge,
  StatusBadge2,
} from "@/components/shared/dashboard/status-card";
import { RiderProfileResponse } from "@/_lib/type/auth/users";

interface RiderProfileStatusProps {
  rider?: RiderProfileResponse["rider"];
}

export function RiderProfileStatus({ rider }: RiderProfileStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Account Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Status</span>
          <StatusBadge2 status={rider?.accountStatus || ""} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Verification Status
          </span>
          <StatusBadge2 status={rider?.verificationStatus || ""} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Email Verified</span>
          <BooleanStatusBadge
            status={rider?.userId.isEmailVerified || false}
            trueLabel="Yes"
            falseLabel="No"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Vendor Account</span>
          <BooleanStatusBadge
            status={rider?.isVendor || false}
            trueLabel="Yes"
            falseLabel="No"
          />
        </div>
      </CardContent>
    </Card>
  );
}
