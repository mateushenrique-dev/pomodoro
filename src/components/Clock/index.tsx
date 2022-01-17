import { useContext } from 'react';
import { ConfigContext } from '../../context/config';
import { Timers } from '../../context/modal';
import "./clock.scss";
import ProgressCircle from './ProgressCircle';
import Timer from "./Timer";
import useClock from "./useClock";

const Clock = () => {
  const {
    actualTime,
    timers,
    themeConfig: { color },
  } = useContext(ConfigContext);
  const clock = useClock(timers[actualTime as Timers]);

  return (
    <section className="clock">
      <div className="subClock">
        <Timer {...clock} />
        <ProgressCircle color={color} />
      </div>
    </section>
  );
};

export default Clock;
