import React, {useState} from "react";
import styled from "styled-components";
import {FiLock} from "react-icons/fi";
import {CompleteSignupRequest} from "../../models/request";
import moment from "moment";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {CompleteSignupSchema} from "../../validation-schemes";
import {AuthService} from "../../services";
import {DaySelect, MonthSelect, YearSelect} from "../../elements/selects";
import {SubmitButton} from "../../elements/buttons";
import {ConfirmToken, CreateDate} from "../../models/common";
import {Form, Label, LabelWithIcon, SmallText, Textarea, TextField, Loader} from "../../elements/common";

const FlexInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0 0 0;

  div {
    width: 100%;
  }

  div:not(:last-of-type) {
    padding-right: 20px
  }

  div label {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 16px;
  }

  @media (max-width: 425px) {
    flex-direction: column;

    div:not(:first-of-type) {
      margin-top: 16px;
    }
  }
`

const CompleteSignupForm = ({token}: ConfirmToken) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const {values, errors, touched, handleSubmit, handleChange} = useFormik<CompleteSignupRequest & CreateDate>({
      initialValues: {
        password: '',
        confirmPassword: '',
        profile: {
          username: '',
          bio: '',
          birthday: ''
        },
        years: 0,
        months: 0,
        days: 0,
      },
      validationSchema: CompleteSignupSchema,
      onSubmit: values => {
        const {years, months, days, ...requestValues} = values
        requestValues.profile.birthday = moment({years, months, days}).format('LL');
        setIsLoading(true);
        AuthService.completeSignup(token!, {...requestValues})
          .then(() => {
            navigate('/')
          })
          .finally(() => {
            setIsLoading(false)
          })
      },
    });
    return (
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          placeholder="Username"
          name="profile.username"
          value={values.profile.username}
          error={errors.profile?.username}
          touched={touched.profile?.username}
          onChange={handleChange}
        />
        <FlexInputGroup>
          <TextField
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={values.password}
            error={errors.password}
            touched={touched.profile?.username}
            onChange={handleChange}
          />
          <TextField
          label="Confirm Password"
          placeholder="Verify Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          onChange={handleChange}
        />
        </FlexInputGroup>
        <Label>Bio</Label>
        <Textarea
          placeholder="About yourself"
          name="profile.bio"
          value={values.profile.bio}
          onChange={handleChange}
        />
        <LabelWithIcon>
          <p>Birthday</p><FiLock/>
        </LabelWithIcon>
        <SmallText>This information is private and only used to verify your age.</SmallText>
        <FlexInputGroup>
          <div>
            <Label>Year</Label>
            <YearSelect
              name="years"
              value={values.years}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Month</Label>
            <MonthSelect
              name="months"
              value={values.months}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Day</Label>
            <DaySelect
              name="days"
              value={values.days}
              onChange={handleChange}
            />
          </div>
        </FlexInputGroup>
        <SubmitButton type="submit" disabled={isLoading}>
          {
            isLoading ? <Loader size="30px"/>: "Complete Sign Up"
          }
        </SubmitButton>
      </Form>
    )
  }
;

export default CompleteSignupForm;