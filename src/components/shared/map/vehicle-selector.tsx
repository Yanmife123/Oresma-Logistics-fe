"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Vehicle {
  id: string;
  name: string;
  image: string;
  price?: string;
}

interface VehicleSelectorProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicleId: string) => void;
  selectedVehicle: string | null;
}

export function VehicleSelector({
  vehicles,
  onSelectVehicle,
  selectedVehicle,
}: VehicleSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {vehicles.map((vehicle) => (
        <Card key={vehicle.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="relative h-20 w-full">
                <Image
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground">{vehicle.name}</p>
              </div>
              <Button
                onClick={() => onSelectVehicle(vehicle.id)}
                className={`w-full ${
                  selectedVehicle == vehicle.id
                    ? "bg-secondaryT"
                    : "bg-[#FBB298]"
                } hover:bg-secondaryT `}
              >
                Choose ride
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
