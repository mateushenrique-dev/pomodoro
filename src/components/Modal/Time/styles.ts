import styled from "styled-components";

export const TimeWrapper = styled.div`
  padding-bottom: 24px;

  .timeTitle {
    margin-bottom: 18px;
  }
`;

export const Times = styled.article`
  @media (min-width: 426px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TimeBreak = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 426px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const TitleBreak = styled.h3`
  font-size: 12px;
  line-height: 15px;

  color: #1e213f;

  mix-blend-mode: normal;
  opacity: 0.4;
  font-family: Kumbh Sans;

  @media (min-width: 426px) {
    display: flex;
    justify-content: space-between;
  }
`;
