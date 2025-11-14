import { ApiBaseUrl } from "@/_lib/store/apiUrl";
import { SignUp } from "@/_lib/type/auth";
import { axiosResponseHandle } from "@/_lib/reponse";
import { axiosAuthInstance } from "@/_lib/axios";
export async function userSignIn(data: SignUp) {
  const response = await axiosAuthInstance.post("/auth/signup", data);
  return axiosResponseHandle(response);
  // const url = ApiBaseUrl();

  // const request = await fetch(`${url}/auth/signup`, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const result = await request.json();

  // ResponseHandle(result);
  // return result;
}
