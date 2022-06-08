import {AxiosResponse} from "axios";
import $api from "../http";
import {Tokens} from "../models/response/Tokens";
import {
  CompleteSignupRequest,
  EmailRequest,
  LoginRequest,
  ResetPasswordRequest,
  UpdatePasswordRequest
} from "../models/request";

export class AuthService {
  static async signup(data: EmailRequest): Promise<AxiosResponse<void>> {
    return $api.post('auth/local/signup', data);
  }

  static async login(data: LoginRequest): Promise<AxiosResponse<Tokens>> {
    return $api.post('auth/local/signin', {...data});
  }

  static async completeSignup(token: string, data: CompleteSignupRequest): Promise<AxiosResponse<Tokens>> {
    return $api.post(`auth/signup/complete/${token}`, {...data});
  }

  static async checkSignupToken(token: string): Promise<AxiosResponse<void>> {
    return $api.get(`auth/signup/complete/${token}`);
  }

  static async successSocialMediaAuth(token: string): Promise<AxiosResponse<Tokens>> {
    return $api.get('auth/success', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  static async logout(): Promise<AxiosResponse<void>> {
    return $api.get('auth/logout');
  }

  static async updatePassword(data: UpdatePasswordRequest): Promise<AxiosResponse<void>> {
    return $api.post('auth/update-password', {...data});
  }

  static async checkResetPasswordToken(token: string): Promise<AxiosResponse<void>> {
    return $api.get(`auth/reset-password/${token}`);
  }

  static async resetPasswordRequest(data: EmailRequest): Promise<AxiosResponse<void>> {
    return $api.post('auth/reset-password', data);
  }

  static async resetPassword(token: string, data: ResetPasswordRequest): Promise<AxiosResponse<void>> {
    return $api.post(`auth/reset-password/${token}`, {...data});
  }
}