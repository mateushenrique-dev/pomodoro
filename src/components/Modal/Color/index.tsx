import { useContext } from "react";
import { ModalContext } from "../../../context/modal";
import styles from "./color.module.scss";

const Color = () => {
  const { colorSelected, alterColor } = useContext(ModalContext);

  return (
    <div className={styles.color}>
      <h4 className={styles.title}>Color</h4>
      <ul className={styles.colorStyles}>
        <li
          className={`${styles.colorStyle} ${
            colorSelected === "#F87070" && styles.active
          }`}
          onClick={() => alterColor("#F87070")}
        ></li>
        <li
          className={`${styles.colorStyle} ${
            colorSelected === "#70F3F8" && styles.active
          }`}
          onClick={() => alterColor("#70F3F8")}
        ></li>
        <li
          className={`${styles.colorStyle} ${
            colorSelected === "#D881F8" && styles.active
          }`}
          onClick={() => alterColor("#D881F8")}
        ></li>
      </ul>
    </div>
  );
};

export default Color;
