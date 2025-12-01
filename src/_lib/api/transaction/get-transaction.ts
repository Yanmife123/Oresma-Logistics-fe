import { axiosInstance2 } from "@/_lib/axios";

export async function getAllTransactions() {
  const response = await axiosInstance2.get("/transactions");
  return response.data;
}

export async function getWithdrawalRequests() {
  const response = await axiosInstance2.get(`/transactions?type=payout`);
  return response.data;
}
