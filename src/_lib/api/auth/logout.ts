import { ResponseHandle } from "@/_lib/reponse";
export async function logOut() {
  const request = await fetch(`/api/auth/logout`, {
    method: "POST",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await request.json();

  ResponseHandle(result);
  return result;
}
