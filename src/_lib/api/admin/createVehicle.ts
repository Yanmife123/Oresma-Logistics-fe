import { axiosInstance2 } from "@/_lib/axios";
import { VehicleFormData } from "@/_lib/type/trucks/trucks";

export const createVehicle = async (data: VehicleFormData) => {
  if (data.vehicleType === "truck") {
    const response = await axiosInstance2.post("/trucks", data);
    return response.data;
  }
  if (data.vehicleType === "bike") {
    // const response = await axiosInstance2.post("/bikes", data);
    // return response.data;
    throw new Error("Bike creation not implemented yet");
  }
};
