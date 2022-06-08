import styled from "styled-components";
import {Button} from "./Button";

export const SubmitButton = styled(Button)`
  height: 50px;
  background-color: #2979ff;
  border-color: #2979ff;
  margin-top: 1.5rem;
  font-size: 20px;
  
  &:hover {
    background-color: #0361ff;
    border-color: #005cf5;
  }
  
  &:disabled {
    background-color: #66a9ff;
    padding: 0;
  }
`