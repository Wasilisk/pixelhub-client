export interface UpdatePasswordRequest {
  currentPassword: string
  newPassword: string;
  confirmNewPassword: string;
}