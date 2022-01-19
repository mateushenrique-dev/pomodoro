import styled from 'styled-components';


export const MenuWrapper = styled.nav`
  background: #161932;
  margin: 32px 24px;

  max-width: 373px;

  border-radius: 31px;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 6px;
  

  @media (max-width: 321px) {
    display: block;
    width: 250px;
    flex-shrink: 0;
  }
`;