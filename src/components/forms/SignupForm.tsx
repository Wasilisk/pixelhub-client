import React, {useState} from 'react';
import {EmailRequest} from "../../models/request";
import {useFormik} from "formik";
import {EmailSchema} from "../../validation-schemes";
import {SubmitButton} from "../../elements/buttons";
import {Form, SmallText, TextField, Loader} from "../../elements/common";
import {AuthService} from "../../services";
import {successNotification} from "../../utils";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {values, errors, touched, handleSubmit, handleChange} = useFormik<EmailRequest>({
    initialValues: {
      email: '',
    },
    validationSchema: EmailSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      await AuthService.signup(values)
        .then(() => {
          successNotification('Awesome! We sent you an email with your access token. Please check your email inbox or spam folders');
        }).finally(() => {
          setIsLoading(false);
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
      <SubmitButton type="submit" disabled={isLoading}>
        {
          isLoading ? <Loader size="30px"/> : "Create account"
        }
      </SubmitButton>
    </Form>

  )
}
export default SignupForm;