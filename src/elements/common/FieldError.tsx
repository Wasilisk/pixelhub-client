import React from 'react';
import styled from "styled-components";
import {MdError} from "react-icons/md";

interface FieldErrorProps {
  message: string | undefined
}

const FieldErrorContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 2px;
  
  span {
    color: #e3342f;
    font-size: 14px;
    margin-left: 5px;
    padding-top: 2px;
  }
  
  svg {
    fill: #e3342f;
  }
`;

export const FieldError = ({message}: FieldErrorProps) => {
  return (
    <FieldErrorContainer>
      <MdError/>
      <span>{message}</span>
    </FieldErrorContainer>
  );
};