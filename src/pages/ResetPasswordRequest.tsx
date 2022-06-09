import React from 'react';
import Background from "../components/Background";
import PixelHubLogo from "../assets/logo/pixelhub_icon.png"
import AuthContainer from "../components/AuthContainer";
import ResetPasswordRequestForm from "../components/forms/ResetPasswordRequestForm";
import {CustomLink} from "../elements/common";

const ResetPasswordRequest = () => {
  return (
    <Background>
      <AuthContainer>
        <div className="auth_text">
          <img src={PixelHubLogo} alt="PixelHub logo"/>
          <h3>Reset Password</h3>
          <p>Reset your password if you can't remember it</p>
        </div>
        <ResetPasswordRequestForm/>
        <div className="redirect_text">
          <p>Already a member?</p>
          <CustomLink to="/login">Sign in</CustomLink>
        </div>
      </AuthContainer>
    </Background>
  );
};

export default ResetPasswordRequest;