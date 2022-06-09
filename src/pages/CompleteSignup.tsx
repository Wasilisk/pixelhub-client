import React, {useEffect} from 'react';
import Background from "../components/Background";
import PixelHubLogo from "../assets/logo/pixelhub_icon.png";
import AuthContainer from "../components/AuthContainer";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import CompleteSignupForm from "../components/forms/CompleteSignupForm";
import {CustomLink, Wrapper} from "../elements/common";
import {ConfirmToken} from "../models/common";
import {AuthService} from "../services";
const SignupCompleteContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;

  ${AuthContainer} {
    margin-top: 20px;
    max-width: 620px;

    .auth_text {
      align-items: start;
      text-align: start;
      
      img {
        margin-bottom: 40px;
      }

      h3 {
        font-size: 32px;
        font-weight: 700;
      }

      p {
        opacity: .85;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    ${Background} {
      display: none;
    }

    ${AuthContainer} {
      max-width: 100%;
    }
    
    ${Wrapper} {
      min-width: auto;
      width: 100%;
    }
  }
`

const CompleteSignup = () => {
  const {token} = useParams() as ConfirmToken;
  const navigate = useNavigate();

  useEffect(() => {
    AuthService.checkSignupToken(token!).catch(() => navigate('/'))
  }, [])

  return (
    <SignupCompleteContainer>
      <Background/>
      <Wrapper width="900px">
        <AuthContainer>
          <div className="auth_text">
            <img src={PixelHubLogo} alt="PixelHub logo"/>
            <h3>Welcome to PixelHub</h3>
            <p>Pixehub is a community of artists who enjoy retro style art, modern art, games and so much more.</p>
          </div>
          <CompleteSignupForm token={token}/>
          <div className="redirect_text">
            <p>Already a member?</p>
            <CustomLink to="/login">Sign in</CustomLink>
          </div>
        </AuthContainer>
      </Wrapper>
    </SignupCompleteContainer>
  );
};

export default CompleteSignup;