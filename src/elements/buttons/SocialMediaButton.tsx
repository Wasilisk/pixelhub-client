import styled from "styled-components";
import {Button} from "./Button";

interface SocialMediaButtonProps {
  color: string
}

export const SocialMediaButton = styled(Button)<SocialMediaButtonProps>`
  transition: all .2s;
  background-color: ${({color}) => color};
  border-color: ${({color}) => color};
  margin: 4px;
  
  & > svg {
    margin-right: 10px;
    margin-bottom: 2px;
    height: 1rem;
    width: 1rem;
  }
`
