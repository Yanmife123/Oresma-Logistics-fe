"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { findRiderTrucks } from "@/_lib/api/dashboard/rider/findRiderTrucks";
import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
import { ResponseTrucks } from "@/_lib/type/trucks/trucks";
// import { useEffect } from "react";

export function LorryRecommendation() {
  const {
    data: lorriesData,
    isLoading,
    error: Error,
  } = useQuery<ResponseTrucks>({
    queryKey: ["FindTrucks"],
    queryFn: findRiderTrucks,
  });

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-semibold">Recommended Lorries</h2>

      {isLoading && <SkeletonCardList />}
      {Error && <div>{Error?.message}</div>}

      {!isLoading && !Error && (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lorriesData?.count === 0 ? (
              <div>No lorries available at the moment.</div>
            ) : (
              lorriesData?.trucks.slice(0, 3).map((lorry) => (
                <Card key={lorry._id} className="overflow-hidden bg-blue-50/50">
                  {/* Lorry Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-blue-50 p-6">
                    <div className="relative h-full w-full">
                      <Image
                        src={
                          lorry.photos[0] ||
                          "https://res.cloudinary.com/duyhha3mz/image/upload/v1760319027/lorry_djnre2.png"
                        }
                        alt={lorry.make}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Lorry Details */}
                  <div className="space-y-4 p-6">
                    {/* Name and Registration */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{lorry.make}</h3>
                      <p className="text-sm text-muted-foreground">
                        {lorry.rating} || no rating yet
                      </p>
                    </div>

                    {/* Specifications Grid */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm text-muted-foreground">
                          Truck Type
                        </span>
                        <span className="text-sm font-medium">
                          {lorry.truckType}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm text-muted-foreground">
                          Vehicle Color
                        </span>
                        <span className="text-sm font-medium">
                          {lorry.color}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm text-muted-foreground">
                          Vehicle Model
                        </span>
                        <span className="text-sm font-medium">
                          {lorry.vehicleModel}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm text-muted-foreground">
                          Vehicle Condition
                        </span>
                        <span className="text-sm font-medium">
                          {lorry.condition}
                        </span>
                      </div>
                    </div>

                    {/* Registration Status */}
                    <div className="flex items-center gap-2 pt-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        {/* {lorry.registeredFor} */}
                      </span>
                    </div>

                    {/* Status and Action */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Status</p>
                        <Badge
                          variant={
                            lorry.isAvailable ? "secondary" : "destructive"
                          }
                          className={
                            lorry.isAvailable
                              ? "bg-orange-100 text-orange-700 hover:bg-orange-100"
                              : ""
                          }
                        >
                          {lorry.isAvailable ? "Available" : "Unavailable"}
                        </Badge>
                      </div>

                      <Button
                        className="bg-orange-500 hover:bg-orange-600"
                        asChild
                      >
                        <Link href={`/dashboard/rider/trucks/${lorry._id}`}>
                          {" "}
                          Choose this
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* See All Trucks Link */}
          <div className="flex justify-center pt-4">
            <Button
              variant="link"
              className="text-orange-500 hover:text-orange-600"
              asChild
            >
              <Link href={"/dashboard/rider/trucks"}>See all trucks</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
