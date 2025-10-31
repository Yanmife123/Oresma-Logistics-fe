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
export function VehicleDashboardTable() {
  const vehicleTableData = [
    {
      name: "Car", // Mapped from 'Vehicle Make' column
      id: "#012345", // Mapped from 'Vehicle ID' column
      type: "Sedan", // Mapped from 'Type' column
      owner: "Oresma",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Lorry",
      id: "#012345",
      type: "Sedan",
      owner: "Oresma",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Car",
      id: "#012345",
      type: "Sedan",
      owner: "Oresma",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Truck",
      id: "#012345",
      type: "Sedan",
      owner: "Oresma",
      is_verified: false, // Based on the red 'X' icon
    },
    {
      name: "Car",
      id: "#012345",
      type: "Sedan",
      owner: "Oresma",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Lorry",
      id: "#012345",
      type: "Sedan",
      owner: "Oresma",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Car",
      id: "#012345",
      type: "Sedan",
      owner: "Oresma",
      is_verified: true, // Based on the green checkmark icon
    },
    {
      name: "Truck",
      id: "#012345",
      type: "Sedan",
      owner: "Oresma",
      is_verified: false, // Based on the red 'X' icon
    },
    {
      name: "Car",
      id: "#012345",
      type: "Sedan",
      owner: "Oresma",
      is_verified: true, // Based on the green checkmark icon
    },
  ];
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
      <BaseTable
        columns={[
          {
            key: "name",
            label: "Vehicle Name",
          },
          {
            key: "id",
            label: "Vehicle ID",
          },
          {
            key: "type",
            label: "Type",
          },
          {
            key: "owner",
            label: "Owner",
          },
          {
            key: "is_verified",
            label: "Verified",
            render: (value) =>
              value ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              ),
          },
        ]}
        data={vehicleTableData}
        rowActions2={RowActions}
      />
    </div>
  );
}
