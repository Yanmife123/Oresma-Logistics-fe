import { axiosInstance2 } from "@/_lib/axios";

// type Status = {
//   status:
//     | "pending"
//     | "payment_failed"
//     | "payment_success"
//     | "assigned"
//     | "in-progress"
//     | "completed"
//     | "cancelled";
// };

export async function getAssignmentRide() {
  const response = await axiosInstance2.get("/ride-requests/assignments");
  return response.data;
}

export async function AcceptAssignmentRequest(id: string) {
  const response = await axiosInstance2.patch(`/ride-requests/${id}/status`, {
    status: "in-progress",
  });
  return response;
}
export async function DeclineAssignmentRequest(id: string) {
  const response = await axiosInstance2.patch(`/ride-requests/${id}/status`, {
    status: "cancelled",
  });
  return response;
}
