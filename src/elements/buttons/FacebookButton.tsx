import {SocialMediaButton} from "./SocialMediaButton";
import {ImFacebook} from 'react-icons/im'
import React from 'react';

export const FacebookButton = () => {
  const openFacebookAuth = () => window.open("http://localhost:3001/auth/facebook", "_self")

  return (
    <SocialMediaButton
      color="#3b5999"
      onClick={openFacebookAuth}
    >
      <ImFacebook/>
      Facebook
    </SocialMediaButton>
  );
};
