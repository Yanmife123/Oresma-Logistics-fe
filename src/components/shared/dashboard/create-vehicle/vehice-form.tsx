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
import { Truck, Bike, Check, Upload, X } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { createVehicle } from "@/_lib/api/admin/createVehicle";
import { VehicleFormData } from "@/_lib/type/trucks/trucks";
import { showToast } from "../../toast";
import { TruckForm } from "./truck-form";
import { CarForm } from "./car-form";
import { BikeForm } from "./bike-form";

type VehicleType = "bike" | "car" | "truck";

export function VehicleForm() {
  const [formData, setFormData] = useState<VehicleFormData>({
    vehicleType: "truck",
    make: "",
    vehicleModel: "",
    year: "",
    color: "",
    licensePlate: "",
    vin: "",
    fuelType: "diesel",
    photos: [],
    condition: "excellent",
    truckType: "",
    transmissionType: "",
    dimensions: {
      length: null,
      width: null,
      height: null,
      cargoArea: null,
    },
    capacity: {
      maxWeight: null,
      maxVolume: null,
      payload: null,
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
  // const [loading, setLoading] = useState(false);

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
    setFormData((prev) => ({ ...prev, phptos: [...prev.photos, ...files] }));

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
      photos: prev.photos.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const mutateVehicle = useMutation({
    mutationFn: (data: VehicleFormData) => createVehicle(data),
    onSuccess: (data) => {
      console.log("Vehicle created successfully:", data);
      showToast.success("Vehicle created successfully");
    },
    onError: (error) => {
      console.error("Error creating vehicle:", error);
      showToast.error(error.message || "Error creating vehicle");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateVehicle.mutateAsync(formData);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Vehicle Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        vehicleType: "truck",
        make: "",
        vehicleModel: "",
        year: "",
        color: "",
        licensePlate: "",
        vin: "",
        fuelType: "diesel",
        photos: [],
        condition: "excellent",
        transmissionType: "",
        truckType: "",
        // dimensions: {
        //   length: "",
        //   width: "",
        //   height: "",
        //   cargoArea: "",
        // },
        // capacity: {
        //   maxWeight: "",
        //   maxVolume: "",
        //   payload: "",
        // },
        // truckFeatures: {
        //   hasLiftGate: false,
        //   hasRefrigeration: false,
        //   hasGPS: false,
        //   hasRamp: false,
        //   hasCrane: false,
        //   hasToolbox: false,
        //   airConditioning: false,
        //   powerSteering: false,
        // },
        // carFeatures: {
        //   hasAC: false,
        //   hasGPS: false,
        //   hasABS: false,
        //   hasPowerWindows: false,
        //   hasPowerSteering: false,
        //   hasAirbags: false,
        //   hasRearCamera: false,
        //   hasCruiseControl: false,
        // },
        // bikeFeatures: {
        //   hasDiscBrakes: false,
        //   hasABS: false,
        //   hasGPS: false,
        //   hasPowerSteering: false,
        //   hasElectricStart: false,
        //   hasHeatedGrips: false,
        // },
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
            { type: "truck" as VehicleType, icon: Truck, label: "Truck" },
            // { type: "car" as VehicleType, icon: Car, label: "Car" },
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
                  required
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
                  value={formData.condition || "excellent"}
                  onValueChange={(value) =>
                    handleSelectChange(value, "condition")
                  }
                  required
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

        {formData.vehicleType === "truck" && (
          <TruckForm
            formData={formData}
            onNestedChange={handleNestedChange}
            handleChange={handleChange}
          />
        )}

        {formData.vehicleType === "car" && (
          <CarForm formData={formData} handleChange={handleChange} />
        )}

        {formData.vehicleType === "bike" && (
          <BikeForm formData={formData} handleChange={handleChange} />
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
                name="photos"
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
            disabled={mutateVehicle.isPending || submitted}
          >
            {mutateVehicle.isPending ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Adding Vehicle...
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
