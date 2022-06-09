import AuthLink from "../AuthLink";
import DrawerMenuItem from "./DrawerMenuItem";
import {GalleryIcon, GroupsIcon, HomeIcon, UsersIcon} from "../../assets/icons";
import React from "react";
import DrawerWrapper from "./DrawerWrapper";
import DrawerContainer from "./DrawerContainer";

interface DrawerProps {
  isOpen: boolean
  toggleHandler: () => void
}

const Drawer = ({isOpen, toggleHandler}: DrawerProps) => {
  return (
    <DrawerWrapper isOpen={isOpen} onClick={toggleHandler}>
      <DrawerContainer isOpen={isOpen}>
        <AuthLink/>
        <DrawerMenuItem to="/">
          <HomeIcon/>
          Home
        </DrawerMenuItem>
        <DrawerMenuItem to="/gallery">
          <GalleryIcon/>
          Gallery
        </DrawerMenuItem>
        <DrawerMenuItem to="/groups">
          <GroupsIcon/>
          Groups
        </DrawerMenuItem>
        <DrawerMenuItem to="/users">
          <UsersIcon/>
          Users
        </DrawerMenuItem>
      </DrawerContainer>
    </DrawerWrapper>
  )
};

export default Drawer;
