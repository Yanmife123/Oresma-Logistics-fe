import { LocationInfo } from "./rider-request";
import { PackageDetails } from "./rider-request";
import { PricingInfo } from "./rider-request";
export interface UserRequests {
  _id: string;
  userId: string;
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

export interface AllUserRequests {
  success: boolean;
  message: string;
  count: number;
  rideRequests: UserRequests[];
}
