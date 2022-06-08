import styled from "styled-components";

const DividerWithText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0 15px 0;
  
  & > span {
    background-color: #fff;
    padding: 0 10px;
    display: inline-block;
    position: relative;
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.6;
  }
  
  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #eee;
  }
`

export default DividerWithText;