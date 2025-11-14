import { axiosLoginInstance } from "@/_lib/axios";

export async function adminLogin(data: { email: string; password: string }) {
  const response = await axiosLoginInstance.post("/admin/login", data);
  return response.data;
}
