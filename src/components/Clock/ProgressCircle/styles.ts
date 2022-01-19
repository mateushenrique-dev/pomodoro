import styled from 'styled-components';

export const Progress = styled.svg`
  display: flex;
  align-items: center;

  position: absolute;

  @media (min-width: 425px) {
    width: 370px;
    height: 370px;
  }
`;

export const Circle = styled.circle`
  stroke-dasharray: 1005;
  @media (min-width: 425px) {
    stroke-width: 7px;
  }
`;