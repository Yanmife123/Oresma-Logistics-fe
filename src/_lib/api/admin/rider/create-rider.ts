import { axiosInstance2 } from "@/_lib/axios";
import { SignUp } from "@/_lib/type/auth";
export async function CreateRider(data: SignUp) {
  const response = await axiosInstance2.post("/auth/signup-rider", data);
  return response.data;
}
