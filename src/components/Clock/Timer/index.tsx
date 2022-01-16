import { useContext } from 'react';
import { ConfigContext } from '../../../context/config';
import ActionButton from './ActionButton';
import TimerTitle from './TimerTitle';

interface TimerProps {
  startCount: () => void;
  pauseCount: () => void
  minutes: number;
  seconds: number;
  counting: boolean;
}

const Timer = ({ startCount, pauseCount, minutes, seconds, counting }: TimerProps) => {
  
  const { themeConfig: { font } } = useContext(ConfigContext)

  return (
    <div className="timer">
      <TimerTitle
        font={font}
      >
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </TimerTitle>
      <ActionButton
        onClick={counting ? pauseCount : startCount}
        font={font}
      >
        {counting ? "Pause" : "Start"}
      </ActionButton>
    </div>
  );};

export default Timer;