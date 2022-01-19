import styled, { css } from 'styled-components';
import { Fonts } from '../../../types';

interface ITimerTitle {
  font: Fonts;
}

export const TimerTitle = styled.h1`
  font-size: 60px;
  color: #d7e0ff;

  @media (min-width: 457px) {
    font-size: 80px;
  }

  ${({ font }: ITimerTitle) => css`
    font-family: ${font};
  `}

  cursor: pointer;
`;

interface IActionButton {
  font: Fonts;
}

export const ActionButton = styled.button`
  font-size: 14px;
  color: #d7e0ff;
  text-transform: uppercase;
  letter-spacing: 13.125px;
  cursor: pointer;
  background: transparent;
  border: none;

  ${({ font }: IActionButton) => css`
    font-family: ${font};
  `}
`;

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  z-index: 100000;
`