"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

interface TruckData {
  id: string;
  model: string;
  miles: string;
  color: string;
  engine: string;
  registrationNumber: string;
  subName: string;
  calibration: string;
  premiumTurn: string;
  brand: string;
  price: string;
  available: boolean;
  image: string;
}

const trucksData: TruckData[] = [
  {
    id: "1",
    model: "2013 Isuzu M100-600",
    miles: "12,346 Miles",
    color: "Blue",
    engine: "12 Cylinder dies",
    registrationNumber: "#00987657",
    subName: "E2345",
    calibration: "45,4530 ml",
    premiumTurn: "45,4530 ml",
    brand: "Isuzu",
    price: "₦66,670",
    available: true,
    image: "/truck1.png",
  },
  {
    id: "2",
    model: "2013 Isuzu M100-600",
    miles: "10,346 Miles",
    color: "Blue",
    engine: "12 Cylinder dies",
    registrationNumber: "#00987657",
    subName: "E2345",
    calibration: "45,4530 ml",
    premiumTurn: "45,4530 ml",
    brand: "Isuzu",
    price: "₦66,670",
    available: false,
    image: "/truck1.png",
  },
  {
    id: "3",
    model: "2013 Isuzu M100-600",
    miles: "12,346 Miles",
    color: "Blue",
    engine: "12 Cylinder dies",
    registrationNumber: "#00987657",
    subName: "E2345",
    calibration: "45,4530 ml",
    premiumTurn: "45,4530 ml",
    brand: "Isuzu",
    price: "₦66,670",
    available: true,
    image: "/truck1.png",
  },
  {
    id: "4",
    model: "2013 Isuzu M100-600",
    miles: "12,346 Miles",
    color: "Blue",
    engine: "12 Cylinder dies",
    registrationNumber: "#00987657",
    subName: "E2345",
    calibration: "45,4530 ml",
    premiumTurn: "45,4530 ml",
    brand: "Isuzu",
    price: "₦66,670",
    available: false,
    image: "/truck1.png",
  },
  {
    id: "5",
    model: "2013 Isuzu M100-600",
    miles: "12,346 Miles",
    color: "Blue",
    engine: "12 Cylinder dies",
    registrationNumber: "#00987657",
    subName: "E2345",
    calibration: "45,4530 ml",
    premiumTurn: "45,4530 ml",
    brand: "Isuzu",
    price: "₦66,670",
    available: false,
    image: "/truck1.png",
  },
];

export function TrucksListing() {
  const [activeTab, setActiveTab] = useState("model");
  // const [currentPage, setCurrentPage] = useState(1);

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
          {trucksData.map((truck) => (
            <div
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 shadow-sm md:flex-row md:items-center md:gap-6 max-md:max-w-[400px] max-md:w-full md:w-full"
              key={truck.id}
            >
              {/* Truck Image */}
              <div className="flex-shrink-0 self-center md:self-auto">
                <Image
                  src={truck.image || "/placeholder.svg"}
                  alt={truck.model}
                  width={120}
                  height={120}
                  className="h-24 w-24 rounded-md object-cover md:h-[120px] md:w-[120px]"
                />
              </div>

              {/* Truck Details */}
              <div className="flex-1 flex flex-col gap-3 max-md:items-center">
                <div>
                  <h3 className="text-base font-semibold text-foreground md:text-lg">
                    {truck.model}
                  </h3>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    {truck.miles} | {truck.color} | {truck.engine} |{" "}
                    {truck.registrationNumber}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm xs:grid-cols-2 md:grid-cols-4 md:gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground md:text-sm">
                      Sub-name
                    </p>
                    <p className="text-sm font-medium text-foreground md:text-base">
                      {truck.subName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground md:text-sm">
                      Calibration
                    </p>
                    <p className="text-sm font-medium text-foreground md:text-base">
                      {truck.calibration}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground md:text-sm">
                      Premium turn
                    </p>
                    <p className="text-sm font-medium text-foreground md:text-base">
                      {truck.premiumTurn}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xs font-bold text-primary-foreground">
                      I
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground md:text-base">
                        {truck.brand}
                      </p>
                      <p className="text-xs text-muted-foreground">Brand</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-3 border-t border-border pt-3 md:flex-col md:items-end md:border-t-0 md:pt-0">
                <div className="text-left md:text-right">
                  <p className="text-lg font-bold text-foreground md:text-xl">
                    {truck.price}
                  </p>
                  <p className="text-xs text-muted-foreground">Lowest price</p>
                </div>
                <Button
                  className="bg-orange-200 text-white hover:bg-orange-300"
                  asChild
                >
                  <Link href={`/dashboard/rider/trucks/${truck.id}`}>
                    {truck.available ? "Find this" : "Find this"}
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
