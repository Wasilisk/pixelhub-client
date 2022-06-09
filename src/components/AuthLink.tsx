import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import ProfileImage from "../assets/images/d711dc0185bf8c8c87e982aa578af8de.jpg"

const AuthLinkContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 16px 0;
  border-radius: 12px;
  box-sizing: border-box;
  margin-bottom: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }

  & img {
    height: 75px;
    width: 75px;
    border-radius: 100%;
  }

  & span {
    margin: 3px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: black;
  }

  & p {
    margin: 0;
    color: #999;
    font-size: 14px;
  }
`

const AuthLink = () => {
  return (
    <AuthLinkContainer to="/signup">
      <img src={ProfileImage}/>
      <span>Login / Sign up</span>
      <p>Join the largest pixel art community</p>
    </AuthLinkContainer>
  );
};

export default AuthLink;