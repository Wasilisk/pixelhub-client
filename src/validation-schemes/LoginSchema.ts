import {SchemaOf} from "yup";
import {LoginRequest} from "../models/request";
import * as Yup from "yup";

export const LoginSchema: SchemaOf<LoginRequest> = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Minimum length - 4 characters')
    .max(20, 'Maximum length - 20 characters')
    .required('Password is required'),
});