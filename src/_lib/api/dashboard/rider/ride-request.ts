import { axiosInstance2 } from "@/_lib/axios";

interface RideRequestProps {
  pickup: {
    address: string;
  };
  dropoff: {
    address: string;
  };
  vehicleType: string;
}

export async function createRideRequest(data: RideRequestProps) {
  const response = await axiosInstance2.post("/ride-requests", data);
  return response.data;
}
