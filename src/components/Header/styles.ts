import styled from "styled-components";

export const HeaderTitle = styled.h1`
  text-align: center;
  color: #d7e0ff;
  font-size: 24px;
  margin-top: 24px;

  @media (min-width: 426px) {
    font-size: 32px;
  }
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
