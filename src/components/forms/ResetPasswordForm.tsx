import React from 'react';
import {SubmitButton} from "../../elements/buttons";
import {useFormik} from "formik";
import {ResetPasswordRequest} from "../../models/request";
import {ResetPasswordSchema} from "../../validation-schemes";
import {Form, TextField} from "../../elements/common";
import {AuthService} from "../../services";
import {successNotification} from "../../utils";
import {useParams} from "react-router-dom";
import {ConfirmToken} from "../../models/common";

const ResetPasswordForm = () => {
  const {token} = useParams() as ConfirmToken;
  const {values, errors, touched, handleSubmit, handleChange} = useFormik<ResetPasswordRequest>({
    initialValues: {
      newPassword: '',
      confirmNewPassword: ''
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: values => {
      AuthService.resetPassword(token!, values)
        .then(() => {
          successNotification('Password success updated')
        })

    },
  });
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="New Password"
        placeholder="Password"
        name="newPassword"
        value={values.newPassword}
        error={errors.newPassword}
        touched={touched.newPassword}
        onChange={handleChange}
      />
      <TextField
        label="Confirm Password"
        placeholder="Verify Password"
        name="confirmNewPassword"
        value={values.confirmNewPassword}
        error={errors.confirmNewPassword}
        touched={touched.confirmNewPassword}
        onChange={handleChange}
      />
      <SubmitButton type="submit">Reset Password</SubmitButton>
    </Form>
  );
};

export default ResetPasswordForm;