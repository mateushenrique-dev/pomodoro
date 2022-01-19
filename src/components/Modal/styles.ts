import styled from 'styled-components';

export const ModalWrapper = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100000;

  overflow-y: scroll;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 327px;
  padding: 24px;
  border-radius: 15px;
  position: relative;

  @media (min-width: 426px) {
    width: 540px;
  }
`;