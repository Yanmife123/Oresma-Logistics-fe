import { AxiosResponse } from "axios";

export type ResponseProps = {
  error?: [] | string;
  success: boolean;
  message: string;
};

export function ResponseHandle(data: ResponseProps) {
  if (!data.success) {
    throw new Error(data?.message || "Network Error");
  }
}

export function axiosResponseHandle(response: AxiosResponse) {
  if (!response.data.success) {
    console.log("Response Error:", response.data.message);
    throw new Error(response.data?.message || "Network Error");
  }
  return response.data;
}
