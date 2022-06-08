import styled from "styled-components";
import {Link} from "react-router-dom";

export const CustomLink = styled(Link)`
  color: #2979ff;
  text-decoration: none;
  
  &:hover {
    color: #0052dc;
    text-decoration: underline;
  }
`