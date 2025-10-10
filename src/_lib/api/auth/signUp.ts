import { ApiBaseUrl } from "@/_lib/store/apiUrl";
import { SignUp } from "@/_lib/type/auth";
import { ResponseHandle } from "@/_lib/reponse";
export async function userSignIn(data: SignUp) {
  const url = ApiBaseUrl();

  const request = await fetch(`${url}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await request.json();

  ResponseHandle(result);
  return result;
}
