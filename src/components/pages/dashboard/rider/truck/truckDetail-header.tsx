"use client";

import { useState } from "react";
import { Truck } from "@/_lib/type/trucks/trucks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface TruckDetailHeaderProps {
  truck: Truck;
}

export function TruckDetailHeader({ truck }: TruckDetailHeaderProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images =
    truck.photos && truck.photos.length > 0
      ? truck.photos
      : ["/ST1.jpg", "/truck1.png", "/truck2.png"];

  const mainImage = images[selectedImageIndex];

  return (
    <div className="space-y-6">
      {/* Main Featured Image */}
      <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
        <img
          src={mainImage || "/placeholder.svg"}
          alt={`${truck.make} ${truck.vehicleModel}`}
          className="w-full h-full object-cover"
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 flex gap-2">
          {truck.isAvailable && (
            <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
          )}
          <Badge
            className={
              truck.verificationStatus === "approved"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-yellow-500 hover:bg-yellow-600"
            }
          >
            {truck.verificationStatus === "approved"
              ? "Verified"
              : "Pending Verification"}
          </Badge>
        </div>

        <div className="absolute bottom-4 left-4">
          <Badge className="bg-slate-900/80 hover:bg-slate-900">
            {selectedImageIndex + 1} / {images.length}
          </Badge>
        </div>
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative h-20 rounded-lg overflow-hidden transition-all border-2 ${
                selectedImageIndex === index
                  ? "border-orange-500 ring-2 ring-orange-300"
                  : "border-slate-200 hover:border-orange-300"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${truck.make} ${truck.vehicleModel} - View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Truck Title and Basic Info */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2 capitalize">
          {truck.year} {truck.make} {truck.vehicleModel}
        </h1>
        <p className="text-base text-slate-600 capitalize">
          {truck.truckType} • {truck.color} • License Plate:{" "}
          {truck.licensePlate}
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 border-none bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-sm text-slate-600 mb-1">Rating</div>
          <div className="text-2xl font-bold text-orange-600">
            {truck.rating.toFixed(1)} ⭐
          </div>
        </Card>
        <Card className="p-4 border-none bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-sm text-slate-600 mb-1">Total Trips</div>
          <div className="text-2xl font-bold text-orange-600">
            {truck.totalTrips}
          </div>
        </Card>
        <Card className="p-4 border-none bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-sm text-slate-600 mb-1">Distance</div>
          <div className="text-2xl font-bold text-orange-600">
            {(truck.totalDistance / 1000).toFixed(1)}K km
          </div>
        </Card>
        <Card className="p-4 border-none bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-sm text-slate-600 mb-1">Revenue</div>
          <div className="text-2xl font-bold text-orange-600">
            ${(truck.totalRevenue / 1000).toFixed(1)}K
          </div>
        </Card>
      </div>
    </div>
  );
}
