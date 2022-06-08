import {SubmitButton} from "../../elements/buttons";
import React from "react";
import {useFormik} from "formik";
import {LoginRequest} from "../../models/request";
import {LoginSchema} from "../../validation-schemes";
import {CustomLink, Form, SmallText, TextField} from "../../elements/common";
import {AuthService} from "../../services";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {values, errors, touched, handleSubmit, handleChange} = useFormik<LoginRequest>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      AuthService.login(values)
        .then(()=> navigate('/'))
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
      <TextField
        label="Password"
        placeholder="Password"
        name="password"
        type="password"
        value={values.password}
        error={errors.password}
        touched={touched.password}
        onChange={handleChange}
      />
      <SmallText>Forgot your password?
        <CustomLink to="reset-password">Reset your password.</CustomLink>
      </SmallText>
      <SubmitButton type="submit">Create account</SubmitButton>
    </Form>
  );
};

export default LoginForm;