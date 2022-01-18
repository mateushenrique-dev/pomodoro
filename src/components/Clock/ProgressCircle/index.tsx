import { Colors } from "../../../context/modal";
import styles from "./progress-circle.module.scss"

const ProgressCircle = ({ color }: { color: Colors }) => {
  return (
    <svg width={248} height={248} viewBox="0 0 250 250" className={styles.progress}>
      <circle
        cx={125}
        cy={125}
        r={110}
        stroke={color}
        strokeWidth={5}
        fill="transparent"
        style={{
          strokeDashoffset: 0,
        }}
      ></circle>
    </svg>
  );
};

export default ProgressCircle;
