import React from 'react';
import styled from "styled-components";
import Container from "./Container";

const AuthContainer = styled(Container)`
  padding: 1.5rem;
  height: auto;
  max-width: 480px;
  width: 100%;
  
  & > p {
    margin: 0 0 0.5rem 0;
    font-size: 14px;
    padding: 0 10px;
    text-align: center;
  }
  
  .button_group {
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
  
  .auth_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
    
    & > img {
      width: 35px;
      height: auto;
      margin-bottom: 16px;
    }
    
    & > h3 {
      font-size: 1.575rem;
      margin: 0 0 0.4rem 0;
      font-weight: 400;
      line-height: 1.2;
    }
    
    & > p {
      margin: 0;
      font-size: 16px;
    }
  }

  .redirect_text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    
    & > p {
      margin: 0 5px 0 0;
    }
  }
`

export default AuthContainer;