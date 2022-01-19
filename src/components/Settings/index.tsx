import { useContext } from 'react';
import { IoMdSettings } from "react-icons/io";
import { ModalContext } from '../../context/modal';
import { ConfigButton } from './styles';

const Settings = () => {
  const { setModalOpen } = useContext(ModalContext)

  return (
    <ConfigButton
      onClick={() => setModalOpen((isModalOpen) => !isModalOpen)}
    >
      <IoMdSettings size="27" color="#D7E0FF" />
    </ConfigButton>
  );
};

export default Settings;
