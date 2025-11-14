type TruckImage = {
  url: string;
  type: string;
};

export interface VehicleData {
  // vehicleType: "truck" | "car" | "bike";
  make: string;
  vehicleModel: string;
  year: string | number;
  color: string;
  licensePlate: string;
  vin: string;
  truckType: string;
  transmissionType: string;
  fuelType: string;
  condition: string;

  dimensions?: {
    length: string | number;
    width: string | number;
    height: string | number;
    cargoArea: string | number;
  };
  capacity?: {
    maxWeight: string | number;
    maxVolume: string | number;
    payload: string | number;
  };
  features?: {
    hasLiftGate: boolean;
    hasRefrigeration: boolean;
    hasGPS: boolean;
    hasRamp: true;
    hasCrane: false;
    hasToolbox: true;
    airConditioning: true;
    powerSteering: true;
    other: string[];
  };
  maintenance?: {
    lastServiceDate: string;
    nextServiceDate: string;
    mileage: string | number;
    serviceHistory: [
      {
        date: string;
        type: string;
        description: string;
        cost: string | number;
        mileage: string | number;
      }
    ];
  };
  insurance?: {
    provider: string;
    policyNumber: string;
    expiryDate: string;
    coverageAmount: string | number;
    documentUrl: string;
  };
  registration?: {
    registrationNumber: string;
    registrationDate: string;
    expiryDate: string;
    documentUrl: string;
  };
  photos?: TruckImage[];
  documents?: {
    type: string;
    url: string;
    expiryDate: string;
  }[];
}

export interface VehicleFormData {
  vehicleType: "truck" | "car" | "bike";
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
