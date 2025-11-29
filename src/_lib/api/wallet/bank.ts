import { axiosInstance2 } from "@/_lib/axios";

import { BankDetails } from "@/_lib/type/wallets/wallet";

export async function AddBankAccountService(data: BankDetails) {
  const response = await axiosInstance2.put("/riders/bank-details", data);
  return response.data;
}
