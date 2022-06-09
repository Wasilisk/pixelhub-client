import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const DrawerMenuItem = styled(NavLink)`
  height: 43px;
  color: #000;
  transition: all 75ms ease-in-out;
  border-radius: 14px;
  padding: 12px 10px 12px 25px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  position: relative;
  margin-bottom: 8px;
  
  & svg {
    margin-right: 20px;
    margin-bottom: 3px;
  }
  
  &:hover {
    background-color: rgba(0,0,0,.05);
  }
  
`

export default DrawerMenuItem;