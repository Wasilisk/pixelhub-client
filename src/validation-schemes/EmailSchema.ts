import {SchemaOf} from "yup";
import * as Yup from "yup";
import {EmailRequest} from "../models/request";

export const EmailSchema: SchemaOf<EmailRequest> = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
});