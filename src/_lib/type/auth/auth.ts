export interface AdminLoginResponse {
  success: boolean;
  message: string;
  token: string;
  admin: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

export interface RouteLoginResponse {
  success: boolean;
  message: string;
  isRider: boolean;
}
