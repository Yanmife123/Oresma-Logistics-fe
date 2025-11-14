"use server";
import { cookies } from "next/headers";

export async function getApiToken() {
  const Cookies = await cookies();
  const token = Cookies.get("token")?.value || null;
  return token;
}
