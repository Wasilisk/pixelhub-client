import React from 'react';
import {EmailRequest} from "../../models/request";
import {useFormik} from "formik";
import {EmailSchema} from "../../validation-schemes";
import {SubmitButton} from "../../elements/buttons";
import {Form, SmallText, TextField} from "../../elements/common";
import {AuthService} from "../../services";
import {successNotification} from "../../utils";

const SignupForm = () => {
  const {values, errors, touched, handleSubmit, handleChange} = useFormik<EmailRequest>({
    initialValues: {
      email: '',
    },
    validationSchema: EmailSchema,
    onSubmit: values => {
      AuthService.signup(values)
        .then(() => {
        successNotification('Awesome! We sent you an email with your access token. Please check your email inbox or spam folders')
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
      <SmallText>We'll never share your e-mail with anyone else.</SmallText>
      <SubmitButton type="submit">Create account</SubmitButton>
    </Form>

  )
}
export default SignupForm;