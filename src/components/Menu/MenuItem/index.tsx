import styled, { css } from "styled-components";
import { Fonts, Timers } from '../../../types';

interface IThemeConfig {
  color: string;
  font: Fonts;
}

interface IMenuItemProps {
  actualTime: string;
  type: Timers;
  themeConfig: IThemeConfig;
}

const fontStyle = {
  "Kumbh Sans": css`
    font-family: "Kumbh Sans", sans-serif;
  `,
  "Roboto Slab": css`
    font-family: "Roboto Slab", sans-serif;
  `,
  "Space Mono": css`
    font-family: "Space Mono", sans-serif;
  `,
};

const MenuItem = styled.li`
  padding: 13px 23px;
  color: #d7e0ff;
  font-size: 12px;
  flex-shrink: 1;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  ${({ themeConfig: { font } }: IMenuItemProps) => fontStyle[font]}

  ${({ actualTime, type, themeConfig: { color, font } }: IMenuItemProps) => {
    if (actualTime === type) {
      return css`
        background: ${color};
        color: #1e213f;
        border-radius: 26px;
      `;
    }
  }}
  
  @media (min-width: 426px) {
    font-size: 14px;
    flex-shrink: 0;
  }
`;

export default MenuItem;
