import { axiosInstance2 } from "@/_lib/axios";
// import Cookies from "js-cookie";

export async function AdminDelcineRequest(data: {
  id: string;
  reason: string;
}) {
  const response = await axiosInstance2.patch(
    `/ride-requests/${data.id}/cancel`,
    {
      cancelledBy: "admin",
      reason: data.reason,
    }
  );
  return response.data;
}
