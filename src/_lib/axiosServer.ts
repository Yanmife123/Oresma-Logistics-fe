"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { ApiBaseUrl } from "./store/apiUrl";

export async function createServerAxios() {
  const Cookies = await cookies();
  const token = Cookies.get("token")?.value;
  const BaseUrl = ApiBaseUrl();

  return axios.create({
    baseURL: BaseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
}
