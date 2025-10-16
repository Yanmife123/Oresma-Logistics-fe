import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

interface RouteInfoProps {
  origin: string;
  destination: string;
  duration?: string;
  distance?: string;
}

export function RouteInfo({
  origin,
  destination,
  duration,
  distance,
}: RouteInfoProps) {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-yellow-500" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">From</p>
              <p className="font-medium text-[#F75720]">
                {origin || "Not set"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-gray-900" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">To</p>
              <p className="font-medium text-[#F75720]">
                {destination || "Not set"}
              </p>
            </div>
          </div>
          {duration && (
            <div className="flex items-center gap-3 border-t pt-3">
              <Clock className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">
                  Estimated Duration
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {duration}
                </p>
              </div>
            </div>
          )}
          {distance && (
            <div className="text-sm text-muted-foreground">
              Distance:{" "}
              <span className="font-medium text-foreground">{distance}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
