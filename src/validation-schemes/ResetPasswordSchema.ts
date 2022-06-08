import {ResetPasswordRequest} from "../models/request";
import {SchemaOf} from "yup";
import * as Yup from "yup";

export const ResetPasswordSchema: SchemaOf<ResetPasswordRequest> = Yup.object().shape({
  newPassword: Yup.string()
    .min(4, 'Minimum length - 4 characters')
    .max(20, 'Maximum length - 20 characters')
    .required('New password is required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('New password confirm field is required'),
});
