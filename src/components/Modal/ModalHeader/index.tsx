import { Dispatch, SetStateAction } from "react";
import { ReactComponent as CloseIcon } from "../../../assets/close.svg";
import styles from "./index.module.scss"

interface IHeaderProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalHeader = ({ setModalOpen }: IHeaderProps) => (
  <div className={styles.header}>
    <h3 className={styles.title}>Settings</h3>
    <CloseIcon className="closeIcon" onClick={() => setModalOpen(false)} />
  </div>
);

export default ModalHeader;
