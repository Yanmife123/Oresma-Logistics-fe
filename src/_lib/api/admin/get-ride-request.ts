import { axiosInstance2 } from "@/_lib/axios";

export async function adminGetRideRequests() {
  const response = await axiosInstance2.get("/ride-requests");
  return response.data;
}

export async function adminGetSingleRideRequest(id: { id: string }) {
  const response = await axiosInstance2.get(`/ride-requests/${id}`);
  return response.data;
}
