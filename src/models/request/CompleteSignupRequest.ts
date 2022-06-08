export interface CompleteSignupRequest {
  password: string,
  confirmPassword: string,
  profile: {
    username: string,
    bio?: string,
    birthday: string
  }
}