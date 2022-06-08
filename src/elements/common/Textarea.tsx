import styled from "styled-components";
import {Input} from "./Input";

export const Textarea = styled(Input).attrs({
  as: "textarea"
})`
  height: 100px;
  font-family: 'Roboto', sans-serif;
  resize: vertical;
`;
