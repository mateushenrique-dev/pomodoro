import styles from "./select.module.scss";

import { ReactComponent as ArrowUp } from "../../../../assets/arrow_up.svg";
import { ReactComponent as ArrowDown } from "../../../../assets/arrow_down.svg";
import useSelect from './useSelect';
import { Timers } from '../../../../context/modal';

interface ISelectProps {
  initialValue: number;
  type: Timers;
}

const Select = ({ initialValue, type }: ISelectProps) => {
  const { increment, decrement, value } = useSelect(initialValue, type);

  return (
    <div className={styles.select}>
      <div className={styles.value}>
        <p className={styles.valueNumber}>{value}</p>
      </div>
      <div className={styles.arrows}>
        <button
          className={styles.increment}
          title="increment"
          onClick={increment}
        >
          <ArrowUp />
        </button>
        <button
          className={styles.decrement}
          title="decrement"
          onClick={decrement}
        >
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Select;
