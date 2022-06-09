import React from 'react';
import Background from "../components/Background";
import DividerWithText from "../components/DividerWithText";
import PixelHubLogo from "../assets/logo/pixelhub_icon.png"
import AuthContainer from "../components/AuthContainer";
import SignupForm from "../components/forms/SignupForm";
import {CustomLink} from "../elements/common";
import {DiscordButton, FacebookButton, GoogleButton} from "../elements/buttons";

const Signup = () => {
  return (
    <Background>
      <AuthContainer>
        <div className="auth_text">
          <img src={PixelHubLogo} alt="PixelHub logo"/>
          <h3>Create an account</h3>
          <p>Become part of the largest pixel art community</p>
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
        <SignupForm/>
        <div className="redirect_text">
          <p>Already a member?</p>
          <CustomLink to="/login">Sign in</CustomLink>
        </div>
      </AuthContainer>
    </Background>
  );
};

export default Signup;