"use client";
import { LocationInput } from "@/components/shared/map/location-input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { RouteInfo } from "@/components/shared/map/route-info";
import { RouteMap } from "@/components/shared/map/route-map";
import { Button } from "@/components/ui/button";
import { TruckProcesing } from "./truckProcessing";

export default function BookingTruck() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const handleRouteCalculated = (duration: string, distance: string) => {
    setRouteData({ duration, distance });
  };
  const [openProcessingModal, setOpenProcessingModal] = useState(false);
  const [routeData, setRouteData] = useState<{
    duration: string;
    distance: string;
  } | null>(null);

  const handleOrder = async () => {
    setOpenProcessingModal(true);
  };
  return (
    <>
      <div>
        {origin && destination && routeData && (
          <RouteInfo
            origin={origin}
            destination={destination}
            duration={routeData?.duration}
            distance={routeData?.distance}
          />
        )}
      </div>
      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        <div className="lg:col-span-3">
          <RouteMap
            origin={origin}
            destination={destination}
            className="h-[400px] lg:h-[500px]"
            onRouteCalculated={handleRouteCalculated}
          />
        </div>
      </div>
      <div>
        <Card className="p-6 mt-7">
          <h2 className="mb-6 text-xl font-semibold">Your trip details</h2>
          <div className="space-y-4">
            <div>
              <LocationInput
                label="Start Location"
                placeholder="Enter start location"
                icon="start"
                value={origin}
                onChange={setOrigin}
              />
            </div>
            <div>
              <LocationInput
                label="Destination"
                placeholder="Enter destination"
                icon="destination"
                value={destination}
                onChange={setDestination}
              />
            </div>
          </div>
          <Button
            variant={"ghost"}
            className="bg-secondaryT w-full hover:bg-secondaryT/90 text-white hover:text-white"
            onClick={handleOrder}
          >
            Confirm order
          </Button>
        </Card>
      </div>
      <TruckProcesing
        open={openProcessingModal}
        onOpenChange={() => {
          setOpenProcessingModal(false);
        }}
      />
    </>
  );
}
