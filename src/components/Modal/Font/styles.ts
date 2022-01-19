import styled, { css } from "styled-components";
import { Fonts } from '../../../types';

interface IFontsItemProps {
  font: Fonts;
  fontSelected: Fonts;
}

export const FontWrapper = styled.div`
  border-top: 1px solid #e3e1e1;

  @media (min-width: 426px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 24px 0;
  }
`;

export const FontsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 152px;
  gap: 16px;
  margin: 18px auto;
`;

export const FontTitle = styled.h4`
  padding-top: 0 !important;
`;

export const FontItem = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #eff1fa;
  color: #1e213f;
  opacity: 0.73;
  line-height: 19px;
  cursor: pointer;

  &:nth-child(2) {
    font-family: "Roboto Slab", serif;
    line-height: 20px;
  }

  &:nth-child(3) {
    font-family: "Space Mono", monospace;
    line-height: 22px;
  }

  ${({ font, fontSelected }: IFontsItemProps) => {
    if (font === fontSelected) {
      return css`
        background: #161932;
        color: #fff;
        opacity: 1;
      `;
    }
  }}
`;
