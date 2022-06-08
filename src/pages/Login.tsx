import React from 'react';
import Background from "../components/Background";
import DividerWithText from "../components/DividerWithText";
import PixelHubLogo from "../assets/logo/pixelhub_logo.png"
import AuthContainer from "../components/AuthContainer";
import LoginForm from "../components/forms/LoginForm";
import {DiscordButton, FacebookButton, GoogleButton} from "../elements/buttons";
import {CustomLink} from "../elements/common";

const Login = () => {
  return (
    <Background>
      <AuthContainer>
        <div className="auth_text">
          <img src={PixelHubLogo} alt="PixelHub logo"/>
          <h3>Sign In</h3>
          <p>Welcome back!</p>
        </div>
        <p>Connect with</p>
        <div className="button_group">
          <DiscordButton/>
          <GoogleButton/>
          <FacebookButton/>
        </div>
        <DividerWithText>
          <span>Or</span>
        </DividerWithText>
        <LoginForm/>
        <div className="redirect_text">
          <p>Not a member?</p>
          <CustomLink to="/signup">Create an account</CustomLink>
        </div>
      </AuthContainer>
    </Background>
  );
};

export default Login;