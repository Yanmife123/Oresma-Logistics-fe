export interface RideRequestsResponse {
  success: boolean;
  message: string;
  count: number;
  rideRequests: RideRequest[];
}
export interface SingleRideRequestResponse {
  success: boolean;
  message: string;
  count: number;
  rideRequests: RideRequest;
}

export interface RideRequest {
  _id: string;
  userId: RideUser;
  vehicleType: string; // "truck", "car", etc.
  pickup: LocationInfo;
  dropoff: LocationInfo;

  packageDetails: PackageDetails;
  pricing: PricingInfo;
  status:
    | "pending"
    | "payment_failed"
    | "payment_success"
    | "assigned"
    | "in-progress"
    | "completed"
    | "cancelled";
  invoiceSent: boolean;
  isPriority: boolean;
  requiresDocuments: boolean;

  referenceCode: string;

  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

export interface RideUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string; // "customer"
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LocationInfo {
  address: string;
}

export interface PackageDetails {
  fragile: boolean;
  requiresAssistance: boolean;
}

export interface PricingInfo {
  currency: string; // "NGN"
}
