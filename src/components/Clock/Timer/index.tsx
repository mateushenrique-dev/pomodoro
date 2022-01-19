import { useContext } from 'react';
import { ConfigContext } from '../../../context/config';
import { ActionButton, TimerTitle, TimerWrapper } from "./ styles";

interface TimerProps {
  startCount: () => void;
  pauseCount: () => void;
  minutes: number;
  seconds: number;
  counting: boolean;
}

const Timer = ({
  startCount,
  pauseCount,
  minutes,
  seconds,
  counting,
}: TimerProps) => {
  const {
    themeConfig: { font },
  } = useContext(ConfigContext);

  return (
    <TimerWrapper>
      <TimerTitle font={font} onClick={counting ? pauseCount : startCount}>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </TimerTitle>
      <ActionButton onClick={counting ? pauseCount : startCount} font={font}>
        {counting ? "Pause" : "Start"}
      </ActionButton>
    </TimerWrapper>
  );
};

export default Timer;