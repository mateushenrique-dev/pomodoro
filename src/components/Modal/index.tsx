import "./modal.scss";

import { Dispatch, SetStateAction } from "react";
import Time from "./Time";
import Font from "./Font";
import Color from "./Color";
import ModalHeader from "./ModalHeader";

interface IModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ setModalOpen }: IModalProps) => {
  return (
    <article className="modalContainer">
      <div className="modal">
        <ModalHeader setModalOpen={setModalOpen} />
        <Time />
        <Font />
        <Color />
        <button className="applyButton">Apply</button>
      </div>
    </article>
  );
};

export default Modal;
