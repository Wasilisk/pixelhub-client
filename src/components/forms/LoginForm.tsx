import {SubmitButton} from "../../elements/buttons";
import React, {useState} from "react";
import {useFormik} from "formik";
import {LoginRequest} from "../../models/request";
import {LoginSchema} from "../../validation-schemes";
import {CustomLink, Form, Loader, SmallText, TextField} from "../../elements/common";
import {AuthService} from "../../services";
import {useNavigate} from "react-router-dom";
import {login} from "../../store/auth/authSlice";
import {setTokens} from "../../utils";
import {useAppDispatch} from "../../store";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {values, errors, touched, handleSubmit, handleChange} = useFormik<LoginRequest>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      setIsLoading(true);
      AuthService.login(values)
        .then(({data})=> {
          dispatch(login(data));
          setTokens(data);
          navigate('/')
        })
        .finally(() => setIsLoading(false));
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
      <SubmitButton type="submit" disabled={isLoading}>
        {
          isLoading ? <Loader size="30px"/>: "Sign in"
        }
      </SubmitButton>
    </Form>
  );
};

export default LoginForm;