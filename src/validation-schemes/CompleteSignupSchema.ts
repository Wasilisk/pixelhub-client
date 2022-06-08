import {SchemaOf} from "yup";
import {CompleteSignupRequest} from "../models/request";
import * as Yup from "yup";

export const CompleteSignupSchema: SchemaOf<CompleteSignupRequest> = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Minimum length - 4 characters')
    .max(20, 'Maximum length - 20 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password field is required'),
  profile: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    bio: Yup.string().notRequired(),
    birthday: Yup.string().required()
  }).required()
});