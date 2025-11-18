import { axiosInstance2 } from "@/_lib/axios";

export async function Profile() {
  const response = await axiosInstance2.get("/auth/profile");
  return response.data;
}
