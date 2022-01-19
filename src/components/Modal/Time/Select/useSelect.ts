import { ModalContext } from "./../../../../context/modal";
import { useContext, useEffect, useState } from "react";
import { Timers } from '../../../../types';
function useSelect(initialValue: number, type: Timers) {
  const [value, setValue] = useState<number>(initialValue);
  const { alterTimers } = useContext(ModalContext);

  function increment() {
    setValue((value) => (value >= 60 ? value : value + 1));
  }

  function decrement() {
    setValue((value) => (value === 0 ? value : value - 1));
  }

  useEffect(() => {
    alterTimers(type, value * 60000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {
    decrement,
    increment,
    value,
  };
}

export default useSelect;
