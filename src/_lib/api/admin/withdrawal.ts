import { axiosInstance2 } from "@/_lib/axios";

export async function ApproveWithdrawalRequest(id: string) {
  const response = await axiosInstance2.post(`/transactions/${id}/approve`);
  return response.data;
}
export async function DeclineWithdrawalRequest(data: {
  id: string;
  reason: string;
}) {
  const response = await axiosInstance2.post(
    `/transactions/${data.id}/decline`,
    { reason: data.reason }
  );
  return response.data;
}
