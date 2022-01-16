import { Dispatch, SetStateAction } from "react";
import { ReactComponent as CloseIcon } from "../../../assets/close.svg";
import "./index.scss";

interface IHeaderProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalHeader = ({ setModalOpen }: IHeaderProps) => (
  <div className="header">
    <h3>Settings</h3>
    <CloseIcon className="closeIcon" onClick={() => setModalOpen(false)} />
  </div>
);

export default ModalHeader;
