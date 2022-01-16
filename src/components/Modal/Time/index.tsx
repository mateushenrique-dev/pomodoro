import { useContext } from "react";
import { ConfigContext } from "../../../context/config";
import Select from "./Select";
import styles from "./time.module.scss";

const Time = () => {
  const { timers } = useContext(ConfigContext);

  return (
    <div className={styles.time}>
      <h4>Time (Minutes)</h4>
      
      <article className={styles.times}>
        <div className={styles.pomodoro}>
          <h3 className={styles.title}>Pomodoro</h3>
          <Select
            initialValue={Math.floor((timers.pomodoro / 1000 / 60) << 0)}
            type='pomodoro'
          />
        </div>
        <div className={styles.shortBreak}>
          <p className={styles.title}>Short Break</p>
          <Select
            initialValue={Math.floor((timers.shortBreak / 1000 / 60) << 0)}
            type='shortBreak'
          />
        </div>
        <div className={styles.longBreak}>
          <p className={styles.title}>Long Break</p>
          <Select
            initialValue={Math.floor((timers.longBreak / 1000 / 60) << 0)}
            type="longBreak"
          />
        </div>
      </article>
    </div>
  );
};

export default Time;
