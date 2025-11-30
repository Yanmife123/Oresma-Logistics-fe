import { axiosInstance2 } from "@/_lib/axios";
// import Cookies from "js-cookie";

export async function AdminDelcineRequest(id: string) {
  const response = await axiosInstance2.patch(`/ride-requests/${id}/cancel`, {
    cancelledBy: "admin",
    reason: "Admin is cancelling this request",
  });
  return response.data;
}
