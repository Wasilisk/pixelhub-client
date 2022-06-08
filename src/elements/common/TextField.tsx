import React from 'react';
import {Input} from "./Input";
import {FieldError} from "./FieldError";
import {Label} from "./Label";
import styled from "styled-components";

interface TextFieldType {
  label: string,
  value: string,
  name: string,
  type?: string
  placeholder: string,
  error: string | undefined,
  touched: boolean | undefined,
  onChange: (e: React.ChangeEvent<any>) => void,
}


const TextFieldContainer = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

export const TextField = (props: TextFieldType) => {
  const isError = props.touched && Boolean(props.error)
  return (
    <TextFieldContainer>
      <Label>{props.label}</Label>
      <Input
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        type={props.type}
        isError={isError}
        onChange={props.onChange}
      />
      {
        isError ? <FieldError message={props.error}/> : null
      }
    </TextFieldContainer>
  );
};