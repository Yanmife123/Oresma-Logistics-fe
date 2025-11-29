type TruckImage = {
  url: string;
  type: string;
};
export interface VehicleFormData {
  vehicleType: "truck" | "car" | "bike";
  make: string;
  vehicleModel: string;
  year: string;
  color: string;
  licensePlate: string;
  vin: string;
  fuelType: string;
  truckType: string;
  transmissionType: string;
  condition: string;
  maintenance?: {
    mileage?: string | null;
  };
  registrationNumber?: string;
  // Truck specific

  dimensions?: {
    length?: string | null;
    width?: string | null;
    height?: string | null;
    cargoArea?: string | null;
  };
  capacity?: {
    maxWeight?: string | null;
    maxVolume?: string | null;
    payload?: string | null;
  };
  features?: {
    hasLiftGate?: boolean | null;
    hasRefrigeration?: boolean | null;
    hasGPS?: boolean | null;
    hasRamp?: boolean | null;
    hasCrane?: boolean | null;
    hasToolbox?: boolean | null;
    airConditioning?: boolean | null;
    powerSteering?: boolean | null;
  };
  // Car specific
  carPassengers?: string | null;
  carFeatures?: {
    hasAC?: boolean | null;
    hasGPS?: boolean | null;
    hasABS?: boolean | null;
    hasPowerWindows?: boolean | null;
    hasPowerSteering?: boolean | null;
    hasAirbags?: boolean | null;
    hasRearCamera?: boolean | null;
    hasCruiseControl?: boolean | null;
  };
  // Bike specific
  bikeEngineCC?: string | null;
  bikeFeatures?: {
    hasDiscBrakes?: boolean | null;
    hasABS?: boolean | null;
    hasGPS?: boolean | null;
    hasPowerSteering?: boolean | null;
    hasElectricStart?: boolean | null;
    hasHeatedGrips?: boolean | null;
  };
  // Common
  photos: File[];
}

export interface ResponseSingleTrucks {
  success: boolean;
  message: string;
  count: number;
  truck: Truck;
}

export interface ResponseTrucks {
  success: boolean;
  message: string;
  count: number;
  trucks: Truck[];
}

/* ------------------ TRUCK OBJECT ------------------ */
export interface Truck {
  _id: string;

  riderId: RiderProfile; // nested rider

  make: string;
  vehicleModel: string;
  year: number;
  color: string;

  licensePlate: string;
  vin: string;

  truckType: string; // "flatbed", "box-truck", etc.
  transmissionType: string;
  fuelType: string;
  condition: string;

  photos: string[];
  documents: string[];

  features: TruckFeatures;
  maintenance: TruckMaintenance;

  isAvailable: boolean;
  isVerified: boolean;
  verificationStatus: "pending" | "approved" | "rejected";

  totalTrips: number;
  totalDistance: number;
  totalRevenue: number;
  rating: number;

  createdAt: string;
  updatedAt: string;
}

/* ------------------ TRUCK FEATURES ------------------ */
export interface TruckFeatures {
  hasLiftGate: boolean;
  hasRefrigeration: boolean;
  hasGPS: boolean;
  hasRamp: boolean;
  hasCrane: boolean;
  hasToolbox: boolean;
  airConditioning: boolean;
  powerSteering: boolean;
  other: string[];
}

/* ------------------ MAINTENANCE ------------------ */
export interface TruckMaintenance {
  mileage: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serviceHistory: any[]; // can be typed if needed
}

/* ------------------ RIDER PROFILE ------------------ */
export interface RiderProfile {
  _id: string;

  userId: string; // in your truck response userId is NOT an object
  isVendor: boolean;
  isVerified: boolean;
  verificationStatus: "pending" | "approved" | "rejected";

  rating: number;
  totalDeliveries: number;
  totalEarnings: number;

  isAvailable: boolean;
  accountStatus: "active" | "inactive" | "suspended";

  verificationDocuments: [];

  currentLocation: GeoLocation;

  vendorProfile: VendorProfile;
  vehicleInfo: VehicleInfo;

  createdAt: string;
  updatedAt: string;
}

/* ------------------ SHARED TYPES ------------------ */
export interface GeoLocation {
  type: "Point";
  coordinates: [number, number];
}

export interface VehicleInfo {
  vehicleType: string; // "truck"
}

export interface VendorProfile {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  operatingHours: any[];
}
