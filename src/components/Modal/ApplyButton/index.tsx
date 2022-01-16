import { useContext } from 'react';
import { ModalContext } from '../../../context/modal';
import styles from "./apply.module.scss";

const ApplyButton = () => {
  const { applyChanges } = useContext(ModalContext)

  return (
    <button className={styles.applyButton} onClick={applyChanges}>
      Apply
    </button>
  );
}

export default ApplyButton