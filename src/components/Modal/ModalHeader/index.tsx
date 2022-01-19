import { useContext } from 'react';
import { ReactComponent as CloseIcon } from "../../../assets/close.svg";
import { ModalContext } from '../../../context/modal';
import { HeaderWrapper } from "./styles";

const ModalHeader = () => {
  const { setModalOpen } = useContext(ModalContext)

  return (
    <HeaderWrapper>
      <h3>Settings</h3>
      <CloseIcon className="closeIcon" onClick={() => setModalOpen(false)} />
    </HeaderWrapper>
  );
};

export default ModalHeader;
