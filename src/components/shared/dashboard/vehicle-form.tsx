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
  registrationNumber: string;
  licensePlate: string;
  make: string;
  model: string;
  year: string;
  color: string;
  fuelType: string;
  mileage: string;
  images: File[];
  // Truck specific
  truckCapacityMetricTonnes?: string;
  truckHeight?: string;
  truckTireSize?: string;
  truckFireSize?: string;
  // Car specific
  carPassengers?: string;
  // Bike specific
  bikeEngineCC?: string;
}

export function VehicleForm() {
  const [formData, setFormData] = useState<VehicleFormData>({
    vehicleType: "car",
    registrationNumber: "",
    licensePlate: "",
    make: "",
    model: "",
    year: "",
    color: "",
    fuelType: "diesel",
    mileage: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    // Create previews
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
        registrationNumber: "",
        licensePlate: "",
        make: "",
        model: "",
        year: "",
        color: "",
        fuelType: "diesel",
        mileage: "",
        images: [],
      });
      setImagePreviews([]);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Vehicle Type Selection */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-primaryT mb-4">
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
                  ? "border-primaryT bg-[#e6e8eb]"
                  : "border-gray-300 bg-white hover:border-gray-400"
              }`}
            >
              <Icon
                className={`w-8 h-8 mb-2 ${
                  formData.vehicleType === type
                    ? "text-primaryT"
                    : "text-gray-600"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  formData.vehicleType === type
                    ? "text-primaryT"
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
          <h2 className="text-lg font-semibold text-primaryT mb-2">
            General Information
          </h2>
          <p className="text-sm text-[#02132e] mb-6">
            Please fill in the general information of the vehicle
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Number *
                </label>
                <Input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="e.g., REG-001"
                  className="w-full border border-gray-300"
                  required
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
                  Make *
                </label>
                <Input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  placeholder="e.g., Toyota"
                  className="w-full border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model *
                </label>
                <Input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="e.g., Hiace"
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
                  placeholder="e.g., Yellow"
                  className="w-full border border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Type-Specific Specifications */}
        {formData.vehicleType === "truck" && (
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-primaryT mb-2">
              Truck Specifications
            </h2>
            <p className="text-sm text-[#02132e] mb-6">
              Please fill in the truck specifications
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capacity (Metric Tonnes) *
                  </label>
                  <Input
                    type="number"
                    name="truckCapacityMetricTonnes"
                    value={formData.truckCapacityMetricTonnes || ""}
                    onChange={handleChange}
                    placeholder="e.g., 4000"
                    className="w-full border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (m) *
                  </label>
                  <Input
                    type="number"
                    name="truckHeight"
                    value={formData.truckHeight || ""}
                    onChange={handleChange}
                    placeholder="e.g., 200"
                    className="w-full border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tire Size *
                  </label>
                  <Input
                    type="text"
                    name="truckTireSize"
                    value={formData.truckTireSize || ""}
                    onChange={handleChange}
                    placeholder="e.g., 8kg"
                    className="w-full border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fire Size *
                  </label>
                  <Input
                    type="text"
                    name="truckFireSize"
                    value={formData.truckFireSize || ""}
                    onChange={handleChange}
                    placeholder="e.g., 8kg"
                    className="w-full border border-gray-300"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {formData.vehicleType === "car" && (
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-primaryT mb-2">
              Car Specifications
            </h2>
            <p className="text-sm text-[#02132e] mb-6">
              Please fill in the car specifications
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Passengers *
                </label>
                <Input
                  type="number"
                  name="carPassengers"
                  value={formData.carPassengers || ""}
                  onChange={handleChange}
                  placeholder="e.g., 14"
                  className="w-full border border-gray-300"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {formData.vehicleType === "bike" && (
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Bike Specifications
            </h2>
            <p className="text-sm text-[#02132e] mb-6">
              Please fill in the bike specifications
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Engine CC *
                </label>
                <Input
                  type="number"
                  name="bikeEngineCC"
                  value={formData.bikeEngineCC || ""}
                  onChange={handleChange}
                  placeholder="e.g., 150"
                  className="w-full border border-gray-300"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Additional Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Additional Details
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fuel Type *
                </label>
                <Select
                  value={formData.fuelType}
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
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Mileage (km)
                </label>
                <Input
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  placeholder="e.g., 15000"
                  className="w-full border border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image Upload Section */}
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
            disabled={loading || submitted}
            className="flex-1 bg-primaryT hover:bg-primaryT/90 text-white py-3 text-base font-semibold"
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
