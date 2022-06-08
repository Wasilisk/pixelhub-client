import styled from "styled-components";

interface InputPropsType {
  isError?: boolean | undefined
}

export const Input = styled.input<InputPropsType>`
  height: auto;
  padding: 10px 15px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #edf1f4;
  font-size: 16px;
  width: 100%;
  border: ${({isError}) => isError ? '1px solid #e3342f' : '1px solid #edf1f4'};
  line-height: 25px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  
  &:focus {
    outline: none;
    background-color: #fff;
    border: ${({isError}) => isError ? '1px solid #e3342f' : '1px solid #a9c9ff'};
    outline: 0;
  }
`;