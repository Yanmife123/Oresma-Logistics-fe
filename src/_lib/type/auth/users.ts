export interface UsersResponse {
  success: boolean;
  message: string;
  count: number;
  users: User[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "rider" | "admin" | "customer"; // role is limited to known values
  createdAt: string; // or Date if you convert it later
  updatedAt: string; // same as above
}

export interface ProfileUser {
  success: boolean;
  message: string;

  user: User;
}
