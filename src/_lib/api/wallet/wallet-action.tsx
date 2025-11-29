import { axiosInstance2 } from "@/_lib/axios";

export async function CreateWalletsPin(data: { pin: string }) {
  const response = await axiosInstance2.post("/wallets/pin", data);
  return response.data;
}
