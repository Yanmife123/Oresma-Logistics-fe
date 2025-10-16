"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface LorryData {
  id: string;
  name: string;
  registrationNumber: string;
  image: string;
  make: string;
  registeredFor: string;
  status: "available" | "unavailable";
}

const lorries: LorryData[] = [
  {
    id: "1",
    name: "2013 Isuzu Frontier",
    registrationNumber: "11 12 DCFGR ADF- 24656T",
    image:
      "https://res.cloudinary.com/duyhha3mz/image/upload/v1760319027/lorry_djnre2.png",
    make: "Isuzu",
    registeredFor: "Registered for trucks",
    status: "available",
  },
  {
    id: "2",
    name: "2013 Isuzu Frontier",
    registrationNumber: "11 12 DCFGR ADF- 24656T",
    image:
      "https://res.cloudinary.com/duyhha3mz/image/upload/v1760319027/lorry_djnre2.png",
    make: "Isuzu",
    registeredFor: "Registered for trucks",
    status: "available",
  },
  {
    id: "3",
    name: "2013 Isuzu Frontier",
    registrationNumber: "11 12 DCFGR ADF- 24656T",
    image:
      "https://res.cloudinary.com/duyhha3mz/image/upload/v1760319027/lorry_djnre2.png",
    make: "Isuzu",
    registeredFor: "Registered for trucks",
    status: "available",
  },
];

export function LorryRecommendation() {
  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-semibold">Recommended Lorries</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lorries.map((lorry) => (
          <Card key={lorry.id} className="overflow-hidden bg-blue-50/50">
            {/* Lorry Image */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-blue-50 p-6">
              <div className="relative h-full w-full">
                <Image
                  src={lorry.image || "/placeholder.svg"}
                  alt={lorry.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Lorry Details */}
            <div className="space-y-4 p-6">
              {/* Name and Registration */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{lorry.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {lorry.registrationNumber}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">
                    Car make
                  </span>
                  <span className="text-sm font-medium">{lorry.make}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">
                    Car make
                  </span>
                  <span className="text-sm font-medium">{lorry.make}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">
                    Car make
                  </span>
                  <span className="text-sm font-medium">{lorry.make}</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm text-muted-foreground">
                    Car make
                  </span>
                  <span className="text-sm font-medium">{lorry.make}</span>
                </div>
              </div>

              {/* Registration Status */}
              <div className="flex items-center gap-2 pt-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">
                  {lorry.registeredFor}
                </span>
              </div>

              {/* Status and Action */}
              <div className="flex items-center justify-between pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Status</p>
                  <Badge
                    variant={
                      lorry.status === "available" ? "secondary" : "destructive"
                    }
                    className={
                      lorry.status === "available"
                        ? "bg-orange-100 text-orange-700 hover:bg-orange-100"
                        : ""
                    }
                  >
                    {lorry.status === "available" ? "Available" : "Unavailable"}
                  </Badge>
                </div>
                {lorry.status === "available" && (
                  <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href={`/dashboard/rider/trucks/${lorry.id}`}>
                      {" "}
                      Choose this
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
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
    </div>
  );
}
