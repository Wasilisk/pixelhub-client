import styled from "styled-components";
import {Button} from "./Button";


export const DrawerButton = styled(Button)`
  height: 40px;
  width: 50px;
  padding: 0 15px;
  transition: all .2s;
  color: #212529;
  background-color: #eff1f2;
  
  &:hover {
    box-shadow: none;
    background-color: #dadfe1;
    border-color: #d3d8db;
    transform: none;
    filter: none;
  }

  & svg {
    color: black;
    height: 40px;
    width: 40px;
  }
`
