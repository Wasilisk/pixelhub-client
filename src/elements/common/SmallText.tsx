import styled from "styled-components";
import {CustomLink} from "./CustomLink";

export const SmallText = styled.small`
  display: inline-block;
  color: #6c757d;
  margin-top: 0.25rem;
  margin-right: 10px;
  font-size: 12px;
  
  ${CustomLink} {
    margin-left: 5px;
  }
`;
