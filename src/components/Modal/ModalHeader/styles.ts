import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 28px;
  border-bottom: 1px solid #e3e1e1;
  color: #161932;

  @media (min-width: 426px) {
    font-size: 28px;
  }

  .closeIcon {
    cursor: pointer;
  }
`;