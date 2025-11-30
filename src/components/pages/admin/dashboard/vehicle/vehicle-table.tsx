"use client";
import { PeriodSelector } from "@/components/shared/dashboard/period-selector";
import { SearchFilter } from "@/components/shared/dashboard/search-fliter";
import { PageHeader2 } from "@/components/shared/headers/page-headers";
import { BaseTable } from "@/components/shared/table/table-style";
import { Car, MoreVertical } from "lucide-react";
import { CheckCircleIcon, XCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { findRiderTrucks } from "@/_lib/api/dashboard/rider/findRiderTrucks";
import { ResponseTrucks } from "@/_lib/type/trucks/trucks";
import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
export function VehicleDashboardTable() {
  const {
    data: lorriesData,
    isPending,
    error: Error,
    isError,
  } = useQuery<ResponseTrucks>({
    queryKey: ["AllTrucks"],
    queryFn: findRiderTrucks,
  });
  if (isPending) {
    return <SkeletonCardList />;
  }
  const RowActions = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-3 py-2">
          <DropdownMenuItem>Edit User</DropdownMenuItem>
          <DropdownMenuItem>Suspend user</DropdownMenuItem>
          <DropdownMenuItem>User Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <PageHeader2
          title="Vehicles"
          actions={
            <>
              <Button variant="default" asChild>
                <Link href="/admin/dashboard/vehicle/add-vehicle">
                  Add Vehicle
                </Link>
              </Button>
              <Suspense>
                <PeriodSelector
                  paramName="vehicle"
                  icon={<Car />}
                  options={[
                    { label: "All", value: "all" },
                    { label: "Car", value: "car" },
                    { label: "Bike", value: "bike" },
                    { label: "truck", value: "Truck" },
                    { label: "lorry", value: "Lorry" },
                  ]}
                  defaultValue="all"
                  selectedClassName="bg-primaryT text-white"
                />
              </Suspense>
            </>
          }
        />
        <Suspense>
          <SearchFilter
            paramName="vehicleName"
            placeholder="Search vehicles..."
            className="bg-[#FAFBFD] rounded-md shadow-[0px_4px_4px_0px_#00000040] px-4 py-2"
          />
        </Suspense>
      </div>

      {!isPending && !isError ? (
        lorriesData?.count === 0 ? (
          <div>No Trucks</div>
        ) : (
          <BaseTable
            columns={[
              {
                key: "vehicleModel",
                label: "Vehicle Model",
              },
              {
                key: "make",
                label: "Vehicle Make",
              },
              {
                key: "_id",
                label: "Vehicle ID",
              },
              {
                key: "truckType",
                label: "Type",
              },
              {
                key: "riderId.userId",
                label: "Owner",
              },
              {
                key: "isVerified",
                label: "Verified",
                render: (value) =>
                  value ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ),
              },
            ]}
            data={lorriesData.trucks}
            showCountBadge={true}
            count={lorriesData.count}
            rowActions2={RowActions}
          />
        )
      ) : (
        <div className="text-red-400">{Error?.message}</div>
      )}
    </div>
  );
}
