type Props = {
  error?: [] | string;
  success: boolean;
  message: string;
};

export function ResponseHandle(data: Props) {
  if (!data.success) {
    throw new Error(data?.message || "Network Error");
  }
}
