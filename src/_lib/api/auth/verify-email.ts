import { axiosInstance } from "@/_lib/axios";
export type VerifyEmail = {
  code: string;
};

type Email = {
  email: string;
};

export async function verifyEmail(data: VerifyEmail) {
  const response = await axiosInstance.post("/auth/verify-email", data);
  return response.data;
}

export async function RendCode(data: Email) {
  const response = await axiosInstance.post("/auth/resend-verification", data);
  return response.data;
}
