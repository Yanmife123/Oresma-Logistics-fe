"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Truck, Bike, Car, Check, Upload, X } from "lucide-react";

type VehicleType = "bike" | "car" | "truck";

interface VehicleFormData {
  vehicleType: VehicleType;
  make: string;
  vehicleModel: string;
  year: string;
  color: string;
  licensePlate: string;
  vin: string;
  fuelType?: string;
  transmissionType?: string;
  condition?: string;
  maintenance?: {
    mileage?: string;
  };
  registrationNumber?: string;
  // Truck specific
  truckType?: string;
  dimensions?: {
    length: string;
    width: string;
    height: string;
    cargoArea: string;
  };
  capacity?: {
    maxWeight: string;
    maxVolume: string;
    payload: string;
  };
  truckFeatures?: {
    hasLiftGate?: boolean;
    hasRefrigeration?: boolean;
    hasGPS?: boolean;
    hasRamp?: boolean;
    hasCrane?: boolean;
    hasToolbox?: boolean;
    airConditioning?: boolean;
    powerSteering?: boolean;
  };
  // Car specific
  carPassengers?: string;
  carFeatures?: {
    hasAC?: boolean;
    hasGPS?: boolean;
    hasABS?: boolean;
    hasPowerWindows?: boolean;
    hasPowerSteering?: boolean;
    hasAirbags?: boolean;
    hasRearCamera?: boolean;
    hasCruiseControl?: boolean;
  };
  // Bike specific
  bikeEngineCC?: string;
  bikeFeatures?: {
    hasDiscBrakes?: boolean;
    hasABS?: boolean;
    hasGPS?: boolean;
    hasPowerSteering?: boolean;
    hasElectricStart?: boolean;
    hasHeatedGrips?: boolean;
  };
  // Common
  images: File[];
}

export function VehicleForm() {
  const [formData, setFormData] = useState<VehicleFormData>({
    vehicleType: "car",
    make: "",
    vehicleModel: "",
    year: "",
    color: "",
    licensePlate: "",
    vin: "",
    fuelType: "diesel",
    images: [],
    dimensions: {
      length: "",
      width: "",
      height: "",
      cargoArea: "",
    },
    capacity: {
      maxWeight: "",
      maxVolume: "",
      payload: "",
    },
    truckFeatures: {
      hasLiftGate: false,
      hasRefrigeration: false,
      hasGPS: false,
      hasRamp: false,
      hasCrane: false,
      hasToolbox: false,
      airConditioning: false,
      powerSteering: false,
    },
    carFeatures: {
      hasAC: false,
      hasGPS: false,
      hasABS: false,
      hasPowerWindows: false,
      hasPowerSteering: false,
      hasAirbags: false,
      hasRearCamera: false,
      hasCruiseControl: false,
    },
    bikeFeatures: {
      hasDiscBrakes: false,
      hasABS: false,
      hasGPS: false,
      hasPowerSteering: false,
      hasElectricStart: false,
      hasHeatedGrips: false,
    },
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement & {
      type: string;
    };

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      const [featureType, fieldName] = name.split(".");

      setFormData((prev) => {
        const featureKey =
          featureType === "truck"
            ? "truckFeatures"
            : featureType === "car"
            ? "carFeatures"
            : "bikeFeatures";
        return {
          ...prev,
          [featureKey]: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(prev[featureKey as keyof VehicleFormData] as any),
            [fieldName]: checkbox.checked,
          },
        };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNestedChange = (
    section: string,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(prev[section as keyof VehicleFormData] as any),
        [field]: value,
      },
    }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleVehicleTypeChange = (type: VehicleType) => {
    setFormData((prev) => ({ ...prev, vehicleType: type }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Vehicle Data:", formData);
    setSubmitted(true);
    setLoading(false);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        vehicleType: "car",
        make: "",
        vehicleModel: "",
        year: "",
        color: "",
        licensePlate: "",
        vin: "",
        fuelType: "diesel",
        images: [],
        dimensions: {
          length: "",
          width: "",
          height: "",
          cargoArea: "",
        },
        capacity: {
          maxWeight: "",
          maxVolume: "",
          payload: "",
        },
        truckFeatures: {
          hasLiftGate: false,
          hasRefrigeration: false,
          hasGPS: false,
          hasRamp: false,
          hasCrane: false,
          hasToolbox: false,
          airConditioning: false,
          powerSteering: false,
        },
        carFeatures: {
          hasAC: false,
          hasGPS: false,
          hasABS: false,
          hasPowerWindows: false,
          hasPowerSteering: false,
          hasAirbags: false,
          hasRearCamera: false,
          hasCruiseControl: false,
        },
        bikeFeatures: {
          hasDiscBrakes: false,
          hasABS: false,
          hasGPS: false,
          hasPowerSteering: false,
          hasElectricStart: false,
          hasHeatedGrips: false,
        },
      });
      setImagePreviews([]);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Vehicle Type Selection */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Select Vehicle Type
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { type: "car" as VehicleType, icon: Car, label: "Car (Dispatch)" },
            { type: "truck" as VehicleType, icon: Truck, label: "Truck" },
            { type: "bike" as VehicleType, icon: Bike, label: "Bike" },
          ].map(({ type, icon: Icon, label }) => (
            <button
              key={type}
              onClick={() => handleVehicleTypeChange(type)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
                formData.vehicleType === type
                  ? "border-[#021533] bg-[#e6e8eb]"
                  : "border-gray-300 bg-white hover:border-gray-400"
              }`}
            >
              <Icon
                className={`w-8 h-8 mb-2 ${
                  formData.vehicleType === type
                    ? "text-[#021533]"
                    : "text-gray-600"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  formData.vehicleType === type
                    ? "text-[#021533]"
                    : "text-gray-700"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General Information Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            General Information
          </h2>
          <p className="text-sm text-[#021533] mb-6">
            Please fill in the general information of the vehicle
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Make *
                </label>
                <Input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  placeholder="e.g., Ford"
                  className="w-full border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Model *
                </label>
                <Input
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  placeholder="e.g., F-750"
                  className="w-full border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year *
                </label>
                <Input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="e.g., 2023"
                  className="w-full border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <Input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="e.g., White"
                  className="w-full border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  License Plate *
                </label>
                <Input
                  type="text"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleChange}
                  placeholder="e.g., ABC-1234"
                  className="w-full border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  VIN
                </label>
                <Input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  placeholder="e.g., 1FDWF7DC3NDF12345"
                  className="w-full border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Number
                </label>
                <Input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber || ""}
                  onChange={handleChange}
                  placeholder="e.g., REG-123456"
                  className="w-full border border-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fuel Type
                </label>
                <Select
                  value={formData.fuelType || "diesel"}
                  onValueChange={(value) =>
                    handleSelectChange(value, "fuelType")
                  }
                >
                  <SelectTrigger className="w-full border border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="lpg">LPG</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transmission
                </label>
                <Select
                  value={formData.transmissionType || ""}
                  onValueChange={(value) =>
                    handleSelectChange(value, "transmissionType")
                  }
                >
                  <SelectTrigger className="w-full border border-gray-300">
                    <SelectValue placeholder="Select transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="cvt">CVT</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Condition
                </label>
                <Select
                  value={formData.condition || ""}
                  onValueChange={(value) =>
                    handleSelectChange(value, "condition")
                  }
                >
                  <SelectTrigger className="w-full border border-gray-300">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-1 md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Mileage (km)
                </label>
                <Input
                  type="number"
                  value={formData.maintenance?.mileage || ""}
                  onChange={(e) =>
                    handleNestedChange("maintenance", "mileage", e.target.value)
                  }
                  placeholder="e.g., 18500"
                  className="w-full border border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Truck Specifications */}
        {formData.vehicleType === "truck" && (
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
                      handleNestedChange("dimensions", "length", e.target.value)
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
                      handleNestedChange("dimensions", "width", e.target.value)
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
                      handleNestedChange("dimensions", "height", e.target.value)
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
                      handleNestedChange(
                        "dimensions",
                        "cargoArea",
                        e.target.value
                      )
                    }
                    placeholder="e.g., 60.2"
                    className="w-full border border-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Capacity */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Capacity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Weight (kg)
                  </label>
                  <Input
                    type="number"
                    value={formData.capacity?.maxWeight || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "capacity",
                        "maxWeight",
                        e.target.value
                      )
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
                      handleNestedChange(
                        "capacity",
                        "maxVolume",
                        e.target.value
                      )
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
                      handleNestedChange("capacity", "payload", e.target.value)
                    }
                    placeholder="e.g., 8000"
                    className="w-full border border-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Features
              </h3>
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
                  <label
                    key={key}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name={`truck.${key}`}
                      checked={
                        formData.truckFeatures?.[
                          key as keyof typeof formData.truckFeatures
                        ] as boolean
                      }
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Car Specifications */}
        {formData.vehicleType === "car" && (
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
                  <label
                    key={key}
                    className="flex items-center gap-2 cursor-pointer"
                  >
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
                    <span className="text-sm font-medium text-gray-700">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bike Specifications */}
        {formData.vehicleType === "bike" && (
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
                  <label
                    key={key}
                    className="flex items-center gap-2 cursor-pointer"
                  >
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
                    <span className="text-sm font-medium text-gray-700">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vehicle Images */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Vehicle Images
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Upload photos of your vehicle
          </p>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">
                  Click to upload images
                </p>
                <p className="text-xs text-gray-500">or drag and drop</p>
              </label>
            </div>

            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={preview || "/placeholder.svg"}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg border border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <Button
            type="submit"
            className="flex-1 bg-[#021533] hover:bg-[#021533]/90 text-white py-3 text-base font-semibold"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Adding Vehicle...
              </>
            ) : submitted ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Vehicle Added Successfully!
              </>
            ) : (
              "Add Vehicle"
            )}
          </Button>
        </div>
      </form>

      {/* Success Message */}
      {submitted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-green-800 font-semibold">Success!</p>
            <p className="text-green-700 text-sm">
              Your vehicle has been added to the fleet
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
