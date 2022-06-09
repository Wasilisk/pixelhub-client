import React from 'react';
import styled from "styled-components";
import HeaderMenuItem from "./HeaderMenuItem";
import {GalleryIcon, GroupsIcon, HomeIcon, UsersIcon} from "../assets/icons";

const HeaderMenuContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  & .active:after {
    content: " ";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #2979ff;
    bottom: -10px;
    left: 0;
  }
`;


const HeaderMenu = () => {
  return (
    <HeaderMenuContainer>
      <HeaderMenuItem to="/">
        <HomeIcon/>
        Home
      </HeaderMenuItem>
      <HeaderMenuItem to="/gallery">
        <GalleryIcon/>
        Gallery
      </HeaderMenuItem>
      <HeaderMenuItem to="/groups">
        <GroupsIcon/>
        Groups
      </HeaderMenuItem>
      <HeaderMenuItem to="/users">
        <UsersIcon/>
        Users
      </HeaderMenuItem>
    </HeaderMenuContainer>
  );
};

export default HeaderMenu;
