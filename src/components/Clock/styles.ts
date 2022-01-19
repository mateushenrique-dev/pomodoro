import styled from "styled-components";

export const ClockWrapper = styled.section`
  width: 250px;
  height: 250px;

  border-radius: 50%;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;

  margin: 32px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 426px) {
    width: calc(410px - 30px);
    height: calc(410px - 30px);

    margin: 0px auto;
  }
`;

export const ClockContainer = styled.div`
  width: 267.8px;
  height: 267.8px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: #161932;

  @media (min-width: 426px) {
    width: calc(366px - 20px);
    height: calc(366px - 20px);
  }
`;
