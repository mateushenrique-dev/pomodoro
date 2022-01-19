import styled, { css } from "styled-components";
import { Colors } from '../../../types';

interface IColorItemProps {
  colorFrom: Colors;
  colorSelected: Colors;
}

export const ColorWrapper = styled.div`
  border-top: 1px solid #e3e1e1;

  @media (min-width: 426px) {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    justify-content: space-between;

    padding: 24px 0;
  }
`;

export const ColorTitle = styled.h4`
  @media (min-width: 426px) {
    padding-top: 0 !important;
  }
`;

export const ColorsList = styled.ul`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 152px;
  gap: 16px;
  margin: 18px auto;

  @media (min-width: 426px) {
    margin: 18px 0;
  }
`;

export const ColorItem = styled.li`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:nth-child(1) {
    background: #f87070;
  }

  &:nth-child(2) {
    background: #70f3f8;
  }

  &:nth-child(3) {
    background: #d881f8;
  }

  ${({ colorFrom, colorSelected }: IColorItemProps) => {
    console.log(colorFrom, colorSelected);

    if (colorFrom === colorSelected) {
      return css`
        position: relative;

        &::before {
          content: "✔️";
          position: absolute;

          display: inline-block;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: oldlace;
          background: url("../../../assets/check.svg") no-repeat center;
        }
      `;
    }
  }}
`;
