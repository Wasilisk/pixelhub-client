import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  position: relative;
  font-weight: 500;
  padding: 0.5rem 0.9rem;
  line-height: 26px;
  font-size: 14px;
  border-radius: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .15s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    filter: brightness(130%);
  }
`