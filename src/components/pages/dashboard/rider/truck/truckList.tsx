"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { findRiderTrucks } from "@/_lib/api/dashboard/rider/findRiderTrucks";
import { ResponseTrucks } from "@/_lib/type/trucks/trucks";

import SkeletonCardList from "@/components/shared/skeleton/card-list-skeleton";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

export function TrucksListing() {
  const [activeTab, setActiveTab] = useState("model");
  // const [currentPage, setCurrentPage] = useState(1);
  const {
    data: lorriesData,
    isLoading,
    error: Error,
  } = useQuery<ResponseTrucks>({
    queryKey: ["FindTrucks"],
    queryFn: findRiderTrucks,
  });

  if (isLoading) {
    return <SkeletonCardList />;
  }

  if (!isLoading && !Error) {
    if (lorriesData?.count === 0) {
      return <div>No Trucks</div>;
    } else {
      return (
        <div className="min-h-screen bg-background p-6">
          <div className="mx-auto max-w-5xl">
            <div className="">
              <form
                onSubmit={() => {}}
                className=" relative flex gap-2 flex-row justify-start py-2 px-1 rounded-xl w-auto max-w-2xl bg-[#FAFBFD] shadow-[0px_4px_4px_0px_#00000040]"
              >
                <Button
                  asChild
                  variant={"ghost"}
                  className="hover:bg-transparent hover:text-secondaryT  cursor-pointer"
                >
                  <Search width={50} height={50} className="text-secondaryT" />
                </Button>
                <Input className="max-w-2xl border-none shadow-none outline-none focus:outline-none" />
              </form>
            </div>
            {/* Tabs Navigation */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="mb-8 mt-4"
            >
              <TabsList className="grid w-full max-w-md grid-cols-4 bg-transparent gap-3">
                <TabsTrigger value="model" className="bg-[#FAFBFD]">
                  Model
                </TabsTrigger>
                <TabsTrigger value="size" className="bg-[#FAFBFD]">
                  Size
                </TabsTrigger>
                <TabsTrigger value="brand" className="bg-[#FAFBFD]">
                  Brand
                </TabsTrigger>
                <TabsTrigger value="manufacturer" className="bg-[#FAFBFD]">
                  Manufacturer
                </TabsTrigger>
              </TabsList>
            </Tabs>
            {/* Trucks List */}
            <div className=" flex flex-col justify-center items-center gap-5">
              {lorriesData?.trucks.map((truck) => (
                <div
                  className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 shadow-sm md:flex-row md:items-center md:gap-6 max-md:max-w-[400px] max-md:w-full md:w-full"
                  key={truck._id}
                >
                  {/* Truck Image */}
                  <div className="flex-shrink-0 self-center md:self-auto">
                    <Image
                      src={
                        truck.photos[0] ||
                        "https://res.cloudinary.com/duyhha3mz/image/upload/v1760319027/lorry_djnre2.png"
                      }
                      alt={truck.vehicleModel}
                      width={120}
                      height={120}
                      className="h-24 w-24 rounded-md object-cover md:h-[120px] md:w-[120px]"
                    />
                  </div>

                  {/* Truck Details */}
                  <div className="flex-1 flex flex-col gap-3 max-md:items-center">
                    <div>
                      <h3 className="text-base font-semibold text-foreground md:text-lg">
                        {truck.vehicleModel}
                      </h3>
                      <p className="text-xs text-muted-foreground md:text-sm">
                        {truck.make} | {truck.color} | {truck.truckType} |{" "}
                        {truck.year}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-sm xs:grid-cols-2 md:grid-cols-4 md:gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground md:text-sm">
                          Condition
                        </p>
                        <p className="text-sm font-medium text-foreground md:text-base">
                          {truck.condition}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground md:text-sm">
                          Transmission Type
                        </p>
                        <p className="text-sm font-medium text-foreground md:text-base">
                          {truck.transmissionType}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground md:text-sm">
                          Fuel Type
                        </p>
                        <p className="text-sm font-medium text-foreground md:text-base">
                          {truck.fuelType}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-between gap-3 border-t border-border pt-3 md:flex-col md:items-end md:border-t-0 md:pt-0">
                    <Button
                      className="bg-secondaryT text-white hover:bg-orange-300"
                      asChild
                      disabled={!truck.isAvailable}
                    >
                      <Link href={`/dashboard/rider/trucks/${truck._id}`}>
                        {truck.isAvailable ? "Find this" : "Not Availablle"}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {/* <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.max(1, prev - 1));
                  }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(1);
                  }}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 2}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(2);
                  }}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 3}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(3);
                  }}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === 4}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(4);
                  }}
                >
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => prev + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div> */}
          </div>
        </div>
      );
    }
  } else {
    return <div className="text-red-500">{Error?.message}</div>;
  }
}
