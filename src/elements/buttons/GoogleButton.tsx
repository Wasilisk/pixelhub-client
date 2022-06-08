import {SocialMediaButton} from "./SocialMediaButton";
import React from "react";
import {RiGoogleFill} from 'react-icons/ri'

export const GoogleButton = () => {
  const openGoogleAuth = () => window.open("http://localhost:3001/auth/google", "_self")

  return (
    <SocialMediaButton
      color="#dd4b39"
      onClick={openGoogleAuth}
    >
      <RiGoogleFill/>
      Google
    </SocialMediaButton>
  );
};
