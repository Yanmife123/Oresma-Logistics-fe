import { axiosInstance2 } from "@/_lib/axios";
import { axiosResponseHandle } from "@/_lib/reponse";
// import { Truck } from "@/_lib/type/trucks/trucks";

export async function findRiderTrucks() {
  const response = await axiosInstance2.get("/trucks");
  return axiosResponseHandle(response);
}

export async function findRiderTruckById(id: string) {
  const response = await axiosInstance2.get(`/trucks/${id}`);
  return axiosResponseHandle(response);
}
