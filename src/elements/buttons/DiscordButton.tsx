import {SocialMediaButton} from "./SocialMediaButton";
import {SiDiscord} from 'react-icons/si'
import React from 'react';

export const DiscordButton = () => {
  const openDiscordAuth = () => window.open("http://localhost:3001/auth/discord", "_self")

  return (
    <SocialMediaButton
      color="#583693"
      onClick={openDiscordAuth}
    >
      <SiDiscord/>
      Discord
    </SocialMediaButton>
  );
};