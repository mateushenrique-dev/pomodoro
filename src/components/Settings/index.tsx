import "./settings.scss";
import { IoMdSettings } from "react-icons/io";
import { Dispatch, SetStateAction } from 'react';

interface ISettingsProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Settings = ({ setModalOpen }: ISettingsProps) => {
  return (
    <button className="settings" onClick={() => setModalOpen(isModalOpen => !isModalOpen)}>
      <IoMdSettings size="27" color="#D7E0FF" />
    </button>
  );
};

export default Settings;
