import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 60px;
  padding: 10px 20px;
  background-color: #fff;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eff1f2;

  .left_block {
    width: 210px;
    display: flex;
    justify-content: start;
    align-items: center;

    & img {
      height: 25px;
      margin-left: 20px;
    }
  }

  @media (max-width: 425px) {
    font-size: 0;
    padding-right: 70px;
    & svg {
      height: 20px;
      width: 20px;
      margin: 0
    }
    
    .left_block {
      width: 100%;
      img {
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
`;

export default HeaderContainer;