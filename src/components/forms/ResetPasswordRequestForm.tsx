import React from 'react';
import {SubmitButton} from "../../elements/buttons";
import {useFormik} from "formik";
import {EmailSchema} from "../../validation-schemes";
import {EmailRequest} from "../../models/request";
import {Form, TextField} from "../../elements/common";
import {AuthService} from "../../services";
import {successNotification} from "../../utils";

const ResetPasswordRequestForm = () => {
  const {values, errors, touched, handleSubmit, handleChange} = useFormik<EmailRequest>({
    initialValues: {
      email: '',
    },
    validationSchema: EmailSchema,
    onSubmit: values => {
      AuthService.resetPasswordRequest(values)
        .then(() => {
          successNotification('If a Pixelhub account exists for that email address, we will email' +
            ' you instructions for resetting your password. Please check your inbox and spam folders.')
        })
    },
  });
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        placeholder="Email"
        name="email"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        onChange={handleChange}
      />
      <SubmitButton type="submit">Send Password Reset</SubmitButton>
    </Form>
  );
};

export default ResetPasswordRequestForm;