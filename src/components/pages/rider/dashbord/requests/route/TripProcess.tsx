"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
export interface Stop {
  id: number;
  label: string;
  location: string;
  address: string;
  time?: string;
  buttonLabel: string;
  buttonVariant?: "default" | "outline" | "third";
  onAction?: () => void;
  process: "pending" | "success";
}
import { RouteProcess } from "./adminProcessingModal";
import { useState } from "react";

const stops: Stop[] = [
  {
    id: 1,
    label: "01",
    location: "Ojodu, Akosodo",
    address: "No. 12, Ojodu Road",
    time: "7:00pm",
    buttonLabel: "Start",
    process: "pending",
    onAction: () => console.log("Start trip"),
  },
  {
    id: 2,
    label: "02",
    location: "Egbeda close",
    address: "No. 12, by Ebute Metro Roundabout",
    time: "8:45pm",
    process: "pending",
    buttonLabel: "1st Stop",
  },
  {
    id: 3,
    label: "03",
    location: "Magodo Phase III",
    address: "Ikechukwu Avenue, Magodo",
    time: "10:49pm",
    buttonLabel: "2nd Stop",

    process: "pending",
  },
  {
    id: 4,
    label: "04",
    location: "Magodo Phase III",
    address: "Ikechukwu Avenue, Magodo",
    time: "10:49pm",
    buttonLabel: "Final Destination",
    process: "pending",
  },
];

export function TripProcess() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full max-md:max-w-2xl mx-auto  bg-card rounded-lg border border-border p-6 -mt-12 z-5 relative">
      {/* Driver Profile Section */}
      <div className="flex items-center gap-8 mb-8 pb-6 border-b border-border sm:flex-row flex-col">
        <Avatar className="h-16 w-16">
          <AvatarImage src={"/placeholder.svg"} alt={"Yanmie Adegbola"} />
          <AvatarFallback>{"Yanmife Adegbola".charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-xs font-medium text-muted-foreground uppercase">
              Pickup location
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium text-foreground">Ojodu</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium text-muted-foreground uppercase">
              Current location
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium text-foreground">
                Otedola Bridge
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium text-muted-foreground uppercase">
              Destination
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium text-foreground">Berger</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Headers */}

      {/* Timeline Section */}
      <div className="space-y-6">
        {stops.map((stop, index) => (
          <div key={stop.id} className="flex gap-6">
            {/* Timeline Line and Number */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                {stop.label}
              </div>
              {index < stops.length - 1 && (
                <div className="w-1 h-16 bg-border mt-2" />
              )}
            </div>

            {/* Stop Details */}
            <div className="flex-1 pt-1">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    {stop.location}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stop.address}
                  </p>
                  {stop.time && (
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {stop.time}
                      </p>
                    </div>
                  )}
                </div>
                <Button
                  variant={stop.process === "pending" ? "default" : "third"}
                  size="sm"
                  onClick={() => {
                    stop.process = "success";
                  }}
                  className="whitespace-nowrap"
                >
                  {stop.buttonLabel}
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center cursor-pointer">
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Finish Trip
          </Button>
        </div>
      </div>
      <RouteProcess
        open={openModal}
        onOpenChange={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
}
