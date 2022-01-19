import { useContext } from 'react';
import { ConfigContext } from '../../context/config';
import { Timers } from '../../types';
import ProgressCircle from './ProgressCircle';
import { ClockContainer, ClockWrapper } from "./styles";
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
    <ClockWrapper>
      <ClockContainer>
        <Timer {...clock} />
        <ProgressCircle color={color} />
      </ClockContainer>
    </ClockWrapper>
  );
};

export default Clock;
