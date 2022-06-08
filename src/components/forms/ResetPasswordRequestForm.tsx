import React, {useState} from 'react';
import {SubmitButton} from "../../elements/buttons";
import {useFormik} from "formik";
import {EmailSchema} from "../../validation-schemes";
import {EmailRequest} from "../../models/request";
import {Form, Loader, TextField} from "../../elements/common";
import {AuthService} from "../../services";
import {successNotification} from "../../utils";

const ResetPasswordRequestForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {values, errors, touched, handleSubmit, handleChange} = useFormik<EmailRequest>({
    initialValues: {
      email: '',
    },
    validationSchema: EmailSchema,
    onSubmit: values => {
      setIsLoading(true);
      AuthService.resetPasswordRequest(values)
        .then(() => {
          successNotification('If a Pixelhub account exists for that email address, we will email' +
            ' you instructions for resetting your password. Please check your inbox and spam folders.')
        })
        .finally(() => setIsLoading(false))
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
      <SubmitButton type="submit">
        {
          isLoading ? <Loader size="30px"/> : "Send Password Reset"
        }
        </SubmitButton>
    </Form>
  );
};

export default ResetPasswordRequestForm;