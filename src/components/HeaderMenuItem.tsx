import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HeaderMenuItem = styled(NavLink)`
  height: 30px;
  color: #000;
  transition: all 75ms ease-in-out;
  border-radius: 14px;
  padding: 5px 15px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  
  &:hover {
    background-color: rgba(0,0,0,.05);
  }
  
  & svg {
    margin-right: 10px;
    margin-bottom: 5px;
  }

  @media (max-width: 1024px) {
    font-size: 0;

    & svg {
      height: 20px;
      width: 20px;
      margin: 0
    }
  }
  
`

export default HeaderMenuItem;