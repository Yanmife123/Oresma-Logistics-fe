import { axiosInstance2 } from "@/_lib/axios";

export async function getRiderProfile() {
  const response = await axiosInstance2.get("/riders/profile");
  return response.data;
}
