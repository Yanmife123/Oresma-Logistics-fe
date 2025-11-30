import { axiosInstance2 } from "@/_lib/axios";
import { SignUp } from "@/_lib/type/auth";

export async function CreateAdmin(data: SignUp) {
  const response = await axiosInstance2.post("/admin/users", {
    ...data,
    role: "admin",
  });
  return response.data;
}
