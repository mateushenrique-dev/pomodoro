import { useContext } from 'react';
import { ConfigContext } from '../../context/config';
import { Timers } from '../../context/modal';
import "./clock.scss";
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
    <main className="clock">
      <div className="subClock">
        <Timer {...clock} />
        <svg className="progress" width={366} height={366}>
          <circle
            cx="183"
            cy="185"
            r="160"
            stroke={color}
            strokeWidth={15}
            fill="transparent"
            style={{
              strokeDashoffset: 0,
            }}
          ></circle>
        </svg>
      </div>
    </main>
  );
};

export default Clock;
