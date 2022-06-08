import React, {useState} from 'react';
import {SubmitButton} from "../../elements/buttons";
import {useFormik} from "formik";
import {ResetPasswordRequest} from "../../models/request";
import {ResetPasswordSchema} from "../../validation-schemes";
import {Form, Loader, TextField} from "../../elements/common";
import {AuthService} from "../../services";
import {successNotification} from "../../utils";
import {useNavigate, useParams} from "react-router-dom";
import {ConfirmToken} from "../../models/common";

const ResetPasswordForm = () => {
  const {token} = useParams() as ConfirmToken;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {values, errors, touched, handleSubmit, handleChange} = useFormik<ResetPasswordRequest>({
    initialValues: {
      newPassword: '',
      confirmNewPassword: ''
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: values => {
      setIsLoading(true);
      AuthService.resetPassword(token!, values)
        .then(() => {
          successNotification('Password success updated');
          navigate('/login');
        })
        .finally(() => setIsLoading(false));

    },
  });
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="New Password"
        placeholder="Password"
        name="newPassword"
        type="password"
        value={values.newPassword}
        error={errors.newPassword}
        touched={touched.newPassword}
        onChange={handleChange}
      />
      <TextField
        label="Confirm Password"
        placeholder="Verify Password"
        name="confirmNewPassword"
        type="password"
        value={values.confirmNewPassword}
        error={errors.confirmNewPassword}
        touched={touched.confirmNewPassword}
        onChange={handleChange}
      />
      <SubmitButton type="submit" disabled={isLoading}>
        {
          isLoading ? <Loader size="30px"/>: "Reset Password"
        }
       </SubmitButton>
    </Form>
  );
};

export default ResetPasswordForm;