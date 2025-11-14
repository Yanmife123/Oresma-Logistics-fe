"use client";

import type React from "react";
import { Input } from "@/components/ui/input";
import { VehicleFormData } from "@/_lib/type/trucks/trucks";

interface CarFormProps {
  formData: VehicleFormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function CarForm({ formData, handleChange }: CarFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Car Specifications
        </h2>
        <p className="text-sm text-[#021533] mb-6">
          Please fill in the car specifications (all fields optional)
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Passengers
          </label>
          <Input
            type="number"
            name="carPassengers"
            value={formData.carPassengers || ""}
            onChange={handleChange}
            placeholder="e.g., 14"
            className="w-full border border-gray-300"
          />
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Car Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: "hasAC", label: "Air Conditioning" },
            { key: "hasGPS", label: "GPS Navigation" },
            { key: "hasABS", label: "ABS Brakes" },
            { key: "hasPowerWindows", label: "Power Windows" },
            { key: "hasPowerSteering", label: "Power Steering" },
            { key: "hasAirbags", label: "Airbags" },
            { key: "hasRearCamera", label: "Rear Camera" },
            { key: "hasCruiseControl", label: "Cruise Control" },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name={`car.${key}`}
                checked={
                  formData.carFeatures?.[
                    key as keyof typeof formData.carFeatures
                  ] as boolean
                }
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
