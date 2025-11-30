import { axiosInstance2 } from "@/_lib/axios";

export async function getAvailableBanks() {
  const response = await axiosInstance2.get("/riders/banks");
  return response.data;
}

export async function getAllWallet() {
  const response = await axiosInstance2.get("/wallets");
  return response.data;
}

export async function getSingleRiderWallet() {
  const response = await axiosInstance2.get(`/wallets/me`);
  return response.data;
}

export async function getWalletByUserId(userId: string) {
  const response = await axiosInstance2.get(`/wallets/user/${userId}`);
  return response.data;
}

export async function getAdminWalletSummary() {
  const response = await axiosInstance2.get(`/wallets/summary`);
  return response.data;
}
