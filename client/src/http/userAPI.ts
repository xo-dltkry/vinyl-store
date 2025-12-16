import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export type Role = "USER" | "ADMIN";

export interface IUserTokenPayload {
  id: number;
  email: string;
  role: Role;
  iat?: number;
  exp?: number;
}

export const registration = async (email: string, password: string): Promise<IUserTokenPayload> => {
  const { data } = await $host.post("/api/user/registration", { email, password, role: "ADMIN" });
  localStorage.setItem('token', data.token)
  return jwtDecode<IUserTokenPayload>(data.token);
};

export const login = async (email: string, password: string): Promise<IUserTokenPayload> => {
  const { data } = await $host.post("/api/user/login", { email, password });
  localStorage.setItem('token', data.token)
  return jwtDecode<IUserTokenPayload>(data.token);
};

export const check = async (): Promise<IUserTokenPayload> => {
  const { data } = await $authHost.get("/api/user/auth");
  localStorage.setItem('token', data.token)
  return jwtDecode<IUserTokenPayload>(data.token);
};