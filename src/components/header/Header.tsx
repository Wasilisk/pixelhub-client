import React, {useState} from 'react';
import AuthButton from "../../elements/buttons/AuthButton";
import {RiUser3Line} from "react-icons/ri";
import HeaderMenu from "../HeaderMenu";
import {IoMenu} from "react-icons/io5";
import {DrawerButton} from "../../elements/buttons";
import PixelHubLogo from '../../assets/logo/pixelhub_logo.png'
import Drawer from "../drawer/Drawer";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeaderContainer from "./HeaderContainer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const showMenu = useMediaQuery("(min-width: 768px)");
  const showAuthButton = useMediaQuery("(min-width: 450px)");

  const toggleHandler = () => setIsDrawerOpen(!isDrawerOpen)

  return (
    <>
      <HeaderContainer>
        <div className="left_block">
          <DrawerButton onClick={toggleHandler}>
            <IoMenu/>
          </DrawerButton>
          <img src={PixelHubLogo} alt="PixelHub logo"/>
        </div>
        {
          showMenu
            ? <HeaderMenu/>
            : null
        }
        {
          showAuthButton
            ? <AuthButton size="small">
              <RiUser3Line/>
              login / signup
            </AuthButton>
            : null
        }
      </HeaderContainer>
      <Drawer
        isOpen={isDrawerOpen}
        toggleHandler={toggleHandler}
      />
    </>
  );
};

export default Header;