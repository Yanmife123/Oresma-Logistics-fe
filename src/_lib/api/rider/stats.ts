import { axiosInstance2 } from "@/_lib/axios";

export async function getMyStats() {
  const response = await axiosInstance2.get("/riders/stats");
  return response.data;
}
