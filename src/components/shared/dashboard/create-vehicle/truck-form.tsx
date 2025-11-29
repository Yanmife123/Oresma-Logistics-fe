"use client";

import type React from "react";
import { Input } from "@/components/ui/input";
import { VehicleFormData } from "@/_lib/type/trucks/trucks";

interface TruckFormProps {
  formData: VehicleFormData;
  onNestedChange: (section: string, field: string, value: string) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function TruckForm({
  formData,
  onNestedChange,
  handleChange,
}: TruckFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Truck Specifications
        </h2>
        <p className="text-sm text-[#021533] mb-6">
          Additional truck details (all fields optional)
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Truck Type
              </label>
              <Input
                type="text"
                name="truckType"
                value={formData.truckType || ""}
                onChange={handleChange}
                placeholder="e.g., box-truck, flatbed, dump-truck"
                className="w-full border border-gray-300"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dimensions */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Dimensions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Length (m)
            </label>
            <Input
              type="number"
              step="0.1"
              value={formData.dimensions?.length || ""}
              onChange={(e) =>
                onNestedChange("dimensions", "length", e.target.value)
              }
              placeholder="e.g., 9.8"
              className="w-full border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Width (m)
            </label>
            <Input
              type="number"
              step="0.1"
              value={formData.dimensions?.width || ""}
              onChange={(e) =>
                onNestedChange("dimensions", "width", e.target.value)
              }
              placeholder="e.g., 2.5"
              className="w-full border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (m)
            </label>
            <Input
              type="number"
              step="0.1"
              value={formData.dimensions?.height || ""}
              onChange={(e) =>
                onNestedChange("dimensions", "height", e.target.value)
              }
              placeholder="e.g., 3.6"
              className="w-full border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cargo Area (m²)
            </label>
            <Input
              type="number"
              step="0.1"
              value={formData.dimensions?.cargoArea || ""}
              onChange={(e) =>
                onNestedChange("dimensions", "cargoArea", e.target.value)
              }
              placeholder="e.g., 60.2"
              className="w-full border border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Capacity */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-4">Capacity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Weight (kg)
            </label>
            <Input
              type="number"
              value={formData.capacity?.maxWeight || ""}
              onChange={(e) =>
                onNestedChange("capacity", "maxWeight", e.target.value)
              }
              placeholder="e.g., 12000"
              className="w-full border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Volume (m³)
            </label>
            <Input
              type="number"
              step="0.1"
              value={formData.capacity?.maxVolume || ""}
              onChange={(e) =>
                onNestedChange("capacity", "maxVolume", e.target.value)
              }
              placeholder="e.g., 45"
              className="w-full border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payload (kg)
            </label>
            <Input
              type="number"
              value={formData.capacity?.payload || ""}
              onChange={(e) =>
                onNestedChange("capacity", "payload", e.target.value)
              }
              placeholder="e.g., 8000"
              className="w-full border border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-4">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: "hasLiftGate", label: "Lift Gate" },
            { key: "hasRefrigeration", label: "Refrigeration" },
            { key: "hasGPS", label: "GPS Tracking" },
            { key: "hasRamp", label: "Loading Ramp" },
            { key: "hasCrane", label: "Crane" },
            { key: "hasToolbox", label: "Toolbox" },
            { key: "airConditioning", label: "Air Conditioning" },
            { key: "powerSteering", label: "Power Steering" },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name={`truck.${key}`}
                checked={
                  formData.features?.[
                    key as keyof typeof formData.features
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
