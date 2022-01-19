import Time from "./Time";
import Font from "./Font";
import Color from "./Color";
import ModalHeader from "./ModalHeader";
import ApplyButton from "./ApplyButton";
import { ModalContainer, ModalWrapper } from "./styles";

const Modal = () => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader />
        <Time />
        <Font />
        <Color />
        <ApplyButton />
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
