import styled, { css } from "styled-components";
import { Fonts } from "../../../../context/modal";

interface IActionButton {
  font: Fonts;
}

const ActionButton = styled.button`
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

export default ActionButton;
