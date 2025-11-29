"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { SingleRideRequestResponse } from "@/_lib/type/request/rider-request";
import {
  DeclineAssignmentRequest,
  SingleRiderRequest,
} from "@/_lib/api/rider/assignment";
import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
import { StartAssignmentRequest } from "@/_lib/api/rider/assignment";
import Cookies from "js-cookie";
import { User } from "@/_lib/type/cookies";
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
import MapRoute from "@/components/shared/dashboard/singleRequestDetails/mapDisplay";
import { showToast } from "@/components/shared/toast";
import { StatusBadge } from "@/components/shared/dashboard/status-card";

export function TripProcess({ id }: { id: string }) {
  const [openModal, setOpenModal] = useState(false);
  const rawUser = Cookies.get("user");
  const userData: User | null = rawUser ? JSON.parse(rawUser) : null;

  const {
    data,
    isError,
    isPending,
    error: Error,
  } = useQuery<SingleRideRequestResponse>({
    queryKey: ["Single Reques for Rider", id],
    queryFn: () => SingleRiderRequest(id),
    refetchInterval: 5000,
  });
  const navigate = useRouter();
  const StartProcess = () => {
    const muataion = useMutation({
      mutationFn: StartAssignmentRequest,
      mutationKey: ["startAssignment"],
      onSuccess: (data) => {
        showToast.success("Trip has Started", data.message);
      },
      onError: (error) => {
        showToast.error("Failed to start trip", error.message);
      },
    });

    const handleClick = async () => {
      await muataion.mutateAsync(id);
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-center cursor-pointer">
          <Button
            onClick={handleClick}
            disabled={muataion.isPending}
            className="cursor-pointer"
          >
            {muataion.isPending ? "Starting Trip...." : "Start Trip"}
          </Button>
        </div>
      </div>
    );
  };
  const EndProcess = () => {
    const muataion = useMutation({
      mutationFn: DeclineAssignmentRequest,
      mutationKey: ["startAssignment"],
      onSuccess: (data) => {
        showToast.success("Trip has been Declined", data.message);
        navigate.push("/rider/dashboard/activeRequest");
      },
      onError: (error) => {
        showToast.error("Failed to Decline Reuqest", error.message);
      },
    });

    const handleClick = async () => {
      await muataion.mutateAsync(id);
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-center cursor-pointer">
          <Button
            onClick={handleClick}
            disabled={muataion.isPending}
            className="cursor-pointer"
          >
            {muataion.isPending ? "Declining Trip...." : "Decline Trip"}
          </Button>
        </div>
      </div>
    );
  };
  const FinshProcess = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-center cursor-pointer">
          <Button
            onClick={() => {
              setOpenModal(true);
            }}
            className="cursor-pointer"
          >
            Finish Trip
          </Button>
        </div>
      </div>
    );
  };

  if (isPending) {
    return <SkeletonCardList />;
  }

  if (!isPending && isError) {
    return <div className="text-red-500">{Error.message}</div>;
  }

  const openGoogleMaps = (origin: string, destination: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      origin
    )}&destination=${encodeURIComponent(destination)}`;
    window.open(url, "_blank");
  };

  if (!isPending && !isError) {
    return (
      <div>
        <MapRoute
          origin={data.rideRequest.pickup.address}
          destination={data.rideRequest.dropoff.address}
        />
        <div className="w-full max-md:max-w-2xl mx-auto  bg-card rounded-lg border border-border p-6 -mt-12 z-5 relative">
          {/* Driver Profile Section */}
          <div className="flex items-center gap-8 mb-8 pb-6 border-b border-border sm:flex-row flex-col">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={"/placeholder.svg"}
                alt={userData?.name || "RiderS"}
              />
              <AvatarFallback>
                {userData?.name.charAt(0) || "Rider".charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="grid grid-cols-3 gap-4 ">
              <div className="flex flex-col gap-2 justify-center">
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  Pickup location
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    {data.rideRequest.pickup.address}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  Current location
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-foreground"></p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-muted-foreground uppercase">
                  Destination
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    {data.rideRequest.dropoff.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {" "}
                <StatusBadge status={data.rideRequest.status} />
              </div>
              <Button
                onClick={() =>
                  openGoogleMaps(
                    data.rideRequest.pickup.address,
                    data.rideRequest.dropoff.address
                  )
                }
                variant={"link"}
                className=" cursor-pointer text-[#2563EB]"
              >
                Go to Google maps
              </Button>
            </div>
          </div>

          <div className="flex gap-5">
            {/* Location Headers */}
            {data.rideRequest.status === "assigned" && <StartProcess />}
            {data.rideRequest.status !== "completed" && <EndProcess />}
            {/* Timeline Section */}
            {data.rideRequest.status === "in-progress" && <FinshProcess />}
            {data.rideRequest.status === "completed" && (
              <div className="space-y-6">
                <div className="flex justify-center cursor-pointer">
                  <Button
                    onClick={() => {
                      navigate.push("/rider/dashboard/activeRequests");
                    }}
                    className="cursor-pointer"
                  >
                    Back to Active Requests
                  </Button>
                </div>
              </div>
            )}
          </div>
          <RouteProcess
            open={openModal}
            onOpenChange={() => {
              setOpenModal(false);
            }}
            id={id}
          />
        </div>
      </div>
    );
  }
}
