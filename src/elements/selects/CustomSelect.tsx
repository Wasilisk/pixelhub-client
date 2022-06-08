import styled from "styled-components";
import {ChangeEventHandler} from "react";
import {Input} from "../common";

export interface SelectPropsType {
  name: string,
  value:  number
  onChange:  ChangeEventHandler<HTMLInputElement>
}

export const CustomSelect = styled(Input).attrs({
  as: "select"
})`
  color: #495057;
  
  & > option {
    color: #495057;
    font-size: 14px;
  }
`;