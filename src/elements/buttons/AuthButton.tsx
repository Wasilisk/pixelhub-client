import React from 'react';
import styled from "styled-components";
import {Button} from "./Button";

interface AuthButtonProps {
  size: "small" | "big"
}

const AuthButton = styled(Button)<AuthButtonProps>`
  border: none;
  padding: ${({size}) => size === "small" ? "4px 25px" : "15px 25px"};
  line-height: ${({size}) => size === "small" ? "28px" : "21px"};
  height: auto;
  width: ${({size}) => size === "small" ? "190px" : "300px"};;
  border-radius: 50px;
  font-size: ${({size}) => size === "small" ? "14px" : "18px"};
  white-space: nowrap;
  text-transform: uppercase;
  background: linear-gradient(90deg,#2d9bea,#8d2ee4);
  
  & svg {
   margin-right: 5px; 
  }
`


export default AuthButton;