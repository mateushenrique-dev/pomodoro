import "./modal.scss";

import { Dispatch, SetStateAction } from "react";
import Time from "./Time";
import Font from "./Font";
import Color from "./Color";
import ModalHeader from "./ModalHeader";
import { ModalContextProvider } from '../../context/modal';
import ApplyButton from './ApplyButton';

interface IModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ setModalOpen }: IModalProps) => {

  return (
    <article className="modalContainer">
      <ModalContextProvider setModalOpen={setModalOpen}>
        <div className="modal">
          <ModalHeader setModalOpen={setModalOpen} />
          <Time />
          <Font />
          <Color />
          <ApplyButton />
        </div>
      </ModalContextProvider>
    </article>
  );
};

export default Modal;
