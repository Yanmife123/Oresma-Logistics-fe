"use client";

import type React from "react";
import { Input } from "@/components/ui/input";
import { VehicleFormData } from "@/_lib/type/trucks/trucks";

interface BikeFormProps {
  formData: VehicleFormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function BikeForm({ formData, handleChange }: BikeFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Bike Specifications
        </h2>
        <p className="text-sm text-[#021533] mb-6">
          Please fill in the bike specifications (all fields optional)
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Engine CC
          </label>
          <Input
            type="number"
            name="bikeEngineCC"
            value={formData.bikeEngineCC || ""}
            onChange={handleChange}
            placeholder="e.g., 150"
            className="w-full border border-gray-300"
          />
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Bike Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: "hasDiscBrakes", label: "Disc Brakes" },
            { key: "hasABS", label: "ABS System" },
            { key: "hasGPS", label: "GPS Tracking" },
            { key: "hasPowerSteering", label: "Power Steering" },
            { key: "hasElectricStart", label: "Electric Start" },
            { key: "hasHeatedGrips", label: "Heated Grips" },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name={`bike.${key}`}
                checked={
                  formData.bikeFeatures?.[
                    key as keyof typeof formData.bikeFeatures
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
