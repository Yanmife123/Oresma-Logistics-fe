export type Wallets = {
  success: false;
  message: string;
  count: number | string;
  wallets: Wallet[];
};

export type SingleWallet = {
  success: false;
  message: string;
  wallet: Wallet;
};

export interface Wallet {
  _id: string;
  userId: string;
  balance: 0;
  currency: "NGN" | "USD";
  status: string;
  isPinSet: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AllAvailableBanks {
  success: false;
  message: string;
  count: number | string;
  banks: AvailableBank[];
}

export interface AvailableBank {
  id: string | number;
  name: string;
  code: string;
  slug?: string;
  longcode?: string;
}

export interface BankDetails {
  accountNumber: string;
  bankCode: string;
  bankName: string;
}
