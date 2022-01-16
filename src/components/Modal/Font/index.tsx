import { useContext } from "react";
import { ModalContext } from "../../../context/modal";
import styles from "./font.module.scss";

const Font = () => {
  const { fontSelected, alterFont } = useContext(ModalContext);

  return (
    <div className={styles.font}>
      <h4 className={styles.title}>Font</h4>
      <ul className={styles.fontStyles}>
        <li
          className={`${styles.fontStyle} ${
            fontSelected === "Kumbh Sans" && styles.active
          }`}
          onClick={() => alterFont("Kumbh Sans")}
        >
          Aa
        </li>
        <li
          className={`${styles.fontStyle} ${
            fontSelected === "Roboto Slab" && styles.active
          }`}
          onClick={() => alterFont("Roboto Slab")}
        >
          Aa
        </li>
        <li
          className={`${styles.fontStyle} ${
            fontSelected === "Space Mono" && styles.active
          }`}
          onClick={() => alterFont("Space Mono")}
        >
          Aa
        </li>
      </ul>
    </div>
  );
};

export default Font;
