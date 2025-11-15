"use client";

import BookingTruck from "./truckRoute";
import { useQuery } from "@tanstack/react-query";
import { findRiderTruckById } from "@/_lib/api/dashboard/rider/findRiderTrucks";
import { ResponseSingleTrucks } from "@/_lib/type/trucks/trucks";
import { TruckDetailSpecs } from "./truckDetail-spec";
import { TruckDetailFeatures } from "./truckDetail-features";
import { TruckDetailMaintenance } from "./truckDetail-maintenace";
import { TruckDetailHeader } from "./truckDetail-header";

export function TruckDetail({ id }: { id: string }) {
  const {
    data: Truck,
    isLoading,
    isError,
    error,
  } = useQuery<ResponseSingleTrucks>({
    queryKey: ["riderTruck", id],
    queryFn: () => findRiderTruckById(id),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading truck details...</p>
        </div>
      </div>
    );
  }
  if (!isLoading && isError) {
    return <div className="text-red-500">{error.message}</div>;
  }

  if (!isLoading && !isError && Truck?.truck) {
    return (
      <div className="px-4 md:px-0">
        <div>
          <TruckDetailHeader truck={Truck.truck} />
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10">
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-6 md:gap-7">
            <TruckDetailSpecs truck={Truck.truck} />
            <TruckDetailFeatures truck={Truck.truck} />
            <TruckDetailMaintenance truck={Truck.truck} />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-semibold text-xl md:text-2xl mb-4">
              Truck Route
            </h4>
            <BookingTruck />
          </div>
        </div>

        <div className="mt-10 md:mt-15">
          <h4 className="font-semibold text-xl md:text-2xl mb-4 md:mb-0">
            Similar trucks
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-7">
            {/* {trucks.map((truck, index) => (
            <SimilarTruckCard key={index} {...truck} />
          ))} */}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
