import { RideRequest } from "./rider-request";
export type AssignmentRequests = {
  message: string;
  count: number;
  success: boolean;
  rideRequests: RideRequest[];
};
