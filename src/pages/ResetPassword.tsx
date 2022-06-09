import React, {useEffect} from 'react';
import Background from "../components/Background";
import PixelHubLogo from "../assets/logo/pixelhub_icon.png"
import AuthContainer from "../components/AuthContainer";
import ResetPasswordForm from "../components/forms/ResetPasswordForm";
import {useNavigate, useParams} from "react-router-dom";
import {AuthService} from "../services";
import {CustomLink} from "../elements/common";
import {ConfirmToken} from "../models/common";

const ResetPassword = () => {
  const {token}  = useParams() as ConfirmToken;
  const navigate = useNavigate();

  useEffect(() => {
      AuthService.checkResetPasswordToken(token!).catch(() => navigate('/'))
  }, [])

  return (
    <Background>
      <AuthContainer>
        <div className="auth_text">
          <img src={PixelHubLogo} alt="PixelHub logo"/>
          <h3>Password Reset</h3>
          <p>If you have forgotten your password. Please reset your password now.</p>
        </div>
        <ResetPasswordForm/>
        <div className="redirect_text">
          <p>Remember your password?</p>
          <CustomLink to="/login">Sign in</CustomLink>
        </div>
      </AuthContainer>
    </Background>
  );
};

export default ResetPassword;