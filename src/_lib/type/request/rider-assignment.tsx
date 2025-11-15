import { RideRequest } from "./rider-request";
export type AssignmentRequests = {
  message: string;
  count: number | string;
  success: boolean;
  rideRequests: RideRequest[];
};
