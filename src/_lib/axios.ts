import axios from "axios";
import { ApiBaseUrl } from "./store/apiUrl";
import Cookies from "js-cookie";

// import { getApiToken } from "./store/apiToken";
// import { cookies } from "next/headers";

const BaseUrl = ApiBaseUrl();

export const axiosAuthInstance = axios.create({
  baseURL: BaseUrl,
  headers: { "Content-Type": "application/json" },
});

export const axiosLoginInstance = axios.create({
  baseURL: BaseUrl,
  headers: { "Content-Type": "application/json" },
});

export const axiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: { "Content-Type": "application/json" },
});
const token = Cookies.get("token");
export const axiosInstance2 = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance2.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if(error.response && error.response.status === 401) {
    //   // Handle unauthorized error (e.g., redirect to login)
    //   console.log("Unauthorized! Redirecting to login...");
    // }
    if (error.response) {
      return Promise.reject(
        new Error(
          error.response.data?.message ||
            `Request failed with status ${error.response.status}`
        )
      );
    }

    return Promise.reject(error);
  }
);

axiosAuthInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(
        new Error(
          error.response.data?.message ||
            `Request failed with status ${error.response.status}`
        )
      );
    }

    return Promise.reject(error);
  }
);

axiosLoginInstance.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      Cookies.set("token", response.data.token, { expires: 1 });
    }
    if (response.data.user) {
      Cookies.set("user", JSON.stringify(response.data.user), { expires: 1 });
    } else if (response.data.admin) {
      Cookies.set("user", JSON.stringify(response.data.admin), { expires: 1 });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(
        new Error(
          error.response.data?.message ||
            `Request failed with status ${error.response.status}`
        )
      );
    }

    return Promise.reject(error);
  }
);
