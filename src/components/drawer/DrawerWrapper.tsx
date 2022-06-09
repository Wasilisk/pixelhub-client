import styled from "styled-components";

interface DrawerWrapperProps {
  isOpen: boolean
}

const DrawerWrapper = styled.div<DrawerWrapperProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${({isOpen}) => isOpen ? "rgba(0,0,0,.45)" : ""};
  transition: all .15s ease-in-out;
`

export default DrawerWrapper;