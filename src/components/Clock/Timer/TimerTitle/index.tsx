import styled, { css } from "styled-components";
import { Fonts } from "../../../../context/modal";

interface ITimerTitle {
  font: Fonts;
}

const TimerTitle = styled.h1`
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

export default TimerTitle;
