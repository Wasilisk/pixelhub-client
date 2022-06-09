import styled from "styled-components";

interface DrawerProps {
  isOpen: boolean
}

const DrawerContainer = styled.div<DrawerProps>`
  height: calc(100% - 60px);
  width: 250px;
  position: fixed;
  box-sizing: border-box;
  left: ${({isOpen}) => isOpen ? "0px" : "-250px"};
  z-index: 2;
  padding: 20px;
  overflow-y: scroll;
  margin: 0;
  max-height: 100%;
  background-color: #fff;
  transition: all .15s ease-in-out;
  
  &::-webkit-scrollbar-thumb {
    background: white;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #cbcbcb;
    }
  }
  
  & .active {
    background-color: #e0ecff;
    color: #2979ff;
    border-radius: 12px;
  }
`

export default DrawerContainer;
