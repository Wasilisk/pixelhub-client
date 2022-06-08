import styled from "styled-components";

interface WrapperProps {
  width: string
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: 100%;
  width: ${({width}) => width};
  min-width: ${({width}) => width};
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: white;
  overflow-y: auto;
`;