import {AuthResponse} from "../models/response/AuthResponse";

export const setTokens = (data: AuthResponse) => {
  localStorage.setItem('access_token', data.access_token);
  localStorage.setItem('refresh_token', data.refresh_token);
}