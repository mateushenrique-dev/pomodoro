interface TimerProps {
  startCount: () => void;
  pauseCount: () => void
  minutes: number;
  seconds: number;
  counting: boolean;
}

const Timer = ({ startCount, pauseCount, minutes, seconds, counting }: TimerProps) => (
  <div className="timer">
    <h1 className="time">
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </h1>
    <p className="action" onClick={counting ? pauseCount : startCount}>
      {counting ? 'Pause' : 'Start'}
    </p>
  </div>
);

export default Timer;